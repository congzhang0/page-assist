/**
 * Storage Viewer 工具
 * 提供查看和监控 chrome.storage.local 数据的功能
 */
import logger from './logger';

/**
 * 获取所有存储数据
 * @returns 存储中的所有数据
 */
export const getAllStorageData = async (): Promise<Record<string, any>> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(null, (items) => {
      if (chrome.runtime.lastError) {
        logger.error('获取存储数据失败', chrome.runtime.lastError);
        resolve({});
      } else {
        logger.info('成功获取存储数据', { keysCount: Object.keys(items).length });
        resolve(items);
      }
    });
  });
};

/**
 * 获取特定键的存储数据
 * @param key 存储键
 * @returns 存储中的数据
 */
export const getStorageItem = async (key: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (items) => {
      if (chrome.runtime.lastError) {
        logger.error(`获取存储项 ${key} 失败`, chrome.runtime.lastError);
        resolve(undefined);
      } else {
        logger.info(`成功获取存储项 ${key}`, { value: items[key] });
        resolve(items[key]);
      }
    });
  });
};

/**
 * 监听存储变化
 * @param callback 变化回调函数
 * @returns 取消监听的函数
 */
export const watchStorageChanges = (
  callback: (changes: Record<string, chrome.storage.StorageChange>) => void
): () => void => {
  const listener = (changes: Record<string, chrome.storage.StorageChange>, areaName: string) => {
    if (areaName === 'local') {
      logger.debug('检测到存储变化', { changedKeys: Object.keys(changes) });
      callback(changes);
    }
  };
  
  chrome.storage.onChanged.addListener(listener);
  
  // 返回取消监听的函数
  return () => {
    chrome.storage.onChanged.removeListener(listener);
  };
};

/**
 * 打印存储数据到控制台
 * @param filter 可选的键过滤器
 */
export const logStorageData = async (filter?: string): Promise<void> => {
  const data = await getAllStorageData();
  
  if (filter) {
    const filteredData: Record<string, any> = {};
    Object.keys(data).forEach(key => {
      if (key.includes(filter)) {
        filteredData[key] = data[key];
      }
    });
    
    logger.info(`存储数据 (过滤: ${filter})`, filteredData);
    console.table(filteredData);
  } else {
    logger.info('所有存储数据', data);
    console.table(data);
  }
};

export default {
  getAllStorageData,
  getStorageItem,
  watchStorageChanges,
  logStorageData
};
