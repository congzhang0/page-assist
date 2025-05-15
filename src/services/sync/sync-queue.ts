import { getSyncConfig } from '@/config/sync-config';
import { SyncEventType, syncEventManager } from './sync-events';

// 同步项目接口
export interface SyncItem {
  id: string;
  operation: 'create' | 'update' | 'delete';
  entityType: 'document' | 'model' | 'knowledge' | 'vector' | 'message';
  data: any;
  createdAt: number;
  retryCount: number;
  priority: number; // 优先级：1(高) - 10(低)
}

// 同步队列管理
export class SyncQueue {
  private queue: SyncItem[] = [];
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  // 初始化队列，从存储中恢复
  private async initialize() {
    if (this.isInitialized) return;

    try {
      const result = await new Promise<{ syncQueue?: SyncItem[] }>((resolve) => {
        chrome.storage.local.get('syncQueue', (result) => {
          resolve(result);
        });
      });

      this.queue = result.syncQueue || [];
      this.isInitialized = true;
      
      // 清理过期项目
      await this.cleanExpiredItems();
      
      // 通知队列更新
      this.notifyQueueUpdated();
    } catch (error) {
      console.error('Error initializing sync queue:', error);
      this.isInitialized = true;
      this.queue = [];
    }
  }

  // 添加项目到队列
  public async addItem(item: Omit<SyncItem, 'id' | 'createdAt' | 'retryCount' | 'priority'>): Promise<string> {
    await this.ensureInitialized();
    
    const syncItem: SyncItem = {
      ...item,
      id: this.generateId(),
      createdAt: Date.now(),
      retryCount: 0,
      priority: this.getPriorityForEntityType(item.entityType),
    };
    
    this.queue.push(syncItem);
    await this.persistQueue();
    
    return syncItem.id;
  }

  // 获取下一批要同步的项目
  public async getNextBatch(): Promise<SyncItem[]> {
    await this.ensureInitialized();
    
    const config = await getSyncConfig();
    const batchSize = config.batch.enabled ? config.batch.maxSize : 1;
    
    // 按优先级排序
    const sortedQueue = [...this.queue].sort((a, b) => a.priority - b.priority);
    
    return sortedQueue.slice(0, batchSize);
  }

  // 标记项目同步成功
  public async markSuccess(ids: string[]): Promise<void> {
    await this.ensureInitialized();
    
    this.queue = this.queue.filter(item => !ids.includes(item.id));
    await this.persistQueue();
  }

  // 标记项目同步失败
  public async markFailure(id: string): Promise<void> {
    await this.ensureInitialized();
    
    const item = this.queue.find(item => item.id === id);
    if (item) {
      item.retryCount++;
      await this.persistQueue();
    }
  }

  // 获取队列状态
  public async getStats(): Promise<{ total: number, pending: number, retry: number }> {
    await this.ensureInitialized();
    
    return {
      total: this.queue.length,
      pending: this.queue.filter(item => item.retryCount === 0).length,
      retry: this.queue.filter(item => item.retryCount > 0).length,
    };
  }

  // 清理过期项目
  public async cleanExpiredItems(): Promise<number> {
    await this.ensureInitialized();
    
    const config = await getSyncConfig();
    const now = Date.now();
    const expirationTime = config.retention.expirationTime;
    
    const initialCount = this.queue.length;
    this.queue = this.queue.filter(item => (now - item.createdAt) < expirationTime);
    
    if (initialCount !== this.queue.length) {
      await this.persistQueue();
    }
    
    return initialCount - this.queue.length;
  }

  // 持久化队列到存储
  private async persistQueue(): Promise<void> {
    return new Promise<void>((resolve) => {
      chrome.storage.local.set({ syncQueue: this.queue }, () => {
        this.notifyQueueUpdated();
        resolve();
      });
    });
  }

  // 确保队列已初始化
  private async ensureInitialized(): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }
  }

  // 生成唯一ID
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  // 根据实体类型确定优先级
  private getPriorityForEntityType(entityType: string): number {
    // 可以根据实际需求调整各类型的优先级
    switch (entityType) {
      case 'document': return 1; // 文档最高优先级
      case 'knowledge': return 2;
      case 'message': return 3;
      case 'model': return 4;
      case 'vector': return 5;
      default: return 10;
    }
  }

  // 通知队列更新
  private notifyQueueUpdated(): void {
    syncEventManager.dispatchEvent({
      type: SyncEventType.SYNC_QUEUE_UPDATED,
      payload: { queueLength: this.queue.length },
      timestamp: Date.now(),
    });
  }
}

// 导出单例
export const syncQueue = new SyncQueue(); 