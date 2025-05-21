/**
 * 数据提供者API服务
 */
import logger from '@/utils/logger';
import { validateApiRequest, logApiAccess } from './auth-service';
import { 
  getPage, 
  getPages, 
  getPageCount,
  getAllTags,
  getDocument,
  getDocuments,
  getModel,
  getModels,
  getMessage,
  getMessages
} from './data-access';
import { 
  getChangesSince,
  getLastChangeTime
} from './change-tracker';
import { getDataProviderConfig, isDataProviderEnabled, validateAccessToken, DataProviderConfig } from '@/config/data-provider-config';
import { SavedPagesDB } from '@/db/savedPages';
import type {
  ApiRequest,
  ApiResponse,
  Page,
  Document,
  Model,
  Knowledge,
  Vector,
  Message,
  Change,
  EntityData,
} from '@/types/data-provider'; // Assuming these types exist or will be created

const SERVICE_NAME = 'DataProviderAPI';

/**
 * Initializes the Data Provider API listeners.
 * This should be called from the background script.
 */
export function initDataProviderAPI(): void {
  if (chrome.runtime.onMessageExternal.hasListener(externalApiRequestListener)) {
    logger.warn(`[${SERVICE_NAME}] External API request listener already registered.`);
  } else {
    chrome.runtime.onMessageExternal.addListener(externalApiRequestListener);
    logger.info(`[${SERVICE_NAME}] External API request listener registered.`);
  }
}

/**
 * Handles incoming messages from external web apps.
 */
function externalApiRequestListener(
  request: any,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: ApiResponse) => void,
): boolean {
  logger.debug(`[${SERVICE_NAME}] Received external request`, { sender, request });

  // Basic validation of the request structure
  if (!request || typeof request.type !== 'string' || typeof request.entityType !== 'string') {
    logger.error(`[${SERVICE_NAME}] Invalid request structure:`, request);
    sendResponse({
      success: false,
      error: {
        code: 'invalid_request',
        message: 'Invalid request structure. \'type\' and \'entityType\' are required.',
      },
      meta: { serverTime: Date.now() },
    });
    return false;
  }

  const apiRequest = request as ApiRequest;

  // Process asynchronously
  (async () => {
    try {
      const response = await handleDataProviderRequest(apiRequest, sender);
      sendResponse(response);
    } catch (error: any) {
      logger.error(`[${SERVICE_NAME}] Unhandled error processing request:`, error);
      sendResponse({
        success: false,
        error: {
          code: 'internal_error',
          message: error.message || 'An unexpected error occurred.',
        },
        meta: { serverTime: Date.now() },
      });
    }
  })();

  return true;
}

/**
 * Main handler for all data provider requests.
 * Validates permissions and routes to specific entity handlers.
 * @param request The API request object.
 * @param sender The message sender object.
 * @returns A promise resolving to an ApiResponse.
 */
export async function handleDataProviderRequest(
  request: ApiRequest,
  sender: chrome.runtime.MessageSender,
): Promise<ApiResponse> {
  const config = await getDataProviderConfig();
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  if (!config.enabled) {
    logger.warn(`[${SERVICE_NAME}] API is disabled. Rejecting request.`);
    return {
      success: false,
      error: { code: 'api_disabled', message: 'Data Provider API is disabled.' },
      meta,
    };
  }

  if (typeof request.accessToken !== 'string' || !(await validateAccessToken(request.accessToken))) {
    logger.warn(`[${SERVICE_NAME}] Invalid access token. Rejecting request.`);
    return {
      success: false,
      error: { code: 'auth_invalid_token', message: 'Invalid access token.' },
      meta,
    };
  }

  if (!config.filters.allowedEntityTypes.includes(request.entityType as any)) {
    logger.warn(`[${SERVICE_NAME}] Entity type '${request.entityType}' not allowed. Rejecting request.`);
    return {
      success: false,
      error: {
        code: 'entity_type_not_allowed',
        message: `Access to entity type '${request.entityType}' is not allowed.`,
      },
      meta,
    };
  }

  if (config.logging.enabled) {
    logger.info(
      `[${SERVICE_NAME}] Processing request for entity '${request.entityType}', type '${request.type}' from sender '${sender.id || sender.url || 'unknown'}`
    );
  }

  switch (request.entityType) {
    case 'page':
      return handlePageRequest(request, config);
    case 'document':
      return handleDocumentRequest(request, config);
    case 'model':
      return handleModelRequest(request, config);
    case 'knowledge':
      return handleKnowledgeRequest(request, config);
    case 'vector':
      return handleVectorRequest(request, config);
    case 'message':
      return handleMessageRequest(request, config);
    default:
      logger.warn(`[${SERVICE_NAME}] Unsupported entity type: '${request.entityType}'`);
      return {
        success: false,
        error: {
          code: 'unsupported_entity_type',
          message: `Entity type '${request.entityType}' is not supported.`,
        },
        meta,
      };
  }
}

