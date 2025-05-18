import logger from "@/utils/logger";
import { browser } from "wxt/browser";
import { screenshotThrottler } from "@/services/screenshot-throttler";

const captureVisibleTab = async () => {
  logger.debug('开始捕获当前标签页截图');

  try {
    // 获取当前活动标签页
    let tabs;
    if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
      tabs = await new Promise<chrome.tabs.Tab[]>((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
          resolve(result);
        });
      });
    } else {
      tabs = await browser.tabs.query({ active: true, currentWindow: true });
    }

    if (!tabs || tabs.length === 0) {
      logger.error('无法获取当前标签页');
      throw new Error('无法获取当前标签页');
    }

    const tab = tabs[0];
    logger.debug('获取到当前标签页', { tabId: tab.id, url: tab.url });

    // 使用截图节流管理器进行截图，避免超过配额限制
    logger.debug('通过截图节流管理器请求截图');
    const dataUrl = await screenshotThrottler.enqueue(null, { format: "png" });

    logger.debug('成功获取截图', { dataUrlLength: dataUrl.length });
    return dataUrl;
  } catch (error) {
    logger.error('截图过程中出错', error);
    throw error;
  }
};

export const getScreenshotFromCurrentTab = async () => {
  logger.info('开始获取当前标签页截图');

  try {
    const screenshotDataUrl = await captureVisibleTab();
    logger.info('成功获取截图', { dataUrlLength: screenshotDataUrl.length });

    return {
      success: true,
      screenshot: screenshotDataUrl,
      error: null
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "截图捕获失败";

    // 检查是否是配额限制错误
    const isQuotaError = errorMessage.includes('MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND');

    if (isQuotaError) {
      logger.warn('截图配额限制错误，已通过节流管理器处理', { error: errorMessage });
    } else {
      logger.error('获取截图失败', { error: errorMessage });
    }

    return {
      success: false,
      screenshot: null,
      error: errorMessage,
      isQuotaError // 添加标志，表明是否是配额限制错误
    };
  }
};
