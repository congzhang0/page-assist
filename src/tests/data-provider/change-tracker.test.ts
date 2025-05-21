/**
 * 数据提供者API变更跟踪器测试
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

// 创建模拟数据
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

const mockChangeRecords = [
  { id: 'change1', entityId: 'page1', entityType: 'page', operation: 'create', timestamp: Date.now() - 3000, sequenceNumber: 1 },
  { id: 'change2', entityId: 'doc1', entityType: 'document', operation: 'create', timestamp: Date.now() - 2000, sequenceNumber: 2 },
  { id: 'change3', entityId: 'msg1', entityType: 'message', operation: 'create', timestamp: Date.now() - 1000, sequenceNumber: 3 }
];

// 模拟配置模块
jest.mock('@/config/data-provider-config', () => ({
  __esModule: true,
  getDataProviderConfig: jest.fn().mockResolvedValue(mockApiConfig)
}));

// 在模拟完所有依赖后导入被测试的模块
import { 
  trackChange, 
  getChangesSince, 
  cleanupChangeRecords 
} from '../../services/data-provider/change-tracker';

describe('数据提供者API变更跟踪器', () => {
  // 保存原始的chrome.storage
  const originalChromeStorage = global.chrome.storage;
  
  beforeEach(() => {
    // 清除所有模拟的调用记录
    jest.clearAllMocks();
    
    // 重置chrome.storage模拟
    // 正确定义Jest模拟函数
    const mockGet = jest.fn();
    const mockSet = jest.fn();
    
    // 默认实现
    mockGet.mockImplementation((key, callback) => {
      if (key === 'dataProviderChangeRecords') {
        callback({ dataProviderChangeRecords: [...mockChangeRecords] });
      } else if (key === 'dataProviderSequenceNumber') {
        callback({ dataProviderSequenceNumber: 3 });
      } else {
        callback({});
      }
    });
    
    mockSet.mockImplementation((items, callback) => {
      if (callback) callback();
    });
    
    global.chrome.storage = {
      local: {
        get: mockGet,
        set: mockSet
      }
    } as any;
  });
  
  afterEach(() => {
    // 恢复原始的chrome.storage
    global.chrome.storage = originalChromeStorage;
  });

  describe('trackChange', () => {
    it('应该记录变更并分配序列号', async () => {
      // 准备模拟数据
      const mockRecords = [...mockChangeRecords];
      let sequenceNumberCallback: ((key: string, callback: Function) => void) | null = null;
      let setSequenceNumberCallback: ((data: any, callback?: Function) => void) | null = null;
      let getRecordsCallback: ((key: string, callback: Function) => void) | null = null;
      let setRecordsCallback: ((data: any, callback?: Function) => void) | null = null;
      
      // 设置模拟回调
      sequenceNumberCallback = (key, callback) => {
        expect(key).toBe('dataProviderSequenceNumber');
        callback({ dataProviderSequenceNumber: 3 });
      };
      
      setSequenceNumberCallback = (data, callback) => {
        expect(data).toHaveProperty('dataProviderSequenceNumber', 4);
        if (callback) callback();
      };
      
      getRecordsCallback = (key, callback) => {
        expect(key).toBe('dataProviderChangeRecords');
        callback({ dataProviderChangeRecords: mockRecords });
      };
      
      setRecordsCallback = (data, callback) => {
        const savedRecords = data.dataProviderChangeRecords;
        expect(savedRecords.length).toBe(mockRecords.length + 1);
        
        // 验证新记录的内容
        const newRecord = savedRecords[savedRecords.length - 1];
        expect(newRecord.entityType).toBe('page');
        expect(newRecord.entityId).toBe('page_004');
        expect(newRecord.changeType).toBe('create');
        expect(newRecord.details).toEqual({ title: '新测试页面' });
        expect(newRecord.sequenceNumber).toBe(4); // 3 + 1
        
        if (callback) callback();
      };
      
      // 设置模拟函数的实现
      (global.chrome.storage.local.get as jest.Mock).mockImplementation((key, callback) => {
        if (key === 'dataProviderSequenceNumber' && sequenceNumberCallback) {
          sequenceNumberCallback(key, callback);
          sequenceNumberCallback = null; // 使用后置空
          return;
        }
        
        if (key === 'dataProviderChangeRecords' && getRecordsCallback) {
          getRecordsCallback(key, callback);
          getRecordsCallback = null; // 使用后置空
          return;
        }
        
        // 默认实现
        if (key === 'dataProviderChangeRecords') {
          callback({ dataProviderChangeRecords: [...mockChangeRecords] });
        } else if (key === 'dataProviderSequenceNumber') {
          callback({ dataProviderSequenceNumber: 3 });
        } else {
          callback({});
        }
      });
      
      (global.chrome.storage.local.set as jest.Mock).mockImplementation((data, callback) => {
        if (data.dataProviderSequenceNumber && setSequenceNumberCallback) {
          setSequenceNumberCallback(data, callback);
          setSequenceNumberCallback = null; // 使用后置空
          return;
        }
        
        if (data.dataProviderChangeRecords && setRecordsCallback) {
          setRecordsCallback(data, callback);
          setRecordsCallback = null; // 使用后置空
          return;
        }
        
        // 默认实现
        if (callback) callback();
      });
      
      await trackChange('page', 'page_004', 'create', { title: '新测试页面' });
      
      // 验证chrome.storage.local.set被调用了两次（一次设置序列号，一次保存记录）
      expect(global.chrome.storage.local.set).toHaveBeenCalledTimes(2);
    });
  });

  describe('getChangesSince', () => {
    it('应该返回指定时间戳之后的变更记录', async () => {
      // 模拟时间戳
      const now = Date.now();
      const pastTime = now - 10000; // 10秒前
      
      // 创建模拟记录，其中两个在指定时间之后
      const filteredRecords = [
        { id: 'change1', entityId: 'page1', entityType: 'page', operation: 'create', timestamp: pastTime - 3000, sequenceNumber: 1 },
        { id: 'change2', entityId: 'doc1', entityType: 'document', operation: 'create', timestamp: pastTime - 1000, sequenceNumber: 2 },
        { id: 'change3', entityId: 'msg1', entityType: 'message', operation: 'create', timestamp: pastTime + 1000, sequenceNumber: 3 }
      ];
      
      // 模拟获取变更记录
      (global.chrome.storage.local.get as jest.Mock).mockImplementationOnce((key, callback) => {
        expect(key).toBe('dataProviderChangeRecords');
        callback({ dataProviderChangeRecords: filteredRecords });
      });
      
      const changes = await getChangesSince(pastTime);
      
      // 验证返回的记录数量
      expect(changes.length).toBe(1); // 只有一个记录的时间戳大于pastTime
      
      // 验证返回的记录内容
      expect(changes[0].timestamp).toBeGreaterThan(pastTime);
      expect(changes[0].id).toBe('change3');
    });
    
    it('应该根据实体类型过滤变更记录', async () => {
      // 创建模拟记录，包含一个document类型的记录
      const filteredRecords = [
        { id: 'change1', entityId: 'page1', entityType: 'page', operation: 'create', timestamp: Date.now() - 3000, sequenceNumber: 1 },
        { id: 'change2', entityId: 'doc1', entityType: 'document', operation: 'create', timestamp: Date.now() - 2000, sequenceNumber: 2 },
        { id: 'change3', entityId: 'msg1', entityType: 'message', operation: 'create', timestamp: Date.now() - 1000, sequenceNumber: 3 }
      ];
      
      // 模拟获取变更记录
      (global.chrome.storage.local.get as jest.Mock).mockImplementationOnce((key, callback) => {
        expect(key).toBe('dataProviderChangeRecords');
        callback({ dataProviderChangeRecords: filteredRecords });
      });
      
      const changes = await getChangesSince(0, 'document');
      
      // 验证返回的记录数量
      expect(changes.length).toBe(1); // 只有一个document类型的记录
      expect(changes[0].entityType).toBe('document');
      expect(changes[0].id).toBe('change2');
    });
    
    it('应该限制返回的记录数量', async () => {
      // 创建模拟记录
      const filteredRecords = [
        { id: 'change1', entityId: 'page1', entityType: 'page', operation: 'create', timestamp: Date.now() - 3000, sequenceNumber: 1 },
        { id: 'change2', entityId: 'doc1', entityType: 'document', operation: 'create', timestamp: Date.now() - 2000, sequenceNumber: 2 },
        { id: 'change3', entityId: 'msg1', entityType: 'message', operation: 'create', timestamp: Date.now() - 1000, sequenceNumber: 3 }
      ];
      
      // 模拟获取变更记录
      (global.chrome.storage.local.get as jest.Mock).mockImplementationOnce((key, callback) => {
        expect(key).toBe('dataProviderChangeRecords');
        callback({ dataProviderChangeRecords: filteredRecords });
      });
      
      const changes = await getChangesSince(0, undefined, 1);
      
      // 验证返回的记录数量
      expect(changes.length).toBe(1); // 限制为1条记录
    });
    
    it('应该按时间戳排序返回的记录', async () => {
      // 创建模拟记录，故意打乱顺序
      const filteredRecords = [
        { id: 'change3', entityId: 'msg1', entityType: 'message', operation: 'create', timestamp: Date.now() - 1000, sequenceNumber: 3 },
        { id: 'change1', entityId: 'page1', entityType: 'page', operation: 'create', timestamp: Date.now() - 3000, sequenceNumber: 1 },
        { id: 'change2', entityId: 'doc1', entityType: 'document', operation: 'create', timestamp: Date.now() - 2000, sequenceNumber: 2 }
      ];
      
      // 模拟获取变更记录
      (global.chrome.storage.local.get as jest.Mock).mockImplementationOnce((key, callback) => {
        expect(key).toBe('dataProviderChangeRecords');
        callback({ dataProviderChangeRecords: filteredRecords });
      });
      
      const changes = await getChangesSince(0);
      
      // 验证记录排序
      expect(changes.length).toBe(3);
      for (let i = 1; i < changes.length; i++) {
        expect(changes[i].timestamp).toBeGreaterThanOrEqual(changes[i-1].timestamp);
      }
      
      // 验证正确的排序顺序
      expect(changes[0].id).toBe('change1');
      expect(changes[1].id).toBe('change2');
      expect(changes[2].id).toBe('change3');
    });
  });

  describe('cleanupChangeRecords', () => {
    it('应该清理过期的变更记录', async () => {
      // 模拟当前时间
      const now = Date.now();
      const realDateNow = Date.now;
      Date.now = jest.fn().mockReturnValue(now);
      
      // 模拟过期记录
      const expiredRecords = [
        ...mockChangeRecords,
        {
          id: 'change_004',
          entityType: 'page',
          entityId: 'page_004',
          changeType: 'create',
          timestamp: now - (31 * 24 * 60 * 60 * 1000), // 31天前
          sequenceNumber: 4
        }
      ];
      
      // 模拟chrome.storage.local.get返回过期记录
      global.chrome.storage.local.get = jest.fn().mockImplementation((key, callback) => {
        if (key === 'dataProviderChangeRecords') {
          callback({ dataProviderChangeRecords: expiredRecords });
        } else {
          callback({});
        }
      });
      
      const cleanedCount = await cleanupChangeRecords();
      
      // 恢复Date.now
      Date.now = realDateNow;
      
      // 验证清理的记录数量
      expect(cleanedCount).toBe(1); // 只有一条过期记录
      
      // 验证chrome.storage.local.set被调用
      expect(global.chrome.storage.local.set).toHaveBeenCalled();
      
      // 获取调用参数
      const setCall = (global.chrome.storage.local.set as jest.Mock).mock.calls[0][0];
      const savedRecords = setCall.dataProviderChangeRecords;
      
      // 验证过期记录被移除
      expect(savedRecords.length).toBe(expiredRecords.length - 1);
    });
  });
});
