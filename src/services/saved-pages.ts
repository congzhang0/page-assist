/**
 * 保存页面服务
 * 提供保存当前页面到数据库的功能
 */

import { getDataFromCurrentTab, getDataFromSpecificTab } from "@/libs/get-html";
import { getScreenshotFromCurrentTab, getScreenshotFromSpecificTab } from "@/libs/get-screenshot";
import { savedPagesDB } from "@/db/savedpages";
import type { SavedPage, SavePageParams } from "@/db/savedpages";
import { generateSummary } from "@/services/llm-service";
import { browser } from "wxt/browser";
import { TaskSource } from "./auto-save";
import { isUrlAlreadySaved } from "./auto-save"; // 导入从auto-save.ts的函数

/**
 * 保存当前页面到数据库
 * @param params 保存参数
 * @returns 保存的页面信息
 */
import logger from '@/utils/logger';

import { setBadgeText, setBadgeBackgroundColor, setBadgeTextColor, setTitle } from "@/utils/action";
import statusIndicator from "@/utils/status-indicator";

/**
 * 更新扩展图标状态，显示保存进度
 * @param status 状态文本
 * @param color 状态颜色
 * @param stage 保存阶段
 * @param message 阶段消息
 */
const updateSaveStatus = (status: string, color: string, stage?: string, message?: string) => {
  // 更新扩展图标状态
  setBadgeText({ text: status });
  setBadgeBackgroundColor({ color });

  // 设置徽章文本颜色为白色，增加可读性
  setBadgeTextColor({ color: "#FFFFFF" });

  // 设置图标标题，显示详细进度信息
  let titleText = message || "";
  if (stage) {
    titleText = `${stage}: ${titleText}`;
  }
  setTitle({ title: titleText });

  // 如果提供了阶段和消息，显示通知
  if (stage && message) {
    // 使用更详细的进度信息
    let progressInfo = message;

    // 如果状态是数字格式（如"1/3"），添加百分比信息
    if (status.includes("/")) {
      const [current, total] = status.split("/").map(Number);
      if (!isNaN(current) && !isNaN(total) && total > 0) {
        const percentage = Math.round((current / total) * 100);
        progressInfo = `${progressInfo} (${percentage}%)`;
      }
    }

    statusIndicator.showSaveProgress(stage, progressInfo);
  }

  // 如果状态是完成或错误，5秒后清除状态
  if (status === "✓" || status === "✗") {
    setTimeout(() => {
      setBadgeText({ text: "" });
      setTitle({ title: "" });
    }, 5000);
  }
};

/**
 * 保存页面到数据库
 * @param params 保存参数，可以包含标签、备注和标签页ID
 * @returns 保存的页面信息
 */
