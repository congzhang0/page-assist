/**
 * 保存页面服务
 * 提供保存当前页面到数据库的功能
 */

import { getDataFromCurrentTab } from "@/libs/get-html";
import { getScreenshotFromCurrentTab } from "@/libs/get-screenshot";
import { savedPagesDB, type SavedPage, type SavePageParams } from "@/db/saved-pages";
import { generateSummary } from "@/services/llm-service";
import { browser } from "wxt/browser";

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

export const saveCurrentPage = async (params?: {
  tags?: string[];
  notes?: string;
}): Promise<SavedPage> => {
  logger.info('开始保存当前页面', params);

  // 显示开始保存状态
   updateSaveStatus("...", "#3498db", "准备中", "正在初始化保存过程..."); // 蓝色表示进行中

   try {
     // 获取当前页面内容
     logger.debug('正在获取页面内容');
     updateSaveStatus("1/3", "#3498db", "第1步", "正在获取页面内容..."); // 第一阶段：获取内容

    const pageDataResult = await getDataFromCurrentTab().catch(err => {
      logger.error('获取页面内容失败', err);
       updateSaveStatus("✗", "#e74c3c", "错误", `获取页面内容失败: ${err.message || '未知错误'}`); // 红色表示错误
      throw new Error(`获取页面内容失败: ${err.message || '未知错误'}`);
    });

    if (!pageDataResult) {
        logger.error('获取页面内容返回空结果');
        updateSaveStatus("✗", "#e74c3c", "错误", "获取页面内容返回空结果");
        throw new Error('获取页面内容返回空结果');
    }

    const { url, title, content, type, pdf, favicon } = pageDataResult;
    logger.info('成功获取页面内容', { url, title, contentLength: content?.length, type });

    // 获取页面截图
     logger.debug('正在获取页面截图');
     updateSaveStatus("2/3", "#3498db", "第2步", "正在获取页面截图..."); // 第二阶段：获取截图

    const screenshotResult = await getScreenshotFromCurrentTab().catch(err => {
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

    // 合并用户提供的标签和自动生成的标签
    const mergedTags = [...new Set([...(params?.tags || []), ...autoTags])];

    // 准备保存参数
    const saveParams: SavePageParams = {
      title,
      url,
      content,
      html: content, // 保存所有类型页面的原始内容
      type,
      tags: mergedTags,
      notes: params?.notes || '',
      summary,
      rating,
      favicon,
      screenshot: success ? screenshot : undefined
    };

    // 保存到数据库
     logger.debug('正在保存页面到数据库', { url, title });
     updateSaveStatus("3/3", "#3498db", "第3步", "正在保存页面到数据库..."); // 第三阶段：保存到数据库

    const savedPage = await savedPagesDB.savePage(saveParams).catch(err => {
      logger.error('保存页面到数据库失败', err);
       updateSaveStatus("✗", "#e74c3c", "错误", `保存页面到数据库失败: ${err.message || '未知错误'}`);
       throw new Error(`保存页面到数据库失败: ${err.message || '未知错误'}`);
    });

    logger.info('页面保存成功', { id: savedPage.id, title: savedPage.title, url: savedPage.url });
     updateSaveStatus("✓", "#2ecc71", "完成", "页面保存成功！"); // 绿色表示成功
    return savedPage;
  } catch (error) {
    logger.error('保存页面过程中发生错误', error);
    // 重新抛出错误，但保留原始错误信息
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(`保存页面失败: ${error}`);
    }
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
    const allPages = await savedPagesDB.getAllPages();

    if (!ids || ids.length === 0) {
      return allPages;
    }

    return allPages.filter(page => ids.includes(page.id));
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
