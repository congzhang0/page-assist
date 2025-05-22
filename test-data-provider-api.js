/**
 * Page Assist 数据提供者API测试
 * 这是一个测试脚本，用于测试数据提供者API
 * 修复版本 - 支持多种环境下的测试
 */

// 全局配置
const CONFIG = {
  // 扩展ID，需要与实际的Page Assist扩展ID匹配
  EXTENSION_ID: 'ffiigpcapfgmbpcggdfklpikceehbffd',  
  // 访问令牌，需要与扩展配置中的令牌匹配
  ACCESS_TOKEN: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
  // 客户端ID，用于标识当前客户端
  CLIENT_ID: 'client_' + Math.random().toString(36).substring(2, 15),
  // 运行模式: 'web'(普通网页), 'extension'(扩展内部), 'service-worker'(服务工作线程)
  RUN_MODE: null,
  // 调试模式，启用更多日志
  DEBUG: true,
  // 跳过Ping检查，直接假设扩展可用（如果ping有问题但其他API可用时）
  SKIP_PING_CHECK: true
};

// 全局状态
const STATE = {
  // 扩展连接状态
  extensionConnected: false,
  // API处理函数可用状态
  apiHandlerAvailable: false,
  // Chrome API可用状态
  chromeApiAvailable: false,
  // 上次同步时间
  lastSyncTime: 0
};

// 日志函数
function log(...args) {
  if (CONFIG.DEBUG) {
    console.log('[Page Assist API]', ...args);
  }
}

function logError(...args) {
  console.error('[Page Assist API Error]', ...args);
}

function logWarning(...args) {
  console.warn('[Page Assist API Warning]', ...args);
}

// 检测运行环境并设置运行模式
function detectEnvironment() {
  // 检查是否在ServiceWorker环境
  const isServiceWorker = typeof self !== 'undefined' && typeof window === 'undefined' && typeof importScripts === 'function';
  
  // 检查Chrome API可用性
  const hasChromeRuntime = typeof chrome !== 'undefined' && chrome && chrome.runtime;
  
  // 检查扩展环境
  const isExtension = hasChromeRuntime && chrome.runtime.id;
  
  if (isServiceWorker) {
    CONFIG.RUN_MODE = 'service-worker';
    log('检测到在Service Worker环境中运行');
  } else if (isExtension) {
    CONFIG.RUN_MODE = 'extension';
    log('检测到在扩展页面中运行');
  } else {
    CONFIG.RUN_MODE = 'web';
    log('检测到在普通网页中运行');
  }
  
  return CONFIG.RUN_MODE;
}

// 安全地访问chrome API
const chromeAPI = {
  runtime: {
    // 安全地发送消息
    sendMessage: (extensionId, message, options, callback) => {
      try {
        // 检查Chrome API可用性
        if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
          const error = new Error('Chrome消息API不可用');
          if (callback) callback({ success: false, error: { message: error.message } });
          return Promise.reject(error);
        }
        
        // 处理参数的不同组合
        if (typeof extensionId === 'object' && !message) {
          // 格式: sendMessage(message, callback)
          return new Promise((resolve) => {
            chrome.runtime.sendMessage(extensionId, (response) => {
              const lastError = chrome.runtime.lastError;
              if (lastError) {
                logError('消息发送错误:', lastError);
                resolve({ success: false, error: { message: lastError.message } });
              } else {
                resolve(response || { success: false, error: { message: '无响应' } });
              }
            });
          });
        } else {
          // 标准格式或其他组合
          return new Promise((resolve) => {
            const sendCallback = (response) => {
              const lastError = chrome.runtime.lastError;
              if (lastError) {
                logError('消息发送错误:', lastError);
                resolve({ success: false, error: { message: lastError.message } });
              } else {
                resolve(response || { success: false, error: { message: '无响应' } });
              }
            };
            
            // 根据运行模式和参数，使用不同的调用方式
            if (CONFIG.RUN_MODE === 'extension') {
              chrome.runtime.sendMessage(message, sendCallback);
            } else {
              chrome.runtime.sendMessage(extensionId, message, options || {}, sendCallback);
            }
          });
        }
      } catch (error) {
        logError('发送消息时出现异常:', error);
        return Promise.reject(error);
      }
    },
    
    // 安全地调用getBackgroundPage
    getBackgroundPage: (callback) => {
      return new Promise((resolve, reject) => {
        try {
          if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.getBackgroundPage) {
            const error = new Error('chrome.runtime.getBackgroundPage不可用');
            if (callback) callback(null);
            reject(error);
            return;
          }
          
          chrome.runtime.getBackgroundPage((bg) => {
            if (chrome.runtime.lastError) {
              if (callback) callback(null);
              reject(new Error(chrome.runtime.lastError.message));
            } else {
              if (callback) callback(bg);
              resolve(bg);
            }
          });
        } catch (error) {
          if (callback) callback(null);
          reject(error);
        }
      });
    }
  }
};

