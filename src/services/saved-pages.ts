/**
 * 保存页面服务
 * 提供保存当前页面到数据库的功能
 */

import { getDataFromCurrentTab } from "@/libs/get-html";
import { getScreenshotFromCurrentTab } from "@/libs/get-screenshot";
import { savedPagesDB, type SavedPage, type SavePageParams } from "@/db/saved-pages";

/**
 * 保存当前页面到数据库
 * @param params 保存参数
 * @returns 保存的页面信息
 */
export const saveCurrentPage = async (params?: {
  tags?: string[];
  notes?: string;
}): Promise<SavedPage> => {
  try {
    // 获取当前页面内容
    const { url, title, content, type, pdf, favicon } = await getDataFromCurrentTab();
    
    // 获取页面截图
    const { success, screenshot } = await getScreenshotFromCurrentTab();
    
    // 准备保存参数
    const saveParams: SavePageParams = {
      title,
      url,
      content,
      html: type === 'html' ? content : '', // 如果是HTML类型，保存原始HTML
      type,
      tags: params?.tags || [],
      notes: params?.notes || '',
      favicon,
      screenshot: success ? screenshot : undefined
    };
    
    // 保存到数据库
    const savedPage = await savedPagesDB.savePage(saveParams);
    
    return savedPage;
  } catch (error) {
    console.error('保存页面失败:', error);
    throw new Error('保存页面失败');
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
