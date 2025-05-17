/**
 * 调试命令
 * 提供在控制台中使用的调试命令
 */
import storageViewer from './storage-viewer';
import logger from './logger';

/**
 * 初始化调试命令
 */
export const initDebugCommands = (): void => {
  // 检查当前环境，使用globalThis替代window
  // globalThis在所有JavaScript环境中都可用，包括Service Worker
  const debugObject = {
    // 存储查看命令
    storage: {
      // 获取所有存储数据
      getAll: async () => {
        const data = await storageViewer.getAllStorageData();
        console.log('所有存储数据:', data);
        return data;
      },

      // 获取特定键的存储数据
      get: async (key: string) => {
        const value = await storageViewer.getStorageItem(key);
        console.log(`存储项 ${key}:`, value);
        return value;
      },

      // 打印存储数据
      log: async (filter?: string) => {
        await storageViewer.logStorageData(filter);
      }
    },

    // 日志级别控制
    logger: {
      // 设置日志级别
      setLevel: (level: 'debug' | 'info' | 'warn' | 'error' | 'none') => {
        const LogLevel = {
          debug: 0,
          info: 1,
          warn: 2,
          error: 3,
          none: 4
        };

        logger.setLogLevel(LogLevel[level]);
        console.log(`日志级别已设置为: ${level}`);
      }
    },

    // 打开调试页面
    openDebugPage: () => {
      chrome.tabs.create({
        url: chrome.runtime.getURL('pages/debug.html')
      });
    }
  };

  // 将调试对象添加到全局对象
  try {
    // 使用globalThis替代window，它在所有JavaScript环境中都可用
    (globalThis as any).pageAssistDebug = debugObject;
    logger.info('调试命令已初始化，可在控制台中使用 pageAssistDebug 对象');
  } catch (error) {
    logger.error('初始化调试命令失败', error);
  }
};
