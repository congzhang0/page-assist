# Tailwind CSS v4 规范概述

Tailwind CSS v4是一次重大更新，引入了全新的CSS优先配置方法、高性能引擎和许多新功能。本文档总结了Tailwind CSS v4的主要变化和新特性，帮助您快速了解和使用这些功能。

## 目录

1. [CSS优先配置](#css优先配置)
   - [@theme指令](#theme指令)
   - [@utility指令](#utility指令)
   - [@plugin指令](#plugin指令)
2. [容器查询](#容器查询)
   - [基本用法](#基本用法)
   - [最大宽度容器查询](#最大宽度容器查询)
   - [容器查询范围](#容器查询范围)
3. [扩展的渐变API](#扩展的渐变api)
   - [线性渐变角度](#线性渐变角度)
   - [径向和锥形渐变](#径向和锥形渐变)
4. [3D变换API](#3d变换api)
5. [内阴影和内环](#内阴影和内环)
6. [主题变量命名空间](#主题变量命名空间)
7. [其他新功能](#其他新功能)
8. [从v3迁移到v4](#从v3迁移到v4)
9. [最佳实践和示例](#最佳实践和示例)

## CSS优先配置

Tailwind CSS v4最显著的变化是从JavaScript配置文件转向CSS优先配置。现在，您可以直接在CSS文件中使用新的指令来配置Tailwind。

### @theme指令

这是v4中最重要的新指令，用于定义主题变量：

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
}
```

主题变量会自动转换为CSS变量，并用于生成对应的工具类。您可以使用`--color-*: initial;`语法来完全覆盖某个命名空间的变量：

```css
@theme {
  --color-*: initial;
  --color-gray-50: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  /* ... */
  --color-green-800: #3f6212;
  --color-green-900: #365314;
  --color-green-950: #1a2e05;
}
```

### @utility指令

用于创建自定义工具类：

```css
@utility {
  .custom-container {
    padding: 20px;
    max-width: 1280px;
    margin: auto;
  }
}
```

### @plugin指令

用于添加插件功能：

```css
@plugin "./my-plugin.js";
```

## 容器查询

v4将容器查询支持集成到核心中，不再需要额外插件。

### 基本用法

使用`@container`类将元素标记为容器，然后使用`@sm`和`@md`等变体基于容器大小为子元素设置样式：

```html
<div class="@container p-4 border rounded-lg">
  <div class="@sm:flex @sm:space-x-4">
    <div class="@sm:w-1/3">...</div>
    <div class="@sm:w-2/3">...</div>
  </div>
</div>
```

### 最大宽度容器查询

使用`@max-sm`和`@max-md`等变体在特定容器大小以下应用样式：

```html
<div class="@container">
  <div class="@max-md:bg-blue-500">
    <!-- 当容器宽度小于md断点时应用蓝色背景 -->
  </div>
</div>
```

### 容器查询范围

组合常规容器查询变体和最大宽度容器查询变体来定义特定范围：

```html
<div class="@container">
  <div class="@sm:@max-lg:bg-green-500">
    <!-- 当容器宽度在sm和lg断点之间时应用绿色背景 -->
  </div>
</div>
```

## 扩展的渐变API

v4大幅扩展了渐变功能。

### 线性渐变角度

线性渐变现在支持角度值，可以使用`bg-linear-45`等工具类创建45度角的渐变：

```html
<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  <!-- 从右到左的渐变 -->
</div>

<div class="bg-linear-45 from-blue-500 to-purple-500">
  <!-- 45度角的渐变 -->
</div>
```

### 径向和锥形渐变

v4添加了径向和锥形渐变支持：

```html
<div class="bg-radial from-blue-500 to-purple-500">
  <!-- 径向渐变 -->
</div>

<div class="bg-conic from-blue-500 to-purple-500">
  <!-- 锥形渐变 -->
</div>
```

## 3D变换API

v4引入了3D变换工具类：

```html
<div class="rotate-x-12 rotate-y-6 perspective-500">
  <!-- 3D旋转和透视效果 -->
</div>
```

可用的3D变换工具类包括：

- `rotate-x-*`：X轴旋转
- `rotate-y-*`：Y轴旋转
- `scale-z-*`：Z轴缩放
- `translate-z-*`：Z轴平移
- `perspective-*`：透视效果
- `transform-style-3d`：3D变换样式

## 内阴影和内环

新增了内阴影和内环工具类：

```html
<div class="inset-shadow-md">
  <!-- 内阴影效果 -->
</div>

<div class="inset-ring-2 inset-ring-blue-500">
  <!-- 内环效果 -->
</div>
```

## 主题变量命名空间

v4中的主题变量按命名空间组织，每个命名空间对应一组工具类或变体：

| 命名空间 | 工具类 |
|---------|-------|
| --color-* | 颜色工具类如bg-red-500, text-sky-300等 |
| --font-* | 字体系列工具类如font-sans |
| --text-* | 字体大小工具类如text-xl |
| --font-weight-* | 字体粗细工具类如font-bold |
| --tracking-* | 字母间距工具类如tracking-wide |
| --leading-* | 行高工具类如leading-tight |
| --breakpoint-* | 响应式断点变体如sm:* |
| --container-* | 容器查询变体如@sm:*和尺寸工具类如max-w-md |
| --spacing-* | 间距和尺寸工具类如px-4, max-h-16等 |
| --radius-* | 边框圆角工具类如rounded-sm |
| --shadow-* | 盒阴影工具类如shadow-md |
| --inset-shadow-* | 内阴影工具类如inset-shadow-xs |
| --drop-shadow-* | 阴影滤镜工具类如drop-shadow-md |
| --blur-* | 模糊滤镜工具类如blur-md |
| --perspective-* | 透视工具类如perspective-near |
| --aspect-* | 宽高比工具类如aspect-video |

## 其他新功能

- **@starting-style支持**：用于创建进入和退出过渡，无需JavaScript
- **原生级联层**：使用真正的@layer规则，解决了过去的特异性问题
- **显式定义的自定义属性**：使用@property定义内部自定义属性
- **使用color-mix进行不透明度修饰**：使颜色透明度调整更加灵活
- **现代化的P3色彩调色板**：支持更广泛的色彩范围

## 从v3迁移到v4

Tailwind提供了一个升级工具，可以帮助您将v3项目升级到v4：

```bash
npx @tailwindcss/upgrade
```

### 主要迁移步骤

1. **安装v4**：
   ```bash
   npm install tailwindcss@latest
   ```

2. **创建新的CSS文件**：
   ```css
   /* main.css */
   @import "tailwindcss";
   ```

3. **将tailwind.config.js转换为CSS配置**：

   旧的JavaScript配置：
   ```js
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: '#3b82f6',
         },
         fontFamily: {
           display: ['Satoshi', 'sans-serif'],
         },
       },
     },
   }
   ```

   新的CSS配置：
   ```css
   /* main.css */
   @import "tailwindcss";

   @theme {
     --color-primary: #3b82f6;
     --font-display: "Satoshi", "sans-serif";
   }
   ```

4. **更新插件**：
   - 容器查询插件现在已集成到核心中
   - 其他插件可能需要更新到兼容v4的版本

5. **检查和更新自定义组件**：
   - 使用@utility指令替代@layer utilities
   - 使用@theme替代theme.extend

6. **更新构建配置**：
   - 确保您的构建工具配置已更新
   - 对于PostCSS用户，确保PostCSS配置与v4兼容

### 常见迁移问题

1. **window对象在Service Worker中不可用**：
   - 如果您的代码在background.js中使用window对象，需要使用globalThis替代
   - 添加条件检查以确保代码在不同环境中都能正常工作

2. **CSS变量命名变化**：
   - v4中的CSS变量命名空间与v3不同
   - 需要更新任何直接引用CSS变量的代码

3. **层叠层(cascade layers)行为变化**：
   - v4使用原生@layer规则，可能会影响样式优先级
   - 检查自定义样式是否受到影响

## 最佳实践和示例

### 使用容器查询创建响应式卡片

```html
<div class="@container p-6 border rounded-lg shadow-md">
  <!-- 默认垂直布局 -->
  <div class="space-y-4">
    <img src="image.jpg" class="w-full h-auto rounded-md" />
    <div>
      <h3 class="text-lg font-bold">卡片标题</h3>
      <p class="text-gray-600">卡片描述文本</p>
    </div>
    <button class="w-full bg-blue-500 text-white py-2 rounded-md">
      点击按钮
    </button>
  </div>

  <!-- 在容器宽度达到md时切换为水平布局 -->
  <div class="@md:flex @md:space-x-4 @md:space-y-0">
    <img src="image.jpg" class="@md:w-1/3 h-auto rounded-md" />
    <div class="@md:w-2/3 @md:flex @md:flex-col @md:justify-between">
      <div>
        <h3 class="text-lg font-bold">卡片标题</h3>
        <p class="text-gray-600">卡片描述文本</p>
      </div>
      <button class="bg-blue-500 text-white py-2 rounded-md">
        点击按钮
      </button>
    </div>
  </div>
</div>
```

### 使用3D变换创建翻转卡片

```html
<div class="group perspective-1000 relative h-64 w-full">
  <div class="absolute inset-0 transform-style-3d duration-500 ease-in-out group-hover:rotate-y-180">
    <!-- 卡片正面 -->
    <div class="absolute inset-0 backface-hidden bg-blue-500 p-6 text-white rounded-lg">
      <h3 class="text-xl font-bold">卡片正面</h3>
      <p>悬停查看背面</p>
    </div>

    <!-- 卡片背面 -->
    <div class="absolute inset-0 backface-hidden bg-green-500 p-6 text-white rounded-lg rotate-y-180">
      <h3 class="text-xl font-bold">卡片背面</h3>
      <p>包含更多信息</p>
    </div>
  </div>
</div>
```

### 使用扩展的渐变API创建高级背景

```html
<!-- 线性渐变角度 -->
<div class="bg-linear-45 from-blue-500 to-purple-500 h-32 rounded-lg"></div>

<!-- 径向渐变 -->
<div class="bg-radial from-yellow-300 via-orange-500 to-red-700 h-32 rounded-lg"></div>

<!-- 锥形渐变 -->
<div class="bg-conic from-green-400 via-blue-500 to-purple-600 h-32 rounded-lg"></div>

<!-- 组合使用多种渐变 -->
<div class="relative h-64 rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-conic from-blue-500 to-purple-500 opacity-70"></div>
  <div class="absolute inset-0 bg-radial-at-br from-yellow-300 to-transparent opacity-50"></div>
</div>
```

### 使用@starting-style创建无JS过渡效果

```html
<!-- 元素进入时的过渡效果 -->
<div class="opacity-100 translate-y-0 transition duration-500 ease-out
            @starting-style:opacity-0 @starting-style:translate-y-4">
  这个元素会从下方淡入
</div>

<!-- 结合容器查询的过渡效果 -->
<div class="@container">
  <div class="@md:opacity-100 @md:scale-100 transition duration-300
              @starting-style:opacity-0 @starting-style:scale-95">
    当容器宽度达到md断点时，这个元素会缩放并淡入
  </div>
</div>
```

### 使用CSS变量引用主题值

```css
/* 自定义组件使用主题变量 */
@utility {
  .custom-card {
    background-color: var(--color-gray-100);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: calc(var(--spacing-4) * 1px);
  }

  .custom-button {
    background-color: var(--color-blue-500);
    color: white;
    padding: calc(var(--spacing-2) * 1px) calc(var(--spacing-4) * 1px);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-medium);
  }
}
```

### 最佳实践总结

1. **使用CSS优先配置**：
   - 将所有配置移至CSS文件中
   - 使用@theme定义主题变量
   - 使用@utility创建自定义工具类

2. **容器查询最佳实践**：
   - 为需要响应式行为的组件使用@container
   - 使用@min-*和@max-*变体定义精确的响应范围
   - 考虑使用命名容器来避免嵌套容器的冲突

3. **性能优化**：
   - 利用v4的高性能引擎
   - 使用@source指令指定内容检测的源文件
   - 避免不必要的工具类生成

4. **浏览器兼容性**：
   - 了解v4依赖现代浏览器特性
   - 为旧浏览器提供合适的回退方案
   - 测试在不同浏览器中的表现
