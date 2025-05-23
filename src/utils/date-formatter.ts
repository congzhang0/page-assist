/**
 * 日期格式化工具
 * 提供格式化日期的函数
 */

/**
 * 格式化日期
 * @param date 日期对象或时间戳
 * @param format 格式化字符串，默认为'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的日期字符串
 */
export const formatDate = (date: Date | number, format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  const d = typeof date === 'number' ? new Date(date) : date;
  
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

/**
 * 格式化相对时间
 * @param date 日期对象或时间戳
 * @returns 相对时间文本，例如"刚刚"、"5分钟前"、"2小时前"等
 */
export const formatRelativeTime = (date: Date | number): string => {
  const d = typeof date === 'number' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  
  // 转换为秒
  const diffSec = Math.floor(diffMs / 1000);
  
  if (diffSec < 60) {
    return '刚刚';
  }
  
  // 转换为分钟
  const diffMin = Math.floor(diffSec / 60);
  
  if (diffMin < 60) {
    return `${diffMin}分钟前`;
  }
  
  // 转换为小时
  const diffHour = Math.floor(diffMin / 60);
  
  if (diffHour < 24) {
    return `${diffHour}小时前`;
  }
  
  // 转换为天
  const diffDay = Math.floor(diffHour / 24);
  
  if (diffDay < 30) {
    return `${diffDay}天前`;
  }
  
  // 转换为月
  const diffMonth = Math.floor(diffDay / 30);
  
  if (diffMonth < 12) {
    return `${diffMonth}个月前`;
  }
  
  // 转换为年
  const diffYear = Math.floor(diffMonth / 12);
  
  return `${diffYear}年前`;
}; 