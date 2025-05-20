import React, { useState, useEffect } from 'react';
import { Card, List, Tag, Typography, Button, Tooltip, Empty, Progress, Space, Statistic, Collapse, Tabs } from 'antd';
import {
  ClockCircleOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  FilterOutlined,
  HistoryOutlined,
  ReloadOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { getAllSaveTasks, clearAutoSaveTask, SaveTaskStatus, manualCheckAllTabs } from '@/services/auto-save';
import type { SaveTask } from '@/services/auto-save';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

/**
 * 下载队列组件
 * 显示当前准备下载的页面和正在下载的页面
 */
const DownloadQueue: React.FC = () => {
  const [tasks, setTasks] = useState<SaveTask[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeTab, setActiveTab] = useState('active');
  const [checkingTabs, setCheckingTabs] = useState(false);
  const [checkStats, setCheckStats] = useState<{
    checked: number;
    setup: number;
    filtered: number;
  } | null>(null);

  // 加载任务列表
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const allTasks = await getAllSaveTasks();
        console.log('下载队列任务数量:', allTasks.length);
        setTasks(allTasks);
      } catch (error) {
        console.error('加载下载队列任务失败:', error);
      }
    };

    // 初始加载
    loadTasks();

    // 设置定时刷新
    const intervalId = setInterval(() => {
      loadTasks();
    }, 1000); // 每秒刷新一次

    return () => {
      clearInterval(intervalId);
    };
  }, [refreshKey]);

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
  const getStatusTag = (task: SaveTask) => {
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

  // 计算等待进度
  const calculateProgress = (task: SaveTask) => {
    if (task.status !== SaveTaskStatus.WAITING || task.timeoutId === -1) return 100;

    const now = Date.now();
    const elapsed = now - task.createdAt;
    const total = task.scheduledAt - task.createdAt;

    if (total <= 0) return 100;

    const progress = Math.min(Math.floor((elapsed / total) * 100), 99);
    return progress;
  };

  // 格式化剩余时间
  const formatRemainingTime = (task: SaveTask) => {
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

  // 按状态对任务进行分组
  const waitingTasks = tasks.filter(task => task.status === SaveTaskStatus.WAITING && task.timeoutId !== -1);
  const savingTasks = tasks.filter(task => task.status === SaveTaskStatus.SAVING);
  const completedTasks = tasks.filter(task => task.status === SaveTaskStatus.COMPLETED);
  const failedTasks = tasks.filter(task => task.status === SaveTaskStatus.FAILED);
  const filteredTasks = tasks.filter(task => task.timeoutId === -1);

  // 活跃任务（等待中和保存中）
  const activeTasks = [...waitingTasks, ...savingTasks];
  // 历史任务（已完成和失败）
  const historyTasks = [...completedTasks, ...failedTasks];

  return (
    <Card
      title={<Title level={4}>下载队列</Title>}
      className="mb-4"
      extra={
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={handleCheckAllTabs}
          loading={checkingTabs}
        >
          检查所有标签页
        </Button>
      }
    >
      {/* 统计信息 */}
      <div className="mb-4">
        <Space size="large">
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

      {/* 任务列表 */}
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="活跃任务" key="active">
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
                          </Tooltip>
                        ]}
                      >
                        <List.Item.Meta
                          title={
                            <Space>
                              <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                              {getStatusTag(task)}
                              {task.matchedRule && (
                                <Tooltip title={`匹配规则: ${task.matchedRule}`}>
                                  <InfoCircleOutlined />
                                </Tooltip>
                              )}
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
                              {task.matchedRule && (
                                <Tooltip title={`匹配规则: ${task.matchedRule}`}>
                                  <InfoCircleOutlined />
                                </Tooltip>
                              )}
                            </Space>
                          }
                          description={
                            <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
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

        <TabPane tab="历史记录" key="history">
          {historyTasks.length === 0 ? (
            <Empty description="没有历史下载记录" />
          ) : (
            <>
              {/* 最近完成的任务 */}
              {completedTasks.length > 0 && (
                <div className="mb-4">
                  <Title level={5}>最近完成的任务 ({completedTasks.length})</Title>
                  <List
                    size="small"
                    bordered
                    dataSource={completedTasks}
                    renderItem={task => (
                      <List.Item>
                        <List.Item.Meta
                          title={
                            <Space>
                              <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                              {getStatusTag(task)}
                              {task.matchedRule && (
                                <Tooltip title={`匹配规则: ${task.matchedRule}`}>
                                  <InfoCircleOutlined />
                                </Tooltip>
                              )}
                            </Space>
                          }
                          description={
                            <div>
                              <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
                              <div>
                                <Text type="secondary">
                                  {new Date(task.createdAt).toLocaleString()}
                                </Text>
                              </div>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              )}

              {/* 失败的任务 */}
              {failedTasks.length > 0 && (
                <div>
                  <Title level={5}>失败的任务 ({failedTasks.length})</Title>
                  <List
                    size="small"
                    bordered
                    dataSource={failedTasks}
                    renderItem={task => (
                      <List.Item
                        actions={[
                          <Tooltip key="remove" title="移除">
                            <Button
                              type="text"
                              danger
                              size="small"
                              icon={<DeleteOutlined />}
                              onClick={() => handleCancelTask(task.tabId)}
                            />
                          </Tooltip>
                        ]}
                      >
                        <List.Item.Meta
                          title={
                            <Space>
                              <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                              {getStatusTag(task)}
                              {task.matchedRule && (
                                <Tooltip title={`匹配规则: ${task.matchedRule}`}>
                                  <InfoCircleOutlined />
                                </Tooltip>
                              )}
                            </Space>
                          }
                          description={
                            <div>
                              <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
                              {task.error && (
                                <div className="mt-1">
                                  <Text type="danger">{task.error}</Text>
                                </div>
                              )}
                              <div>
                                <Text type="secondary">
                                  {new Date(task.createdAt).toLocaleString()}
                                </Text>
                              </div>
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

        <TabPane tab="被过滤的URL" key="filtered">
          {filteredTasks.length === 0 ? (
            <Empty description="没有被过滤的URL" />
          ) : (
            <div>
              <List
                size="small"
                bordered
                dataSource={filteredTasks}
                renderItem={task => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <Space>
                          <Text ellipsis style={{ maxWidth: 300 }}>{task.title || task.url}</Text>
                          {getStatusTag(task)}
                        </Space>
                      }
                      description={
                        <div>
                          <Text type="secondary" ellipsis style={{ maxWidth: 400 }}>{task.url}</Text>
                          {task.error && (
                            <div className="mt-1">
                              <Text type="secondary">过滤原因: {task.error}</Text>
                            </div>
                          )}
                          <div>
                            <Text type="secondary">
                              {new Date(task.createdAt).toLocaleString()}
                            </Text>
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
      </Tabs>
    </Card>
  );
};

export default DownloadQueue;
