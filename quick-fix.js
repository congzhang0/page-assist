/**
 * Page Assist 数据提供者API快速修复和诊断脚本
 * 将此脚本复制到扩展的背景页控制台中运行
 */

// 使用AccessToken - 实际使用中应与扩展配置中的令牌匹配
const ACCESS_TOKEN = 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m';

// 检查真实API处理函数是否存在
const globalScope = typeof self !== 'undefined' ? self : window;
const REAL_API_HANDLER_NAME = 'handleDataProviderRequest';

// 检查真实API handler是否存在
function checkRealApiHandlerPresence() {
    if (typeof globalScope[REAL_API_HANDLER_NAME] !== 'function') {
        console.error(`❌ 真实API处理函数 '${REAL_API_HANDLER_NAME}' 未在全局作用域中找到!`);
        return false;
    }
    console.info(`✅ 真实API处理函数 '${REAL_API_HANDLER_NAME}' 已找到。`);
    return true;
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

// 如果真实API处理函数不存在，使用一个模拟实现
function setupMockApiHandlerIfNeeded() {
    if (!checkRealApiHandlerPresence()) {
        console.warn('⚠️ 未找到真实API处理函数，将安装模拟实现作为后备...');
        
        // 定义一个模拟实现
        globalScope[REAL_API_HANDLER_NAME] = async function(request, sender) {
            console.log('📡 模拟API处理函数被调用:', request, sender);
            
            // 验证访问令牌
            if (!request.accessToken || request.accessToken !== ACCESS_TOKEN) {
                return {
                    success: false,
                    error: {
                        code: 'auth_invalid_token',
                        message: '无效的访问令牌'
                    },
                    meta: {
                        serverTime: Date.now()
                    }
                };
            }
            
            // 创建基本的元数据对象
            const meta = {
                serverTime: Date.now(),
                clientId: request.clientId
            };
            
            // 根据实体类型和请求类型返回模拟响应
            switch(request.entityType) {
                case 'page':
                    return handleMockPageRequest(request, meta);
                case 'document':
                    return handleMockDocumentRequest(request, meta);
                case 'model':
                    return handleMockModelRequest(request, meta);
                case 'knowledge':
                    return handleMockKnowledgeRequest(request, meta);
                case 'vector':
                    return handleMockVectorRequest(request, meta);
                case 'message':
                    return handleMockMessageRequest(request, meta);
                default:
                    return {
                        success: false,
                        error: {
                            code: 'unsupported_entity_type',
                            message: `不支持的实体类型: ${request.entityType}`
                        },
                        meta
                    };
            }
        };
        
        console.log('✅ 模拟API处理函数已安装为后备');
    } else {
        console.log('✅ 使用现有的真实API处理函数');
    }
}

// 处理模拟页面请求
function handleMockPageRequest(request, meta) {
    switch(request.type) {
        case 'count':
            return {
                success: true,
                data: {
                    count: 42 // 模拟数据
                },
                meta
            };
            
        case 'list':
            return {
                success: true,
                data: [
                    {
                        id: 'page_1',
                        title: '模拟页面 1',
                        url: 'https://example.com/page1',
                        tags: ['标签1', '标签2'],
                        createdAt: Date.now() - 86400000,
                        updatedAt: Date.now() - 3600000
                    },
                    {
                        id: 'page_2',
                        title: '模拟页面 2',
                        url: 'https://example.com/page2',
                        tags: ['标签1'],
                        createdAt: Date.now() - 172800000,
                        updatedAt: Date.now() - 7200000
                    }
                ],
                meta: {
                    ...meta,
                    total: 2,
                    page: 1,
                    pageSize: 10,
                    pageCount: 1
                }
            };
            
        case 'get':
            return {
                success: true,
                data: {
                    id: request.id || 'page_1',
                    title: '模拟页面详情',
                    url: 'https://example.com/page-detail',
                    content: '这是模拟的页面内容',
                    html: '<div>这是模拟的HTML内容</div>',
                    tags: ['标签1', '标签2', '标签3'],
                    createdAt: Date.now() - 86400000,
                    updatedAt: Date.now() - 3600000
                },
                meta
            };
            
        case 'tags':
            return {
                success: true,
                data: ['标签1', '标签2', '标签3', '重要', '待读'],
                meta
            };
            
        case 'sync':
        case 'changes':
            return {
                success: true,
                data: {
                    changes: [
                        {
                            id: 'page_1',
                            changeType: 'update',
                            timestamp: Date.now() - 3600000,
                            data: {
                                id: 'page_1',
                                title: '更新的模拟页面',
                                tags: ['标签1', '新标签']
                            }
                        }
                    ],
                    hasMore: false
                },
                meta: {
                    ...meta,
                    syncTime: Date.now()
                }
            };
            
        default:
            return {
                success: false,
                error: {
                    code: 'invalid_request_type',
                    message: `不支持的请求类型: ${request.type}`
                },
                meta
            };
    }
}

// 处理模拟文档请求
function handleMockDocumentRequest(request, meta) {
    switch(request.type) {
        case 'count':
            return {
                success: true,
                data: {
                    count: 15 // 模拟数据
                },
                meta
            };
            
        case 'list':
            return {
                success: true,
                data: [
                    {
                        id: 'doc_1',
                        title: '模拟文档 1',
                        filePath: '/documents/doc1.pdf',
                        tags: ['文档', 'PDF'],
                        source: '本地上传',
                        createdAt: Date.now() - 86400000,
                        updatedAt: Date.now() - 3600000
                    },
                    {
                        id: 'doc_2',
                        title: '模拟文档 2',
                        filePath: '/documents/doc2.docx',
                        tags: ['文档', 'Word'],
                        source: '本地上传',
                        createdAt: Date.now() - 172800000,
                        updatedAt: Date.now() - 7200000
                    }
                ],
                meta: {
                    ...meta,
                    total: 2,
                    page: 1,
                    pageSize: 10,
                    pageCount: 1
                }
            };
            
        case 'get':
            return {
                success: true,
                data: {
                    id: request.id || 'doc_1',
                    title: '模拟文档详情',
                    filePath: '/documents/doc-detail.pdf',
                    content: '这是模拟的文档内容',
                    tags: ['文档', 'PDF', '重要'],
                    source: '本地上传',
                    metadata: {
                        pageCount: 12,
                        author: '模拟作者'
                    },
                    createdAt: Date.now() - 86400000,
                    updatedAt: Date.now() - 3600000
                },
                meta
            };
            
        case 'sync':
        case 'changes':
            return {
                success: true,
                data: {
                    changes: [
                        {
                            id: 'doc_1',
                            changeType: 'update',
                            timestamp: Date.now() - 3600000,
                            data: {
                                id: 'doc_1',
                                title: '更新的模拟文档',
                                tags: ['文档', '已更新']
                            }
                        }
                    ],
                    hasMore: false
                },
                meta: {
                    ...meta,
                    syncTime: Date.now()
                }
            };
            
        default:
            return {
                success: false,
                error: {
                    code: 'invalid_request_type',
                    message: `不支持的请求类型: ${request.type}`
                },
                meta
            };
    }
}

// 处理模拟模型请求
function handleMockModelRequest(request, meta) {
    switch(request.type) {
        case 'list':
            return {
                success: true,
                data: [
                    {
                        id: 'model_1',
                        name: 'GPT-4',
                        provider: 'OpenAI',
                        apiKeyStatus: 'valid',
                        type: 'chat',
                        isDefault: true,
                        createdAt: Date.now() - 86400000,
                        updatedAt: Date.now() - 3600000
                    },
                    {
                        id: 'model_2',
                        name: 'Claude 3',
                        provider: 'Anthropic',
                        apiKeyStatus: 'valid',
                        type: 'chat',
                        isDefault: false,
                        createdAt: Date.now() - 172800000,
                        updatedAt: Date.now() - 7200000
                    }
                ],
                meta: {
                    ...meta,
                    total: 2,
                    page: 1,
                    pageSize: 10,
                    pageCount: 1
                }
            };
            
        case 'get':
            return {
                success: true,
                data: {
                    id: request.id || 'model_1',
                    name: '模拟模型详情',
                    provider: 'OpenAI',
                    apiKeyStatus: 'valid',
                    type: 'chat',
                    config: {
                        temperature: 0.7,
                        maxTokens: 4096
                    },
                    isDefault: true,
                    createdAt: Date.now() - 86400000,
                    updatedAt: Date.now() - 3600000
                },
                meta
            };
            
        default:
            return {
                success: false,
                error: {
                    code: 'invalid_request_type',
                    message: `不支持的请求类型: ${request.type}`
                },
                meta
            };
    }
}

// 处理模拟知识库请求
function handleMockKnowledgeRequest(request, meta) {
    switch(request.type) {
        case 'list':
            return {
                success: true,
                data: [
                    {
                        id: 'kb_1',
                        name: '技术文档知识库',
                        description: '包含各种技术文档',
                        sourceType: 'file',
                        status: 'completed',
                        vectorCount: 256,
                        createdAt: Date.now() - 86400000,
                        updatedAt: Date.now() - 3600000
                    },
                    {
                        id: 'kb_2',
                        name: '网站知识库',
                        description: '从网站收集的知识',
                        sourceType: 'url',
                        status: 'completed',
                        vectorCount: 128,
                        createdAt: Date.now() - 172800000,
                        updatedAt: Date.now() - 7200000
                    }
                ],
                meta: {
                    ...meta,
                    total: 2,
                    page: 1,
                    pageSize: 10,
                    pageCount: 1
                }
            };
            
        case 'get':
            return {
                success: true,
                data: {
                    id: request.id || 'kb_1',
                    name: '模拟知识库详情',
                    description: '这是一个模拟的知识库，用于测试',
                    sourceType: 'file',
                    sourcePath: '/knowledge/tech-docs',
                    status: 'completed',
                    vectorCount: 256,
                    createdAt: Date.now() - 86400000,
                    updatedAt: Date.now() - 3600000
                },
                meta
            };
            
        default:
            return {
                success: false,
                error: {
                    code: 'invalid_request_type',
                    message: `不支持的请求类型: ${request.type}`
                },
                meta
            };
    }
}

// 处理模拟向量请求
function handleMockVectorRequest(request, meta) {
    switch(request.type) {
        case 'list':
            return {
                success: true,
                data: [
                    {
                        id: 'vector_1',
                        knowledgeId: 'kb_1',
                        contentChunk: '这是一段内容的向量化片段1',
                        embedding: Array(128).fill(0).map(() => Math.random()),
                        createdAt: Date.now() - 86400000,
                        updatedAt: Date.now() - 3600000
                    },
                    {
                        id: 'vector_2',
                        knowledgeId: 'kb_1',
                        contentChunk: '这是一段内容的向量化片段2',
                        embedding: Array(128).fill(0).map(() => Math.random()),
                        createdAt: Date.now() - 172800000,
                        updatedAt: Date.now() - 7200000
                    }
                ],
                meta: {
                    ...meta,
                    total: 2,
                    page: 1,
                    pageSize: 10,
                    pageCount: 1
                }
            };
            
        case 'get':
            return {
                success: true,
                data: {
                    id: request.id || 'vector_1',
                    knowledgeId: 'kb_1',
                    contentChunk: '这是一段内容的向量化片段，用于测试向量查询',
                    embedding: Array(128).fill(0).map(() => Math.random()),
                    metadata: {
                        source: '第5页',
                        relevance: 0.89
                    },
                    createdAt: Date.now() - 86400000,
                    updatedAt: Date.now() - 3600000
                },
                meta
            };
            
        default:
            return {
                success: false,
                error: {
                    code: 'invalid_request_type',
                    message: `不支持的请求类型: ${request.type}`
                },
                meta
            };
    }
}

// 处理模拟消息请求
function handleMockMessageRequest(request, meta) {
    switch(request.type) {
        case 'list':
            return {
                success: true,
                data: [
                    {
                        id: 'msg_1',
                        chatId: 'chat_1',
                        role: 'user',
                        content: '你好，这是一条测试消息1',
                        modelUsed: 'GPT-4',
                        timestamp: Date.now() - 3600000,
                        createdAt: Date.now() - 3600000,
                        updatedAt: Date.now() - 3600000
                    },
                    {
                        id: 'msg_2',
                        chatId: 'chat_1',
                        role: 'assistant',
                        content: '你好！我是AI助手，很高兴为你服务。这是一条测试响应消息。',
                        modelUsed: 'GPT-4',
                        timestamp: Date.now() - 3500000,
                        createdAt: Date.now() - 3500000,
                        updatedAt: Date.now() - 3500000
                    }
                ],
                meta: {
                    ...meta,
                    total: 2,
                    page: 1,
                    pageSize: 10,
                    pageCount: 1
                }
            };
            
        case 'get':
            return {
                success: true,
                data: {
                    id: request.id || 'msg_1',
                    chatId: 'chat_1',
                    role: 'user',
                    content: '这是一条详细的测试消息内容，用于测试消息查询API',
                    modelUsed: 'GPT-4',
                    timestamp: Date.now() - 3600000,
                    feedback: 'good',
                    metadata: {
                        context: '主页对话',
                        attachments: ['图片1']
                    },
                    createdAt: Date.now() - 3600000,
                    updatedAt: Date.now() - 3600000
                },
                meta
            };
            
        default:
            return {
                success: false,
                error: {
                    code: 'invalid_request_type',
                    message: `不支持的请求类型: ${request.type}`
                },
                meta
            };
    }
}

// 检查是否有外部消息监听器，如果没有则添加
function setupMessageListenerIfNeeded() {
    if (!chrome.runtime.onMessageExternal.hasListeners()) {
        console.log('📩 未找到外部消息监听器，添加一个...');
        chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
            console.log('收到外部消息:', request, '来自:', sender);
            
            if (request && (request.accessToken || request.type === 'ping')) {
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
    
    chrome.runtime.sendMessage(
        chrome.runtime.id, // 发送给自己
        testRequest,
        response => {
            if (chrome.runtime.lastError) {
                console.error('❌ 测试失败:', chrome.runtime.lastError);
            } else {
                console.log('✅ 测试成功:', response);
            }
        }
    );
}

// 初始化：检查状态并进行必要的设置
function initialize() {
    console.log('🚀 初始化数据提供者API快速修复工具...');
    
    // 检查externally_connectable配置
    checkExternallyConnectable();
    
    // 检查消息监听器
    checkMessageListeners();
    
    // 检查并设置API处理函数
    setupMockApiHandlerIfNeeded();
    
    // 设置消息监听器
    setupMessageListenerIfNeeded();
    
    console.log('✅ 初始化完成!');
    console.log('📋 可用命令:');
    console.log('- testApi(): 测试一个实体类型的API');
    console.log('- testAllEntityTypes(): 测试所有实体类型的API');
    console.log('- testViaMessaging(): 通过消息传递测试API');
}

// 导出到全局作用域，使其可以从控制台访问
globalScope.testApi = testApi;
globalScope.testAllEntityTypes = testAllEntityTypes;
globalScope.testViaMessaging = testViaMessaging;
globalScope.checkMessageListeners = checkMessageListeners;
globalScope.checkRealApiHandlerPresence = checkRealApiHandlerPresence;

// 自动运行初始化
initialize(); 