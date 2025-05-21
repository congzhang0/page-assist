# Page Assist 数据提供者API架构设计

## 1. 概述

Page Assist 数据提供者API允许授权的webapp从浏览器扩展中拉取数据，而不是将数据推送到远端代理。这种架构更适合当前使用IndexedDB的存储方式，提供了更好的数据控制和隐私保护。

## 2. 架构

### 2.1 组件结构

数据提供者API由以下主要组件组成：

1. **API服务**：`src/services/data-provider/api-service.ts` - 处理来自webapp的请求
2. **身份验证**：`src/services/data-provider/auth-service.ts` - 实现身份验证和授权
3. **数据访问层**：`src/services/data-provider/data-access.ts` - 从IndexedDB中读取数据
4. **变更跟踪**：`src/services/data-provider/change-tracker.ts` - 跟踪数据变更
5. **配置管理**：`src/config/data-provider-config.ts` - 管理API配置

### 2.2 数据流

1. Webapp通过扩展的消息传递机制发送请求
2. API服务验证请求的身份和权限
3. 数据访问层从IndexedDB中读取请求的数据
4. API服务将数据返回给webapp
5. 变更跟踪组件记录数据访问，支持增量同步

## 3. 数据结构

### 3.1 API配置 (DataProviderConfig)

```typescript
export interface DataProviderConfig {
  // 是否启用API
  enabled: boolean;
  
  // 授权的应用ID列表
  authorizedApps: string[];
  
  // 访问令牌（用于身份验证）
  accessToken: string;
  
  // 数据过滤设置
  filters: {
    // 允许访问的实体类型
    allowedEntityTypes: ('document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page')[];
    
    // 是否允许访问完整内容
    allowFullContent: boolean;
  };
  
  // 速率限制设置
  rateLimit: {
    // 每分钟最大请求数
    requestsPerMinute: number;
    
    // 每天最大请求数
    requestsPerDay: number;
  };
  
  // 日志设置
  logging: {
    // 是否启用访问日志
    enabled: boolean;
    
    // 日志保留天数
    retentionDays: number;
  };
}
```

### 3.2 API请求 (ApiRequest)

```typescript
export interface ApiRequest {
  // 请求类型
  type: 'get' | 'list' | 'sync' | 'count';
  
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
  
  // 同步参数（用于sync请求）
  sync?: {
    // 上次同步时间
    lastSyncTime?: number;
    
    // 是否全量同步
    fullSync?: boolean;
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
    "pageCount": 5
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
    "fullSync": false
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
        }
      },
      {
        "id": "page_zzzz-zzzz-zzz-zzzz",
        "changeType": "delete"
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
        }
      }
    ]
  },
  "meta": {
    "syncTime": 1234567899,
    "hasMore": false
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
  }
}
```

## 5. 安全性考虑

### 5.1 身份验证

数据提供者API使用基于令牌的身份验证机制。每个请求都必须包含有效的访问令牌。访问令牌可以在扩展的设置页面生成和管理。

### 5.2 授权

只有在配置中列出的授权应用才能访问API。授权应用通过其Chrome扩展ID或网站来源进行标识。

### 5.3 数据过滤

API支持数据过滤，可以限制某些敏感字段的访问。例如，可以配置API只返回页面的元数据，而不返回完整内容。

### 5.4 速率限制

为防止滥用，API实现了速率限制，限制每分钟和每天的请求数量。

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
    details
  };
  
  // 保存变更记录
  saveChangeRecord(changeRecord);
}

async function getChangesSince(entityType: string, timestamp: number): Promise<ChangeRecord[]> {
  // 获取指定时间戳之后的变更记录
  return loadChangeRecords(entityType, timestamp);
}
```

## 7. 结论

Page Assist 数据提供者API提供了一种灵活、安全的方式，允许授权的webapp从浏览器扩展中拉取数据。这种架构更适合当前使用IndexedDB的存储方式，提供了更好的数据控制和隐私保护。通过实现这个API，用户可以在保持数据隐私的同时，实现跨设备数据同步和集成。
