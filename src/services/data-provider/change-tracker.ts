/**
 * 数据提供者API变更跟踪组件
 */
import logger from '@/utils/logger';
import { getDataProviderConfig } from '@/config/data-provider-config';

// 变更记录接口
export interface ChangeRecord {
  // 记录ID
  id: string;
  
  // 实体类型
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';
  
  // 实体ID
  entityId: string;
  
  // 变更类型
  changeType: 'create' | 'update' | 'delete';
  
  // 变更时间
  timestamp: number;
  
  // 变更序列号
  sequenceNumber: number;
  
  // 变更详情
  details?: any;
  
  // 冲突解决策略（可选）
  conflictResolution?: 'client-wins' | 'server-wins' | 'merge';
}

// 存储键
const CHANGE_RECORDS_KEY = 'dataProviderChangeRecords';
const SEQUENCE_NUMBER_KEY = 'dataProviderSequenceNumber';

/**
 * 生成唯一ID
 */
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * 获取并递增序列号
 */
async function getNextSequenceNumber(): Promise<number> {
  return new Promise((resolve) => {
    chrome.storage.local.get(SEQUENCE_NUMBER_KEY, (result) => {
      const currentNumber = result[SEQUENCE_NUMBER_KEY] as number || 0;
      const nextNumber = currentNumber + 1;
      
      chrome.storage.local.set({ [SEQUENCE_NUMBER_KEY]: nextNumber }, () => {
        resolve(nextNumber);
      });
    });
  });
}

/**
 * 获取变更记录
 */
async function getChangeRecords(): Promise<ChangeRecord[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get(CHANGE_RECORDS_KEY, (result) => {
      const records = result[CHANGE_RECORDS_KEY] as ChangeRecord[];
      
      if (!records) {
        resolve([]);
      } else {
        resolve(records);
      }
    });
  });
}

/**
 * 保存变更记录
 */
async function saveChangeRecords(records: ChangeRecord[]): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [CHANGE_RECORDS_KEY]: records }, () => {
      if (chrome.runtime.lastError) {
        reject(new Error(`保存变更记录失败: ${chrome.runtime.lastError.message}`));
      } else {
        resolve();
      }
    });
  });
}

/**
 * 记录数据变更
 * @param entityType 实体类型
 * @param entityId 实体ID
 * @param changeType 变更类型
 * @param details 变更详情
 * @param conflictResolution 冲突解决策略（可选）
 */
export async function trackChange(
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page',
  entityId: string,
  changeType: 'create' | 'update' | 'delete',
  details?: any,
  conflictResolution?: 'client-wins' | 'server-wins' | 'merge'
): Promise<void> {
  try {
    logger.debug('记录数据变更', {
      entityType,
      entityId,
      changeType,
    });
    
    // 获取序列号
    const sequenceNumber = await getNextSequenceNumber();
    
    // 创建变更记录
    const record: ChangeRecord = {
      id: generateId(),
      entityType,
      entityId,
      changeType,
      timestamp: Date.now(),
      sequenceNumber,
      details,
      conflictResolution
    };
    
    // 获取现有记录
    const records = await getChangeRecords();
    
    // 添加新记录
    records.push(record);
    
    // 保存记录
    await saveChangeRecords(records);
    
    // 清理过期记录
    await cleanupChangeRecords();
  } catch (error) {
    logger.error('记录数据变更失败', error);
  }
}

/**
 * 获取指定时间戳之后的变更记录
 * @param timestamp 时间戳
 * @param entityType 实体类型（可选）
 * @param maxRecords 最大返回记录数（可选）
 */
export async function getChangesSince(
  timestamp: number,
  entityType?: string,
  maxRecords?: number
): Promise<ChangeRecord[]> {
  try {
    logger.debug('获取变更记录', {
      timestamp,
      entityType,
      maxRecords
    });
    
    // 获取所有记录
    const records = await getChangeRecords();
    
    // 过滤记录
    const filteredRecords = records.filter((record) => {
      // 过滤时间戳
      if (record.timestamp <= timestamp) {
        return false;
      }
      
      // 过滤实体类型
      if (entityType && record.entityType !== entityType) {
        return false;
      }
      
      return true;
    });
    
    // 按时间戳排序
    filteredRecords.sort((a, b) => a.timestamp - b.timestamp);
    
    // 如果指定了最大记录数，进行限制
    if (maxRecords && maxRecords > 0 && filteredRecords.length > maxRecords) {
      return filteredRecords.slice(0, maxRecords);
    }
    
    return filteredRecords;
  } catch (error) {
    logger.error('获取变更记录失败', error);
    return [];
  }
}

/**
 * 清理过期的变更记录
 */
export async function cleanupChangeRecords(): Promise<number> {
  try {
    // 获取配置
    const config = await getDataProviderConfig();
    
    // 计算过期时间
    const expirationTime = Date.now() - (config.logging.retentionDays * 24 * 60 * 60 * 1000);
    
    // 获取所有记录
    const records = await getChangeRecords();
    
    // 记录初始数量
    const initialCount = records.length;
    
    // 过滤过期记录
    const filteredRecords = records.filter((record) => record.timestamp >= expirationTime);
    
    // 如果有记录被过滤，保存更新后的记录
    if (filteredRecords.length !== initialCount) {
      await saveChangeRecords(filteredRecords);
    }
    
    // 返回清理的记录数量
    return initialCount - filteredRecords.length;
  } catch (error) {
    logger.error('清理变更记录失败', error);
    return 0;
  }
}

/**
 * 获取实体的最后变更时间
 * @param entityType 实体类型
 * @param entityId 实体ID
 */
export async function getLastChangeTime(
  entityType: string,
  entityId: string
): Promise<number> {
  try {
    // 获取所有记录
    const records = await getChangeRecords();
    
    // 过滤记录
    const entityRecords = records.filter(
      (record) => record.entityType === entityType && record.entityId === entityId
    );
    
    // 如果没有记录，返回0
    if (entityRecords.length === 0) {
      return 0;
    }
    
    // 返回最后变更时间
    return Math.max(...entityRecords.map((record) => record.timestamp));
  } catch (error) {
    logger.error('获取实体最后变更时间失败', error);
    return 0;
  }
}

/**
 * 获取实体的所有变更记录
 * @param entityType 实体类型
 * @param entityId 实体ID
 */
export async function getEntityChanges(
  entityType: string,
  entityId: string
): Promise<ChangeRecord[]> {
  try {
    // 获取所有记录
    const records = await getChangeRecords();
    
    // 过滤记录
    return records.filter(
      (record) => record.entityType === entityType && record.entityId === entityId
    );
  } catch (error) {
    logger.error('获取实体变更记录失败', error);
    return [];
  }
}
