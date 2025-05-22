/**
 * 自动保存页面服务
 * 提供自动保存网页的功能
 */

import { browser } from "wxt/browser";
import { Storage } from "@plasmohq/storage";
import { saveCurrentPage } from "./saved-pages";
import { getAllSavedPages } from "./saved-pages";
import logger from '@/utils/logger';
import { WebsiteRule } from "@/components/Option/SavedPages/AutoSaveSettings";
import type { SavedPage } from "@/db/savedpages";  // 导入SavedPage类型

// 存储键名
const STORAGE_KEY = 'auto_save_settings';
const TASKS_STORAGE_KEY = 'auto_save_tasks';

// 自动保存设置的类型定义
export interface AutoSaveSettings {
  enabled: boolean;
  websites: WebsiteRule[];
  saveDelay: number; // 单位：分钟
  maxPages: number; // 最大保存页面数量
  paused: boolean; // 是否暂停自动保存（临时停止但保留设置）
}

// 保存任务来源枚举
export enum TaskSource {
  MANUAL = 'manual',           // 手动保存
  AUTO_RULE = 'auto_rule',     // 规则自动保存
  AUTO_TABS = 'auto_tabs',     // 保存所有标签页
  UNKNOWN = 'unknown'          // 未知来源
}

// 保存任务状态枚举
export enum SaveTaskStatus {
  WAITING = 'waiting',   // 等待中
  SAVING = 'saving',     // 保存中
  COMPLETED = 'completed', // 已完成
  FAILED = 'failed'      // 失败
}

// 保存任务类型
export interface SaveTask {
  tabId: number;
  url: string;
  title?: string;
  timeoutId: NodeJS.Timeout | number | unknown;  // 支持NodeJS.Timeout和数字标识符
  createdAt: number;      // 创建时间
  scheduledAt: number;    // 计划保存时间
  status: SaveTaskStatus; // 任务状态
  error?: string;         // 错误信息（如果有）
  matchedRule?: string;   // 匹配的规则
  source?: TaskSource;    // 任务来源
  sourceInfo?: string;    // 来源详细信息
  steps?: SaveTaskStep[]; // 保存步骤记录
}

// 持久化的任务状态
export interface PersistentSaveTask {
  tabId: number;
  url: string;
  title?: string;         // Make title optional to match SaveTask
  createdAt: number;      // 创建时间
  scheduledAt: number;    // 计划保存时间
  status: SaveTaskStatus; // 任务状态
  error?: string;         // 错误信息（如果有）
  matchedRule?: string;   // 匹配的规则
  filtered: boolean;      // 是否被过滤
  filterReason?: string;  // 过滤原因
  source?: TaskSource;    // 任务来源
  sourceInfo?: string;    // 来源详细信息
  steps?: SaveTaskStep[]; // 保存步骤记录
}

// 保存任务步骤
export interface SaveTaskStep {
  step: string;          // 步骤名称
  timestamp: number;     // 时间戳
  status: 'success' | 'failed' | 'in_progress'; // 步骤状态
  message?: string;      // 相关信息
}

// 持久化的任务列表
export interface PersistentSaveTasks {
  tasks: PersistentSaveTask[];
  lastUpdated: number;    // 最后更新时间
  version: string;        // 数据版本，用于未来兼容性
}

// 当前保存任务列表
const saveTasks: Map<number, SaveTask> = new Map();

// 存储实例
const storage = new Storage({ area: 'local' });

// 心跳检查
const HEARTBEAT_INTERVAL = 5 * 60 * 1000; // 5分钟
let lastHeartbeat = Date.now();
let heartbeatIntervalId: number;

/**
 * 检查URL是否匹配规则
 * @param url 要检查的URL
 * @param pattern 匹配规则，支持通配符
 */
export const isUrlMatchPattern = (url: string, pattern: string): boolean => {
  if (pattern === '*') {
    logger.debug(`URL匹配: ${url} 匹配全局通配符 *`);
    return true;
  }

  try {
    // 提取URL的主要部分
    let urlObj: URL;
    try {
      // 确保URL格式正确
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      urlObj = new URL(url);
    } catch (e) {
      logger.error('无效的URL格式:', url);
      return false;
    }

    // 获取URL的主要部分
    const hostname = urlObj.hostname; // 例如 www.example.com
    const pathname = urlObj.pathname; // 例如 /path/to/page
    const fullUrl = urlObj.href; // 完整URL

    logger.debug(`URL解析: ${url} => 主机名=${hostname}, 路径=${pathname}, 完整URL=${fullUrl}`);

    // 处理不同类型的匹配模式
    if (pattern.startsWith('*.')) {
      // 域名通配符匹配，例如 *.example.com
      const domain = pattern.substring(2);
      // 检查是否是完全匹配或子域名匹配
      const isMatch = hostname === domain || hostname.endsWith('.' + domain);

      logger.debug(`域名通配符匹配: ${hostname} 与 ${pattern} => ${isMatch ? '匹配' : '不匹配'}`);
      logger.debug(`匹配详情: domain=${domain}, 检查条件1=${hostname === domain}, 检查条件2=${hostname.endsWith('.' + domain)}`);

      return isMatch;
    } else if (pattern.endsWith('/*')) {
      // 路径通配符匹配，例如 example.com/*
      const domainWithPath = pattern.substring(0, pattern.length - 2);

      // 修复路径通配符匹配逻辑，确保正确处理域名部分
      let isMatch = false;

      // 检查是否包含协议
      if (domainWithPath.includes('://')) {
        isMatch = fullUrl.startsWith(domainWithPath);
      } else {
        // 不包含协议，检查域名和路径
        isMatch = fullUrl.includes('://' + domainWithPath);
      }

      logger.debug(`路径通配符匹配: ${fullUrl} 与 ${pattern} => ${isMatch ? '匹配' : '不匹配'}`);
      return isMatch;
    } else if (!pattern.includes('*')) {
      // 精确匹配（不包含通配符）
      // 检查URL是否包含该模式
      const isMatch = fullUrl.includes(pattern) || hostname.includes(pattern);

      logger.debug(`精确匹配: ${fullUrl} 是否包含 ${pattern} => ${isMatch ? '匹配' : '不匹配'}`);
      return isMatch;
    } else {
      // 将通配符转换为正则表达式
      const regexPattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*');

      const regex = new RegExp(`^${regexPattern}$`);

      // 尝试匹配完整URL、主机名和路径
      const matchFullUrl = regex.test(fullUrl);
      const matchHostname = regex.test(hostname);
      const matchPathname = regex.test(pathname);
      const isMatch = matchFullUrl || matchHostname || matchPathname;

      logger.debug(`正则表达式匹配: ${url} 与 ${pattern} (正则=${regexPattern}) => ${isMatch ? '匹配' : '不匹配'}`);
      logger.debug(`匹配详情: 完整URL=${matchFullUrl}, 主机名=${matchHostname}, 路径=${matchPathname}`);

      return isMatch;
    }
  } catch (error) {
    logger.error('URL匹配规则解析错误:', error);
    return false;
  }
};

