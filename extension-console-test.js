/**
 * Page Assist 数据提供者API测试和工作区函数
 * 在扩展的控制台中运行此脚本以解决标签API问题
 */

// 访问令牌 - 实际使用中应与扩展配置中的令牌匹配
const ACCESS_TOKEN = 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m';
const CLIENT_ID = 'client_' + Math.random().toString(36).substring(2, 15);

/**
 * 发送API请求
 * @param {Object} request - API请求对象
 * @returns {Promise<Object>} - API响应对象
 */
async function sendApiRequest(request) {
  // 添加访问令牌和客户端ID
  const fullRequest = {
    ...request,
    accessToken: ACCESS_TOKEN,
    clientId: CLIENT_ID
  };
  
  console.log('发送请求:', JSON.stringify(fullRequest, null, 2));
  
  try {
    // 直接调用API处理函数
    if (typeof handleDataProviderRequest !== 'function') {
      throw new Error('API处理函数不可用，请确保在扩展的背景页控制台中运行此脚本');
    }
    
    const response = await handleDataProviderRequest(fullRequest, { id: chrome.runtime.id });
    console.log('收到响应:', JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error('API请求失败:', error);
    throw error;
  }
}

/**
 * 获取单个页面（包含完整信息：URL、内容、摘要和标签）
 * @param {string} pageId - 页面ID
 * @returns {Promise<Object>} - 页面完整数据
 */
async function getCompletePage(pageId) {
  console.log(`获取完整页面信息: ${pageId}`);
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
 * 获取所有页面（包含它们的标签）
 * @param {Object} options - 可选参数，如页码、每页大小等
 * @returns {Promise<Array>} - 页面列表
 */
async function getAllPagesWithTags(options = {}) {
  console.log('获取所有页面（包含标签）');
  const request = {
    type: 'list',
    entityType: 'page',
    query: {
      page: options.page || 1,
      pageSize: options.pageSize || 50,
      filter: options.filter || {}
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取页面列表失败: ${response.error?.message || '未知错误'}`);
  }
  
  return {
    items: response.data,
    meta: response.meta
  };
}

/**
 * 获取所有标签（通过提取所有页面的标签并去重）
 * @returns {Promise<Array>} - 标签列表
 */
async function getAllTagsWorkaround() {
  console.log('获取所有标签（通过页面提取）');
  
  try {
    // 获取所有页面，以获取尽可能多的标签
    const { items } = await getAllPagesWithTags({ pageSize: 100 });
    
    // 从页面中提取所有标签并去重
    const tagSet = new Set();
    items.forEach(page => {
      if (Array.isArray(page.tags)) {
        page.tags.forEach(tag => tag && tagSet.add(tag));
      }
    });
    
    const tags = Array.from(tagSet);
    console.log(`成功提取 ${tags.length} 个唯一标签`);
    return tags;
  } catch (error) {
    console.error('获取标签失败:', error);
    throw error;
  }
}

/**
 * 按标签筛选页面
 * @param {string|string[]} tags - 标签或标签数组
 * @returns {Promise<Array>} - 包含指定标签的页面列表
 */
async function filterPagesByTags(tags) {
  console.log(`按标签筛选页面: ${Array.isArray(tags) ? tags.join(', ') : tags}`);
  
  const request = {
    type: 'list',
    entityType: 'page',
    query: {
      filter: {
        tags: tags
      },
      pageSize: 100
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`按标签筛选页面失败: ${response.error?.message || '未知错误'}`);
  }
  
  return {
    items: response.data,
    meta: response.meta
  };
}

// 导出到全局作用域，使函数可以从控制台直接调用
window.getCompletePage = getCompletePage;
window.getAllPagesWithTags = getAllPagesWithTags;
window.getAllTagsWorkaround = getAllTagsWorkaround;
window.filterPagesByTags = filterPagesByTags;
window.sendApiRequest = sendApiRequest;

// 使用说明
console.log(`
===== Page Assist API 标签工作函数 =====

以下函数已添加到全局作用域，可直接从控制台调用：

1. getCompletePage(pageId) - 获取页面的完整信息，包括URL、内容、摘要和标签
   例如: getCompletePage("page_xxxx-xxxx")

2. getAllPagesWithTags(options) - 获取所有页面及其标签
   例如: getAllPagesWithTags() 或 getAllPagesWithTags({pageSize: 20})

3. getAllTagsWorkaround() - 获取所有标签（通过提取所有页面的标签并去重）
   例如: getAllTagsWorkaround()

4. filterPagesByTags(tags) - 按标签筛选页面
   例如: filterPagesByTags("工作") 或 filterPagesByTags(["工作", "重要"])

5. sendApiRequest(request) - 发送自定义API请求
   例如: sendApiRequest({type: 'list', entityType: 'page'})

注意：此脚本必须在扩展的背景页控制台中运行。
`); 