import React, { useState, useEffect, useCallback } from 'react';
import { Card, List, Tag, Typography, Button, Tooltip, Empty, Progress, Space, Statistic, Collapse, Tabs, Select, DatePicker, Badge, Table, Input, Modal, Timeline, Switch } from 'antd';
import {
  ClockCircleOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  FilterOutlined,
  HistoryOutlined,
  ReloadOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  ClearOutlined,
  LinkOutlined,
  CalendarOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { getAllSaveTasks, clearAutoSaveTask, SaveTaskStatus, manualCheckAllTabs, TaskSource } from '@/services/auto-save';
import type { SaveTask, SaveTaskStep } from '@/services/auto-save';
import { useTranslation } from "react-i18next";
import dayjs from 'dayjs';
import SaveSourceTag from './SaveSourceTag';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

// 扩展的任务类型，包含来源信息
interface EnhancedSaveTask extends SaveTask {
  progressStep?: string;       // 当前进行的步骤（对于保存中的任务）
  progressPercent?: number;    // 当前步骤的进度百分比
  steps?: SaveTaskStep[];      // 任务步骤记录
}

/**
 * 下载队列组件
 * 显示当前准备下载的页面和正在下载的页面，以及历史记录
 */
const DownloadQueue: React.FC = () => {
  const { t } = useTranslation(["settings", "common"]);
  const [tasks, setTasks] = useState<EnhancedSaveTask[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeTab, setActiveTab] = useState('active');
  const [historyTab, setHistoryTab] = useState('all');
  const [checkingTabs, setCheckingTabs] = useState(false);
  const [checkStats, setCheckStats] = useState<{
    checked: number;
    setup: number;
    filtered: number;
  } | null>(null);
  
  // 搜索和筛选状态
  const [searchText, setSearchText] = useState('');
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null] | null>(null);
  const [sourceFilter, setSourceFilter] = useState<TaskSource | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<SaveTaskStatus | 'all'>('all');

  // 步骤详情模态框状态
  const [stepsModalVisible, setStepsModalVisible] = useState(false);
  const [currentTaskWithSteps, setCurrentTaskWithSteps] = useState<EnhancedSaveTask | null>(null);
  
  // 自动刷新状态
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // 加载任务列表
  const loadTasks = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const allTasks = await getAllSaveTasks();
      console.log('下载队列任务数量:', allTasks.length);
      
      // 扩展任务信息，添加进度信息
      const enhancedTasks: EnhancedSaveTask[] = allTasks.map(task => {
        // 为保存中的任务添加模拟进度信息
        let progressStep;
        let progressPercent;
        
        if (task.status === SaveTaskStatus.SAVING) {
          // 根据时间计算一个模拟进度
          const elapsedTime = Date.now() - task.scheduledAt;
          if (elapsedTime < 1000) {
            progressStep = "初始化";
            progressPercent = 10;
          } else if (elapsedTime < 2000) {
            progressStep = "获取页面内容";
            progressPercent = 30;
          } else if (elapsedTime < 3000) {
            progressStep = "解析页面";
            progressPercent = 50;
          } else if (elapsedTime < 4000) {
            progressStep = "提取关键信息";
            progressPercent = 70;
          } else {
            progressStep = "保存到数据库";
            progressPercent = 90;
          }
        }
        
        return {
          ...task,
          progressStep,
          progressPercent
        };
      });
      
      setTasks(enhancedTasks);
    } catch (error) {
      console.error('加载下载队列任务失败:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // 初始加载和自动刷新
  useEffect(() => {
    // 初始加载
    loadTasks();

    // 设置定时刷新
    const intervalId = setInterval(() => {
      loadTasks();
    }, 1000); // 每秒刷新一次

    return () => {
      clearInterval(intervalId);
    };
  }, [refreshKey, loadTasks]);
  
  // 自动刷新效果
  useEffect(() => {
    let intervalId: number;
    
    if (autoRefresh) {
      intervalId = window.setInterval(() => {
        setRefreshKey(prev => prev + 1);
      }, 60000); // 每分钟刷新一次
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoRefresh]);

  // 手动刷新
  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  // 取消任务
  const handleCancelTask = async (tabId: number) => {
    await clearAutoSaveTask(tabId);
    // 触发刷新
    setRefreshKey(prev => prev + 1);
  };

  // 手动检查所有标签页
  const handleCheckAllTabs = async () => {
    setCheckingTabs(true);
    try {
      const stats = await manualCheckAllTabs();
      setCheckStats(stats);
      // 触发刷新
      setRefreshKey(prev => prev + 1);
    } catch (error) {
      console.error('手动检查所有标签页失败:', error);
    } finally {
      setCheckingTabs(false);
    }
  };

  // 获取任务状态标签
  const getStatusTag = (task: EnhancedSaveTask) => {
    // 检查是否是被过滤的任务（timeoutId === -1 是虚拟的timeoutId，表示被过滤的任务）
    if (task.timeoutId === -1) {
      return <Tag color="warning" icon={<FilterOutlined />}>已过滤</Tag>;
    }

    switch (task.status) {
      case SaveTaskStatus.WAITING:
        return <Tag color="blue" icon={<ClockCircleOutlined />}>等待中</Tag>;
      case SaveTaskStatus.SAVING:
        return <Tag color="processing" icon={<LoadingOutlined />}>保存中</Tag>;
      case SaveTaskStatus.COMPLETED:
        return <Tag color="success" icon={<CheckCircleOutlined />}>已完成</Tag>;
      case SaveTaskStatus.FAILED:
        return <Tag color="error" icon={<CloseCircleOutlined />}>失败</Tag>;
      default:
        return <Tag>未知状态</Tag>;
    }
  };

  // 获取任务来源标签
  const getSourceTag = (task: EnhancedSaveTask) => (
    <SaveSourceTag source={task.source} sourceInfo={task.sourceInfo} />
  );

  // 计算等待进度
  const calculateProgress = (task: EnhancedSaveTask) => {
    if (task.status !== SaveTaskStatus.WAITING || task.timeoutId === -1) return 100;

    const now = Date.now();
    const elapsed = now - task.createdAt;
    const total = task.scheduledAt - task.createdAt;

    if (total <= 0) return 100;

    const progress = Math.min(Math.floor((elapsed / total) * 100), 99);
    return progress;
  };

  // 格式化剩余时间
  const formatRemainingTime = (task: EnhancedSaveTask) => {
    if (task.status !== SaveTaskStatus.WAITING || task.timeoutId === -1) return '';

    const now = Date.now();
    const remaining = Math.max(0, task.scheduledAt - now);

    if (remaining <= 0) return '即将保存';

    const seconds = Math.ceil(remaining / 1000);
    if (seconds < 60) {
      return `${seconds}秒后保存`;
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}分${remainingSeconds}秒后保存`;
    }
  };

  // 清除所有筛选条件
  const clearFilters = () => {
    setSearchText('');
    setDateRange(null);
    setSourceFilter('all');
    setStatusFilter('all');
  };

  // 筛选任务列表
  const filterTasks = (taskList: EnhancedSaveTask[]): EnhancedSaveTask[] => {
    return taskList.filter(task => {
      // 搜索文本筛选
      if (searchText && !(
        (task.title && task.title.toLowerCase().includes(searchText.toLowerCase())) ||
        task.url.toLowerCase().includes(searchText.toLowerCase())
      )) {
        return false;
      }
      
      // 日期范围筛选
      if (dateRange && dateRange[0] && dateRange[1]) {
        const taskDate = new Date(task.createdAt);
        const startDate = dateRange[0].toDate();
        const endDate = dateRange[1].toDate();
        endDate.setHours(23, 59, 59, 999); // 设置为当天结束
        
        if (taskDate < startDate || taskDate > endDate) {
          return false;
        }
      }
      
      // 来源类型筛选
      if (sourceFilter !== 'all' && task.source !== sourceFilter) {
        return false;
      }
      
      // 状态筛选
      if (statusFilter !== 'all' && task.status !== statusFilter) {
        return false;
      }
      
      return true;
    });
  };

  // 按状态对任务进行分组
  const waitingTasks = tasks.filter(task => task.status === SaveTaskStatus.WAITING && task.timeoutId !== -1);
  const savingTasks = tasks.filter(task => task.status === SaveTaskStatus.SAVING);
  const completedTasks = filterTasks(tasks.filter(task => task.status === SaveTaskStatus.COMPLETED));
  const failedTasks = filterTasks(tasks.filter(task => task.status === SaveTaskStatus.FAILED));
  const filteredTasks = filterTasks(tasks.filter(task => task.timeoutId === -1));

  // 活跃任务（等待中和保存中）
  const activeTasks = [...waitingTasks, ...savingTasks];
  
  // 获取历史记录任务列表（根据选择的子标签）
  const getHistoryTasks = () => {
    switch (historyTab) {
      case 'completed':
        return completedTasks;
      case 'failed':
        return failedTasks;
      case 'filtered':
        return filteredTasks;
      case 'all':
      default:
        return [...completedTasks, ...failedTasks, ...filteredTasks];
    }
  };

  // 历史记录表格列定义
  const historyColumns = [
    {
      title: '标题/URL',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: EnhancedSaveTask) => (
        <div>
          <div className="font-medium">{text || '无标题'}</div>
          <div className="text-xs text-gray-500 truncate" style={{ maxWidth: 300 }}>{record.url}</div>
        </div>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (_: any, record: EnhancedSaveTask) => getStatusTag(record),
    },
    {
      title: '来源',
      dataIndex: 'source',
      key: 'source',
      render: (_: any, record: EnhancedSaveTask) => getSourceTag(record),
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: number) => (
        <div>
          <div>{new Date(createdAt).toLocaleDateString()}</div>
          <div className="text-xs text-gray-500">{new Date(createdAt).toLocaleTimeString()}</div>
        </div>
      ),
    },
    {
      title: '详情',
      key: 'details',
      render: (_: any, record: EnhancedSaveTask) => (
        <Space>
          {record.steps && record.steps.length > 0 && (
            <Tooltip title="查看步骤详情">
              <Button 
                type="text" 
                size="small" 
                icon={<InfoCircleOutlined />} 
                onClick={() => showStepsModal(record)}
              />
            </Tooltip>
          )}
          {record.error && (
            <Tooltip title={record.error}>
              <Button type="text" danger size="small" icon={<InfoCircleOutlined />} />
            </Tooltip>
          )}
          <Tooltip title="在新标签页打开">
            <Button 
              type="text" 
              size="small" 
              icon={<LinkOutlined />} 
              onClick={() => window.open(record.url, '_blank')}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  // 显示步骤详情模态框
  const showStepsModal = (task: EnhancedSaveTask) => {
    setCurrentTaskWithSteps(task);
    setStepsModalVisible(true);
  };

  return (
    <>
      <Card
        title={<Title level={4}>下载队列</Title>}
        className="mb-4"
        extra={
          <Space>
            <Tooltip title="刷新列表">
              <Button
                icon={<ReloadOutlined spin={isRefreshing} />}
                onClick={handleRefresh}
                disabled={isRefreshing}
              />
            </Tooltip>
            <Tooltip title={autoRefresh ? "关闭自动刷新" : "开启自动刷新(每分钟)"}>
              <Switch
                checkedChildren="自动刷新"
                unCheckedChildren="手动刷新"
                checked={autoRefresh}
                onChange={setAutoRefresh}
              />
            </Tooltip>
            <Button
              type="primary"
              icon={<SyncOutlined />}
              onClick={handleCheckAllTabs}
              loading={checkingTabs}
            >
              检查所有标签页
            </Button>
          </Space>
        }
      >
        {/* 统计信息 */}
        <div className="mb-4">
          <Space size="large" wrap>
            <Statistic title="等待中" value={waitingTasks.length} />
            <Statistic title="保存中" value={savingTasks.length} />
            <Statistic title="已完成" value={completedTasks.length} />
            <Statistic title="失败" value={failedTasks.length} />
            <Statistic title="被过滤" value={filteredTasks.length} />
          </Space>
        </div>

        {/* 检查结果 */}
        {checkStats && (
          <div className="mb-4">
            <Collapse>
              <Collapse.Panel
                header={`最近检查结果: 检查了 ${checkStats.checked} 个标签页，设置了 ${checkStats.setup} 个任务，过滤了 ${checkStats.filtered} 个URL`}
                key="checkStats"
              >
                <Space direction="vertical">
                  <Text>检查了 {checkStats.checked} 个标签页</Text>
                  <Text>设置了 {checkStats.setup} 个自动保存任务</Text>
                  <Text>过滤了 {checkStats.filtered} 个不符合规则的URL</Text>
                </Space>
              </Collapse.Panel>
            </Collapse>
          </div>
        )}

        {/* 主要内容标签页 */}
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          {/* 活跃任务标签页 */}
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
            {activeTasks.length === 0 ? (
              <Empty description="当前没有活跃的下载任务" />
            ) : (
              <>
                {/* 等待中的任务 */}
                {waitingTasks.length > 0 && (
                  <div className="mb-4">
                    <Title level={5}>等待中的任务 ({waitingTasks.length})</Title>
                    <List
                      size="small"
                      bordered
                      dataSource={waitingTasks}
                      renderItem={task => (
                        <List.Item
                          actions={[
                            <Tooltip key="cancel" title="取消">
                              <Button
                                type="text"
                                danger
                                size="small"
                                icon={<DeleteOutlined />}
                                onClick={() => handleCancelTask(task.tabId)}
                              />
                            </Tooltip>,
                            <Tooltip key="open" title="在新标签页打开">
                              <Button
                                type="text"
                                size="small"
                                icon={<LinkOutlined />}
                                onClick={() => window.open(task.url, '_blank')}
                              />
                            </Tooltip>
                          ]}
                        >
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

                {/* 保存中的任务 */}
                {savingTasks.length > 0 && (
                  <div className="mb-4">
                    <Title level={5}>保存中的任务 ({savingTasks.length})</Title>
                    <List
                      size="small"
                      bordered
                      dataSource={savingTasks}
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
                                {task.progressStep && (
                                  <div className="mt-1">
                                    <Progress 
                                      percent={task.progressPercent || 0} 
                                      size="small" 
                                      status="active"
                                      format={() => task.progressStep}
                                    />
                                  </div>
                                )}
                              </div>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                )}
              </>
            )}
          </TabPane>

          {/* 历史记录标签页 */}
          <TabPane 
            tab={
              <span>
                <Badge count={completedTasks.length + failedTasks.length + filteredTasks.length} overflowCount={99} size="small">
                  <Text>历史记录</Text>
                </Badge>
              </span>
            } 
            key="history"
          >
            {/* 筛选器 */}
            <div className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-wrap gap-4 items-end">
                <div className="flex-1 min-w-[200px]">
                  <div className="mb-1 text-sm font-medium">搜索</div>
                  <Input
                    placeholder="搜索标题或URL"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    prefix={<SearchOutlined />}
                    allowClear
                  />
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <div className="mb-1 text-sm font-medium">日期范围</div>
                  <RangePicker 
                    value={dateRange}
                    onChange={value => setDateRange(value)}
                    style={{ width: '100%' }}
                  />
                </div>
                
                <div className="w-[150px]">
                  <div className="mb-1 text-sm font-medium">来源</div>
                  <Select
                    style={{ width: '100%' }}
                    value={sourceFilter}
                    onChange={setSourceFilter}
                    options={[
                      { value: 'all', label: '全部来源' },
                      { value: TaskSource.MANUAL, label: '手动保存' },
                      { value: TaskSource.AUTO_RULE, label: '规则自动' },
                      { value: TaskSource.AUTO_TABS, label: '标签页批量' },
                    ]}
                  />
                </div>
                
                <div className="w-[150px]">
                  <div className="mb-1 text-sm font-medium">状态</div>
                  <Select
                    style={{ width: '100%' }}
                    value={statusFilter}
                    onChange={setStatusFilter}
                    options={[
                      { value: 'all', label: '全部状态' },
                      { value: SaveTaskStatus.COMPLETED, label: '已完成' },
                      { value: SaveTaskStatus.FAILED, label: '失败' },
                    ]}
                  />
                </div>
                
                <div>
                  <Button 
                    icon={<ClearOutlined />} 
                    onClick={clearFilters}
                  >
                    清除筛选
                  </Button>
                </div>
              </div>
            </div>

            {/* 历史记录子标签页 */}
            <Tabs activeKey={historyTab} onChange={setHistoryTab} size="small" tabPosition="top">
              <TabPane tab={`全部记录 (${completedTasks.length + failedTasks.length + filteredTasks.length})`} key="all" />
              <TabPane tab={`已完成 (${completedTasks.length})`} key="completed" />
              <TabPane tab={`失败 (${failedTasks.length})`} key="failed" />
              <TabPane tab={`被过滤 (${filteredTasks.length})`} key="filtered" />
            </Tabs>

            {/* 历史记录表格 */}
            <div className="mt-4">
              <Table
                columns={historyColumns}
                dataSource={getHistoryTasks()}
                rowKey={(record) => `${record.tabId}-${record.createdAt}`}
                pagination={{ pageSize: 10 }}
                size="small"
              />
            </div>
          </TabPane>
        </Tabs>
      </Card>
      
      {/* 步骤详情模态框 */}
      <Modal
        title="任务步骤详情"
        open={stepsModalVisible}
        onCancel={() => setStepsModalVisible(false)}
        footer={null}
        width={600}
      >
        {currentTaskWithSteps && (
          <div>
            <div className="mb-3">
              <strong>标题：</strong> {currentTaskWithSteps.title || '无标题'}
            </div>
            <div className="mb-3">
              <strong>URL：</strong> {currentTaskWithSteps.url}
            </div>
            <div className="mb-3">
              <strong>来源：</strong> <SaveSourceTag source={currentTaskWithSteps.source} sourceInfo={currentTaskWithSteps.sourceInfo} showLabel={true} />
            </div>
            
            <div className="mb-2">
              <strong>步骤详情：</strong>
            </div>
            
            {currentTaskWithSteps.steps && currentTaskWithSteps.steps.length > 0 ? (
              <Timeline>
                {currentTaskWithSteps.steps.map((step, index) => (
                  <Timeline.Item 
                    key={index}
                    color={
                      step.status === 'success' ? 'green' :
                      step.status === 'failed' ? 'red' :
                      'blue'
                    }
                  >
                    <div>
                      <strong>{step.step}</strong> ({new Date(step.timestamp).toLocaleTimeString()})
                    </div>
                    <div className="text-sm text-gray-500">{step.message}</div>
                  </Timeline.Item>
                ))}
              </Timeline>
            ) : (
              <Empty description="无步骤详情" />
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default DownloadQueue;
