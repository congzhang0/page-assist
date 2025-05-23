import React, { useState, useEffect } from 'react';
import { Card, Switch, Input, Button, List, Tag, Tooltip, InputNumber, Form, Space, Divider, Typography, message, Modal, Alert } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, ClockCircleOutlined, GlobalOutlined, SaveOutlined, AppstoreOutlined, CheckCircleOutlined, CloseCircleOutlined, ExperimentOutlined, SyncOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Storage } from '@plasmohq/storage';
import { saveAllOpenTabs, isUrlMatchPattern, shouldAutoSaveUrl } from '@/services/auto-save';

const { Title, Text } = Typography;

// 自动保存设置的类型定义
export interface AutoSaveSettings {
  enabled: boolean;
  websites: WebsiteRule[];
  saveDelay: number; // 单位：分钟
  maxPages: number; // 最大保存页面数量
  paused: boolean; // 是否暂停自动保存（临时停止但保留设置）
  scanInterval: number; // 扫描间隔时间（分钟）
  enablePeriodicScan: boolean; // 是否启用定期扫描
}

// 网站规则类型定义
export interface WebsiteRule {
  id: string;
  pattern: string;
  enabled: boolean;
}

// 生成唯一ID
const generateID = () => {
  return "rule_xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
};

// 默认设置
const DEFAULT_SETTINGS: AutoSaveSettings = {
  enabled: false,
  websites: [
    { id: generateID(), pattern: '*', enabled: true }
  ],
  saveDelay: 0.1, // 将延迟保存设为0.1分钟（几乎立即保存）
  maxPages: 100, // 默认最大保存100个页面
  paused: false, // 默认不暂停
  scanInterval: 30, // 默认扫描间隔30分钟
  enablePeriodicScan: true // 默认启用定期扫描
};

// 存储键名
const STORAGE_KEY = 'auto_save_settings';

