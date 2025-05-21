# 下载管理功能增强设计

## 背景

当前的自动保存功能在以下情况下存在问题：
- 浏览器长时间不活动后，自动保存任务不会继续执行
- 用户无法知道哪些页面被过滤掉了，哪些正在等待下载
- 任务状态只存储在内存中，浏览器重启或休眠后丢失
- 缺乏详细的状态可视化和诊断功能

本文档详细规划了自动保存功能的增强实现方案，旨在解决上述问题，提高功能的可靠性和用户体验。

## 1. 任务状态持久化

### 1.1 设计目标

将自动保存任务状态从仅内存存储改为持久化存储，确保浏览器重启或从休眠状态恢复时能够恢复任务状态。

### 1.2 数据结构

```typescript
// 持久化的任务状态
interface PersistentSaveTask {
  tabId: number;
  url: string;
  title?: string;
  createdAt: number;      // 创建时间
  scheduledAt: number;    // 计划保存时间
  status: SaveTaskStatus; // 任务状态
  error?: string;         // 错误信息（如果有）
  matchedRule?: string;   // 匹配的规则
  filtered: boolean;      // 是否被过滤
  filterReason?: string;  // 过滤原因
}

// 持久化的任务列表
interface PersistentSaveTasks {
  tasks: PersistentSaveTask[];
  lastUpdated: number;    // 最后更新时间
  version: string;        // 数据版本，用于未来兼容性
}
```

### 1.3 存储键名

```typescript
const TASKS_STORAGE_KEY = 'auto_save_tasks';
```

### 1.4 实现步骤

1. 修改 `setupAutoSaveTask` 函数，将任务信息同时保存到本地存储
2. 修改 `clearAutoSaveTask` 函数，同时从本地存储中删除任务
3. 添加 `persistTasks` 和 `loadTasks` 函数，用于任务状态的保存和加载
4. 修改 `initAutoSave` 函数，在初始化时加载持久化的任务状态
5. 实现任务状态定期保存机制，确保状态及时更新

### 1.5 代码示例

```typescript
// 保存任务状态到存储
const persistTasks = async (): Promise<void> => {
  const tasks = Array.from(saveTasks.values()).map(task => ({
    tabId: task.tabId,
    url: task.url,
    title: task.title,
    createdAt: task.createdAt,
    scheduledAt: task.scheduledAt,
    status: task.status,
    error: task.error,
    matchedRule: task.matchedRule,
    filtered: task.filtered,
    filterReason: task.filterReason
  }));

  const persistentData: PersistentSaveTasks = {
    tasks,
    lastUpdated: Date.now(),
    version: '1.0'
  };

  await storage.set(TASKS_STORAGE_KEY, persistentData);
  logger.debug('已保存自动保存任务状态到存储', { taskCount: tasks.length });
};

// 从存储加载任务状态
const loadTasks = async (): Promise<void> => {
  try {
    const persistentData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);
    
    if (!persistentData || !persistentData.tasks) {
      logger.debug('存储中没有保存的任务状态');
      return;
    }

    logger.info(`从存储加载了 ${persistentData.tasks.length} 个自动保存任务`);
    
    // 清除当前内存中的任务
    saveTasks.forEach((_, tabId) => {
      clearTimeout(saveTasks.get(tabId)?.timeoutId);
    });
    saveTasks.clear();

    // 恢复任务状态
    for (const task of persistentData.tasks) {
      // 检查标签页是否仍然存在
      try {
        const tab = await browser.tabs.get(task.tabId);
        if (!tab || !tab.url) continue;

        // 如果任务状态是等待中，且计划时间尚未到达，重新设置定时器
        if (task.status === SaveTaskStatus.WAITING && task.scheduledAt > Date.now()) {
          setupAutoSaveTask(task.tabId, task);
        } 
        // 如果任务已过期但未执行，立即执行
        else if (task.status === SaveTaskStatus.WAITING && task.scheduledAt <= Date.now()) {
          autoSavePage(task.tabId);
        }
      } catch (error) {
        // 标签页不存在，忽略此任务
        logger.debug(`标签页 ${task.tabId} 不存在，忽略恢复任务`, { url: task.url });
      }
    }
  } catch (error) {
    logger.error('从存储加载任务状态失败:', error);
  }
};
```

## 2. 活动检测和恢复机制

### 2.1 设计目标

实现机制检测浏览器活动状态，确保在浏览器从休眠状态恢复时能够恢复自动保存功能。

### 2.2 实现方法

1. 添加心跳机制，定期检查扩展是否正常运行
2. 监听浏览器可见性变化事件
3. 监听浏览器启动和安装事件
4. 实现任务状态恢复逻辑

### 2.3 代码示例