export const saveCurrentPage = async (params?: {
  tags?: string[];
  notes?: string;
  title?: string; // 可选的标题，用于自动保存时传递
  tabId?: number; // 可选的标签页ID，用于自动保存时指定标签页
  source?: TaskSource; // 保存来源
  sourceInfo?: string; // 来源详细信息
}): Promise<SavedPage> => {
  logger.info('开始保存当前页面', params);

  // 显示开始保存状态
   updateSaveStatus("...", "#3498db", "准备中", "正在初始化保存过程..."); // 蓝色表示进行中

   try {
     // 获取页面内容
     logger.debug('正在获取页面内容', params?.tabId ? { tabId: params.tabId } : {});
     updateSaveStatus("1/3", "#3498db", "第1步", "正在获取页面内容..."); // 第一阶段：获取内容

    let pageDataResult;
    if (params?.tabId) {
      // 如果提供了 tabId，使用 getDataFromSpecificTab
      pageDataResult = await getDataFromSpecificTab(params.tabId).catch(err => {
        logger.error('获取指定标签页内容失败', { tabId: params.tabId, error: err });
        updateSaveStatus("✗", "#e74c3c", "错误", `获取页面内容失败: ${err.message || '未知错误'}`);
        throw new Error(`获取页面内容失败: ${err.message || '未知错误'}`);
      });
    } else {
      // 否则使用原来的 getDataFromCurrentTab
      pageDataResult = await getDataFromCurrentTab().catch(err => {
        logger.error('获取页面内容失败', err);
        updateSaveStatus("✗", "#e74c3c", "错误", `获取页面内容失败: ${err.message || '未知错误'}`);
        throw new Error(`获取页面内容失败: ${err.message || '未知错误'}`);
      });
    }

    if (!pageDataResult) {
        logger.error('获取页面内容返回空结果');
        updateSaveStatus("✗", "#e74c3c", "错误", "获取页面内容返回空结果");
        throw new Error('获取页面内容返回空结果');
    }

    const { url, title, content, type, pdf, favicon } = pageDataResult;
    logger.info('成功获取页面内容', { url, title, contentLength: content?.length, type });

    // 检查URL是否已经保存过
    const isExist = await isUrlAlreadySaved(url);
    if (isExist) {
      logger.info('URL已经存在，跳过保存:', url);
      updateSaveStatus("✓", "#2ecc71", "完成", "页面已存在，跳过重复保存！");
      
      // 显示成功通知
      statusIndicator.showNotification(
        "页面已存在", 
        "该URL已经保存过，跳过重复保存",
        statusIndicator.StatusType.INFO
      );
      
      // 获取现有页面并返回
      const existingPages = await getAllSavedPages({ searchText: url });
      const existingPage = existingPages.find(page => page.url === url);
      if (existingPage) {
        return existingPage;
      }
      
      // 如果没找到精确匹配的页面(极少数情况)，继续保存流程
      logger.warn('URL已存在但未找到精确匹配的页面，将继续保存流程:', url);
    }

    // 获取页面截图
     logger.debug('正在获取页面截图', params?.tabId ? { tabId: params.tabId } : {});
     updateSaveStatus("2/3", "#3498db", "第2步", "正在获取页面截图..."); // 第二阶段：获取截图

    let screenshotResult;
    if (params?.tabId) {
      // 如果提供了 tabId，使用 getScreenshotFromSpecificTab
      screenshotResult = await getScreenshotFromSpecificTab(params.tabId).catch(err => {
        // 检查是否是配额限制错误
        const errorMessage = err instanceof Error ? err.message : String(err);
        const isQuotaError = errorMessage.includes('MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND');

        if (isQuotaError) {
          logger.warn('截图请求超过配额限制，已加入队列处理', { tabId: params.tabId, error: errorMessage });
          updateSaveStatus("2/3", "#f39c12", "第2步", "截图请求已加入队列，正在等待处理..."); // 黄色表示等待中

          // 对于配额错误，我们不会立即失败，而是返回一个特殊标记
          return {
            success: false,
            screenshot: undefined,
            error: errorMessage,
            isQuotaError: true
          };
        } else {
          logger.error('获取页面截图失败', { tabId: params.tabId, error: err });
          // 其他截图失败不阻止保存过程，继续执行
          return { success: false, screenshot: undefined, error: errorMessage };
        }
      });
    } else {
      // 否则使用原来的 getScreenshotFromCurrentTab
      screenshotResult = await getScreenshotFromCurrentTab().catch(err => {
        // 检查是否是配额限制错误
        const errorMessage = err instanceof Error ? err.message : String(err);
        const isQuotaError = errorMessage.includes('MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND');

        if (isQuotaError) {
          logger.warn('截图请求超过配额限制，已加入队列处理', { error: errorMessage });
          updateSaveStatus("2/3", "#f39c12", "第2步", "截图请求已加入队列，正在等待处理..."); // 黄色表示等待中

          // 对于配额错误，我们不会立即失败，而是返回一个特殊标记
          return {
            success: false,
            screenshot: undefined,
            error: errorMessage,
            isQuotaError: true
          };
        } else {
          logger.error('获取页面截图失败', err);
          // 其他截图失败不阻止保存过程，继续执行
          return { success: false, screenshot: undefined, error: errorMessage };
        }
      });
    }

    const { success, screenshot, error: screenshotError, isQuotaError } = screenshotResult;

    if (!success) {
      if (isQuotaError) {
        logger.warn('截图请求已加入队列，但当前保存操作将继续进行', { error: screenshotError });
        // 对于配额错误，我们显示一个友好的消息
        statusIndicator.showNotification(
          "截图请求已加入队列",
          "由于浏览器限制，截图请求已加入队列。页面将保存，但可能不包含截图。"
        );
      } else {
        logger.warn('获取页面截图失败，将继续保存页面', screenshotError);
      }
    } else {
      logger.info('成功获取页面截图', { screenshotLength: screenshot?.length });
    }

    // 使用LLM生成摘要、关键词和评分
    logger.debug('正在使用LLM生成摘要和关键词');
    let summary = '';
    let autoTags: string[] = [];
    let rating = 0;

    try {
      // 尝试获取LLM模型并生成摘要
      const summaryResult = await generateSummary(content, title, url);
      summary = summaryResult.summary;
      autoTags = summaryResult.keywords;
      rating = summaryResult.rating;
      logger.info('成功生成摘要和关键词', {
        summaryLength: summary.length,
        tagsCount: autoTags.length,
        rating
      });
    } catch (error) {
      // 如果错误是由于未选择模型导致的，打开侧边栏让用户配置
      if (error instanceof Error && error.message.includes('未选择模型')) {
        logger.warn('未选择LLM模型，将打开侧边栏让用户配置', error);
        // 通知background打开侧边栏
        try {
          await browser.runtime.sendMessage({ type: 'open_sidebar_for_model_config' });
           updateSaveStatus("✗", "#e74c3c", "错误", "请先在侧边栏中配置LLM模型，然后再尝试保存页面");
           throw new Error('请先在侧边栏中配置LLM模型，然后再尝试保存页面');
        } catch (msgError) {
          logger.error('发送打开侧边栏消息失败', msgError);
           updateSaveStatus("✗", "#e74c3c", "错误", "未选择LLM模型，请先配置模型后再尝试保存页面");
           throw new Error('未选择LLM模型，请先配置模型后再尝试保存页面');
        }
      }
      logger.warn('生成摘要和关键词失败，将继续保存页面', error);
    }

    // 保存页面到数据库
    logger.debug('正在保存页面到数据库');
    updateSaveStatus("3/3", "#3498db", "第3步", "正在保存页面到数据库..."); // 第三阶段：保存到数据库

    // 如果提供了自定义标题，使用自定义标题
    const finalTitle = params?.title || title;

    // 合并自动生成的标签和用户提供的标签
    let finalTags = autoTags || [];
    if (params?.tags && params.tags.length > 0) {
      // 添加用户标签并去重
      finalTags = [...new Set([...finalTags, ...params.tags])];
    }

    // Create combined notes with source info
    const combinedNotes = params?.notes || '';
    const sourceNotes = params?.sourceInfo ? `\n\nSource: ${params?.sourceInfo}` : '';

    // 保存页面
    const savedPage = await savedPagesDB.savePage({
      url,
      title: finalTitle,
      content,
      html: pdf || '', // Ensure html is provided
      type: type as "article" | "image" | "video" | "other", // Cast to the correct type
      tags: finalTags,
      notes: combinedNotes + sourceNotes,
      summary,
      rating,
      favicon
    });

    // 更新状态为保存成功
    logger.info('页面保存成功', { id: savedPage.id, url, title: finalTitle });
    updateSaveStatus("✓", "#2ecc71", "完成", "页面保存成功！"); // 绿色表示成功

    // 显示成功通知
    statusIndicator.showSaveSuccess(finalTitle);

    return savedPage;
  } catch (error) {
    // 更新状态为保存失败
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error('保存页面失败', { error: errorMessage });
    updateSaveStatus("✗", "#e74c3c", "错误", `保存页面失败: ${errorMessage}`); // 红色表示失败

    // 显示错误通知
    statusIndicator.showSaveError(errorMessage);

    throw error;
  }
};

