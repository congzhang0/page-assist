/**
 * Page Assist 数据提供者API快速修复和诊断脚本
 * 将此脚本复制到扩展的背景页控制台中运行
 */

// 使用AccessToken - 实际使用中应与扩展配置中的令牌匹配
const ACCESS_TOKEN = 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m';

// 检查真实API处理函数是否存在
// 修改以支持Node.js环境（当直接用node运行此脚本时）
const globalScope = typeof self !== 'undefined' ? self : 
                    typeof window !== 'undefined' ? window : 
                    typeof global !== 'undefined' ? global : this;
const REAL_API_HANDLER_NAME = 'handleDataProviderRequest';

// 检测是否在Service Worker环境中运行
function isServiceWorkerEnvironment() {
    return typeof window === 'undefined' && typeof self !== 'undefined' && typeof importScripts === 'function';
}

// 检查真实API handler是否存在
function checkRealApiHandlerPresence() {
    // 在Node.js环境下运行时跳过此检查
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
        console.warn('⚠️ 此脚本在Node.js环境下运行。请在浏览器扩展的背景页控制台中运行以获取完整功能。');
        return false;
    }

    if (typeof globalScope[REAL_API_HANDLER_NAME] !== 'function') {
        console.error(`❌ 真实API处理函数 '${REAL_API_HANDLER_NAME}' 未在全局作用域中找到!`);
        return false;
    }
    console.info(`✅ 真实API处理函数 '${REAL_API_HANDLER_NAME}' 已找到。`);
    return true;
}

// 尝试找到实际的API处理函数并将其导出到全局作用域
function exposeApiHandlerToGlobalScope() {
    console.log('🔍 尝试在模块系统中查找API处理函数...');
    
    // 尝试从各种可能的位置查找处理函数
    try {
        // 尝试方法1: 从已加载的模块中直接寻找
        if (typeof DataProviderAPI !== 'undefined' && typeof DataProviderAPI.handleDataProviderRequest === 'function') {
            globalScope.handleDataProviderRequest = DataProviderAPI.handleDataProviderRequest;
            console.log('✅ 从DataProviderAPI模块导出处理函数到全局作用域');
            return true;
        }
        
        // 尝试方法2: 从chrome.extension API中寻找
        if (typeof chrome.extension !== 'undefined' && typeof chrome.extension.getBackgroundPage === 'function') {
            const bgPage = chrome.extension.getBackgroundPage();
            if (bgPage && typeof bgPage.handleDataProviderRequest === 'function') {
                globalScope.handleDataProviderRequest = bgPage.handleDataProviderRequest;
                console.log('✅ 从background page导出处理函数到全局作用域');
                return true;
            }
        }
        
        // 尝试方法3: 查找所有导出的模块
        for (const key in globalScope) {
            const module = globalScope[key];
            if (
                typeof module === 'object' && 
                module !== null && 
                typeof module.handleDataProviderRequest === 'function'
            ) {
                globalScope.handleDataProviderRequest = module.handleDataProviderRequest;
                console.log(`✅ 从全局模块 '${key}' 导出处理函数到全局作用域`);
                return true;
            }
        }
        
        console.warn('⚠️ 无法找到现有的API处理函数');
        return false;
    } catch (error) {
        console.error('❌ 查找API处理函数时出错:', error);
        return false;
    }
}

// 检查外部消息监听器状态
function checkMessageListeners() {
    console.group('🔍 当前消息监听器状态:');
    console.log('- 外部消息监听器:', chrome.runtime.onMessageExternal.hasListeners() ? '已设置' : '未设置');
    console.log('- 内部消息监听器:', chrome.runtime.onMessage.hasListeners() ? '已设置' : '未设置');
    console.groupEnd();
}

// 分析externally_connectable配置
function checkExternallyConnectable() {
    console.log('🔍 检查externally_connectable配置...');
    
    try {
        if (typeof chrome.runtime.getManifest === 'function') {
            const manifest = chrome.runtime.getManifest();
            
            if (manifest.externally_connectable) {
                console.log('✅ externally_connectable 配置:', manifest.externally_connectable);
                
                if (manifest.externally_connectable.matches && manifest.externally_connectable.matches.length) {
                    console.log('✅ 允许的外部连接源:', manifest.externally_connectable.matches);
                } else {
                    console.warn('⚠️ externally_connectable 未指定允许的外部连接源');
                }
            } else {
                console.error('❌ manifest 中未找到 externally_connectable 配置');
            }
        } else {
            console.warn('⚠️ chrome.runtime.getManifest 不可用，无法检查配置');
        }
    } catch (e) {
        console.error('检查externally_connectable配置时出错:', e);
    }
}

