/**
 * Page Assist 数据提供者API测试
 * 这是一个测试脚本，用于测试数据提供者API
 */

// 检查环境和Chrome API可用性
const checkEnvironment = () => {
  console.log('检查测试环境...');
  
  // 检查是否在浏览器环境中
  if (typeof window === 'undefined') {
    return '错误: 此脚本必须在浏览器环境中运行。';
  }
  
  // 检查chrome对象是否存在
  if (typeof chrome === 'undefined') {
    return '错误: 未检测到chrome对象。请确保在Chrome浏览器中运行此脚本。';
  }
  
  // 检查chrome.runtime是否存在
  if (!chrome.runtime) {
    return '错误: 未检测到chrome.runtime对象。请确保在Chrome浏览器中运行此脚本。';
  }
  
  // 检查chrome.runtime.sendMessage是否存在
  if (typeof chrome.runtime.sendMessage !== 'function') {
    return '错误: chrome.runtime.sendMessage方法不可用。可能是由于以下原因：\n' +
           '1. 此页面不是作为扩展的一部分加载的\n' +
           '2. 缺少适当的权限\n' +
           '3. 在本地文件URL中打开，需要通过Web服务器访问';
  }
  
  console.log('环境检查通过: Chrome API可用');
  return null;
};

// 扩展ID，已替换为实际的Page Assist扩展ID
const EXTENSION_ID = 'ffiigpcapfgmbpcggdfklpikceehbffd';

// 访问令牌，已替换为实际的访问令牌
const ACCESS_TOKEN = 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m';

// 客户端ID，用于标识当前客户端
const CLIENT_ID = 'client_' + Math.random().toString(36).substring(2, 15);

// 检查扩展是否可用
const checkExtension = async () => {
  try {
    console.log(`检查扩展ID: ${EXTENSION_ID} 是否可用...`);
    
    return new Promise((resolve) => {
      try {
        // 尝试向扩展发送一个简单的ping消息
        chrome.runtime.sendMessage(
          EXTENSION_ID,
          { type: 'ping' },
          response => {
            if (chrome.runtime.lastError) {
              console.error('扩展检查错误:', chrome.runtime.lastError);
              resolve(`错误: 无法连接到扩展。原因: ${chrome.runtime.lastError.message}`);
            } else {
              console.log('扩展连接成功:', response);
              resolve(null);
            }
          }
        );
      } catch (error) {
        console.error('发送ping消息时出错:', error);
        resolve(`错误: 发送消息时出现异常: ${error.message}`);
      }
    });
  } catch (error) {
    console.error('检查扩展时出错:', error);
    return `错误: ${error.message}`;
  }
};

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
    
    console.log('发送请求:', JSON.stringify(fullRequest, null, 2));
    
    try {
      // 发送消息到扩展
      chrome.runtime.sendMessage(
        EXTENSION_ID,
        fullRequest,
        response => {
          if (chrome.runtime.lastError) {
            console.error('API请求错误:', chrome.runtime.lastError);
            reject(new Error(`API请求失败: ${chrome.runtime.lastError.message}`));
          } else {
            console.log('收到响应:', JSON.stringify(response, null, 2));
            resolve(response || { success: false, error: { message: '扩展返回空响应' } });
          }
        }
      );
    } catch (error) {
      console.error('发送消息时出错:', error);
      reject(new Error(`发送消息时出现异常: ${error.message}`));
    }
  });
}

/**
 * 获取单个页面
 * @param {string} pageId - 页面ID
 * @returns {Promise<Object>} - 页面数据
 */
