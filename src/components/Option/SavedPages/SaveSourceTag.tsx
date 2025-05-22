import React from 'react';
import { Tag, Tooltip } from 'antd';
import { UserOutlined, RobotOutlined, GlobalOutlined, QuestionOutlined } from '@ant-design/icons';
import { TaskSource } from '@/services/auto-save';

interface SaveSourceTagProps {
  source?: TaskSource;
  sourceInfo?: string;
  showLabel?: boolean;
}

/**
 * 显示页面保存来源的标签组件
 */
const SaveSourceTag: React.FC<SaveSourceTagProps> = ({ source, sourceInfo, showLabel = true }) => {
  if (!source) {
    return (
      <Tooltip title={sourceInfo || '未知来源'}>
        <Tag icon={<QuestionOutlined />} color="default">
          {showLabel ? '未知来源' : ''}
        </Tag>
      </Tooltip>
    );
  }

  switch (source) {
    case TaskSource.MANUAL:
      return (
        <Tooltip title={sourceInfo || '用户手动保存'}>
          <Tag icon={<UserOutlined />} color="blue">
            {showLabel ? '手动保存' : ''}
          </Tag>
        </Tooltip>
      );
    
    case TaskSource.AUTO_RULE:
      return (
        <Tooltip title={sourceInfo || '规则自动保存'}>
          <Tag icon={<RobotOutlined />} color="green">
            {showLabel ? '规则自动' : ''}
          </Tag>
        </Tooltip>
      );
    
    case TaskSource.AUTO_TABS:
      return (
        <Tooltip title={sourceInfo || '保存所有标签页'}>
          <Tag icon={<GlobalOutlined />} color="purple">
            {showLabel ? '标签批量' : ''}
          </Tag>
        </Tooltip>
      );
    
    default:
      return (
        <Tooltip title={sourceInfo || '未知来源'}>
          <Tag icon={<QuestionOutlined />} color="default">
            {showLabel ? '未知来源' : ''}
          </Tag>
        </Tooltip>
      );
  }
};

export default SaveSourceTag; 