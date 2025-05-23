# 下载队列功能增强设计

## 1. 需求概述

下载队列是Page Flow浏览器扩展的核心功能，用于跟踪所有网页收集的历史记录。本文档详细描述下载队列功能的需求、设计和实现方案。

### 1.1 基本需求

下载队列功能应当满足以下基本需求：

1. **任务跟踪**：记录所有页面保存任务的来源、状态和结果
   - 手动保存（用户右键菜单）
   - 自动保存（基于规则、延迟保存）
   - 批量保存（保存所有打开标签页）

2. **状态管理**：展示任务的不同状态
   - 等待中（计划在稍后保存）
   - 保存中（正在进行中）
   - 已完成（成功保存）
   - 失败（保存过程中出错）
   - 被过滤（被规则或其他条件过滤）

3. **历史记录**：保存所有历史任务，包括成功、失败和被过滤的任务

4. **详细日志**：记录每个任务的详细信息，包括URL、标题、来源、过滤原因等

## 2. 功能增强要点

当前的下载队列功能存在几个问题需要改进：

1. **完善的任务持久化**：确保任务在浏览器重启或崩溃后仍能恢复
2. **详细的任务状态信息**：提供更详细的任务执行步骤和状态信息
3. **增强的调试和诊断能力**：便于开发者和用户诊断问题
4. **更全面的控制台日志**：为开发和调试提供详细日志，特别是关于任务URL、标题和状态的信息

## 3. 数据结构设计

### 3.1 保存任务类型

```typescript
// 保存任务来源枚举
export enum TaskSource {
  MANUAL = 'manual',           // 手动保存
  AUTO_RULE = 'auto_rule',     // 规则自动保存
  AUTO_TABS = 'auto_tabs',     // 保存所有标签页
  UNKNOWN = 'unknown'          // 未知来源
}

// 保存任务状态枚举
export enum SaveTaskStatus {
  WAITING = 'waiting',   // 等待中
  SAVING = 'saving',     // 保存中
  COMPLETED = 'completed', // 已完成
  FAILED = 'failed'      // 失败
}

// 保存任务类型
export interface SaveTask {
  tabId: number;
  url: string;
  title?: string;
  timeoutId: NodeJS.Timeout | number | unknown;  // 支持NodeJS.Timeout和数字标识符
  createdAt: number;      // 创建时间
  scheduledAt: number;    // 计划保存时间
  status: SaveTaskStatus; // 任务状态
  error?: string;         // 错误信息（如果有）
  matchedRule?: string;   // 匹配的规则
  source?: TaskSource;    // 任务来源
  sourceInfo?: string;    // 来源详细信息
  steps?: SaveTaskStep[]; // 保存步骤记录
}

// 持久化的任务状态
export interface PersistentSaveTask {
  tabId: number;
  url: string;
  title?: string;         // 可选标题
  createdAt: number;      // 创建时间
  scheduledAt: number;    // 计划保存时间
  status: SaveTaskStatus; // 任务状态
  error?: string;         // 错误信息（如果有）
  matchedRule?: string;   // 匹配的规则
  filtered: boolean;      // 是否被过滤
  filterReason?: string;  // 过滤原因
  source?: TaskSource;    // 任务来源
  sourceInfo?: string;    // 来源详细信息
  steps?: SaveTaskStep[]; // 保存步骤记录
}

// 保存任务步骤
export interface SaveTaskStep {
  step: string;          // 步骤名称
  timestamp: number;     // 时间戳
  status: 'success' | 'failed' | 'in_progress'; // 步骤状态
  message?: string;      // 相关信息
}

// 持久化的任务列表
export interface PersistentSaveTasks {
  tasks: PersistentSaveTask[];
  lastUpdated: number;    // 最后更新时间
  version: string;        // 数据版本，用于未来兼容性
}
```

### 3.2 UI组件数据结构

```typescript
// 扩展的任务类型，包含UI展示所需的信息
interface EnhancedSaveTask extends SaveTask {
  progressStep?: string;       // 当前进行的步骤（对于保存中的任务）
  progressPercent?: number;    // 当前步骤的进度百分比
}
```

## 4. 功能实现

### 4.1 任务持久化

所有的保存任务都需要持久化到本地存储，以确保浏览器重启或崩溃后任务状态仍能正确恢复。

