import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Typography, 
  Switch, 
  Input, 
  Button, 
  Space, 
  Table, 
  Tag, 
  Tooltip, 
  Popconfirm,
  Select,
  InputNumber,
  Divider,
  Alert,
  Collapse,
  Checkbox
} from 'antd';
import { 
  PlusOutlined, 
  DeleteOutlined, 
  ReloadOutlined, 
  CopyOutlined,
  InfoCircleOutlined,
  EyeOutlined,
  EyeInvisibleOutlined
} from '@ant-design/icons';
import { 
  getDataProviderConfig, 
  updateDataProviderConfig, 
  regenerateAccessToken,
  addAuthorizedApp,
  removeAuthorizedApp,
  DataProviderConfig
} from '@/config/data-provider-config';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

/**
 * 数据提供者API设置组件
 */
const DataProviderSettings: React.FC = () => {
  // 配置状态
  const [config, setConfig] = useState<DataProviderConfig | null>(null);
  
  // 新应用ID状态
  const [newAppId, setNewAppId] = useState('');
  
  // 是否显示访问令牌
  const [showToken, setShowToken] = useState(false);
  
  // 加载状态
  const [loading, setLoading] = useState(true);
  
  // 加载配置
  const loadConfig = async () => {
    try {
      setLoading(true);
      const config = await getDataProviderConfig();
      setConfig(config);
    } catch (error) {
      console.error('加载数据提供者API配置失败', error);
    } finally {
      setLoading(false);
    }
  };
  
  // 初始加载
  useEffect(() => {
    loadConfig();
  }, []);
  
  // 切换API启用状态
  const handleToggleEnabled = async (enabled: boolean) => {
    try {
      if (!config) return;
      
      await updateDataProviderConfig({ enabled });
      setConfig({ ...config, enabled });
    } catch (error) {
      console.error('更新API启用状态失败', error);
    }
  };
  
  // 重新生成访问令牌
  const handleRegenerateToken = async () => {
    try {
      if (!config) return;
      
      const newToken = await regenerateAccessToken();
      setConfig({ ...config, accessToken: newToken });
    } catch (error) {
      console.error('重新生成访问令牌失败', error);
    }
  };
  
  // 添加授权应用
  const handleAddApp = async () => {
    try {
      if (!config || !newAppId.trim()) return;
      
      const newAuthorizedApps = await addAuthorizedApp(newAppId.trim());
      setConfig({ ...config, authorizedApps: newAuthorizedApps });
      setNewAppId('');
    } catch (error) {
      console.error('添加授权应用失败', error);
    }
  };
  
  // 移除授权应用
  const handleRemoveApp = async (appId: string) => {
    try {
      if (!config) return;
      
      const newAuthorizedApps = await removeAuthorizedApp(appId);
      setConfig({ ...config, authorizedApps: newAuthorizedApps });
    } catch (error) {
      console.error('移除授权应用失败', error);
    }
  };
  
  // 更新允许的实体类型
  const handleUpdateAllowedEntityTypes = async (entityTypes: string[]) => {
    try {
      if (!config) return;
      
      await updateDataProviderConfig({ 
        filters: { 
          ...config.filters, 
          allowedEntityTypes: entityTypes as any 
        } 
      });
      
      setConfig({ 
        ...config, 
        filters: { 
          ...config.filters, 
          allowedEntityTypes: entityTypes as any 
        } 
      });
    } catch (error) {
      console.error('更新允许的实体类型失败', error);
    }
  };
  
  // 更新是否允许访问完整内容
  const handleToggleAllowFullContent = async (allowFullContent: boolean) => {
    try {
      if (!config) return;
      
      await updateDataProviderConfig({ 
        filters: { 
          ...config.filters, 
          allowFullContent 
        } 
      });
      
      setConfig({ 
        ...config, 
        filters: { 
          ...config.filters, 
          allowFullContent 
        } 
      });
    } catch (error) {
      console.error('更新是否允许访问完整内容失败', error);
    }
  };
  
  // 更新速率限制
  const handleUpdateRateLimit = async (field: 'requestsPerMinute' | 'requestsPerDay', value: number) => {
    try {
      if (!config) return;
      
      await updateDataProviderConfig({ 
        rateLimit: { 
          ...config.rateLimit, 
          [field]: value 
        } 
      });
      
      setConfig({ 
        ...config, 
        rateLimit: { 
          ...config.rateLimit, 
          [field]: value 
        } 
      });
    } catch (error) {
      console.error('更新速率限制失败', error);
    }
  };
  
  // 更新日志设置
  const handleUpdateLogging = async (field: 'enabled' | 'retentionDays', value: boolean | number) => {
    try {
      if (!config) return;
      
      await updateDataProviderConfig({ 
        logging: { 
          ...config.logging, 
          [field]: value 
        } 
      });
      
      setConfig({ 
        ...config, 
        logging: { 
          ...config.logging, 
          [field]: value 
        } 
      });
    } catch (error) {
      console.error('更新日志设置失败', error);
    }
  };
  
  // 复制访问令牌
  const handleCopyToken = () => {
    if (!config) return;
    
    navigator.clipboard.writeText(config.accessToken)
      .then(() => {
        console.log('访问令牌已复制到剪贴板');
      })
      .catch((error) => {
        console.error('复制访问令牌失败', error);
      });
  };
  
  // 如果配置未加载，显示加载状态
  if (loading || !config) {
    return (
      <Card title={<Title level={4}>数据提供者API设置</Title>} className="mb-4">
        <div className="text-center py-4">加载中...</div>
      </Card>
    );
  }
  
  return (
    <Card title={<Title level={4}>数据提供者API设置</Title>} className="mb-4">
      <Space direction="vertical" style={{ width: '100%' }}>
        {/* API启用开关 */}
        <div className="flex justify-between items-center">
          <Text strong>启用数据提供者API</Text>
          <Switch 
            checked={config.enabled} 
            onChange={handleToggleEnabled} 
          />
        </div>
        
        <Alert
          message="数据提供者API允许授权的webapp从浏览器扩展中拉取数据"
          description="启用此功能后，授权的webapp可以通过Chrome扩展消息传递机制访问您保存的页面和其他数据。请确保只授权您信任的应用。"
          type="info"
          showIcon
        />
        
        <Divider />
        
        {/* 访问令牌 */}
        <Title level={5}>访问令牌</Title>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div className="flex items-center">
            <Input.Password
              value={config.accessToken}
              visibilityToggle={{ visible: showToken, onVisibleChange: setShowToken }}
              readOnly
              addonAfter={
                <Tooltip title="复制令牌">
                  <Button 
                    type="text" 
                    icon={<CopyOutlined />} 
                    onClick={handleCopyToken}
                  />
                </Tooltip>
              }
            />
            <Button 
              type="primary" 
              icon={<ReloadOutlined />} 
              onClick={handleRegenerateToken}
              style={{ marginLeft: 8 }}
              danger
            >
              重新生成
            </Button>
          </div>
          <Text type="secondary">
            此令牌用于验证API请求。重新生成令牌将使所有现有令牌失效。
          </Text>
        </Space>
        
        <Divider />
        
        {/* 授权应用 */}
        <Title level={5}>授权应用</Title>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div className="flex items-center">
            <Input
              placeholder="输入应用ID"
              value={newAppId}
              onChange={(e) => setNewAppId(e.target.value)}
              style={{ flex: 1 }}
            />
            <Button 
              type="primary" 
              icon={<PlusOutlined />} 
              onClick={handleAddApp}
              style={{ marginLeft: 8 }}
              disabled={!newAppId.trim()}
            >
              添加
            </Button>
          </div>
          <Text type="secondary">
            应用ID是Chrome扩展的ID或网站的来源。只有在此列表中的应用才能访问API。
          </Text>
          
          <Table
            dataSource={config.authorizedApps.map(app => ({ id: app }))}
            columns={[
              {
                title: '应用ID',
                dataIndex: 'id',
                key: 'id',
              },
              {
                title: '操作',
                key: 'action',
                width: 100,
                render: (_, record) => (
                  <Popconfirm
                    title="确定要移除此应用吗？"
                    onConfirm={() => handleRemoveApp(record.id)}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button 
                      type="text" 
                      danger 
                      icon={<DeleteOutlined />}
                    />
                  </Popconfirm>
                ),
              },
            ]}
            pagination={false}
            size="small"
            locale={{ emptyText: '暂无授权应用' }}
          />
        </Space>
        
        <Divider />
        
        {/* 高级设置 */}
        <Collapse>
          <Panel header="高级设置" key="advanced">
            <Space direction="vertical" style={{ width: '100%' }}>
              {/* 数据过滤设置 */}
              <Title level={5}>数据过滤</Title>
              
              <div className="mb-2">
                <Text strong>允许访问的实体类型</Text>
                <Select
                  mode="multiple"
                  style={{ width: '100%', marginTop: 8 }}
                  placeholder="选择允许访问的实体类型"
                  value={config.filters.allowedEntityTypes}
                  onChange={handleUpdateAllowedEntityTypes}
                  options={[
                    { label: '页面', value: 'page' },
                    { label: '文档', value: 'document' },
                    { label: '模型', value: 'model' },
                    { label: '知识', value: 'knowledge' },
                    { label: '向量', value: 'vector' },
                    { label: '消息', value: 'message' },
                  ]}
                />
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <Text>允许访问完整内容</Text>
                <Switch 
                  checked={config.filters.allowFullContent} 
                  onChange={handleToggleAllowFullContent} 
                />
              </div>
              <Text type="secondary" className="mb-4">
                如果禁用，API将不会返回敏感字段，如页面内容、HTML等。
              </Text>
              
              {/* 速率限制设置 */}
              <Title level={5}>速率限制</Title>
              
              <div className="flex items-center mb-2">
                <Text style={{ width: 150 }}>每分钟最大请求数</Text>
                <InputNumber
                  min={1}
                  max={1000}
                  value={config.rateLimit.requestsPerMinute}
                  onChange={(value) => handleUpdateRateLimit('requestsPerMinute', value as number)}
                />
              </div>
              
              <div className="flex items-center mb-4">
                <Text style={{ width: 150 }}>每天最大请求数</Text>
                <InputNumber
                  min={1}
                  max={100000}
                  value={config.rateLimit.requestsPerDay}
                  onChange={(value) => handleUpdateRateLimit('requestsPerDay', value as number)}
                />
              </div>
              
              {/* 日志设置 */}
              <Title level={5}>日志设置</Title>
              
              <div className="flex justify-between items-center mb-2">
                <Text>启用访问日志</Text>
                <Switch 
                  checked={config.logging.enabled} 
                  onChange={(value) => handleUpdateLogging('enabled', value)} 
                />
              </div>
              
              <div className="flex items-center mb-4">
                <Text style={{ width: 150 }}>日志保留天数</Text>
                <InputNumber
                  min={1}
                  max={365}
                  value={config.logging.retentionDays}
                  onChange={(value) => handleUpdateLogging('retentionDays', value as number)}
                  disabled={!config.logging.enabled}
                />
              </div>
            </Space>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  );
};

export default DataProviderSettings;
