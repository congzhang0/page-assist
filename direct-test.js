/**
 * Page Assist API直接测试脚本
 * 在Service Worker控制台中直接复制并运行这段代码
 */

// 直接执行API请求测试
async function directTest() {
  console.log('🔧 开始直接API测试...');
  
  // 准备API请求，使用完整格式
  const testRequest = {
    type: 'list',
    entityType: 'page',
    query: { 
      filter: {},
      page: 1,
      pageSize: 10
    },
    accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
    clientId: 'direct_test_' + Date.now()
  };
  
  console.log('发送请求:', testRequest);
  
  try {
    // 直接使用chrome.runtime.id作为发送者ID
    const sender = { id: chrome.runtime.id };
    
    // 尝试直接调用背景页中的处理函数
    if (typeof self.handleDataProviderRequest === 'function') {
      console.log('使用全局handleDataProviderRequest函数处理请求...');
      
      const response = await self.handleDataProviderRequest(testRequest, sender);
      console.log('✅ 测试成功! 响应:', response);
      return response;
    } else {
      console.error('❌ handleDataProviderRequest函数不存在');
      
      // 尝试使用DataProviderAPI模块
      if (typeof self.DataProviderAPI !== 'undefined' && 
          typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
        console.log('使用DataProviderAPI.handleDataProviderRequest函数处理请求...');
        
        const response = await self.DataProviderAPI.handleDataProviderRequest(testRequest, sender);
        console.log('✅ 测试成功! 响应:', response);
        return response;
      }
      
      // 在各个模块中查找API处理函数
      for (const key in self) {
        const module = self[key];
        if (typeof module === 'object' && module !== null && 
            typeof module.handleDataProviderRequest === 'function') {
          console.log(`使用${key}.handleDataProviderRequest函数处理请求...`);
          
          const response = await module.handleDataProviderRequest(testRequest, sender);
          console.log('✅ 测试成功! 响应:', response);
          return response;
        }
      }
      
      throw new Error('找不到可用的API处理函数');
    }
  } catch (error) {
    console.error('❌ 测试失败:', error);
    throw error;
  }
}

// 测试通过消息发送
async function testByMessaging() {
  console.log('🔧 通过消息传递测试API...');
  
  // 准备API请求，使用完整格式
  const testRequest = {
    type: 'list',
    entityType: 'page',
    query: { 
      filter: {},
      page: 1,
      pageSize: 10
    },
    accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
    clientId: 'messaging_test_' + Date.now()
  };
  
  console.log('发送消息:', testRequest);
  
  try {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(testRequest, response => {
        if (chrome.runtime.lastError) {
          console.error('❌ 消息发送失败:', chrome.runtime.lastError);
          reject(new Error(chrome.runtime.lastError.message));
        } else {
          console.log('✅ 测试成功! 响应:', response);
          resolve(response);
        }
      });
    });
  } catch (error) {
    console.error('❌ 测试失败:', error);
    throw error;
  }
}

// 修复Service Worker的API处理
function fixServiceWorkerApi() {
  console.log('🔧 开始修复Service Worker的API处理...');
  
  // 检查是否已有监听器
  if (!chrome.runtime.onMessageExternal.hasListeners()) {
    console.log('添加外部消息监听器...');
    
    // 添加外部消息监听器
    chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
      console.log('收到外部消息:', request);
      
      // 检查是否是ping请求
      if (request && request.type === 'ping') {
        console.log('收到ping请求，发送ping响应');
        sendResponse({
          success: true,
          pong: true
        });
        return true;
      }
      
      // 确保有处理函数可用
      if (typeof self.handleDataProviderRequest !== 'function') {
        console.error('❌ API处理函数不可用');
        
        // 尝试查找处理函数
        if (typeof self.DataProviderAPI !== 'undefined' &&
            typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
          self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
          console.log('✅ 成功导出API处理函数');
        } else {
          sendResponse({
            success: false, 
            error: { 
              message: 'API处理函数不可用'
            }
          });
          return true;
        }
      }
      
      // 处理API请求
      self.handleDataProviderRequest(request, sender)
        .then(response => {
          console.log('发送响应:', response);
          sendResponse(response);
        })
        .catch(error => {
          console.error('处理请求出错:', error);
          sendResponse({
            success: false,
            error: {
              message: error.message || '内部错误'
            }
          });
        });
      
      return true; // 异步响应
    });
    
    console.log('✅ 外部消息监听器添加成功');
  } else {
    console.log('✅ 已存在外部消息监听器');
  }
  
  console.log('✅ 修复完成，请尝试直接测试: directTest()');
}

// 列出所有模块
function listModules() {
  console.log('🔍 列出所有可能包含API的模块:');
  
  for (const key in self) {
    const module = self[key];
    if (typeof module === 'object' && module !== null) {
      const methods = [];
      for (const method in module) {
        if (typeof module[method] === 'function') {
          methods.push(method);
        }
      }
      
      if (methods.length > 0 && key !== 'chrome') {
        console.log(`- ${key}: ${methods.join(', ')}`);
      }
    }
  }
}

// 执行修复
fixServiceWorkerApi();
listModules();

console.log('-------------------------------');
console.log('📋 可用命令:');
console.log('- directTest(): 直接调用API处理函数');
console.log('- testByMessaging(): 通过消息测试API');
console.log('- fixServiceWorkerApi(): 修复Service Worker消息处理');
console.log('- listModules(): 列出所有可能包含API的模块');
console.log('-------------------------------');

// 导出到全局作用域
self.directTest = directTest;
self.testByMessaging = testByMessaging;
self.fixServiceWorkerApi = fixServiceWorkerApi;
self.listModules = listModules; 