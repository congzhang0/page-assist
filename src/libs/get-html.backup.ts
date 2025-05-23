import { defaultExtractContent } from "@/parser/default";
import { getPdf } from "./pdf";
import {
  isTweet,
  isTwitterTimeline,
  parseTweet,
  parseTwitterTimeline
} from "@/parser/twitter";
import { isGoogleDocs, parseGoogleDocs } from "@/parser/google-docs";
import { cleanUnwantedUnicode } from "@/utils/clean";
import logger from "@/utils/logger";
import { isYoutubeLink } from "@/utils/is-youtube";
import { YtTranscript } from "yt-transcript";
import { browser } from "wxt/browser";

// 定义页面数据接口
export interface PageData {
  url: string;
  title: string;
  content: string;
  html?: string;
  type: "html" | "pdf" | "other";
  pdf?: Array<{content: string; page: number}>;
  favicon?: string;
}

const getTranscript = async (url: string) => {
  try {
    const ytTranscript = new YtTranscript({ url });
    return await ytTranscript.getTranscript();
  } catch (error) {
    logger.error('获取YouTube字幕失败', error);
    return null;
  }
};

/**
 * 从页面获取HTML内容
 */
function _getHtml(): PageData {
  const url = window.location.href;
  const title = document.title;
  const favicon = document.querySelector('link[rel="icon"]')?.getAttribute('href') ||
                 document.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
                 `${window.location.origin}/favicon.ico`;

  // 检查是否是 PDF
  const isPdf = document.contentType === "application/pdf" || 
                url.toLowerCase().endsWith('.pdf') || 
                document.querySelector('embed[type="application/pdf"]') !== null;

  if (isPdf) {
    return { 
      url, 
      title, 
      content: "", 
      type: "pdf",
      html: "", 
      favicon 
    };
  }

  try {
    // 克隆文档以避免修改原始文档
    const clonedDoc = document.cloneNode(true) as Document;
    const elementsToRemove = [
      'script',
      'style',
      'iframe',
      'frame',
      'object',
      'embed',
      'noscript',
      'canvas',
      'svg'
    ];

    // 移除不必要的元素
    elementsToRemove.forEach(tag => {
      const elements = clonedDoc.getElementsByTagName(tag);
      while (elements.length > 0) {
        elements[0].parentNode?.removeChild(elements[0]);
      }
    });

    // 获取清理后的HTML
    const content = clonedDoc.documentElement.outerHTML;

    return {
      url,
      title,
      content,
      html: content,
      type: "html",
      favicon
    };
  } catch (error) {
    logger.error('获取页面HTML时出错', error);
    return {
      url,
      title,
      content: document.documentElement.outerHTML,
      type: "html",
      favicon
    };
  }
}

/**
 * 从指定的标签页获取数据
 * @param tabId 标签页ID
 * @returns 页面数据
 */
export const getDataFromSpecificTab = async (tabId: number): Promise<PageData> => {
  logger.debug('开始获取指定标签页内容', { tabId });

  const result = await new Promise<PageData>((resolve, reject) => {
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
            resolve(data[0].result as PageData);
          } else {
            logger.error('内容脚本执行结果为空', { tabId });
            reject(new Error('内容脚本执行结果为空'));
          }
        }).catch(error => {
          logger.error('执行内容脚本失败', { tabId, error });

          // Firefox PDF 特殊处理
          if (import.meta.env.BROWSER === "firefox") {
            browser.tabs.get(tabId).then(tab => {
              logger.info('检测到 Firefox PDF 页面，使用替代方法获取内容', { tabId });
              resolve({
                url: tab.url || "",
                title: tab.title || "PDF Document",
                content: "",
                type: "pdf" as const,
                favicon: tab.favIconUrl
              });
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
  });

  const { content, type, url, title, favicon } = result;

  // PDF 特殊处理
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

      let pdfHtml: Array<{content: string; page: number}> = [];

      const pdf = await getPdf(data);
      logger.info('成功解析PDF文件', { tabId, numPages: pdf.numPages });

      for (let i = 1; i <= pdf.numPages; i++) {
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
        type: "pdf" as const,
        favicon
      };
    } catch (error) {
      logger.error('处理PDF文件时出错', { tabId, error });
      return {
        url,
        title,
        content: "PDF处理失败，无法提取内容",
        pdf: [],
        type: "pdf" as const,
        favicon
      };
    }
  }

  // Twitter 特殊处理
  if (isTwitterTimeline(url)) {
    logger.debug('检测到Twitter时间线页面，使用专用解析器', { tabId, url });
    const data = parseTwitterTimeline(content);
    logger.info('成功解析Twitter时间线内容', { tabId, contentLength: data?.length });
    return {
      url,
      title,
      content: data,
      type: "html" as const,
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
      type: "html" as const,
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
          type: "html" as const,
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
  return {
    url,
    title,
    content: data,
    type: "html" as const,
    favicon
  };
};

/**
 * 从当前标签页获取数据
 */
export const getDataFromCurrentTab = async (): Promise<PageData> => {
  logger.debug('开始获取当前标签页内容');

  const tab = await browser.tabs.query({ active: true, currentWindow: true })
    .then(tabs => tabs[0])
    .catch(error => {
      logger.error('获取当前标签页失败', error);
      throw error;
    });

  if (!tab?.id) {
    logger.error('无法获取有效的标签页ID');
    throw new Error('无法获取有效的标签页ID');
  }

  return getDataFromSpecificTab(tab.id);
};

/**
 * 获取页面内容（包括YouTube字幕）
 */
export const getContentFromCurrentTab = async (isUsingVS: boolean): Promise<PageData> => {
  const data = await getDataFromCurrentTab();

  if (isUsingVS || !isYoutubeLink(data.url)) {
    return data;
  }

  try {
    logger.info('检测到YouTube链接，尝试获取字幕', { url: data.url });
    const transcript = await getTranscript(data.url);
    if (!transcript) {
      return data;
    }

    const transcriptText = transcript
      .map(item => `[${item?.start}] ${item?.text}`)
      .join(" ");

    return {
      ...data,
      content: transcriptText
    };
  } catch (error) {
    logger.error('获取YouTube字幕失败', error);
    return data;
  }
};
