/**
 * Page Assist externally_connectable 配置修复脚本
 * 此脚本用于修复Service Worker环境中的扩展通信问题
 */

// 先确保我们在Service Worker环境中
const isServiceWorker = typeof self !== 'undefined' && typeof window === 'undefined';
if (!isServiceWorker) {
  console.error('此脚本必须在Service Worker环境中运行');
}

console.log('开始检查和修复externally_connectable配置...');

// 检查manifest中的externally_connectable配置
async function checkManifest() {
  console.log('检查manifest.json...');
  
  try {
    const manifest = chrome.runtime.getManifest();
    if (!manifest) {
      console.error('无法获取manifest');
      return;
    }
    
    console.log('manifest版本:', manifest.manifest_version);
    
    // 检查externally_connectable
    if (manifest.externally_connectable) {
      console.log('externally_connectable配置存在:');
      console.log(JSON.stringify(manifest.externally_connectable, null, 2));
      
      // 检查matches
      if (manifest.externally_connectable.matches && 
          manifest.externally_connectable.matches.length > 0) {
        console.log('允许的外部连接匹配模式:', manifest.externally_connectable.matches.join(', '));
      } else {
        console.warn('警告: externally_connectable.matches为空或不存在');
      }
      
      // 检查ids
      if (manifest.externally_connectable.ids && 
          manifest.externally_connectable.ids.length > 0) {
        console.log('允许的扩展IDs:', manifest.externally_connectable.ids.join(', '));
      }
      
      // 检查accepts_tls_channel_id
      if (manifest.externally_connectable.accepts_tls_channel_id === true) {
        console.log('接受TLS通道ID: 是');
      }
    } else {
      console.warn('警告: manifest中没有externally_connectable配置');
      
      console.log('建议在manifest.json中添加以下配置:');
      console.log(`
"externally_connectable": {
  "matches": [
    "http://*/*",
    "https://*/*"
  ],
  "accepts_tls_channel_id": false
}
      `);
    }
  } catch (error) {
    console.error('检查manifest时出错:', error);
  }
}

// 确保消息监听器正确设置
function setupMessageListeners() {
  console.log('设置消息监听器...');
  
  // 检查外部消息监听器
  const hasExternalListeners = chrome.runtime.onMessageExternal.hasListeners();
  console.log(`外部消息监听器已设置: ${hasExternalListeners ? '是' : '否'}`);
  
  if (!hasExternalListeners) {
    console.log('添加外部消息监听器...');
    
    chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
      console.log('收到外部消息:', request);
      
      // 如果是ping请求，直接响应
      if (request && request.type === 'ping') {
        console.log('收到ping请求，发送响应');
        sendResponse({
          success: true,
          pong: true,
          message: '连接成功'
        });
        return true;
      }
      
      // 如果有API处理函数，则调用它
      if (typeof self.handleDataProviderRequest === 'function') {
        console.log('将请求转发到API处理函数');
        
        // 调用处理函数并返回Promise
        self.handleDataProviderRequest(request, sender)
          .then(response => {
            console.log('处理完成，发送响应');
            sendResponse(response);
          })
          .catch(error => {
            console.error('处理请求时出错:', error);
            sendResponse({
              success: false,
              error: {
                message: error.message || '处理请求时出错'
              }
            });
          });
        
        return true; // 表示会异步回调sendResponse
      } else {
        console.error('无法处理请求: API处理函数不可用');
        sendResponse({
          success: false,
          error: {
            message: 'API处理函数不可用'
          }
        });
        return true;
      }
    });
    
    console.log('外部消息监听器已添加');
  }
  
  // 检查内部消息监听器
  const hasInternalListeners = chrome.runtime.onMessage.hasListeners();
  console.log(`内部消息监听器已设置: ${hasInternalListeners ? '是' : '否'}`);
  
  if (!hasInternalListeners) {
    console.log('添加内部消息监听器...');
    
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log('收到内部消息:', request);
      
      // 如果是ping请求，直接响应
      if (request && request.type === 'ping') {
        console.log('收到ping请求，发送响应');
        sendResponse({
          success: true,
          pong: true,
          message: '内部连接成功'
        });
        return true;
      }
      
      // 如果有API处理函数，则调用它
      if (typeof self.handleDataProviderRequest === 'function') {
        console.log('将请求转发到API处理函数');
        
        // 调用处理函数并返回Promise
        self.handleDataProviderRequest(request, sender)
          .then(response => {
            console.log('处理完成，发送响应');
            sendResponse(response);
          })
          .catch(error => {
            console.error('处理请求时出错:', error);
            sendResponse({
              success: false,
              error: {
                message: error.message || '处理请求时出错'
              }
            });
          });
        
        return true; // 表示会异步回调sendResponse
      } else {
        console.error('无法处理请求: API处理函数不可用');
        sendResponse({
          success: false,
          error: {
            message: 'API处理函数不可用'
          }
        });
        return true;
      }
    });
    
    console.log('内部消息监听器已添加');
  }
}