// 检查环境和Chrome API可用性
const checkEnvironment = () => {
  log('检查测试环境...');
  
  // 确保已检测环境
  if (!CONFIG.RUN_MODE) {
    detectEnvironment();
  }
  
  // 必要的环境检查
  if (typeof window === 'undefined' && CONFIG.RUN_MODE !== 'service-worker') {
    return '错误: 此脚本必须在浏览器环境或Service Worker中运行。';
  }
  
  // 检查chrome对象是否存在
  if (typeof chrome === 'undefined') {
    return '错误: 未检测到chrome对象。请确保在Chrome浏览器中运行此脚本。';
  }
  
  // 检查chrome.runtime是否存在
  if (!chrome.runtime) {
    return '错误: 未检测到chrome.runtime对象。请确保在Chrome浏览器中运行此脚本。';
  }
  
  // 根据运行模式进行特定检查
  if (CONFIG.RUN_MODE === 'web') {
    // 普通网页模式下检查sendMessage
    if (typeof chrome.runtime.sendMessage !== 'function') {
      return '错误: chrome.runtime.sendMessage方法不可用。可能是由于以下原因：\n' +
             '1. 此页面通过file://协议加载，请使用Web服务器访问\n' +
             '2. 缺少适当的权限\n' +
             '3. 扩展的externally_connectable配置可能不正确';
    }
  } else if (CONFIG.RUN_MODE === 'extension') {
    // 扩展内部模式检查
    if (typeof chrome.runtime.getBackgroundPage !== 'function') {
      logWarning('chrome.runtime.getBackgroundPage不可用，但可以继续使用');
    }
  }
  
  STATE.chromeApiAvailable = true;
  log('环境检查通过: Chrome API可用');
  return null;
};

