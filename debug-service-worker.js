/**
 * Page Assist 数据提供者API调试脚本 - 增强版
 * 提供详细日志记录和错误诊断
 */

// 全局配置
const CONFIG = {
  ACCESS_TOKEN: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
  DEBUG_LEVEL: 'verbose' // 'basic', 'verbose', 'trace'
};

// 增强的日志系统
const Logger = {
  trace: function(...args) {
    if (CONFIG.DEBUG_LEVEL === 'trace') {
      console.log('[TRACE]', ...args);
    }
  },
  
  debug: function(...args) {
    if (CONFIG.DEBUG_LEVEL === 'verbose' || CONFIG.DEBUG_LEVEL === 'trace') {
      console.log('[DEBUG]', ...args);
    }
  },
  
  info: function(...args) {
    console.log('[INFO]', ...args);
  },
  
  warn: function(...args) {
    console.warn('[WARN]', ...args);
  },
  
  error: function(...args) {
    console.error('[ERROR]', ...args);
  },
  
  group: function(title) {
    console.group(title);
  },
  
  groupEnd: function() {
    console.groupEnd();
  },
  
  // 详细记录对象
  inspectObject: function(title, obj) {
    if (CONFIG.DEBUG_LEVEL !== 'basic') {
      console.group(title);
      if (obj === null) {
        console.log('null');
      } else if (obj === undefined) {
        console.log('undefined');
      } else if (typeof obj === 'object') {
        try {
          console.log(JSON.stringify(obj, null, 2));
        } catch (e) {
          console.log('无法序列化对象:', obj);
        }
      } else {
        console.log(obj);
      }
      console.groupEnd();
    }
  }
};

/**
 * 检查环境信息
 */
function inspectEnvironment() {
  Logger.info('正在检查环境...');
  
  // 显示基本环境信息
  Logger.group('环境信息');
  Logger.info('运行环境:', typeof window === 'undefined' ? 'Service Worker' : 'Web页面');
  Logger.info('Chrome版本:', navigator.userAgent);
  Logger.info('扩展ID:', chrome.runtime.id);
  
  // 检查关键API是否可用
  const apis = {
    'chrome': typeof chrome !== 'undefined',
    'chrome.runtime': typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined',
    'chrome.runtime.sendMessage': typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined' && typeof chrome.runtime.sendMessage === 'function',
    'chrome.runtime.onMessage': typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined' && typeof chrome.runtime.onMessage !== 'undefined',
    'chrome.runtime.onMessageExternal': typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined' && typeof chrome.runtime.onMessageExternal !== 'undefined'
  };
  
  for (const [api, isAvailable] of Object.entries(apis)) {
    Logger.info(`${api}: ${isAvailable ? '✅ 可用' : '❌ 不可用'}`);
  }
  
  // 检查消息监听器状态
  if (apis['chrome.runtime.onMessage']) {
    Logger.info('内部消息监听器:', chrome.runtime.onMessage.hasListeners() ? '已设置' : '未设置');
  }
  
  if (apis['chrome.runtime.onMessageExternal']) {
    Logger.info('外部消息监听器:', chrome.runtime.onMessageExternal.hasListeners() ? '已设置' : '未设置');
  }
  
  Logger.groupEnd();
}

/**
 * 检查并列出所有可能包含API处理函数的模块
 */