// 自动保存设置组件
const AutoSaveSettings: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useState<AutoSaveSettings>(DEFAULT_SETTINGS);
  const [newWebsite, setNewWebsite] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [testModalVisible, setTestModalVisible] = useState(false);
  const [testUrl, setTestUrl] = useState('');
  const [testResults, setTestResults] = useState<{
    url: string;
    willSave: boolean;
    matchedRules: string[];
    excludedByRules: string[];
  } | null>(null);
  const storage = new Storage({ area: 'local' });

  // 加载设置
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
        if (savedSettings) {
          // 确保paused属性存在，如果不存在则设置为默认值false
          if (savedSettings.paused === undefined) {
            savedSettings.paused = false;
            // 保存更新后的设置
            await storage.set(STORAGE_KEY, savedSettings);
            console.log('已为设置添加paused属性，默认值为false');
          }

          console.log('加载自动保存设置', {
            enabled: savedSettings.enabled,
            paused: savedSettings.paused,
            rulesCount: savedSettings.websites?.length
          });

          setSettings(savedSettings);
        }
      } catch (error) {
        console.error('加载自动保存设置失败:', error);
      }
    };

    loadSettings();
  }, []);

  // 保存设置
  const saveSettings = async (newSettings: AutoSaveSettings) => {
    try {
      await storage.set(STORAGE_KEY, newSettings);
      setSettings(newSettings);
    } catch (error) {
      console.error('保存自动保存设置失败:', error);
    }
  };

  // 切换自动保存功能
  const handleToggleAutoSave = (checked: boolean) => {
    const newSettings = { ...settings, enabled: checked };
    saveSettings(newSettings);
  };

  // 切换暂停/恢复状态
  const handleTogglePause = (checked: boolean) => {
    const newSettings = { ...settings, paused: checked };
    console.log(`切换自动保存暂停状态: ${checked ? '暂停' : '恢复'}`);
    saveSettings(newSettings);
  };

  // 更改保存延迟时间
  const handleSaveDelayChange = (value: number | null) => {
    if (value !== null) {
      const newSettings = { ...settings, saveDelay: value };
      saveSettings(newSettings);
    }
  };

  // 更改最大保存页面数量
  const handleMaxPagesChange = (value: number | null) => {
    if (value !== null) {
      const newSettings = { ...settings, maxPages: value };
      saveSettings(newSettings);
    }
  };

  // 切换定期扫描功能
  const handleTogglePeriodicScan = (checked: boolean) => {
    const newSettings = { ...settings, enablePeriodicScan: checked };
    saveSettings(newSettings);
  };

  // 更改扫描间隔时间
  const handleScanIntervalChange = (value: number | null) => {
    if (value !== null) {
      const newSettings = { ...settings, scanInterval: value };
      saveSettings(newSettings);
    }
  };

  // 添加网站规则
  const handleAddWebsite = () => {
    if (!newWebsite.trim()) return;

    const newRule: WebsiteRule = {
      id: generateID(),
      pattern: newWebsite.trim(),
      enabled: true
    };

    const newSettings = {
      ...settings,
      websites: [...settings.websites, newRule]
    };

    saveSettings(newSettings);
    setNewWebsite('');
  };

  // 删除网站规则
  const handleDeleteWebsite = (id: string) => {
    const newSettings = {
      ...settings,
      websites: settings.websites.filter(site => site.id !== id)
    };

    saveSettings(newSettings);
  };

  // 切换网站规则启用状态
  const handleToggleWebsite = (id: string, checked: boolean) => {
    const newSettings = {
      ...settings,
      websites: settings.websites.map(site =>
        site.id === id ? { ...site, enabled: checked } : site
      )
    };

    saveSettings(newSettings);
  };

  // 开始编辑网站规则
  const handleStartEdit = (rule: WebsiteRule) => {
    setEditingId(rule.id);
    setEditValue(rule.pattern);
  };

  // 保存编辑的网站规则
  const handleSaveEdit = () => {
    if (!editingId || !editValue.trim()) {
      setEditingId(null);
      return;
    }

    const newSettings = {
      ...settings,
      websites: settings.websites.map(site =>
        site.id === editingId ? { ...site, pattern: editValue.trim() } : site
      )
    };

    saveSettings(newSettings);
    setEditingId(null);
  };

  // 保存所有已打开的标签页
  const handleSaveAllOpenTabs = async () => {
    try {
      message.loading({ content: '正在保存所有已打开的标签页...', key: 'saveAllTabs' });
      const result = await saveAllOpenTabs();

      if (result.success) {
        message.success({
          content: `成功保存了 ${result.savedCount} 个标签页，跳过了 ${result.skippedCount} 个标签页`,
          key: 'saveAllTabs'
        });
      } else {
        message.error({
          content: `保存标签页时出错: ${result.error}`,
          key: 'saveAllTabs'
        });
      }
    } catch (error) {
      message.error({
        content: `保存标签页时出错: ${error instanceof Error ? error.message : '未知错误'}`,
        key: 'saveAllTabs'
      });
    }
  };

  // 打开规则测试模态框
  const handleOpenTestModal = () => {
    setTestUrl('');
    setTestResults(null);
    setTestModalVisible(true);
  };

  // 关闭规则测试模态框
  const handleCloseTestModal = () => {
    setTestModalVisible(false);
  };

  // 测试URL是否匹配规则
  const handleTestUrl = async () => {
    if (!testUrl.trim()) {
      message.error('请输入要测试的URL');
      return;
    }

    try {
      // 验证URL格式
      let url = testUrl.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }

      // 尝试解析URL
      try {
        new URL(url);
      } catch (e) {
        message.error('无效的URL格式');
        return;
      }

      // 获取所有启用的规则
      const enabledRules = settings.websites.filter(rule => rule.enabled);

      // 检查是否会被排除规则排除
      const excludedByRules: string[] = [];
      for (const rule of enabledRules) {
        if (rule.pattern.startsWith('!') && isUrlMatchPattern(url, rule.pattern.substring(1))) {
          excludedByRules.push(rule.pattern);
        }
      }

      // 检查是否匹配包含规则
      const matchedRules: string[] = [];
      for (const rule of enabledRules) {
        if (!rule.pattern.startsWith('!')) {
          if (isUrlMatchPattern(url, rule.pattern)) {
            matchedRules.push(rule.pattern);
          }
        }
      }

      // 检查是否会被自动保存
      const willSave = await shouldAutoSaveUrl(url, settings);

      // 设置测试结果
      setTestResults({
        url,
        willSave,
        matchedRules,
        excludedByRules
      });

    } catch (error) {
      message.error(`测试URL失败: ${error instanceof Error ? error.message : '未知错误'}`);
    }
  };

  // 手动触发扫描
  const [scanning, setScanning] = useState(false);
  const [scanStats, setScanStats] = useState<{
    scanned: number;
    saved: number;
    filtered: number;
  } | null>(null);
  
  const handleManualScan = async () => {
    setScanning(true);
    try {
      // 导入手动扫描函数
      const { manualScanAllTabs } = await import('@/services/auto-save');
      
      // 调用手动扫描
      const stats = await manualScanAllTabs();
      setScanStats(stats);
      
      message.success(`扫描完成！已扫描 ${stats.scanned} 个页面，设置了 ${stats.saved} 个保存任务，过滤了 ${stats.filtered} 个页面`);
    } catch (error) {
      console.error('手动扫描失败:', error);
      message.error('扫描失败，请查看控制台获取详细信息');
    } finally {
      setScanning(false);
    }
  };

  return (
    <Card title={<Title level={4}>自动保存设置</Title>} className="mb-4">
      <Form layout="vertical">
        <Form.Item
          label="启用自动保存"
          tooltip="启用后，系统将根据下方规则自动保存您浏览的网页"
        >
          <Space>
            <Switch
              checked={settings.enabled}
              onChange={handleToggleAutoSave}
              checkedChildren="开启"
              unCheckedChildren="关闭"
            />
            {settings.enabled && (
              <Tooltip title={settings.paused ? "恢复自动保存" : "暂停自动保存"}>
                <Button
                  type={settings.paused ? "primary" : "default"}
                  danger={!settings.paused}
                  onClick={() => handleTogglePause(!settings.paused)}
                >
                  {settings.paused ? "恢复自动保存" : "暂停自动保存"}
                </Button>
              </Tooltip>
            )}
          </Space>
        </Form.Item>

        {settings.enabled && (
          <Form.Item>
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${settings.paused ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              <Text type={settings.paused ? "warning" : "success"}>
                {settings.paused ? "自动保存当前已暂停，设置仍然保留" : "自动保存当前处于活动状态"}
              </Text>
            </div>
          </Form.Item>
        )}
        
        <Form.Item>
          <Alert
            type="info"
            showIcon
            message="自动保存模式说明"
            description={
              <div>
                <p><strong>定期扫描：</strong>系统会按照设定的时间间隔主动扫描您当前打开的所有标签页，根据规则自动保存符合条件的页面。此设置适用于您希望定期捕获网页内容的场景。</p>
              </div>
            }
          />
        </Form.Item>

        <Form.Item
          label="启用定期扫描"
          tooltip="启用后，系统将根据设置的时间间隔自动扫描并保存网页"
        >
          <Switch
            checked={settings.enablePeriodicScan}
            onChange={handleTogglePeriodicScan}
            disabled={!settings.enabled}
          />
        </Form.Item>

        {settings.enablePeriodicScan && (
          <Form.Item
            label="扫描间隔时间"
            tooltip="定期扫描的时间间隔（分钟）"
          >
            <InputNumber
              min={1}
              max={1440}
              step={1}
              value={settings.scanInterval}
              onChange={handleScanIntervalChange}
              addonAfter="分钟"
              disabled={!settings.enabled || !settings.enablePeriodicScan}
            />
          </Form.Item>
        )}

        <Form.Item
          style={{ display: 'none' }} // 隐藏此选项
          label="保存延迟时间"
          tooltip="网页加载完成后，等待多少分钟后自动保存"
        >
          <InputNumber
            min={0.1}
            max={60}
            step={0.5}
            value={settings.saveDelay}
            onChange={handleSaveDelayChange}
            addonAfter="分钟"
            disabled={!settings.enabled}
          />
        </Form.Item>

        <Form.Item
          label="最大保存页面数量"
          tooltip="自动保存功能最多保存多少个页面，超过此数量将停止自动保存或删除最旧的页面"
        >
          <InputNumber
            min={10}
            max={1000}
            step={10}
            value={settings.maxPages}
            onChange={handleMaxPagesChange}
            addonAfter="页"
            disabled={!settings.enabled}
          />
          <div className="mt-1">
            <Text type="secondary">
              设置上限可以防止无限保存占用过多存储空间
            </Text>
          </div>
        </Form.Item>

        <Divider orientation="left">手动保存操作</Divider>

        <Form.Item
          label="保存当前已打开的所有标签页"
          tooltip="立即保存当前浏览器中所有已打开的标签页"
        >
          <Button
            type="primary"
            icon={<AppstoreOutlined />}
            onClick={handleSaveAllOpenTabs}
          >
            保存所有已打开标签页
          </Button>
          <div className="mt-1">
            <Text type="secondary">
              此操作将立即保存当前浏览器中所有已打开的标签页，不受自动保存规则限制
            </Text>
          </div>
        </Form.Item>
        
        <Form.Item
          label="手动扫描所有标签页"
          tooltip="扫描当前浏览器中所有已打开的标签页，根据规则自动保存符合条件的页面"
        >
          <Space direction="vertical">
            <Button
              type="default"
              icon={<SyncOutlined spin={scanning} />}
              onClick={handleManualScan}
              loading={scanning}
              disabled={!settings.enabled}
            >
              扫描所有标签页
            </Button>
            <div>
              <Text type="secondary">
                此操作将扫描当前浏览器中所有已打开的标签页，根据您设置的规则过滤并保存符合条件的页面
              </Text>
            </div>
          </Space>
        </Form.Item>
        
        {scanStats && (
          <Form.Item>
            <Alert
              type="info"
              showIcon
              message="最近扫描结果"
              description={
                <Space direction="vertical">
                  <Text>扫描了 {scanStats.scanned} 个页面</Text>
                  <Text>设置了 {scanStats.saved} 个保存任务</Text>
                  <Text>过滤了 {scanStats.filtered} 个页面</Text>
                </Space>
              }
            />
          </Form.Item>
        )}

        <Divider orientation="left">网站规则</Divider>

        <div className="mb-4 flex justify-between items-center">
          <Text>配置自动保存的网站规则，支持通配符和排除规则</Text>
          <Button
            type="primary"
            icon={<ExperimentOutlined />}
            onClick={handleOpenTestModal}
            disabled={!settings.enabled}
          >
            测试URL匹配
          </Button>
        </div>

        <Form.Item
          label="添加网站规则"
          tooltip="支持通配符，例如: *.example.com 或 example.com/*，使用!开头表示排除规则"
        >
          <Space.Compact style={{ width: '100%' }}>
            <Input
              placeholder="输入网站规则，例如: *.example.com"
              value={newWebsite}
              onChange={e => setNewWebsite(e.target.value)}
              disabled={!settings.enabled}
              prefix={<GlobalOutlined />}
            />
            <Button
              type="primary"
              onClick={handleAddWebsite}
              disabled={!settings.enabled || !newWebsite.trim()}
              icon={<PlusOutlined />}
            >
              添加
            </Button>
          </Space.Compact>
        </Form.Item>

        <List
          size="small"
          bordered
          dataSource={settings.websites}
          renderItem={rule => (
            <List.Item
              actions={[
                <Switch
                  key="toggle"
                  size="small"
                  checked={rule.enabled}
                  onChange={(checked) => handleToggleWebsite(rule.id, checked)}
                  disabled={!settings.enabled}
                />,
                <Tooltip key="edit" title="编辑">
                  <Button
                    type="text"
                    size="small"
                    icon={<EditOutlined />}
                    onClick={() => handleStartEdit(rule)}
                    disabled={!settings.enabled}
                  />
                </Tooltip>,
                <Tooltip key="delete" title="删除">
                  <Button
                    type="text"
                    danger
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteWebsite(rule.id)}
                    disabled={!settings.enabled}
                  />
                </Tooltip>
              ]}
            >
              {editingId === rule.id ? (
                <Space.Compact style={{ width: '100%' }}>
                  <Input
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    onPressEnter={handleSaveEdit}
                  />
                  <Button type="primary" onClick={handleSaveEdit}>保存</Button>
                </Space.Compact>
              ) : (
                <Space>
                  <Tag color={rule.enabled ? 'blue' : 'default'}>
                    {rule.pattern}
                  </Tag>
                  {rule.enabled ? (
                    <Text type="success">已启用</Text>
                  ) : (
                    <Text type="secondary">已禁用</Text>
                  )}
                </Space>
              )}
            </List.Item>
          )}
        />

        <div className="mt-4">
          <Text type="secondary">
            <ClockCircleOutlined /> 提示：自动保存的页面会自动添加 "auto-save" 标签，同一URL只会保留最新版本。
          </Text>
        </div>
      </Form>

      {/* 规则测试模态框 */}
      <Modal
        title="测试URL匹配规则"
        open={testModalVisible}
        onCancel={handleCloseTestModal}
        footer={[
          <Button key="close" onClick={handleCloseTestModal}>
            关闭
          </Button>,
          <Button key="test" type="primary" onClick={handleTestUrl}>
            测试
          </Button>
        ]}
      >
        <div className="mb-4">
          <Text>输入URL测试是否匹配当前规则</Text>
        </div>
        <Input
          placeholder="输入要测试的URL，例如: https://www.example.com"
          value={testUrl}
          onChange={e => setTestUrl(e.target.value)}
          onPressEnter={handleTestUrl}
          className="mb-4"
        />

        {testResults && (
          <div className="mt-4">
            <Divider>测试结果</Divider>

            <div className="mb-2">
              <Text strong>测试URL: </Text>
              <Text>{testResults.url}</Text>
            </div>

            <div className="mb-4">
              <Alert
                type={testResults.willSave ? "success" : "error"}
                message={
                  <div className="flex items-center">
                    {testResults.willSave ? (
                      <>
                        <CheckCircleOutlined className="mr-2 text-green-500" />
                        <Text strong>此URL将会被自动保存</Text>
                      </>
                    ) : (
                      <>
                        <CloseCircleOutlined className="mr-2 text-red-500" />
                        <Text strong>此URL不会被自动保存</Text>
                      </>
                    )}
                  </div>
                }
                showIcon={false}
              />
            </div>

            {testResults.matchedRules.length > 0 && (
              <div className="mb-2">
                <Text strong>匹配的规则:</Text>
                <div className="mt-1">
                  {testResults.matchedRules.map(rule => (
                    <Tag key={rule} color="green" className="mb-1">{rule}</Tag>
                  ))}
                </div>
              </div>
            )}

            {testResults.excludedByRules.length > 0 && (
              <div className="mb-2">
                <Text strong>被排除的规则:</Text>
                <div className="mt-1">
                  {testResults.excludedByRules.map(rule => (
                    <Tag key={rule} color="red" className="mb-1">{rule}</Tag>
                  ))}
                </div>
              </div>
            )}

            {testResults.matchedRules.length === 0 && testResults.excludedByRules.length === 0 && (
              <div className="mb-2">
                <Text type="secondary">此URL不匹配任何规则</Text>
              </div>
            )}
          </div>
        )}
      </Modal>
    </Card>
  );
};

export default AutoSaveSettings;