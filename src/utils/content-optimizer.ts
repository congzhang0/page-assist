/**
 * Content Optimizer Utility
 * Provides functions to optimize and limit web page content size
 */

import logger from './logger';

// Default size limits (in bytes)
export const DEFAULT_MAX_CONTENT_SIZE = 5 * 1024 * 1024; // 5MB
export const DEFAULT_MAX_HTML_SIZE = 10 * 1024 * 1024; // 10MB
export const DEFAULT_TRUNCATED_SIZE = 2 * 1024 * 1024; // 2MB for truncated content

/**
 * Options for content optimization
 */
export interface ContentOptimizationOptions {
  // Size limits
  maxContentSize?: number;
  maxHtmlSize?: number;
  truncatedSize?: number;
  
  // Optimization options
  removeScripts?: boolean;
  removeStyles?: boolean;
  removeComments?: boolean;
  removeFrames?: boolean;
  keepMainContentOnly?: boolean;
  preserveImages?: boolean;
  optimizeImages?: boolean;
  
  // Reporting
  reportTruncation?: boolean;
}

/**
 * Result of the content optimization process
 */
export interface OptimizationResult {
  content: string;
  html: string;
  originalContentSize: number;
  optimizedContentSize: number;
  originalHtmlSize: number;
  optimizedHtmlSize: number;
  wasTruncated: boolean;
  optimizationApplied: boolean;
}

/**
 * Optimize HTML content
 * @param html The original HTML content
 * @param options Optimization options
 * @returns Optimized HTML
 */
const optimizeHtml = (html: string, options: ContentOptimizationOptions): string => {
  try {
    // Ensure html is a string and not null/undefined
    if (!html || typeof html !== 'string') {
      logger.warn('Invalid HTML input:', { type: typeof html });
      return '';
    }
    
    // Initialize the result with the original HTML
    let result = html;
    
    // Remove scripts if requested
    if (options.removeScripts) {
      try {
        result = result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
      } catch (err) {
        logger.error('Failed to remove scripts:', err);
      }
    }
    
    // Remove styles if requested  
    if (options.removeStyles) {
      try {
        result = result.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        result = result.replace(/<link\s+[^>]*rel="stylesheet"[^>]*>/gi, '');
      } catch (err) {
        logger.error('Failed to remove styles:', err);
      }
    }
    
    // Remove comments if requested
    if (options.removeComments) {
      try {
        result = result.replace(/<!--[\s\S]*?-->/g, '');
      } catch (err) {
        logger.error('Failed to remove comments:', err);
      }
    }
    
    // Handle images based on options
    if (!options.preserveImages) {
      try {
        result = result.replace(/<img\b[^>]*>/gi, ''); // Remove all images
      } catch (err) {
        logger.error('Failed to remove images:', err);
      }
    } else if (options.optimizeImages) {
      try {
        // Convert relative image paths to absolute
        result = result.replace(
          /(<img[^>]+src=["'])(?!http|data:)([^"']+)(["'][^>]*>)/gi,
          (match, start, url, end) => {
            try {
              // Try to convert relative to absolute URL
              const absoluteUrl = new URL(url, window.location.href).href;
              return `${start}${absoluteUrl}${end}`;
            } catch (err) {
              logger.error('Failed to convert relative image URL:', { url, error: err });
              return match; // Keep original if conversion fails
            }
          }
        );

        // Optional: Handle srcset attributes
        result = result.replace(
          /(<img[^>]+srcset=["'])([^"']+)(["'][^>]*>)/gi,
          (match, start, srcset, end) => {
            try {
              const processedSrcset = srcset
                .split(',')
                .map(src => {
                  const [url, size] = src.trim().split(/\s+/);
                  try {
                    const absoluteUrl = new URL(url, window.location.href).href;
                    return `${absoluteUrl} ${size || ''}`.trim();
                  } catch (err) {
                    return src.trim();
                  }
                })
                .join(', ');
              return `${start}${processedSrcset}${end}`;
            } catch (err) {
              logger.error('Failed to process srcset:', { srcset, error: err });
              return match;
            }
          }
        );
      } catch (err) {
        logger.error('Failed to optimize images:', err);
      }
    }
    
    // Remove frames if requested
    if (options.removeFrames) {
      try {
        result = result.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
        result = result.replace(/<frame\b[^<]*(?:(?!<\/frame>)<[^<]*)*<\/frame>/gi, '');
        result = result.replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '');
        result = result.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
      } catch (err) {
        logger.error('Failed to remove frames:', err);
      }
    }
    
    return result;
  } catch (error) {
    logger.error('HTML optimization failed:', error);
    return html || ''; // Return original if optimization fails, or empty string if original is invalid
  }
};

/**
 * Truncate content to specified size
 * @param content Content to truncate
 * @param maxSize Maximum size in bytes
 * @returns Truncated content
 */