```typescript
// 心跳检查
const HEARTBEAT_INTERVAL = 5 * 60 * 1000; // 5分钟
let lastHeartbeat = Date.now();
let heartbeatIntervalId: number;

const startHeartbeat = (): void => {
  // 清除可能存在的旧定时器
  if (heartbeatIntervalId) {
    clearInterval(heartbeatIntervalId);
  }

  // 设置新的心跳检查
  heartbeatIntervalId = setInterval(() => {
    const now = Date.now();
    const timeSinceLastHeartbeat = now - lastHeartbeat;
    
    // 如果上次心跳时间距离现在超过了两倍的心跳间隔，说明可能发生了休眠
    if (timeSinceLastHeartbeat > HEARTBEAT_INTERVAL * 2) {
      logger.info('检测到可能的系统休眠，重新初始化自动保存功能', {
        timeSinceLastHeartbeat: Math.floor(timeSinceLastHeartbeat / 1000) + '秒'
      });
      
      // 重新加载任务状态并检查所有标签页
      loadTasks().then(() => {
        checkAllTabs();
      });
    }
    
    lastHeartbeat = now;
  }, HEARTBEAT_INTERVAL);
  
  logger.debug('已启动自动保存心跳检查机制');
};

// 检查所有打开的标签页
const checkAllTabs = async (): Promise<void> => {
  try {
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    
    // 如果自动保存功能已启用且未暂停，为所有打开的标签页设置自动保存任务
    if (settings?.enabled && !settings.paused) {
      const tabs = await browser.tabs.query({});
      logger.info(`检查所有标签页，共 ${tabs.length} 个标签页`);
      
      tabs.forEach(tab => {
        if (tab.id) setupAutoSaveTask(tab.id);
      });
    }
  } catch (error) {
    logger.error('检查所有标签页时出错:', error);
  }
};

// 在初始化函数中添加事件监听
const initAutoSave = (): void => {
  // ... 现有代码 ...
  
  // 启动心跳检查
  startHeartbeat();
  
  // 监听可见性变化
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        logger.debug('页面变为可见，检查自动保存状态');
        loadTasks().then(() => {
          checkAllTabs();
        });
      }
    });
  }
  
  // ... 现有代码 ...
};
```

## 3. 增强下载队列UI

### 3.1 设计目标

改进下载队列UI，提供更详细的任务状态信息，包括被过滤的URL、匹配规则情况等。

### 3.2 UI组件增强

1. 添加被过滤URL的显示
2. 显示每个URL匹配的规则
3. 添加任务历史记录
4. 提供更详细的状态信息

### 3.3 实现步骤

1. 修改 `DownloadQueue.tsx` 组件，添加新的UI元素
2. 实现任务历史记录功能
3. 增强任务状态的展示

### 3.4 UI设计示例

```tsx
// 在DownloadQueue.tsx中添加新的部分
const DownloadQueue: React.FC = () => {
  // ... 现有代码 ...
  
  // 添加过滤URL状态
  const [filteredUrls, setFilteredUrls] = useState<PersistentSaveTask[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [taskHistory, setTaskHistory] = useState<PersistentSaveTask[]>([]);
  
  // 加载任务列表和过滤的URL
  useEffect(() => {
    const loadTasksAndFiltered = async () => {
      // 加载当前任务
      const allTasks = getAllSaveTasks();
      setTasks(allTasks);
      
      // 加载被过滤的URL
      const persistentData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);
      if (persistentData && persistentData.tasks) {
        const filtered = persistentData.tasks.filter(task => task.filtered);
        setFilteredUrls(filtered);
        
        // 加载历史记录
        const history = persistentData.tasks.filter(
          task => task.status === SaveTaskStatus.COMPLETED || task.status === SaveTaskStatus.FAILED
        );
        setTaskHistory(history);
      }
    };
    
    loadTasksAndFiltered();
    
    // 设置定时刷新
    const intervalId = setInterval(() => {
      loadTasksAndFiltered();
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [refreshKey]);
  
  // ... 现有代码 ...
  
  return (
    <Card title={<Title level={4}>下载队列</Title>} className="mb-4">
      {/* 添加统计信息 */}
      <div className="mb-4">
        <Space>
          <Statistic title="等待中" value={waitingTasks.length} />
          <Statistic title="保存中" value={savingTasks.length} />
          <Statistic title="已完成" value={completedTasks.length} />
          <Statistic title="失败" value={failedTasks.length} />
          <Statistic title="被过滤" value={filteredUrls.length} />
        </Space>
      </div>
      
      {/* 现有任务列表 */}
      {/* ... 现有代码 ... */}
      
      {/* 添加被过滤的URL列表 */}
      {filteredUrls.length > 0 && (
        <div className="mb-4">
          <Collapse>
            <Collapse.Panel 
              header={`被过滤的URL (${filteredUrls.length})`} 
              key="filtered"
            >
              <List
                size="small"
                bordered
                dataSource={filteredUrls}
                renderItem={task => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <Space>
                          <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                          <Tag color="warning">已过滤</Tag>
                        </Space>
                      }
                      description={
                        <div>
                          <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
                          {task.filterReason && (
                            <div className="mt-1">
                              <Text type="secondary">过滤原因: {task.filterReason}</Text>
                            </div>
                          )}
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Collapse.Panel>
          </Collapse>
        </div>
      )}
      
      {/* 添加历史记录 */}
      <div className="mb-4">
        <Button 
          type="link" 
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? '隐藏历史记录' : '显示历史记录'}
        </Button>
        
        {showHistory && taskHistory.length > 0 && (
          <List
            size="small"
            bordered
            header={<div>历史记录 ({taskHistory.length})</div>}
            dataSource={taskHistory}
            renderItem={task => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Space>
                      <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                      {task.status === SaveTaskStatus.COMPLETED ? (
                        <Tag color="success">已完成</Tag>
                      ) : (
                        <Tag color="error">失败</Tag>
                      )}
                    </Space>
                  }
                  description={
                    <div>
                      <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
                      <div className="mt-1">
                        <Text type="secondary">
                          {new Date(task.createdAt).toLocaleString()} 
                          {task.matchedRule && ` - 匹配规则: ${task.matchedRule}`}
                        </Text>
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </Card>
  );
};
```

