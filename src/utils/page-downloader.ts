/**
 * Page Downloader Utility
 * Provides functions to download web pages in different modes
 */

import * as cheerio from 'cheerio';
import logger from './logger';

export interface DownloadOptions {
  // Download mode
  mode: 'full' | 'optimized';
  
  // Optimization options (for optimized mode)
  removeScripts?: boolean;
  removeStyles?: boolean;
  removeComments?: boolean;
  removeFrames?: boolean;
  
  // Save options
  filename?: string;
  saveAs?: boolean;
}

export interface DownloadResult {
  success: boolean;
  error?: string;
  html?: string; // The processed HTML content
  originalSize?: number; // Original content size in bytes
  optimizedSize?: number; // Optimized content size in bytes
  downloadId?: number; // Chrome downloads API downloadId if saved to disk
  filename?: string; // The filename used for download
}

/**
 * Download webpage in full mode using chrome.downloads API
 */
export const downloadFullPage = async (url: string, options: DownloadOptions): Promise<DownloadResult> => {
  try {
    const filename = options.filename || `page-${Date.now()}.html`;
    
    // Use Chrome's download API for full page download
    const downloadId = await chrome.downloads.download({
      url: url,
      filename: filename,
      saveAs: options.saveAs ?? true
    });
    
    return { 
      success: true,
      downloadId,
      filename 
    };
  } catch (error) {
    logger.error('Failed to download page:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

/**
 * Download webpage in optimized mode using fetch + cheerio
 */
export const downloadOptimizedPage = async (url: string, options: DownloadOptions): Promise<DownloadResult> => {
  try {
    // Fetch page content
    const response = await fetch(url);
    const html = await response.text();
    
    // Load content into cheerio
    const $ = cheerio.load(html);
    const originalSize = html.length;
    
    // Apply optimizations
    if (options.removeScripts) {
      $('script').remove();
    }
    
    if (options.removeStyles) {
      $('style').remove();
      $('link[rel="stylesheet"]').remove();
    }
    
    if (options.removeComments) {
      $('*').contents().each(function() {
        if (this.type === 'comment') {
          $(this).remove();
        }
      });
    }
    
    if (options.removeFrames) {
      $('iframe, frame, embed, object').remove();
    }
    
    // Get optimized HTML
    const optimizedHtml = $.html();
    const optimizedSize = optimizedHtml.length;
    
    // If saveAs is false, just return the optimized content
    if (!options.saveAs) {
      return {
        success: true,
        html: optimizedHtml,
        originalSize,
        optimizedSize
      };
    }
    
    // Create blob and download if saveAs is true
    const blob = new Blob([optimizedHtml], { type: 'text/html;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    
    if (chrome?.downloads) {
      // Use chrome.downloads API if available
      const filename = options.filename || `page-${Date.now()}.html`;
      const downloadId = await chrome.downloads.download({
        url: downloadUrl,
        filename: filename,
        saveAs: options.saveAs ?? true
      });
      
      // Cleanup
      URL.revokeObjectURL(downloadUrl);
      
      return {
        success: true,
        html: optimizedHtml,
        originalSize,
        optimizedSize,
        downloadId,
        filename
      };
    } else {
      // Fallback to creating temporary link
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = options.filename || `page-${Date.now()}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Cleanup
      URL.revokeObjectURL(downloadUrl);
      
      return {
        success: true,
        html: optimizedHtml,
        originalSize,
        optimizedSize
      };
    }
  } catch (error) {
    logger.error('Failed to download optimized page:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

/**
 * Download webpage with specified options
 */
export const downloadWebpage = async (url: string, options: DownloadOptions = { mode: 'full' }): Promise<DownloadResult> => {
  return options.mode === 'full' 
    ? downloadFullPage(url, options)
    : downloadOptimizedPage(url, options);
};
