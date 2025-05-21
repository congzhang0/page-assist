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
import { getDataProviderConfig } from '@/config/data-provider-config';

// API请求接口
export interface ApiRequest {
  // 请求类型
  type: 'get' | 'list' | 'sync' | 'count' | 'tags' | 'changes';
  
  // 实体类型
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';
  
  // 实体ID（用于get请求）
  id?: string;
  
  // 查询参数（用于list请求）
  query?: {
    // 过滤条件
    filter?: Record<string, any>;
    
    // 分页
    page?: number;
    pageSize?: number;
    
    // 排序
    sort?: {
      field: string;
      order: 'asc' | 'desc';
    };
    
    // 搜索
    search?: string;
    
    // 字段选择
    fields?: string[];
  };
  
  // 同步参数（用于sync和changes请求）
  sync?: {
    // 上次同步时间
    lastSyncTime?: number;
    
    // 是否全量同步
    fullSync?: boolean;
    
    // 最大返回记录数
    maxRecords?: number;
  };
  
  // 客户端标识（可选）
  clientId?: string;
  
  // 访问令牌
  accessToken: string;
}

// API响应接口
export interface ApiResponse {
  // 响应状态
  success: boolean;
  
  // 错误信息（如果有）
  error?: {
    code: string;
    message: string;
  };
  
  // 响应数据
  data?: any;
  
  // 元数据
  meta?: {
    // 总记录数
    total?: number;
    
    // 分页信息
    page?: number;
    pageSize?: number;
    pageCount?: number;
    
    // 同步信息
    syncTime?: number;
    hasMore?: boolean;
    
    // 客户端信息
    clientId?: string;
    
    // 服务器时间
    serverTime?: number;
  };
}

/**
 * 处理API请求
 * @param request API请求
 * @param appId 应用ID
 */
export async function handleApiRequest(request: ApiRequest, appId: string): Promise<ApiResponse> {
  try {
    logger.debug('处理API请求', {
      type: request.type,
      entityType: request.entityType,
      appId,
    });
    
    // 验证请求
    const validation = await validateApiRequest(request.accessToken, appId);
    if (!validation.valid) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: validation.error || 'unauthorized',
          message: getErrorMessage(validation.error || 'unauthorized'),
        },
        meta: {
          serverTime: Date.now()
        }
      };
      
      // 记录访问日志
      await logApiAccess(appId, request, response);
      
      return response;
    }
    
    // 检查实体类型是否允许
    const config = await getDataProviderConfig();
    if (!config.filters.allowedEntityTypes.includes(request.entityType)) {
      const response: ApiResponse = {
        success: false,
        error: {
          code: 'entity_type_not_allowed',
          message: getErrorMessage('entity_type_not_allowed'),
        },
        meta: {
          serverTime: Date.now()
        }
      };
      
      // 记录访问日志
      await logApiAccess(appId, request, response);
      
      return response;
    }
    
    // 根据请求类型处理
    let response: ApiResponse;
    
    switch (request.type) {
      case 'get':
        response = await handleGetRequest(request);
        break;
      case 'list':
        response = await handleListRequest(request);
        break;
      case 'sync':
        response = await handleSyncRequest(request);
        break;
      case 'count':
        response = await handleCountRequest(request);
        break;
      case 'tags':
        response = await handleTagsRequest(request);
        break;
      case 'changes':
        response = await handleChangesRequest(request);
        break;
      default:
        response = {
          success: false,
          error: {
            code: 'invalid_request_type',
            message: getErrorMessage('invalid_request_type'),
          },
          meta: {
            serverTime: Date.now()
          }
        };
    }
    
    // 添加服务器时间到响应元数据
    if (!response.meta) {
      response.meta = {};
    }
    response.meta.serverTime = Date.now();
    
    // 添加客户端标识到响应元数据（如果有）
    if (request.clientId) {
      response.meta.clientId = request.clientId;
    }
    
    // 记录访问日志
    await logApiAccess(appId, request, response);
    
    return response;
  } catch (error) {
    logger.error('处理API请求失败', error);
    
    const response: ApiResponse = {
      success: false,
      error: {
        code: 'internal_error',
        message: error.message || getErrorMessage('internal_error'),
      },
      meta: {
        serverTime: Date.now()
      }
    };
    
    // 记录访问日志
    await logApiAccess(appId, request, response);
    
    return response;
  }
}

/**
 * 处理获取单个实体的请求
 */
async function handleGetRequest(request: ApiRequest): Promise<ApiResponse> {
  // 检查ID是否存在
  if (!request.id) {
    return {
      success: false,
      error: {
        code: 'missing_id',
        message: getErrorMessage('missing_id'),
      },
    };
  }
  
  // 根据实体类型获取数据
  let result;
  
  switch (request.entityType) {
    case 'page':
      result = await getPage(request.id, request.query?.fields);
      break;
    case 'document':
      result = await getDocument(request.id, request.query?.fields);
      break;
    case 'model':
      result = await getModel(request.id, request.query?.fields);
      break;
    case 'message':
      result = await getMessage(request.id, request.query?.fields);
      break;
    default:
      return {
        success: false,
        error: {
          code: 'entity_type_not_supported',
          message: getErrorMessage('entity_type_not_supported'),
        },
      };
  }
  
  // 检查是否找到数据
  if (!result.data) {
    return {
      success: false,
      error: {
        code: 'not_found',
        message: getErrorMessage('not_found'),
      },
    };
  }
  
  return {
    success: true,
    data: result.data,
    meta: result.meta,
  };
}