// 尝试确保真实API处理函数可用
function ensureRealApiHandler() {
    // 尝试在模块系统中查找API处理函数并导出到全局
    const foundRealHandler = exposeApiHandlerToGlobalScope();
    
    if (!foundRealHandler) {
        const handlerExists = checkRealApiHandlerPresence();
        if (!handlerExists) {
            console.error('❌ 无法找到真实API处理函数，请确保已初始化数据提供者API');
            console.log('🔧 建议：在背景脚本中添加如下代码：');
            console.log('import { initDataProviderAPI } from \'@/services/data-provider/api-service\'');
            console.log('initDataProviderAPI();');
            return false;
        }
    }
    
    console.log('✅ 已确认API处理函数可用');
    return true;
}

// 检查是否有外部消息监听器，如果没有则添加
function setupMessageListenerIfNeeded() {
    if (!chrome.runtime.onMessageExternal.hasListeners()) {
        console.log('📩 未找到外部消息监听器，添加一个...');
        chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
            console.log('收到外部消息:', request, '来自:', sender);
            
            if (request && (request.accessToken || request.type === 'ping')) {
                if (typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
                    globalScope[REAL_API_HANDLER_NAME](request, sender)
                        .then(response => {
                            console.log('发送响应:', response);
                            sendResponse(response);
                        })
                        .catch(error => {
                            console.error('处理请求时出错:', error);
                            sendResponse({
                                success: false,
                                error: {
                                    code: 'internal_error',
                                    message: error.message
                                }
                            });
                        });
                    return true; // 表示将异步发送响应
                } else {
                    console.error('❌ 无法处理请求：API处理函数不存在');
                    sendResponse({
                        success: false,
                        error: {
                            code: 'handler_not_found',
                            message: 'API处理函数未找到'
                        }
                    });
                    return true;
                }
            }
        });
        console.log('✅ 外部消息监听器已添加');
    } else {
        console.log('✅ 已存在外部消息监听器，无需添加');
    }
}

// 工具函数：通过直接调用测试API
function testApi() {
    // 测试所有实体类型
    const entityTypes = ['page', 'document', 'model', 'knowledge', 'vector', 'message'];
    
    // 选择一个实体类型进行测试，你可以修改索引或使用所有类型
    const entityTypeIndex = 0; // 0:page, 1:document, 2:model, 3:knowledge, 4:vector, 5:message
    const entityType = entityTypes[entityTypeIndex];
    
    const testRequest = {
        type: 'list', // 可以是 'get', 'list', 'count', 'sync', 'changes'
        entityType: entityType,
        query: { filter: {}, page: 1, pageSize: 10 },
        accessToken: ACCESS_TOKEN,
        clientId: 'test_client_' + Date.now()
    };
    
    console.log(`📤 发送测试请求 (${entityType}):`, testRequest);
    
    if (typeof globalScope[REAL_API_HANDLER_NAME] !== 'function') {
        console.error('❌ 无法测试API：处理函数不存在。请确保API已正确初始化。');
        return;
    }
    
    // 直接调用API处理函数进行测试
    globalScope[REAL_API_HANDLER_NAME](testRequest, { id: chrome.runtime.id })
        .then(response => {
            console.log(`✅ 测试成功 (${entityType}):`, response);
        })
        .catch(error => {
            console.error(`❌ 测试失败 (${entityType}):`, error);
        });
}

// 工具函数：通过直接调用测试所有实体类型的API
function testAllEntityTypes() {
    const entityTypes = ['page', 'document', 'model', 'knowledge', 'vector', 'message'];
    const testType = 'list'; // 测试的请求类型
    
    console.log(`🧪 开始测试所有实体类型的API (${testType})...`);
    
    if (typeof globalScope[REAL_API_HANDLER_NAME] !== 'function') {
        console.error('❌ 无法测试API：处理函数不存在。请确保API已正确初始化。');
        return;
    }
    
    entityTypes.forEach(entityType => {
        const testRequest = {
            type: testType,
            entityType: entityType,
            query: { filter: {}, page: 1, pageSize: 10 },
            accessToken: ACCESS_TOKEN,
            clientId: 'test_client_' + Date.now()
        };
        
        console.log(`📤 测试 [${entityType}]:`, testRequest);
        
        // 直接调用API处理函数进行测试
        globalScope[REAL_API_HANDLER_NAME](testRequest, { id: chrome.runtime.id })
            .then(response => {
                console.log(`✅ [${entityType}] 测试成功:`, response);
            })
            .catch(error => {
                console.error(`❌ [${entityType}] 测试失败:`, error);
            });
    });
}

