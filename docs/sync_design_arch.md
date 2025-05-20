# Page Assist 同步功能设计文档

## 1. 概述

Page Assist 同步功能允许用户将保存的页面和其他数据同步到自定义的代理端点（Proxy Endpoint）。该功能通过一系列组件实现，包括配置管理、同步服务、同步队列、同步工作器、事件管理和数据库钩子。

## 2. 架构

### 2.1 组件结构

同步功能由以下主要组件组成：

1. **配置管理**：`src/config/sync-config.ts` - 定义同步配置结构和默认值
2. **同步服务**：`src/services/sync/sync-service.ts` - 提供同步功能的主要接口
3. **同步队列**：`src/services/sync/sync-queue.ts` - 管理待同步的数据项
4. **同步工作器**：`src/services/sync/sync-worker.ts` - 执行实际的同步操作
5. **事件管理**：`src/services/sync/sync-events.ts` - 处理同步相关的事件
6. **数据库钩子**：`src/db/sync-hooks.ts` - 将数据库操作与同步功能连接

### 2.2 数据流

1. 当数据库中的数据发生变化时，通过 `syncHooks` 调用 `syncService.trackChange()`
2. 变更被添加到同步队列中
3. `syncWorker` 从队列中获取数据并发送到配置的代理端点
4. 如果同步失败，会根据配置的重试策略进行重试
5. 同步过程中的状态变化通过事件系统通知给UI组件

## 3. 数据结构

### 3.1 同步配置 (SyncConfig)

```typescript
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
```

### 3.2 同步项目 (SyncItem)

```typescript
export interface SyncItem {
  id: string;
  operation: 'create' | 'update' | 'delete';
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';
  data: any;
  createdAt: number;
  retryCount: number;
  priority: number; // 优先级：1(高) - 10(低)
}
```

### 3.3 数据变更事件 (DataChangeEvent)

```typescript
export interface DataChangeEvent {
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';
  operation: 'create' | 'update' | 'delete';
  data: any;
}
```

### 3.4 保存的页面 (SavedPage)

```typescript
export interface SavedPage {
  id: string;
  title: string;
  url: string;
  content: string;
  html: string;
  type: string;
  tags: string[];
  notes: string;
  summary?: string;       // 页面内容摘要
  rating?: number;        // 内容质量评分（1-5星）
  createdAt: number;
  updatedAt: number;
  favicon?: string;
  screenshot?: string;
}
```

## 4. 代理端点 (Proxy Endpoint)

### 4.1 请求格式

代理端点是一个HTTP服务，需要接受POST请求，请求体格式如下：

```json
{
  "operation": "create|update|delete",
  "entityType": "document|model|knowledge|vector|message|page",
  "data": { /* 实体数据 */ },
  "timestamp": 1234567890,
  "syncId": "unique_sync_item_id"
}
```

### 4.2 数据字段说明

根据不同的 `entityType`，`data` 字段包含不同的数据结构：

#### 4.2.1 页面数据 (entityType: "page")

当 `entityType` 为 "page" 时，`data` 字段包含 `SavedPage` 对象，具体字段如下：

```json
{
  "id": "page_xxxx-xxxx-xxx-xxxx",
  "title": "页面标题",
  "url": "https://example.com",
  "content": "页面内容文本",
  "html": "页面HTML内容",
  "type": "html|pdf|other",
  "tags": ["标签1", "标签2"],
  "notes": "用户笔记",
  "summary": "页面摘要",
  "rating": 5,
  "createdAt": 1234567890,
  "updatedAt": 1234567890,
  "favicon": "data:image/png;base64,...",
  "screenshot": "data:image/png;base64,..."
}
```

#### 4.2.2 文档数据 (entityType: "document")

当 `entityType` 为 "document" 时，`data` 字段包含 `Document` 对象：

```json
{
  "id": "pa_document_xxxx-xxxx-xxx-xxxx",
  "db_type": "document",
  "title": "文档标题",
  "status": "文档状态",
  "embedding_model": "嵌入模型名称",
  "source": [
    {
      "source_id": "源ID",
      "type": "源类型",
      "filename": "文件名",
      "content": "内容"
    }
  ],
  "document": {},
  "createdAt": 1234567890,
  "systemPrompt": "系统提示",
  "followupPrompt": "后续提示"
}
```

#### 4.2.3 消息数据 (entityType: "message")

当 `entityType` 为 "message" 时，`data` 字段包含 `Message` 对象：

```json
{
  "id": "消息ID",
  "history_id": "历史ID",
  "name": "名称",
  "role": "角色",
  "content": "内容",
  "images": ["图片URL"],
  "sources": ["源URL"],
  "search": {
    "search_engine": "搜索引擎",
    "search_url": "搜索URL",
    "search_query": "搜索查询",
    "search_results": [
      {
        "title": "结果标题",
        "link": "结果链接"
      }
    ]
  },
  "createdAt": 1234567890,
  "reasoning_time_taken": 123,
  "messageType": "消息类型",
  "generationInfo": {},
  "modelName": "模型名称",
  "modelImage": "模型图片URL"
}
```

### 4.3 响应要求

代理端点应该：
- 返回HTTP 200状态码表示成功
- 任何非200状态码都会被视为失败，触发重试机制
- 处理重复请求（幂等性）

## 5. 实现注意事项

### 5.1 当前限制

目前，`SavedPage` 数据结构尚未与同步钩子集成。在 `src/db/sync-hooks.ts` 中，已经为 `document`、`model`、`knowledge`、`vector` 和 `message` 实体类型实现了同步钩子，但尚未为 `SavedPage` 实现。

### 5.2 需要实现的功能

为了完整支持页面数据的同步，需要在 `src/db/sync-hooks.ts` 中添加 `page` 钩子，并在 `src/db/saved-pages.ts` 中的相关方法中调用这些钩子。

```typescript
// 在 src/db/sync-hooks.ts 中添加
page: {
  afterCreate: (page: SavedPage) => {
    syncService.trackChange({
      entityType: 'page',
      operation: 'create',
      data: page,
    });
  },
  
  afterUpdate: (page: SavedPage) => {
    syncService.trackChange({
      entityType: 'page',
      operation: 'update',
      data: page,
    });
  },
  
  afterDelete: (id: string) => {
    syncService.trackChange({
      entityType: 'page',
      operation: 'delete',
      data: { id },
    });
  },
},
```

## 6. 代理端点实现指南

实现代理端点时，需要考虑以下几点：

1. **处理不同的实体类型**：根据 `entityType` 字段，处理不同类型的数据
2. **处理不同的操作**：根据 `operation` 字段，执行创建、更新或删除操作
3. **幂等性**：使用 `syncId` 字段确保重复请求不会导致数据重复
4. **错误处理**：返回适当的HTTP状态码和错误信息
5. **数据验证**：验证请求数据的完整性和有效性
6. **安全性**：实现适当的身份验证和授权机制

## 7. 结论

Page Assist 同步功能提供了一种灵活的方式，允许用户将保存的页面和其他数据同步到自定义的代理端点。通过实现适当的代理端点，用户可以将数据集成到其他系统中，或者实现跨设备同步。
