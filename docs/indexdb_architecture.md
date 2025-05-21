# Page Assist IndexedDB 架构设计

## 1. 概述

Page Assist 使用 IndexedDB 作为主要的本地存储解决方案。IndexedDB 是一种浏览器内置的低级别 API，适用于客户端存储大量结构化数据。相比于其他前端存储方案（如 localStorage），IndexedDB 提供了更强大的功能：

- 支持存储大量数据（通常有几百MB的限制）
- 提供类似于传统数据库的查询和事务能力
- 支持复杂的索引和索引查询
- 拥有更好的异步操作和性能表现

本文档详细介绍 Page Assist 扩展中 IndexedDB 的架构设计、数据模型以及与数据提供者 API 的集成。

## 2. 数据库架构

### 2.1 数据库概要

Page Assist 当前使用名为 `page-assist-saved-pages` 的主数据库，版本为 1。该数据库主要存储用户保存的网页数据，并通过数据提供者 API 提供给授权的外部应用。

```typescript
// 数据库名称和版本
const DB_NAME = 'page-assist-saved-pages';
const DB_VERSION = 1;
```

### 2.2 对象存储（Object Stores）

对象存储相当于传统数据库中的表，用于保存特定类型的数据。当前主要对象存储包括：

| 对象存储名称 | 主键 | 描述 |
|------------|-----|------|
| `pages` | `id` | 存储所有保存的网页数据 |

### 2.3 索引

为了提高查询性能，对象存储上建立了以下索引：

| 对象存储 | 索引名称 | 索引字段 | 唯一性 | 多入口 | 描述 |
|---------|---------|---------|-------|-------|------|
| `pages` | `url` | `url` | 非唯一 | 否 | 通过URL查询页面 |
| `pages` | `createdAt` | `createdAt` | 非唯一 | 否 | 通过创建时间查询和排序 |
| `pages` | `updatedAt` | `updatedAt` | 非唯一 | 否 | 通过更新时间查询和排序 |
| `pages` | `tags` | `tags` | 非唯一 | 是 | 通过标签查询（支持多标签） |

```typescript
// 创建索引
store.createIndex('url', 'url', { unique: false });
store.createIndex('createdAt', 'createdAt', { unique: false });
store.createIndex('updatedAt', 'updatedAt', { unique: false });
store.createIndex('tags', 'tags', { unique: false, multiEntry: true });
```

## 3. 数据模型

### 3.1 保存的页面（SavedPage）

`SavedPage` 是存储在 `pages` 对象存储中的主要数据结构，表示用户保存的网页。

```typescript
export interface SavedPage {
  id: string;            // 唯一标识符
  title: string;         // 页面标题
  url: string;           // 页面URL
  content: string;       // 页面内容（通常为Markdown格式）
  html: string;          // 原始HTML内容
  type: string;          // 内容类型（如'html', 'markdown'等）
  tags: string[];        // 用户添加的标签列表
  notes: string;         // 用户笔记
  summary?: string;      // 页面内容摘要
  rating?: number;       // 内容质量评分（1-5星）
  createdAt: number;     // 创建时间戳
  updatedAt: number;     // 更新时间戳
  favicon?: string;      // 网站图标（通常为Data URL）
  screenshot?: string;   // 页面截图（通常为Data URL）
}
```

将来可能会扩展其他数据模型，如文档（Documents）、模型（Models）、知识库（Knowledge）等。目前API中预留了这些类型的处理程序，但实际数据存储尚未实现。

### 3.2 数据提供者 API 数据类型

数据提供者 API 定义了一组标准数据类型，用于表示不同实体：

