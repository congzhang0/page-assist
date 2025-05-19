import React, { useState, useEffect } from 'react';
import { Card, List, Tag, Typography, Button, Tooltip, Empty, Progress, Space } from 'antd';
import { ClockCircleOutlined, LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllSaveTasks, clearAutoSaveTask, SaveTaskStatus } from '@/services/auto-save';
import type { SaveTask } from '@/services/auto-save';

const { Title, Text } = Typography;

/**
 * 下载队列组件
 * 显示当前准备下载的页面和正在下载的页面
 */
const DownloadQueue: React.FC = () => {
  const [tasks, setTasks] = useState<SaveTask[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  // 加载任务列表
  useEffect(() => {
    const loadTasks = () => {
      const allTasks = getAllSaveTasks();
      console.log('下载队列任务数量:', allTasks.length);
      setTasks(allTasks);
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
  const handleCancelTask = (tabId: number) => {
    clearAutoSaveTask(tabId);
    // 触发刷新
    setRefreshKey(prev => prev + 1);
  };

  // 获取任务状态标签
  const getStatusTag = (task: SaveTask) => {
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
    if (task.status !== SaveTaskStatus.WAITING) return 100;

    const now = Date.now();
    const elapsed = now - task.createdAt;
    const total = task.scheduledAt - task.createdAt;

    if (total <= 0) return 100;

    const progress = Math.min(Math.floor((elapsed / total) * 100), 99);
    return progress;
  };

  // 格式化剩余时间
  const formatRemainingTime = (task: SaveTask) => {
    if (task.status !== SaveTaskStatus.WAITING) return '';

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
  const waitingTasks = tasks.filter(task => task.status === SaveTaskStatus.WAITING);
  const savingTasks = tasks.filter(task => task.status === SaveTaskStatus.SAVING);
  const completedTasks = tasks.filter(task => task.status === SaveTaskStatus.COMPLETED);
  const failedTasks = tasks.filter(task => task.status === SaveTaskStatus.FAILED);

  return (
    <Card title={<Title level={4}>下载队列</Title>} className="mb-4">
      {tasks.length === 0 ? (
        <Empty description="当前没有下载任务" />
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
    </Card>
  );
};

export default DownloadQueue;