/**
 * Handles requests specific to the 'page' entity.
 * @param request The API request object.
 * @param config The current data provider configuration.
 * @returns A promise resolving to an ApiResponse.
 */
async function handlePageRequest(
  request: ApiRequest,
  config: DataProviderConfig,
): Promise<ApiResponse> {
  const db = new SavedPagesDB();
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  try {
    switch (request.type) {
      case 'get': {
        if (typeof request.id !== 'string' || !request.id) {
          return { success: false, error: { code: 'invalid_request', message: "'id' is required and must be a string for 'get' requests." }, meta };
        }
        const page = await db.getPageById(request.id);
        if (!page) {
          return { success: false, error: { code: 'entity_not_found', message: `Page with id '${request.id}' not found.` }, meta };
        }
        return { success: true, data: filterPageContent(page, config), meta };
      }

      case 'list': {
        const { filter, page = 1, pageSize = config.sync.batchSize || 10, sort, search, fields } = request.query || {};
        const numPage = Number(page);
        const numPageSize = Number(pageSize);

        const allPages = await db.getAllPages({ filter, page: numPage, pageSize: numPageSize, sort, search });
        const total = await db.getPageCount(filter);
        const pageCount = Math.ceil(total / numPageSize);
        
        const processedPages = allPages.map(p => filterPageContent(p, config, fields));

        return {
          success: true,
          data: processedPages,
          meta: { ...meta, total, page: numPage, pageSize: numPageSize, pageCount },
        };
      }

      case 'count': {
        const { filter } = request.query || {};
        const count = await db.getPageCount(filter);
        return { success: true, data: { count }, meta };
      }

      case 'sync': {
        const { lastSyncTime, fullSync, maxRecords = config.sync.batchSize } = request.sync || {};
        const numMaxRecords = Number(maxRecords);
        const numLastSyncTime = Number(lastSyncTime) || 0;

        if (typeof db.getPagesForSync !== 'function') {
          logger.error(`[${SERVICE_NAME}] db.getPagesForSync is not implemented!`);
          return { success: false, error: { code: 'not_implemented', message: 'Sync functionality (getPagesForSync) is not implemented in DB.' }, meta };
        }

        const pagesToSync = await db.getPagesForSync(
          fullSync ? 0 : numLastSyncTime,
          numMaxRecords,
        );

        const changes: Change[] = pagesToSync.map(page => ({
          id: page.id!,
          entityType: 'page',
          changeType: (page.createdAt && page.updatedAt && page.createdAt === page.updatedAt) ? 'create' : 'update',
          timestamp: page.updatedAt!,
          data: filterPageContent(page, config) as EntityData,
        }));

        return {
          success: true,
          data: { changes },
          meta: { ...meta, syncTime: Date.now(), hasMore: changes.length >= numMaxRecords },
        };
      }
      
      case 'changes': {
        const { lastSyncTime, maxRecords = config.sync.batchSize } = request.sync || {};
        const numMaxRecords = Number(maxRecords);
        const numLastSyncTime = Number(lastSyncTime) || 0;

        if (typeof db.getPagesForSync !== 'function') {
          logger.error(`[${SERVICE_NAME}] db.getPagesForSync is not implemented for 'changes' tracking!`);
          return { success: false, error: { code: 'not_implemented', message: 'Changes tracking (getPagesForSync) is not implemented in DB.' }, meta };
        }

        const changedPagesMetadata = await db.getPagesForSync(numLastSyncTime, numMaxRecords, true);

        const changes: Change[] = changedPagesMetadata.map(page => ({
          id: page.id!,
          entityType: 'page',
          changeType: (page.createdAt && page.updatedAt && page.createdAt === page.updatedAt) ? 'create' : 'update',
          timestamp: page.updatedAt!,
        }));

        return {
          success: true,
          data: { changes },
          meta: { ...meta, syncTime: Date.now(), hasMore: changes.length >= numMaxRecords },
        };
      }

      // Note: 'tags' is not a standard request.type in the provided ApiRequest.
      // If you need to list all unique tags, it might be a custom endpoint or derived.
      // Example:
      // case 'list_tags': {
      //   const tags = await db.getAllUniqueTags(); // This method needs to be implemented in SavedPagesDB
      //   return { success: true, data: tags, meta };
      // }

      default:
        logger.warn(`[${SERVICE_NAME}] Unsupported request type '${request.type}' for 'page' entity.`);
        return {
          success: false,
          error: { code: 'unsupported_request_type', message: `Request type '${request.type}' not supported for 'page' entity.` },
          meta,
        };
    }
  } catch (error: any) {
    logger.error(`[${SERVICE_NAME}] Error processing 'page' request:`, error);
    return {
      success: false,
      error: { code: 'internal_db_error', message: error.message || 'Database operation failed.' },
      meta,
    };
  }
}

