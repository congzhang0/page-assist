/**
 * Page Assist 数据提供者API日志记录器
 * 复制此脚本到Page Assist扩展的背景页控制台中运行
 */

// 检查是否为数据提供者API请求
function isDataProviderRequest(request) {
    return request &&
        typeof request === 'object' &&
        request.accessToken &&
        (request.type === 'get' ||
            request.type === 'list' ||
            request.type === 'count' ||
            request.type === 'sync' ||
            request.type === 'changes' ||
            request.type === 'tags') &&
        (request.entityType === 'page' ||
            request.entityType === 'document' ||
            request.entityType === 'model' ||
            request.entityType === 'knowledge' ||
            request.entityType === 'vector' ||
            request.entityType === 'message');
}

// API请求日志记录
function logApiRequest(request, sender, type = 'internal') {
    console.group(`🔍 数据提供者API请求 (${type}): ${request.entityType}/${request.type || '未知类型'}`);
    console.log('📩 请求详情:', JSON.stringify(request, null, 2));
    console.log('👤 发送者:', sender);
    console.log('🔑 令牌验证:', request.accessToken ? '已提供令牌' : '未提供令牌');
    console.groupEnd();
}

// API响应日志记录
function logApiResponse(response, error = null) {
    if (error) {
        console.group('❌ 数据提供者API错误');
        console.error('错误信息:', error);
        console.groupEnd();
        return;
    }
    console.group(`✅ 数据提供者API响应: ${response.success ? '成功' : '失败'}`);
    console.log('📤 响应详情:', JSON.stringify(response, null, 2));
    console.groupEnd();
}

// 在Service Worker中，window对象不可用，应检查self
const globalScope = typeof self !== 'undefined' ? self : this;

// 分析现有的监听器
function analyzeExistingListeners() {
    console.group('🔍 分析现有消息监听器');
    
    try {
        // 检查外部消息监听器
        if (chrome.runtime.onMessageExternal.hasListeners()) {
            console.log('发现外部消息监听器');
            
            // 尝试获取监听器函数引用
            const listeners = chrome.runtime.onMessageExternal.listeners_ || [];
            console.log(`监听器数量: ${listeners.length}`);
            
            listeners.forEach((listener, index) => {
                console.log(`监听器 #${index+1}:`, listener.toString().slice(0, 200) + '...');
            });
        } else {
            console.warn('❌ 未找到外部消息监听器');
        }
    } catch (e) {
        console.error('分析监听器时出错:', e);
    }
    
    console.groupEnd();
}

// 初始检查处理API请求的函数是否存在 (用于诊断)
const REAL_API_HANDLER_NAME = 'handleDataProviderRequest'; // 与 api-service.ts 中的导出函数名一致

