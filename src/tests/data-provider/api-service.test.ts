/**
 * 数据提供者API服务测试
 */

// 创建模拟数据
const mockPages = [
  { id: 'page1', title: '测试页面 1', url: 'https://example.com/1', content: '页面内容 1', tags: ['教程', '开发'] },
  { id: 'page2', title: '测试页面 2', url: 'https://example.com/2', content: '页面内容 2', tags: ['开发'] },
  { id: 'page3', title: '测试页面 3', url: 'https://example.com/3', content: '页面内容 3', tags: ['工具'] }
];

const mockDocuments = [
  { id: 'doc1', title: '测试文档 1', content: '文档内容 1' },
  { id: 'doc2', title: '测试文档 2', content: '文档内容 2' }
];

const mockMessages = [
  { id: 'msg1', content: '消息内容 1', timestamp: Date.now() - 1000 },
  { id: 'msg2', content: '消息内容 2', timestamp: Date.now() - 500 }
];

const mockChangeRecords = [
  { id: 'change1', entityId: 'page1', entityType: 'page', operation: 'create', timestamp: Date.now() - 3000, sequenceNumber: 1 },
  { id: 'change2', entityId: 'doc1', entityType: 'document', operation: 'create', timestamp: Date.now() - 2000, sequenceNumber: 2 },
  { id: 'change3', entityId: 'msg1', entityType: 'message', operation: 'create', timestamp: Date.now() - 1000, sequenceNumber: 3 }
];

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

// 模拟数据访问层
jest.mock('../../services/data-provider/data-access', () => ({
  __esModule: true,
  getPage: jest.fn().mockImplementation((id) => {
    if (id === 'page1') {
      return Promise.resolve({ data: mockPages[0], meta: {} });
    } else if (id === 'doc1') {
      return Promise.resolve({ data: mockDocuments[0], meta: {} });
    } else if (id === 'msg1') {
      return Promise.resolve({ data: mockMessages[0], meta: {} });
    } else {
      return Promise.resolve({ data: null, meta: {} });
    }
  }),
  getPages: jest.fn().mockImplementation((params) => {
    let filteredPages = [...mockPages];
    
    // 处理标签过滤
    if (params?.filter?.tags) {
      const tags = Array.isArray(params.filter.tags) ? params.filter.tags : [params.filter.tags];
      filteredPages = filteredPages.filter(page => {
        return tags.some(tag => page.tags.includes(tag));
      });
    }
    
    return Promise.resolve({
      data: filteredPages,
      meta: { total: filteredPages.length, page: 1, pageSize: 10, pageCount: 1 }
    });
  }),
  getPageCount: jest.fn().mockImplementation((params) => {
    let filteredPages = [...mockPages];
    
    // 处理标签过滤
    if (params?.filter?.tags) {
      const tags = Array.isArray(params.filter.tags) ? params.filter.tags : [params.filter.tags];
      filteredPages = filteredPages.filter(page => {
        return tags.some(tag => page.tags.includes(tag));
      });
    }
    
    return Promise.resolve({ data: { count: filteredPages.length }, meta: {} });
  }),
  getAllTags: jest.fn().mockResolvedValue({ data: ['教程', '开发', '工具'], meta: {} }),
  getDocument: jest.fn().mockImplementation((id) => {
    if (id === 'doc1') {
      return Promise.resolve({ data: mockDocuments[0], meta: {} });
    } else {
      return Promise.resolve({ data: null, meta: {} });
    }
  }),
  getDocuments: jest.fn().mockResolvedValue({ data: mockDocuments, meta: { total: mockDocuments.length } }),
  getMessage: jest.fn().mockImplementation((id) => {
    if (id === 'msg1') {
      return Promise.resolve({ data: mockMessages[0], meta: {} });
    } else {
      return Promise.resolve({ data: null, meta: {} });
    }
  }),
  getMessages: jest.fn().mockResolvedValue({ data: mockMessages, meta: { total: mockMessages.length } })
}));

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

// 模拟 Chrome 存储
global.chrome = {
  storage: {
    local: {
      get: jest.fn((key, callback) => {
        if (key === 'pages') {
          callback({ pages: mockPages });
        } else if (key === 'documents') {
          callback({ documents: mockDocuments });
        } else if (key === 'messages') {
          callback({ messages: mockMessages });
        } else {
          callback({});
        }
      }),
      set: jest.fn((items, callback) => {
        if (callback) callback();
      })
    }
  }
} as any;

// 模拟认证模块
jest.mock('../../services/data-provider/auth-service', () => ({
  __esModule: true,
  validateApiRequest: jest.fn().mockResolvedValue({ valid: true }),
  logApiAccess: jest.fn()
}));

