/**
 * 截图节流服务
 * 用于管理截图请求队列，确保不超过浏览器的 MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND 限制
 */

import { browser } from "wxt/browser";
import logger from '@/utils/logger';

// 截图请求类型定义
interface ScreenshotRequest {
  tabId?: number;
  options?: chrome.tabs.CaptureVisibleTabOptions;
  resolve: (dataUrl: string) => void;
  reject: (error: Error) => void;
  timestamp: number;
}

// 截图节流管理器
class ScreenshotThrottler {
  // 请求队列
  private queue: ScreenshotRequest[] = [];
  
  // 是否正在处理队列
  private isProcessing: boolean = false;
  
  // 最后一次截图的时间戳
  private lastCaptureTime: number = 0;
  
  // 每秒最大请求数（Chrome 限制为 2）
  private maxRequestsPerSecond: number = 2;
  
  // 请求间隔时间（毫秒）
  private requestInterval: number = Math.ceil(1000 / this.maxRequestsPerSecond);
  
  // 添加截图请求到队列
  public enqueue(
    tabId?: number,
    options?: chrome.tabs.CaptureVisibleTabOptions
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // 创建新的请求对象
      const request: ScreenshotRequest = {
        tabId,
        options,
        resolve,
        reject,
        timestamp: Date.now()
      };
      
      // 添加到队列
      this.queue.push(request);
      logger.debug('截图请求已加入队列', { queueLength: this.queue.length });
      
      // 如果没有正在处理的请求，开始处理队列
      if (!this.isProcessing) {
        this.processQueue();
      }
    });
  }
  
  // 处理队列中的请求
  private async processQueue(): Promise<void> {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }
    
    this.isProcessing = true;
    
    // 获取队列中的第一个请求
    const request = this.queue.shift();
    if (!request) {
      this.isProcessing = false;
      return;
    }
    
    // 计算需要等待的时间
    const now = Date.now();
    const timeElapsed = now - this.lastCaptureTime;
    const waitTime = Math.max(0, this.requestInterval - timeElapsed);
    
    if (waitTime > 0) {
      logger.debug(`等待 ${waitTime}ms 后执行截图请求，以避免超过配额限制`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    try {
      // 执行截图请求
      const dataUrl = await this.captureVisibleTab(request.tabId, request.options);
      
      // 更新最后一次截图时间
      this.lastCaptureTime = Date.now();
      
      // 返回结果
      request.resolve(dataUrl);
    } catch (error) {
      logger.error('截图请求失败', error);
      request.reject(error instanceof Error ? error : new Error(String(error)));
    } finally {
      // 继续处理队列中的下一个请求
      setTimeout(() => this.processQueue(), 0);
    }
  }
  
  // 执行实际的截图操作
  private captureVisibleTab(
    tabId?: number,
    options?: chrome.tabs.CaptureVisibleTabOptions
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      logger.debug('执行截图操作', { tabId, options });
      
      if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
        chrome.tabs.captureVisibleTab(tabId as any, options, (dataUrl) => {
          if (chrome.runtime.lastError) {
            logger.error('Chrome 截图捕获失败', chrome.runtime.lastError);
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
      } else {
        // Firefox 或其他浏览器
        browser.tabs.captureVisibleTab(tabId as any, options)
          .then(dataUrl => {
            if (!dataUrl) {
              logger.error('截图数据为空');
              reject(new Error('截图数据为空'));
              return;
            }
            
            logger.debug('成功捕获截图', { dataUrlLength: dataUrl.length });
            resolve(dataUrl);
          })
          .catch(error => {
            logger.error('浏览器截图捕获失败', error);
            reject(error);
          });
      }
    });
  }
}

// 创建单例实例
export const screenshotThrottler = new ScreenshotThrottler();
