/**
 * 保存页面数据库模块
 * 使用 IndexedDB 存储保存的网页内容
 */
import logger from '@/utils/logger';

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
  summary?: string;       // 页面内容摘要
  rating?: number;        // 内容质量评分（1-5星）
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
  summary?: string;       // 页面内容摘要
  rating?: number;        // 内容质量评分（1-5星）
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
  logger.debug(`正在打开数据库: ${DB_NAME}, 版本: ${DB_VERSION}`);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      const error = request.error;
      logger.error('打开数据库失败', {
        errorName: error?.name,
        errorMessage: error?.message
      });
      reject(new Error(`无法打开数据库: ${error?.message || '未知错误'}`));
    };

    request.onsuccess = (event) => {
      logger.debug('数据库连接成功打开');
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      logger.info(`数据库升级: 从版本 ${event.oldVersion} 到 ${event.newVersion}`);
      const db = request.result;

      // 如果存储对象不存在，则创建
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        logger.info(`创建存储对象: ${STORE_NAME}`);
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });

        // 创建索引
        logger.debug('创建数据库索引');
        store.createIndex('url', 'url', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
        store.createIndex('updatedAt', 'updatedAt', { unique: false });
        store.createIndex('tags', 'tags', { unique: false, multiEntry: true });
        logger.info('数据库结构初始化完成');
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
   * 如果URL已存在，则更新现有记录
   */
  async savePage(params: SavePageParams): Promise<SavedPage> {
    logger.debug('开始保存页面到数据库', {
      title: params.title,
      url: params.url,
      type: params.type,
      contentLength: params.content?.length,
      htmlLength: params.html?.length,
      hasScreenshot: !!params.screenshot
    });

    try {
      // 首先检查URL是否已存在
      const existingPage = await this.getPageByUrl(params.url);

      if (existingPage) {
        logger.info('URL已存在，将更新现有记录', {
          url: params.url,
          existingId: existingPage.id
        });

        // 更新现有记录
        const updatedPage = await this.updatePage(existingPage.id, {
          title: params.title,
          tags: params.tags,
          notes: params.notes,
          summary: params.summary,
          rating: params.rating,
          // 添加其他需要更新的字段
          content: params.content,
          html: params.html,
          type: params.type,
          favicon: params.favicon,
          screenshot: params.screenshot
        } as Partial<SavedPage>);

        logger.info('成功更新现有页面', {
          id: updatedPage.id,
          url: updatedPage.url
        });

        return updatedPage;
      }

      // 如果URL不存在，则添加新记录
      const db = await openDatabase();

      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        transaction.onerror = (event) => {
          const error = transaction.error;
          logger.error('数据库事务错误', {
            errorName: error?.name,
            errorMessage: error?.message
          });
          reject(new Error(`数据库事务错误: ${error?.message || '未知错误'}`));
        };

        const now = Date.now();
        const pageId = generateID();
        logger.debug(`生成页面ID: ${pageId}`);

        const page: SavedPage = {
          id: pageId,
          title: params.title,
          url: params.url,
          content: params.content,
          html: params.html,
          type: params.type,
          tags: params.tags || [],
          notes: params.notes || '',
          summary: params.summary,
          rating: params.rating,
          createdAt: now,
          updatedAt: now,
          favicon: params.favicon,
          screenshot: params.screenshot
        };

        logger.debug('准备添加新页面到数据库', { id: page.id });
        const request = store.add(page);

        request.onsuccess = () => {
          logger.info('新页面成功保存到数据库', { id: page.id, title: page.title });
          resolve(page);
        };

        request.onerror = () => {
          const error = request.error;
          logger.error('保存页面失败', {
            errorName: error?.name,
            errorMessage: error?.message
          });
          reject(new Error(`保存页面失败: ${error?.message || '未知错误'}`));
        };

        transaction.oncomplete = () => {
          logger.debug('数据库事务完成，关闭数据库连接');
          db.close();
        };
      });
    } catch (error) {
      logger.error('保存页面过程中发生错误', error);
      throw error;
    }
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
   * 根据URL获取页面
   * @param url 页面URL
   * @returns 匹配的页面，如果没有找到则返回null
   */
  async getPageByUrl(url: string): Promise<SavedPage | null> {
    logger.debug('根据URL查找页面', { url });

    try {
      // 获取所有页面
      const pages = await this.getAllPages();

      // 查找完全匹配URL的页面
      const exactMatch = pages.find(page => page.url === url);
      if (exactMatch) {
        logger.debug('找到完全匹配的页面', { id: exactMatch.id, url });
        return exactMatch;
      }

      logger.debug('未找到匹配的页面', { url });
      return null;
    } catch (error) {
      logger.error('根据URL查找页面失败', error);
      return null;
    }
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