// 模拟变更跟踪模块
jest.mock('../../services/data-provider/change-tracker', () => ({
  __esModule: true,
  getChangesSince: jest.fn().mockImplementation(async (timestamp, entityType, maxRecords) => {
    let changes = [...mockChangeRecords].filter(c => c.timestamp > timestamp);
    
    if (entityType) {
      changes = changes.filter(c => c.entityType === entityType);
    }
    
    if (maxRecords && maxRecords > 0 && changes.length > maxRecords) {
      changes = changes.slice(0, maxRecords);
    }
    
    return changes;
  }),
  getLastChangeTime: jest.fn().mockImplementation(async (entityType, entityId) => {
    const changes = mockChangeRecords.filter(
      c => c.entityType === entityType && c.entityId === entityId
    );
    
    if (changes.length === 0) {
      return 0;
    }
    
    return Math.max(...changes.map(c => c.timestamp));
  })
}));

// 模拟配置模块
jest.mock('@/config/data-provider-config', () => ({
  __esModule: true,
  getDataProviderConfig: jest.fn().mockResolvedValue(mockApiConfig)
}));

// 在模拟完所有依赖后导入被测试的模块
import { handleApiRequest, ApiRequest, ApiResponse } from '../../services/data-provider/api-service';

describe('数据提供者API服务', () => {
  beforeEach(() => {
    // 清除所有模拟的调用记录
    jest.clearAllMocks();
    
    // 模拟Date.now()
    const realDateNow = Date.now;
    Date.now = jest.fn().mockReturnValue(1621800000000);
    
    // 保存原始Date.now以便恢复
    return () => {
      Date.now = realDateNow;
    };
  });

  describe('handleApiRequest', () => {
    it('应该在认证失败时返回错误响应', async () => {
      const request: ApiRequest = {
        type: 'get',
        entityType: 'page',
        id: 'page_001',
        accessToken: 'invalid_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error).toBeDefined();
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该在实体类型不允许时返回错误响应', async () => {
      // 模拟配置中不允许的实体类型
      const getDataProviderConfig = require('@/config/data-provider-config').getDataProviderConfig;
      getDataProviderConfig.mockResolvedValueOnce({
        ...mockApiConfig,
        filters: {
          allowedEntityTypes: ['document'], // 不包含page
          allowFullContent: true
        }
      });
      
      const request: ApiRequest = {
        type: 'get',
        entityType: 'page',
        id: 'page_001',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('entity_type_not_allowed');
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该在请求类型无效时返回错误响应', async () => {
      const request: ApiRequest = {
        type: 'invalid_type' as any,
        entityType: 'page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('invalid_request_type');
      expect(response.meta?.serverTime).toBeDefined();
    });
  });

  describe('handleGetRequest', () => {
    it('应该在缺少ID时返回错误响应', async () => {
      const request: ApiRequest = {
        type: 'get',
        entityType: 'page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('missing_id');
    });
    
    it('应该在实体不存在时返回错误响应', async () => {
      // 使用已经模拟的getPage函数，它会为非存在的ID返回null
      const request: ApiRequest = {
        type: 'get',
        entityType: 'page',
        id: 'non_existent_page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('not_found');
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该返回请求的页面', async () => {
      // 使用已经模拟的getPage函数
      const request: ApiRequest = {
        type: 'get',
        entityType: 'page',
        id: 'page1',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      // 验证响应
      expect(response.success).toBe(true);
      expect(response.data).toEqual(mockPages[0]);
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该返回请求的文档', async () => {
      // 使用已经模拟的getDocument函数
      const request: ApiRequest = {
        type: 'get',
        entityType: 'document',
        id: 'doc1',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(response.data).toEqual(mockDocuments[0]);
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该返回请求的消息', async () => {
      // 使用已经模拟的getMessage函数
      const request: ApiRequest = {
        type: 'get',
        entityType: 'message',
        id: 'msg1',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(response.data).toEqual(mockMessages[0]);
      expect(response.meta?.serverTime).toBeDefined();
    });
  });

  describe('handleListRequest', () => {
    it('应该返回页面列表', async () => {
      // 使用已经模拟的getPages函数
      const request: ApiRequest = {
        type: 'list',
        entityType: 'page',
        query: {
          page: 1,
          pageSize: 10
        },
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBe(mockPages.length);
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该根据过滤条件返回页面列表', async () => {
      // 使用已经模拟的getPages函数，它会处理过滤条件
      const request: ApiRequest = {
        type: 'list',
        entityType: 'page',
        query: {
          filter: {
            tags: ['教程']
          }
        },
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(Array.isArray(response.data)).toBe(true);
      // 只有一个页面有"教程"标签
      expect(response.data.length).toBe(1);
      expect(response.data[0].tags).toContain('教程');
      expect(response.meta?.serverTime).toBeDefined();
    });
  });
  
  describe('handleCountRequest', () => {
    it('应该返回页面计数', async () => {
      // 使用已经模拟的getPageCount函数
      const request: ApiRequest = {
        type: 'count',
        entityType: 'page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(response.data.count).toBe(mockPages.length);
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该根据过滤条件返回页面计数', async () => {
      // 为这个测试特别模拟getPageCount函数
      const mockGetPageCount = jest.fn().mockResolvedValue({ data: { count: 1 }, meta: {} });
      const originalGetPageCount = require('../../services/data-provider/data-access').getPageCount;
      require('../../services/data-provider/data-access').getPageCount = mockGetPageCount;
      
      const request: ApiRequest = {
        type: 'count',
        entityType: 'page',
        query: {
          filter: {
            tags: ['教程']
          }
        },
        accessToken: 'test_access_token'
      };
      
      try {
        const response = await handleApiRequest(request, 'test_app_id');
        
        expect(response.success).toBe(true);
        expect(response.data.count).toBe(1); // 只有一个页面有"教程"标签
        expect(response.meta?.serverTime).toBeDefined();
        
        // 验证getPageCount被调用时传入了正确的参数
        expect(mockGetPageCount).toHaveBeenCalledWith({ tags: ['教程'] });
      } finally {
        // 恢复原始函数
        require('../../services/data-provider/data-access').getPageCount = originalGetPageCount;
      }
    });
  });

  describe('handleTagsRequest', () => {
    it('应该返回所有标签', async () => {
      // 使用已经模拟的getAllTags函数
      const request: ApiRequest = {
        type: 'tags',
        entityType: 'page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data).toContain('教程');
      expect(response.data).toContain('开发');
      expect(response.data).toContain('工具');
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该在实体类型不是page时返回错误', async () => {
      const request: ApiRequest = {
        type: 'tags',
        entityType: 'document',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('entity_type_not_supported');
      expect(response.meta?.serverTime).toBeDefined();
    });
  });

  describe('handleSyncRequest', () => {
    it('应该在缺少同步参数时返回错误响应', async () => {
      const request: ApiRequest = {
        type: 'sync',
        entityType: 'page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('missing_sync_params');
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该返回指定时间戳之后的变更', async () => {
      const request: ApiRequest = {
        type: 'sync',
        entityType: 'page',
        sync: {
          lastSyncTime: 1621600000000,
          fullSync: false
        },
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(Array.isArray(response.data.changes)).toBe(true);
      expect(response.data.changes.length).toBe(1); // 只有一个变更在1621600000000之后
      expect(response.meta?.syncTime).toBeDefined();
      expect(response.meta?.hasMore).toBeDefined();
      expect(response.meta?.serverTime).toBeDefined();
    });
  });

  describe('handleChangesRequest', () => {
    it('应该在缺少同步参数时返回错误响应', async () => {
      const request: ApiRequest = {
        type: 'changes',
        entityType: 'page',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(false);
      expect(response.error?.code).toBe('missing_changes_params');
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该返回指定时间戳之后的变更记录', async () => {
      const request: ApiRequest = {
        type: 'changes',
        entityType: 'page',
        sync: {
          lastSyncTime: 1621600000000,
          maxRecords: 50
        },
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(Array.isArray(response.data.changes)).toBe(true);
      expect(response.data.changes.length).toBe(1); // 只有一个变更在1621600000000之后
      expect(response.data.changes[0].timestamp).toBeGreaterThan(1621600000000);
      expect(response.meta?.syncTime).toBeDefined();
      expect(response.meta?.hasMore).toBeDefined();
      expect(response.meta?.serverTime).toBeDefined();
    });
    
    it('应该限制返回的记录数量', async () => {
      const request: ApiRequest = {
        type: 'changes',
        entityType: 'page',
        sync: {
          lastSyncTime: 0,
          maxRecords: 1
        },
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(Array.isArray(response.data.changes)).toBe(true);
      expect(response.data.changes.length).toBe(1); // 限制为1条记录
      expect(response.meta?.hasMore).toBe(true); // 应该还有更多记录
      expect(response.meta?.serverTime).toBeDefined();
    });
  });

  describe('客户端标识', () => {
    it('应该在响应中包含客户端标识', async () => {
      // 使用已经模拟的getPage函数
      const request: ApiRequest = {
        type: 'get',
        entityType: 'page',
        id: 'page1',
        clientId: 'test_client_id',
        accessToken: 'test_access_token'
      };
      
      const response = await handleApiRequest(request, 'test_app_id');
      
      expect(response.success).toBe(true);
      expect(response.meta?.clientId).toBe('test_client_id');
      expect(response.meta?.serverTime).toBeDefined();
    });
  });
});
