# Page Assist 数据提供者API使用说明书

> 版本：1.0.0
> 更新日期：2025-05-21

## 1. 概述

Page Assist 数据提供者API允许授权的第三方Web应用（webapp）从浏览器扩展中拉取数据。与传统的"推送"模式不同，该API采用"拉取"模式，使第三方应用能够按需获取数据，同时保持用户对数据的完全控制。

### 1.1 拉取模式的优势

- **数据控制**：用户可以完全控制何时同步数据，避免不必要的数据传输
- **减少依赖**：不需要维护外部代理服务器
- **隐私保护**：数据只在用户主动请求时才会被传输
- **带宽优化**：只传输需要的数据，减少带宽使用
- **离线支持**：即使没有网络连接，本地数据仍然可用

### 1.2 支持的数据类型

Page Assist 数据提供者API支持以下类型的数据：

- **页面（page）**：保存的网页内容和元数据
- **文档（document）**：文档数据
- **模型（model）**：AI模型配置
- **知识库（knowledge）**：知识库数据
- **向量（vector）**：向量数据
- **消息（message）**：聊天消息数据

## 2. 开始使用

### 2.1 前提条件

在开始使用Page Assist数据提供者API之前，您需要：

1. 用户已安装Page Assist浏览器扩展
2. 用户已启用数据提供者API功能
3. 用户已获取并提供访问令牌给您的应用

### 2.2 启用API

用户需要在Page Assist扩展的设置页面中启用数据提供者API：

1. 打开Page Assist扩展
2. 进入"同步设置"页面
3. 启用"数据提供者API"选项
4. 配置允许访问的数据类型和权限
5. 获取访问令牌

### 2.3 获取访问令牌

访问令牌是使用API的凭证，用户需要从Page Assist扩展中获取：

1. 在"同步设置"页面，查看"访问令牌"字段
2. 点击复制按钮获取令牌
3. 将令牌提供给您的应用

**注意**：访问令牌应被视为敏感信息，应妥善保管并安全传输。

## 3. 身份验证

### 3.1 访问令牌机制

Page Assist数据提供者API使用简单的令牌机制进行身份验证：

- 每个API请求必须包含有效的访问令牌
- 令牌在扩展设置中生成，可以随时重新生成
- 重新生成令牌会使旧令牌失效

### 3.2 在请求中使用访问令牌

在每个API请求中，您需要在请求体中包含`accessToken`字段：

```json
{
  "type": "get",
  "entityType": "page",
  "id": "page_xxxx-xxxx-xxx-xxxx",
  "accessToken": "your_access_token"
}
```

## 4. API端点和请求格式

Page Assist数据提供者API使用Chrome扩展消息传递机制，而不是传统的HTTP请求。您需要使用Chrome扩展API的`chrome.runtime.sendMessage`方法发送请求。

### 4.1 基本请求结构

所有API请求都遵循以下基本结构：

```typescript
interface ApiRequest {
  // 请求类型
  type: 'get' | 'list' | 'sync' | 'count' | 'changes';
  
  // 实体类型
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';
  
  // 其他特定于请求类型的参数
  // ...
  
  // 访问令牌
  accessToken: string;
}
```

### 4.2 获取单个实体

获取单个实体的请求格式：

```json
{
  "type": "get",
  "entityType": "page",
  "id": "page_xxxx-xxxx-xxx-xxxx",
  "accessToken": "your_access_token"
}
```

响应格式：

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
    "createdAt": 1234567890,
    "updatedAt": 1234567899
  },
  "meta": {
    "serverTime": 1234567899
  }
}
```

### 4.3 列出多个实体

列出多个实体的请求格式：

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

响应格式：

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
      "updatedAt": 1234567880
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

### 4.4 同步数据

同步数据的请求格式：

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

响应格式：

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
        "id": "page_yyyy-yyyy-yyy-yyyy",
        "changeType": "create",
        "data": {
          "id": "page_yyyy-yyyy-yyy-yyyy",
          "title": "新页面标题",
          "url": "https://example2.com",
          "content": "新页面内容",
          "html": "新页面HTML",
          "type": "html",
          "tags": ["标签1"],
          "createdAt": 1234567892,
          "updatedAt": 1234567892
        }
      },
      {
        "id": "page_zzzz-zzzz-zzz-zzzz",
        "changeType": "delete",
        "data": {
          "id": "page_zzzz-zzzz-zzz-zzzz"
        }
      }
    ],
    "hasMore": false
  },
  "meta": {
    "syncTime": 1234567899,
    "serverTime": 1234567899
  }
}
```

### 4.5 获取计数

获取计数的请求格式：

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