// 尝试找到实际的API处理函数并将其导出到全局作用域
function exposeApiHandlerToGlobalScope() {
    console.log('🔍 尝试在模块系统中查找API处理函数...');
    
    // 首先检查是否已经存在
    if (typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
        console.log(`✅ ${REAL_API_HANDLER_NAME} 已在全局作用域中`);
        return true;
    }
    
    // 尝试从各种可能的位置查找处理函数
    try {
        // 尝试方法1: 从已加载的模块中直接寻找
        if (typeof globalScope.DataProviderAPI !== 'undefined' && typeof globalScope.DataProviderAPI.handleDataProviderRequest === 'function') {
            globalScope.handleDataProviderRequest = globalScope.DataProviderAPI.handleDataProviderRequest;
            console.log('✅ 从DataProviderAPI模块导出处理函数到全局作用域');
            return true;
        }
        
        // 尝试方法2: 从chrome.extension API中寻找
        if (typeof chrome.extension !== 'undefined' && typeof chrome.extension.getBackgroundPage === 'function') {
            try {
                const bgPage = chrome.extension.getBackgroundPage();
                if (bgPage && typeof bgPage.handleDataProviderRequest === 'function') {
                    globalScope.handleDataProviderRequest = bgPage.handleDataProviderRequest;
                    console.log('✅ 从background page导出处理函数到全局作用域');
                    return true;
                }
            } catch (e) {
                console.warn('获取background page时出错:', e);
            }
        }
        
        // 尝试方法3: 查找所有导出的模块
        for (const key in globalScope) {
            if (key === 'window' || key === 'self' || key === 'globalThis') continue;
            
            try {
                const module = globalScope[key];
                // 检查对象及其原型链
                if (typeof module === 'object' && module !== null) {
                    // 直接检查对象
                    if (typeof module.handleDataProviderRequest === 'function') {
                        globalScope.handleDataProviderRequest = module.handleDataProviderRequest;
                        console.log(`✅ 从全局模块 '${key}' 导出处理函数到全局作用域`);
                        return true;
                    }
                    
                    // 检查对象内部导出
                    for (const subKey in module) {
                        try {
                            const subModule = module[subKey];
                            if (
                                subModule && 
                                typeof subModule === 'object' && 
                                typeof subModule.handleDataProviderRequest === 'function'
                            ) {
                                globalScope.handleDataProviderRequest = subModule.handleDataProviderRequest;
                                console.log(`✅ 从嵌套模块 '${key}.${subKey}' 导出处理函数到全局作用域`);
                                return true;
                            }
                        } catch (innerErr) {
                            // 忽略嵌套错误
                        }
                    }
                }
            } catch (err) {
                // 忽略单个模块的访问错误并继续搜索
            }
        }
        
        console.warn('⚠️ 无法找到现有的API处理函数');
        return false;
    } catch (error) {
        console.error('❌ 查找API处理函数时出错:', error);
        return false;
    }
}

function checkRealApiHandlerPresence() {
    if (typeof globalScope[REAL_API_HANDLER_NAME] !== 'function') {
        console.error(`❌ [Logger] 真实 API 请求处理函数 '${REAL_API_HANDLER_NAME}' 未在 globalScope 中找到!`);
        console.warn('[Logger] 请确保:');
        console.warn('  1. src/services/data-provider/api-service.ts 中的 handleDataProviderRequest 已正确导出。');
        console.warn('  2. 扩展的背景脚本 (service worker) 已导入并初始化了 API 服务 (调用了 initDataProviderAPI)。');
        console.warn('  3. 如果API服务是模块化加载的，确保 ' + REAL_API_HANDLER_NAME + ' 被正确挂载到 globalScope 以便此调试脚本访问。');
        console.warn('');
        console.warn('推荐解决方案:');
        console.warn('  1. 尝试运行 exposeApiHandlerToGlobalScope() 函数来自动查找并导出函数');
        console.warn('  2. 或者运行 quick-fix.js 脚本，它会自动尝试查找和修复这个问题');
        console.warn('  3. 如果以上方法都不奏效，可能需要修改扩展的背景脚本以确保API处理函数被正确导出');
        return false;
    }
    console.info(`✅ [Logger] 真实 API 请求处理函数 '${REAL_API_HANDLER_NAME}' 已在 globalScope 中找到。`);
    return true;
}

// 分析现有监听器
analyzeExistingListeners();

// 检查当前监听器状态 (在添加此脚本的监听器之前)
console.log('添加此调试脚本监听器之前的状态:');
console.log('- 外部消息监听器:', chrome.runtime.onMessageExternal.hasListeners() ? '已设置' : '未设置');
console.log('- 内部消息监听器:', chrome.runtime.onMessage.hasListeners() ? '已设置' : '未设置');

// 尝试查找并导出API处理函数
exposeApiHandlerToGlobalScope();

// 再次检查API处理函数是否存在
checkRealApiHandlerPresence();

// 保存原始监听器（如果需要恢复）
let originalExternalListeners = [];
let originalInternalListeners = [];

try {
    if (chrome.runtime.onMessageExternal.hasListeners && chrome.runtime.onMessageExternal.listeners_) {
        originalExternalListeners = [...chrome.runtime.onMessageExternal.listeners_];
    }
    
    if (chrome.runtime.onMessage.hasListeners && chrome.runtime.onMessage.listeners_) {
        originalInternalListeners = [...chrome.runtime.onMessage.listeners_];
    }
} catch (e) {
    console.error('保存原始监听器时出错:', e);
}

