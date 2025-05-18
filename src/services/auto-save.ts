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

// 存储键名
const STORAGE_KEY = 'auto_save_settings';

// 自动保存设置的类型定义
export interface AutoSaveSettings {
  enabled: boolean;
  websites: WebsiteRule[];
  saveDelay: number; // 单位：分钟
  maxPages: number; // 最大保存页面数量
}

// 保存任务类型
interface SaveTask {
  tabId: number;
  url: string;
  timeoutId: number;
}

// 当前保存任务列表
const saveTasks: Map<number, SaveTask> = new Map();

// 存储实例
const storage = new Storage({ area: 'local' });

/**
 * 检查URL是否匹配规则
 * @param url 要检查的URL
 * @param pattern 匹配规则，支持通配符
 */
export const isUrlMatchPattern = (url: string, pattern: string): boolean => {
  if (pattern === '*') return true;

  try {
    // 将通配符转换为正则表达式
    const regexPattern = pattern
      .replace(/\./g, '\\.')
      .replace(/\*/g, '.*');

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  } catch (error) {
    logger.error('URL匹配规则解析错误:', error);
    return false;
  }
};

/**
 * 检查URL是否应该自动保存
 * @param url 要检查的URL
 * @param settings 自动保存设置
 */
export const shouldAutoSaveUrl = async (url: string, settings?: AutoSaveSettings): Promise<boolean> => {
  if (!url) return false;

  try {
    // 如果没有提供设置，从存储中获取
    if (!settings) {
      settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    }

    // 如果自动保存功能未启用，返回false
    if (!settings || !settings.enabled) return false;

    // 检查URL是否匹配任何启用的规则
    return settings.websites
      .filter(rule => rule.enabled)
      .some(rule => isUrlMatchPattern(url, rule.pattern));
  } catch (error) {
    logger.error('检查URL是否应该自动保存时出错:', error);
    return false;
  }
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
 */
export const autoSavePage = async (tabId: number): Promise<void> => {
  try {
    // 获取标签页信息
    const tab = await browser.tabs.get(tabId);
    const url = tab.url;

    if (!url || url.startsWith('chrome://') || url.startsWith('edge://') || url.startsWith('about:')) {
      logger.debug('跳过保存浏览器内部页面:', url);
      return;
    }

    // 检查URL是否应该自动保存
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    const shouldSave = await shouldAutoSaveUrl(url, settings);

    if (!shouldSave) {
      logger.debug('URL不符合自动保存规则:', url);
      return;
    }

    // 检查是否已达到最大页面数量限制
    const isLimitReached = await isMaxPageLimitReached(settings);
    if (isLimitReached) {
      logger.warn(`已达到最大保存页面数量限制(${settings?.maxPages}页)，跳过自动保存:`, url);
      return;
    }

    // 检查URL是否已经保存过
    const alreadySaved = await isUrlAlreadySaved(url);
    if (alreadySaved) {
      logger.debug('URL已经保存过，将更新:', url);
    }

    // 自动保存页面，添加auto-save标签
    await saveCurrentPage({
      tags: ['auto-save'],
      notes: '自动保存的页面'
    });

    logger.info('自动保存页面成功:', url);
  } catch (error) {
    logger.error('自动保存页面失败:', error);
  }
};

/**
 * 为标签页设置自动保存任务
 * @param tabId 标签页ID
 */
export const setupAutoSaveTask = async (tabId: number): Promise<void> => {
  try {
    // 获取标签页信息
    const tab = await browser.tabs.get(tabId);
    const url = tab.url;

    if (!url || url.startsWith('chrome://') || url.startsWith('edge://') || url.startsWith('about:')) {
      return;
    }

    // 获取自动保存设置
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    if (!settings || !settings.enabled) return;

    // 检查URL是否应该自动保存
    const shouldSave = await shouldAutoSaveUrl(url, settings);
    if (!shouldSave) return;

    // 清除之前的任务（如果存在）
    clearAutoSaveTask(tabId);

    // 设置新的自动保存任务
    const delayMs = settings.saveDelay * 60 * 1000; // 转换为毫秒
    const timeoutId = setTimeout(() => {
      autoSavePage(tabId);
      saveTasks.delete(tabId);
    }, delayMs);

    // 保存任务信息
    saveTasks.set(tabId, { tabId, url, timeoutId });

    logger.debug(`已为标签页 ${tabId} 设置自动保存任务，延迟: ${settings.saveDelay} 分钟`);
  } catch (error) {
    logger.error('设置自动保存任务失败:', error);
  }
};

/**
 * 清除标签页的自动保存任务
 * @param tabId 标签页ID
 */
export const clearAutoSaveTask = (tabId: number): void => {
  const task = saveTasks.get(tabId);
  if (task) {
    clearTimeout(task.timeoutId);
    saveTasks.delete(tabId);
    logger.debug(`已清除标签页 ${tabId} 的自动保存任务`);
  }
};

/**
 * 保存所有已打开的标签页
 * @returns 保存结果
 */
export const saveAllOpenTabs = async (): Promise<{
  success: boolean;
  savedCount: number;
  skippedCount: number;
  error?: string;
}> => {
  try {
    logger.info('开始保存所有已打开的标签页');

    // 获取所有打开的标签页
    const tabs = await browser.tabs.query({});

    let savedCount = 0;
    let skippedCount = 0;

    // 获取设置，检查是否有页面数量限制
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);
    const maxPages = settings?.maxPages || 0;

    // 获取当前已保存的页面数量
    const savedPages = await getAllSavedPages();
    const currentPageCount = savedPages.length;

    // 如果有页面数量限制，检查是否会超过限制
    if (maxPages > 0 && currentPageCount + tabs.length > maxPages) {
      const remainingSlots = Math.max(0, maxPages - currentPageCount);

      if (remainingSlots === 0) {
        logger.warn(`已达到最大保存页面数量限制(${maxPages}页)，无法保存更多页面`);
        return {
          success: true,
          savedCount: 0,
          skippedCount: tabs.length,
          error: `已达到最大保存页面数量限制(${maxPages}页)，无法保存更多页面`
        };
      }

      logger.warn(`由于页面数量限制(${maxPages}页)，只能保存 ${remainingSlots} 个标签页`);
    }

    // 遍历所有标签页
    for (const tab of tabs) {
      // 跳过浏览器内部页面
      if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('edge://') || tab.url.startsWith('about:')) {
        logger.debug('跳过保存浏览器内部页面:', tab.url);
        skippedCount++;
        continue;
      }

      // 检查是否已达到最大页面数量限制
      if (maxPages > 0 && currentPageCount + savedCount >= maxPages) {
        logger.warn(`已达到最大保存页面数量限制(${maxPages}页)，停止保存更多页面`);
        skippedCount += (tabs.length - savedCount - skippedCount);
        break;
      }

      try {
        // 激活标签页，以便获取其内容
        await browser.tabs.update(tab.id!, { active: true });

        // 等待一小段时间，确保标签页完全加载
        await new Promise(resolve => setTimeout(resolve, 500));

        // 保存页面
        await saveCurrentPage({
          tags: ['manual-save', 'batch-save'],
          notes: '批量保存的页面'
        });

        savedCount++;
        logger.info(`成功保存标签页 ${savedCount}/${tabs.length}: ${tab.url}`);
      } catch (error) {
        logger.error(`保存标签页失败: ${tab.url}`, error);
        skippedCount++;
      }
    }

    logger.info(`保存所有标签页完成，成功: ${savedCount}，跳过: ${skippedCount}`);

    return {
      success: true,
      savedCount,
      skippedCount
    };
  } catch (error) {
    logger.error('保存所有标签页过程中发生错误', error);
    return {
      success: false,
      savedCount: 0,
      skippedCount: 0,
      error: error instanceof Error ? error.message : '未知错误'
    };
  }
};