// 检查扩展是否可用
const checkExtension = async () => {
  try {
    log(`检查扩展ID: ${CONFIG.EXTENSION_ID} 是否可用...`);
    
    // 确保Chrome API可用
    if (!STATE.chromeApiAvailable) {
      const envCheck = checkEnvironment();
      if (envCheck) {
        return envCheck;
      }
    }
    
    // 根据运行模式使用不同的检查方法
    if (CONFIG.RUN_MODE === 'extension') {
      // 在扩展内部，尝试直接调用API处理函数
      try {
        // 尝试获取背景页
        let backgroundPage = null;
        try {
          backgroundPage = await chromeAPI.runtime.getBackgroundPage();
        } catch (err) {
          logWarning('获取背景页失败，将尝试其他方法', err);
        }
        
        if (backgroundPage && typeof backgroundPage.handleDataProviderRequest === 'function') {
          log('✅ 扩展内部API处理函数可用');
          STATE.apiHandlerAvailable = true;
          STATE.extensionConnected = true;
          return null;
        } else {
          logWarning('⚠️ 未找到API处理函数，将尝试通过消息传递');
        }
      } catch (err) {
        logWarning('⚠️ 访问背景页失败，将尝试通过消息传递', err);
      }
    } else if (CONFIG.RUN_MODE === 'service-worker') {
      // Service Worker环境 - 尝试直接调用API
      log('检测到Service Worker环境，尝试直接调用API');
      
      // 尝试查找API处理函数
      if (typeof self.handleDataProviderRequest !== 'function') {
        // 尝试从DataProviderAPI模块找到并导出
        if (typeof self.DataProviderAPI !== 'undefined' && 
            typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
          self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
          log('成功找到并导出API处理函数');
        } else {
          // 搜索所有模块
          for (const key in self) {
            const module = self[key];
            if (typeof module === 'object' && module !== null && 
                typeof module.handleDataProviderRequest === 'function') {
              self.handleDataProviderRequest = module.handleDataProviderRequest;
              log(`从${key}模块导出API处理函数`);
              break;
            }
          }
        }
      }
      
      // 如果找到了处理函数，直接调用它
      if (typeof self.handleDataProviderRequest === 'function') {
        log('直接调用API处理函数进行测试');
        
        const testRequest = {
          type: 'list',
          entityType: 'page',
          query: { filter: {}, page: 1, pageSize: 1 },
          accessToken: CONFIG.ACCESS_TOKEN,
          clientId: CONFIG.CLIENT_ID
        };
        
        const sender = { id: chrome.runtime.id };
        try {
          const response = await self.handleDataProviderRequest(testRequest, sender);
          
          if (response && response.success) {
            log('✅ API处理函数调用成功:', response);
            STATE.extensionConnected = true;
            STATE.apiHandlerAvailable = true;
            return null;
          } else {
            logError('❌ API处理函数调用失败:', response);
            return '错误: API处理函数返回错误或无响应';
          }
        } catch (error) {
          logError('❌ API处理函数执行出错:', error);
          return `错误: API处理函数执行出错: ${error.message}`;
        }
      } else {
        logError('❌ 无法找到API处理函数');
        return '错误: 无法找到API处理函数';
      }
    }
    
    // 如果配置了跳过ping检查，直接假设扩展可用
    if (CONFIG.SKIP_PING_CHECK) {
      log('⚠️ 跳过ping检查，直接假设扩展可用');
      STATE.extensionConnected = true;
      return null;
    }
    
    // 使用消息传递检查扩展是否可用（适用于web模式或其他模式的回退方法）
    try {
      log('使用消息传递检查扩展连接');
      
      // 准备请求 - 使用ping格式
      const pingRequest = { 
        type: 'ping', 
        entityType: 'page',  // 添加实体类型参数，避免 entity_type_not_allowed 错误
        accessToken: CONFIG.ACCESS_TOKEN,
        clientId: CONFIG.CLIENT_ID
      };

      log('发送ping请求:', pingRequest);
      
      // 发送请求
      const response = await chromeAPI.runtime.sendMessage(
        CONFIG.RUN_MODE === 'extension' ? undefined : CONFIG.EXTENSION_ID,
        pingRequest
      );
      
      log('收到ping响应:', response);
      
      if (response && (response.success === true || response.pong === true)) {
        log('扩展连接成功:', response);
        STATE.extensionConnected = true;
        return null;
      } else {
        const errorInfo = response && response.error ? `错误代码: ${response.error.code}, 消息: ${response.error.message}` : '未知错误';
        logError('扩展响应无效:', response, errorInfo);
        
        // 尝试启用跳过ping选项
        CONFIG.SKIP_PING_CHECK = true;
        logWarning('⚠️ 自动启用SKIP_PING_CHECK，将尝试直接调用其他API');
        STATE.extensionConnected = true;
        
        return '警告: ping检查失败，但将尝试直接调用其他API';
      }
    } catch (error) {
      logError('扩展连接失败:', error);
      
      // 检查是否是因为externally_connectable配置问题
      if (error.message && (error.message.includes('externally_connectable') || 
                           error.message.includes('Extension') || 
                           error.message.includes('extension'))) {
        logWarning('⚠️ 可能是externally_connectable配置问题，检查manifest.json');
        logWarning('提示: 确保manifest.json中包含如下配置:');
        logWarning(`"externally_connectable": {
  "matches": ["*://*/*"]
}`);
      }
      
      // 尝试启用跳过ping选项
      CONFIG.SKIP_PING_CHECK = true;
      logWarning('⚠️ 自动启用SKIP_PING_CHECK，将尝试直接调用其他API');
      STATE.extensionConnected = true;
      
      return `警告: 无法连接到扩展(${error.message || '未知错误'})，但将尝试直接调用其他API`;
    }
  } catch (error) {
    logError('检查扩展时出错:', error);
    return `错误: ${error.message || '未知错误'}`;
  }
};

/**
 * 发送API请求
 * @param {Object} request - API请求对象
 * @returns {Promise<Object>} - API响应对象
 */