/**
 * Filters page content based on API configuration.
 * @param page The page object.
 * @param config The data provider configuration.
 * @param fields Optional array of fields to include.
 * @returns The filtered page object.
 */
function filterPageContent(page: Page, config: DataProviderConfig, fields?: string[]): Partial<Page> {
  let filteredPage: Partial<Page> = { ...page };

  if (!config.filters.allowFullContent) {
    delete filteredPage.content;
    delete filteredPage.html;
    delete filteredPage.textContent;
  }

  if (fields && fields.length > 0) {
    const selectedPage: Partial<Page> = {};
    if (page.id && !fields.includes('-id')) {
        selectedPage.id = page.id;
    }

    for (const field of fields) {
      if (field.startsWith('-')) continue;

      if (field in filteredPage) {
        (selectedPage as any)[field] = (filteredPage as any)[field];
      }
    }
    return selectedPage;
  }

  return filteredPage;
}

/**
 * 处理文档相关的请求
 * @param request API请求对象
 * @param config 当前数据提供者配置
 * @returns 返回一个Promise解析为ApiResponse
 */
async function handleDocumentRequest(
  request: ApiRequest,
  config: DataProviderConfig,
): Promise<ApiResponse> {
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  try {
    switch (request.type) {
      case 'get': {
        if (typeof request.id !== 'string' || !request.id) {
          return { success: false, error: { code: 'invalid_request', message: "'id' is required and must be a string for 'get' requests." }, meta };
        }
        const document = await getDocument(request.id, request.query?.fields);
        if (!document.data) {
          return { success: false, error: { code: 'entity_not_found', message: `Document with id '${request.id}' not found.` }, meta };
        }
        return { success: true, data: document.data, meta };
      }

      case 'list': {
        const { filter, page = 1, pageSize = config.sync.batchSize || 10, sort, search, fields } = request.query || {};
        const result = await getDocuments({ filter, page, pageSize, sort, search, fields });
        return {
          success: true,
          data: result.data,
          meta: { ...meta, ...result.meta },
        };
      }

      case 'count': {
        // 文档计数功能尚未实现，返回一个适当的错误
        return { success: false, error: { code: 'not_implemented', message: 'Document count functionality is not implemented yet.' }, meta };
      }

      case 'sync':
      case 'changes': {
        // 文档同步功能尚未实现，返回一个适当的错误
        return { success: false, error: { code: 'not_implemented', message: `Document ${request.type} functionality is not implemented yet.` }, meta };
      }

      default:
        return {
          success: false,
          error: { code: 'unsupported_request_type', message: `Request type '${request.type}' not supported for 'document' entity.` },
          meta,
        };
    }
  } catch (error: any) {
    logger.error(`[${SERVICE_NAME}] Error processing 'document' request:`, error);
    return {
      success: false,
      error: { code: 'internal_error', message: error.message || 'An error occurred while processing the document request.' },
      meta,
    };
  }
}

/**
 * 处理模型相关的请求
 * @param request API请求对象
 * @param config 当前数据提供者配置
 * @returns 返回一个Promise解析为ApiResponse
 */