// 工具函数：通过消息传递测试API
function testViaMessaging() {
    const testRequest = {
        type: 'list',
        entityType: 'page',
        query: { filter: {} },
        accessToken: ACCESS_TOKEN,
        clientId: 'test_client_' + Date.now()
    };
    
    console.log('📩 通过消息传递测试API...');

    // Service Worker环境中的替代测试方法
    if (isServiceWorkerEnvironment()) {
        console.log('🔧 检测到Service Worker环境，使用模拟消息测试...');
        
        // 直接创建一个模拟的MessageSender对象
        const mockSender = { id: chrome.runtime.id };
        
        // 直接调用消息处理函数，模拟接收到消息
        if (typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
            // 创建一个模拟的sendResponse函数
            const mockSendResponse = (response) => {
                console.log('✅ Service Worker环境测试成功:', response);
            };
            
            try {
                // 模拟onMessageExternal监听器的处理流程
                const keepAlive = chrome.runtime.onMessageExternal.hasListeners();
                console.log('模拟外部消息处理，当前监听器状态:', keepAlive ? '已设置' : '未设置');
                
                globalScope[REAL_API_HANDLER_NAME](testRequest, mockSender)
                    .then(response => {
                        console.log('✅ Service Worker环境测试成功:', response);
                    })
                    .catch(error => {
                        console.error('❌ Service Worker环境测试失败:', error);
                    });
            } catch (error) {
                console.error('❌ Service Worker环境测试失败:', error);
            }
        } else {
            console.error('❌ 无法在Service Worker环境中测试：API处理函数不存在');
        }
        return;
    }
    
    // 以下是原有的基于window环境的测试代码
    // 添加一个临时消息监听器
    const messageListener = (request, sender, sendResponse) => {
        if (request && request.type === 'list' && request.entityType === 'page') {
            console.log('✅ 收到测试消息:', request);
            
            // 使用已找到的API处理函数处理请求
            if (typeof globalScope[REAL_API_HANDLER_NAME] === 'function') {
                globalScope[REAL_API_HANDLER_NAME](request, sender)
                    .then(response => {
                        console.log('✅ 测试成功:', response);
                        sendResponse(response);
                    })
                    .catch(error => {
                        console.error('❌ 测试失败:', error);
                        sendResponse({
                            success: false,
                            error: {
                                code: 'internal_error',
                                message: error.message
                            }
                        });
                    });
                return true; // 表示将异步发送响应
            } else {
                console.error('❌ 无法处理消息：API处理函数不存在');
                sendResponse({
                    success: false,
                    error: {
                        code: 'handler_not_found',
                        message: 'API处理函数未找到'
                    }
                });
                return true;
            }
        }
    };
    
    // 注册临时监听器
    chrome.runtime.onMessage.addListener(messageListener);
    
    // 向自己发送消息
    chrome.runtime.sendMessage(testRequest, response => {
        // 测试完成后移除临时监听器
        chrome.runtime.onMessage.removeListener(messageListener);
        
        if (chrome.runtime.lastError) {
            console.error('❌ 测试失败:', chrome.runtime.lastError);
        } else {
            console.log('✅ 测试成功:', response);
        }
    });
}

// 初始化：检查状态并进行必要的设置
function initialize() {
    console.log('🚀 初始化数据提供者API快速修复工具...');
    
    // 检查环境类型
    if (isServiceWorkerEnvironment()) {
        console.log('📌 检测到正在Service Worker环境中运行');
    } else {
        console.log('📌 检测到正在标准浏览器环境中运行');
    }
    
    // 检查externally_connectable配置
    checkExternallyConnectable();
    
    // 检查消息监听器
    checkMessageListeners();
    
    // 确保真实API处理函数可用
    const apiHandlerAvailable = ensureRealApiHandler();
    
    if (!apiHandlerAvailable) {
        console.error('❌ 无法找到真实API处理函数，测试功能将不可用');
        console.log('🔧 请检查背景脚本是否正确初始化数据提供者API');
    }
    
    // 设置消息监听器
    setupMessageListenerIfNeeded();
    
    console.log('✅ 初始化完成!');
    console.log('📋 可用命令:');
    console.log('- testApi(): 测试一个实体类型的API');
    console.log('- testAllEntityTypes(): 测试所有实体类型的API');
    console.log('- testViaMessaging(): 通过消息传递测试API');
    console.log('- checkRealApiHandlerPresence(): 检查API处理函数是否存在');
    console.log('- exposeApiHandlerToGlobalScope(): 尝试找到并导出API处理函数');
}

// 导出到全局作用域，使其可以从控制台访问
globalScope.testApi = testApi;
globalScope.testAllEntityTypes = testAllEntityTypes;
globalScope.testViaMessaging = testViaMessaging;
globalScope.checkMessageListeners = checkMessageListeners;
globalScope.checkRealApiHandlerPresence = checkRealApiHandlerPresence;
globalScope.exposeApiHandlerToGlobalScope = exposeApiHandlerToGlobalScope;

// 自动运行初始化
initialize(); 