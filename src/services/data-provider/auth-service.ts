/**
 * 数据提供者API身份验证服务 - POC简化版
 */
import logger from '@/utils/logger';
import { 
  getDataProviderConfig, 
  validateAccessToken as configValidateToken,
  isDataProviderEnabled 
} from '@/config/data-provider-config';

/**
 * 验证API请求 - POC简化版
 * @param token 访问令牌
 * @param appId 应用ID
 * @returns 验证结果和错误信息
 */
export async function validateApiRequest(token: string, appId: string): Promise<{
  valid: boolean;
  error?: string;
}> {
  // 检查API是否启用
  const isEnabled = await isDataProviderEnabled();
  if (!isEnabled) {
    return {
      valid: false,
      error: 'api_disabled',
    };
  }
  
  // 验证访问令牌
  const isValidToken = await configValidateToken(token);
  if (!isValidToken) {
    return {
      valid: false,
      error: 'invalid_token',
    };
  }
  
  // POC简化版不检查应用授权和速率限制
  
  return {
    valid: true,
  };
}

/**
 * 记录API访问日志 - POC简化版
 */
export async function logApiAccess(appId: string, request: any, response: any): Promise<void> {
  const config = await getDataProviderConfig();
  
  // 如果日志未启用，直接返回
  if (!config.logging.enabled) {
    return;
  }
  
  const logEntry = {
    timestamp: Date.now(),
    appId,
    requestType: request.type,
    entityType: request.entityType,
    success: response.success,
    error: response.error,
  };
  
  logger.info('API访问', logEntry);
}