function scanForApiHandler() {
  Logger.info('扫描API处理函数...');
  
  // 首先检查是否已存在
  if (typeof self.handleDataProviderRequest === 'function') {
    Logger.info('✅ 全局API处理函数已存在');
    return true;
  }
  
  // 候选模块和函数
  const candidates = [];
  
  // 检查DataProviderAPI特殊模块
  if (typeof self.DataProviderAPI !== 'undefined') {
    Logger.debug('检查DataProviderAPI模块...');
    
    if (typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
      candidates.push({
        path: 'DataProviderAPI.handleDataProviderRequest',
        handler: self.DataProviderAPI.handleDataProviderRequest
      });
    }
    
    // 检查其他可能的函数名
    const possibleHandlerNames = ['handleApiRequest', 'handleRequest', 'processApiRequest', 'handleExternalRequest'];
    for (const name of possibleHandlerNames) {
      if (typeof self.DataProviderAPI[name] === 'function') {
        candidates.push({
          path: `DataProviderAPI.${name}`,
          handler: self.DataProviderAPI[name]
        });
      }
    }
  }
  
  // 扫描所有全局对象
  for (const key in self) {
    // 跳过内置对象和函数
    if (key === 'self' || key === 'window' || key === 'globalThis' || key === 'chrome') continue;
    
    const obj = self[key];
    if (typeof obj === 'object' && obj !== null) {
      Logger.trace(`检查全局对象: ${key}`);
      
      // 检查直接处理函数
      if (typeof obj.handleDataProviderRequest === 'function') {
        candidates.push({
          path: `${key}.handleDataProviderRequest`,
          handler: obj.handleDataProviderRequest
        });
      }
      
      // 检查嵌套对象
      for (const subKey in obj) {
        const subObj = obj[subKey];
        
        // 检查是否为API模块
        if (
          typeof subObj === 'object' && 
          subObj !== null && 
          (subKey.includes('API') || subKey.includes('Provider') || subKey.includes('Service'))
        ) {
          Logger.trace(`检查潜在API模块: ${key}.${subKey}`);
          
          // 检查处理函数
          if (typeof subObj.handleDataProviderRequest === 'function') {
            candidates.push({
              path: `${key}.${subKey}.handleDataProviderRequest`,
              handler: subObj.handleDataProviderRequest
            });
          }
        }
        
        // 检查直接函数（可能是API处理函数）
        if (typeof subObj === 'function' && 
            (subKey.includes('handle') || subKey.includes('process') || subKey.includes('api'))) {
          candidates.push({
            path: `${key}.${subKey}`,
            handler: subObj
          });
        }
      }
    }
  }
  
  // 显示候选项
  if (candidates.length > 0) {
    Logger.info(`找到 ${candidates.length} 个潜在API处理函数候选`);
    candidates.forEach((candidate, index) => {
      Logger.info(`候选项 ${index + 1}: ${candidate.path}`);
    });
    
    // 使用第一个候选项
    if (candidates.length > 0) {
      self.handleDataProviderRequest = candidates[0].handler;
      Logger.info(`✅ 已导出 ${candidates[0].path} 作为全局API处理函数`);
      return true;
    }
  } else {
    Logger.warn('❌ 未找到任何API处理函数候选');
    return false;
  }
}

/**
 * 运行API处理函数诊断测试
 */
async function testApiHandler() {
  Logger.info('正在测试API处理函数...');
  
  if (typeof self.handleDataProviderRequest !== 'function') {
    if (!scanForApiHandler()) {
      Logger.error('无法找到API处理函数，无法进行测试');
      return false;
    }
  }
  
  // 尝试多种请求类型
  const testRequests = [
    {
      name: 'Ping请求',
      request: { 
        type: 'ping', 
        entityType: 'page',
        accessToken: CONFIG.ACCESS_TOKEN,
        clientId: 'test_' + Date.now()
      }
    },
    {
      name: '页面计数请求',
      request: {
        type: 'count',
        entityType: 'page',
        query: { filter: {} },
        accessToken: CONFIG.ACCESS_TOKEN,
        clientId: 'test_' + Date.now()
      }
    },
    {
      name: '页面列表请求',
      request: {
        type: 'list',
        entityType: 'page',
        query: { filter: {}, page: 1, pageSize: 5 },
        accessToken: CONFIG.ACCESS_TOKEN,
        clientId: 'test_' + Date.now()
      }
    }
  ];
  
  let success = false;
  
  // 逐个测试不同请求
  for (const test of testRequests) {
    Logger.group(`测试: ${test.name}`);
    Logger.debug('请求:', test.request);
    
    try {
      const sender = { id: chrome.runtime.id };
      Logger.debug('发送者:', sender);
      
      const startTime = Date.now();
      const response = await self.handleDataProviderRequest(test.request, sender);
      const endTime = Date.now();
      
      Logger.debug(`响应时间: ${endTime - startTime}ms`);
      Logger.inspectObject('响应内容', response);
      
      if (response && response.success === true) {
        Logger.info(`✅ ${test.name}测试成功`);
        success = true;
        // 如果一个测试成功，就认为API处理函数是有效的
        break;
      } else {
        Logger.warn(`❌ ${test.name}测试失败:`, response?.error?.message || '未知错误');
      }
    } catch (error) {
      Logger.error(`❌ ${test.name}测试出错:`, error);
    }
    
    Logger.groupEnd();
  }
  
  return success;
}