// 我们自己的外部消息监听器 - 用于日志记录和调用真实的API处理函数
const ourExternalListener = async function(request, sender, sendResponse) {
    logApiRequest(request, sender, 'external (via logger)');

    if (!isDataProviderRequest(request)) {
        console.warn('[Logger] 请求不是有效的数据提供者API请求格式。日志记录器将不处理此请求。', request);
        // 如果有其他非API的外部消息监听器，不调用sendResponse可能会导致端口关闭错误。
        // 但由于此脚本主要用于API调试，我们假设其他监听器会处理非API消息。
        // 对于严格的API请求，如果格式不对，可以选择不调用 sendResponse，或者返回一个特定错误。
        // sendResponse({ success: false, error: { code: 'logger_invalid_api_request_format', message: 'Logger: Invalid API request format' } });
        return false; // 让其他监听器处理 (如果这是最后一个监听器，这可能导致错误，但我们假设API listener from api-service.ts is primary)
    }

    if (checkRealApiHandlerPresence() && typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
        try {
            const response = await globalScope[REAL_API_HANDLER_NAME](request, sender);
            logApiResponse(response);
            sendResponse(response);
        } catch (error) {
            console.error('[Logger] 调用真实API处理函数时出错:', error);
            const errorResponse = {
                success: false,
                error: {
                    code: 'logger_real_handler_exception',
                    message: error.message || 'Error in real API handler via logger.'
                },
                meta: { serverTime: Date.now() }
            };
            logApiResponse(errorResponse, error);
            sendResponse(errorResponse);
        }
    } else {
        const errorMsg = '真实 API 处理函数 \'' + REAL_API_HANDLER_NAME + '\' 未找到或无效。日志记录器无法代理请求。';
        console.error(`[Logger] ${errorMsg}`);
        const errorResponse = {
            success: false,
            error: { code: 'logger_real_handler_missing', message: errorMsg },
            meta: { serverTime: Date.now() }
        };
        logApiResponse(errorResponse);
        sendResponse(errorResponse);
    }
    return true; // 表示将异步发送响应
};

// 添加内部消息监听器
const ourInternalListener = function(request, sender, sendResponse) {
    let isHandledByLogger = false;
    if (isDataProviderRequest(request)) {
        logApiRequest(request, sender, 'internal');
        try {
            if (typeof globalScope.handleDataProviderRequest === 'function') {
                console.log('🔄 [Logger] 检测到 globalScope.handleDataProviderRequest，尝试调用它处理内部API请求...');
                Promise.resolve(globalScope.handleDataProviderRequest(request, sender))
                    .then(response => {
                        logApiResponse(response);
                        sendResponse(response);
                    })
                    .catch(error => {
                        const errorResponse = {
                            success: false,
                            error: { code: 'logger_processing_error', message: `Logger caught error: ${error.message}` }
                        };
                        logApiResponse(errorResponse, error);
                        sendResponse(errorResponse);
                    });
                isHandledByLogger = true; // Logger is attempting to handle and respond
            } else {
                console.warn('⚠️ [Logger] globalScope.handleDataProviderRequest 未找到。内部请求仅被记录，依赖扩展自身监听器处理响应。');
                // isHandledByLogger remains false, actual handler should respond
            }
        } catch (error) {
            console.error('❌ [Logger] 处理内部API请求时发生同步错误:', error);
            const errorResponse = {
                success: false,
                error: { code: 'logger_unexpected_sync_error', message: `Logger caught sync error: ${error.message}` }
            };
            try { sendResponse(errorResponse); } catch (e) { console.error("Error sending error response:", e); }
            isHandledByLogger = true; // Logger attempted to handle the error
        }
    }
    return isHandledByLogger;
};

// 安装我们的外部监听器（添加到监听器列表的开头，确保我们首先拦截请求）
chrome.runtime.onMessageExternal.addListener(ourExternalListener);

// 安装我们的内部监听器
chrome.runtime.onMessage.addListener(ourInternalListener);