const truncateContent = (content: string, maxSize: number): string => {
  if (!content || content.length <= maxSize) return content;
  
  // Calculate byte length
  const encoder = new TextEncoder();
  const bytes = encoder.encode(content);
  
  if (bytes.length <= maxSize) return content;
  
  // Find a safe truncation point (end of a paragraph or sentence)
  const approximateCharLen = Math.floor(maxSize * content.length / bytes.length);
  let truncationPoint = approximateCharLen;
  
  // Try to find a paragraph end
  const paragraphEnd = content.lastIndexOf('\n\n', approximateCharLen);
  if (paragraphEnd > 0 && paragraphEnd > approximateCharLen * 0.8) {
    truncationPoint = paragraphEnd;
  } else {
    // Try to find a sentence end
    const sentenceEnd = content.lastIndexOf('. ', approximateCharLen);
    if (sentenceEnd > 0 && sentenceEnd > approximateCharLen * 0.9) {
      truncationPoint = sentenceEnd + 1;
    }
  }
  
  // Truncate content at the determined point
  return content.substring(0, truncationPoint) + 
    '\n\n[Content truncated due to size limits. Original size: ' + 
    (bytes.length / 1024 / 1024).toFixed(2) + ' MB]';
};

/**
 * Optimize content for saving
 * @param content Original extracted text content
 * @param html Original HTML content
 * @param options Optimization options
 * @returns Optimized content and HTML
 */
export const optimizeContent = (
  content: string, 
  html: string, 
  options: ContentOptimizationOptions = {}
): OptimizationResult => {
  try {
    // Ensure content and html are strings
    if (!content || typeof content !== 'string') {
      logger.warn('Invalid content input:', { type: typeof content });
      content = '';
    }
    if (!html || typeof html !== 'string') {
      logger.warn('Invalid HTML input:', { type: typeof html });
      html = '';
    }
    
    // Use default values for any unspecified options
    const settings: Required<ContentOptimizationOptions> = {
      maxContentSize: options.maxContentSize || DEFAULT_MAX_CONTENT_SIZE,
      maxHtmlSize: options.maxHtmlSize || DEFAULT_MAX_HTML_SIZE,
      truncatedSize: options.truncatedSize || DEFAULT_TRUNCATED_SIZE,
      removeScripts: options.removeScripts ?? true,
      removeStyles: options.removeStyles ?? true,
      removeComments: options.removeComments ?? true,
      removeFrames: options.removeFrames ?? true,
      keepMainContentOnly: options.keepMainContentOnly ?? false,
      preserveImages: options.preserveImages ?? true,
      optimizeImages: options.optimizeImages ?? true,
      reportTruncation: options.reportTruncation ?? true
    };
  
    // Calculate original sizes
    let originalContentSize = 0;
    let originalHtmlSize = 0;
    try {
      originalContentSize = content ? new TextEncoder().encode(content).length : 0;
      originalHtmlSize = html ? new TextEncoder().encode(html).length : 0;
    } catch (err) {
      logger.error('Failed to calculate content sizes:', err);
    }
  
    // Track if any transformations were applied
    let wasTruncated = false;
    let optimizationApplied = false;
  
    // Optimize HTML if any HTML optimization is enabled
    let optimizedHtml = html;
    if (settings.removeScripts || settings.removeStyles || 
        settings.removeComments || settings.removeFrames || 
        settings.keepMainContentOnly) {
      try {
        optimizedHtml = optimizeHtml(html, settings);
        optimizationApplied = optimizedHtml !== html;
      } catch (err) {
        logger.error('Failed to optimize HTML:', err);
        optimizedHtml = html;
      }
    }
  
    // Truncate HTML if still too large
    let optimizedHtmlSize = 0;
    try {
      optimizedHtmlSize = optimizedHtml ? new TextEncoder().encode(optimizedHtml).length : 0;
      if (optimizedHtmlSize > settings.maxHtmlSize) {
        optimizedHtml = truncateContent(optimizedHtml, settings.truncatedSize);
        wasTruncated = true;
      }
    } catch (err) {
      logger.error('Failed to truncate HTML:', err);
    }
  
    // Truncate content if too large
    let optimizedContent = content;
    let optimizedContentSize = 0;
    try {
      optimizedContentSize = content ? new TextEncoder().encode(content).length : 0;
      if (optimizedContentSize > settings.maxContentSize) {
        optimizedContent = truncateContent(content, settings.truncatedSize);
        wasTruncated = true;
      }
    } catch (err) {
      logger.error('Failed to truncate content:', err);
    }
  
    // Get final sizes
    try {
      optimizedContentSize = optimizedContent ? new TextEncoder().encode(optimizedContent).length : 0;
      optimizedHtmlSize = optimizedHtml ? new TextEncoder().encode(optimizedHtml).length : 0;
    } catch (err) {
      logger.error('Failed to calculate final sizes:', err);
    }
  
    // Log if content was truncated
    if (wasTruncated && settings.reportTruncation) {
      logger.warn('Content was truncated due to size limits', {
        originalContentSize,
        originalHtmlSize,
        optimizedContentSize,
        optimizedHtmlSize 
      });
    }
  
    return {
      content: optimizedContent,
      html: optimizedHtml,
      originalContentSize,
      optimizedContentSize,
      originalHtmlSize, 
      optimizedHtmlSize,
      wasTruncated,
      optimizationApplied
    };
  } catch (error) {
    logger.error('Content optimization failed:', error);
    // Return safe default values if optimization fails
    return {
      content: content || '',
      html: html || '',
      originalContentSize: 0,
      optimizedContentSize: 0,
      originalHtmlSize: 0,
      optimizedHtmlSize: 0,
      wasTruncated: false,
      optimizationApplied: false
    };
  }
};