async function sendApiRequest(request) {
  // 添加访问令牌和客户端ID
  const fullRequest = {
    ...request,
    accessToken: CONFIG.ACCESS_TOKEN,
    clientId: CONFIG.CLIENT_ID
  };
  
  log('发送请求:', JSON.stringify(fullRequest, null, 2));
  
  try {
    // 检查扩展连接状态
    if (!STATE.extensionConnected && !CONFIG.SKIP_PING_CHECK) {
      const extensionCheck = await checkExtension();
      if (extensionCheck && !extensionCheck.startsWith('警告:')) {
        throw new Error(extensionCheck);
      }
    }
    
    // 根据运行模式选择不同的发送方式
    if (CONFIG.RUN_MODE === 'service-worker') {
      // Service Worker环境 - 直接调用API处理函数
      if (typeof self.handleDataProviderRequest === 'function') {
        log('在Service Worker中直接调用API处理函数');
        try {
          const sender = { id: chrome.runtime.id };
          const response = await self.handleDataProviderRequest(fullRequest, sender);
          log('收到响应:', JSON.stringify(response, null, 2));
          return response || { success: false, error: { message: '处理函数返回空响应' } };
        } catch (error) {
          logError('直接调用API处理函数失败:', error);
          throw new Error(`API处理函数调用失败: ${error.message}`);
        }
      } else {
        // 尝试自动查找API处理函数
        if (typeof self.DataProviderAPI !== 'undefined' && 
            typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
          self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
          log('已自动找到并导出API处理函数，重试请求');
          return sendApiRequest(request); // 递归调用，现在handleDataProviderRequest已定义
        }
        
        // 搜索所有模块
        for (const key in self) {
          const module = self[key];
          if (typeof module === 'object' && module !== null && 
              typeof module.handleDataProviderRequest === 'function') {
            self.handleDataProviderRequest = module.handleDataProviderRequest;
            log(`从${key}模块导出API处理函数，重试请求`);
            return sendApiRequest(request); // 递归调用，现在handleDataProviderRequest已定义
          }
        }
        
        logError('无法找到API处理函数');
        throw new Error('API处理函数不可用，无法处理请求');
      }
    } else if (CONFIG.RUN_MODE === 'extension' && STATE.apiHandlerAvailable) {
      // 如果在扩展内部且API处理函数可用，尝试直接调用
      try {
        const bgPage = await chromeAPI.runtime.getBackgroundPage();
        if (bgPage && typeof bgPage.handleDataProviderRequest === 'function') {
          const response = await bgPage.handleDataProviderRequest(fullRequest, { id: chrome.runtime.id });
          log('收到响应:', JSON.stringify(response, null, 2));
          return response || { success: false, error: { message: '扩展返回空响应' } };
        }
      } catch (error) {
        logWarning('直接调用API失败，尝试消息传递:', error);
      }
    }
    
    // 使用消息传递（适用于Web模式或扩展模式的回退方法）
    try {
      log('使用消息传递发送API请求...');
      
      const response = await chromeAPI.runtime.sendMessage(
        CONFIG.RUN_MODE === 'extension' ? undefined : CONFIG.EXTENSION_ID,
        fullRequest
      );
      
      log('收到响应:', JSON.stringify(response, null, 2));
      
      // 特殊处理entity_type_not_allowed错误
      if (response && response.success === false && 
          response.error && response.error.code === 'entity_type_not_allowed') {
        logError('请求被拒绝: 实体类型不允许访问', response.error);
        logWarning('提示: 检查访问令牌是否有权限访问此实体类型');
      }
      
      return response || { success: false, error: { message: '扩展返回空响应' } };
    } catch (error) {
      // 如果消息发送失败，但我们在Service Worker环境中，可以尝试自动设置消息监听器
      if (CONFIG.RUN_MODE === 'service-worker' && !chrome.runtime.onMessageExternal.hasListeners()) {
        logWarning('消息发送失败，尝试设置外部消息监听器');
        try {
          // 设置外部消息监听器
          chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
            log('收到外部消息:', request);
            
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
          
          log('外部消息监听器已设置，请重试');
          throw new Error('已设置外部消息监听器，请重试操作');
        } catch (setupError) {
          logError('设置外部消息监听器失败:', setupError);
          throw new Error(`无法设置消息处理: ${setupError.message}`);
        }
      }
      
      throw error;
    }
  } catch (error) {
    logError('发送API请求出错:', error);
    throw new Error(`API请求失败: ${error.message}`);
  }
}

/**
 * 获取单个页面
 * @param {string} pageId - 页面ID
 * @returns {Promise<Object>} - 页面数据
 */