```typescript
// 保存任务状态到存储
const persistTasks = async (): Promise<void> => {
  try {
    // 转换当前任务为持久化格式
    const persistentTasks: PersistentSaveTask[] = [];
    
    // 遍历当前任务映射
    for (const [tabId, task] of saveTasks.entries()) {
      // 确定是否是被过滤的任务
      const isFiltered = task.timeoutId === -1;
      
      // 构建持久化任务对象
      const persistentTask: PersistentSaveTask = {
        tabId: task.tabId,
        url: task.url,
        title: task.title,
        createdAt: task.createdAt,
        scheduledAt: task.scheduledAt,
        status: task.status,
        error: task.error,
        matchedRule: task.matchedRule,
        filtered: isFiltered,
        filterReason: isFiltered ? (task.sourceInfo || '未知原因') : undefined,
        source: task.source,
        sourceInfo: task.sourceInfo,
        steps: task.steps
      };
      
      persistentTasks.push(persistentTask);
    }
    
    // 保留历史记录（已完成和失败的任务）
    const previousData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);
    
    let historicalTasks: PersistentSaveTask[] = [];
    if (previousData && previousData.tasks) {
      // 获取已完成和失败的任务记录
      historicalTasks = previousData.tasks.filter(task => 
        (task.status === SaveTaskStatus.COMPLETED || task.status === SaveTaskStatus.FAILED) &&
        // 避免任务重复，只保留当前内存中没有的任务
        !saveTasks.has(task.tabId)
      );
    }
    
    // 创建持久化数据结构，合并当前任务和历史任务
    const persistentData: PersistentSaveTasks = {
      tasks: [...persistentTasks, ...historicalTasks],
      lastUpdated: Date.now(),
      version: '1.2'
    };
    
    // 保存到存储
    await storage.set(TASKS_STORAGE_KEY, persistentData);
    
    // 记录详细日志
    logger.debug(`保存了 ${persistentTasks.length} 个当前任务和 ${historicalTasks.length} 个历史任务到持久化存储`);
  } catch (error) {
    logger.error('保存任务到持久化存储失败:', error);
  }
};
```

### 4.2 记录被过滤的URL

当URL因为各种原因被过滤不进行保存时，需要记录这些信息，以便用户了解哪些URL没有被保存以及原因。

```typescript
// 记录被过滤的URL
const recordFilteredUrl = async (
  tabId: number, 
  url: string, 
  title: string, 
  reason: string,
  source: TaskSource = TaskSource.UNKNOWN,
  sourceInfo?: string
): Promise<void> => {
  try {
    // 创建一个虚拟任务来记录被过滤的URL
    const virtualTask: SaveTask = {
      tabId,
      url,
      title,
      timeoutId: -1, // 使用-1表示这是一个虚拟任务（被过滤的URL）
      createdAt: Date.now(),
      scheduledAt: Date.now(),
      status: SaveTaskStatus.WAITING,
      source,
      sourceInfo: sourceInfo || reason
    };

    // 将虚拟任务添加到任务列表
    saveTasks.set(tabId, virtualTask);
    
    // 持久化任务状态
    await persistTasks();

    // 记录详细日志
    logger.debug(`记录了被过滤的URL: ${title} (${url}), 原因: ${reason}`);
    console.log(`页面被过滤: ${title || url}, 原因: ${reason}`);
  } catch (error) {
    logger.error(`记录被过滤的URL失败:`, error);
  }
};
```

### 4.3 增强的控制台日志

为了便于开发和调试，需要在关键操作处添加详细的控制台日志，特别是关于任务URL、标题和过滤状态的信息。

```typescript
// 在setupAutoSaveTask函数中
logger.debug(`为标签页 ${tabId} 设置自动保存任务`, {
  url,
  title,
  source,
  sourceInfo
});

// 使用console.log输出更简洁的信息，便于调试
console.log(`设置保存任务: ${title || url}, 来源: ${source}`);
```

```typescript
// 在isUrlAlreadySaved函数中
const isUrlAlreadySaved = async (url: string): Promise<boolean> => {
  try {
    const savedPages = await getAllSavedPages({ searchText: url });
    const isAlreadySaved = savedPages.some(page => page.url === url);
    
    // 添加详细日志
    if (isAlreadySaved) {
      console.log(`URL已存在: ${url}`);
    }
    
    return isAlreadySaved;
  } catch (error) {
    logger.error('检查URL是否已保存时出错:', error);
    return false;
  }
};
```

### 4.4 步骤记录

为了更好地追踪任务执行过程，每个任务会记录详细的执行步骤和状态。

```typescript
// 在autoSavePage函数中添加步骤记录
if (task) {
  task.steps = task.steps || [];
  task.steps.push({
    step: '初始化',
    timestamp: Date.now(),
    status: 'in_progress',
    message: '开始保存页面'
  });
  saveTasks.set(tabId, task);
  await persistTasks();
}

// 记录URL检查步骤
if (task) {
  task.steps?.push({
    step: '检查URL是否已保存',
    timestamp: Date.now(),
    status: 'success',
    message: 'URL已经保存过，跳过重复保存'
  });
  saveTasks.set(tabId, task);
  await persistTasks();
}
```

## 5. UI 实现

### 5.1 下载队列视图

下载队列UI需要提供以下视图：