// 创建一个简单的测试函数
globalScope.testRealAPIviaMessage = function(testReq) {
    const EXTENSION_ID = chrome.runtime.id; // 获取当前扩展的ID
    const requestToSend = testReq || {
        type: 'count',
        entityType: 'page',
        query: { filter: {} },
        accessToken: globalScope.ACCESS_TOKEN || 'your_access_token_here', // 尝试从全局获取或使用占位符
        clientId: 'logger_test_client_' + Date.now()
    };

    console.info(`[Logger] 🚀 发送测试API请求 (通过 chrome.runtime.sendMessage) 到扩展 ${EXTENSION_ID}:`, requestToSend);

    chrome.runtime.sendMessage(
        EXTENSION_ID, // 发送给当前扩展自身
        requestToSend,
        (response) => {
            if (chrome.runtime.lastError) {
                console.error('[Logger] 📞 sendMessage 回调错误:', chrome.runtime.lastError);
                logApiResponse(null, chrome.runtime.lastError);
            } else {
                console.info('[Logger] 📞 sendMessage 响应成功:', response);
                logApiResponse(response);
            }
        }
    );
};

// 测试特定实体类型的API
globalScope.testEntityType = function(entityType, type = 'list') {
    const validEntityTypes = ['page', 'document', 'model', 'knowledge', 'vector', 'message'];
    const validTypes = ['get', 'list', 'count', 'sync', 'changes'];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`[Logger] ❌ 无效的实体类型: ${entityType}. 有效类型: ${validEntityTypes.join(', ')}`);
        return;
    }
    
    if (!validTypes.includes(type)) {
        console.error(`[Logger] ❌ 无效的请求类型: ${type}. 有效类型: ${validTypes.join(', ')}`);
        return;
    }
    
    let testRequest = {
        type: type,
        entityType: entityType,
        accessToken: globalScope.ACCESS_TOKEN || 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
        clientId: 'logger_test_client_' + Date.now()
    };
    
    // 根据请求类型添加适当的参数
    if (type === 'get') {
        testRequest.id = `${entityType}_1`; // 假设ID格式为 entityType_n
    } else if (type === 'list' || type === 'count') {
        testRequest.query = { 
            filter: {}, 
            page: 1, 
            pageSize: 10 
        };
    } else if (type === 'sync' || type === 'changes') {
        testRequest.sync = { 
            lastSyncTime: Date.now() - 86400000, // 24小时前
            maxRecords: 50
        };
    }
    
    console.info(`[Logger] 🚀 测试 ${entityType}/${type} API:`);
    
    if (checkRealApiHandlerPresence() && typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
        console.log(`[Logger] 发送请求:`, testRequest);
        Promise.resolve(globalScope[REAL_API_HANDLER_NAME](testRequest, { id: chrome.runtime.id }))
            .then(response => {
                console.info(`[Logger] ✅ ${entityType}/${type} 测试成功:`);
                logApiResponse(response);
            })
            .catch(error => {
                console.error(`[Logger] ❌ ${entityType}/${type} 测试失败:`, error);
            });
    } else {
        console.error('[Logger] ❌ API处理函数未找到，无法执行测试');
    }
};

// 测试所有实体类型
globalScope.testAllEntityTypes = function(type = 'list') {
    const entityTypes = ['page', 'document', 'model', 'knowledge', 'vector', 'message'];
    
    console.info(`[Logger] 🚀 开始测试所有实体类型 (${type})...`);
    
    entityTypes.forEach(entityType => {
        globalScope.testEntityType(entityType, type);
    });
};

// 测试API的简化版本
globalScope.quickTest = function() {
    const testRequest = {
        type: 'count',
        entityType: 'page',
        query: { filter: {} },
        accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m'
    };
    
    // 内部消息
    console.log('🔄 测试内部消息...');
    chrome.runtime.sendMessage(testRequest);
    
    // 外部消息
    console.log('🔄 测试外部消息...');
    chrome.runtime.sendMessage(chrome.runtime.id, testRequest);
};

