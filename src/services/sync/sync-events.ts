// 同步事件类型
export enum SyncEventType {
  DATA_CHANGE = 'data-change',
  SYNC_SUCCESS = 'sync-success',
  SYNC_ERROR = 'sync-error',
  SYNC_QUEUE_UPDATED = 'sync-queue-updated',
  CONNECTIVITY_CHANGE = 'connectivity-change',
}

// 同步事件数据
export interface SyncEventData {
  type: SyncEventType;
  payload: any;
  timestamp: number;
}

// 同步事件管理
class SyncEventManager {
  private listeners: { [key in SyncEventType]?: ((data: any) => void)[] } = {};

  // 添加事件监听器
  public addEventListener(type: SyncEventType, callback: (data: any) => void) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.listeners[type]!.push(callback);
  }

  // 移除事件监听器
  public removeEventListener(type: SyncEventType, callback: (data: any) => void) {
    if (!this.listeners[type]) return;
    this.listeners[type] = this.listeners[type]!.filter(cb => cb !== callback);
  }

  // 触发事件
  public dispatchEvent(event: SyncEventData) {
    if (!this.listeners[event.type]) return;

    this.listeners[event.type]!.forEach(callback => {
      try {
        callback(event.payload);
      } catch (error) {
        console.error(`Error in sync event listener for ${event.type}:`, error);
      }
    });
  }
}

// 导出单例
export const syncEventManager = new SyncEventManager(); 