1. **活跃任务**: 显示当前处于等待中和保存中的任务
2. **历史记录**: 显示已完成、失败和被过滤的任务
3. **任务详情**: 显示任务的详细信息和执行步骤

```tsx
<Tabs activeKey={activeTab} onChange={setActiveTab}>
  <TabPane 
    tab={
      <span>
        <Badge count={activeTasks.length} overflowCount={99} size="small">
          <Text>活跃任务</Text>
        </Badge>
      </span>
    } 
    key="active"
  >
    {/* 等待中的任务 */}
    {waitingTasks.length > 0 && (
      <div className="mb-4">
        <Title level={5}>等待中的任务 ({waitingTasks.length})</Title>
        <List
          size="small"
          bordered
          dataSource={waitingTasks}
          renderItem={task => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Space>
                    <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                    {getStatusTag(task)}
                    {getSourceTag(task)}
                  </Space>
                }
                description={
                  <div>
                    <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
                    <div className="mt-1">
                      <Progress
                        percent={calculateProgress(task)}
                        size="small"
                        status="active"
                        format={() => formatRemainingTime(task)}
                      />
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    )}
  </TabPane>
  
  {/* 历史记录标签页 */}
  <TabPane 
    tab={
      <span>
        <Badge count={historyTasks.length} overflowCount={99} size="small">
          <Text>历史记录</Text>
        </Badge>
      </span>
    } 
    key="history"
  >
    <Tabs activeKey={historyTab} onChange={setHistoryTab}>
      <TabPane tab={`全部记录 (${historyTasks.length})`} key="all" />
      <TabPane tab={`已完成 (${completedTasks.length})`} key="completed" />
      <TabPane tab={`失败 (${failedTasks.length})`} key="failed" />
      <TabPane tab={`被过滤 (${filteredTasks.length})`} key="filtered" />
    </Tabs>
  </TabPane>
</Tabs>
```

### 5.2 任务步骤详情模态框

```tsx
// 显示步骤详情模态框
const showStepsModal = (task: EnhancedSaveTask) => {
  setCurrentTaskWithSteps(task);
  setStepsModalVisible(true);
};

// 步骤详情模态框
<Modal
  title="任务步骤详情"
  open={stepsModalVisible}
  onCancel={() => setStepsModalVisible(false)}
  footer={[
    <Button key="close" onClick={() => setStepsModalVisible(false)}>
      关闭
    </Button>
  ]}
>
  {currentTaskWithSteps && (
    <div>
      <div className="mb-4">
        <div className="font-medium">{currentTaskWithSteps.title || '无标题'}</div>
        <div className="text-xs text-gray-500">{currentTaskWithSteps.url}</div>
      </div>
      
      <Timeline>
        {currentTaskWithSteps.steps?.map((step, index) => (
          <Timeline.Item
            key={index}
            color={
              step.status === 'success' 
                ? 'green' 
                : step.status === 'failed' 
                ? 'red' 
                : 'blue'
            }
          >
            <div>
              <div className="font-medium">{step.step}</div>
              <div className="text-xs text-gray-500">
                {new Date(step.timestamp).toLocaleString()}
              </div>
              {step.message && (
                <div className="mt-1 text-sm">{step.message}</div>
              )}
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )}
</Modal>
```

## 6. 实现计划和优先级

实现下载队列功能的优先级如下：

1. **任务持久化** - 确保任务状态能够恢复
2. **增强控制台日志** - 提供详细的日志信息
3. **任务步骤记录** - 实现详细的步骤记录
4. **UI组件增强** - 改进下载队列UI，展示更多信息

### 具体任务列表：

1. 修改 `isUrlAlreadySaved` 函数，增加详细日志
2. 修改 `recordFilteredUrl` 函数，增加控制台日志
3. 增强 `persistTasks` 和 `loadTasks` 函数，确保任务正确持久化
4. 在关键流程中添加任务步骤记录
5. 增强下载队列UI组件，展示更多任务信息
6. 实现任务步骤详情模态框

## 7. 测试计划

为确保下载队列功能正常工作，需要进行以下测试：

1. **功能测试**:
   - 测试手动保存页面流程
   - 测试自动保存功能（基于规则、延迟保存）
   - 测试批量保存（保存所有打开标签页）
   - 测试历史记录功能

2. **持久化测试**:
   - 测试浏览器重启后任务状态是否正确恢复
   - 测试任务历史记录是否正确保存

3. **UI测试**:
   - 测试下载队列UI展示是否正确
   - 测试任务步骤详情模态框是否正常工作

## 8. 总结

通过以上设计和实现，下载队列功能将能够全面跟踪和记录所有网页收集活动，提供详细的任务状态和历史记录，便于用户了解自动保存和手动保存的结果，同时也为开发者提供更好的调试和诊断能力。 