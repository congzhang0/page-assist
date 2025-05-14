/**
 * 保存页面数据库模块
 * 使用 IndexedDB 存储保存的网页内容
 */

// 数据库名称和版本
const DB_NAME = 'page-assist-saved-pages';
const DB_VERSION = 1;

// 存储对象名称
const STORE_NAME = 'pages';

// 保存的页面类型定义
export interface SavedPage {
  id: string;
  title: string;
  url: string;
  content: string;
  html: string;
  type: string;
  tags: string[];
  notes: string;
  createdAt: number;
  updatedAt: number;
  favicon?: string;
  screenshot?: string;
}

// 保存页面时的输入参数
export interface SavePageParams {
  title: string;
  url: string;
  content: string;
  html: string;
  type: string;
  tags?: string[];
  notes?: string;
  favicon?: string;
  screenshot?: string;
}

// 查询参数
export interface QueryParams {
  tags?: string[];
  searchText?: string;
  limit?: number;
  offset?: number;
}

/**
 * 生成唯一ID
 */
export const generateID = () => {
  return "page_xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
};

/**
 * 打开数据库连接
 */
const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      reject(new Error('无法打开数据库'));
    };

    request.onsuccess = (event) => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = request.result;
      
      // 如果存储对象不存在，则创建
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        
        // 创建索引
        store.createIndex('url', 'url', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
        store.createIndex('tags', 'tags', { unique: false, multiEntry: true });
      }
    };
  });
};

/**
 * 保存页面数据库类
 */
export class SavedPagesDB {
  /**
   * 保存页面到数据库
   */
  async savePage(params: SavePageParams): Promise<SavedPage> {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      const now = Date.now();
      const page: SavedPage = {
        id: generateID(),
        title: params.title,
        url: params.url,
        content: params.content,
        html: params.html,
        type: params.type,
        tags: params.tags || [],
        notes: params.notes || '',
        createdAt: now,
        updatedAt: now,
        favicon: params.favicon,
        screenshot: params.screenshot
      };
      
      const request = store.add(page);
      
      request.onsuccess = () => {
        resolve(page);
      };
      
      request.onerror = () => {
        reject(new Error('保存页面失败'));
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  /**
   * 获取所有保存的页面
   */
  async getAllPages(params?: QueryParams): Promise<SavedPage[]> {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('updatedAt');
      
      const request = index.openCursor(null, 'prev');
      const pages: SavedPage[] = [];
      
      request.onsuccess = (event) => {
        const cursor = request.result;
        
        if (cursor) {
          const page = cursor.value as SavedPage;
          
          // 如果有查询参数，进行过滤
          let shouldInclude = true;
          
          if (params) {
            // 按标签过滤
            if (params.tags && params.tags.length > 0) {
              shouldInclude = params.tags.some(tag => page.tags.includes(tag));
            }
            
            // 按搜索文本过滤
            if (shouldInclude && params.searchText) {
              const searchText = params.searchText.toLowerCase();
              shouldInclude = 
                page.title.toLowerCase().includes(searchText) || 
                page.content.toLowerCase().includes(searchText) ||
                page.notes.toLowerCase().includes(searchText);
            }
          }
          
          if (shouldInclude) {
            pages.push(page);
          }
          
          cursor.continue();
        } else {
          // 应用分页
          if (params && (params.offset !== undefined || params.limit !== undefined)) {
            const offset = params.offset || 0;
            const limit = params.limit || pages.length;
            resolve(pages.slice(offset, offset + limit));
          } else {
            resolve(pages);
          }
        }
      };
      
      request.onerror = () => {
        reject(new Error('获取页面失败'));
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  /**
   * 根据ID获取页面
   */
  async getPageById(id: string): Promise<SavedPage | null> {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      
      const request = store.get(id);
      
      request.onsuccess = () => {
        resolve(request.result || null);
      };
      
      request.onerror = () => {
        reject(new Error('获取页面失败'));
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  /**
   * 更新页面
   */
  async updatePage(id: string, updates: Partial<SavedPage>): Promise<SavedPage> {
    const db = await openDatabase();
    
    return new Promise(async (resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      // 先获取现有页面
      const getRequest = store.get(id);
      
      getRequest.onsuccess = () => {
        if (!getRequest.result) {
          reject(new Error('页面不存在'));
          return;
        }
        
        const page = getRequest.result as SavedPage;
        const updatedPage: SavedPage = {
          ...page,
          ...updates,
          updatedAt: Date.now()
        };
        
        const updateRequest = store.put(updatedPage);
        
        updateRequest.onsuccess = () => {
          resolve(updatedPage);
        };
        
        updateRequest.onerror = () => {
          reject(new Error('更新页面失败'));
        };
      };
      
      getRequest.onerror = () => {
        reject(new Error('获取页面失败'));
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  /**
   * 删除页面
   */
  async deletePage(id: string): Promise<void> {
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      const request = store.delete(id);
      
      request.onsuccess = () => {
        resolve();
      };
      
      request.onerror = () => {
        reject(new Error('删除页面失败'));
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  /**
   * 获取所有标签
   */
  async getAllTags(): Promise<string[]> {
    const pages = await this.getAllPages();
    const tagSet = new Set<string>();
    
    pages.forEach(page => {
      page.tags.forEach(tag => tagSet.add(tag));
    });
    
    return Array.from(tagSet);
  }
}

// 导出单例实例
export const savedPagesDB = new SavedPagesDB();