```typescript
// 基础实体接口
export interface BaseEntity {
  id: string;
  createdAt: number;
  updatedAt: number;
  [key: string]: any;
}

// 页面实体
export interface Page extends BaseEntity {
  title?: string;
  url?: string;
  content?: string;    // 完整文本内容
  html?: string;       // 原始HTML内容
  textContent?: string; // 从HTML提取的文本内容
  summary?: string;
  tags?: string[];
  screenshot?: string; // URL或base64数据URI
  favicon?: string;    // URL或base64数据URI
  metadata?: Record<string, any>; // 其他提取的元数据
  lastAccessed?: number;
  readStatus?: 'read' | 'unread';
  archived?: boolean;
}

// 文档实体
export interface Document extends BaseEntity {
  title?: string;
  filePath?: string;
  content?: string;
  tags?: string[];
  source?: string;
  metadata?: Record<string, any>;
}

// 模型实体
export interface Model extends BaseEntity {
  name: string;
  provider: string;
  apiKeyStatus?: 'valid' | 'invalid' | 'unknown';
  config?: Record<string, any>;
  type?: 'chat' | 'completion' | 'embedding';
  isDefault?: boolean;
}

// 知识库实体
export interface Knowledge extends BaseEntity {
  name: string;
  description?: string;
  sourceType: 'file' | 'url' | 'text';
  sourcePath?: string;
  status?: 'pending' | 'processing' | 'completed' | 'failed';
  vectorCount?: number;
}

// 向量实体
export interface Vector extends BaseEntity {
  knowledgeId: string;
  contentChunk: string;
  embedding: number[]; // 实际向量嵌入
  metadata?: Record<string, any>;
}

// 消息实体
export interface Message extends BaseEntity {
  chatId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  modelUsed?: string;
  timestamp: number; // 覆盖BaseEntity.createdAt
  feedback?: 'good' | 'bad' | null;
  metadata?: Record<string, any>;
}
```

## 4. 数据访问模式

### 4.1 数据库连接

Page Assist 使用一个抽象的方法来打开和管理数据库连接：

```typescript
/**
 * 打开数据库连接
 */
const openDatabase = (): Promise<IDBDatabase> => {
  logger.debug(`正在打开数据库: ${DB_NAME}, 版本: ${DB_VERSION}`);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    // 处理错误
    request.onerror = (event) => {
      // 错误处理逻辑
    };
    
    // 成功打开
    request.onsuccess = (event) => {
      resolve(request.result);
    };
    
    // 数据库升级
    request.onupgradeneeded = (event) => {
      // 创建对象存储和索引
    };
  });
};
```

### 4.2 数据操作模式

Page Assist 的数据操作遵循以下一般模式：

1. **打开数据库连接**
2. **创建事务**
3. **执行操作**
4. **处理结果**
5. **关闭连接**

以保存页面为例：

```typescript
async savePage(params: SavePageParams): Promise<SavedPage> {
  try {
    // 首先检查URL是否已存在
    const existingPage = await this.getPageByUrl(params.url);
    
    if (existingPage) {
      // 更新现有记录
      // ...
    }
    
    // 如果URL不存在，则添加新记录
    const db = await openDatabase();
    
    return new Promise((resolve, reject) => {
      // 创建事务
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      // 处理事务错误
      transaction.onerror = (event) => {
        // 错误处理
      };
      
      // 准备数据
      const now = Date.now();
      const pageId = generateID();
      const page: SavedPage = {
        // 页面属性
      };
      
      // 执行添加操作
      const request = store.add(page);
      
      // 处理添加成功
      request.onsuccess = () => {
        // 成功处理逻辑
      };
      
      // 处理添加失败
      request.onerror = () => {
        // 失败处理逻辑
      };
      
      // 事务完成后关闭数据库
      transaction.oncomplete = () => {
        db.close();
      };
    });
  } catch (error) {
    // 异常处理
  }
}
```

### 4.3 查询模式

Page Assist 支持多种查询模式：

1. **通过ID查询**：使用基本的get操作
2. **通过URL查询**：使用url索引
3. **按时间排序**：使用createdAt或updatedAt索引
4. **按标签筛选**：使用tags索引
5. **全文搜索**：目前是简单的字符串匹配

## 5. 与数据提供者 API 的集成

### 5.1 数据访问层

数据提供者 API 通过 `src/services/data-provider/data-access.ts` 作为专门的数据访问层，实现与 IndexedDB 的交互。这一层提供了以下功能：

