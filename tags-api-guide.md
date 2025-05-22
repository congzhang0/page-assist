# Page Assist 标签 API 使用指南

本文档介绍如何在 Page Assist 的数据提供者 API 中使用标签功能。这些方法可以帮助你获取和管理页面标签。

## 方法一：获取页面的完整信息（包括标签）

通过 `get` 请求获取完整的页面信息，其中包含标签：

```javascript
const request = {
  type: 'get',
  entityType: 'page',
  id: 'YOUR_PAGE_ID', // 替换为实际的页面ID
  accessToken: 'YOUR_ACCESS_TOKEN'
};

// 发送请求
const response = await sendApiRequest(request);

if (response.success) {
  const page = response.data;
  const tags = page.tags; // 获取页面的标签数组
  console.log('页面标签:', tags);
}
```

## 方法二：获取所有页面及其标签

通过 `list` 请求获取所有页面，其中包含每个页面的标签：

```javascript
const request = {
  type: 'list',
  entityType: 'page',
  query: {
    pageSize: 50 // 你可以调整这个值
  },
  accessToken: 'YOUR_ACCESS_TOKEN'
};

// 发送请求
const response = await sendApiRequest(request);

if (response.success) {
  const pages = response.data;
  // 从每个页面提取标签
  pages.forEach(page => {
    console.log(`页面 "${page.title}" 的标签:`, page.tags);
  });
}
```

## 方法三：使用补丁后的 `tags` 请求类型

如果已经应用了 API 补丁，可以直接使用 `tags` 请求类型获取所有唯一标签：

```javascript
const request = {
  type: 'tags',
  entityType: 'page',
  accessToken: 'YOUR_ACCESS_TOKEN'
};

// 发送请求
const response = await sendApiRequest(request);

if (response.success) {
  const allTags = response.data; // 获取所有唯一标签的数组
  console.log('所有标签:', allTags);
}
```

## 方法四：按标签筛选页面

通过 `list` 请求并使用 `filter` 查询参数来按标签筛选页面：

```javascript
const request = {
  type: 'list',
  entityType: 'page',
  query: {
    filter: {
      tags: 'work' // 单个标签
      // 或者使用数组筛选多个标签
      // tags: ['work', 'important']
    },
    pageSize: 50
  },
  accessToken: 'YOUR_ACCESS_TOKEN'
};

// 发送请求
const response = await sendApiRequest(request);

if (response.success) {
  const filteredPages = response.data;
  console.log(`找到 ${filteredPages.length} 个带有指定标签的页面`);
}
```

## 方法五：使用 extension-console-test.js 中的便捷函数

在扩展的背景页控制台中运行 `extension-console-test.js` 脚本后，你可以使用以下便捷函数：

1. **获取完整页面信息**
   ```javascript
   const page = await getCompletePage('PAGE_ID');
   console.log('页面标签:', page.tags);
   ```

2. **获取所有页面及其标签**
   ```javascript
   const { items } = await getAllPagesWithTags();
   console.log('所有页面:', items);
   ```

3. **获取所有唯一标签（变通方法）**
   ```javascript
   const tags = await getAllTagsWorkaround();
   console.log('所有标签:', tags);
   ```

4. **按标签筛选页面**
   ```javascript
   // 单个标签
   const { items } = await filterPagesByTags('work');
   // 或者多个标签
   const { items } = await filterPagesByTags(['work', 'important']);
   console.log('筛选后的页面:', items);
   ```

## 修复API问题

如果 `tags` 请求类型不起作用，在扩展的背景页控制台中运行 `api-service-patch.js` 脚本，应用补丁使 `tags` 请求类型正常工作。补丁会动态修改API处理函数，支持以下功能：

1. 添加对 `tags` 请求类型的支持
2. 确保 `SavedPagesDB` 类具有 `getAllTags` 方法
3. 提供回退机制，即使在原始代码不支持的情况下也能正常工作

补丁应用后，你可以使用 `testTagsApiPatch()` 函数测试它是否正常工作。

## 使用说明

1. 在正常API中，使用方法一、二和四是最可靠的
2. 如果你需要获取所有标签，可以应用API补丁，然后使用方法三
3. 对于在扩展内部进行测试和调试，使用方法五最为方便 