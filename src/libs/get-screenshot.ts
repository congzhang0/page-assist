import logger from "@/utils/logger";

const captureVisibleTab = () => {
  logger.debug('开始捕获当前标签页截图');

  const result = new Promise<string>((resolve, reject) => {
    if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
      logger.debug('使用 Chrome/Edge API 捕获截图');
      chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        if (!tabs || tabs.length === 0) {
          logger.error('无法获取当前标签页');
          reject(new Error('无法获取当前标签页'));
          return;
        }

        const tab = tabs[0];
        logger.debug('获取到当前标签页', { tabId: tab.id, url: tab.url });

        chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
          if (chrome.runtime.lastError) {
            logger.error('截图捕获失败', chrome.runtime.lastError);
            reject(new Error(`截图捕获失败: ${chrome.runtime.lastError.message}`));
            return;
          }

          if (!dataUrl) {
            logger.error('截图数据为空');
            reject(new Error('截图数据为空'));
            return;
          }

          logger.debug('成功捕获截图', { dataUrlLength: dataUrl.length });
          resolve(dataUrl);
        });
      });
    } else {
      logger.debug('使用 Firefox/其他浏览器 API 捕获截图');
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(async (tabs) => {
          if (!tabs || tabs.length === 0) {
            logger.error('无法获取当前标签页');
            reject(new Error('无法获取当前标签页'));
            return;
          }

          const tab = tabs[0];
          logger.debug('获取到当前标签页', { tabId: tab.id, url: tab.url });

          try {
            logger.debug('开始捕获截图，设置10秒超时');
            const dataUrl = (await Promise.race([
              browser.tabs.captureVisibleTab(null, { format: "png" }),
              new Promise((_, reject) =>
                setTimeout(
                  () => {
                    logger.error('截图捕获超时');
                    reject(new Error("截图捕获超时（10秒）"));
                  },
                  10000
                )
              )
            ])) as string;

            if (!dataUrl) {
              logger.error('截图数据为空');
              reject(new Error('截图数据为空'));
              return;
            }

            logger.debug('成功捕获截图', { dataUrlLength: dataUrl.length });
            resolve(dataUrl);
          } catch (error) {
            logger.error('捕获截图时出错', error);
            reject(error);
          }
        })
        .catch(error => {
          logger.error('查询标签页失败', error);
          reject(error);
        });
    }
  });

  return result;
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
    logger.error('获取截图失败', { error: errorMessage });

    return {
      success: false,
      screenshot: null,
      error: errorMessage
    };
  }
};
