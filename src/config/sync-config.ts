// 同步配置，定义同步行为和参数
export interface SyncConfig {
  // 是否启用同步
  enabled: boolean;
  
  // 代理端点URL
  proxyEndpoint: string;
  
  // 重试策略
  retry: {
    // 最大重试次数
    maxRetries: number;
    // 初始重试延迟(ms)
    initialDelay: number;
    // 最大重试延迟(ms)
    maxDelay: number;
  };
  
  // 数据保留策略
  retention: {
    // 数据过期时间(ms)，默认两周
    expirationTime: number;
  };
  
  // 批量同步设置
  batch: {
    // 是否启用批量同步
    enabled: boolean;
    // 批量大小上限
    maxSize: number;
    // 批量等待时间(ms)
    batchWindow: number;
  };
  
  // 网络条件
  network: {
    // 是否仅在Wi-Fi下同步
    wifiOnly: boolean;
  };
}

// 默认同步配置
export const DEFAULT_SYNC_CONFIG: SyncConfig = {
  enabled: true,
  proxyEndpoint: '',
  retry: {
    maxRetries: 5,
    initialDelay: 1000,
    maxDelay: 60000,
  },
  retention: {
    expirationTime: 14 * 24 * 60 * 60 * 1000, // 两周
  },
  batch: {
    enabled: true,
    maxSize: 10,
    batchWindow: 2000,
  },
  network: {
    wifiOnly: false,
  },
};

// 获取同步配置
export async function getSyncConfig(): Promise<SyncConfig> {
  return new Promise((resolve) => {
    chrome.storage.local.get('syncConfig', (result) => {
      resolve(result.syncConfig || DEFAULT_SYNC_CONFIG);
    });
  });
}

// 更新同步配置
export async function updateSyncConfig(config: Partial<SyncConfig>): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.get('syncConfig', (result) => {
      const newConfig = { ...result.syncConfig || DEFAULT_SYNC_CONFIG, ...config };
      chrome.storage.local.set({ syncConfig: newConfig }, () => {
        resolve();
      });
    });
  });
} 