async function handleModelRequest(
  request: ApiRequest,
  config: DataProviderConfig,
): Promise<ApiResponse> {
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  try {
    switch (request.type) {
      case 'get': {
        if (typeof request.id !== 'string' || !request.id) {
          return { success: false, error: { code: 'invalid_request', message: "'id' is required and must be a string for 'get' requests." }, meta };
        }
        const model = await getModel(request.id, request.query?.fields);
        if (!model.data) {
          return { success: false, error: { code: 'entity_not_found', message: `Model with id '${request.id}' not found.` }, meta };
        }
        return { success: true, data: model.data, meta };
      }

      case 'list': {
        const { filter, page = 1, pageSize = config.sync.batchSize || 10, sort, search, fields } = request.query || {};
        const result = await getModels({ filter, page, pageSize, sort, search, fields });
        return {
          success: true,
          data: result.data,
          meta: { ...meta, ...result.meta },
        };
      }

      case 'count':
      case 'sync':
      case 'changes': {
        // 模型相关其他功能尚未实现，返回一个适当的错误
        return { success: false, error: { code: 'not_implemented', message: `Model ${request.type} functionality is not implemented yet.` }, meta };
      }

      default:
        return {
          success: false,
          error: { code: 'unsupported_request_type', message: `Request type '${request.type}' not supported for 'model' entity.` },
          meta,
        };
    }
  } catch (error: any) {
    logger.error(`[${SERVICE_NAME}] Error processing 'model' request:`, error);
    return {
      success: false,
      error: { code: 'internal_error', message: error.message || 'An error occurred while processing the model request.' },
      meta,
    };
  }
}

/**
 * 处理知识库相关的请求
 * @param request API请求对象
 * @param config 当前数据提供者配置
 * @returns 返回一个Promise解析为ApiResponse
 */
async function handleKnowledgeRequest(
  request: ApiRequest,
  config: DataProviderConfig,
): Promise<ApiResponse> {
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  try {
    // 知识库功能尚未完全实现，这里提供一个通用的响应
    return { 
      success: false, 
      error: { code: 'not_implemented', message: `Knowledge base ${request.type} functionality is not implemented yet.` }, 
      meta 
    };
  } catch (error: any) {
    logger.error(`[${SERVICE_NAME}] Error processing 'knowledge' request:`, error);
    return {
      success: false,
      error: { code: 'internal_error', message: error.message || 'An error occurred while processing the knowledge request.' },
      meta,
    };
  }
}

/**
 * 处理向量相关的请求
 * @param request API请求对象
 * @param config 当前数据提供者配置
 * @returns 返回一个Promise解析为ApiResponse
 */
async function handleVectorRequest(
  request: ApiRequest,
  config: DataProviderConfig,
): Promise<ApiResponse> {
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  try {
    // 向量功能尚未完全实现，这里提供一个通用的响应
    return { 
      success: false, 
      error: { code: 'not_implemented', message: `Vector ${request.type} functionality is not implemented yet.` }, 
      meta 
    };
  } catch (error: any) {
    logger.error(`[${SERVICE_NAME}] Error processing 'vector' request:`, error);
    return {
      success: false,
      error: { code: 'internal_error', message: error.message || 'An error occurred while processing the vector request.' },
      meta,
    };
  }
}

/**
 * 处理消息相关的请求
 * @param request API请求对象
 * @param config 当前数据提供者配置
 * @returns 返回一个Promise解析为ApiResponse
 */
async function handleMessageRequest(
  request: ApiRequest,
  config: DataProviderConfig,
): Promise<ApiResponse> {
  const meta = { serverTime: Date.now(), clientId: request.clientId };

  try {
    switch (request.type) {
      case 'get': {
        if (typeof request.id !== 'string' || !request.id) {
          return { success: false, error: { code: 'invalid_request', message: "'id' is required and must be a string for 'get' requests." }, meta };
        }
        const message = await getMessage(request.id, request.query?.fields);
        if (!message.data) {
          return { success: false, error: { code: 'entity_not_found', message: `Message with id '${request.id}' not found.` }, meta };
        }
        return { success: true, data: message.data, meta };
      }

      case 'list': {
        const { filter, page = 1, pageSize = config.sync.batchSize || 10, sort, search, fields } = request.query || {};
        const result = await getMessages({ filter, page, pageSize, sort, search, fields });
        return {
          success: true,
          data: result.data,
          meta: { ...meta, ...result.meta },
        };
      }

      case 'count':
      case 'sync':
      case 'changes': {
        // 消息相关其他功能尚未实现，返回一个适当的错误
        return { success: false, error: { code: 'not_implemented', message: `Message ${request.type} functionality is not implemented yet.` }, meta };
      }

      default:
        return {
          success: false,
          error: { code: 'unsupported_request_type', message: `Request type '${request.type}' not supported for 'message' entity.` },
          meta,
        };
    }
  } catch (error: any) {
    logger.error(`[${SERVICE_NAME}] Error processing 'message' request:`, error);
    return {
      success: false,
      error: { code: 'internal_error', message: error.message || 'An error occurred while processing the message request.' },
      meta,
    };
  }
}

// 所有实体类型的处理函数已实现，未来可以根据需要完善更多具体功能

logger.info(`[${SERVICE_NAME}] Service module loaded.`);
