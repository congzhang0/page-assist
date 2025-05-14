/**
 * 保存页面服务
 * 提供保存当前页面到数据库的功能
 */

import { getDataFromCurrentTab } from "@/libs/get-html";
import { getScreenshotFromCurrentTab } from "@/libs/get-screenshot";
import { savedPagesDB, type SavedPage, type SavePageParams } from "@/db/saved-pages";
import { generateSummary } from "@/services/llm-service";

/**
 * 保存当前页面到数据库
 * @param params 保存参数
 * @returns 保存的页面信息
 */
import logger from '@/utils/logger';

export const saveCurrentPage = async (params?: {
  tags?: string[];
  notes?: string;
}): Promise<SavedPage> => {
  logger.info('开始保存当前页面', params);

  try {
    // 获取当前页面内容
    logger.debug('正在获取页面内容');
    const pageDataResult = await getDataFromCurrentTab().catch(err => {
      logger.error('获取页面内容失败', err);
      throw new Error(`获取页面内容失败: ${err.message || '未知错误'}`);
    });

    if (!pageDataResult) {
      logger.error('获取页面内容返回空结果');
      throw new Error('获取页面内容返回空结果');
    }

    const { url, title, content, type, pdf, favicon } = pageDataResult;
    logger.info('成功获取页面内容', { url, title, contentLength: content?.length, type });

    // 获取页面截图
    logger.debug('正在获取页面截图');
    const screenshotResult = await getScreenshotFromCurrentTab().catch(err => {
      logger.error('获取页面截图失败', err);
      // 截图失败不阻止保存过程，继续执行
      return { success: false, screenshot: undefined, error: err };
    });

    const { success, screenshot, error: screenshotError } = screenshotResult;
    if (!success) {
      logger.warn('获取页面截图失败，将继续保存页面', screenshotError);
    } else {
      logger.info('成功获取页面截图', { screenshotLength: screenshot?.length });
    }

    // 使用LLM生成摘要、关键词和评分
    logger.debug('正在使用LLM生成摘要和关键词');
    let summary = '';
    let autoTags: string[] = [];
    let rating = 0;

    try {
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
      logger.warn('生成摘要和关键词失败，将继续保存页面', error);
    }

    // 合并用户提供的标签和自动生成的标签
    const mergedTags = [...new Set([...(params?.tags || []), ...autoTags])];

    // 准备保存参数
    const saveParams: SavePageParams = {
      title,
      url,
      content,
      html: type === 'html' ? content : '', // 如果是HTML类型，保存原始HTML
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
    const savedPage = await savedPagesDB.savePage(saveParams).catch(err => {
      logger.error('保存页面到数据库失败', err);
      throw new Error(`保存页面到数据库失败: ${err.message || '未知错误'}`);
    });

    logger.info('页面保存成功', { id: savedPage.id, title: savedPage.title, url: savedPage.url });
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
