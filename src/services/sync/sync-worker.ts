import { getDataProviderConfig } from '@/config/data-provider-config';
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

  // 准备数据以便被拉取（pull模式）
  public async startSync(): Promise<void> {
    if (this.isSyncing) return;

    const config = await getDataProviderConfig();
    if (!config.enabled) return;
    if (!this.networkOnline) return;

    this.isSyncing = true;
    
    try {
      // 在pull模式下，我们不主动推送数据
      // 只需确保数据已准备好被拉取
      
      // 触发同步成功事件
      syncEventManager.dispatchEvent({
        type: SyncEventType.SYNC_SUCCESS,
        payload: { message: 'Data ready for pull' },
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error('Error preparing data for pull:', error);
      // 触发同步错误事件
      syncEventManager.dispatchEvent({
        type: SyncEventType.SYNC_ERROR,
        payload: { error },
        timestamp: Date.now(),
      });
    } finally {
      this.isSyncing = false;
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

  // 在pull模式下，此方法不再主动处理批量同步
  // 保留此方法签名以兼容现有代码，但实现已简化
  private async processBatch(batch: SyncItem[]): Promise<void> {
    console.log(`[Pull Mode] ${batch.length} items ready for pull`);
    // 在pull模式下，不主动处理批量同步
    // 数据将等待Web应用来拉取
  }

  // 在pull模式下，此方法不再主动同步单个项目
  // 保留此方法签名以兼容现有代码，但实现已简化
  private async syncItem(item: SyncItem): Promise<void> {
    // 在pull模式下，不主动同步单个项目
    // 数据将等待Web应用来拉取
    console.log(`[Pull Mode] Item ${item.id} ready for pull`);
    return;
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