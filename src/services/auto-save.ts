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
  paused: boolean; // 是否暂停自动保存（临时停止但保留设置）
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
  timeoutId: number;
  createdAt: number;      // 创建时间
  scheduledAt: number;    // 计划保存时间
  status: SaveTaskStatus; // 任务状态
  error?: string;         // 错误信息（如果有）
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
 * 检查URL是否应该自动保存
 * @param url 要检查的URL
 * @param settings 自动保存设置
 */
export const shouldAutoSaveUrl = async (url: string, settings?: AutoSaveSettings): Promise<boolean> => {
  if (!url) {
    logger.debug('URL为空，不会自动保存');
    return false;
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
      return false;
    }

    if (settings.paused) {
      logger.debug('自动保存功能已暂停，不会自动保存', { url: normalizedUrl });
      return false;
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
      return false;
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
        return false;
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
        return true;
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
        return true;
      }
    }

    // 如果没有匹配任何规则，返回false
    logger.debug(`URL ${normalizedUrl} 不匹配任何规则，不会自动保存`);
    return false;
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
    const title = tab.title || '';

    if (!url || url.startsWith('chrome://') || url.startsWith('edge://') || url.startsWith('about:')) {
      logger.debug('跳过保存浏览器内部页面:', url);
      return;
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
      return;
    }

    if (settings.paused) {
      logger.debug('自动保存功能已暂停，跳过自动保存:', url);
      return;
    }

    // 检查URL是否匹配规则
    const shouldSave = await shouldAutoSaveUrl(url, settings);

    if (!shouldSave) {
      logger.debug('URL不符合自动保存规则，跳过自动保存:', url);
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
      logger.info('URL已经保存过，将更新现有记录:', url);
    } else {
      logger.info('URL未保存过，将创建新记录:', url);
    }

    // 自动保存页面，添加auto-save标签
    // 由于我们已经修改了savedPagesDB.savePage方法，它会自动处理URL已存在的情况
    await saveCurrentPage({
      tags: ['auto-save'],
      notes: '自动保存的页面',
      title: title // 确保保存标题
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
    const title = tab.title || '';

    if (!url || url.startsWith('chrome://') || url.startsWith('edge://') || url.startsWith('about:')) {
      return;
    }

    // 获取自动保存设置
    const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);

    // 检查自动保存功能是否启用
    if (!settings || !settings.enabled) {
      logger.debug(`标签页 ${tabId} 不设置自动保存任务: 功能未启用`, {
        enabled: settings?.enabled
      });
      return;
    }

    // 检查自动保存功能是否暂停
    if (settings.paused) {
      logger.debug(`标签页 ${tabId} 不设置自动保存任务: 功能已暂停`, {
        paused: settings.paused
      });
      // 清除之前的任务（如果存在）
      clearAutoSaveTask(tabId);
      return;
    }

    // 检查URL是否应该自动保存
    const shouldSave = await shouldAutoSaveUrl(url, settings);
    if (!shouldSave) {
      logger.debug(`标签页 ${tabId} 不设置自动保存任务: URL不符合规则`, { url });
      return;
    }

    // 清除之前的任务（如果存在）
    clearAutoSaveTask(tabId);

    // 设置新的自动保存任务
    const now = Date.now();
    const delayMs = settings.saveDelay * 60 * 1000; // 转换为毫秒
    const scheduledAt = now + delayMs;

    const timeoutId = setTimeout(() => {
      // 再次检查设置，确保在延迟期间没有被禁用或暂停
      storage.get<AutoSaveSettings>(STORAGE_KEY).then(currentSettings => {
        if (!currentSettings || !currentSettings.enabled || currentSettings.paused) {
          logger.debug(`标签页 ${tabId} 的自动保存任务被取消: 功能已禁用或暂停`);
          clearAutoSaveTask(tabId);
          return;
        }

        // 更新任务状态为保存中
        const task = saveTasks.get(tabId);
        if (task) {
          task.status = SaveTaskStatus.SAVING;
          saveTasks.set(tabId, task);
        }

        // 执行保存
        autoSavePage(tabId).then(() => {
          // 保存成功，更新任务状态
          const task = saveTasks.get(tabId);
          if (task) {
            task.status = SaveTaskStatus.COMPLETED;
            saveTasks.set(tabId, task);

            // 5秒后删除已完成的任务
            setTimeout(() => {
              saveTasks.delete(tabId);
            }, 5000);
          }
        }).catch(error => {
          // 保存失败，更新任务状态
          const task = saveTasks.get(tabId);
          if (task) {
            task.status = SaveTaskStatus.FAILED;
            task.error = error instanceof Error ? error.message : String(error);
            saveTasks.set(tabId, task);
          }
        });
      });
    }, delayMs);

    // 保存任务信息
    saveTasks.set(tabId, {
      tabId,
      url,
      title,
      timeoutId,
      createdAt: now,
      scheduledAt,
      status: SaveTaskStatus.WAITING
    });

    logger.debug(`已为标签页 ${tabId} 设置自动保存任务`, {
      url,
      title,
      delay: settings.saveDelay,
      scheduledAt: new Date(scheduledAt).toLocaleString()
    });
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
 * 获取当前所有保存任务
 * @returns 当前所有保存任务的数组
 */
export const getAllSaveTasks = (): SaveTask[] => {
  return Array.from(saveTasks.values());
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

      logger.debug('自动保存设置已变更', {
        oldEnabled: oldSettings?.enabled,
        oldPaused: oldSettings?.paused,
        newEnabled: newSettings?.enabled,
        newPaused: newSettings?.paused
      });

      // 如果设置从禁用变为启用，且未暂停，为所有打开的标签页设置自动保存任务
      if (newSettings?.enabled && !newSettings.paused &&
          (!oldSettings || !oldSettings.enabled || oldSettings.paused)) {
        const tabs = await browser.tabs.query({});
        logger.info(`自动保存功能已启用或恢复，为 ${tabs.length} 个标签页设置自动保存任务`);

        tabs.forEach(tab => {
          if (tab.id) setupAutoSaveTask(tab.id);
        });
      }

      // 如果设置从启用变为禁用，或从未暂停变为暂停，清除所有自动保存任务
      if ((oldSettings?.enabled && (!newSettings || !newSettings.enabled)) ||
          (oldSettings?.enabled && !oldSettings.paused && newSettings?.enabled && newSettings.paused)) {

        const taskCount = saveTasks.size;
        logger.info(`清除所有自动保存任务，共 ${taskCount} 个任务`);

        saveTasks.forEach((task) => {
          clearAutoSaveTask(task.tabId);
        });

        if (newSettings?.paused) {
          logger.info('自动保存功能已暂停，所有保存任务已清除');
        } else {
          logger.info('自动保存功能已禁用，所有保存任务已清除');
        }
      }
    }
  });

  // 初始化时检查是否有需要设置自动保存任务的标签页
  (async () => {
    try {
      const settings = await storage.get<AutoSaveSettings>(STORAGE_KEY);

      // 如果自动保存功能已启用且未暂停，为所有打开的标签页设置自动保存任务
      if (settings?.enabled && !settings.paused) {
        const tabs = await browser.tabs.query({});
        logger.info(`初始化自动保存功能，为 ${tabs.length} 个标签页检查自动保存规则`);

        tabs.forEach(tab => {
          if (tab.id) setupAutoSaveTask(tab.id);
        });
      }
    } catch (error) {
      logger.error('初始化自动保存任务时出错:', error);
    }
  })();

  logger.info('自动保存功能已初始化');
};