async function getPage(pageId) {
  console.log(`尝试获取页面: ${pageId}`);
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
  console.log('尝试获取页面列表');
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
  console.log('尝试获取页面计数');
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
  console.log('尝试获取所有标签');
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
  console.log(`尝试同步数据，lastSyncTime=${lastSyncTime}, fullSync=${fullSync}`);
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
  console.log(`尝试获取变更记录，lastSyncTime=${lastSyncTime}`);
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

// 测试函数 - 分步骤执行
async function testApi() {
  try {
    // 首先检查环境
    const envError = checkEnvironment();
    if (envError) {
      console.error(envError);
      return { error: envError };
    }
    
    // 检查扩展是否可用
    const extError = await checkExtension();
    if (extError) {
      console.error(extError);
      return { error: extError };
    }
    
    const results = {
      pageCount: null,
      pagesList: null,
      singlePage: null,
      tags: null,
      syncResult: null,
      changesResult: null
    };
    
    console.log('===== 开始测试数据提供者API =====');
    
    // 1. 测试获取页面计数
    try {
      console.log('\n----- 测试获取页面计数 -----');
      const count = await getPageCount();
      console.log(`✅ 成功: 总页面数: ${count}`);
      results.pageCount = count;
    } catch (error) {
      console.error(`❌ 失败: 获取页面计数失败: ${error.message}`);
    }
    
    // 2. 测试获取页面列表
    try {
      console.log('\n----- 测试获取页面列表 -----');
      const { pages, meta } = await getPages({ pageSize: 5 });
      console.log(`✅ 成功: 获取到${pages.length}个页面，总页数: ${meta.pageCount || '未知'}`);
      if (pages.length > 0) {
        console.log(`第一个页面: ${pages[0].title || '无标题'}`);
      }
      results.pagesList = { pages, meta };
    } catch (error) {
      console.error(`❌ 失败: 获取页面列表失败: ${error.message}`);
    }
    
    // 3. 测试获取单个页面
    if (results.pagesList && results.pagesList.pages && results.pagesList.pages.length > 0) {
      try {
        console.log('\n----- 测试获取单个页面 -----');
        const pageId = results.pagesList.pages[0].id;
        const page = await getPage(pageId);
        console.log(`✅ 成功: 页面标题: ${page.title || '无标题'}, URL: ${page.url || '无URL'}`);
        results.singlePage = page;
      } catch (error) {
        console.error(`❌ 失败: 获取单个页面失败: ${error.message}`);
      }
    } else {
      console.log('\n⚠️ 跳过测试获取单个页面: 没有可用的页面ID');
    }
    
    // 4. 测试获取所有标签
    try {
      console.log('\n----- 测试获取所有标签 -----');
      const tags = await getAllTags();
      console.log(`✅ 成功: 标签列表: ${tags ? tags.join(', ') : '无标签'}`);
      results.tags = tags;
    } catch (error) {
      console.error(`❌ 失败: 获取所有标签失败: ${error.message}`);
    }
    
    // 5. 测试同步数据
    try {
      console.log('\n----- 测试同步数据 -----');
      // 使用0作为lastSyncTime进行完整同步测试
      const syncResult = await syncData(0, true);
      console.log(`✅ 成功: 同步完成，获取到${syncResult.changes ? syncResult.changes.length : 0}个变更`);
      results.syncResult = syncResult;
    } catch (error) {
      console.error(`❌ 失败: 同步数据失败: ${error.message}`);
    }
    
    // 6. 测试获取变更记录
    try {
      console.log('\n----- 测试获取变更记录 -----');
      const changes = await getChanges(0);
      console.log(`✅ 成功: 获取到${changes.changes ? changes.changes.length : 0}个变更记录`);
      results.changesResult = changes;
    } catch (error) {
      console.error(`❌ 失败: 获取变更记录失败: ${error.message}`);
    }
    
    console.log('\n===== 测试完成 =====');
    return results;
    
  } catch (error) {
    console.error('\n❌ 测试执行失败:', error);
    return { error: error.message };
  }
}

// 运行测试，需要在浏览器环境中执行
// testApi()
//   .then(results => {
//     console.log('测试结果:', results);
//   })
//   .catch(error => {
//     console.error('测试失败:', error);
//   });

// 导出函数以便在浏览器控制台中使用
window.testApi = testApi;
window.getPages = getPages;
window.getPage = getPage;
window.getPageCount = getPageCount;
window.getAllTags = getAllTags;
window.syncData = syncData;
window.getChanges = getChanges;
window.checkEnvironment = checkEnvironment;
window.checkExtension = checkExtension;

console.log('数据提供者API测试脚本已加载，请在控制台中运行 window.testApi() 开始测试'); 