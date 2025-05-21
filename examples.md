# Page Assist 数据提供者 API 使用示例

本文档提供了一些数据提供者 API 的常见用例和实际示例，帮助您了解如何使用这些 API。

## 基本用例

### 1. 获取保存的页面列表

```javascript
// 获取最近10个保存的页面
const request = {
  type: 'list',
  entityType: 'page',
  query: {
    filter: {},
    page: 1,
    pageSize: 10,
    sort: { field: 'updatedAt', order: 'desc' }
  },
  accessToken: 'YOUR_ACCESS_TOKEN',
  clientId: 'client_example'
};

chrome.runtime.sendMessage(
  'ffiigpcapfgmbpcggdfklpikceehbffd',  // Page Assist 扩展ID
  request,
  response => {
    console.log('获取到的页面：', response.data);
  }
);
```

### 2. 获取特定标签的页面

```javascript
// 获取标有"工作"或"重要"标签的页面
const request = {
  type: 'list',
  entityType: 'page',
  query: {
    filter: {
      tags: ['工作', '重要']
    },
    page: 1,
    pageSize: 20
  },
  accessToken: 'YOUR_ACCESS_TOKEN',
  clientId: 'client_example'
};

// 发送请求
chrome.runtime.sendMessage(
  'ffiigpcapfgmbpcggdfklpikceehbffd',
  request,
  response => {
    console.log('带有特定标签的页面：', response.data);
  }
);
```

### 3. 获取包含特定关键词的页面

```javascript
// 搜索包含"AI"或"机器学习"关键词的页面
const request = {
  type: 'list',
  entityType: 'page',
  query: {
    filter: {},
    page: 1,
    pageSize: 10,
    search: 'AI OR 机器学习'
  },
  accessToken: 'YOUR_ACCESS_TOKEN',
  clientId: 'client_example'
};

// 发送请求
chrome.runtime.sendMessage(
  'ffiigpcapfgmbpcggdfklpikceehbffd',
  request,
  response => {
    console.log('搜索结果：', response.data);
  }
);
```

## 高级用例

### 1. 同步数据

```javascript
// 同步自上次同步以来的数据变更
const lastSyncTime = localStorage.getItem('lastSyncTime') || 0;

const request = {
  type: 'sync',
  entityType: 'page',
  sync: {
    lastSyncTime: parseInt(lastSyncTime),
    fullSync: false,
    maxRecords: 100
  },
  accessToken: 'YOUR_ACCESS_TOKEN',
  clientId: 'client_example'
};

// 发送请求
chrome.runtime.sendMessage(
  'ffiigpcapfgmbpcggdfklpikceehbffd',
  request,
  response => {
    if (response.success) {
      console.log('同步的变更：', response.data.changes);
      // 保存最新的同步时间
      localStorage.setItem('lastSyncTime', response.meta.syncTime);
      
      // 处理数据变更
      response.data.changes.forEach(change => {
        if (change.changeType === 'create' || change.changeType === 'update') {
          // 处理新增或更新的记录
          updateLocalData(change.data);
        } else if (change.changeType === 'delete') {
          // 处理删除的记录
          removeLocalData(change.id);
        }
      });
      
      // 检查是否有更多数据
      if (response.meta.hasMore) {
        // 继续同步
        // ...
      }
    }
  }
);

function updateLocalData(data) {
  // 更新本地数据的实现
  console.log('更新数据：', data);
}

function removeLocalData(id) {
  // 移除本地数据的实现
  console.log('移除数据：', id);
}
```

### 2. 获取页面计数

```javascript
// 获取不同类型的页面计数
const request = {
  type: 'count',
  entityType: 'page',
  query: {
    filter: {}
  },
  accessToken: 'YOUR_ACCESS_TOKEN',
  clientId: 'client_example'
};

// 发送请求
chrome.runtime.sendMessage(
  'ffiigpcapfgmbpcggdfklpikceehbffd',
  request,
  response => {
    if (response.success) {
      console.log('总页面数：', response.data.count);
    }
  }
);
```

### 3. 获取所有标签

```javascript
// 获取所有使用过的标签
const request = {
  type: 'tags',
  entityType: 'page',
  accessToken: 'YOUR_ACCESS_TOKEN',
  clientId: 'client_example'
};

// 发送请求
chrome.runtime.sendMessage(
  'ffiigpcapfgmbpcggdfklpikceehbffd',
  request,
  response => {
    if (response.success) {
      console.log('所有标签：', response.data);
    }
  }
);
```

## 错误处理示例

处理API请求中可能出现的错误：

