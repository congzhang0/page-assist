/**
 * Page Assist 数据提供者API测试脚本 - Service Worker版本
 * 专为Service Worker环境优化，解决"Cannot read properties of undefined (reading 'sendMessage')"问题
 * 
 * 使用方法:
 * 1. 打开扩展的背景页 (chrome://extensions -> Page Assist -> 背景页)
 * 2. 在控制台中复制并粘贴此脚本
 * 3. 运行 testApi() 函数
 */

// 全局配置
const CONFIG = {
  // 访问令牌，需要与扩展配置中的令牌匹配
  ACCESS_TOKEN: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
  // 调试模式，启用更多日志
  DEBUG: true
};

// 日志函数
function log(...args) {
  console.log('[Page Assist API]', ...args);
}

function logError(...args) {
  console.error('[Page Assist API Error]', ...args);
}

/**
 * 查找API处理函数并导出到全局作用域
 * @returns {boolean} 是否成功找到并导出API处理函数
 */
function findApiHandler() {
  log('查找API处理函数...');
  
  // 检查是否已存在
  if (typeof self.handleDataProviderRequest === 'function') {
    log('API处理函数已存在于全局作用域');
    return true;
  }
  
  // 尝试从DataProviderAPI模块导出
  if (typeof self.DataProviderAPI !== 'undefined' && 
      typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
    self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
    log('从DataProviderAPI模块导出API处理函数到全局作用域');
    return true;
  }
  
  // 在各个模块中查找API处理函数
  for (const key in self) {
    const module = self[key];
    if (typeof module === 'object' && module !== null && 
        typeof module.handleDataProviderRequest === 'function') {
      self.handleDataProviderRequest = module.handleDataProviderRequest;
      log(`从${key}模块导出API处理函数到全局作用域`);
      return true;
    }
    
    // 深度搜索模块属性
    if (typeof module === 'object' && module !== null) {
      for (const subKey in module) {
        if (subKey === 'handleDataProviderRequest' && typeof module[subKey] === 'function') {
          self.handleDataProviderRequest = module[subKey];
          log(`从${key}.${subKey}导出API处理函数到全局作用域`);
          return true;
        }
      }
    }
  }
  
  logError('无法找到API处理函数');
  return false;
}

/**
 * 设置外部消息监听器
 * @returns {boolean} 是否成功设置监听器
 */
function setupExternalListener() {
  log('设置外部消息监听器...');
  
  // 检查是否已有监听器
  const hasListeners = chrome.runtime.onMessageExternal.hasListeners();
  log(`外部消息监听器状态: ${hasListeners ? '已设置' : '未设置'}`);
  
  if (!hasListeners) {
    try {
      chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
        log('收到外部消息:', request);
        
        // 对ping请求进行特殊处理
        if (request && request.type === 'ping') {
          log('收到ping请求，直接响应');
          sendResponse({
            success: true,
            pong: true,
            message: 'Service Worker已收到连接'
          });
          return true;
        }
        
        // 处理普通API请求
        if (typeof self.handleDataProviderRequest === 'function') {
          log('使用API处理函数处理请求');
          
          self.handleDataProviderRequest(request, sender)
            .then(response => {
              log('API处理成功，发送响应:', response);
              sendResponse(response);
            })
            .catch(error => {
              logError('API处理失败:', error);
              sendResponse({
                success: false,
                error: {
                  message: error.message || '内部错误'
                }
              });
            });
            
          return true; // 异步响应
        } else {
          logError('无法处理请求: API处理函数不可用');
          sendResponse({
            success: false,
            error: {
              message: 'API处理函数不可用'
            }
          });
          return true;
        }
      });
      
      log('外部消息监听器设置成功');
      return true;
    } catch (error) {
      logError('设置外部消息监听器失败:', error);
      return false;
    }
  }
  
  return true;
}

/**
 * 获取页面列表API测试
 * @returns {Promise<Object>} 测试结果
 */
