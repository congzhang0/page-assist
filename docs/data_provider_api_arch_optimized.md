# Page Assist 数据提供者API架构设计（优化版）

## 1. 概述

Page Assist 数据提供者API允许授权的webapp从浏览器扩展中拉取数据，采用"拉取"而非"推送"模式。基于IndexedDB的存储方式提供了充足的存储空间，使得这种架构能够提供更好的数据控制和隐私保护，同时简化了数据同步流程。

## 2. 架构

### 2.1 组件结构

数据提供者API由以下主要组件组成：

1. **API服务**：`src/services/data-provider/api-service.ts` - 处理来自webapp的请求
2. **身份验证**：`src/services/data-provider/auth-service.ts` - 实现身份验证和授权
3. **数据访问层**：`src/services/data-provider/data-access.ts` - 从IndexedDB中读取数据
4. **变更跟踪**：`src/services/data-provider/change-tracker.ts` - 跟踪数据变更，支持增量同步
5. **配置管理**：`src/config/data-provider-config.ts` - 管理API配置

### 2.2 数据流

1. Webapp通过扩展的消息传递机制发送请求
2. API服务验证请求的身份和权限
3. 数据访问层从IndexedDB中读取请求的数据
4. API服务将数据返回给webapp
5. 变更跟踪组件记录数据访问，支持增量同步

### 2.3 拉取模式优势

与推送模式相比，拉取模式具有以下优势：

1. **数据控制**：用户可以完全控制何时同步数据，避免不必要的数据传输
2. **减少依赖**：不需要维护外部代理服务器
3. **隐私保护**：数据只在用户主动请求时才会被传输
4. **带宽优化**：只传输需要的数据，减少带宽使用
5. **离线支持**：即使没有网络连接，本地数据仍然可用

## 3. 数据结构

### 3.1 API配置 (DataProviderConfig)

```typescript
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
  
  // 同步设置（新增）
  sync: {
    // 增量同步的默认时间窗口（毫秒）
    defaultTimeWindow: number;
    
    // 是否启用批量同步
    batchEnabled: boolean;
    
    // 批量大小上限
    batchSize: number;
  };
}
```

### 3.2 API请求 (ApiRequest)

```typescript
export interface ApiRequest {
  // 请求类型
  type: 'get' | 'list' | 'sync' | 'count' | 'changes';
  
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
  
  // 访问令牌
  accessToken: string;
}
```

### 3.3 API响应 (ApiResponse)

```typescript
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
    
    // 客户端信息（新增）
    clientId?: string;
    
    // 服务器时间（新增）
    serverTime?: number;
  };
}
```

### 3.4 变更记录 (ChangeRecord)

```typescript
export interface ChangeRecord {
  // 实体类型
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';
  
  // 实体ID
  entityId: string;
  
  // 变更类型
  changeType: 'create' | 'update' | 'delete';
  
  // 变更时间
  timestamp: number;
  
  // 变更详情
  details?: any;
  
  // 变更序列号（新增）
  sequenceNumber: number;
  
  // 冲突解决策略（新增）
  conflictResolution?: 'client-wins' | 'server-wins' | 'merge';
}
```

## 4. API端点

### 4.1 获取单个实体

**请求**:
```json
{
  "type": "get",
  "entityType": "page",
  "id": "page_xxxx-xxxx-xxx-xxxx",
  "accessToken": "your_access_token"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "id": "page_xxxx-xxxx-xxx-xxxx",
    "title": "页面标题",
    "url": "https://example.com",
    "content": "页面内容文本",
    "html": "页面HTML内容",
    "type": "html",
    "tags": ["标签1", "标签2"],
    "notes": "用户笔记",
    "summary": "页面摘要",
    "rating": 5,
    "createdAt": 1234567890,
    "updatedAt": 1234567890,
    "favicon": "data:image/png;base64,...",
    "screenshot": "data:image/png;base64,..."
  },
  "meta": {
    "serverTime": 1234567899
  }
}
```

### 4.2 获取实体列表

**请求**:
```json
{
  "type": "list",
  "entityType": "page",
  "query": {
    "filter": {
      "tags": ["标签1"]
    },
    "page": 1,
    "pageSize": 10,
    "sort": {
      "field": "updatedAt",
      "order": "desc"
    },
    "search": "搜索关键词",
    "fields": ["id", "title", "url", "tags", "updatedAt"]
  },
  "accessToken": "your_access_token"
}
```

**响应**:
```json
{
  "success": true,
  "data": [
    {
      "id": "page_xxxx-xxxx-xxx-xxxx",
      "title": "页面标题1",
      "url": "https://example1.com",
      "tags": ["标签1", "标签2"],
      "updatedAt": 1234567890
    },
    {
      "id": "page_yyyy-yyyy-yyy-yyyy",
      "title": "页面标题2",
      "url": "https://example2.com",
      "tags": ["标签1"],
      "updatedAt": 1234567891
    }
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "pageSize": 10,
    "pageCount": 5,
    "serverTime": 1234567899
  }
}
```