/**
 * 检查URL是否应该自动保存，并返回匹配的规则
 * @param url 要检查的URL
 * @param settings 自动保存设置
 * @returns 包含是否应该保存和匹配规则的对象
 */
export const shouldAutoSaveUrlWithRule = async (url: string, settings?: AutoSaveSettings): Promise<{
  shouldSave: boolean;
  matchedRule: string;
}> => {
  if (!url) {
    logger.debug('URL为空，不会自动保存');
    return { shouldSave: false, matchedRule: '' };
  }

  try {
    // 确保URL格式正确
    let normalizedUrl = url;
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = 'https://' + normalizedUrl;
      logger.debug(`URL格式标准化: ${url} => ${normalizedUrl}`);
    }

    // 如果没有提供设置，从存储中获取
    if (!settings) {
      settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
      logger.debug('从存储中获取自动保存设置', {
        enabled: settings?.enabled,
        paused: settings?.paused,
        rulesCount: settings?.websites?.length
      });
    }

    // 如果自动保存功能未启用或已暂停，返回false
    if (!settings || !settings.enabled) {
      logger.debug('自动保存功能未启用，不会自动保存', { url: normalizedUrl });
      return { shouldSave: false, matchedRule: '' };
    }

    if (settings.paused) {
      logger.debug('自动保存功能已暂停，不会自动保存', { url: normalizedUrl });
      return { shouldSave: false, matchedRule: '' };
    }

    // 获取所有启用的规则
    const enabledRules = settings.websites.filter(rule => rule.enabled);
    logger.debug('获取启用的规则', {
      url: normalizedUrl,
      enabledRulesCount: enabledRules.length,
      rules: enabledRules.map(r => r.pattern)
    });

    // 如果没有启用的规则，返回false
    if (enabledRules.length === 0) {
      logger.debug('没有启用的规则，不会自动保存', { url: normalizedUrl });
      return { shouldSave: false, matchedRule: '' };
    }

    // 规则优先级处理：
    // 1. 首先检查是否有明确的排除规则（以 "!" 开头的规则）
    // 2. 然后检查是否有明确的包含规则（精确匹配的规则）
    // 3. 最后检查通配符规则
    logger.debug('开始按优先级检查规则', { url: normalizedUrl });

    // 检查排除规则（以 "!" 开头的规则）
    const excludeRules = enabledRules.filter(rule => rule.pattern.startsWith('!'));
    logger.debug('检查排除规则', { url: normalizedUrl, excludeRulesCount: excludeRules.length });

    for (const rule of excludeRules) {
      const patternWithoutPrefix = rule.pattern.substring(1);
      logger.debug(`检查排除规则: ${normalizedUrl} 与 ${patternWithoutPrefix}`);

      if (isUrlMatchPattern(normalizedUrl, patternWithoutPrefix)) {
        logger.info(`URL ${normalizedUrl} 匹配排除规则 ${rule.pattern}，不会自动保存`);
        return { shouldSave: false, matchedRule: rule.pattern };
      }
    }

    // 检查精确匹配规则（不包含通配符的规则）
    const exactRules = enabledRules.filter(rule =>
      !rule.pattern.startsWith('!') && !rule.pattern.includes('*')
    );
    logger.debug('检查精确匹配规则', { url: normalizedUrl, exactRulesCount: exactRules.length });

    for (const rule of exactRules) {
      logger.debug(`检查精确规则: ${normalizedUrl} 与 ${rule.pattern}`);

      // 使用改进后的isUrlMatchPattern函数进行匹配
      if (isUrlMatchPattern(normalizedUrl, rule.pattern)) {
        logger.info(`URL ${normalizedUrl} 匹配精确规则 ${rule.pattern}，将自动保存`);
        return { shouldSave: true, matchedRule: rule.pattern };
      }
    }

    // 检查通配符规则
    const wildcardRules = enabledRules.filter(rule =>
      !rule.pattern.startsWith('!') && rule.pattern.includes('*')
    );
    logger.debug('检查通配符规则', { url: normalizedUrl, wildcardRulesCount: wildcardRules.length });

    for (const rule of wildcardRules) {
      logger.debug(`检查通配符规则: ${normalizedUrl} 与 ${rule.pattern}`);

      if (isUrlMatchPattern(normalizedUrl, rule.pattern)) {
        logger.info(`URL ${normalizedUrl} 匹配通配符规则 ${rule.pattern}，将自动保存`);
        return { shouldSave: true, matchedRule: rule.pattern };
      }
    }

    // 如果没有匹配任何规则，返回false
    logger.debug(`URL ${normalizedUrl} 不匹配任何规则，不会自动保存`);
    return { shouldSave: false, matchedRule: '' };
  } catch (error) {
    logger.error('检查URL是否应该自动保存时出错:', error);
    return { shouldSave: false, matchedRule: '' };
  }
};

