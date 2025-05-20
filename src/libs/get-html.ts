import { defaultExtractContent } from "@/parser/default"
import { getPdf } from "./pdf"
import {
  isTweet,
  isTwitterTimeline,
  parseTweet,
  parseTwitterTimeline
} from "@/parser/twitter"
import { isGoogleDocs, parseGoogleDocs } from "@/parser/google-docs"
import { cleanUnwantedUnicode } from "@/utils/clean"
import logger from "@/utils/logger"
import { isYoutubeLink } from "@/utils/is-youtube"
import { YtTranscript } from "yt-transcript"
const getTranscript = async (url: string) => {
  const ytTranscript = new YtTranscript({ url })
  return await ytTranscript.getTranscript()
}
const _getHtml = () => {
  const url = window.location.href
  const title = document.title
  const favicon = document.querySelector('link[rel="icon"]')?.getAttribute('href') ||
                 document.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
                 `${window.location.origin}/favicon.ico`

  if (document.contentType === "application/pdf") {
    return { url, title, content: "", type: "pdf", favicon }
  }

  return {
    content: document.documentElement.outerHTML,
    url,
    title,
    type: "html",
    favicon
  }
}

/**
 * 从指定的标签页获取数据
 * @param tabId 标签页ID
 * @returns 页面数据
 */
export const getDataFromSpecificTab = async (tabId: number) => {
  logger.debug('开始获取指定标签页内容', { tabId });

  const result = await new Promise((resolve, reject) => {
    try {
      if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
        logger.debug('使用 Chrome/Edge API 获取指定标签页内容', { tabId });

        chrome.scripting.executeScript({
          target: { tabId },
          func: _getHtml
        }).then(data => {
          if (data && data.length > 0) {
            logger.debug('成功执行内容脚本获取HTML', {
              tabId,
              resultType: data[0].result.type,
              contentLength: data[0].result.content?.length
            });
            resolve(data[0].result);
          } else {
            logger.error('内容脚本执行结果为空', { tabId });
            reject(new Error('内容脚本执行结果为空'));
          }
        }).catch(error => {
          logger.error('执行内容脚本失败', { tabId, error });
          reject(error);
        });
      } else {
        logger.debug('使用 Firefox/其他浏览器 API 获取指定标签页内容', { tabId });

        browser.scripting.executeScript({
          target: { tabId },
          func: _getHtml
        }).then(data => {
          if (data && data.length > 0) {
            logger.debug('成功执行内容脚本获取HTML', {
              tabId,
              resultType: data[0].result.type,
              contentLength: data[0].result.content?.length
            });
            resolve(data[0].result);
          } else {
            logger.error('内容脚本执行结果为空', { tabId });
            reject(new Error('内容脚本执行结果为空'));
          }
        }).catch(error => {
          logger.error('执行内容脚本失败', { tabId, error });

          // Firefox PDF 特殊处理
          if (import.meta.env.BROWSER === "firefox") {
            // 获取标签页信息
            browser.tabs.get(tabId).then(tab => {
              logger.info('检测到 Firefox PDF 页面，使用替代方法获取内容', { tabId });
              const result = {
                url: tab.url,
                title: tab.title || "PDF Document",
                content: "",
                type: "pdf",
                favicon: tab.favIconUrl
              };
              logger.debug('使用替代方法获取 PDF 内容成功', { tabId, url: tab.url });
              resolve(result);
            }).catch(tabError => {
              logger.error('获取标签页信息失败', { tabId, error: tabError });
              reject(tabError);
            });
          } else {
            reject(error);
          }
        });
      }
    } catch (error) {
      logger.error('获取指定标签页内容时发生异常', { tabId, error });
      reject(error);
    }
  }) as Promise<{
    url: string
    title: string
    content: string
    type: string
    favicon?: string
  }>;

  logger.debug('成功获取指定标签页基本数据', {
    tabId,
    url: result.url,
    title: result.title,
    type: result.type
  });

  const { content, type, url, title, favicon } = result;

  if (type === "pdf") {
    logger.debug('检测到PDF文件，开始处理PDF内容', { tabId, url });
    try {
      const res = await fetch(url);
      if (!res.ok) {
        logger.error('获取PDF文件失败', { tabId, status: res.status, statusText: res.statusText });
        throw new Error(`获取PDF文件失败: ${res.status} ${res.statusText}`);
      }

      const data = await res.arrayBuffer();
      logger.debug('成功获取PDF文件数据', { tabId, dataSize: data.byteLength });

      let pdfHtml: {
        content: string
        page: number
      }[] = [];

      const pdf = await getPdf(data);
      logger.info('成功解析PDF文件', { tabId, numPages: pdf.numPages });

      for (let i = 1; i <= pdf.numPages; i += 1) {
        logger.debug(`处理PDF第${i}页`, { tabId });
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        if (!content || content.items.length === 0) {
          logger.debug(`PDF第${i}页没有文本内容，跳过`, { tabId });
          continue;
        }

        const text = content.items
          .map((item: any) => item.str)
          .join("\n")
          .replace(/\x00/g, "")
          .trim();

        pdfHtml.push({
          content: text,
          page: i
        });

        logger.debug(`成功提取PDF第${i}页文本`, { tabId, textLength: text.length });
      }

      logger.info('PDF处理完成', { tabId, totalPages: pdfHtml.length });
      return {
        url,
        title,
        content: "",
        pdf: pdfHtml,
        type: "pdf",
        favicon
      };
    } catch (error) {
      logger.error('处理PDF文件时出错', { tabId, error });
      // 返回基本信息，即使PDF处理失败
      return {
        url,
        title,
        content: "PDF处理失败，无法提取内容",
        pdf: [],
        type: "pdf",
        favicon
      };
    }
  }
  if (isTwitterTimeline(url)) {
    logger.debug('检测到Twitter时间线页面，使用专用解析器', { tabId, url });
    const data = parseTwitterTimeline(content);
    logger.info('成功解析Twitter时间线内容', { tabId, contentLength: data?.length });
    return {
      url,
      title,
      content: data,
      type: "html",
      pdf: [],
      favicon
    };
  } else if (isTweet(url)) {
    logger.debug('检测到Twitter推文页面，使用专用解析器', { tabId, url });
    const data = parseTweet(content);
    logger.info('成功解析Twitter推文内容', { tabId, contentLength: data?.length });
    return {
      url,
      title,
      content: data,
      type: "html",
      pdf: [],
      favicon
    };
  } else if (isGoogleDocs(url)) {
    logger.debug('检测到Google Docs文档，使用专用解析器', { tabId, url });
    try {
      const data = await parseGoogleDocs();
      if (data) {
        const cleanedData = cleanUnwantedUnicode(data);
        logger.info('成功解析Google Docs内容', { tabId, contentLength: cleanedData?.length });
        return {
          url,
          title,
          content: cleanedData,
          type: "html",
          pdf: [],
          favicon
        };
      } else {
        logger.warn('Google Docs解析返回空内容', { tabId });
      }
    } catch (error) {
      logger.error('解析Google Docs内容失败', { tabId, error });
    }
  }

  // 默认内容提取
  logger.debug('使用默认内容提取器处理页面', { tabId, url, contentLength: content?.length });
  const data = defaultExtractContent(content);
  logger.info('成功提取页面内容', { tabId, extractedContentLength: data?.length });
  return { url, title, content: data, type, pdf: [], favicon };
};

