/**
 * Page Assist 直接API测试脚本
 * 简化版，专为诊断Service Worker环境下的API问题
 */

// 配置
const ACCESS_TOKEN = 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m';
const CLIENT_ID = 'direct_test_' + Date.now();

// 日志函数 
function log(level, ...args) {
  const prefix = {
    'INFO': '📘',
    'SUCCESS': '✅',
    'ERROR': '❌',
    'WARN': '⚠️',
    'DEBUG': '🔍'
  }[level] || '📝';
  
  console.log(prefix, `[${level}]`, ...args);
}

// 查找API处理函数
function findApiHandler() {
  log('INFO', '查找API处理函数...');
  
  // 先检查是否已存在
  if (typeof self.handleDataProviderRequest === 'function') {
    log('SUCCESS', 'API处理函数已存在于全局作用域');
    return true;
  }
  
  // 尝试DataProviderAPI模块
  if (typeof self.DataProviderAPI === 'object' && 
      typeof self.DataProviderAPI.handleDataProviderRequest === 'function') {
    self.handleDataProviderRequest = self.DataProviderAPI.handleDataProviderRequest;
    log('SUCCESS', '从DataProviderAPI模块导出了API处理函数');
    return true;
  }
  
  // 收集所有模块的名称，便于诊断
  const moduleNames = Object.keys(self).filter(key => 
    typeof self[key] === 'object' && 
    self[key] !== null && 
    key !== 'chrome' && 
    key !== 'self'
  );
  
  log('DEBUG', `发现 ${moduleNames.length} 个可能的模块:`, moduleNames.join(', '));
  
  // 在所有模块中查找
  for (const key of moduleNames) {
    const module = self[key];
    
    // 检查直接拥有的处理函数
    if (typeof module.handleDataProviderRequest === 'function') {
      self.handleDataProviderRequest = module.handleDataProviderRequest;
      log('SUCCESS', `从${key}模块导出了API处理函数`);
      return true;
    }
    
    // 检查是否有其他名称的处理函数
    const possibleHandlerNames = [
      'handleApiRequest', 
      'processApiRequest', 
      'processDataProviderRequest',
      'handleRequest'
    ];
    
    for (const handlerName of possibleHandlerNames) {
      if (typeof module[handlerName] === 'function') {
        log('WARN', `在${key}模块找到了可能的替代处理函数: ${handlerName}`);
        self.handleDataProviderRequest = module[handlerName];
        return true;
      }
    }
  }
  
  log('ERROR', '无法找到API处理函数');
  return false;
}

// 测试API处理函数
async function testApiHandler() {
  log('INFO', '测试API处理函数...');
  
  if (typeof self.handleDataProviderRequest !== 'function') {
    if (!findApiHandler()) {
      log('ERROR', '无法找到API处理函数，无法进行测试');
      return false;
    }
  }
  
  const testRequest = {
    type: 'list',
    entityType: 'page',
    query: { 
      filter: {}, 
      page: 1, 
      pageSize: 5 
    },
    accessToken: ACCESS_TOKEN,
    clientId: CLIENT_ID
  };
  
  log('DEBUG', '发送测试请求:', testRequest);
  
  try {
    // 创建一个模拟的sender对象
    const sender = { id: chrome.runtime.id };
    
    // 直接调用API处理函数
    const startTime = Date.now();
    const response = await self.handleDataProviderRequest(testRequest, sender);
    const duration = Date.now() - startTime;
    
    log('DEBUG', `请求耗时: ${duration}ms`);
    log('DEBUG', '响应对象:', response);
    
    if (!response) {
      log('ERROR', '收到空响应');
      return false;
    }
    
    if (response.success === true) {
      log('SUCCESS', `API测试成功: 获取了${response.data?.length || 0}个页面`);
      return true;
    } else {
      log('ERROR', '测试失败:', response.error?.message || '未知错误');
      return false;
    }
  } catch (error) {
    log('ERROR', '测试过程中发生错误:', error);
    return false;
  }
}

// 执行Ping测试
async function testPing() {
  log('INFO', '执行Ping测试...');
  
  if (typeof self.handleDataProviderRequest !== 'function') {
    if (!findApiHandler()) {
      log('ERROR', '无法找到API处理函数，无法进行测试');
      return false;
    }
  }
  
  const pingRequest = {
    type: 'ping',
    entityType: 'page',
    accessToken: ACCESS_TOKEN,
    clientId: CLIENT_ID
  };
  
  log('DEBUG', '发送Ping请求:', pingRequest);
  
  try {
    const sender = { id: chrome.runtime.id };
    const response = await self.handleDataProviderRequest(pingRequest, sender);
    
    log('DEBUG', 'Ping响应:', response);
    
    if (response && (response.success === true || response.pong === true)) {
      log('SUCCESS', 'Ping测试成功');
      return true;
    } else {
      log('ERROR', 'Ping测试失败:', response);
      return false;
    }
  } catch (error) {
    log('ERROR', 'Ping测试错误:', error);
    return false;
  }
}

