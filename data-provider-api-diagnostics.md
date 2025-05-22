# Page Assist 数据提供者API诊断指南

本文档提供了诊断和解决Page Assist数据提供者API常见问题的指南。

## 常见错误

### 1. "Cannot read properties of undefined (reading 'sendMessage')"

**症状**：
- 在Service Worker环境中使用API测试脚本时看到此错误
- Chrome控制台显示 `Cannot read properties of undefined (reading 'sendMessage')`

**原因**：
Service Worker环境中没有`chrome.runtime.sendMessage`直接可用，或者API访问方式不正确。

**解决方案**：
使用`service-worker-test.js`脚本，它直接调用API处理函数，而不是通过消息传递机制。

### 2. "Entity type 'undefined' not allowed"

**症状**：
- 执行ping测试时出现 `[WARN] Entity type 'undefined' not allowed. Rejecting request.` 
- API响应: `{success: false, error: {code: "entity_type_not_allowed", message: "Access to entity type 'undefined' is not allowed."}}`

**原因**：
ping请求没有包含`entityType`参数，但Page Assist的API实现要求所有请求必须指定实体类型。

**解决方案**：
修改ping请求，添加`entityType: 'page'`参数：
```js
const pingRequest = {
  type: 'ping',
  entityType: 'page',  // 必须添加此参数
  accessToken: 'yourAccessToken',
  clientId: 'clientId'
};
```

### 3. "扩展响应无效"

**症状**：
- 测试工具显示"扩展响应无效"
- 无法建立与扩展的通信
- 网页中使用API测试工具时收到错误: `Error: API请求失败: 错误: 扩展响应无效，可能是访问令牌不正确或API未实现`

**原因**：
可能是由于以下几种原因：
- 访问令牌不正确
- 扩展ID不正确
- `externally_connectable` 配置不正确（最常见原因）
- 消息监听器未正确设置

**解决方案**：
1. 确认访问令牌与扩展配置一致
2. 验证正确的扩展ID
3. **最重要**: 检查manifest.json中的externally_connectable配置
   ```json
   "externally_connectable": {
     "matches": ["*://*/*"]
   }
   ```
4. 勾选网页中的"跳过Ping检查"选项
5. 如果以上方法都不起作用，使用`extension-console-test.js`脚本在扩展内部直接测试API

### 4. "EADDRINUSE: address already in use"

**症状**：
运行测试服务器时出现错误：`Error: listen EADDRINUSE: address already in use 127.0.0.1:8090`

**原因**：
端口8090已被其他程序占用。

**解决方案**：
使用更新的`start-test-server.js`脚本，它会自动尝试备选端口(8091, 8092, 8093等)。

## 测试工具使用指南

### 1. Service Worker环境测试

如果您在Service Worker环境中进行测试，请使用以下工具：

#### debug-service-worker.js

提供详细的诊断功能：
```js
// 在Service Worker控制台中
runDiagnostics(); // 运行全面诊断
scanForApiHandler(); // 查找API处理函数
testApiHandler(); // 测试API处理函数
ensureExternalListener(); // 确保外部消息监听器已设置
CONFIG.DEBUG_LEVEL = "trace"; // 设置最详细的日志级别
```

#### direct-api-test.js

简化版测试工具：
```js
// 在Service Worker控制台中
findApiHandler(); // 查找API处理函数
testPing(); // 测试Ping
testPageCount(); // 测试页面计数
testApiHandler(); // 测试页面列表
runAllTests(); // 运行所有测试
```

### 2. 快速修复工具

使用`quick-fix.js`进行快速诊断和修复：

```js
// 在Service Worker控制台中
checkExternallyConnectable(); // 检查externally_connectable配置
checkMessageListeners(); // 检查消息监听器
testApi(); // 测试API功能
testPingRequest(); // 测试Ping请求（包含entityType）
```

### 3. HTML测试页面

使用测试页面的步骤：
1. 运行 `node start-test-server.js` 启动测试服务器
2. 在浏览器中访问 `http://localhost:8090/test-data-provider-api.html`
3. 在测试页面中配置访问令牌和扩展ID
4. 勾选"跳过Ping检查"选项（如果连接测试失败）
5. 使用提供的按钮测试各种API功能

### 4. 扩展内部测试（推荐方法）

当外部连接有问题时，这是最可靠的方法：

1. 打开Chrome扩展页面 (chrome://extensions)
2. 找到Page Assist扩展，点击"详情"
3. 找到"查看背景页"并点击
4. 在背景页中打开开发者工具 (按F12)
5. 复制并粘贴`extension-console-test.js`中的代码到控制台
6. 运行测试函数：
   ```js
   testPageCount(); // 测试页面计数
   testPagesList(); // 测试页面列表
   runAllTests(); // 运行所有测试
   ```

## 注意事项

1. **必须包含entityType**: 所有API请求，包括ping请求，都必须包含`entityType`参数。
2. **正确的访问令牌**: 确保访问令牌与扩展配置中的一致。
3. **Service Worker限制**: Service Worker环境中需要直接调用API处理函数。
4. **externally_connectable配置**: 确保扩展的manifest.json中正确配置了externally_connectable，允许外部页面连接。
5. **跳过Ping检查**: 如果ping请求失败但需要测试其他API，请启用"跳过Ping检查"选项。
6. **扩展内部测试**: 当从外部网页无法连接时，使用扩展内部测试是最可靠的方法。

## 故障排除步骤

当遇到API通信问题时，建议按以下顺序进行排查：

1. **先使用扩展内部测试**：使用extension-console-test.js在扩展内部直接测试API
2. **检查manifest.json**：确认externally_connectable配置正确
3. **跳过Ping检查**：在HTML测试页面中勾选"跳过Ping检查"选项
4. **使用Service Worker工具**：运行debug-service-worker.js进行详细诊断
5. **检查网络请求**：在Chrome开发者工具的Network面板中查看请求是否被发送、接收

## 环境检查清单

- [x] Chrome扩展已安装并启用
- [x] 正确的扩展ID (`ffiigpcapfgmbpcggdfklpikceehbffd`)
- [x] 访问令牌正确配置 (`cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m`)
- [x] 在Service Worker环境中设置了消息监听器
- [x] API处理函数可用并正确导出到全局作用域
- [x] API请求中包含必要的`entityType`参数
- [x] manifest.json中包含正确的externally_connectable配置 