/**
 * 检查URL是否应该自动保存
 * @param url 要检查的URL
 * @param settings 自动保存设置
 */
export const shouldAutoSaveUrl = async (url: string, settings?: AutoSaveSettings): Promise<boolean> => {
  const result = await shouldAutoSaveUrlWithRule(url, settings);
  return result.shouldSave;
};

/**
 * 检查URL是否已经保存过
 * @param url 要检查的URL
 */
export const isUrlAlreadySaved = async (url: string): Promise<boolean> => {
  try {
    const savedPages = await getAllSavedPages({ searchText: url });
    return savedPages.some(page => page.url === url);
  } catch (error) {
    logger.error('检查URL是否已保存时出错:', error);
    return false;
  }
};

/**
 * 检查是否已达到最大保存页面数量限制
 * @param settings 自动保存设置
 * @returns 是否已达到限制
 */
export const isMaxPageLimitReached = async (settings?: AutoSaveSettings): Promise<boolean> => {
  try {
    // 如果没有提供设置，从存储中获取
    if (!settings) {
      settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    }

    // 如果没有设置最大页面数量，或者设置为0（无限制），返回false
    if (!settings || !settings.maxPages) return false;

    // 获取当前保存的页面数量
    const savedPages = await getAllSavedPages();

    // 检查是否已达到限制
    return savedPages.length >= settings.maxPages;
  } catch (error) {
    logger.error('检查最大页面数量限制时出错:', error);
    return false; // 出错时默认不限制
  }
};

/**
 * 自动保存当前页面
 * @param tabId 标签页ID
 * @returns 保存的页面或void
 */