```javascript
function sendApiRequest(request) {
  return new Promise((resolve, reject) => {
    try {
      chrome.runtime.sendMessage(
        'ffiigpcapfgmbpcggdfklpikceehbffd',
        request,
        response => {
          if (chrome.runtime.lastError) {
            console.error('API请求错误:', chrome.runtime.lastError);
            reject(new Error(`API请求失败: ${chrome.runtime.lastError.message}`));
            return;
          }
          
          if (!response) {
            reject(new Error('收到空响应'));
            return;
          }
          
          if (!response.success) {
            // 处理API错误
            const errorCode = response.error?.code || 'unknown_error';
            const errorMessage = response.error?.message || '未知错误';
            
            switch (errorCode) {
              case 'auth_invalid_token':
                console.error('访问令牌无效，请重新获取');
                // 可能需要重新登录或刷新令牌
                break;
              case 'entity_not_found':
                console.error('请求的实体不存在');
                break;
              case 'invalid_request':
                console.error('无效的请求格式');
                break;
              default:
                console.error(`API错误: ${errorCode} - ${errorMessage}`);
            }
            
            reject(new Error(`API错误: ${errorCode} - ${errorMessage}`));
            return;
          }
          
          // 成功处理响应
          resolve(response);
        }
      );
    } catch (error) {
      console.error('发送消息时出错:', error);
      reject(new Error(`发送消息时出现异常: ${error.message}`));
    }
  });
}
```

## 完整的集成示例

下面是一个更完整的示例，展示如何创建一个简单的Web应用，用于显示保存的页面列表：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的保存页面</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    .page-item { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 4px; }
    .page-title { font-size: 18px; font-weight: bold; }
    .page-url { color: #0066cc; margin: 5px 0; }
    .page-tags { display: flex; gap: 5px; margin-top: 10px; }
    .tag { background: #f0f0f0; padding: 3px 8px; border-radius: 3px; font-size: 12px; }
    .loading { text-align: center; padding: 20px; }
    .error { color: red; padding: 10px; border: 1px solid red; border-radius: 4px; background: #fff0f0; }
  </style>
</head>
<body>
  <h1>我的保存页面</h1>
  
  <div id="status"></div>
  <div id="page-list"></div>
  
  <script>
    // 配置
    const EXTENSION_ID = 'ffiigpcapfgmbpcggdfklpikceehbffd';
    const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // 请替换为实际的访问令牌
    
    // 状态显示
    const statusElement = document.getElementById('status');
    const pageListElement = document.getElementById('page-list');
    
    // 显示加载状态
    function showLoading() {
      statusElement.innerHTML = '<div class="loading">加载中...</div>';
    }
    
    // 显示错误
    function showError(message) {
      statusElement.innerHTML = `<div class="error">${message}</div>`;
    }
    
    // 检查扩展是否可用
    function checkExtension() {
      return new Promise((resolve, reject) => {
        if (typeof chrome === 'undefined' || !chrome.runtime) {
          reject(new Error('无法访问Chrome API，请确保在支持的浏览器中运行'));
          return;
        }
        
        try {
          chrome.runtime.sendMessage(
            EXTENSION_ID,
            { type: 'ping' },
            response => {
              if (chrome.runtime.lastError) {
                reject(new Error(`无法连接到扩展: ${chrome.runtime.lastError.message}`));
              } else {
                resolve();
              }
            }
          );
        } catch (error) {
          reject(new Error(`检查扩展时出错: ${error.message}`));
        }
      });
    }
    
    // 获取页面列表
    function getPages() {
      return new Promise((resolve, reject) => {
        const request = {
          type: 'list',
          entityType: 'page',
          query: {
            filter: {},
            page: 1,
            pageSize: 20,
            sort: { field: 'updatedAt', order: 'desc' }
          },
          accessToken: ACCESS_TOKEN,
          clientId: 'web_client_' + Date.now()
        };
        
        chrome.runtime.sendMessage(
          EXTENSION_ID,
          request,
          response => {
            if (chrome.runtime.lastError) {
              reject(new Error(`获取页面失败: ${chrome.runtime.lastError.message}`));
            } else if (!response || !response.success) {
              reject(new Error(response?.error?.message || '获取页面失败'));
            } else {
              resolve({
                pages: response.data,
                meta: response.meta
              });
            }
          }
        );
      });
    }
    
    // 渲染页面列表
    function renderPages(pages) {
      if (!pages || pages.length === 0) {
        pageListElement.innerHTML = '<p>没有找到保存的页面</p>';
        return;
      }
      
      const html = pages.map(page => `
        <div class="page-item">
          <div class="page-title">${escapeHtml(page.title || '无标题')}</div>
          <div class="page-url">${escapeHtml(page.url || '#')}</div>
          ${page.tags && page.tags.length > 0 ? `
            <div class="page-tags">
              ${page.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      `).join('');
      
      pageListElement.innerHTML = html;
    }
    
    // HTML转义
    function escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
    
    // 初始化
    async function initialize() {
      showLoading();
      
      try {
        // 检查扩展是否可用
        await checkExtension();
        
        // 获取页面列表
        const {pages} = await getPages();
        
        // 渲染页面列表
        renderPages(pages);
        
        // 清除状态
        statusElement.innerHTML = '';
      } catch (error) {
        showError(`初始化失败: ${error.message}`);
        console.error('初始化失败:', error);
      }
    }
    
    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', initialize);
  </script>
</body>
</html>
```

## API 参考

有关数据提供者 API 的完整说明，请参阅主文档 [data-provider-api-test-README.md](data-provider-api-test-README.md)。 