响应格式：

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

### 4.6 获取变更记录

获取变更记录的请求格式：

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

响应格式：

```json
{
  "success": true,
  "data": {
    "changes": [
      {
        "id": "page_xxxx-xxxx-xxx-xxxx",
        "changeType": "update",
        "timestamp": 1234567895,
        "fields": ["title", "tags"]
      },
      {
        "id": "page_yyyy-yyyy-yyy-yyyy",
        "changeType": "create",
        "timestamp": 1234567892
      },
      {
        "id": "page_zzzz-zzzz-zzz-zzzz",
        "changeType": "delete",
        "timestamp": 1234567896
      }
    ],
    "hasMore": false
  },
  "meta": {
    "syncTime": 1234567899,
    "serverTime": 1234567899
  }
}
```

## 5. 错误处理

### 5.1 错误响应格式

当API请求失败时，响应将包含错误信息：

```json
{
  "success": false,
  "error": {
    "code": "error_code",
    "message": "错误描述信息"
  },
  "meta": {
    "serverTime": 1234567899
  }
}
```

### 5.2 常见错误代码

| 错误代码 | 描述 | 处理建议 |
|---------|------|--------|
| `auth_invalid_token` | 访问令牌无效 | 请用户提供新的访问令牌 |
| `auth_disabled` | 数据提供者API已禁用 | 请用户启用数据提供者API |
| `entity_not_found` | 请求的实体不存在 | 检查实体ID是否正确 |
| `entity_type_not_allowed` | 不允许访问该类型的实体 | 请用户在设置中允许访问该类型 |
| `invalid_request` | 请求格式无效 | 检查请求格式是否符合规范 |
| `rate_limit_exceeded` | 超出请求速率限制 | 减少请求频率，稍后重试 |
| `internal_error` | 内部错误 | 请报告此问题并稍后重试 |

### 5.3 错误处理最佳实践

1. **始终检查响应的`success`字段**，确定请求是否成功
2. **实现重试机制**，特别是对于`rate_limit_exceeded`等临时错误
3. **优雅降级**，当API不可用时提供备用功能
4. **向用户提供清晰的错误信息**，特别是需要用户操作的错误（如`auth_disabled`）
5. **记录错误**，以便后续分析和改进

## 6. 同步策略

### 6.1 增量同步

增量同步是获取自上次同步以来发生变化的数据的过程，这是最高效的同步方式：

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

**关键参数**：
- `lastSyncTime`：上次同步的时间戳（毫秒）
- `fullSync`：设为`false`表示增量同步
- `maxRecords`：最大返回记录数，用于分页

**实现步骤**：
1. 在本地存储上次同步时间
2. 发送同步请求，包含上次同步时间
3. 处理返回的变更记录
4. 更新本地数据
5. 更新本地存储的同步时间

### 6.2 全量同步

全量同步获取所有数据，适用于初始同步或需要完全重建本地数据的情况：

```json
{
  "type": "sync",
  "entityType": "page",
  "sync": {
    "fullSync": true,
    "maxRecords": 100
  },
  "accessToken": "your_access_token"
}
```

**关键参数**：
- `fullSync`：设为`true`表示全量同步
- `maxRecords`：最大返回记录数，用于分页

**实现步骤**：
1. 清空本地数据（可选）
2. 发送全量同步请求
3. 处理返回的数据
4. 如果`hasMore`为`true`，继续请求下一页
5. 更新本地存储的同步时间

### 6.3 冲突解决

当多个客户端同时修改同一数据时，可能会发生冲突。以下是处理冲突的策略：

1. **服务器优先**：总是使用服务器（扩展）中的数据
2. **客户端优先**：优先使用本地（webapp）的数据
3. **合并策略**：根据字段类型合并数据
   - 对于简单字段（如标题、URL），使用最新修改的版本
   - 对于数组字段（如标签），合并两个版本的数组
   - 对于复杂字段，可能需要特定的合并逻辑

**示例冲突解决代码**：

```javascript
function resolveConflict(serverData, clientData, strategy = 'server-wins') {
  switch (strategy) {
    case 'client-wins':
      return clientData;
    case 'server-wins':
      return serverData;
    case 'merge':
      const result = { ...serverData };
      
      // 合并标签数组
      if (serverData.tags && clientData.tags) {
        result.tags = [...new Set([...serverData.tags, ...clientData.tags])];
      }
      
      // 其他字段使用最新的版本
      if (clientData.updatedAt > serverData.updatedAt) {
        result.title = clientData.title;
        result.content = clientData.content;
        // 其他字段...
      }
      
      return result;
    default:
      return serverData;
  }
}
```

