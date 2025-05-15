import { getSyncConfig } from '@/config/sync-config';
import { SyncEventType, syncEventManager } from './sync-events';
import { SyncItem, syncQueue } from './sync-queue';

// 同步工作器，负责实际的同步操作
export class SyncWorker {
  private isSyncing = false;
  private abortController: AbortController | null = null;
  private networkOnline = true;

  constructor() {
    // 检查运行环境，适配 service worker 和 window 环境
    this.initNetworkListeners();
    
    // 初始化网络状态
    this.networkOnline = this.isOnline();
  }

  // 初始化网络监听器，兼容 service worker 环境
  private initNetworkListeners() {
    // 检查是否在浏览器环境
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleNetworkChange.bind(this));
      window.addEventListener('offline', this.handleNetworkChange.bind(this));
    } else if (typeof self !== 'undefined') {
      // Service Worker 环境
      self.addEventListener('online', this.handleNetworkChange.bind(this));
      self.addEventListener('offline', this.handleNetworkChange.bind(this));
    }
  }

  // 检查是否在线，兼容不同环境
  private isOnline(): boolean {
    if (typeof navigator !== 'undefined' && 'onLine' in navigator) {
      return navigator.onLine;
    }
    // 如果无法确定，默认为在线
    return true;
  }

  // 启动同步
  public async startSync(): Promise<void> {
    if (this.isSyncing) return;

    const config = await getSyncConfig();
    if (!config.enabled) return;
    if (!this.networkOnline) return;

    this.isSyncing = true;
    this.abortController = new AbortController();

    try {
      const batch = await syncQueue.getNextBatch();
      if (batch.length === 0) {
        this.isSyncing = false;
        return;
      }

      await this.processBatch(batch);
    } catch (error) {
      console.error('Error in sync process:', error);
      // 触发同步错误事件
      syncEventManager.dispatchEvent({
        type: SyncEventType.SYNC_ERROR,
        payload: { error },
        timestamp: Date.now(),
      });
    } finally {
      this.isSyncing = false;
      this.abortController = null;
    }
  }

  // 停止同步
  public stopSync(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.isSyncing = false;
      this.abortController = null;
    }
  }

  // 处理一批同步项目
  private async processBatch(batch: SyncItem[]): Promise<void> {
    const config = await getSyncConfig();
    const successfulIds: string[] = [];

    // 尝试同步每个项目
    for (const item of batch) {
      try {
        // 检查是否被中止
        if (this.abortController?.signal.aborted) {
          break;
        }

        // 检查是否超出重试次数
        if (item.retryCount >= config.retry.maxRetries) {
          // 删除该项目
          await syncQueue.markSuccess([item.id]);
          continue;
        }

        // 执行实际同步
        await this.syncItem(item);
        
        // 标记成功
        successfulIds.push(item.id);
        
        // 触发同步成功事件
        syncEventManager.dispatchEvent({
          type: SyncEventType.SYNC_SUCCESS,
          payload: { item },
          timestamp: Date.now(),
        });
      } catch (error) {
        console.error(`Error syncing item ${item.id}:`, error);
        
        // 标记失败
        await syncQueue.markFailure(item.id);
        
        // 触发同步错误事件
        syncEventManager.dispatchEvent({
          type: SyncEventType.SYNC_ERROR,
          payload: { error, item },
          timestamp: Date.now(),
        });
        
        // 计算下次重试延迟
        const delay = this.calculateRetryDelay(item.retryCount, config);
        
        // 安排重试
        setTimeout(() => {
          this.startSync();
        }, delay);
      }
    }

    // 批量标记成功
    if (successfulIds.length > 0) {
      await syncQueue.markSuccess(successfulIds);
    }

    // 如果还有更多项目，继续同步
    const stats = await syncQueue.getStats();
    if (stats.total > 0) {
      this.startSync();
    }
  }

  // 同步单个项目
  private async syncItem(item: SyncItem): Promise<void> {
    const config = await getSyncConfig();
    
    // 检查代理端点是否配置
    if (!config.proxyEndpoint) {
      throw new Error('Proxy endpoint not configured');
    }

    try {
      // 构建请求
      const response = await fetch(config.proxyEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operation: item.operation,
          entityType: item.entityType,
          data: item.data,
          timestamp: Date.now(),
          syncId: item.id,
        }),
        signal: this.abortController?.signal,
      });

      if (!response.ok) {
        throw new Error(`Sync failed with status: ${response.status}`);
      }

      return;
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Sync aborted');
      }
      throw error;
    }
  }

  // 计算重试延迟（指数退避）
  private calculateRetryDelay(retryCount: number, config: any): number {
    const { initialDelay, maxDelay } = config.retry;
    const delay = initialDelay * Math.pow(2, retryCount);
    return Math.min(delay, maxDelay);
  }

  // 处理网络状态变化
  private handleNetworkChange(): void {
    const wasOnline = this.networkOnline;
    this.networkOnline = this.isOnline();

    // 触发连接变化事件
    syncEventManager.dispatchEvent({
      type: SyncEventType.CONNECTIVITY_CHANGE,
      payload: { online: this.networkOnline },
      timestamp: Date.now(),
    });

    // 如果网络恢复，尝试同步
    if (!wasOnline && this.networkOnline) {
      this.startSync();
    }
  }
}

// 导出单例
export const syncWorker = new SyncWorker(); 