async function getPage(pageId) {
  log(`尝试获取页面: ${pageId}`);
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
  log('尝试获取页面列表');
  const request = {
    type: 'list',
    entityType: 'page',
    query: {
      page: options.page || 1,
      pageSize: options.pageSize || 10,
      filter: options.filter || {},
      sort: options.sort || { updatedAt: -1 }
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
 * 获取页面计数
 * @param {Object} filter - 过滤条件
 * @returns {Promise<number>} - 页面数量
 */
async function getPageCount(filter = {}) {
  log('尝试获取页面计数');
  const request = {
    type: 'count',
    entityType: 'page',
    query: {
      filter: filter
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
 * @returns {Promise<Array>} - 标签列表
 */
async function getAllTags() {
  log('尝试获取所有标签');
  
  // 首先尝试使用 'tags' 请求类型
  try {
    const request = {
      type: 'tags',
      entityType: 'page'
    };
    
    const response = await sendApiRequest(request);
    
    if (response.success) {
      log('使用tags请求类型成功获取标签');
      return response.data;
    } else {
      log('tags请求类型失败，尝试使用备用方法', response.error);
    }
  } catch (error) {
    log('tags请求类型出错，尝试使用备用方法', error);
  }
  
  // 备用方法：从所有页面中提取标签
  log('使用备用方法：从页面列表中提取标签');
  try {
    const { items } = await getPages({ pageSize: 100 });
    
    // 从页面中提取所有标签并去重
    const tagSet = new Set();
    items.forEach(page => {
      if (Array.isArray(page.tags)) {
        page.tags.forEach(tag => tag && tagSet.add(tag));
      }
    });
    
    const tags = Array.from(tagSet);
    log(`成功从页面中提取了 ${tags.length} 个唯一标签`);
    return tags;
  } catch (error) {
    throw new Error(`获取标签失败: ${error.message || '未知错误'}`);
  }
}

/**
 * 同步数据
 * @param {number} lastSyncTime - 上次同步时间戳
 * @param {boolean} fullSync - 是否完全同步
 * @returns {Promise<Object>} - 同步结果
 */
async function syncData(lastSyncTime = 0, fullSync = false) {
  log(`尝试同步数据，上次同步时间: ${lastSyncTime}, 完全同步: ${fullSync}`);
  const request = {
    type: 'sync',
    entityType: 'page',
    query: {
      lastSyncTime: lastSyncTime,
      fullSync: fullSync
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`同步数据失败: ${response.error?.message || '未知错误'}`);
  }
  
  // 更新上次同步时间
  STATE.lastSyncTime = response.meta?.serverTime || Date.now();
  
  return {
    created: response.data?.created || [],
    updated: response.data?.updated || [],
    deleted: response.data?.deleted || [],
    serverTime: response.meta?.serverTime
  };
}

/**
 * 获取变更记录
 * @param {number} lastSyncTime - 起始时间戳
 * @returns {Promise<Object>} - 变更记录
 */
async function getChanges(lastSyncTime = 0) {
  log(`尝试获取变更记录，起始时间: ${lastSyncTime}`);
  const request = {
    type: 'changes',
    entityType: 'page',
    query: {
      since: lastSyncTime
    }
  };
  
  const response = await sendApiRequest(request);
  
  if (!response.success) {
    throw new Error(`获取变更记录失败: ${response.error?.message || '未知错误'}`);
  }
  
  return {
    changes: response.data,
    serverTime: response.meta?.serverTime
  };
}

/**
 * 测试API
 * 运行一系列测试以验证API功能
 */
async function testApi() {
  const results = [];
  let success = true;
  
  try {
    log('🧪 开始API测试');
    
    // 检查环境
    const envError = checkEnvironment();
    if (envError) {
      throw new Error(envError);
    }
    
    // 检查扩展连接
    const extError = await checkExtension();
    if (extError) {
      throw new Error(extError);
    }
    
    results.push({ name: '环境检查', status: 'success', message: '环境和扩展连接检查通过' });
    
    // 测试1: 获取页面计数
    try {
      const count = await getPageCount();
      results.push({ 
        name: '获取页面计数', 
        status: 'success', 
        message: `共有 ${count} 个页面` 
      });
    } catch (error) {
      success = false;
      results.push({ 
        name: '获取页面计数', 
        status: 'error', 
        message: error.message 
      });
    }
    
    // 测试2: 获取页面列表
    try {
      const { items, meta } = await getPages();
      results.push({ 
        name: '获取页面列表', 
        status: 'success', 
        message: `成功获取 ${items.length} 个页面, 共 ${meta?.total || '未知'} 个` 
      });
      
      // 如果有页面，尝试测试获取单个页面
      if (items.length > 0) {
        const pageId = items[0].id;
        
        // 测试3: 获取单个页面
        try {
          const page = await getPage(pageId);
          results.push({ 
            name: '获取单个页面', 
            status: 'success', 
            message: `成功获取页面: ${page.title || page.id}` 
          });
        } catch (error) {
          success = false;
          results.push({ 
            name: '获取单个页面', 
            status: 'error', 
            message: error.message 
          });
        }
      } else {
        results.push({ 
          name: '获取单个页面', 
          status: 'skipped', 
          message: '没有可用的页面ID，跳过测试' 
        });
      }
    } catch (error) {
      success = false;
      results.push({ 
        name: '获取页面列表', 
        status: 'error', 
        message: error.message 
      });
    }
    
    // 测试4: 获取所有标签
    try {
      const tags = await getAllTags();
      results.push({ 
        name: '获取所有标签', 
        status: 'success', 
        message: `成功获取 ${tags.length} 个标签` 
      });
    } catch (error) {
      success = false;
      results.push({ 
        name: '获取所有标签', 
        status: 'error', 
        message: error.message 
      });
    }
    
    // 测试5: 同步数据
    try {
      const syncResult = await syncData(0, true);
      results.push({ 
        name: '同步数据', 
        status: 'success', 
        message: `同步成功，新增: ${syncResult.created.length}, 更新: ${syncResult.updated.length}, 删除: ${syncResult.deleted.length}` 
      });
    } catch (error) {
      success = false;
      results.push({ 
        name: '同步数据', 
        status: 'error', 
        message: error.message 
      });
    }
    
    // 测试6: 获取变更记录
    try {
      const { changes } = await getChanges(Date.now() - 30 * 24 * 60 * 60 * 1000); // 过去30天
      results.push({ 
        name: '获取变更记录', 
        status: 'success', 
        message: `成功获取 ${changes.length} 条变更记录` 
      });
    } catch (error) {
      success = false;
      results.push({ 
        name: '获取变更记录', 
        status: 'error', 
        message: error.message 
      });
    }
    
  } catch (error) {
    success = false;
    results.push({ 
      name: '测试初始化', 
      status: 'error', 
      message: error.message 
    });
  }
  
  // 返回测试结果
  return {
    success,
    results,
    timestamp: Date.now()
  };
}

// 设置配置项
function setAccessToken(token) {
  log(`更新访问令牌: ${CONFIG.ACCESS_TOKEN} -> ${token}`);
  CONFIG.ACCESS_TOKEN = token;
  // 重置连接状态，使其在下次API调用时重新检查
  STATE.extensionConnected = false;
}

function setExtensionId(id) {
  log(`更新扩展ID: ${CONFIG.EXTENSION_ID} -> ${id}`);
  CONFIG.EXTENSION_ID = id;
  // 重置连接状态，使其在下次API调用时重新检查
  STATE.extensionConnected = false;
}

// 检查是否在web环境，为window对象添加必要的函数
if (typeof window !== 'undefined') {
  // 在window对象上暴露API函数和配置
  window.CONFIG = CONFIG;
  window.STATE = STATE;
  window.detectEnvironment = detectEnvironment;
  window.checkEnvironment = checkEnvironment;
  window.checkExtension = checkExtension;
  window.getPage = getPage;
  window.getPages = getPages;
  window.getPageCount = getPageCount;
  window.getAllTags = getAllTags;
  window.syncData = syncData;
  window.getChanges = getChanges;
  window.testApi = testApi;
  window.setAccessToken = setAccessToken;
  window.setExtensionId = setExtensionId;
  
  // 自动检测环境
  detectEnvironment();
  log('API测试脚本已加载。使用 testApi() 开始测试。');
}

// 如果在Node.js环境，导出API
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CONFIG,
    STATE,
    detectEnvironment,
    checkEnvironment,
    checkExtension,
    getPage,
    getPages,
    getPageCount,
    getAllTags,
    syncData,
    getChanges,
    testApi,
    setAccessToken,
    setExtensionId
  };
} 