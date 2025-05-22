import React, { useEffect, useState } from 'react';
import { syncService, SyncServiceStatus } from '@/services/sync/sync-service';
import { useTranslation } from 'react-i18next';
import { 
  Input, 
  Switch, 
  Button, 
  Form, 
  Space, 
  Typography, 
  Badge, 
  Tooltip, 
  message,
  Collapse,
  InputNumber,
  Alert,
  Card,
  Checkbox,
  Skeleton,
  Divider
} from 'antd';
import { 
  SyncOutlined, 
  DisconnectOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  CopyOutlined,
  ReloadOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { 
  getDataProviderConfig, 
  updateDataProviderConfig,
  DataProviderConfig,
  regenerateAccessToken,
  resetDataProviderConfig
} from '@/config/data-provider-config';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

export const SyncSettings: React.FC = () => {
  const { t } = useTranslation();
  const [config, setConfig] = useState<DataProviderConfig | null>(null);
  const [status, setStatus] = useState<SyncServiceStatus>(SyncServiceStatus.IDLE);
  const [queueStats, setQueueStats] = useState<{ total: number, pending: number, retry: number }>({ total: 0, pending: 0, retry: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  const [showToken, setShowToken] = useState<boolean>(false);
  const [form] = Form.useForm();

  // 加载配置
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const config = await getDataProviderConfig();
        setConfig(config);
        form.setFieldsValue(config);
      } catch (error) {
        console.error('Error loading data provider config:', error);
        message.error('无法加载数据提供者配置');
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
      await updateDataProviderConfig(values);
      const newConfig = await getDataProviderConfig();
      setConfig(newConfig);

      // 更新启用状态
      if (config?.enabled !== values.enabled) {
        if (values.enabled) {
          await syncService.setEnabled(true);
        } else {
          await syncService.setEnabled(false);
        }
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
      message.success('已开始数据同步');
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

  // 更新同步设置
  const handleUpdateSyncSettings = async (field: string, value: any) => {
    if (!config) return;
    
    try {
      const updates = { 
        sync: { 
          ...config.sync, 
          [field]: value 
        } 
      };
      
      await updateDataProviderConfig(updates);
      setConfig({ ...config, sync: { ...config.sync, [field]: value } });
      message.success('同步设置已更新');
    } catch (error) {
      console.error('更新同步设置失败', error);
      message.error('更新同步设置失败');
    }
  };
  
  // 更新过滤器设置
  const handleUpdateFilters = async (field: string, value: any) => {
    if (!config) return;
    
    try {
      const updates = { 
        filters: { 
          ...config.filters, 
          [field]: value 
        } 
      };
      
      await updateDataProviderConfig(updates);
      setConfig({ ...config, filters: { ...config.filters, [field]: value } });
      message.success('过滤器设置已更新');
    } catch (error) {
      console.error('更新过滤器设置失败', error);
      message.error('更新过滤器设置失败');
    }
  };
  
  // 重新生成访问令牌
  const handleRegenerateToken = async () => {
    try {
      if (!config) return;
      
      const newToken = await regenerateAccessToken();
      setConfig({ ...config, accessToken: newToken });
      form.setFieldsValue({ accessToken: newToken });
      message.success('已重新生成访问令牌');
    } catch (error) {
      console.error('重新生成访问令牌失败', error);
      message.error('重新生成访问令牌失败');
    }
  };

  // 复制访问令牌
  const handleCopyToken = () => {
    if (!config) return;
    
    navigator.clipboard.writeText(config.accessToken)
      .then(() => {
        message.success('访问令牌已复制到剪贴板');
      })
      .catch((error) => {
        console.error('复制访问令牌失败', error);
        message.error('复制访问令牌失败');
      });
  };

  // 重置配置
  const handleResetConfig = async () => {
    try {
      await resetDataProviderConfig();
      const newConfig = await getDataProviderConfig();
      setConfig(newConfig);
      form.setFieldsValue(newConfig);
      message.success('已重置为默认配置');
    } catch (error) {
      console.error('重置配置失败', error);
      message.error('重置配置失败');
    }
  };

  if (!config) {
    return (
      <div className="p-4">
        <Skeleton active />
        <div className="text-center mt-4">正在加载数据同步设置...</div>
      </div>
    );
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

      <Alert
        message="数据同步设置"
        description="此页面配置数据同步设置，允许Web应用从插件拉取数据。插件数据存储在IndexDB中，等待Web应用来获取。"
        type="info"
        showIcon
        className="mb-4"
      />

      <Form form={form} layout="vertical" onFinish={handleSave} initialValues={config}>
        {/* 基本设置 */}
        <Card title="基本设置" className="mb-4" size="small">
          <Form.Item
            name="enabled"
            label="启用数据提供者 API"
            valuePropName="checked"
            tooltip="启用后，授权应用可以通过 API 访问您的数据"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="访问令牌"
            tooltip="访问令牌用于验证 API 请求的身份，请妥善保管"
          >
            <Input.Group compact>
              <Form.Item name="accessToken" noStyle>
                <Input
                  style={{ width: 'calc(100% - 80px)' }}
                  type={showToken ? 'text' : 'password'}
                  readOnly
                  addonAfter={
                    <Button
                      type="text"
                      icon={showToken ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                      onClick={() => setShowToken(!showToken)}
                    />
                  }
                />
              </Form.Item>
              <Button
                icon={<CopyOutlined />}
                onClick={handleCopyToken}
                title="复制令牌"
              />
              <Button
                icon={<ReloadOutlined />}
                onClick={handleRegenerateToken}
                title="重新生成令牌"
                danger
              />
            </Input.Group>
          </Form.Item>

          {/* 同步时间窗口设置 */}
          <Form.Item
            name={['sync', 'defaultTimeWindow']}
            label="同步时间窗口（毫秒）"
            tooltip="增量同步的默认时间窗口"
          >
            <InputNumber
              min={3600000} // 1小时
              max={2592000000} // 30天
              step={3600000} // 1小时步长
            />
          </Form.Item>
        </Card>

        {/* 同步状态 */}
        <Card title="同步状态" className="mb-4" size="small">
          <div className="bg-gray-100 p-3 rounded mb-4">
            <Text strong>同步队列状态</Text>
            <div className="flex gap-4 mt-2">
              <Tooltip title="总项目数">
                <Badge count={queueStats.total} showZero />
              </Tooltip>
              <Tooltip title="待处理项目">
                <Badge count={queueStats.pending} color="blue" showZero />
              </Tooltip>
              <Tooltip title="重试项目">
                <Badge count={queueStats.retry} color="orange" showZero />
              </Tooltip>
            </div>
          </div>

          <Space>
            <Button 
              onClick={handleManualSync} 
              icon={<SyncOutlined />}
              disabled={status === SyncServiceStatus.DISABLED || status === SyncServiceStatus.SYNCING}
            >
              手动同步
            </Button>
            <Button 
              onClick={handleCleanExpired}
              loading={loading}
              disabled={queueStats.total === 0}
            >
              清理过期项目
            </Button>
          </Space>
        </Card>

        {/* 高级设置 */}
        <Collapse className="mb-4">
          <Panel header="高级设置" key="advanced">
            <Space direction="vertical" style={{ width: '100%' }}>
              {/* 数据过滤设置 */}
              <Title level={5}>数据过滤</Title>
              
              <Form.Item
                label="允许访问的数据类型"
                tooltip="选择允许 API 访问的数据类型"
              >
                <Space direction="vertical">
                  <Form.Item>
                    <Checkbox 
                      checked={config.filters.allowedEntityTypes.includes('page')}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const types = [...config.filters.allowedEntityTypes];
                        if (checked && !types.includes('page')) {
                          types.push('page');
                        } else if (!checked) {
                          const index = types.indexOf('page');
                          if (index !== -1) types.splice(index, 1);
                        }
                        handleUpdateFilters('allowedEntityTypes', types);
                      }}
                    >
                      页面
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox 
                      checked={config.filters.allowedEntityTypes.includes('document')}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const types = [...config.filters.allowedEntityTypes];
                        if (checked && !types.includes('document')) {
                          types.push('document');
                        } else if (!checked) {
                          const index = types.indexOf('document');
                          if (index !== -1) types.splice(index, 1);
                        }
                        handleUpdateFilters('allowedEntityTypes', types);
                      }}
                    >
                      文档
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox 
                      checked={config.filters.allowedEntityTypes.includes('model')}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const types = [...config.filters.allowedEntityTypes];
                        if (checked && !types.includes('model')) {
                          types.push('model');
                        } else if (!checked) {
                          const index = types.indexOf('model');
                          if (index !== -1) types.splice(index, 1);
                        }
                        handleUpdateFilters('allowedEntityTypes', types);
                      }}
                    >
                      模型
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox 
                      checked={config.filters.allowedEntityTypes.includes('knowledge')}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const types = [...config.filters.allowedEntityTypes];
                        if (checked && !types.includes('knowledge')) {
                          types.push('knowledge');
                        } else if (!checked) {
                          const index = types.indexOf('knowledge');
                          if (index !== -1) types.splice(index, 1);
                        }
                        handleUpdateFilters('allowedEntityTypes', types);
                      }}
                    >
                      知识库
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox 
                      checked={config.filters.allowedEntityTypes.includes('vector')}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const types = [...config.filters.allowedEntityTypes];
                        if (checked && !types.includes('vector')) {
                          types.push('vector');
                        } else if (!checked) {
                          const index = types.indexOf('vector');
                          if (index !== -1) types.splice(index, 1);
                        }
                        handleUpdateFilters('allowedEntityTypes', types);
                      }}
                    >
                      向量
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox 
                      checked={config.filters.allowedEntityTypes.includes('message')}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const types = [...config.filters.allowedEntityTypes];
                        if (checked && !types.includes('message')) {
                          types.push('message');
                        } else if (!checked) {
                          const index = types.indexOf('message');
                          if (index !== -1) types.splice(index, 1);
                        }
                        handleUpdateFilters('allowedEntityTypes', types);
                      }}
                    >
                      消息
                    </Checkbox>
                  </Form.Item>
                </Space>
              </Form.Item>
              
              <Form.Item 
                label="允许访问完整内容"
                tooltip="如果禁用，API 将不会返回敏感字段，如页面内容、HTML 等"
              >
                <Switch 
                  checked={config.filters.allowFullContent}
                  onChange={(checked) => handleUpdateFilters('allowFullContent', checked)}
                />
              </Form.Item>
              
              <Divider />
              
              {/* 同步设置 */}
              <Title level={5}>同步设置</Title>
              
              <Form.Item 
                label="默认同步时间窗口（小时）"
                tooltip="增量同步的默认时间窗口"
              >
                <InputNumber
                  min={1}
                  max={720} // 30天
                  value={config?.sync?.defaultTimeWindow ? config.sync.defaultTimeWindow / 3600000 : 24} // 默认值 24 小时
                  onChange={(value) => {
                    if (value === null) return;
                    handleUpdateSyncSettings('defaultTimeWindow', value * 3600000);
                  }}
                />
              </Form.Item>
              
              <Form.Item 
                label="启用批量同步"
                tooltip="启用后，多个同步操作将批量处理以提高效率"
              >
                <Switch
                  checked={config?.sync?.batchEnabled ?? true} // 默认启用
                  onChange={(checked) => handleUpdateSyncSettings('batchEnabled', checked)}
                />
              </Form.Item>
              
              <Form.Item 
                label="批量大小上限"
                tooltip="单次批量同步的最大项目数"
              >
                <InputNumber
                  min={10}
                  max={1000}
                  value={config?.sync?.batchSize ?? 100} // 默认值 100
                  onChange={(value) => {
                    if (value === null) return;
                    handleUpdateSyncSettings('batchSize', value);
                  }}
                  disabled={!(config?.sync?.batchEnabled ?? true)}
                />
              </Form.Item>
            </Space>
          </Panel>
        </Collapse>

        {/* 操作按钮 */}
        <div className="flex justify-end">
          <Space>
            <Button onClick={handleResetConfig}>恢复默认设置</Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存设置
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
}; 