/**
 * 获取所有保存的页面
 * @param params 查询参数
 * @returns 保存的页面列表
 */
export const getAllSavedPages = async (params?: {
  tags?: string[];
  searchText?: string;
  limit?: number;
  offset?: number;
}): Promise<SavedPage[]> => {
  try {
    return await savedPagesDB.getAllPages({
      tags: params?.tags,
      searchText: params?.searchText,
      limit: params?.limit,
      offset: params?.offset
    });
  } catch (error) {
    console.error('获取保存的页面失败:', error);
    throw new Error('获取保存的页面失败');
  }
};

/**
 * 获取页面详情
 * @param id 页面ID
 * @returns 页面详情
 */
export const getSavedPageById = async (id: string): Promise<SavedPage | null> => {
  try {
    return await savedPagesDB.getPageById(id);
  } catch (error) {
    console.error('获取页面详情失败:', error);
    throw new Error('获取页面详情失败');
  }
};

/**
 * 更新保存的页面
 * @param id 页面ID
 * @param updates 更新内容
 * @returns 更新后的页面
 */
export const updateSavedPage = async (
  id: string,
  updates: {
    title?: string;
    tags?: string[];
    notes?: string;
    summary?: string;
    rating?: number;
  }
): Promise<SavedPage> => {
  try {
    return await savedPagesDB.updatePage(id, updates);
  } catch (error) {
    console.error('更新页面失败:', error);
    throw new Error('更新页面失败');
  }
};

/**
 * 删除保存的页面
 * @param id 页面ID
 */
export const deleteSavedPage = async (id: string): Promise<void> => {
  try {
    await savedPagesDB.deletePage(id);
  } catch (error) {
    console.error('删除页面失败:', error);
    throw new Error('删除页面失败');
  }
};

/**
 * 获取所有标签
 * @returns 标签列表
 */
export const getAllTags = async (): Promise<string[]> => {
  try {
    return await savedPagesDB.getAllTags();
  } catch (error) {
    console.error('获取标签失败:', error);
    throw new Error('获取标签失败');
  }
};

/**
 * 导出保存的页面
 * @param ids 要导出的页面ID列表，如果为空则导出所有
 * @returns 导出的数据
 */
export const exportSavedPages = async (ids?: string[]): Promise<SavedPage[]> => {
  try {
    const pages = await getAllSavedPages();
    
    // If no IDs provided, export all pages
    if (!ids || ids.length === 0) {
      return pages;
    }
    
    // Filter pages by IDs
    return pages.filter(page => ids.includes(page.id));
  } catch (error) {
    console.error('导出页面失败:', error);
    throw new Error('导出页面失败');
  }
};

/**
 * 导入保存的页面
 * @param pages 要导入的页面数据
 * @returns 导入的页面数量
 */
export const importSavedPages = async (pages: SavedPage[]): Promise<number> => {
  try {
    let importedCount = 0;

    for (const page of pages) {
      await savedPagesDB.savePage({
        title: page.title,
        url: page.url,
        content: page.content,
        html: page.html,
        type: page.type,
        tags: page.tags,
        notes: page.notes,
        summary: page.summary,
        rating: page.rating,
        favicon: page.favicon,
        screenshot: page.screenshot
      });

      importedCount++;
    }

    return importedCount;
  } catch (error) {
    console.error('导入页面失败:', error);
    throw new Error('导入页面失败');
  }
};
