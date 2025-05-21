/**
 * 数据提供者API数据访问层
 */
import logger from '@/utils/logger';
import { SavedPagesDB, SavedPage, QueryParams as PageQueryParams } from '@/db/saved-pages';
import { PageAssitDatabase } from '@/db/index';
import { getDataProviderConfig } from '@/config/data-provider-config';

// 查询参数接口
export interface QueryParams {
  // 过滤条件
  filter?: Record<string, any>;
  
  // 分页
  page?: number;
  pageSize?: number;
  
  // 排序
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
  
  // 搜索
  search?: string;
  
  // 字段选择
  fields?: string[];
}

// 数据访问结果接口
export interface DataAccessResult<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    pageSize?: number;
    pageCount?: number;
  };
}

/**
 * 过滤字段
 * 根据字段列表过滤对象属性
 */
function filterFields<T extends object>(obj: T, fields?: string[]): Partial<T> {
  if (!fields || fields.length === 0) {
    return obj;
  }
  
  const result: Partial<T> = {};
  
  for (const field of fields) {
    if (field in obj) {
      result[field as keyof T] = obj[field as keyof T];
    }
  }
  
  return result;
}

/**
 * 过滤敏感内容
 * 根据配置过滤敏感字段
 */
async function filterSensitiveContent<T extends object>(obj: T, entityType: string): Promise<Partial<T>> {
  const config = await getDataProviderConfig();
  
  // 如果允许访问完整内容，直接返回
  if (config.filters.allowFullContent) {
    return obj;
  }
  
  // 根据实体类型过滤敏感字段
  const sensitiveFields: Record<string, string[]> = {
    page: ['content', 'html'],
    document: ['content', 'document'],
    message: ['content'],
    knowledge: ['content'],
    vector: ['vector'],
    model: ['apiKey'],
  };
  
  const result = { ...obj };
  
  // 移除敏感字段
  if (entityType in sensitiveFields) {
    for (const field of sensitiveFields[entityType]) {
      if (field in result) {
        delete result[field as keyof T];
      }
    }
  }
  
  return result;
}

/**
 * 转换查询参数
 * 将API查询参数转换为数据库查询参数
 */
function convertPageQueryParams(params?: QueryParams): PageQueryParams {
  if (!params) {
    return {};
  }
  
  const result: PageQueryParams = {};
  
  // 转换标签过滤
  if (params.filter && 'tags' in params.filter) {
    result.tags = Array.isArray(params.filter.tags) 
      ? params.filter.tags 
      : [params.filter.tags];
  }
  
  // 转换搜索
  if (params.search) {
    result.searchText = params.search;
  }
  
  // 转换分页
  if (params.page && params.pageSize) {
    result.offset = (params.page - 1) * params.pageSize;
    result.limit = params.pageSize;
  } else if (params.pageSize) {
    result.limit = params.pageSize;
  }
  
  return result;
}

/**
 * 获取单个页面
 */
export async function getPage(id: string, fields?: string[]): Promise<DataAccessResult<Partial<SavedPage> | null>> {
  try {
    logger.debug('获取单个页面', { id, fields });
    
    const db = new SavedPagesDB();
    const page = await db.getPageById(id);
    
    if (!page) {
      return { data: null };
    }
    
    // 过滤敏感内容
    const filteredPage = await filterSensitiveContent(page, 'page');
    
    // 过滤字段
    const result = filterFields(filteredPage, fields);
    
    return { data: result };
  } catch (error) {
    logger.error('获取单个页面失败', error);
    throw error;
  }
}

/**
 * 获取页面列表
 */
export async function getPages(params?: QueryParams): Promise<DataAccessResult<Partial<SavedPage>[]>> {
  try {
    logger.debug('获取页面列表', params);
    
    const db = new SavedPagesDB();
    const dbParams = convertPageQueryParams(params);
    
    // 获取页面列表
    const pages = await db.getAllPages(dbParams);
    
    // 获取总数
    const allPages = await db.getAllPages();
    const total = allPages.length;
    
    // 计算分页信息
    const page = params?.page || 1;
    const pageSize = params?.pageSize || total;
    const pageCount = Math.ceil(total / pageSize);
    
    // 过滤敏感内容和字段
    const filteredPages = await Promise.all(
      pages.map(async (page) => {
        const filteredPage = await filterSensitiveContent(page, 'page');
        return filterFields(filteredPage, params?.fields);
      })
    );
    
    return {
      data: filteredPages,
      meta: {
        total,
        page,
        pageSize,
        pageCount,
      },
    };
  } catch (error) {
    logger.error('获取页面列表失败', error);
    throw error;
  }
}

/**
 * 获取页面计数
 */
export async function getPageCount(filter?: Record<string, any>): Promise<DataAccessResult<{ count: number }>> {
  try {
    logger.debug('获取页面计数', { filter });
    
    const db = new SavedPagesDB();
    const dbParams = convertPageQueryParams({ filter });
    
    // 获取符合条件的页面
    const pages = await db.getAllPages(dbParams);
    
    return {
      data: {
        count: pages.length,
      },
    };
  } catch (error) {
    logger.error('获取页面计数失败', error);
    throw error;
  }
}

/**
 * 获取所有标签
 */
export async function getAllTags(): Promise<DataAccessResult<string[]>> {
  try {
    logger.debug('获取所有标签');
    
    const db = new SavedPagesDB();
    const tags = await db.getAllTags();
    
    return {
      data: tags,
    };
  } catch (error) {
    logger.error('获取所有标签失败', error);
    throw error;
  }
}

/**
 * 获取单个文档
 * TODO: 实现文档数据访问
 */
export async function getDocument(id: string, fields?: string[]): Promise<DataAccessResult<any>> {
  // 待实现
  return { data: null };
}

/**
 * 获取文档列表
 * TODO: 实现文档列表数据访问
 */
export async function getDocuments(params?: QueryParams): Promise<DataAccessResult<any[]>> {
  // 待实现
  return { data: [] };
}

/**
 * 获取单个模型
 * TODO: 实现模型数据访问
 */
export async function getModel(id: string, fields?: string[]): Promise<DataAccessResult<any>> {
  // 待实现
  return { data: null };
}

/**
 * 获取模型列表
 * TODO: 实现模型列表数据访问
 */
export async function getModels(params?: QueryParams): Promise<DataAccessResult<any[]>> {
  // 待实现
  return { data: [] };
}

/**
 * 获取单个消息
 * TODO: 实现消息数据访问
 */
export async function getMessage(id: string, fields?: string[]): Promise<DataAccessResult<any>> {
  // 待实现
  return { data: null };
}

/**
 * 获取消息列表
 * TODO: 实现消息列表数据访问
 */
export async function getMessages(params?: QueryParams): Promise<DataAccessResult<any[]>> {
  // 待实现
  return { data: [] };
}
