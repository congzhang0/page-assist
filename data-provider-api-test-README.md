# Page Assist 数据提供者 API 测试

这个目录包含用于测试 Page Assist 数据提供者 API 的工具。通过这些工具，您可以确认 API 是否正常工作，并了解各个 API 端点的功能。

## 文件说明

- `test-data-provider-api.js`: API 测试脚本，包含与 Page Assist 扩展通信的所有函数
- `test-data-provider-api.html`: 测试界面，提供了一个简单的 Web 界面来运行测试
- `test-in-extension-page.html`: 在扩展内部运行测试的简化版本（解决跨域问题）
- `data-provider-api-test-README.md`: 本说明文件

## 使用前提

1. 已安装 Page Assist 浏览器扩展
2. 已在扩展设置中启用数据提供者 API
3. 已获取访问令牌

## 使用方法

### 方法 1: 使用网络服务器（推荐）

由于Chrome浏览器的安全限制，本地HTML文件（通过file://协议打开）不能直接与扩展通信。因此，我们推荐使用Web服务器来托管测试页面：

1. 安装一个简单的Web服务器，如 Node.js 的 http-server：
   ```
   npm install -g http-server
   ```

2. 在包含测试文件的目录中启动服务器：
   ```
   http-server -p 8080
   ```

3. 在浏览器中访问 `http://localhost:8080/test-data-provider-api.html`

4. 点击页面上的按钮运行测试

### 方法 2: 直接在扩展中运行测试

这种方法可以绕过跨域通信问题，直接在扩展内部运行测试：

1. 打开 Chrome 扩展页面（chrome://extensions/）
2. 找到 Page Assist 扩展，点击"详情"
3. 点击"背景页"，打开扩展的开发者工具
4. 切换到"控制台"标签
5. 将 `test-in-extension-page.html` 文件中的脚本部分（`<script>...</script>`标签内的内容）复制到控制台中
6. 或者，您可以将整个 `test-in-extension-page.html` 内容复制到一个新文件中，并在扩展的选项页面中加载它

### 方法 3: 在任意网页的控制台中运行

如果以上方法都不奏效，可以尝试：

1. 打开任意网页（例如 https://www.google.com）
2. 按 F12 打开开发者工具
3. 切换到"控制台"标签
4. 复制粘贴 `test-data-provider-api.js` 文件中的代码
5. 输入 `testApi()` 运行所有测试，或使用其他导出的函数测试特定功能

## 测试内容

测试脚本包含以下测试：

1. **获取页面计数**: 测试能否获取已保存页面的总数
2. **获取页面列表**: 测试能否获取保存的页面列表
3. **获取单个页面**: 测试能否获取特定页面的详细信息
4. **获取所有标签**: 测试能否获取所有标签列表
5. **同步数据**: 测试能否进行数据同步
6. **获取变更记录**: 测试能否获取变更记录

## 故障排除

### 常见错误

#### 1. "Cannot read properties of undefined (reading 'sendMessage')"

这是最常见的错误，表示脚本无法访问 `chrome.runtime.sendMessage` 方法。可能的原因包括：

- **环境问题**：测试脚本运行在不支持Chrome扩展API的环境中
- **本地文件限制**：通过 file:// 协议打开的本地HTML文件不能使用扩展API
- **跨域限制**：当前页面不在扩展的允许通信列表中

**解决方案**：
- 使用Web服务器托管测试页面（见方法1）
- 直接在扩展中运行测试（见方法2）
- 在任意网页的控制台中运行测试代码（见方法3）

#### 2. "Extension ID not found"

这意味着找不到指定ID的扩展。可能的原因包括：

- 扩展未安装
- 扩展已安装但未启用
- 扩展ID不正确

**解决方案**：
- 确保Page Assist扩展已安装并启用
- 在Chrome扩展页面（chrome://extensions/）验证扩展ID
- 修改测试脚本中的扩展ID（如有必要）

#### 3. "Connection failed"

这表示虽然找到了扩展，但无法与之建立连接。可能的原因包括：

- 扩展的manifest.json中未正确配置externally_connectable
- 扩展未实现数据提供者API
- 访问令牌无效

**解决方案**：
- 检查扩展的manifest.json配置
- 确认扩展中已实现数据提供者API
- 更新访问令牌

### 检查项目

如果测试失败，请检查以下几点：

1. 确认 Page Assist 扩展已正确安装并启用
2. 确认在扩展设置中已启用数据提供者 API
3. 确认访问令牌正确
4. 使用适当的测试方法（见上文的"使用方法"部分）
5. 查看浏览器控制台是否有错误信息
6. 尝试先运行简单测试，如"检查环境"和"检查扩展连接"按钮

### 诊断步骤

1. 点击"检查环境"按钮，确认Chrome API可用
2. 点击"检查扩展连接"按钮，确认可以连接到扩展
3. 如果环境检查通过但扩展连接失败，问题可能在扩展配置或ID上
4. 如果环境检查失败，问题可能在测试环境上，尝试其他测试方法

## 日志

测试脚本会在控制台中输出详细的日志信息，包括发送的请求和收到的响应。这些信息对于调试问题非常有用。

要查看这些日志：
1. 按F12打开开发者工具
2. 切换到"控制台"标签
3. 查看日志输出

## 自定义测试

如果你想测试特定场景，可以使用以下导出的函数：

- `getPageCount()`: 获取页面计数
- `getPages(options)`: 获取页面列表
- `getPage(pageId)`: 获取单个页面
- `getAllTags()`: 获取所有标签
- `syncData(lastSyncTime, fullSync)`: 同步数据
- `getChanges(lastSyncTime)`: 获取变更记录

示例：

```javascript
// 获取带有特定标签的页面
getPages({ filter: { tags: ['重要'] } }).then(console.log);

// 获取最近一周的变更
const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
getChanges(oneWeekAgo).then(console.log);
```

## 注意事项

- 测试必须在支持 Chrome 扩展 API 的浏览器环境中运行
- 通过文件URL（file://）打开的本地HTML文件无法与扩展通信，请使用Web服务器
- 测试页面与 Page Assist 扩展之间的通信依赖于 Chrome 扩展消息传递机制
- 测试脚本中包含了您的访问令牌，请确保不要将其分享给他人

## 扩展开发者信息

如果您是Page Assist扩展的开发者，请确认以下设置：

1. 确保扩展的manifest.json中包含适当的externally_connectable配置：
   ```json
   "externally_connectable": {
     "matches": ["*://*/*"]
   }
   ```

2. 确保扩展监听了外部消息：
   ```javascript
   chrome.runtime.onMessageExternal.addListener(
     function(request, sender, sendResponse) {
       // 处理数据提供者API请求
       handleDataProviderRequest(request, sender)
         .then(response => sendResponse(response))
         .catch(error => sendResponse({
           success: false,
           error: { message: error.message }
         }));
       return true; // 表示将异步发送响应
     }
   );
   ```

3. 如果扩展没有正确处理onMessageExternal事件，API将无法工作 