## 7. 示例代码

### 7.1 初始化和配置

```javascript
// 数据提供者API配置
const dataProviderConfig = {
  extensionId: 'page_assist_extension_id', // Page Assist扩展ID
  accessToken: 'your_access_token',        // 用户提供的访问令牌
  syncInterval: 60000,                     // 同步间隔（毫秒）
  retryAttempts: 3,                        // 重试次数
  retryDelay: 2000                         // 重试延迟（毫秒）
};

// 初始化数据提供者客户端
function initDataProvider(config) {
  // 存储配置
  localStorage.setItem('dataProviderConfig', JSON.stringify(config));
  
  // 初始化上次同步时间（如果不存在）
  if (!localStorage.getItem('lastSyncTime')) {
    localStorage.setItem('lastSyncTime', '0');
  }
  
  console.log('数据提供者API客户端已初始化');
}
```

### 7.2 发送API请求

```javascript
// 发送请求到Page Assist扩展
async function sendRequest(request) {
  const config = JSON.parse(localStorage.getItem('dataProviderConfig'));
  
  // 添加访问令牌到请求
  request.accessToken = config.accessToken;
  
  return new Promise((resolve, reject) => {
    try {
      chrome.runtime.sendMessage(
        config.extensionId,
        request,
        response => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
            return;
          }
          
          if (response && response.success === false) {
            reject(new Error(`API错误: ${response.error.code} - ${response.error.message}`));
            return;
          }
          
          resolve(response);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
```

### 7.3 获取单个页面

```javascript
// 获取单个页面
async function getPage(pageId) {
  try {
    const response = await sendRequest({
      type: 'get',
      entityType: 'page',
      id: pageId
    });
    
    console.log('获取到页面:', response.data);
    return response.data;
  } catch (error) {
    console.error('获取页面失败:', error);
    throw error;
  }
}

// 使用示例
getPage('page_xxxx-xxxx-xxx-xxxx')
  .then(page => {
    // 处理页面数据
    document.getElementById('pageTitle').textContent = page.title;
    document.getElementById('pageContent').innerHTML = page.html;
  })
  .catch(error => {
    // 处理错误
    if (error.message.includes('auth_invalid_token')) {
      alert('访问令牌无效，请重新获取');
    } else {
      alert('获取页面失败: ' + error.message);
    }
  });
```

### 7.4 列出页面

```javascript
// 列出页面
async function listPages(filter = {}, page = 1, pageSize = 10) {
  try {
    const response = await sendRequest({
      type: 'list',
      entityType: 'page',
      query: {
        filter,
        page,
        pageSize,
        sort: {
          field: 'updatedAt',
          order: 'desc'
        }
      }
    });
    
    console.log('获取到页面列表:', response.data);
    return {
      pages: response.data,
      meta: response.meta
    };
  } catch (error) {
    console.error('获取页面列表失败:', error);
    throw error;
  }
}

// 使用示例
listPages({ tags: ['重要'] })
  .then(result => {
    // 渲染页面列表
    const pageList = document.getElementById('pageList');
    pageList.innerHTML = '';
    
    result.pages.forEach(page => {
      const item = document.createElement('div');
      item.className = 'page-item';
      item.innerHTML = `
        <h3>${page.title}</h3>
        <p>URL: ${page.url}</p>
        <p>标签: ${page.tags.join(', ')}</p>
        <p>更新时间: ${new Date(page.updatedAt).toLocaleString()}</p>
      `;
      pageList.appendChild(item);
    });
    
    // 更新分页信息
    document.getElementById('pageInfo').textContent = 
      `第 ${result.meta.page} 页，共 ${result.meta.pageCount} 页，总计 ${result.meta.total} 条记录`;
  })
  .catch(error => {
    // 处理错误
    document.getElementById('pageList').innerHTML = 
      `<div class="error">加载失败: ${error.message}</div>`;
  });
```

### 7.5 同步数据

