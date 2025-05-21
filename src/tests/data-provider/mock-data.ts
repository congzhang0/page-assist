/**
 * 数据提供者API测试的模拟数据
 */

// 模拟保存的页面数据
export const mockPages = [
  {
    id: 'page_001',
    title: '测试页面1',
    url: 'https://example.com/page1',
    content: '这是测试页面1的内容',
    html: '<html><body>这是测试页面1的内容</body></html>',
    type: 'html',
    tags: ['测试', '示例'],
    notes: '测试页面1的笔记',
    summary: '测试页面1的摘要',
    rating: 5,
    createdAt: 1621500000000,
    updatedAt: 1621500000000,
    favicon: 'data:image/png;base64,test1',
    screenshot: 'data:image/png;base64,test1'
  },
  {
    id: 'page_002',
    title: '测试页面2',
    url: 'https://example.com/page2',
    content: '这是测试页面2的内容',
    html: '<html><body>这是测试页面2的内容</body></html>',
    type: 'html',
    tags: ['测试', '文档'],
    notes: '测试页面2的笔记',
    summary: '测试页面2的摘要',
    rating: 4,
    createdAt: 1621600000000,
    updatedAt: 1621600000000,
    favicon: 'data:image/png;base64,test2',
    screenshot: 'data:image/png;base64,test2'
  },
  {
    id: 'page_003',
    title: '测试页面3',
    url: 'https://example.com/page3',
    content: '这是测试页面3的内容',
    html: '<html><body>这是测试页面3的内容</body></html>',
    type: 'html',
    tags: ['测试', '教程'],
    notes: '测试页面3的笔记',
    summary: '测试页面3的摘要',
    rating: 3,
    createdAt: 1621700000000,
    updatedAt: 1621700000000,
    favicon: 'data:image/png;base64,test3',
    screenshot: 'data:image/png;base64,test3'
  }
];

// 模拟文档数据
export const mockDocuments = [
  {
    id: 'doc_001',
    db_type: 'document',
    title: '测试文档1',
    status: '已完成',
    embedding_model: 'test-embedding',
    source: [
      {
        source_id: 'src_001',
        type: 'text',
        filename: 'test1.txt',
        content: '测试文档1的内容'
      }
    ],
    document: {},
    createdAt: 1621500000000,
    systemPrompt: '系统提示1',
    followupPrompt: '后续提示1'
  },
  {
    id: 'doc_002',
    db_type: 'document',
    title: '测试文档2',
    status: '处理中',
    embedding_model: 'test-embedding',
    source: [
      {
        source_id: 'src_002',
        type: 'text',
        filename: 'test2.txt',
        content: '测试文档2的内容'
      }
    ],
    document: {},
    createdAt: 1621600000000,
    systemPrompt: '系统提示2',
    followupPrompt: '后续提示2'
  }
];

// 模拟消息数据
export const mockMessages = [
  {
    id: 'msg_001',
    history_id: 'hist_001',
    name: '用户',
    role: 'user',
    content: '你好，这是测试消息1',
    images: [],
    sources: [],
    createdAt: 1621500000000
  },
  {
    id: 'msg_002',
    history_id: 'hist_001',
    name: 'AI',
    role: 'assistant',
    content: '你好，我是AI助手',
    images: [],
    sources: [],
    createdAt: 1621500010000
  }
];

// 模拟变更记录
export const mockChangeRecords = [
  {
    id: 'change_001',
    entityType: 'page',
    entityId: 'page_001',
    changeType: 'create',
    timestamp: 1621500000000,
    sequenceNumber: 1
  },
  {
    id: 'change_002',
    entityType: 'page',
    entityId: 'page_002',
    changeType: 'create',
    timestamp: 1621600000000,
    sequenceNumber: 2
  },
  {
    id: 'change_003',
    entityType: 'page',
    entityId: 'page_001',
    changeType: 'update',
    timestamp: 1621700000000,
    sequenceNumber: 3,
    details: { title: '更新的测试页面1' }
  }
];

// 模拟API配置
export const mockApiConfig = {
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

// 模拟Chrome存储
export const mockChromeStorage = {
  local: {
    get: (key: string | string[] | null, callback: (result: any) => void) => {
      const data: any = {
        dataProviderConfig: mockApiConfig,
        dataProviderChangeRecords: mockChangeRecords,
        dataProviderSequenceNumber: 3
      };
      
      if (typeof key === 'string') {
        callback({ [key]: data[key] });
      } else if (Array.isArray(key)) {
        const result: any = {};
        key.forEach(k => {
          result[k] = data[k];
        });
        callback(result);
      } else {
        callback(data);
      }
    },
    set: (items: any, callback?: () => void) => {
      if (callback) {
        callback();
      }
    }
  }
};

// 模拟Chrome运行时
export const mockChromeRuntime = {
  lastError: null
};

// 模拟数据库
export class MockSavedPagesDB {
  async getPageById(id: string) {
    return mockPages.find(page => page.id === id) || null;
  }
  
  async getAllPages(query: any = {}) {
    let pages = [...mockPages];
    
    // 应用过滤
    if (query.filter) {
      if (query.filter.tags) {
        pages = pages.filter(page => 
          query.filter.tags.some((tag: string) => page.tags.includes(tag))
        );
      }
    }
    
    // 应用排序
    if (query.sort) {
      pages.sort((a, b) => {
        const field = query.sort.field || 'updatedAt';
        const order = query.sort.order || 'desc';
        
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else {
          return a[field] < b[field] ? 1 : -1;
        }
      });
    }
    
    // 应用分页
    const page = query.page || 1;
    const pageSize = query.pageSize || 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return pages.slice(start, end);
  }
  
  async getPageCount(filter: any = {}) {
    let count = mockPages.length;
    
    // 应用过滤
    if (filter && filter.tags) {
      count = mockPages.filter(page => 
        filter.tags.some((tag: string) => page.tags.includes(tag))
      ).length;
    }
    
    return count;
  }
  
  async getAllTags() {
    const tagsSet = new Set<string>();
    mockPages.forEach(page => {
      page.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }
}

// 模拟文档数据库
export class MockDocumentsDB {
  async getDocumentById(id: string) {
    return mockDocuments.find(doc => doc.id === id) || null;
  }
  
  async getAllDocuments(query: any = {}) {
    let docs = [...mockDocuments];
    
    // 应用排序
    if (query.sort) {
      docs.sort((a, b) => {
        const field = query.sort.field || 'createdAt';
        const order = query.sort.order || 'desc';
        
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else {
          return a[field] < b[field] ? 1 : -1;
        }
      });
    }
    
    // 应用分页
    const page = query.page || 1;
    const pageSize = query.pageSize || 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return docs.slice(start, end);
  }
}

// 模拟消息数据库
export class MockMessagesDB {
  async getMessageById(id: string) {
    return mockMessages.find(msg => msg.id === id) || null;
  }
  
  async getAllMessages(query: any = {}) {
    let messages = [...mockMessages];
    
    // 应用排序
    if (query.sort) {
      messages.sort((a, b) => {
        const field = query.sort.field || 'createdAt';
        const order = query.sort.order || 'desc';
        
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else {
          return a[field] < b[field] ? 1 : -1;
        }
      });
    }
    
    // 应用分页
    const page = query.page || 1;
    const pageSize = query.pageSize || 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return messages.slice(start, end);
  }
}