/**
 * 初始化自动保存功能
 */
export const initAutoSave = (): void => {
  // 监听标签页更新事件
  browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // 当页面加载完成时设置自动保存任务
    if (changeInfo.status === 'complete' && tab.url) {
      setupAutoSaveTask(tabId);
    }
  });

  // 监听标签页关闭事件
  browser.tabs.onRemoved.addListener((tabId) => {
    clearAutoSaveTask(tabId);
  });

  // 监听设置变更
  storage.watch({
    [STORAGE_KEY]: async (change) => {
      const newSettings = change?.newValue as AutoSaveSettings | undefined;
      const oldSettings = change?.oldValue as AutoSaveSettings | undefined;

      // 如果设置从禁用变为启用，为所有打开的标签页设置自动保存任务
      if (newSettings?.enabled && (!oldSettings || !oldSettings.enabled)) {
        const tabs = await browser.tabs.query({});
        tabs.forEach(tab => {
          if (tab.id) setupAutoSaveTask(tab.id);
        });
      }

      // 如果设置从启用变为禁用，清除所有自动保存任务
      if (oldSettings?.enabled && (!newSettings || !newSettings.enabled)) {
        saveTasks.forEach((task) => {
          clearAutoSaveTask(task.tabId);
        });
      }
    }
  });

  logger.info('自动保存功能已初始化');
};