```javascript
// 同步数据
async function syncPages() {
  try {
    const lastSyncTime = parseInt(localStorage.getItem('lastSyncTime') || '0');
    const isFirstSync = lastSyncTime === 0;
    
    const response = await sendRequest({
      type: 'sync',
      entityType: 'page',
      sync: {
        lastSyncTime,
        fullSync: isFirstSync,
        maxRecords: 100
      }
    });
    
    // 处理同步数据
    if (isFirstSync) {
      // 全量同步：替换所有数据
      await saveAllPages(response.data);
    } else {
      // 增量同步：应用变更
      await applyChanges(response.data.changes);
    }
    
    // 更新同步时间
    localStorage.setItem('lastSyncTime', response.meta.syncTime.toString());
    
    console.log('同步完成，处理了', 
      isFirstSync ? response.data.length : response.data.changes.length, 
      '条记录');
    
    return {
      success: true,
      syncTime: response.meta.syncTime,
      changesCount: isFirstSync ? response.data.length : response.data.changes.length
    };
  } catch (error) {
    console.error('同步失败:', error);
    throw error;
  }
}

// 应用变更
async function applyChanges(changes) {
  const db = await openDatabase();
  const tx = db.transaction('pages', 'readwrite');
  const store = tx.objectStore('pages');
  
  for (const change of changes) {
    switch (change.changeType) {
      case 'create':
      case 'update':
        await store.put(change.data);
        break;
      case 'delete':
        await store.delete(change.id);
        break;
    }
  }
  
  await tx.complete;
}

// 使用示例
document.getElementById('syncButton').addEventListener('click', async () => {
  try {
    const result = await syncPages();
    alert(`同步成功！处理了 ${result.changesCount} 条记录`);
  } catch (error) {
    alert('同步失败: ' + error.message);
  }
});
```

## 8. 最佳实践

### 8.1 性能优化

1. **使用增量同步**：除非需要完全重建数据，否则始终使用增量同步
2. **分页获取数据**：使用`maxRecords`参数限制每次请求的数据量
3. **缓存数据**：使用IndexedDB或localStorage缓存数据
4. **按需加载**：只加载当前视图需要的数据
5. **延迟加载**：使用延迟加载技术加载非关键数据

### 8.2 安全最佳实践

1. **安全存储令牌**：使用安全的存储机制保存访问令牌
2. **避免跨域问题**：确保您的应用有权限与扩展通信
3. **验证响应**：始终验证API响应的完整性
4. **处理令牌过期**：实现令牌过期和刷新机制
5. **最小权限原则**：只请求应用所需的最小数据权限

### 8.3 用户体验建议

1. **显示同步状态**：向用户提供同步进度和状态的反馈
2. **处理离线模式**：当无法连接到扩展时提供离线功能
3. **提供重试选项**：当同步失败时允许用户手动重试
4. **清晰的错误消息**：提供用户友好的错误消息和解决建议
5. **数据使用透明度**：向用户清楚地说明您如何使用他们的数据

### 8.4 调试技巧

1. **启用详细日志**：在开发阶段启用详细日志记录
2. **使用Chrome开发者工具**：监控扩展消息和背景页面
3. **模拟错误情况**：测试各种错误场景下的应用行为
4. **创建测试数据**：使用测试数据验证同步功能
5. **监控性能指标**：跟踪同步时间和数据传输量

## 9. 常见问题解答

### 9.1 一般问题

**问：我需要创建自己的服务器来使用这个API吗？**  
答：不需要。Page Assist数据提供者API直接在浏览器中工作，通过Chrome扩展消息传递机制与您的Web应用通信。

**问：如何处理大量数据的同步？**  
答：使用分页和增量同步。设置合理的`maxRecords`值，并确保正确处理`hasMore`标志以获取所有数据。

**问：API是否支持实时更新？**  
答：不支持。该API采用拉取模式，需要您的应用主动请求数据。您可以实现定期轮询来模拟实时更新。

### 9.2 技术问题

**问：如何处理跨域问题？**  
答：确保您的Web应用在manifest.json中被列为允许的外部连接源。详见Chrome扩展文档中的externally_connectable。

**问：我可以从非Chrome扩展的网页使用这个API吗？**  
答：可以，只要该网页能够使用chrome.runtime.sendMessage与Page Assist扩展通信。

**问：如何测试API是否正常工作？**  
答：创建一个简单的测试页面，尝试获取基本数据如页面列表。检查控制台是否有错误消息。

### 9.3 故障排除

**问：为什么我收到"Extension not found"错误？**  
答：确保Page Assist扩展已安装且启用，并且您使用了正确的扩展ID。

**问：为什么我收到"auth_invalid_token"错误？**  
答：访问令牌可能已过期或无效。请用户重新生成令牌并更新您的应用配置。

**问：为什么我的请求没有响应？**  
答：检查扩展是否正在运行，网络连接是否正常，以及请求格式是否正确。

## 10. 联系与支持

如果您在使用Page Assist数据提供者API时遇到问题，或有改进建议，请通过以下方式联系我们：

- **问题报告**：在我们的GitHub仓库提交issue
- **技术支持**：发送邮件至support@page-assist.com
- **文档反馈**：使用文档页面底部的反馈表单

我们致力于不断改进API和文档，您的反馈对我们非常重要。
