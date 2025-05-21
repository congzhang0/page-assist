/**
 * Page Assist 数据提供者API使用示例
 * 这是一个简单的示例，展示如何使用数据提供者API从浏览器扩展中拉取数据
 */

// 扩展ID，需要替换为实际的Page Assist扩展ID
const EXTENSION_ID = 'your_extension_id_here';

// 访问令牌，需要从Page Assist扩展的设置页面获取
const ACCESS_TOKEN = 'your_access_token_here';

// 客户端ID，用于标识当前客户端
const CLIENT_ID = 'client_' + Math.random().toString(36).substring(2, 15);

/**
 * 发送API请求
 * @param {Object} request - API请求对象
 * @returns {Promise<Object>} - API响应对象
 */
async function sendApiRequest(request) {
  return new Promise((resolve, reject) => {
    // 添加访问令牌和客户端ID
    const fullRequest = {
      ...request,
      accessToken: ACCESS_TOKEN,
      clientId: CLIENT_ID
    };
    
    // 发送消息到扩展
    chrome.runtime.sendMessage(
      EXTENSION_ID,
      fullRequest,
      response => {
        if (chrome.runtime.lastError) {
          reject(new Error(`API请求失败: ${chrome.runtime.lastError.message}`));
        } else {
          resolve(response);
        }
      }
    );
  });
}

/**
 * 获取单个页面
 * @param {string} pageId - 页面ID
 * @returns {Promise<Object>} - 页面数据
 */
async function getPage(pageId) {
  const request = {
    type: 'get',
    entityType: 'page',
    id: pageId
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取页面失败: ${response.error?.message || '未知错误'}`);
  }
  
  return response.data;
}

/**
 * 获取页面列表
 * @param {Object} options - 查询选项
 * @returns {Promise<Object>} - 页面列表和元数据
 */
async function getPages(options = {}) {
  const request = {
    type: 'list',
    entityType: 'page',
    query: {
      filter: options.filter || {},
      page: options.page || 1,
      pageSize: options.pageSize || 10,
      sort: options.sort || { field: 'updatedAt', order: 'desc' },
      search: options.search || '',
      fields: options.fields || []
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取页面列表失败: ${response.error?.message || '未知错误'}`);
  }
  
  return {
    pages: response.data,
    meta: response.meta
  };
}

/**
 * 获取页面计数
 * @param {Object} filter - 过滤条件
 * @returns {Promise<number>} - 页面数量
 */
async function getPageCount(filter = {}) {
  const request = {
    type: 'count',
    entityType: 'page',
    query: {
      filter
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取页面计数失败: ${response.error?.message || '未知错误'}`);
  }
  
  return response.data.count;
}

/**
 * 获取所有标签
 * @returns {Promise<string[]>} - 标签列表
 */
async function getAllTags() {
  const request = {
    type: 'tags',
    entityType: 'page'
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取标签失败: ${response.error?.message || '未知错误'}`);
  }
  
  return response.data;
}

/**
 * 同步数据
 * @param {number} lastSyncTime - 上次同步时间
 * @param {boolean} fullSync - 是否全量同步
 * @returns {Promise<Object>} - 同步结果
 */
async function syncData(lastSyncTime = 0, fullSync = false) {
  const request = {
    type: 'sync',
    entityType: 'page',
    sync: {
      lastSyncTime,
      fullSync,
      maxRecords: 100
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`同步数据失败: ${response.error?.message || '未知错误'}`);
  }
  
  return {
    changes: response.data.changes,
    syncTime: response.meta.syncTime,
    hasMore: response.meta.hasMore
  };
}

/**
 * 获取变更记录
 * @param {number} lastSyncTime - 上次同步时间
 * @returns {Promise<Object>} - 变更记录
 */
async function getChanges(lastSyncTime = 0) {
  const request = {
    type: 'changes',
    entityType: 'page',
    sync: {
      lastSyncTime,
      maxRecords: 50
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取变更记录失败: ${response.error?.message || '未知错误'}`);
  }
  
  return {
    changes: response.data.changes,
    syncTime: response.meta.syncTime,
    hasMore: response.meta.hasMore
  };
}

// 使用示例
async function example() {
  try {
    // 1. 获取页面计数
    const count = await getPageCount();
    console.log(`总页面数: ${count}`);
    
    // 2. 获取页面列表
    const { pages, meta } = await getPages({ pageSize: 5 });
    console.log(`获取到${pages.length}个页面，总页数: ${meta.pageCount}`);
    
    // 3. 获取单个页面
    if (pages.length > 0) {
      const pageId = pages[0].id;
      const page = await getPage(pageId);
      console.log(`页面标题: ${page.title}, URL: ${page.url}`);
    }
    
    // 4. 获取所有标签
    const tags = await getAllTags();
    console.log(`标签列表: ${tags.join(', ')}`);
    
    // 5. 同步数据
    const lastSyncTime = localStorage.getItem('lastSyncTime') || 0;
    const syncResult = await syncData(lastSyncTime);
    console.log(`同步完成，获取到${syncResult.changes.length}个变更`);
    
    // 保存同步时间
    localStorage.setItem('lastSyncTime', syncResult.syncTime);
    
    // 6. 获取变更记录
    const changes = await getChanges(lastSyncTime);
    console.log(`获取到${changes.changes.length}个变更记录`);
    
  } catch (error) {
    console.error('示例执行失败:', error);
  }
}

// 运行示例
// example();