// 测试页面计数API
async function testPageCount() {
  log('INFO', '测试页面计数API...');
  
  if (typeof self.handleDataProviderRequest !== 'function') {
    if (!findApiHandler()) {
      log('ERROR', '无法找到API处理函数，无法进行测试');
      return false;
    }
  }
  
  const countRequest = {
    type: 'count',
    entityType: 'page',
    query: { filter: {} },
    accessToken: ACCESS_TOKEN,
    clientId: CLIENT_ID
  };
  
  log('DEBUG', '发送页面计数请求:', countRequest);
  
  try {
    const sender = { id: chrome.runtime.id };
    const response = await self.handleDataProviderRequest(countRequest, sender);
    
    log('DEBUG', '页面计数响应:', response);
    
    if (response && response.success === true) {
      log('SUCCESS', `页面计数测试成功: 共有 ${response.data.count} 个页面`);
      return true;
    } else {
      log('ERROR', '页面计数测试失败:', response?.error?.message || '未知错误');
      return false;
    }
  } catch (error) {
    log('ERROR', '页面计数测试错误:', error);
    return false;
  }
}

// 查看访问令牌
function showAccessToken() {
  log('INFO', '当前访问令牌:', ACCESS_TOKEN);
}

// 查看错误处理详情
function showErrorHandling() {
  log('INFO', '检查错误处理...');
  
  try {
    log('DEBUG', '检查是否有全局错误处理器...');
    
    if (typeof self.onerror === 'function') {
      log('DEBUG', '全局错误处理器已设置');
    } else {
      log('DEBUG', '未设置全局错误处理器');
    }
    
    log('DEBUG', '检查promise拒绝处理器...');
    if (typeof self.onunhandledrejection === 'function') {
      log('DEBUG', 'Promise拒绝处理器已设置');
    } else {
      log('DEBUG', '未设置Promise拒绝处理器');
    }
  } catch (e) {
    log('ERROR', '检查错误处理时出错:', e);
  }
}

// 列出所有可能的API模块
function listApiModules() {
  log('INFO', '列出可能的API模块...');
  
  const candidates = [];
  
  // 遍历全局对象
  for (const key in self) {
    if (key === 'chrome' || key === 'self' || key === 'window') continue;
    
    const obj = self[key];
    if (typeof obj === 'object' && obj !== null) {
      // 检查是否像是API模块
      if (
        key.includes('API') || 
        key.includes('Service') || 
        key.includes('Provider') ||
        key.includes('Handler')
      ) {
        candidates.push(key);
        
        // 检查子对象和方法
        const methods = [];
        for (const methodName in obj) {
          if (typeof obj[methodName] === 'function') {
            methods.push(methodName);
          }
        }
        
        log('DEBUG', `模块 ${key} 包含方法:`, methods.join(', '));
      }
    }
  }
  
  if (candidates.length > 0) {
    log('SUCCESS', `找到 ${candidates.length} 个潜在API模块:`, candidates.join(', '));
  } else {
    log('WARN', '未找到潜在的API模块');
  }
}

// 运行所有测试
async function runAllTests() {
  log('INFO', '开始运行所有测试...');
  
  // 先尝试找到API处理函数
  findApiHandler();
  
  // 运行所有测试
  const results = [];
  
  try {
    // 测试Ping
    const pingResult = await testPing();
    results.push({ name: 'Ping测试', success: pingResult });
    
    // 测试页面计数
    const countResult = await testPageCount();
    results.push({ name: '页面计数测试', success: countResult });
    
    // 测试页面列表
    const listResult = await testApiHandler();
    results.push({ name: '页面列表测试', success: listResult });
  } catch (error) {
    log('ERROR', '测试过程中发生错误:', error);
  }
  
  // 汇总结果
  log('INFO', '测试结果汇总:');
  results.forEach(result => {
    const status = result.success ? '✅ 成功' : '❌ 失败';
    log(result.success ? 'SUCCESS' : 'ERROR', `${result.name}: ${status}`);
  });
  
  const allSuccess = results.every(r => r.success);
  if (allSuccess) {
    log('SUCCESS', '所有测试通过！API功能正常。');
  } else {
    log('ERROR', '部分测试失败，API可能存在问题。');
  }
  
  return {
    success: allSuccess,
    results: results
  };
}

// 导出到全局作用域
self.findApiHandler = findApiHandler;
self.testApiHandler = testApiHandler;
self.testPing = testPing;
self.testPageCount = testPageCount;
self.runAllTests = runAllTests;
self.showAccessToken = showAccessToken;
self.showErrorHandling = showErrorHandling;
self.listApiModules = listApiModules;

// 自动运行测试
log('INFO', '直接API测试脚本已加载');
log('INFO', '可用命令:');
log('INFO', '- findApiHandler(): 查找API处理函数');
log('INFO', '- testPing(): 测试Ping');
log('INFO', '- testPageCount(): 测试页面计数');
log('INFO', '- testApiHandler(): 测试页面列表');
log('INFO', '- runAllTests(): 运行所有测试');
log('INFO', '- showAccessToken(): 显示当前访问令牌');
log('INFO', '- listApiModules(): 列出可能的API模块');
log('INFO', '- showErrorHandling(): 检查错误处理');

// 运行初始测试
runAllTests(); 