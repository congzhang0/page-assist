import React, { useEffect, useState } from 'react';
import { syncService, SyncServiceStatus } from '@/services/sync/sync-service';
import { getSyncConfig, updateSyncConfig } from '@/config/sync-config';
import { useTranslation } from 'react-i18next';
import { Input, Switch, Button, Form, Space, Typography, Badge, Tooltip, message } from 'antd';
import { SyncOutlined, DisconnectOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const SyncSettings: React.FC = () => {
  const { t } = useTranslation();
  const [syncConfig, setSyncConfig] = useState<any>(null);
  const [status, setStatus] = useState<SyncServiceStatus>(SyncServiceStatus.IDLE);
  const [queueStats, setQueueStats] = useState<{ total: number, pending: number, retry: number }>({ total: 0, pending: 0, retry: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  // 加载配置
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const config = await getSyncConfig();
        setSyncConfig(config);
        form.setFieldsValue(config);
      } catch (error) {
        console.error('Error loading sync config:', error);
        message.error('无法加载同步配置');
      }
    };
    loadConfig();
  }, [form]);

  // 监听同步状态
  useEffect(() => {
    let intervalId: number | null = null;
    
    const updateStats = async () => {
      try {
        const stats = await syncService.getQueueStats();
        setQueueStats(stats);
      } catch (error) {
        console.error('Error updating sync stats:', error);
      }
    };

    try {
      // 初始加载统计数据
      updateStats();

      // 设置定期刷新
      intervalId = window.setInterval(updateStats, 5000);

      // 添加状态监听器
      syncService.addStatusListener(setStatus);
    } catch (error) {
      console.error('Error setting up sync status monitoring:', error);
    }

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      try {
        syncService.removeStatusListener(setStatus);
      } catch (error) {
        console.error('Error removing sync status listener:', error);
      }
    };
  }, []);

  // 获取状态徽章信息
  const getStatusBadge = () => {
    switch (status) {
      case SyncServiceStatus.DISABLED:
        return { status: 'default', icon: <DisconnectOutlined />, text: t('sync.status.disabled') };
      case SyncServiceStatus.IDLE:
        return { status: 'success', icon: <CheckCircleOutlined />, text: t('sync.status.idle') };
      case SyncServiceStatus.SYNCING:
        return { status: 'processing', icon: <SyncOutlined spin />, text: t('sync.status.syncing') };
      case SyncServiceStatus.ERROR:
        return { status: 'error', icon: <ClockCircleOutlined />, text: t('sync.status.error') };
      default:
        return { status: 'default', icon: null, text: t('sync.status.unknown') };
    }
  };

  const badgeInfo = getStatusBadge();

  // 保存配置
  const handleSave = async (values: any) => {
    setLoading(true);
    try {
      await updateSyncConfig(values);
      const newConfig = await getSyncConfig();
      setSyncConfig(newConfig);

      // 更新启用状态
      if (syncConfig.enabled !== values.enabled) {
        await syncService.setEnabled(values.enabled);
      }

      // 更新代理端点
      if (syncConfig.proxyEndpoint !== values.proxyEndpoint) {
        await syncService.setProxyEndpoint(values.proxyEndpoint);
      }
      
      message.success('同步设置已保存');
    } catch (error) {
      console.error('保存同步设置时出错:', error);
      message.error('保存同步设置失败');
    } finally {
      setLoading(false);
    }
  };

  // 手动同步
  const handleManualSync = () => {
    try {
      syncService.synchronize();
    } catch (error) {
      console.error('手动同步时出错:', error);
      message.error('开始同步失败');
    }
  };

  // 清理过期项目
  const handleCleanExpired = async () => {
    setLoading(true);
    try {
      const removed = await syncService.cleanExpiredItems();
      // 刷新统计数据
      const stats = await syncService.getQueueStats();
      setQueueStats(stats);
      message.success(`已清理 ${removed} 个过期项目`);
    } catch (error) {
      console.error('清理过期项目时出错:', error);
      message.error('清理过期项目失败');
    } finally {
      setLoading(false);
    }
  };

  if (!syncConfig) {
    return <div>加载中...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Title level={4}>{t('sync.title')}</Title>
        <div className="flex items-center">
          {badgeInfo.icon}
          <Badge status={badgeInfo.status as any} className="ml-2" />
          <Text className="ml-1">{badgeInfo.text}</Text>
        </div>
      </div>

      <Form form={form} layout="vertical" onFinish={handleSave}>
        <Form.Item
          name="enabled"
          label={t('sync.enable')}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="proxyEndpoint"
          label={t('sync.proxyEndpoint')}
          rules={[{ required: true, message: t('sync.proxyEndpointRequired') }]}
        >
          <Input placeholder="https://your-webapp.com/api/proxy" />
        </Form.Item>

        <Form.Item name="network.wifiOnly" valuePropName="checked" label={t('sync.wifiOnly')}>
          <Switch />
        </Form.Item>

        <div className="bg-gray-100 p-3 rounded mb-4">
          <Text strong>{t('sync.queueStats')}</Text>
          <div className="flex gap-4 mt-2">
            <Tooltip title={t('sync.totalItems')}>
              <Badge count={queueStats.total} showZero />
            </Tooltip>
            <Tooltip title={t('sync.pendingItems')}>
              <Badge count={queueStats.pending} color="blue" showZero />
            </Tooltip>
            <Tooltip title={t('sync.retryItems')}>
              <Badge count={queueStats.retry} color="orange" showZero />
            </Tooltip>
          </div>
        </div>

        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            {t('common.save')}
          </Button>
          <Button 
            onClick={handleManualSync} 
            icon={<SyncOutlined />}
            disabled={status === SyncServiceStatus.DISABLED || status === SyncServiceStatus.SYNCING}
          >
            {t('sync.manualSync')}
          </Button>
          <Button 
            onClick={handleCleanExpired}
            loading={loading}
            disabled={queueStats.total === 0}
          >
            {t('sync.cleanExpired')}
          </Button>
        </Space>
      </Form>
    </div>
  );
}; 