export const autoSavePage = async (tabId: number): Promise<SavedPage | void> => {
  try {
    // 获取任务信息，如果存在则更新状态
    const task = saveTasks.get(tabId);
    if (task) {
      task.status = SaveTaskStatus.SAVING;
      // 添加保存步骤
      if (!task.steps) {
        task.steps = [];
      }
      task.steps.push({
        step: '初始化',
        timestamp: Date.now(),
        status: 'in_progress',
        message: '开始保存页面'
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }

    // 获取标签页信息
    const tab = await browser.tabs.get(tabId);
    const url = tab.url;
    const title = tab.title || '';

    if (!url || url.startsWith('chrome://') || url.startsWith('edge://') || url.startsWith('about:')) {
      logger.debug('跳过保存浏览器内部页面:', url);
      
      // 更新任务状态为失败
      if (task) {
        task.status = SaveTaskStatus.FAILED;
        task.error = '无法保存浏览器内部页面';
        task.steps?.push({
          step: '验证URL',
          timestamp: Date.now(),
          status: 'failed',
          message: '无法保存浏览器内部页面'
        });
        saveTasks.set(tabId, task);
        await persistTasks();
      }
      
      return;
    }
    
    // 检查URL是否已经保存过，避免重复保存
    const alreadySaved = await isUrlAlreadySaved(url);
    if (alreadySaved) {
      logger.info(`URL已经保存过，跳过自动保存: ${url}`);
      
      // 更新任务状态为已完成，因为实际上这个URL已经保存过了
      if (task) {
        task.status = SaveTaskStatus.COMPLETED;
        task.steps?.push({
          step: '检查URL是否已保存',
          timestamp: Date.now(),
          status: 'success',
          message: 'URL已经保存过，跳过重复保存'
        });
        saveTasks.set(tabId, task);
        await persistTasks();
      }
      
      // 获取现有页面并返回
      const existingPages = await getAllSavedPages({ searchText: url });
      const existingPage = existingPages.find(page => page.url === url);
      if (existingPage) {
        return existingPage;
      }
      
      // 万一没找到精确匹配的页面(极少数情况)，继续保存流程
      logger.warn(`URL已存在但未找到精确匹配的页面，将继续保存流程: ${url}`);
    }

    // 检查URL是否应该自动保存
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    logger.debug('检查URL是否应该自动保存', {
      url,
      title,
      enabled: settings?.enabled,
      paused: settings?.paused
    });

    // 再次检查是否启用和暂停状态
    if (!settings || !settings.enabled) {
      logger.debug('自动保存功能未启用，跳过自动保存:', url);
      
      // 更新任务状态
      if (task) {
        task.status = SaveTaskStatus.FAILED;
        task.error = '自动保存功能未启用';
        task.steps?.push({
          step: '检查设置',
          timestamp: Date.now(),
          status: 'failed',
          message: '自动保存功能未启用'
        });
        saveTasks.set(tabId, task);
        await persistTasks();
      }
      
      return;
    }

    if (settings.paused) {
      logger.debug('自动保存功能已暂停，跳过自动保存:', url);
      
      // 更新任务状态
      if (task) {
        task.status = SaveTaskStatus.FAILED;
        task.error = '自动保存功能已暂停';
        task.steps?.push({
          step: '检查设置',
          timestamp: Date.now(),
          status: 'failed',
          message: '自动保存功能已暂停'
        });
        saveTasks.set(tabId, task);
        await persistTasks();
      }
      
      return;
    }

    // 记录步骤：检查设置
    if (task) {
      task.steps?.push({
        step: '检查设置',
        timestamp: Date.now(),
        status: 'success',
        message: '自动保存功能已启用'
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }

    // 检查URL是否匹配规则
    const shouldSave = await shouldAutoSaveUrl(url, settings);

    if (!shouldSave) {
      logger.debug('URL不符合自动保存规则，跳过自动保存:', url);
      
      // 更新任务状态
      if (task) {
        task.status = SaveTaskStatus.FAILED;
        task.error = 'URL不符合自动保存规则';
        task.steps?.push({
          step: '检查URL规则',
          timestamp: Date.now(),
          status: 'failed',
          message: 'URL不符合自动保存规则'
        });
        saveTasks.set(tabId, task);
        await persistTasks();
      }
      
      return;
    }

    // 记录步骤：检查URL规则
    if (task) {
      task.steps?.push({
        step: '检查URL规则',
        timestamp: Date.now(),
        status: 'success',
        message: 'URL符合自动保存规则'
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }

    // 检查是否已达到最大页面数量限制
    const isLimitReached = await isMaxPageLimitReached(settings);
    if (isLimitReached) {
      logger.warn(`已达到最大保存页面数量限制(${settings?.maxPages}页)，跳过自动保存:`, url);
      
      // 更新任务状态
      if (task) {
        task.status = SaveTaskStatus.FAILED;
        task.error = `已达到最大保存页面数量限制(${settings?.maxPages}页)`;
        task.steps?.push({
          step: '检查页面数量限制',
          timestamp: Date.now(),
          status: 'failed',
          message: `已达到最大保存页面数量限制(${settings?.maxPages}页)`
        });
        saveTasks.set(tabId, task);
        await persistTasks();
      }
      
      return;
    }

    // 记录步骤：检查页面数量限制
    if (task) {
      task.steps?.push({
        step: '检查页面数量限制',
        timestamp: Date.now(),
        status: 'success',
        message: '未达到最大保存页面数量限制'
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }

    // 记录步骤：开始保存页面
    if (task) {
      task.steps?.push({
        step: '保存页面',
        timestamp: Date.now(),
        status: 'in_progress',
        message: '正在保存页面内容'
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }

    // 自动保存页面，添加auto-save标签和来源信息
    const savedPage = await saveCurrentPage({
      tags: ['auto-save'],
      notes: task?.sourceInfo || '自动保存的页面',
      title: title, // 确保保存标题
      tabId: tabId,  // 传递标签页ID，确保能够获取正确的页面内容
      source: task?.source || TaskSource.AUTO_RULE,
      sourceInfo: task?.sourceInfo
    });

    logger.info('自动保存页面成功:', url);

    // 更新任务状态为已完成
    if (task) {
      task.status = SaveTaskStatus.COMPLETED;
      task.steps?.push({
        step: '保存页面',
        timestamp: Date.now(),
        status: 'success',
        message: '页面保存成功'
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }

    return savedPage;
  } catch (error) {
    logger.error('自动保存页面失败:', error);
    
    // 更新任务状态为失败
    const task = saveTasks.get(tabId);
    if (task) {
      task.status = SaveTaskStatus.FAILED;
      task.error = error instanceof Error ? error.message : String(error);
      task.steps?.push({
        step: '保存页面',
        timestamp: Date.now(),
        status: 'failed',
        message: error instanceof Error ? error.message : String(error)
      });
      saveTasks.set(tabId, task);
      await persistTasks();
    }
    
    throw error;
  }
};

/**
 * 为标签页设置自动保存任务
 * @param tabId 标签页ID
 * @param existingTask 可选的现有任务，用于从持久化存储恢复任务
 * @param source 任务来源
 * @param sourceInfo 来源详细信息
 */
export const setupAutoSaveTask = async (
  tabId: number, 
  existingTask?: PersistentSaveTask,
  source: TaskSource = TaskSource.AUTO_RULE,
  sourceInfo?: string
): Promise<void> => {
  try {
    // 获取自动保存设置
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    
    if (!settings || !settings.enabled || settings.paused) {
      logger.debug('自动保存功能未启用或已暂停，不设置任务');
      return;
    }

    // 获取标签页信息
    const tabInfo = await browser.tabs.get(tabId);
    const url = tabInfo.url || '';
    const title = tabInfo.title || '';

    logger.debug(`setupAutoSaveTask: 为标签页 ${tabId} 设置自动保存任务`, {
      url,
      title,
      source,
      sourceInfo
    });

    // 如果URL为空，直接返回
    if (!url) {
      logger.debug(`标签页 ${tabId} 没有URL，不设置任务`);
      return;
    }

    // 检查URL是否是扩展或浏览器内部页面
    if (url.startsWith('chrome://') || 
        url.startsWith('chrome-extension://') || 
        url.startsWith('edge://') || 
        url.startsWith('about:') ||
        url.startsWith('moz-extension://') ||
        url.startsWith('firefox:') ||
        url.startsWith('brave:')) {
      logger.debug(`标签页 ${tabId} 是浏览器内部页面，不设置任务`, { url });
      
      // 记录被过滤的URL
      await recordFilteredUrl(
        tabId, 
        url, 
        title, 
        '浏览器内部页面', 
        source, 
        sourceInfo || '浏览器内部页面不允许保存'
      );
      return;
    }

    // 检查是否已经保存过
    const isAlreadySaved = await isUrlAlreadySaved(url);
    if (isAlreadySaved) {
      logger.debug(`URL ${url} 已经保存过，不再设置任务`);
      
      // 记录被过滤的URL
      await recordFilteredUrl(
        tabId, 
        url, 
        title, 
        '页面已保存', 
        source, 
        sourceInfo || '页面已经存在于保存列表中'
      );
      return;
    }

    // 检查是否已经达到最大保存页面数量
    const isLimitReached = await isMaxPageLimitReached(settings);
    if (isLimitReached) {
      logger.debug(`已达到最大保存页面数量限制 (${settings.maxPages})，不设置任务`);
      
      // 记录被过滤的URL
      await recordFilteredUrl(
        tabId, 
        url, 
        title, 
        '达到最大保存数量', 
        source, 
        sourceInfo || `已达到最大保存页面数量限制 (${settings.maxPages})`
      );
      return;
    }

    // 判断URL是否应该保存
    const { shouldSave, matchedRule } = await shouldAutoSaveUrlWithRule(url, settings);
    
    if (!shouldSave) {
      logger.debug(`URL ${url} 不符合自动保存规则，不设置任务`);
      
      // 记录被过滤的URL
      await recordFilteredUrl(
        tabId, 
        url, 
        title, 
        '不符合保存规则', 
        source, 
        sourceInfo || (matchedRule ? `匹配排除规则: ${matchedRule}` : '不匹配任何包含规则')
      );
      return;
    }

    // 计算延迟时间
    const delayMinutes = settings.saveDelay || 1; // 默认1分钟
    const delayMs = delayMinutes * 60 * 1000;

    // 如果已经有同一个标签页的任务，先清除
    await clearAutoSaveTask(tabId);

    // 设置新的保存任务
    const timeoutId = setTimeout(async () => {
      try {
        // 将任务状态更新为正在保存
        const existingTask = saveTasks.get(tabId);
        if (existingTask) {
          existingTask.status = SaveTaskStatus.SAVING;
          saveTasks.set(tabId, existingTask);
          await persistTasks();
        }

        // 获取最新的标签页信息
        const currentTabInfo = await browser.tabs.get(tabId);
        const currentUrl = currentTabInfo.url || '';
        const currentTitle = currentTabInfo.title || '';

        // 执行保存
        await autoSavePage(tabId);

        // 从任务列表中移除任务并记录为已完成
        const taskToUpdate = saveTasks.get(tabId);
        if (taskToUpdate) {
          taskToUpdate.status = SaveTaskStatus.COMPLETED;
          saveTasks.set(tabId, taskToUpdate);
          await persistTasks();
        }

        logger.info(`自动保存任务成功完成: ${currentTitle} (${currentUrl})`);
      } catch (error) {
        logger.error(`自动保存任务执行失败:`, error);

        // 更新任务状态为失败
        const taskToUpdate = saveTasks.get(tabId);
        if (taskToUpdate) {
          taskToUpdate.status = SaveTaskStatus.FAILED;
          taskToUpdate.error = error instanceof Error ? error.message : String(error);
          saveTasks.set(tabId, taskToUpdate);
          await persistTasks();
        }
      }
    }, existingTask ? 0 : delayMs); // 如果是恢复任务且已过期，立即执行

    // 存储任务信息
    const task: SaveTask = {
      tabId,
      url,
      title,
      timeoutId,
      createdAt: Date.now(),
      scheduledAt: Date.now() + delayMs,
      status: SaveTaskStatus.WAITING,
      matchedRule: matchedRule || undefined,
      source,
      sourceInfo
    };

    saveTasks.set(tabId, task);
    await persistTasks();

    logger.info(`设置了自动保存任务: ${title} (${url}), 将在 ${delayMinutes} 分钟后保存`);
  } catch (error) {
    logger.error(`设置自动保存任务失败:`, error);
  }
};

/**
 * 记录被过滤的URL
 * @param tabId 标签页ID
 * @param url URL
 * @param title 页面标题
 * @param reason 过滤原因
 * @param source 任务来源
 * @param sourceInfo 来源详细信息
 */
const recordFilteredUrl = async (
  tabId: number, 
  url: string, 
  title: string, 
  reason: string,
  source: TaskSource = TaskSource.UNKNOWN,
  sourceInfo?: string
): Promise<void> => {
  try {
    // 创建一个虚拟任务来记录被过滤的URL
    const virtualTask: SaveTask = {
      tabId,
      url,
      title,
      timeoutId: -1, // 使用-1表示这是一个虚拟任务（被过滤的URL）
      createdAt: Date.now(),
      scheduledAt: Date.now(),
      status: SaveTaskStatus.WAITING,
      source,
      sourceInfo
    };

    saveTasks.set(tabId, virtualTask);
    await persistTasks();

    logger.debug(`记录了被过滤的URL: ${title} (${url}), 原因: ${reason}`);
  } catch (error) {
    logger.error(`记录被过滤的URL失败:`, error);
  }
};

/**
 * 清除标签页的自动保存任务
 * @param tabId 标签页ID
 */
export const clearAutoSaveTask = async (tabId: number): Promise<void> => {
  const task = saveTasks.get(tabId);
  if (task) {
    // 检查timeoutId类型并安全地清除定时器
    if (typeof task.timeoutId === 'number' && task.timeoutId > 0) {
      clearTimeout(task.timeoutId as number);
    } else if (task.timeoutId) {
      // 尝试清除其他类型的定时器
      try {
        clearTimeout(task.timeoutId as NodeJS.Timeout);
      } catch (e) {
        logger.error(`清除定时器失败: ${e}`);
      }
    }
    
    saveTasks.delete(tabId);
    logger.debug(`已清除标签页 ${tabId} 的自动保存任务`);

    // 从持久化存储中删除任务
    try {
      const persistentData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);
      if (persistentData && persistentData.tasks) {
        // 保留被过滤的任务和其他标签页的任务
        persistentData.tasks = persistentData.tasks.filter(t => t.tabId !== tabId || t.filtered);
        persistentData.lastUpdated = Date.now();
        await storage.set(TASKS_STORAGE_KEY, persistentData);
        logger.debug(`已从持久化存储中删除标签页 ${tabId} 的自动保存任务`);
      }
    } catch (error) {
      logger.error(`从持久化存储中删除标签页 ${tabId} 的自动保存任务失败:`, error);
    }
  }
};

/**
 * 保存任务状态到存储
 */
const persistTasks = async (): Promise<void> => {
  try {
    // 转换当前任务为持久化格式
    const persistentTasks: PersistentSaveTask[] = [];
    
    // 遍历当前任务映射
    for (const [tabId, task] of saveTasks.entries()) {
      // 确定是否是被过滤的任务
      const isFiltered = task.timeoutId === -1;
      
      // 构建持久化任务对象
      const persistentTask: PersistentSaveTask = {
        tabId: task.tabId,
        url: task.url,
        title: task.title,
        createdAt: task.createdAt,
        scheduledAt: task.scheduledAt,
        status: task.status,
        error: task.error,
        matchedRule: task.matchedRule,
        filtered: isFiltered,
        filterReason: isFiltered ? (task.sourceInfo || '未知原因') : undefined,
        source: task.source,
        sourceInfo: task.sourceInfo
      };
      
      persistentTasks.push(persistentTask);
    }
    
    // 获取之前的持久化数据
    const previousData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);
    
    // 保留之前的已完成和失败任务记录
    let historicalTasks: PersistentSaveTask[] = [];
    if (previousData && previousData.tasks) {
      // 获取已完成和失败的任务记录
      historicalTasks = previousData.tasks.filter(task => 
        (task.status === SaveTaskStatus.COMPLETED || task.status === SaveTaskStatus.FAILED) &&
        // 避免任务重复，只保留当前内存中没有的任务
        !saveTasks.has(task.tabId)
      );
    }
    
    // 创建持久化数据结构，合并当前任务和历史任务
    const persistentData: PersistentSaveTasks = {
      tasks: [...persistentTasks, ...historicalTasks],
      lastUpdated: Date.now(),
      version: '1.2' // 更新版本号以反映新的任务格式和历史记录保留功能
    };
    
    // 保存到存储
    await storage.set(TASKS_STORAGE_KEY, persistentData);
    
    logger.debug(`保存了 ${persistentTasks.length} 个当前任务和 ${historicalTasks.length} 个历史任务到持久化存储`);
  } catch (error) {
    logger.error('保存任务到持久化存储失败:', error);
  }
};

/**
 * 从存储加载任务状态
 */
const loadTasks = async (): Promise<void> => {
  try {
    const persistentData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);

    if (!persistentData || !persistentData.tasks) {
      logger.debug('存储中没有保存的任务状态');
      return;
    }

    // 获取非过滤的任务
    const nonFilteredTasks = persistentData.tasks.filter(task => !task.filtered);

    logger.info(`从存储加载了 ${nonFilteredTasks.length} 个自动保存任务`);

    // 清除当前内存中的任务
    saveTasks.forEach((_, tabId) => {
      const task = saveTasks.get(tabId);
      if (task && task.timeoutId) {
        try {
          if (typeof task.timeoutId === 'number' && task.timeoutId > 0) {
            clearTimeout(task.timeoutId);
          } else {
            clearTimeout(task.timeoutId as NodeJS.Timeout);
          }
        } catch (e) {
          // 忽略清除错误
        }
      }
    });
    saveTasks.clear();

    // 恢复任务状态
    for (const task of nonFilteredTasks) {
      // 检查标签页是否仍然存在
      try {
        const tab = await browser.tabs.get(task.tabId);
        if (!tab || !tab.url) continue;

        // 如果任务状态是等待中，且计划时间尚未到达，重新设置定时器
        if (task.status === SaveTaskStatus.WAITING && task.scheduledAt > Date.now()) {
          setupAutoSaveTask(task.tabId, task);
        }
        // 如果任务已过期但未执行，立即执行
        else if (task.status === SaveTaskStatus.WAITING && task.scheduledAt <= Date.now()) {
          autoSavePage(task.tabId);
        }
      } catch (error) {
        // 标签页不存在，忽略此任务
        logger.debug(`标签页 ${task.tabId} 不存在，忽略恢复任务`, { url: task.url });
      }
    }
  } catch (error) {
    logger.error('从存储加载任务状态失败:', error);
  }
};

/**
 * 获取当前所有保存任务
 * @returns 当前所有保存任务的数组
 */
export const getAllSaveTasks = async (): Promise<SaveTask[]> => {
  // 返回内存中的任务
  const memoryTasks = Array.from(saveTasks.values());

  try {
    // 获取持久化的任务
    const persistentData = await storage.get<PersistentSaveTasks>(TASKS_STORAGE_KEY);
    if (!persistentData || !persistentData.tasks) {
      return memoryTasks;
    }

    // 获取所有持久化的任务
    const persistentTasks = persistentData.tasks;

    // 将持久化任务转换为SaveTask格式
    const historicalTasks: SaveTask[] = persistentTasks
      // 过滤掉内存中已有的任务（避免重复）
      .filter(task => !saveTasks.has(task.tabId))
      // 转换为SaveTask格式
      .map(task => ({
        ...task,
        // 为不同类型的任务设置特殊的timeoutId值
        timeoutId: task.filtered ? -1 : 
                  task.status === SaveTaskStatus.COMPLETED ? -2 : 
                  task.status === SaveTaskStatus.FAILED ? -3 : -4, // 其他状态
      }));

    // 合并内存中的任务和持久化的任务
    return [...memoryTasks, ...historicalTasks];
  } catch (error) {
    logger.error('获取所有保存任务失败:', error);
    return memoryTasks;
  }
};

/**
 * 保存所有已打开的标签页
 */
export const saveAllOpenTabs = async (): Promise<{
  success: boolean;
  savedCount: number;
  skippedCount: number;
  error?: string;
}> => {
  try {
    // 获取所有标签页
    const tabs = await browser.tabs.query({});
    let savedCount = 0;
    let skippedCount = 0;
    
    logger.info(`准备保存所有打开的标签页，共 ${tabs.length} 个`);
    
    // 处理每个标签页
    for (const tab of tabs) {
      if (!tab.id || !tab.url) {
        skippedCount++;
        continue;
      }
      
      // 对于扩展和浏览器内部页面，跳过
      if (tab.url.startsWith('chrome://') || 
          tab.url.startsWith('chrome-extension://') || 
          tab.url.startsWith('edge://') || 
          tab.url.startsWith('about:') ||
          tab.url.startsWith('moz-extension://') ||
          tab.url.startsWith('firefox:') ||
          tab.url.startsWith('brave:')) {
        logger.debug(`跳过浏览器内部页面: ${tab.url}`);
        skippedCount++;
        continue;
      }
      
      // 检查是否已经保存过
      const isAlreadySaved = await isUrlAlreadySaved(tab.url);
      if (isAlreadySaved) {
        logger.debug(`跳过已保存的页面: ${tab.url}`);
        skippedCount++;
        
        // 记录被跳过的URL
        await recordFilteredUrl(
          tab.id, 
          tab.url, 
          tab.title || '', 
          '页面已保存',
          TaskSource.AUTO_TABS,
          '保存所有标签页时跳过已保存内容'
        );
        continue;
      }
      
      try {
        // 设置立即执行的任务
        await setupAutoSaveTask(
          tab.id, 
          undefined, 
          TaskSource.AUTO_TABS,
          '用户触发保存所有标签页'
        );
        savedCount++;
      } catch (error) {
        logger.error(`设置标签页 ${tab.id} 的保存任务失败:`, error);
        skippedCount++;
      }
    }
    
    logger.info(`保存所有标签页操作完成: 成功设置 ${savedCount} 个任务，跳过 ${skippedCount} 个标签页`);
    
    return {
      success: true,
      savedCount,
      skippedCount
    };
  } catch (error) {
    logger.error(`保存所有标签页失败:`, error);
    return {
      success: false,
      savedCount: 0,
      skippedCount: 0,
      error: error instanceof Error ? error.message : String(error)
    };
  }
};

/**
 * 检查所有打开的标签页
 */
export const checkAllTabs = async (): Promise<void> => {
  try {
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);

    // 如果自动保存功能已启用且未暂停，为所有打开的标签页设置自动保存任务
    if (settings?.enabled && !settings.paused) {
      const tabs = await browser.tabs.query({});
      logger.info(`检查所有标签页，共 ${tabs.length} 个标签页`);

      for (const tab of tabs) {
        if (tab.id) await setupAutoSaveTask(tab.id);
      }
    }
  } catch (error) {
    logger.error('检查所有标签页时出错:', error);
  }
};

/**
 * 手动检查所有标签页并返回统计信息
 */
export const manualCheckAllTabs = async (): Promise<{
  checked: number;
  setup: number;
  filtered: number;
}> => {
  try {
    const tabs = await browser.tabs.query({});
    let checkedCount = 0;
    let setupCount = 0;
    let filteredCount = 0;

    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    if (!settings || !settings.enabled || settings.paused) {
      return { checked: 0, setup: 0, filtered: 0 };
    }

    for (const tab of tabs) {
      if (!tab.id || !tab.url) continue;

      checkedCount++;

      // 检查URL是否应该自动保存
      const matchResult = await shouldAutoSaveUrlWithRule(tab.url, settings);
      if (matchResult.shouldSave) {
        await setupAutoSaveTask(tab.id);
        setupCount++;
      } else {
        // 记录被过滤的URL
        await recordFilteredUrl(tab.id, tab.url, tab.title || '', '手动检查：不匹配任何规则');
        filteredCount++;
      }
    }

    return { checked: checkedCount, setup: setupCount, filtered: filteredCount };
  } catch (error) {
    logger.error('手动检查所有标签页时出错:', error);
    return { checked: 0, setup: 0, filtered: 0 };
  }
};

/**
 * 启动心跳检查
 */
const startHeartbeat = (): void => {
  // 清除可能存在的旧定时器
  if (heartbeatIntervalId) {
    clearInterval(heartbeatIntervalId);
  }

  // 设置新的心跳检查
  heartbeatIntervalId = setInterval(() => {
    const now = Date.now();
    const timeSinceLastHeartbeat = now - lastHeartbeat;

    // 如果上次心跳时间距离现在超过了两倍的心跳间隔，说明可能发生了休眠
    if (timeSinceLastHeartbeat > HEARTBEAT_INTERVAL * 2) {
      logger.info('检测到可能的系统休眠，重新初始化自动保存功能', {
        timeSinceLastHeartbeat: Math.floor(timeSinceLastHeartbeat / 1000) + '秒'
      });

      // 重新加载任务状态并检查所有标签页
      loadTasks().then(() => {
        checkAllTabs();
      });
    }

    lastHeartbeat = now;
  }, HEARTBEAT_INTERVAL);

  logger.debug('已启动自动保存心跳检查机制');
};

/**
 * 更新自动保存状态指示器
 */
export const updateAutoSaveStatus = async (status?: string): Promise<void> => {
  try {
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);

    if (!settings || !settings.enabled) {
      browser.action.setBadgeText({ text: 'OFF' });
      browser.action.setBadgeBackgroundColor({ color: '#F44336' }); // 红色
      browser.action.setTitle({ title: '自动保存功能已禁用' });
    } else if (settings.paused) {
      browser.action.setBadgeText({ text: 'PAUSE' });
      browser.action.setBadgeBackgroundColor({ color: '#FFC107' }); // 黄色
      browser.action.setTitle({ title: '自动保存功能已暂停' });
    } else {
      browser.action.setBadgeText({ text: 'ON' });
      browser.action.setBadgeBackgroundColor({ color: '#4CAF50' }); // 绿色
      browser.action.setTitle({ title: '自动保存功能已启用' });
    }

    if (status) {
      browser.action.setBadgeText({ text: status });
    }
  } catch (error) {
    logger.error('更新自动保存状态指示器失败:', error);
  }
};

/**
 * 初始化自动保存功能
 */
export const initAutoSave = (): void => {
  // 从存储加载任务状态
  loadTasks().then(() => {
    logger.info('已从存储加载自动保存任务状态');
  });

  // 启动心跳检查
  startHeartbeat();

  // 更新状态指示器
  updateAutoSaveStatus();

  // 监听标签页更新事件
  browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // 当页面加载完成时设置自动保存任务
    if (changeInfo.status === 'complete' && tab.url) {
      setupAutoSaveTask(tabId);

      // 更新心跳时间
      lastHeartbeat = Date.now();
    }
  });

  // 监听标签页关闭事件
  browser.tabs.onRemoved.addListener((tabId) => {
    clearAutoSaveTask(tabId);

    // 更新心跳时间
    lastHeartbeat = Date.now();
  });

  // 监听设置变更
  storage.watch({
    [STORAGE_KEY]: async (change) => {
      const newSettings = change?.newValue as AutoSaveSettings | undefined;
      const oldSettings = change?.oldValue as AutoSaveSettings | undefined;

      logger.debug('自动保存设置已变更', {
        oldEnabled: oldSettings?.enabled,
        oldPaused: oldSettings?.paused,
        newEnabled: newSettings?.enabled,
        newPaused: newSettings?.paused
      });

      // 更新状态指示器
      updateAutoSaveStatus();

      // 如果设置从禁用变为启用，且未暂停，为所有打开的标签页设置自动保存任务
      if (newSettings?.enabled && !newSettings.paused &&
          (!oldSettings || !oldSettings.enabled || oldSettings.paused)) {
        const tabs = await browser.tabs.query({});
        logger.info(`自动保存功能已启用或恢复，为 ${tabs.length} 个标签页设置自动保存任务`);

        for (const tab of tabs) {
          if (tab.id) await setupAutoSaveTask(tab.id);
        }
      }

      // 如果设置从启用变为禁用，或从未暂停变为暂停，清除所有自动保存任务
      if ((oldSettings?.enabled && (!newSettings || !newSettings.enabled)) ||
          (oldSettings?.enabled && !oldSettings.paused && newSettings?.enabled && newSettings.paused)) {

        const taskCount = saveTasks.size;
        logger.info(`清除所有自动保存任务，共 ${taskCount} 个任务`);

        for (const task of Array.from(saveTasks.values())) {
          await clearAutoSaveTask(task.tabId);
        }

        if (newSettings?.paused) {
          logger.info('自动保存功能已暂停，所有保存任务已清除');
        } else {
          logger.info('自动保存功能已禁用，所有保存任务已清除');
        }
      }
    }
  });

  // 监听浏览器启动事件
  browser.runtime.onStartup.addListener(() => {
    logger.info('浏览器启动，初始化自动保存功能');
    loadTasks().then(() => {
      checkAllTabs();
    });
  });

  // 监听扩展安装/更新事件
  browser.runtime.onInstalled.addListener(() => {
    logger.info('扩展安装或更新，初始化自动保存功能');
    loadTasks().then(() => {
      checkAllTabs();
    });
  });

  // 初始化时检查是否有需要设置自动保存任务的标签页
  (async () => {
    try {
      const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);

      // 如果自动保存功能已启用且未暂停，为所有打开的标签页设置自动保存任务
      if (settings?.enabled && !settings.paused) {
        const tabs = await browser.tabs.query({});
        logger.info(`初始化自动保存功能，为 ${tabs.length} 个标签页检查自动保存规则`);

        for (const tab of tabs) {
          if (tab.id) await setupAutoSaveTask(tab.id);
        }
      }
    } catch (error) {
      logger.error('初始化自动保存任务时出错:', error);
    }
  })();

  logger.info('自动保存功能已初始化');
};

/**
 * 手动保存当前页面
 * @param tabId 标签页ID
 * @param sourceInfo 来源详细信息
 */
export const manualSaveCurrentPage = async (tabId: number, sourceInfo?: string): Promise<void> => {
  try {
    // 添加到任务列表，立即执行
    const tabInfo = await browser.tabs.get(tabId);
    const url = tabInfo.url || '';
    const title = tabInfo.title || '';
    
    if (!url) {
      throw new Error('无法获取页面URL');
    }
    
    // 清除可能存在的任务
    await clearAutoSaveTask(tabId);
    
    // 创建新任务（立即执行）
    const task: SaveTask = {
      tabId,
      url,
      title,
      timeoutId: -3, // 特殊标记，表示手动立即保存
      createdAt: Date.now(),
      scheduledAt: Date.now(),
      status: SaveTaskStatus.SAVING,
      source: TaskSource.MANUAL,
      sourceInfo: sourceInfo || '用户手动保存'
    };
    
    saveTasks.set(tabId, task);
    await persistTasks();
    
    // 执行保存
    await autoSavePage(tabId);
    
    // 更新状态
    const taskToUpdate = saveTasks.get(tabId);
    if (taskToUpdate) {
      taskToUpdate.status = SaveTaskStatus.COMPLETED;
      saveTasks.set(tabId, taskToUpdate);
      await persistTasks();
    }
    
    logger.info(`手动保存页面成功: ${title} (${url})`);
  } catch (error) {
    logger.error(`手动保存页面失败:`, error);
    
    // 记录错误
    const taskToUpdate = saveTasks.get(tabId);
    if (taskToUpdate) {
      taskToUpdate.status = SaveTaskStatus.FAILED;
      taskToUpdate.error = error instanceof Error ? error.message : String(error);
      saveTasks.set(tabId, taskToUpdate);
      await persistTasks();
    }
    
    throw error;
  }
};