export const getDataFromCurrentTab = async () => {
  logger.debug('开始获取当前标签页内容');

  const result = await new Promise((resolve, reject) => {
    if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
      logger.debug('使用 Chrome/Edge API 获取标签页内容');
      chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        if (!tabs || tabs.length === 0) {
          logger.error('无法获取当前标签页');
          reject(new Error('无法获取当前标签页'));
          return;
        }

        const tab = tabs[0];
        logger.debug('获取到当前标签页', { tabId: tab.id, url: tab.url });

        if (!tab.id) {
          logger.error('标签页ID无效');
          reject(new Error('标签页ID无效'));
          return;
        }

        try {
          const data = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: _getHtml
          });

          if (data && data.length > 0) {
            logger.debug('成功执行内容脚本获取HTML', {
              resultType: data[0].result.type,
              contentLength: data[0].result.content?.length
            });
            resolve(data[0].result);
          } else {
            logger.error('内容脚本执行结果为空');
            reject(new Error('内容脚本执行结果为空'));
          }
        } catch (error) {
          logger.error('执行内容脚本失败', error);
          reject(error);
        }
      });
    } else {
      logger.debug('使用 Firefox/其他浏览器 API 获取标签页内容');
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

          if (!tab.id) {
            logger.error('标签页ID无效');
            reject(new Error('标签页ID无效'));
            return;
          }

          try {
            const data = await browser.scripting.executeScript({
              target: { tabId: tab.id },
              func: _getHtml
            });

            if (data && data.length > 0) {
              logger.debug('成功执行内容脚本获取HTML', {
                resultType: data[0].result.type,
                contentLength: data[0].result.content?.length
              });
              resolve(data[0].result);
            } else {
              logger.error('内容脚本执行结果为空');
              reject(new Error('内容脚本执行结果为空'));
            }
          } catch (e) {
            logger.error('执行内容脚本失败', e);

            // Firefox PDF 特殊处理
            if (import.meta.env.BROWSER === "firefox") {
              logger.info('检测到 Firefox PDF 页面，使用替代方法获取内容');
              // Firefox won't allow extensions to run content scripts on pdf
              // https://bugzilla.mozilla.org/show_bug.cgi?id=1454760
              const result = {
                url: tab.url,
                title: tab.title || "PDF Document",
                content: "",
                type: "pdf",
                favicon: tab.favIconUrl
              };
              logger.debug('使用替代方法获取 PDF 内容成功', { url: tab.url });
              resolve(result);
            } else {
              reject(e);
            }
          }
        })
        .catch(error => {
          logger.error('查询标签页失败', error);
          reject(error);
        });
    }
  }) as Promise<{
    url: string
    title: string
    content: string
    type: string
    favicon?: string
  }>;

  logger.debug('成功获取页面基本数据', {
    url: result.url,
    title: result.title,
    type: result.type
  });

  const { content, type, url, title, favicon } = result;

  if (type === "pdf") {
    logger.debug('检测到PDF文件，开始处理PDF内容', { url });
    try {
      const res = await fetch(url);
      if (!res.ok) {
        logger.error('获取PDF文件失败', { status: res.status, statusText: res.statusText });
        throw new Error(`获取PDF文件失败: ${res.status} ${res.statusText}`);
      }

      const data = await res.arrayBuffer();
      logger.debug('成功获取PDF文件数据', { dataSize: data.byteLength });

      let pdfHtml: {
        content: string
        page: number
      }[] = [];

      const pdf = await getPdf(data);
      logger.info('成功解析PDF文件', { numPages: pdf.numPages });

      for (let i = 1; i <= pdf.numPages; i += 1) {
        logger.debug(`处理PDF第${i}页`);
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        if (!content || content.items.length === 0) {
          logger.debug(`PDF第${i}页没有文本内容，跳过`);
          continue;
        }

        const text = content.items
          .map((item: any) => item.str)
          .join("\n")
          .replace(/\x00/g, "")
          .trim();

        pdfHtml.push({
          content: text,
          page: i
        });

        logger.debug(`成功提取PDF第${i}页文本`, { textLength: text.length });
      }

      logger.info('PDF处理完成', { totalPages: pdfHtml.length });
      return {
        url,
        title,
        content: "",
        pdf: pdfHtml,
        type: "pdf",
        favicon
      };
    } catch (error) {
      logger.error('处理PDF文件时出错', error);
      // 返回基本信息，即使PDF处理失败
      return {
        url,
        title,
        content: "PDF处理失败，无法提取内容",
        pdf: [],
        type: "pdf",
        favicon
      };
    }
  }
  if (isTwitterTimeline(url)) {
    logger.debug('检测到Twitter时间线页面，使用专用解析器', { url });
    const data = parseTwitterTimeline(content);
    logger.info('成功解析Twitter时间线内容', { contentLength: data?.length });
    return {
      url,
      title,
      content: data,
      type: "html",
      pdf: [],
      favicon
    };
  } else if (isTweet(url)) {
    logger.debug('检测到Twitter推文页面，使用专用解析器', { url });
    const data = parseTweet(content);
    logger.info('成功解析Twitter推文内容', { contentLength: data?.length });
    return {
      url,
      title,
      content: data,
      type: "html",
      pdf: [],
      favicon
    };
  } else if (isGoogleDocs(url)) {
    logger.debug('检测到Google Docs文档，使用专用解析器', { url });
    try {
      const data = await parseGoogleDocs();
      if (data) {
        const cleanedData = cleanUnwantedUnicode(data);
        logger.info('成功解析Google Docs内容', { contentLength: cleanedData?.length });
        return {
          url,
          title,
          content: cleanedData,
          type: "html",
          pdf: [],
          favicon
        };
      } else {
        logger.warn('Google Docs解析返回空内容');
      }
    } catch (error) {
      logger.error('解析Google Docs内容失败', error);
    }
  }

  // 默认内容提取
  logger.debug('使用默认内容提取器处理页面', { url, contentLength: content?.length });
  const data = defaultExtractContent(content);
  logger.info('成功提取页面内容', { extractedContentLength: data?.length });
  return { url, title, content: data, type, pdf: [], favicon };
}

export const getContentFromCurrentTab = async (isUsingVS: boolean) => {
  const data = await getDataFromCurrentTab()

  if (isUsingVS) {
    return data
  }

  if (isYoutubeLink(data.url)) {
    console.log("Youtube link detected")

    const transcript = await getTranscript(data.url)
    if (!transcript) {
      return data
    }

    const text = transcript
      .map(item => `[${item?.start}] ${item?.text}`)
      .join(" ")

    return {
      ...data,
      content: text,
    }
  }

  return data
}