// 清理函数 - 恢复原始监听器 (如果需要)
globalScope.cleanupLoggerListeners = function() {
    console.log('🧹 清理日志记录器监听器...');
    
    // 移除我们添加的监听器
    try {
        chrome.runtime.onMessageExternal.removeListener(ourExternalListener);
        chrome.runtime.onMessage.removeListener(ourInternalListener);
        
        console.log('✅ 已移除日志记录器监听器');
    } catch (e) {
        console.error('❌ 移除监听器时出错:', e);
    }
    
    // 检查当前状态
    console.log('移除后状态:');
    console.log('- 外部消息监听器:', chrome.runtime.onMessageExternal.hasListeners() ? '仍然有监听器' : '无监听器');
    console.log('- 内部消息监听器:', chrome.runtime.onMessage.hasListeners() ? '仍然有监听器' : '无监听器');
};

// 检查处理程序的详细信息
function inspectHandlers() {
    console.log('🔍 检查API处理程序的详细信息...');
    
    if (typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
        try {
            const handlerStr = globalScope[REAL_API_HANDLER_NAME].toString();
            console.log(`[${REAL_API_HANDLER_NAME}] 函数源码:`);
            console.log(handlerStr.length > 1000 ? handlerStr.slice(0, 1000) + '...' : handlerStr);
            
            // 检查函数是否处理不同的实体类型
            const entityTypes = ['page', 'document', 'model', 'knowledge', 'vector', 'message'];
            
            console.log('支持的实体类型检查:');
            entityTypes.forEach(entityType => {
                const isSupported = handlerStr.includes(`'${entityType}'`) || handlerStr.includes(`"${entityType}"`);
                console.log(`- ${entityType}: ${isSupported ? '✅ 似乎支持' : '❌ 可能不支持'}`);
            });
        } catch (e) {
            console.error('❌ 检查处理程序时出错:', e);
        }
    } else {
        console.error(`❌ 未找到 ${REAL_API_HANDLER_NAME} 处理程序`);
    }
}

// 显示帮助信息
function showHelp() {
    console.log('📖 Page Assist 数据提供者API日志记录器帮助');
    console.log('------------------------------------');
    console.log('可用函数:');
    console.log('  quickTest() - 快速测试API连接');
    console.log('  testEntityType(entityType, type) - 测试特定实体类型的API');
    console.log('  testAllEntityTypes(type) - 测试所有实体类型的API');
    console.log('  inspectHandlers() - 检查API处理程序详情');
    console.log('  showPagesDatabaseInfo() - 显示保存的页面数据库信息');
    console.log('  exposeApiHandlerToGlobalScope() - 尝试查找并导出API处理函数');
    console.log('  cleanupLoggerListeners() - 移除日志记录器监听器');
    console.log('');
    console.log('排除故障:');
    console.log('  1. 如果看到 "真实API处理函数未找到" 错误，运行 exposeApiHandlerToGlobalScope()');
    console.log('  2. 如果仍然无法解决，尝试在background page控制台中执行quick-fix.js脚本');
    console.log('');
    console.log('示例:');
    console.log('  testEntityType("page", "list") - 测试页面列表API');
    console.log('  testEntityType("document", "get") - 测试获取单个文档API');
    console.log('  testAllEntityTypes("count") - 测试所有实体类型的计数API');
}

// 设置帮助函数
globalScope.apiLoggerHelp = showHelp;

// 导出检查函数到全局作用域
globalScope.exposeApiHandlerToGlobalScope = exposeApiHandlerToGlobalScope;
globalScope.inspectHandlers = inspectHandlers;

// 最终初始化
function finalizeLoggerSetup() {
    console.log('✅ Page Assist 数据提供者API日志记录器已安装');
    console.log('当前状态:');
    console.log('- 外部消息监听器:', chrome.runtime.onMessageExternal.hasListeners() ? '已设置' : '未设置');
    console.log('- 内部消息监听器:', chrome.runtime.onMessage.hasListeners() ? '已设置' : '未设置');
    console.log('- API处理程序:', typeof globalScope[REAL_API_HANDLER_NAME] === 'function' ? '已找到' : '未找到');
    console.log('');
    console.log('使用 apiLoggerHelp() 查看可用命令');
    
    // 如果API处理程序未找到，直接显示帮助信息
    if (typeof globalScope[REAL_API_HANDLER_NAME] !== 'function') {
        console.warn('❌ API处理程序未找到。请参考以下帮助信息:');
        showHelp();
    }
}

// 初始化检查和设置
finalizeLoggerSetup();
