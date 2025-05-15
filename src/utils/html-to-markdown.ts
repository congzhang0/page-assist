/**
 * HTML 到 Markdown 转换工具
 * 提供一个简单的、不依赖 DOM API 的 HTML 到 Markdown 转换函数
 */

import * as cheerio from 'cheerio';
import logger from './logger';

/**
 * 将 HTML 转换为 Markdown
 * @param html HTML 字符串
 * @returns Markdown 字符串
 */
export function htmlToMarkdown(html: string): string {
  logger.debug('开始将 HTML 转换为 Markdown');
  
  try {
    const $ = cheerio.load(html);
    
    // 移除不需要的元素
    $('script, style, link, svg, [src^="data:image/"]').remove();
    
    // 获取处理后的 HTML
    const processedHtml = $('body').html() || '';
    
    // 转换为 Markdown
    const markdown = convertToMarkdown($, processedHtml);
    
    logger.debug('HTML 成功转换为 Markdown', { markdownLength: markdown.length });
    return markdown;
  } catch (error) {
    logger.error('HTML 转换为 Markdown 失败', error);
    return '无法转换 HTML 到 Markdown: ' + (error instanceof Error ? error.message : String(error));
  }
}

/**
 * 将 HTML 转换为 Markdown
 * @param $ cheerio 实例
 * @param html HTML 字符串
 * @returns Markdown 字符串
 */
function convertToMarkdown($: cheerio.CheerioAPI, html: string): string {
  // 创建一个新的 cheerio 实例，以便处理传入的 HTML 片段
  const $content = cheerio.load(html);
  let markdown = '';
  
  // 处理根元素下的所有子元素
  $content('body').children().each((_, element) => {
    markdown += processElement($content, element) + '\n\n';
  });
  
  // 清理 Markdown
  return cleanMarkdown(markdown);
}

/**
 * 处理单个 HTML 元素
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processElement($: cheerio.CheerioAPI, element: cheerio.Element): string {
  const tagName = element.tagName?.toLowerCase();
  const $element = $(element);
  const text = $element.text().trim();
  const html = $element.html() || '';
  
  // 如果元素没有内容，返回空字符串
  if (!text && !html) {
    return '';
  }
  
  // 处理不同类型的元素
  switch (tagName) {
    case 'h1':
      return `# ${text}`;
    case 'h2':
      return `## ${text}`;
    case 'h3':
      return `### ${text}`;
    case 'h4':
      return `#### ${text}`;
    case 'h5':
      return `##### ${text}`;
    case 'h6':
      return `###### ${text}`;
    case 'p':
      return processInlineElements($, element);
    case 'ul':
      return processList($, element, '*');
    case 'ol':
      return processList($, element, '1.');
    case 'blockquote':
      return processBlockquote($, element);
    case 'pre':
      return processCodeBlock($, element);
    case 'code':
      return '`' + text + '`';
    case 'a':
      return processLink($, element);
    case 'img':
      return processImage($, element);
    case 'table':
      return processTable($, element);
    case 'br':
      return '\n';
    case 'hr':
      return '---';
    case 'div':
    case 'section':
    case 'article':
    case 'main':
    case 'aside':
    case 'header':
    case 'footer':
      // 处理容器元素
      let result = '';
      $element.children().each((_, child) => {
        result += processElement($, child) + '\n\n';
      });
      return result.trim();
    default:
      // 处理其他元素
      return processInlineElements($, element);
  }
}

/**
 * 处理内联元素
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processInlineElements($: cheerio.CheerioAPI, element: cheerio.Element): string {
  let result = '';
  
  // 如果元素只包含文本，直接返回文本
  if (!$(element).children().length) {
    return $(element).text();
  }
  
  // 处理元素的所有子节点（包括文本节点和元素节点）
  element.childNodes.forEach((node) => {
    if (node.type === 'text') {
      // 文本节点
      result += node.data || '';
    } else if (node.type === 'tag') {
      // 元素节点
      const tagName = node.tagName?.toLowerCase();
      const $node = $(node);
      const text = $node.text();
      
      switch (tagName) {
        case 'strong':
        case 'b':
          result += `**${text}**`;
          break;
        case 'em':
        case 'i':
          result += `*${text}*`;
          break;
        case 'code':
          result += `\`${text}\``;
          break;
        case 'a':
          result += processLink($, node);
          break;
        case 'img':
          result += processImage($, node);
          break;
        case 'br':
          result += '\n';
          break;
        default:
          // 递归处理其他元素
          result += processElement($, node);
      }
    }
  });
  
  return result;
}

/**
 * 处理列表
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @param marker 列表标记（* 或 1.）
 * @returns Markdown 字符串
 */
function processList($: cheerio.CheerioAPI, element: cheerio.Element, marker: string): string {
  let result = '';
  
  $(element).children('li').each((index, item) => {
    const itemText = processInlineElements($, item);
    const prefix = marker === '1.' ? `${index + 1}. ` : `${marker} `;
    result += `${prefix}${itemText}\n`;
  });
  
  return result;
}

/**
 * 处理引用块
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processBlockquote($: cheerio.CheerioAPI, element: cheerio.Element): string {
  const content = processInlineElements($, element);
  
  // 在每一行前添加 > 
  return content.split('\n').map(line => `> ${line}`).join('\n');
}

/**
 * 处理代码块
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processCodeBlock($: cheerio.CheerioAPI, element: cheerio.Element): string {
  const content = $(element).text();
  return '```\n' + content + '\n```';
}

/**
 * 处理链接
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processLink($: cheerio.CheerioAPI, element: cheerio.Element): string {
  const href = $(element).attr('href') || '';
  const text = $(element).text() || href;
  
  return `[${text}](${href})`;
}

/**
 * 处理图片
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processImage($: cheerio.CheerioAPI, element: cheerio.Element): string {
  const src = $(element).attr('src') || '';
  const alt = $(element).attr('alt') || '';
  
  return `![${alt}](${src})`;
}

/**
 * 处理表格
 * @param $ cheerio 实例
 * @param element HTML 元素
 * @returns Markdown 字符串
 */
function processTable($: cheerio.CheerioAPI, element: cheerio.Element): string {
  let result = '';
  
  // 处理表头
  const $headers = $(element).find('th');
  if ($headers.length) {
    const headers: string[] = [];
    $headers.each((_, header) => {
      headers.push($(header).text().trim());
    });
    
    result += '| ' + headers.join(' | ') + ' |\n';
    result += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
  }
  
  // 处理表格内容
  $(element).find('tr').each((_, row) => {
    const $cells = $(row).find('td');
    if ($cells.length) {
      const cells: string[] = [];
      $cells.each((_, cell) => {
        cells.push($(cell).text().trim());
      });
      
      result += '| ' + cells.join(' | ') + ' |\n';
    }
  });
  
  return result;
}

/**
 * 清理 Markdown
 * @param markdown Markdown 字符串
 * @returns 清理后的 Markdown 字符串
 */
function cleanMarkdown(markdown: string): string {
  return markdown
    .replace(/\n{3,}/g, '\n\n') // 将连续的3个或更多换行符替换为2个
    .trim(); // 移除首尾空白字符
}
