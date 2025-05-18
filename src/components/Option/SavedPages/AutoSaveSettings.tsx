import React, { useState, useEffect } from 'react';
import { Card, Switch, Input, Button, List, Tag, Tooltip, InputNumber, Form, Space, Divider, Typography, message } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, ClockCircleOutlined, GlobalOutlined, SaveOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Storage } from '@plasmohq/storage';
import { saveAllOpenTabs } from '@/services/auto-save';

const { Title, Text } = Typography;

// 自动保存设置的类型定义
export interface AutoSaveSettings {
  enabled: boolean;
  websites: WebsiteRule[];
  saveDelay: number; // 单位：分钟
  maxPages: number; // 最大保存页面数量
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
  saveDelay: 1,
  maxPages: 100 // 默认最大保存100个页面
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
  const storage = new Storage({ area: 'local' });

  // 加载设置
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
        if (savedSettings) {
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

  return (
    <Card title={<Title level={4}>自动保存设置</Title>} className="mb-4">
      <Form layout="vertical">
        <Form.Item
          label="启用自动保存"
          tooltip="启用后，系统将根据下方规则自动保存您浏览的网页"
        >
          <Switch
            checked={settings.enabled}
            onChange={handleToggleAutoSave}
            checkedChildren="开启"
            unCheckedChildren="关闭"
          />
        </Form.Item>

        <Form.Item
          label="保存延迟时间"
          tooltip="网页加载完成后，等待多少分钟后自动保存"
        >
          <InputNumber
            min={0.5}
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

        <Divider orientation="left">网站规则</Divider>

        <Form.Item
          label="添加网站规则"
          tooltip="支持通配符，例如: *.example.com 或 example.com/*"
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
    </Card>
  );
};

export default AutoSaveSettings;