/**
 * 处理获取实体列表的请求
 */
async function handleListRequest(request: ApiRequest): Promise<ApiResponse> {
  // 根据实体类型获取数据
  let result;
  
  switch (request.entityType) {
    case 'page':
      result = await getPages(request.query);
      break;
    case 'document':
      result = await getDocuments(request.query);
      break;
    case 'model':
      result = await getModels(request.query);
      break;
    case 'message':
      result = await getMessages(request.query);
      break;
    default:
      return {
        success: false,
        error: {
          code: 'entity_type_not_supported',
          message: getErrorMessage('entity_type_not_supported'),
        },
      };
  }
  
  return {
    success: true,
    data: result.data,
    meta: result.meta,
  };
}

/**
 * 处理同步请求
 */
async function handleSyncRequest(request: ApiRequest): Promise<ApiResponse> {
  // 检查同步参数
  if (!request.sync) {
    return {
      success: false,
      error: {
        code: 'missing_sync_params',
        message: getErrorMessage('missing_sync_params'),
      },
    };
  }
  
  // 获取上次同步时间
  const lastSyncTime = request.sync.lastSyncTime || 0;
  
  // 获取变更记录
  const changes = await getChangesSince(
    lastSyncTime,
    request.sync.fullSync ? undefined : request.entityType
  );
  
  // 获取当前时间作为同步时间
  const syncTime = Date.now();
  
  return {
    success: true,
    data: {
      changes,
    },
    meta: {
      syncTime,
      hasMore: false, // 目前不支持分页同步
    },
  };
}

/**
 * 处理计数请求
 */
async function handleCountRequest(request: ApiRequest): Promise<ApiResponse> {
  // 根据实体类型获取计数
  let result;
  
  switch (request.entityType) {
    case 'page':
      result = await getPageCount(request.query?.filter);
      break;
    default:
      return {
        success: false,
        error: {
          code: 'entity_type_not_supported',
          message: getErrorMessage('entity_type_not_supported'),
        },
      };
  }
  
  return {
    success: true,
    data: result.data,
  };
}

/**
 * 处理获取标签的请求
 */
async function handleTagsRequest(request: ApiRequest): Promise<ApiResponse> {
  // 目前只支持页面标签
  if (request.entityType !== 'page') {
    return {
      success: false,
      error: {
        code: 'entity_type_not_supported',
        message: getErrorMessage('entity_type_not_supported'),
      },
    };
  }
  
  // 获取所有标签
  const result = await getAllTags();
  
  return {
    success: true,
    data: result.data,
  };
}

/**
 * 处理获取变更记录的请求
 */
async function handleChangesRequest(request: ApiRequest): Promise<ApiResponse> {
  // 检查同步参数
  if (!request.sync) {
    return {
      success: false,
      error: {
        code: 'missing_changes_params',
        message: getErrorMessage('missing_changes_params'),
      },
    };
  }
  
  // 获取上次同步时间
  const lastSyncTime = request.sync.lastSyncTime || 0;
  
  // 获取最大返回记录数
  const maxRecords = request.sync.maxRecords || 50;
  
  // 获取变更记录
  const changes = await getChangesSince(
    lastSyncTime,
    request.entityType,
    maxRecords
  );
  
  // 获取当前时间作为同步时间
  const syncTime = Date.now();
  
  // 检查是否还有更多变更
  const hasMore = changes.length >= maxRecords;
  
  return {
    success: true,
    data: {
      changes: changes.map(change => ({
        entityType: change.entityType,
        entityId: change.entityId,
        changeType: change.changeType,
        timestamp: change.timestamp,
        sequenceNumber: change.sequenceNumber || 0
      }))
    },
    meta: {
      syncTime,
      hasMore,
    },
  };
}

/**
 * 获取错误消息
 */
function getErrorMessage(code: string): string {
  const errorMessages: Record<string, string> = {
    'unauthorized': '未授权的访问',
    'invalid_token': '无效的访问令牌',
    'unauthorized_app': '未授权的应用',
    'api_disabled': 'API已禁用',
    'rate_limit_exceeded': '超过速率限制',
    'missing_id': '缺少ID参数',
    'not_found': '未找到请求的资源',
    'entity_type_not_supported': '不支持的实体类型',
    'entity_type_not_allowed': '不允许访问该实体类型',
    'invalid_request_type': '无效的请求类型',
    'missing_sync_params': '缺少同步参数',
    'missing_changes_params': '缺少变更记录参数',
    'internal_error': '内部错误',
  };
  
  return errorMessages[code] || '未知错误';
}
