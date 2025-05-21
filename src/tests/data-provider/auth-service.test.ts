/**
 * 数据提供者API认证服务测试
 */

// 先模拟依赖模块
// 模拟日志模块
jest.mock('@/utils/logger', () => ({
  __esModule: true,
  default: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  }
}));

// 模拟配置模块
const mockApiConfig = {
  enabled: true,
  accessToken: 'test_access_token',
  filters: {
    allowedEntityTypes: ['page', 'document', 'model', 'knowledge', 'vector', 'message'],
    allowFullContent: true
  },
  logging: {
    enabled: true,
    retentionDays: 30
  },
  sync: {
    defaultTimeWindow: 86400000,
    batchEnabled: true,
    batchSize: 100
  }
};

jest.mock('@/config/data-provider-config', () => ({
  __esModule: true,
  getDataProviderConfig: jest.fn().mockResolvedValue(mockApiConfig),
  isDataProviderEnabled: jest.fn().mockResolvedValue(true),
  validateAccessToken: jest.fn().mockImplementation(async (token: string) => {
    return token === 'test_access_token';
  })
}));

// 现在导入被测试的模块
import { validateApiRequest, logApiAccess } from '../../services/data-provider/auth-service';

describe('数据提供者API认证服务', () => {
  beforeEach(() => {
    // 清除所有模拟的调用记录
    jest.clearAllMocks();
  });

  describe('validateApiRequest', () => {
    it('应该在API禁用时返回无效', async () => {
      // 模拟API禁用
      const isDataProviderEnabled = require('@/config/data-provider-config').isDataProviderEnabled;
      isDataProviderEnabled.mockResolvedValueOnce(false);

      const result = await validateApiRequest('test_access_token', 'test_app_id');
      
      expect(result.valid).toBe(false);
      expect(result.error).toBe('api_disabled');
    });

    it('应该在令牌无效时返回无效', async () => {
      const result = await validateApiRequest('invalid_token', 'test_app_id');
      
      expect(result.valid).toBe(false);
      expect(result.error).toBe('invalid_token');
    });

    it('应该在令牌有效时返回有效', async () => {
      const result = await validateApiRequest('test_access_token', 'test_app_id');
      
      expect(result.valid).toBe(true);
      expect(result.error).toBeUndefined();
    });
  });

  describe('logApiAccess', () => {
    it('应该在日志禁用时不记录日志', async () => {
      // 模拟日志禁用
      const getDataProviderConfig = require('@/config/data-provider-config').getDataProviderConfig;
      getDataProviderConfig.mockResolvedValueOnce({
        ...mockApiConfig,
        logging: {
          enabled: false
        }
      });

      const logger = require('@/utils/logger').default;
      
      await logApiAccess('test_app_id', { type: 'get' }, { success: true });
      
      expect(logger.info).not.toHaveBeenCalled();
    });

    it('应该在日志启用时记录日志', async () => {
      const logger = require('@/utils/logger').default;
      
      await logApiAccess('test_app_id', { type: 'get', entityType: 'page' }, { success: true });
      
      expect(logger.info).toHaveBeenCalledWith('API访问', expect.objectContaining({
        appId: 'test_app_id',
        requestType: 'get',
        entityType: 'page',
        success: true
      }));
    });
  });
});