## 4. 诊断和调试功能

### 4.1 设计目标

添加诊断和调试功能，帮助用户了解自动保存功能的工作状态。

### 4.2 实现方法

1. 添加状态指示器
2. 增强日志记录
3. 添加手动触发功能

### 4.3 代码示例

```typescript
// 添加状态指示器
export const updateAutoSaveStatus = (status: string, details?: string): void => {
  browser.action.setBadgeText({ text: status });
  
  if (status === 'ON') {
    browser.action.setBadgeBackgroundColor({ color: '#4CAF50' }); // 绿色
  } else if (status === 'OFF') {
    browser.action.setBadgeBackgroundColor({ color: '#F44336' }); // 红色
  } else if (status === 'PAUSE') {
    browser.action.setBadgeBackgroundColor({ color: '#FFC107' }); // 黄色
  }
  
  if (details) {
    browser.action.setTitle({ title: details });
  }
};

// 在设置变更时更新状态
storage.watch({
  [STORAGE_KEY]: async (change) => {
    const newSettings = change?.newValue as AutoSaveSettings | undefined;
    
    if (!newSettings || !newSettings.enabled) {
      updateAutoSaveStatus('OFF', '自动保存功能已禁用');
    } else if (newSettings.paused) {
      updateAutoSaveStatus('PAUSE', '自动保存功能已暂停');
    } else {
      updateAutoSaveStatus('ON', '自动保存功能已启用');
    }
    
    // ... 现有代码 ...
  }
});

// 添加手动触发功能
export const manualCheckAllTabs = async (): Promise<{
  checked: number;
  setup: number;
  filtered: number;
}> => {
  try {
    const tabs = await browser.tabs.query({});
    let checkedCount = 0;
    let setupCount = 0;
    let filteredCount = 0;
    
    for (const tab of tabs) {
      if (!tab.id || !tab.url) continue;
      
      checkedCount++;
      
      // 检查URL是否应该自动保存
      const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
      if (!settings || !settings.enabled || settings.paused) continue;
      
      const shouldSave = await shouldAutoSaveUrl(tab.url, settings);
      if (shouldSave) {
        setupAutoSaveTask(tab.id);
        setupCount++;
      } else {
        // 记录被过滤的URL
        const filteredTask: PersistentSaveTask = {
          tabId: tab.id,
          url: tab.url,
          title: tab.title,
          createdAt: Date.now(),
          scheduledAt: 0,
          status: SaveTaskStatus.WAITING,
          filtered: true,
          filterReason: '不匹配任何规则'
        };
        
        // 保存到过滤列表
        const persistentData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY) || { 
          tasks: [], 
          lastUpdated: Date.now(), 
          version: '1.0' 
        };
        
        persistentData.tasks = persistentData.tasks.filter(t => t.tabId !== tab.id);
        persistentData.tasks.push(filteredTask);
        persistentData.lastUpdated = Date.now();
        
        await storage.set(TASKS_STORAGE_KEY, persistentData);
        filteredCount++;
      }
    }
    
    return { checked: checkedCount, setup: setupCount, filtered: filteredCount };
  } catch (error) {
    logger.error('手动检查所有标签页时出错:', error);
    return { checked: 0, setup: 0, filtered: 0 };
  }
};
```

## 5. 实现计划

### 5.1 文件修改

1. `src/services/auto-save.ts`
   - 添加任务状态持久化功能
   - 实现活动检测和恢复机制
   - 增强任务状态跟踪
   - 添加诊断和调试功能

2. `src/components/Option/SavedPages/DownloadQueue.tsx`
   - 增强下载队列UI
   - 添加被过滤URL的显示
   - 添加任务历史记录

3. `src/entries/background.ts`
   - 添加状态指示器更新
   - 实现心跳检查机制

### 5.2 实施步骤

1. 实现任务状态持久化
2. 添加活动检测和恢复机制
3. 增强下载队列UI
4. 添加诊断和调试功能
5. 测试和调试

### 5.3 测试计划

1. 测试浏览器重启后的任务恢复
2. 测试系统休眠后的功能恢复
3. 测试UI增强功能
4. 测试诊断和调试功能

## 6. 总结

本设计文档详细规划了自动保存功能的增强实现方案，通过任务状态持久化、活动检测和恢复机制、增强下载队列UI以及诊断和调试功能，解决了当前自动保存功能在长时间不活动后不工作的问题，并提供了更好的用户体验。