// 验证API请求处理
async function testApiProcessing() {
  console.log('测试API处理功能...');
  
  // 检查API处理函数
  let apiHandlerAvailable = typeof self.handleDataProviderRequest === 'function';
  
  if (!apiHandlerAvailable) {
    console.log('尝试查找API处理函数...');
    
    // 尝试从DataProviderAPI模块导出
    if (typeof self.DataProviderAPI === 'object' && 
        typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
      self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
      console.log('从DataProviderAPI模块导出了API处理函数');
      apiHandlerAvailable = true;
    } else {
      // 检查其他可能的模块
      for (const key in self) {
        const module = self[key];
        if (typeof module === 'object' && module !== null && 
            typeof module.handleDataProviderRequest === 'function') {
          self.handleDataProviderRequest = module.handleDataProviderRequest;
          console.log(`从${key}模块导出了API处理函数`);
          apiHandlerAvailable = true;
          break;
        }
      }
    }
  }
  
  if (!apiHandlerAvailable) {
    console.error('无法找到API处理函数，无法测试API处理功能');
    return;
  }
  
  // 测试API处理
  try {
    const pingRequest = {
      type: 'ping',
      entityType: 'page',
      accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
      clientId: 'fix_test_' + Date.now()
    };
    
    console.log('发送ping测试请求:', pingRequest);
    
    const response = await self.handleDataProviderRequest(pingRequest, { id: chrome.runtime.id });
    
    console.log('收到响应:', response);
    
    if (response && (response.success === true || response.pong === true)) {
      console.log('API处理功能测试成功');
    } else {
      console.warn('API处理测试未返回成功状态:', response);
    }
  } catch (error) {
    console.error('API处理测试失败:', error);
  }
}

// 运行所有检查
async function runAllChecks() {
  console.log('开始运行所有检查...');
  
  // 1. 检查manifest
  await checkManifest();
  
  // 2. 设置消息监听器
  setupMessageListeners();
  
  // 3. 测试API处理
  await testApiProcessing();
  
  console.log('所有检查完成。如果你仍然遇到问题，请尝试以下步骤:');
  console.log('1. 确保在manifest.json中正确配置了externally_connectable');
  console.log('2. 在Service Worker中手动添加消息处理监听器');
  console.log('3. 确保API处理函数可用并正确导出到全局作用域');
}

// 导出到全局作用域
self.checkManifest = checkManifest;
self.setupMessageListeners = setupMessageListeners;
self.testApiProcessing = testApiProcessing;
self.runAllChecks = runAllChecks;

// 自动运行
console.log('修复脚本已加载');
console.log('可用命令:');
console.log('- checkManifest(): 检查manifest配置');
console.log('- setupMessageListeners(): 设置消息监听器');
console.log('- testApiProcessing(): 测试API处理');
console.log('- runAllChecks(): 运行所有检查');

// 默认执行所有检查
runAllChecks(); 