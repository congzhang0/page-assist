import * as cheerio from "cheerio"
import { Readability, isProbablyReaderable } from "@mozilla/readability"
import logger from "@/utils/logger"
import { htmlToMarkdown } from "@/utils/html-to-markdown"

// 创建一个简单的 JSDOM 替代品，用于在 background 脚本中使用
class SimpleDocument {
  private content: string;
  private $ = null;

  constructor(html: string) {
    this.content = html;
    this.$ = cheerio.load(html);
  }

  // 简单模拟 Readability 需要的方法和属性
  querySelector(selector: string) {
    return this.$.root().find(selector).get(0);
  }

  querySelectorAll(selector: string) {
    return this.$.root().find(selector).get();
  }

  getElementsByTagName(tagName: string) {
    return this.$.root().find(tagName).get();
  }

  get documentElement() {
    return {
      getAttribute: (name: string) => null,
      getBoundingClientRect: () => ({ width: 1024, height: 768 }),
      className: '',
      tagName: 'HTML'
    };
  }

  get body() {
    return this.$.root().find('body').get(0) || {};
  }

  get head() {
    return this.$.root().find('head').get(0) || {};
  }

  get title() {
    return this.$.root().find('title').text() || '';
  }

  get location() {
    return { href: '' };
  }

  get documentURI() {
    return '';
  }

  get baseURI() {
    return '';
  }

  createTreeWalker() {
    return {
      currentNode: null,
      nextNode: () => null
    };
  }

  createNodeIterator() {
    return {
      nextNode: () => null
    };
  }

  createElement(tagName: string) {
    return { tagName };
  }
}

export const defaultExtractContent = (html: string) => {
  logger.debug('开始提取页面内容');

  try {
    // 使用 cheerio 解析 HTML
    const $ = cheerio.load(html);

    // 尝试使用 Readability
    try {
      logger.debug('尝试使用 Readability 解析页面');
      const simpleDoc = new SimpleDocument(html);

      if (isProbablyReaderable(simpleDoc as any)) {
        logger.debug('页面可能适合 Readability 解析');
        const reader = new Readability(simpleDoc as any);
        const article = reader.parse();

        if (article && article.content) {
          logger.debug('Readability 成功解析页面', {
            title: article.title,
            contentLength: article.content.length
          });

          // 使用我们的自定义 HTML 到 Markdown 转换函数
          const markdown = htmlToMarkdown(article.content);
          logger.debug('成功转换为 Markdown', { markdownLength: markdown.length });
          return markdown;
        }
      }
    } catch (readabilityError) {
      logger.warn('Readability 解析失败，将使用备用方法', readabilityError);
    }

    // 备用方法：直接使用 cheerio 提取内容
    logger.debug('使用备用方法提取内容');
    $("script, style, link, svg, [src^='data:image/']").remove();

    $("*").each((_, element) => {
      if ("attribs" in element) {
        const attributes = element.attribs;
        for (const attr in attributes) {
          if (attr !== "href" && attr !== "src") {
            $(element).removeAttr(attr);
          }
        }
      }
    });

    const mainContent =
      $('[role="main"]').html() || $("main").html() || $("body").html() || "";

    // 使用我们的自定义 HTML 到 Markdown 转换函数
    const markdown = htmlToMarkdown(mainContent);
    logger.debug('成功转换为 Markdown（备用方法）', { markdownLength: markdown.length });
    return markdown;
  } catch (error) {
    logger.error('提取页面内容失败', error);
    // 返回一个简单的错误消息，而不是抛出异常
    return "无法提取页面内容。错误: " + (error instanceof Error ? error.message : String(error));
  }
}