/**
 * 确保外部消息监听器已设置
 */
function ensureExternalListener() {
  Logger.info('检查外部消息监听器...');
  
  const hasListeners = chrome.runtime.onMessageExternal.hasListeners();
  Logger.info(`外部消息监听器状态: ${hasListeners ? '已设置' : '未设置'}`);
  
  if (!hasListeners) {
    Logger.info('创建外部消息监听器...');
    
    chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
      Logger.group('收到外部消息');
      Logger.debug('请求:', request);
      Logger.debug('发送者:', sender);
      
      // 特殊处理ping请求
      if (request && request.type === 'ping') {
        Logger.info('收到ping请求，直接响应');
        const response = {
          success: true,
          pong: true,
          message: 'Service Worker已接收连接',
          time: new Date().toISOString()
        };
        
        Logger.debug('发送ping响应:', response);
        sendResponse(response);
        Logger.groupEnd();
        return true;
      }
      
      // 确保API处理函数可用
      if (typeof self.handleDataProviderRequest !== 'function') {
        scanForApiHandler();
      }
      
      // 处理API请求
      if (typeof self.handleDataProviderRequest === 'function') {
        Logger.info('转发请求到API处理函数');
        
        self.handleDataProviderRequest(request, sender)
          .then(response => {
            Logger.debug('API处理成功，发送响应:', response);
            sendResponse(response);
          })
          .catch(error => {
            Logger.error('API处理错误:', error);
            sendResponse({
              success: false,
              error: {
                message: `API处理错误: ${error.message}`,
                stack: error.stack
              }
            });
          });
        
        Logger.groupEnd();
        return true; // 异步处理
      } else {
        Logger.error('无法处理请求: API处理函数不可用');
        sendResponse({
          success: false,
          error: {
            message: 'API处理函数不可用'
          }
        });
        Logger.groupEnd();
        return true;
      }
    });
    
    Logger.info('✅ 外部消息监听器已创建');
    return true;
  }
  
  return true;
}

/**
 * 运行综合诊断
 */
async function runDiagnostics() {
  Logger.info('开始Page Assist API诊断...');
  
  // 检查环境
  inspectEnvironment();
  
  // 扫描API处理函数
  const handlerFound = scanForApiHandler();
  
  // 确保外部消息监听器
  ensureExternalListener();
  
  // 测试API处理
  if (handlerFound) {
    const handlerWorks = await testApiHandler();
    if (handlerWorks) {
      Logger.info('✅ API处理函数工作正常');
    } else {
      Logger.warn('⚠️ API处理函数测试失败，但已被找到');
    }
  }
  
  Logger.info('诊断完成。可以使用以下命令进行进一步测试:');
  Logger.info('- runDiagnostics(): 重新运行诊断');
  Logger.info('- scanForApiHandler(): 扫描API处理函数');
  Logger.info('- testApiHandler(): 测试API处理函数');
  Logger.info('- ensureExternalListener(): 确保外部消息监听器已设置');
  Logger.info('- CONFIG.DEBUG_LEVEL = "trace": 设置最详细的日志级别');
}

// 导出到全局作用域
self.runDiagnostics = runDiagnostics;
self.scanForApiHandler = scanForApiHandler;
self.testApiHandler = testApiHandler;
self.ensureExternalListener = ensureExternalListener;
self.Logger = Logger;
self.CONFIG = CONFIG;

// 自动运行诊断
Logger.info('调试脚本已加载。正在运行初始诊断...');
runDiagnostics(); 