/**
 * 修复 externally_connectable 配置
 * 将此脚本复制到扩展的背景页控制台中运行
 */

// 检查并修复externally_connectable配置
async function fixExternallyConnectable() {
  console.log('🔧 检查externally_connectable配置...');
  
  try {
    // 检查manifest
    if (typeof chrome.runtime.getManifest === 'function') {
      const manifest = chrome.runtime.getManifest();
      
      console.log('当前manifest:', manifest);
      
      if (!manifest.externally_connectable) {
        console.warn('⚠️ 未找到externally_connectable配置，需要修复');
        
        // 在开发模式下，显示如何修复的说明
        console.log('请在manifest中添加以下配置:');
        console.log(`"externally_connectable": {
  "matches": [
    "http://localhost:*/*",
    "http://127.0.0.1:*/*"
  ]
}`);
      } else {
        // 检查是否包含localhost和127.0.0.1的所有端口
        let hasLocalhost = false;
        let hasLocalIP = false;
        
        if (manifest.externally_connectable.matches) {
          for (const match of manifest.externally_connectable.matches) {
            if (match.includes('localhost:*')) hasLocalhost = true;
            if (match.includes('127.0.0.1:*')) hasLocalIP = true;
          }
        }
        
        if (!hasLocalhost || !hasLocalIP) {
          console.warn('⚠️ externally_connectable配置不完整，建议更新');
          
          if (!hasLocalhost) {
            console.log('缺少localhost所有端口配置，建议添加: "http://localhost:*/*"');
          }
          
          if (!hasLocalIP) {
            console.log('缺少127.0.0.1所有端口配置，建议添加: "http://127.0.0.1:*/*"');
          }
        } else {
          console.log('✅ externally_connectable配置正确，支持localhost和127.0.0.1的任意端口访问');
        }
      }
    } else {
      console.error('❌ chrome.runtime.getManifest不可用，无法检查配置');
    }
  } catch (error) {
    console.error('检查配置时出错:', error);
  }
  
  // 修复API处理函数
  await fixApiHandler();
}

// 检查和修复API处理函数
async function fixApiHandler() {
  console.log('🔧 检查API处理函数...');
  
  // 检查全局处理函数
  if (typeof self.handleDataProviderRequest !== 'function') {
    console.warn('⚠️ 未找到全局API处理函数 handleDataProviderRequest');
    
    // 尝试查找并导出
    const result = await exposeApiHandler();
    if (result) {
      console.log('✅ 成功导出API处理函数到全局作用域');
    } else {
      console.error('❌ 无法找到或导出API处理函数');
    }
  } else {
    console.log('✅ 全局API处理函数 handleDataProviderRequest 已存在');
  }
  
  // 检查消息监听器
  const hasExternalListeners = chrome.runtime.onMessageExternal.hasListeners();
  console.log(`🔍 外部消息监听器状态: ${hasExternalListeners ? '已设置' : '未设置'}`);
  
  if (!hasExternalListeners) {
    console.warn('⚠️ 未找到外部消息监听器，尝试添加');
    addExternalMessageListener();
  }
}

// 尝试找到并导出API处理函数
async function exposeApiHandler() {
  console.log('🔍 尝试查找API处理函数...');
  
  // 尝试从DataProviderAPI模块导出
  if (typeof self.DataProviderAPI !== 'undefined' && typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
    self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
    return true;
  }
  
  // 尝试在其他模块中查找
  for (const key in self) {
    const module = self[key];
    if (typeof module === 'object' && module !== null && typeof module.handleDataProviderRequest === 'function') {
      self.handleDataProviderRequest = module.handleDataProviderRequest;
      console.log(`找到API处理函数，来自模块: ${key}`);
      return true;
    }
    
    // 检查模块内部属性
    if (typeof module === 'object' && module !== null) {
      for (const subKey in module) {
        if (subKey === 'handleDataProviderRequest' && typeof module[subKey] === 'function') {
          self.handleDataProviderRequest = module[subKey];
          console.log(`找到API处理函数，来自模块属性: ${key}.${subKey}`);
          return true;
        }
      }
    }
  }
  
  console.error('无法找到API处理函数');
  return false;
}

// 添加外部消息监听器
function addExternalMessageListener() {
  console.log('🔧 添加外部消息监听器...');
  
  try {
    chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
      console.log('收到外部消息:', request, '来自:', sender);
      
      // 检查是否有API处理函数
      if (typeof self.handleDataProviderRequest !== 'function') {
        console.error('❌ 无法处理消息: API处理函数不存在');
        sendResponse({
          success: false,
          error: {
            code: 'handler_not_found',
            message: 'API处理函数未找到'
          }
        });
        return;
      }
      
      // 检查简单ping消息
      if (request && request.type === 'ping') {
        console.log('📣 收到ping请求，直接响应');
        sendResponse({
          success: true,
          pong: true,
          message: 'Service Worker已收到连接'
        });
        return;
      }
      
      // 处理正常API请求
      if (request && request.accessToken) {
        console.log('📣 尝试处理API请求:', request.type);
        
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
                code: 'internal_error',
                message: error.message || '内部错误'
              }
            });
          });
        
        return true; // 异步发送响应
      }
    });
    
    console.log('✅ 外部消息监听器添加成功');
  } catch (error) {
    console.error('添加外部消息监听器失败:', error);
  }
}

// 运行测试请求
function testApiRequest() {
  console.log('🧪 测试API请求...');
  
  if (typeof self.handleDataProviderRequest !== 'function') {
    console.error('❌ 无法测试: API处理函数不存在');
    return;
  }
  
  const testRequest = {
    type: 'list',
    entityType: 'page',
    query: { filter: {}, page: 1, pageSize: 10 },
    accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
    clientId: 'test_client_' + Date.now()
  };
  
  console.log('发送测试请求:', testRequest);
  
  self.handleDataProviderRequest(testRequest, { id: chrome.runtime.id })
    .then(response => {
      console.log('测试成功, 响应:', response);
    })
    .catch(error => {
      console.error('测试失败:', error);
    });
}

// 手动初始化
fixExternallyConnectable().then(() => {
  console.log('🚀 初始化完成');
  console.log('📋 可用命令:');
  console.log('- fixExternallyConnectable(): 重新运行初始化');
  console.log('- exposeApiHandler(): 尝试查找并导出API处理函数');
  console.log('- addExternalMessageListener(): 添加外部消息监听器');
  console.log('- testApiRequest(): 测试API处理函数');
});

// 导出到全局作用域
self.fixExternallyConnectable = fixExternallyConnectable;
self.exposeApiHandler = exposeApiHandler;
self.addExternalMessageListener = addExternalMessageListener;
self.testApiRequest = testApiRequest; 