1. **数据查询**：支持各种查询参数和过滤条件
2. **字段过滤**：可根据请求选择返回特定字段
3. **敏感内容过滤**：根据配置过滤敏感字段（如html, content等）
4. **结果格式化**：统一API响应格式

```typescript
/**
 * 获取页面列表
 */
export async function getPages(params?: QueryParams): Promise<DataAccessResult<Partial<SavedPage>[]>> {
  try {
    const db = new SavedPagesDB();
    const dbParams = convertPageQueryParams(params);
    
    // 获取页面列表
    const pages = await db.getAllPages(dbParams);
    
    // 过滤敏感内容和字段
    const filteredPages = await Promise.all(
      pages.map(async (page) => {
        const filteredPage = await filterSensitiveContent(page, 'page');
        return filterFields(filteredPage, params?.fields);
      })
    );
    
    return {
      data: filteredPages,
      meta: {
        total: allPages.length,
        page: params?.page || 1,
        pageSize: params?.pageSize || total,
        pageCount: Math.ceil(total / pageSize),
      },
    };
  } catch (error) {
    // 错误处理
  }
}
```

### 5.2 API 处理流程

1. 外部应用通过chrome.runtime.sendMessage发送请求
2. `handleDataProviderRequest`函数验证请求
3. 根据实体类型路由到相应的处理函数（如handlePageRequest）
4. 处理函数调用数据访问层获取数据
5. 处理函数对结果进行格式化和权限过滤
6. 返回响应给外部应用

## 6. 扩展和未来发展

虽然当前的实现主要处理保存的页面数据，但架构已经为其他实体类型（文档、模型、知识库等）预留了位置。未来的扩展将包括：

1. **实现其他实体类型的数据存储**：创建新的对象存储用于存储文档、模型、知识库等数据
2. **实现这些实体的数据访问函数**：完善data-access.ts中的相关函数
3. **扩展同步功能**：支持所有实体类型的增量同步
4. **增强查询能力**：实现更强大的全文搜索和复杂过滤

### 6.1 计划中的对象存储

```typescript
// 未来可能的对象存储
{
  'pages': { keyPath: 'id' },         // 已实现
  'documents': { keyPath: 'id' },     // 计划中
  'models': { keyPath: 'id' },        // 计划中
  'knowledge': { keyPath: 'id' },     // 计划中
  'vectors': { keyPath: 'id' },       // 计划中
  'messages': { keyPath: 'id' }       // 计划中
}
```

## 7. 最佳实践和注意事项

### 7.1 性能优化

1. **使用索引**：为常用查询创建适当的索引
2. **批量操作**：尽量在一个事务中批量处理多个操作
3. **限制查询大小**：分页加载大型结果集
4. **异步事务**：不要在事务中进行其他异步操作
5. **关闭连接**：操作完成后关闭数据库连接

### 7.2 错误处理

1. **事务错误**：处理事务和请求的错误事件
2. **版本管理**：妥善处理数据库版本升级和结构变更
3. **存储限制**：处理存储配额超出的情况
4. **浏览器兼容性**：考虑不同浏览器的实现差异

### 7.3 安全性和隐私

1. **敏感数据过滤**：通过API提供数据时过滤敏感内容
2. **访问控制**：验证请求的令牌和权限
3. **数据隔离**：保持不同实体类型的数据隔离

## 8. 附录：调试工具

Page Assist 提供了两个辅助脚本用于调试数据提供者 API：

1. **quick-fix.js**：提供快速修复和测试功能
2. **background-page-logger.js**：记录API请求和响应

这些工具可以帮助开发者诊断和解决与 IndexedDB 和数据提供者 API 相关的问题。

```javascript
// 使用quick-fix.js测试API
// 在扩展的背景页控制台中运行
testApi();

// 使用background-page-logger.js记录API请求
// 在扩展的背景页控制台中运行
chrome.runtime.sendMessage({
  type: 'list',
  entityType: 'page',
  accessToken: 'your_access_token'
});
``` 