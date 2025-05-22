# Page Assist 数据提供者 API 测试

这个目录包含用于测试 Page Assist 数据提供者 API 的工具。通过这些工具，您可以确认 API 是否正常工作，并了解各个 API 端点的功能。

## 文件说明

- `test-data-provider-api.js`: API 测试脚本，包含与 Page Assist 扩展通信的所有函数
- `test-data-provider-api.html`: 测试界面，提供了一个简单的 Web 界面来运行测试
- `test-in-extension-page.html`: 在扩展内部运行测试的简化版本（解决跨域问题）
- `quick-fix.js`: 用于诊断和修复数据提供者 API 问题的脚本
- `data-provider-api-test-README.md`: 本说明文件

## 新特性 (2023年版本)

- **自动环境检测**: 测试脚本现在可以自动检测运行环境并适配不同场景
- **多模式支持**: 支持三种运行模式 - 网页模式、扩展内部模式和Service Worker模式
- **增强的错误处理**: 提供更详细的错误信息和解决方案
- **UI改进**: 直观显示环境状态和配置信息
- **自定义测试**: 可以自定义测试参数和请求类型
- **实时诊断**: 提供实时环境状态检查和问题诊断

## 使用前提

1. 已安装 Page Assist 浏览器扩展
2. 已在扩展设置中启用数据提供者 API
3. 已获取访问令牌
4. 扩展的manifest.json中正确配置了externally_connectable

## 使用方法

### 方法 1: 使用网络服务器（推荐）

由于Chrome浏览器的安全限制，本地HTML文件（通过file://协议打开）不能直接与扩展通信。因此，我们推荐使用Web服务器来托管测试页面：

1. 安装一个简单的Web服务器，如 Node.js 的 http-server：
   ```
   npm install -g http-server
   ```

2. 在包含测试文件的目录中启动服务器：
   ```
   http-server -p 8090
   ```

3. 在浏览器中访问 `http://localhost:8090/test-data-provider-api.html`

4. 点击"检查环境"和"检查扩展连接"按钮验证环境

5. 点击页面上的测试按钮运行测试

### 方法 2: 在扩展内部运行测试

这种方法可以绕过跨域通信问题，直接在扩展内部运行测试：

1. 打开 Chrome 扩展页面（chrome://extensions/）
2. 找到 Page Assist 扩展，点击"详情"
3. 点击"扩展选项"，打开扩展的选项页面
4. 按 F12 打开开发者工具
5. 切换到"控制台"标签
6. 将 `test-data-provider-api.js` 文件的内容复制到控制台中并运行
7. 运行 `testApi()` 开始测试

### 方法 3: 在任意网页控制台中使用API诊断工具

如果遇到问题，可以使用quick-fix.js诊断工具：

1. 在扩展的背景页控制台中运行quick-fix.js
2. 使用提供的诊断功能检查API是否正常工作

## 环境兼容性

测试脚本支持以下环境：

1. **网页模式**: 在普通网页中通过cross-origin消息传递测试API
2. **扩展内部模式**: 在扩展自身的页面内部直接测试API
3. **Service Worker模式**: 在背景Service Worker中测试API

脚本会自动检测环境并使用最合适的通信方式。

## 配置选项

测试工具提供以下配置选项：

1. **扩展ID**: Page Assist扩展的ID，默认为 `ffiigpcapfgmbpcggdfklpikceehbffd`
2. **访问令牌**: API访问令牌，默认为 `cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m`
3. **运行模式**: 自动检测，也可以通过UI界面查看当前模式

## 测试内容

测试脚本包含以下测试：

1. **获取页面计数**: 测试能否获取已保存页面的总数
2. **获取页面列表**: 测试能否获取保存的页面列表
3. **获取单个页面**: 测试能否获取特定页面的详细信息
4. **获取所有标签**: 测试能否获取所有标签列表
5. **同步数据**: 测试能否进行数据同步
6. **获取变更记录**: 测试能否获取变更记录
7. **自定义测试**: 可以通过UI自定义测试参数

## 常见问题排查

### 问题1: "Cannot read properties of undefined (reading 'sendMessage')"

**原因**: 这是最常见的错误，表示脚本无法访问Chrome消息传递API，通常有以下可能原因：

1. 通过file://协议直接打开HTML文件
2. 浏览器不支持chrome.runtime API
3. 扩展没有正确安装或未启用

**解决方案**:
- 使用Web服务器托管测试页面，不要直接通过文件URL打开
- 确保在Chrome或基于Chromium的浏览器中运行
- 确认Page Assist扩展已安装并启用