async function getPagesList() {
  log('测试获取页面列表API...');
  
  if (!findApiHandler()) {
    return {
      success: false,
      error: {
        message: 'API处理函数不可用'
      }
    };
  }
  
  // 构建API请求
  const request = {
    type: 'list',
    entityType: 'page',
    query: {
      filter: {},
      page: 1,
      pageSize: 10
    },
    accessToken: CONFIG.ACCESS_TOKEN,
    clientId: 'test_' + Date.now()
  };
  
  log('发送API请求:', request);
  
  try {
    // 直接调用API处理函数
    const sender = { id: chrome.runtime.id };
    const response = await self.handleDataProviderRequest(request, sender);
    
    log('API调用成功:', response);
    return response;
  } catch (error) {
    logError('API调用失败:', error);
    return {
      success: false,
      error: {
        message: error.message || '内部错误'
      }
    };
  }
}

/**
 * 获取页面计数API测试
 * @returns {Promise<Object>} 测试结果
 */
async function getPageCount() {
  log('测试获取页面计数API...');
  
  if (!findApiHandler()) {
    return {
      success: false,
      error: {
        message: 'API处理函数不可用'
      }
    };
  }
  
  // 构建API请求
  const request = {
    type: 'count',
    entityType: 'page',
    query: {
      filter: {}
    },
    accessToken: CONFIG.ACCESS_TOKEN,
    clientId: 'test_' + Date.now()
  };
  
  log('发送API请求:', request);
  
  try {
    // 直接调用API处理函数
    const sender = { id: chrome.runtime.id };
    const response = await self.handleDataProviderRequest(request, sender);
    
    log('API调用成功:', response);
    return response;
  } catch (error) {
    logError('API调用失败:', error);
    return {
      success: false,
      error: {
        message: error.message || '内部错误'
      }
    };
  }
}

/**
 * 运行所有API测试
 * @returns {Promise<Object>} 测试结果
 */
async function testApi() {
  log('开始API测试...');
  
  // 确保API处理函数可用
  findApiHandler();
  
  // 设置外部消息监听器
  setupExternalListener();
  
  // 测试结果
  const results = [];
  
  // 测试1: 获取页面计数
  log('测试1: 获取页面计数');
  try {
    const countResult = await getPageCount();
    results.push({
      name: '获取页面计数',
      success: countResult.success,
      message: countResult.success 
        ? `成功: 共有 ${countResult.data.count} 个页面`
        : `失败: ${countResult.error?.message || '未知错误'}`
    });
  } catch (error) {
    results.push({
      name: '获取页面计数',
      success: false,
      message: `异常: ${error.message}`
    });
  }
  
  // 测试2: 获取页面列表
  log('测试2: 获取页面列表');
  try {
    const listResult = await getPagesList();
    results.push({
      name: '获取页面列表',
      success: listResult.success,
      message: listResult.success
        ? `成功: 获取了 ${listResult.data.length} 个页面`
        : `失败: ${listResult.error?.message || '未知错误'}`
    });
  } catch (error) {
    results.push({
      name: '获取页面列表',
      success: false,
      message: `异常: ${error.message}`
    });
  }
  
  // 输出测试结果汇总
  log('测试结果汇总:');
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    log(`${status} ${result.name}: ${result.message}`);
  });
  
  return {
    success: results.every(r => r.success),
    results
  };
}

// 导出到全局作用域
self.findApiHandler = findApiHandler;
self.setupExternalListener = setupExternalListener;
self.getPagesList = getPagesList;
self.getPageCount = getPageCount;
self.testApi = testApi;

// 自动初始化
log('Service Worker测试脚本已加载');
log('使用testApi()函数运行测试');
log('- findApiHandler(): 查找API处理函数');
log('- setupExternalListener(): 设置外部消息监听器');
log('- getPagesList(): 测试获取页面列表');
log('- getPageCount(): 测试获取页面计数'); 