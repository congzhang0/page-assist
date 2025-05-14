# Page Assist 架构文档

## 项目目的

Page Assist 是一个浏览器扩展，旨在为用户提供一个与本地 AI 模型交互的界面。它允许用户在浏览网页时直接使用 AI 模型进行对话、总结、翻译等操作，无需离开当前页面。主要功能包括：

- **侧边栏（Sidebar）**：可以在任何网页上打开的侧边栏，允许用户与 AI 模型交互并查看结果
- **Web UI**：类似 ChatGPT 网站的界面，允许用户与 AI 模型进行更全面的交互
- **网页对话（Chat With Webpage）**：用户可以与当前网页内容进行对话，询问关于内容的问题
- **知识库（Knowledge Base）**：支持用户上传自己的数据，与自己的数据进行对话

项目支持多种 AI 模型提供商，包括：
- Ollama（本地 AI 模型）
- OpenAI 兼容的 API 端点（如 LM Studio、llamafile 等）
- Chrome AI（如 Gemini Nano）
- Google AI
- 自定义模型

## 架构设计

Page Assist 采用了模块化的架构设计，主要分为以下几个部分：

```mermaid
graph TD
    A[浏览器扩展] --> B[背景脚本]
    A --> C[侧边栏]
    A --> D[Web UI]
    B --> E[AI 模型服务]
    C --> E
    D --> E
    E --> F[Ollama]
    E --> G[OpenAI 兼容 API]
    E --> H[Chrome AI]
    E --> I[Google AI]
    E --> J[自定义模型]
    K[Web 搜索] --> C
    K --> D
    L[知识库] --> C
    L --> D
```

### 核心组件

1. **浏览器扩展**：基于 WXT 框架构建，支持 Chrome、Firefox 和 Edge 浏览器
2. **背景脚本**：处理扩展的核心功能，如模型拉取、上下文菜单、消息传递等
3. **侧边栏**：提供在任何网页上与 AI 模型交互的界面
4. **Web UI**：提供类似 ChatGPT 的全功能界面
5. **AI 模型服务**：连接不同的 AI 模型提供商
6. **Web 搜索**：支持多种搜索引擎，为 AI 提供实时信息
7. **知识库**：允许用户上传和查询自己的数据

## 模块设计

### 1. 入口模块（Entries）

负责定义扩展的不同入口点，包括背景脚本、侧边栏、选项页面等。

```mermaid
graph TD
    A[entries] --> B[background.ts]
    A --> C[sidepanel]
    A --> D[options]
    A --> E[content scripts]
    C --> C1[App.tsx]
    C --> C2[main.tsx]
    C --> C3[index.html]
    D --> D1[App.tsx]
    D --> D2[main.tsx]
    D --> D3[index.html]
    E --> E1[ollama-pull.content.ts]
    E --> E2[hf-pull.content.ts]
```

### 2. 服务模块（Services）

提供与 AI 模型和其他功能的交互服务。

```mermaid
graph TD
    A[services] --> B[ollama.ts]
    A --> C[action.ts]
    A --> D[app.ts]
    A --> E[chrome.ts]
    A --> F[search.ts]
    A --> G[model-settings.ts]
```

### 3. 模型模块（Models）

定义与不同 AI 模型提供商交互的接口。

```mermaid
graph TD
    A[models] --> B[index.ts]
    A --> C[ChatOllama.ts]
    A --> D[ChatChromeAi.ts]
    A --> E[ChatGoogleAI.ts]
    A --> F[CustomChatOpenAI.ts]
    A --> G[OllamaEmbedding.ts]
```

### 4. 组件模块（Components）

定义 UI 组件，包括布局、对话界面、设置界面等。

```mermaid
graph TD
    A[components] --> B[Layouts]
    A --> C[Common]
    A --> D[Option]
    A --> E[Sidepanel]
    B --> B1[Header.tsx]
    B --> B2[Layout.tsx]
    C --> C1[Markdown.tsx]
    C --> C2[ModelSelect.tsx]
    C --> C3[PageAssistProvider.tsx]
    C --> C4[Playground]
    D --> D1[Settings]
    D --> D2[Knowledge]
    E --> E1[Chat.tsx]
    E --> E2[Settings.tsx]
```

### 5. 路由模块（Routes）

定义应用的路由结构。

```mermaid
graph TD
    A[routes] --> B[chrome-route.tsx]
    A --> C[chrome.tsx]
    A --> D[firefox.tsx]
    A --> E[option-index.tsx]
    A --> F[option-settings.tsx]
    A --> G[sidepanel-chat.tsx]
    A --> H[sidepanel-settings.tsx]
```

### 6. Web 模块

处理网页内容提取和搜索功能。

```mermaid
graph TD
    A[web] --> B[web.ts]
    A --> C[website]
    A --> D[search-engines]
    C --> C1[index.ts]
    D --> D1[google.ts]
    D --> D2[duckduckgo.ts]
    D --> D3[brave.ts]
    D --> D4[bing.ts]
    D --> D5[baidu.ts]
```

## 工作流程

### 主要工作流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Browser as 浏览器
    participant Extension as Page Assist 扩展
    participant AI as AI 模型服务
    
    User->>Browser: 打开网页
    User->>Extension: 点击扩展图标或使用快捷键
    alt 打开侧边栏
        Extension->>Browser: 打开侧边栏
    else 打开 Web UI
        Extension->>Browser: 打开新标签页显示 Web UI
    end
    User->>Extension: 输入提示或问题
    Extension->>AI: 发送请求
    AI->>Extension: 返回响应
    Extension->>User: 显示 AI 响应
```

### 与网页内容交互流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Extension as Page Assist 扩展
    participant Page as 网页
    participant AI as AI 模型
    
    User->>Extension: 启用"与网页对话"功能
    Extension->>Page: 提取网页内容
    Page->>Extension: 返回网页内容
    User->>Extension: 输入关于网页的问题
    Extension->>AI: 发送问题和网页内容
    AI->>Extension: 返回基于网页内容的回答
    Extension->>User: 显示回答
```

### 模型拉取流程

```mermaid
sequenceDiagram
    participant User as 用户
    participant Extension as Page Assist 扩展
    participant Ollama as Ollama 服务
    
    User->>Extension: 请求拉取模型
    Extension->>Ollama: 检查 Ollama 是否运行
    alt Ollama 运行中
        Extension->>Ollama: 发送拉取模型请求
        Ollama->>Extension: 开始拉取模型
        Extension->>User: 显示拉取进度
        Ollama->>Extension: 拉取完成
        Extension->>User: 通知拉取完成
    else Ollama 未运行
        Extension->>User: 显示错误：Ollama 未运行
    end
```

## 技术栈

- **前端框架**：React
- **UI 库**：Ant Design
- **状态管理**：React Query
- **构建工具**：WXT (Web Extension Tools)
- **AI 集成**：Langchain
- **语言**：TypeScript
- **样式**：Tailwind CSS

## 扩展点

Page Assist 设计了多个扩展点，允许添加新的功能和集成：

1. **AI 模型提供商**：可以添加新的 AI 模型提供商
2. **搜索引擎**：可以添加新的搜索引擎
3. **提示模板**：可以添加新的提示模板
4. **UI 主题**：支持明暗主题切换
5. **语言支持**：支持多语言界面