### 问题2: "Receiving end does not exist"

**原因**: 这个错误表示消息的接收方不存在，有以下可能原因：

1. 扩展ID不正确
2. 扩展未安装或未启用
3. 扩展的externally_connectable配置不正确

**解决方案**:
- 检查并更新扩展ID（可以在chrome://extensions/页面查看）
- 确保扩展已安装并启用
- 检查扩展的manifest.json中的externally_connectable配置，确保包含测试网页的域名

### 问题3: 消息发送成功但没有收到响应

**原因**: 这可能是因为扩展收到了消息但未能处理或回复，有以下可能原因：

1. 访问令牌不正确
2. API处理函数内部错误
3. 消息处理超时

**解决方案**:
- 检查并更新访问令牌
- 在扩展的背景页控制台查看错误日志
- 使用quick-fix.js脚本进行诊断

### 问题4: 在Service Worker环境中测试失败

**原因**: Service Worker有特殊的运行环境和限制，有时会导致测试失败：

1. 消息传递机制受限
2. 无法直接访问DOM或window对象
3. 生命周期和上下文不同

**解决方案**:
- 使用更新版本的测试脚本，支持Service Worker环境
- 在Service Worker控制台中直接运行quick-fix.js
- 检查Service Worker是否正确接收和处理消息

## externally_connectable 配置说明

扩展与外部网页通信的关键是正确配置manifest.json中的externally_connectable字段。

### 正确的配置示例:

```json
"externally_connectable": {
  "matches": [
    "http://localhost:*/*",
    "http://127.0.0.1:*/*",
    "https://example.com/*"
  ]
}
```

### 配置说明:

1. **matches**: 定义允许与扩展通信的网页URL模式列表
2. 可以使用通配符`*`匹配子域名或路径
3. 本地开发时需要包含`localhost`和`127.0.0.1`
4. 可以使用端口通配符`*`允许任何端口，如`localhost:*`

### 注意事项:

- 通配符`*`在domain部分只能用于子域名，不能用于domain中间
- 生产环境中，应该只允许特定的可信域名与扩展通信
- 更改配置后需要重新加载扩展才能生效
- Chrome/Edge和Firefox的配置方式略有不同

## API测试结果说明

测试结果会显示在页面的"结果"部分，包括以下信息：

- **success**: 表示请求是否成功
- **data**: 请求返回的数据
- **meta**: 包含分页信息、服务器时间等元数据
- **error**: 如果请求失败，包含错误代码和消息

## 高级使用技巧

### 1. 在脚本中修改配置

如果需要在脚本中修改配置，可以使用以下方法：

```javascript
// 修改扩展ID
window.setExtensionId('your_extension_id');

// 修改访问令牌
window.setAccessToken('your_access_token');

// 查看当前配置
console.log(window.CONFIG);
```

### 2. 自定义测试参数

可以在高级测试选项卡中自定义测试参数，例如：

- 选择不同的实体类型（page, document, model等）
- 选择不同的请求类型（count, list, get等）
- 自定义查询参数，如过滤条件、排序、分页等

### 3. 直接在控制台使用API

也可以直接在控制台中使用API函数：

```javascript
// 获取带有特定标签的页面
getPages({ filter: { tags: ['重要'] } }).then(console.log);

// 获取最近一周的变更
const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
getChanges(oneWeekAgo).then(console.log);
```

## 故障排除总结

| 问题类型 | 可能原因 | 解决方案 |
|---------|---------|---------|
| 无法发送消息 | file://协议、API不可用 | 使用http服务器、确认环境兼容性 |
| 消息发送失败 | 扩展ID错误、扩展未启用 | 检查并更新扩展ID、确认扩展状态 |
| 接收端不存在 | externally_connectable配置错误 | 修改manifest配置、确认域名匹配 |
| 消息无响应 | 访问令牌错误、处理函数异常 | 检查令牌、查看扩展日志 |
| Service Worker问题 | 环境限制、消息处理不同 | 使用兼容的测试脚本、直接在SW中测试 |

## 贡献与反馈

如果您发现任何问题或有改进建议，请提交Issue或Pull Request。我们欢迎各种形式的贡献，包括：

- 报告bug或提出改进建议
- 改进文档和使用说明
- 添加新功能或测试用例

## 许可和版权

本测试工具包是Page Assist扩展的一部分，遵循相同的许可条款。使用时请遵守相关规定，不要泄露访问令牌或滥用API功能。 