### 4.3 同步数据

**请求**:
```json
{
  "type": "sync",
  "entityType": "page",
  "sync": {
    "lastSyncTime": 1234567890,
    "fullSync": false,
    "maxRecords": 100
  },
  "accessToken": "your_access_token"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "changes": [
      {
        "id": "page_xxxx-xxxx-xxx-xxxx",
        "changeType": "update",
        "data": {
          "id": "page_xxxx-xxxx-xxx-xxxx",
          "title": "更新的页面标题",
          "url": "https://example.com",
          "tags": ["标签1", "新标签"],
          "updatedAt": 1234567895
        },
        "sequenceNumber": 123
      },
      {
        "id": "page_zzzz-zzzz-zzz-zzzz",
        "changeType": "delete",
        "sequenceNumber": 124
      },
      {
        "id": "page_aaaa-aaaa-aaa-aaaa",
        "changeType": "create",
        "data": {
          "id": "page_aaaa-aaaa-aaa-aaaa",
          "title": "新页面标题",
          "url": "https://example3.com",
          "content": "新页面内容",
          "html": "新页面HTML",
          "type": "html",
          "tags": ["标签3"],
          "createdAt": 1234567899,
          "updatedAt": 1234567899
        },
        "sequenceNumber": 125
      }
    ]
  },
  "meta": {
    "syncTime": 1234567899,
    "hasMore": false,
    "serverTime": 1234567899
  }
}
```

### 4.4 获取计数

**请求**:
```json
{
  "type": "count",
  "entityType": "page",
  "query": {
    "filter": {
      "tags": ["标签1"]
    }
  },
  "accessToken": "your_access_token"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "count": 42
  },
  "meta": {
    "serverTime": 1234567899
  }
}
```

### 4.5 获取变更记录（新增）

**请求**:
```json
{
  "type": "changes",
  "entityType": "page",
  "sync": {
    "lastSyncTime": 1234567890,
    "maxRecords": 50
  },
  "accessToken": "your_access_token"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "changes": [
      {
        "entityType": "page",
        "entityId": "page_xxxx-xxxx-xxx-xxxx",
        "changeType": "update",
        "timestamp": 1234567895,
        "sequenceNumber": 123
      },
      {
        "entityType": "page",
        "entityId": "page_zzzz-zzzz-zzz-zzzz",
        "changeType": "delete",
        "timestamp": 1234567896,
        "sequenceNumber": 124
      },
      {
        "entityType": "page",
        "entityId": "page_aaaa-aaaa-aaa-aaaa",
        "changeType": "create",
        "timestamp": 1234567899,
        "sequenceNumber": 125
      }
    ]
  },
  "meta": {
    "syncTime": 1234567899,
    "hasMore": false,
    "serverTime": 1234567899
  }
}
```

## 5. 安全性考虑

### 5.1 身份验证

数据提供者API使用简单的基于令牌的身份验证机制。每个请求只需包含有效的访问令牌即可。访问令牌可以在扩展的设置页面生成和管理。

作为POC阶段，我们简化了认证流程，只验证token的存在和有效性，不进行复杂的授权检查。

### 5.3 数据过滤

API支持数据过滤，可以限制某些敏感字段的访问。例如，可以配置API只返回页面的元数据，而不返回完整内容。

### 5.4 速率限制

为防止滥用，API实现了速率限制，限制每分钟和每天的请求数量。

### 5.5 CORS策略（新增）

为了支持webapp访问，API需要实现适当的CORS（跨源资源共享）策略，只允许授权的来源访问API。

## 6. 实现注意事项

### 6.1 消息传递

API使用Chrome扩展的消息传递机制与webapp通信：

```typescript
// 在扩展中监听消息
chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    // 处理请求
    handleApiRequest(request, sender.id)
      .then(response => sendResponse(response))
      .catch(error => sendResponse({
        success: false,
        error: {
          code: 'internal_error',
          message: error.message
        }
      }));
    
    // 返回true表示将异步发送响应
    return true;
  }
);

// 在webapp中发送消息
chrome.runtime.sendMessage(
  'extension_id',
  apiRequest,
  response => {
    // 处理响应
  }
);
```

### 6.2 数据访问

数据访问层负责从IndexedDB中读取数据，并根据请求参数进行过滤、排序和分页：

```typescript
async function getPageById(id: string): Promise<SavedPage | null> {
  const db = new SavedPagesDB();
  return db.getPageById(id);
}

async function listPages(query: QueryParams): Promise<{
  pages: SavedPage[];
  total: number;
}> {
  const db = new SavedPagesDB();
  const pages = await db.getAllPages(query);
  const total = await db.getPageCount(query.filter);
  return { pages, total };
}
```

