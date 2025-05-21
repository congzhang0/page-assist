/**
 * 数据提供者API配置管理模块
 */
import logger from '@/utils/logger';

// 数据提供者API配置接口
export interface DataProviderConfig {
  // 是否启用API
  enabled: boolean;
  
  // 访问令牌（用于身份验证）
  accessToken: string;
  
  // 数据过滤设置
  filters: {
    // 允许访问的实体类型
    allowedEntityTypes: ('document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page')[];
    
    // 是否允许访问完整内容
    allowFullContent: boolean;
  };
  
  // 日志设置
  logging: {
    // 是否启用访问日志
    enabled: boolean;
    
    // 日志保留天数
    retentionDays: number;
  };
  
  // 同步设置
  sync: {
    // 增量同步的默认时间窗口（毫秒）
    defaultTimeWindow: number;
    
    // 是否启用批量同步
    batchEnabled: boolean;
    
    // 批量大小上限
    batchSize: number;
  };
}

// 存储键
export const DATA_PROVIDER_CONFIG_KEY = 'dataProviderConfig';

// 默认配置
export const DEFAULT_DATA_PROVIDER_CONFIG: DataProviderConfig = {
  enabled: false,
  accessToken: generateAccessToken(),
  filters: {
    allowedEntityTypes: ['page', 'document', 'model', 'knowledge', 'vector', 'message'],
    allowFullContent: true,
  },
  logging: {
    enabled: true,
    retentionDays: 30,
  },
  sync: {
    defaultTimeWindow: 86400000, // 默认24小时
    batchEnabled: true,
    batchSize: 100,
  },
};

/**
 * 生成随机访问令牌
 */
export function generateAccessToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const tokenLength = 32;
  let token = '';
  
  for (let i = 0; i < tokenLength; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return token;
}

/**
 * 获取数据提供者API配置
 */
export async function getDataProviderConfig(): Promise<DataProviderConfig> {
  return new Promise((resolve) => {
    chrome.storage.local.get(DATA_PROVIDER_CONFIG_KEY, (result) => {
      const config = result[DATA_PROVIDER_CONFIG_KEY] as DataProviderConfig;
      
      if (!config) {
        logger.debug('数据提供者API配置不存在，使用默认配置');
        resolve(DEFAULT_DATA_PROVIDER_CONFIG);
      } else {
        logger.debug('获取数据提供者API配置成功');
        resolve(config);
      }
    });
  });
}

/**
 * 更新数据提供者API配置
 */
export async function updateDataProviderConfig(updates: Partial<DataProviderConfig>): Promise<DataProviderConfig> {
  const currentConfig = await getDataProviderConfig();
  const newConfig = { ...currentConfig, ...updates };
  
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [DATA_PROVIDER_CONFIG_KEY]: newConfig }, () => {
      if (chrome.runtime.lastError) {
        logger.error('更新数据提供者API配置失败', chrome.runtime.lastError);
        reject(new Error(`更新数据提供者API配置失败: ${chrome.runtime.lastError.message}`));
      } else {
        logger.debug('更新数据提供者API配置成功', updates);
        resolve(newConfig);
      }
    });
  });
}

/**
 * 重置数据提供者API配置
 */
export async function resetDataProviderConfig(): Promise<DataProviderConfig> {
  return updateDataProviderConfig(DEFAULT_DATA_PROVIDER_CONFIG);
}

/**
 * 生成新的访问令牌并更新配置
 */
export async function regenerateAccessToken(): Promise<string> {
  const newToken = generateAccessToken();
  await updateDataProviderConfig({ accessToken: newToken });
  return newToken;
}

/**
 * 验证访问令牌
 */
export async function validateAccessToken(token: string): Promise<boolean> {
  const config = await getDataProviderConfig();
  return config.enabled && config.accessToken === token;
}

/**
 * 启用数据提供者API
 */
export async function enableDataProvider(): Promise<void> {
  await updateDataProviderConfig({ enabled: true });
}

/**
 * 禁用数据提供者API
 */
export async function disableDataProvider(): Promise<void> {
  await updateDataProviderConfig({ enabled: false });
}

/**
 * 检查数据提供者API是否启用
 */
export async function isDataProviderEnabled(): Promise<boolean> {
  const config = await getDataProviderConfig();
  return config.enabled;
}
