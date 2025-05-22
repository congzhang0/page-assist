/**
 * Page Assist 数据提供者API直接测试脚本 - 扩展控制台版本
 * 
 * 使用方法:
 * 1. 打开扩展选项页或背景页（chrome://extensions -> Page Assist -> 详情 -> 背景页）
 * 2. 打开开发者工具 (F12)
 * 3. 复制并粘贴此脚本到控制台中
 * 4. 运行 testPageCount() 或 testPagesList() 等测试函数
 */

const TOKEN = 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m';

// 获取API处理函数
function getApiHandler() {
  // 优先检查全局函数
  if (typeof handleDataProviderRequest === 'function') {
    return handleDataProviderRequest;
  }
  
  // 检查DataProviderAPI对象
  if (typeof DataProviderAPI === 'object' && typeof DataProviderAPI.handleDataProviderRequest === 'function') {
    return DataProviderAPI.handleDataProviderRequest;
  }
  
  // 遍历所有模块找到处理函数
  for (const key in self) {
    const obj = self[key];
    if (typeof obj === 'object' && obj !== null && typeof obj.handleDataProviderRequest === 'function') {
      console.log(`在模块 ${key} 中找到API处理函数`);
      return obj.handleDataProviderRequest;
    }
  }
  
  console.error('无法找到API处理函数');
  return null;
}

// 测试页面计数
async function testPageCount() {
  console.log('测试页面计数API...');
  const handler = getApiHandler();
  
  if (!handler) {
    console.error('无法执行测试: API处理函数不可用');
    return;
  }
  
  const request = {
    type: 'count',
    entityType: 'page',
    query: { filter: {} },
    accessToken: TOKEN,
    clientId: 'console_test_' + Date.now()
  };
  
  console.log('发送请求:', request);
  
  try {
    const response = await handler(request, { id: chrome.runtime.id });
    console.log('响应:', response);
    return response;
  } catch (error) {
    console.error('测试失败:', error);
  }
}

// 测试页面列表
async function testPagesList() {
  console.log('测试页面列表API...');
  const handler = getApiHandler();
  
  if (!handler) {
    console.error('无法执行测试: API处理函数不可用');
    return;
  }
  
  const request = {
    type: 'list',
    entityType: 'page',
    query: { 
      filter: {},
      page: 1,
      pageSize: 5
    },
    accessToken: TOKEN,
    clientId: 'console_test_' + Date.now()
  };
  
  console.log('发送请求:', request);
  
  try {
    const response = await handler(request, { id: chrome.runtime.id });
    console.log('响应:', response);
    return response;
  } catch (error) {
    console.error('测试失败:', error);
  }
}

// 测试获取单个页面
async function testGetPage(pageId) {
  console.log('测试获取页面API...');
  const handler = getApiHandler();
  
  if (!handler) {
    console.error('无法执行测试: API处理函数不可用');
    return;
  }
  
  if (!pageId) {
    console.log('未提供页面ID，先获取页面列表...');
    const listResult = await testPagesList();
    if (listResult && listResult.data && listResult.data.length > 0) {
      pageId = listResult.data[0].id;
      console.log(`使用第一个页面ID: ${pageId}`);
    } else {
      console.error('无法获取页面ID，请手动提供');
      return;
    }
  }
  
  const request = {
    type: 'get',
    entityType: 'page',
    id: pageId,
    accessToken: TOKEN,
    clientId: 'console_test_' + Date.now()
  };
  
  console.log('发送请求:', request);
  
  try {
    const response = await handler(request, { id: chrome.runtime.id });
    console.log('响应:', response);
    return response;
  } catch (error) {
    console.error('测试失败:', error);
  }
}

// 运行所有测试
async function runAllTests() {
  console.log('运行所有测试...');
  
  // 测试页面计数
  const countResult = await testPageCount();
  if (!countResult || !countResult.success) {
    console.error('页面计数测试失败，终止测试');
    return;
  }
  
  // 测试页面列表
  const listResult = await testPagesList();
  if (!listResult || !listResult.success) {
    console.error('页面列表测试失败，终止测试');
    return;
  }
  
  // 测试获取单个页面
  if (listResult.data && listResult.data.length > 0) {
    const pageId = listResult.data[0].id;
    await testGetPage(pageId);
  }
  
  console.log('所有测试完成!');
}

// 显示使用说明
console.log('API测试脚本已加载，可用的测试函数:');
console.log('- testPageCount(): 测试页面计数');
console.log('- testPagesList(): 测试页面列表');
console.log('- testGetPage(pageId): 测试获取单个页面');
console.log('- runAllTests(): 运行所有测试'); 