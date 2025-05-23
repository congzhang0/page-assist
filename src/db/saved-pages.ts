import type { TaskSource } from '../services/auto-save';

export interface SavedPage {
  id: string;
  url: string;
  title: string;
  content: string;
  html?: string;
  type: 'article' | 'image' | 'video' | 'other';
  createdAt: number;
  updatedAt: number;
  tags: string[];
  notes: string;
  favicon?: string;
  rating?: number;
  summary?: string;
  source?: TaskSource;    // 保存来源
  sourceInfo?: string;    // 来源详细信息
} 