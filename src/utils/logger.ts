/**
 * 日志工具
 * 提供统一的日志记录功能，支持不同级别的日志和格式化输出
 */

// 日志级别
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4
}

// 当前日志级别，可以通过配置修改
let currentLogLevel = LogLevel.INFO;

// 是否在生产环境
const isProduction = process.env.NODE_ENV === 'production';

/**
 * 设置日志级别
 * @param level 日志级别
 */
export const setLogLevel = (level: LogLevel) => {
  currentLogLevel = level;
};

/**
 * 格式化日志消息
 * @param level 日志级别
 * @param message 日志消息
 * @param data 附加数据
 * @returns 格式化后的日志消息
 */
const formatLogMessage = (level: string, message: string, data?: any): string => {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level}] [Page-Assist]`;
  
  if (data !== undefined) {
    try {
      const dataStr = typeof data === 'object' ? JSON.stringify(data) : String(data);
      return `${prefix} ${message} - ${dataStr}`;
    } catch (error) {
      return `${prefix} ${message} - [无法序列化的数据]`;
    }
  }
  
  return `${prefix} ${message}`;
};

/**
 * 记录调试级别日志
 * @param message 日志消息
 * @param data 附加数据
 */
export const debug = (message: string, data?: any) => {
  if (currentLogLevel <= LogLevel.DEBUG) {
    console.debug(formatLogMessage('DEBUG', message, data));
  }
};

/**
 * 记录信息级别日志
 * @param message 日志消息
 * @param data 附加数据
 */
export const info = (message: string, data?: any) => {
  if (currentLogLevel <= LogLevel.INFO) {
    console.info(formatLogMessage('INFO', message, data));
  }
};

/**
 * 记录警告级别日志
 * @param message 日志消息
 * @param data 附加数据
 */
export const warn = (message: string, data?: any) => {
  if (currentLogLevel <= LogLevel.WARN) {
    console.warn(formatLogMessage('WARN', message, data));
  }
};

/**
 * 记录错误级别日志
 * @param message 日志消息
 * @param error 错误对象或附加数据
 */
export const error = (message: string, error?: any) => {
  if (currentLogLevel <= LogLevel.ERROR) {
    if (error instanceof Error) {
      console.error(formatLogMessage('ERROR', message, {
        message: error.message,
        stack: error.stack,
        name: error.name
      }));
    } else {
      console.error(formatLogMessage('ERROR', message, error));
    }
  }
};

/**
 * 记录性能日志
 * @param label 性能标签
 * @param action 开始或结束
 */
export const performance = (label: string, action: 'start' | 'end') => {
  if (currentLogLevel <= LogLevel.DEBUG) {
    if (action === 'start') {
      console.time(`⏱️ ${label}`);
    } else {
      console.timeEnd(`⏱️ ${label}`);
    }
  }
};

// 在生产环境中，默认设置为警告级别
if (isProduction) {
  setLogLevel(LogLevel.WARN);
}

// 导出默认对象
export default {
  debug,
  info,
  warn,
  error,
  performance,
  setLogLevel
};
