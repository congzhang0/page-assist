import { getSyncConfig, updateSyncConfig } from '@/config/sync-config';
import { SyncEventType, syncEventManager } from './sync-events';
import { syncQueue } from './sync-queue';
import { syncWorker } from './sync-worker';

// 支持的实体类型
export type EntityType = 'document' | 'model' | 'knowledge' | 'vector' | 'message' | 'page';

// 数据变更追踪接口
export interface DataChangeEvent {
  entityType: EntityType;
  operation: 'create' | 'update' | 'delete';
  data: any;
}

// 同步服务状态
export enum SyncServiceStatus {
  DISABLED = 'disabled',
  IDLE = 'idle',
  SYNCING = 'syncing',
  ERROR = 'error',
}

// 同步服务，主要导出模块
export class SyncService {
  private status: SyncServiceStatus = SyncServiceStatus.IDLE;
  private statusListeners: ((status: SyncServiceStatus) => void)[] = [];
  private initialized = false;
  private syncInterval: number | null = null;

  constructor() {
    this.initialize();
  }

  // 初始化同步服务
  private async initialize() {
    if (this.initialized) return;

    // 获取配置
    const config = await getSyncConfig();

    // 设置状态
    this.status = config.enabled ? SyncServiceStatus.IDLE : SyncServiceStatus.DISABLED;

    // 监听同步事件
    syncEventManager.addEventListener(SyncEventType.SYNC_SUCCESS, this.handleSyncSuccess.bind(this));
    syncEventManager.addEventListener(SyncEventType.SYNC_ERROR, this.handleSyncError.bind(this));
    syncEventManager.addEventListener(SyncEventType.CONNECTIVITY_CHANGE, this.handleConnectivityChange.bind(this));

    // 设置定期同步
    this.setupPeriodicSync();

    this.initialized = true;
  }

  // 设置定期同步
  private setupPeriodicSync() {
    // 清除之前的定时器
    if (this.syncInterval !== null) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }

    // 设置新的定时器（每15分钟检查一次）
    // 使用数字类型转换确保与不同环境兼容
    this.syncInterval = Number(setInterval(() => {
      this.synchronize();
    }, 15 * 60 * 1000));
  }

  // 跟踪数据变更
  public async trackChange(change: DataChangeEvent): Promise<void> {
    await syncQueue.addItem({
      operation: change.operation,
      entityType: change.entityType,
      data: change.data,
    });

    // 触发数据变更事件
    syncEventManager.dispatchEvent({
      type: SyncEventType.DATA_CHANGE,
      payload: change,
      timestamp: Date.now(),
    });

    // 尝试同步
    this.synchronize();
  }

  // 执行同步
  public async synchronize(): Promise<void> {
    try {
      const config = await getSyncConfig();
      if (!config.enabled) return;

      this.setStatus(SyncServiceStatus.SYNCING);
      syncWorker.startSync();
    } catch (error) {
      console.error('Error starting synchronization:', error);
      this.setStatus(SyncServiceStatus.ERROR);
    }
  }

  // 停止同步
  public stopSync(): void {
    try {
      syncWorker.stopSync();
      this.setStatus(SyncServiceStatus.IDLE);
    } catch (error) {
      console.error('Error stopping synchronization:', error);
    }
  }

  // 设置同步启用状态
  public async setEnabled(enabled: boolean): Promise<void> {
    try {
      await updateSyncConfig({ enabled });

      this.setStatus(enabled ? SyncServiceStatus.IDLE : SyncServiceStatus.DISABLED);

      if (enabled) {
        this.synchronize();
      } else {
        this.stopSync();
      }
    } catch (error) {
      console.error('Error setting sync enabled state:', error);
    }
  }

  // 设置代理端点
  public async setProxyEndpoint(endpoint: string): Promise<void> {
    try {
      await updateSyncConfig({ proxyEndpoint: endpoint });
    } catch (error) {
      console.error('Error setting proxy endpoint:', error);
    }
  }

  // 获取同步状态
  public getStatus(): SyncServiceStatus {
    return this.status;
  }

  // 添加状态监听器
  public addStatusListener(listener: (status: SyncServiceStatus) => void): void {
    this.statusListeners.push(listener);
    // 立即通知当前状态
    listener(this.status);
  }

  // 移除状态监听器
  public removeStatusListener(listener: (status: SyncServiceStatus) => void): void {
    this.statusListeners = this.statusListeners.filter(l => l !== listener);
  }

  // 获取队列统计
  public async getQueueStats() {
    return syncQueue.getStats();
  }

  // 清理过期项目
  public async cleanExpiredItems(): Promise<number> {
    return syncQueue.cleanExpiredItems();
  }

  // 更新状态
  private setStatus(status: SyncServiceStatus): void {
    if (this.status === status) return;

    this.status = status;

    // 通知所有监听器
    this.statusListeners.forEach(listener => {
      try {
        listener(status);
      } catch (error) {
        console.error('Error in sync status listener:', error);
      }
    });
  }

  // 处理同步成功事件
  private handleSyncSuccess(): void {
    this.setStatus(SyncServiceStatus.IDLE);
  }

  // 处理同步错误事件
  private handleSyncError(): void {
    this.setStatus(SyncServiceStatus.ERROR);
  }

  // 处理连接状态变化事件
  private handleConnectivityChange(payload: { online: boolean }): void {
    if (!payload.online && this.status === SyncServiceStatus.SYNCING) {
      this.setStatus(SyncServiceStatus.IDLE);
    }
  }
}

// 导出单例
export const syncService = new SyncService();