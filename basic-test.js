/**
 * Page Assist 数据提供者API简化测试脚本
 * 专为Service Worker环境优化
 */

// 直接测试API
async function testApi() {
  console.log('开始测试API...');
  
  try {
    // 检查API处理函数是否存在
    if (typeof self.handleDataProviderRequest !== 'function') {
      // 尝试从DataProviderAPI模块导出
      if (typeof self.DataProviderAPI !== 'undefined' && 
          typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
        self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
        console.log('成功导出API处理函数到全局作用域');
      } else {
        // 尝试在其他模块中查找
        for (const key in self) {
          const module = self[key];
          if (typeof module === 'object' && module !== null && 
              typeof module.handleDataProviderRequest === 'function') {
            self.handleDataProviderRequest = module.handleDataProviderRequest;
            console.log(`从${key}模块导出API处理函数到全局作用域`);
            break;
          }
        }
      }
    }
    
    if (typeof self.handleDataProviderRequest !== 'function') {
      console.error('无法找到API处理函数');
      return { success: false, error: 'API处理函数不可用' };
    }
    
    // 构造测试请求 - 使用完整API格式而非ping
    const testRequest = {
      type: 'list',
      entityType: 'page',
      query: { 
        filter: {}, 
        page: 1, 
        pageSize: 10 
      },
      accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
      clientId: 'api_test_' + Date.now()
    };
    
    console.log('发送测试请求:', testRequest);
    
    // 直接调用API处理函数
    const sender = { id: chrome.runtime.id };
    const result = await self.handleDataProviderRequest(testRequest, sender);
    
    console.log('测试成功:', result);
    return result;
  } catch (error) {
    console.error('测试失败:', error);
    return { success: false, error: error.message };
  }
}

// 测试单条内部消息
async function testInternalMessaging() {
  console.log('测试内部消息...');
  
  try {
    // 构造测试请求
    const testRequest = {
      type: 'list',
      entityType: 'page',
      query: { 
        filter: {}, 
        page: 1, 
        pageSize: 10 
      },
      accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
      clientId: 'msg_test_' + Date.now()
    };
    
    console.log('发送内部消息:', testRequest);
    
    // 使用Promise包装chrome.runtime.sendMessage
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(testRequest, (response) => {
        const error = chrome.runtime.lastError;
        if (error) {
          console.error('消息发送失败:', error);
          resolve({ success: false, error: error.message });
        } else {
          console.log('消息发送成功:', response);
          resolve(response);
        }
      });
    });
  } catch (error) {
    console.error('消息测试失败:', error);
    return { success: false, error: error.message };
  }
}

// 测试外部消息
async function testExternalMessaging() {
  console.log('测试外部消息...');
  
  try {
    // 检查外部消息监听器
    const hasListener = chrome.runtime.onMessageExternal.hasListeners();
    console.log(`外部消息监听器状态: ${hasListener ? '已设置' : '未设置'}`);
    
    if (!hasListener) {
      // 添加临时监听器
      chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
        console.log('收到外部消息:', request, '来自:', sender);
        
        // 特殊处理ping请求
        if (request.type === 'ping') {
          sendResponse({ success: true, pong: true });
          return true;
        }
        
        // 如果有API处理函数，使用它
        if (typeof self.handleDataProviderRequest === 'function') {
          self.handleDataProviderRequest(request, sender)
            .then(response => sendResponse(response))
            .catch(error => sendResponse({ 
              success: false, 
              error: { message: error.message } 
            }));
          return true;
        }
        
        // 返回默认响应
        sendResponse({ 
          success: false, 
          error: { message: 'API处理函数不可用' } 
        });
        return true;
      });
      
      console.log('临时外部消息监听器已添加');
    }
    
    return { 
      success: true, 
      message: '外部消息监听器已检查和设置',
      hasListener
    };
  } catch (error) {
    console.error('检查外部消息监听器失败:', error);
    return { success: false, error: error.message };
  }
}

// 自动运行
async function runTests() {
  console.log('----- Page Assist API简化测试开始 -----');
  
  // 检查环境
  console.log('运行环境:', typeof window === 'undefined' ? 'Service Worker' : 'Web页面');
  
  // 测试直接API调用
  console.log('\n1. 测试直接API调用:');
  const apiTestResult = await testApi();
  
  // 测试消息传递
  console.log('\n2. 测试内部消息:');
  const internalMsgResult = await testInternalMessaging();
  
  // 测试外部消息
  console.log('\n3. 设置外部消息监听器:');
  const externalMsgResult = await testExternalMessaging();
  
  console.log('\n----- 测试结果汇总 -----');
  console.log('1. 直接API调用:', apiTestResult.success ? '成功' : '失败');
  console.log('2. 内部消息测试:', internalMsgResult.success ? '成功' : '失败');
  console.log('3. 外部消息设置:', externalMsgResult.success ? '成功' : '失败');
  
  console.log('\n可用的命令:');
  console.log('- testApi(): 测试直接API调用');
  console.log('- testInternalMessaging(): 测试内部消息');
  console.log('- testExternalMessaging(): 测试外部消息');
  console.log('- runTests(): 运行所有测试');
  
  return {
    apiTest: apiTestResult,
    internalMsg: internalMsgResult,
    externalMsg: externalMsgResult
  };
}

// 导出到全局作用域
self.testApi = testApi;
self.testInternalMessaging = testInternalMessaging;
self.testExternalMessaging = testExternalMessaging;
self.runTests = runTests;

// 自动开始测试
console.log('Page Assist API简化测试脚本已加载。');
console.log('执行 runTests() 开始测试，或者使用单独的测试函数。'); 