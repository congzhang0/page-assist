/**
 * 状态指示器
 * 提供显示操作状态的功能
 */
import { browser } from "wxt/browser";

/**
 * 状态类型
 */
export enum StatusType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

/**
 * 显示状态通知
 * @param title 通知标题
 * @param message 通知消息
 * @param type 通知类型
 */
export const showStatusNotification = (
  title: string,
  message: string,
  type: StatusType = StatusType.INFO
): void => {
  // 根据类型选择图标
  let iconPath = 'assets/icon-128.png';

  // 创建通知
  browser.notifications.create({
    type: 'basic',
    iconUrl: browser.runtime.getURL(iconPath),
    title,
    message
  });
};

/**
 * 显示保存进度通知
 * @param stage 保存阶段
 * @param message 阶段消息
 */
export const showSaveProgress = (stage: string, message: string): void => {
  showStatusNotification(
    `保存页面 - ${stage}`,
    message,
    StatusType.INFO
  );
};

/**
 * 显示保存成功通知
 * @param title 保存的页面标题
 */
export const showSaveSuccess = (title: string): void => {
  showStatusNotification(
    '页面已保存',
    `已成功保存页面: ${title}`,
    StatusType.SUCCESS
  );
};

/**
 * 显示保存失败通知
 * @param error 错误信息
 */
export const showSaveError = (error: string): void => {
  showStatusNotification(
    '保存页面失败',
    `无法保存当前页面: ${error}`,
    StatusType.ERROR
  );
};

/**
 * 显示一般通知
 * @param title 通知标题
 * @param message 通知消息
 * @param type 通知类型
 */
export const showNotification = (
  title: string,
  message: string,
  type: StatusType = StatusType.INFO
): void => {
  showStatusNotification(title, message, type);
};

export default {
  showStatusNotification,
  showSaveSuccess,
  showSaveError,
  showSaveProgress,
  showNotification,
  StatusType
};