### 6.3 变更跟踪

变更跟踪组件负责记录数据变更，支持增量同步：

```typescript
function trackChange(entityType: string, entityId: string, changeType: string, details?: any): void {
  const changeRecord: ChangeRecord = {
    entityType,
    entityId,
    changeType,
    timestamp: Date.now(),
    sequenceNumber: getNextSequenceNumber(),
    details
  };
  
  // 保存变更记录
  saveChangeRecord(changeRecord);
}

async function getChangesSince(entityType: string, timestamp: number, maxRecords: number = 100): Promise<ChangeRecord[]> {
  // 获取指定时间戳之后的变更记录
  return loadChangeRecords(entityType, timestamp, maxRecords);
}
```

### 6.4 客户端标识（新增）

为了支持多客户端同步，API需要实现客户端标识机制：

```typescript
function generateClientId(): string {
  return 'client_' + Math.random().toString(36).substring(2, 15);
}

function getOrCreateClientId(): string {
  let clientId = localStorage.getItem('page_assist_client_id');
  if (!clientId) {
    clientId = generateClientId();
    localStorage.setItem('page_assist_client_id', clientId);
  }
  return clientId;
}
```

### 6.5 冲突解决（新增）

当多个客户端同时修改同一数据时，可能会发生冲突。API需要实现冲突解决策略：

```typescript
function resolveConflict(serverRecord: any, clientRecord: any, strategy: string): any {
  switch (strategy) {
    case 'client-wins':
      return clientRecord;
    case 'server-wins':
      return serverRecord;
    case 'merge':
      // 合并两个记录的字段
      return { ...serverRecord, ...clientRecord };
    default:
      return serverRecord;
  }
}
```

## 7. 与现有同步功能的集成

### 7.1 数据库钩子集成

为了与现有的数据库操作集成，需要在数据库操作中添加变更跟踪：

```typescript
// 在SavedPagesDB类中
async addPage(page: SavedPage): Promise<string> {
  const id = await this.db.pages.add(page);
  
  // 跟踪变更
  trackChange('page', id, 'create', page);
  
  return id;
}

async updatePage(id: string, updates: Partial<SavedPage>): Promise<void> {
  await this.db.pages.update(id, updates);
  
  // 跟踪变更
  trackChange('page', id, 'update', updates);
}

async deletePage(id: string): Promise<void> {
  await this.db.pages.delete(id);
  
  // 跟踪变更
  trackChange('page', id, 'delete');
}
```

### 7.2 与现有同步功能的比较

与现有的推送式同步相比，拉取式API有以下区别：

1. **控制权**：拉取式API将控制权交给客户端，客户端决定何时同步数据
2. **服务器需求**：拉取式API不需要维护代理服务器，简化了部署
3. **实时性**：拉取式API可能不如推送式同步实时，但可以通过定期轮询来弥补
4. **带宽使用**：拉取式API可能会导致更多的请求，但每个请求可以更精确地获取所需数据

## 8. 结论

Page Assist 数据提供者API提供了一种灵活、安全的方式，允许授权的webapp从浏览器扩展中拉取数据。这种架构更适合当前使用IndexedDB的存储方式，提供了更好的数据控制和隐私保护。通过实现这个API，用户可以在保持数据隐私的同时，实现跨设备数据同步和集成，而无需依赖外部代理服务器。

作为POC阶段，我们简化了认证机制，只需验证token有效性，这足以满足当前需求，同时也便于快速实现和测试。后续可以根据需要逐步完善和增强功能。

## 7. 实施计划

### 7.1 分阶段实施

#### 第一阶段：实现基本的数据拉取API
- 实现基本的API服务组件
- 实现简单的token认证机制
- 实现基本的数据访问功能（get、list、count）
- 创建基本的API文档和示例

#### 第二阶段：实现变更跟踪和增量同步
- 实现变更跟踪组件
- 实现增量同步功能
- 实现sync和changes API端点
- 更新API文档和示例

#### 第三阶段：实现多客户端同步和冲突解决
- 实现客户端标识机制
- 实现冲突检测和解决策略
- 完善多客户端同步功能
- 完善API文档和示例

### 7.2 测试策略

#### 单元测试
- 测试各个API端点的功能
- 测试认证机制
- 测试数据访问功能
- 测试变更跟踪功能

#### 集成测试
- 测试与IndexedDB的集成
- 测试与Chrome扩展API的集成
- 测试与webapp的集成

#### 性能测试
- 测试大数据量下的同步性能
- 测试并发请求处理能力
- 测试长时间运行的稳定性

### 7.3 文档和示例

#### API文档
- 提供详细的API端点说明
- 提供请求和响应格式说明
- 提供错误处理说明

#### 示例代码
- 提供基本的API调用示例
- 提供同步功能示例
- 提供多客户端同步示例
