import { syncService } from '@/services/sync/sync-service';

// 为数据库操作添加同步钩子
export const syncHooks = {
  // 文档操作钩子
  document: {
    // 创建后钩子
    afterCreate: (document: any) => {
      syncService.trackChange({
        entityType: 'document',
        operation: 'create',
        data: document,
      });
    },

    // 更新后钩子
    afterUpdate: (document: any) => {
      syncService.trackChange({
        entityType: 'document',
        operation: 'update',
        data: document,
      });
    },

    // 删除后钩子
    afterDelete: (id: string) => {
      syncService.trackChange({
        entityType: 'document',
        operation: 'delete',
        data: { id },
      });
    },
  },

  // 模型操作钩子
  model: {
    afterCreate: (model: any) => {
      syncService.trackChange({
        entityType: 'model',
        operation: 'create',
        data: model,
      });
    },

    afterUpdate: (model: any) => {
      syncService.trackChange({
        entityType: 'model',
        operation: 'update',
        data: model,
      });
    },

    afterDelete: (id: string) => {
      syncService.trackChange({
        entityType: 'model',
        operation: 'delete',
        data: { id },
      });
    },
  },

  // 知识库操作钩子
  knowledge: {
    afterCreate: (knowledge: any) => {
      syncService.trackChange({
        entityType: 'knowledge',
        operation: 'create',
        data: knowledge,
      });
    },

    afterUpdate: (knowledge: any) => {
      syncService.trackChange({
        entityType: 'knowledge',
        operation: 'update',
        data: knowledge,
      });
    },

    afterDelete: (id: string) => {
      syncService.trackChange({
        entityType: 'knowledge',
        operation: 'delete',
        data: { id },
      });
    },
  },

  // 向量操作钩子
  vector: {
    afterCreate: (vector: any) => {
      syncService.trackChange({
        entityType: 'vector',
        operation: 'create',
        data: vector,
      });
    },

    afterUpdate: (vector: any) => {
      syncService.trackChange({
        entityType: 'vector',
        operation: 'update',
        data: vector,
      });
    },

    afterDelete: (id: string) => {
      syncService.trackChange({
        entityType: 'vector',
        operation: 'delete',
        data: { id },
      });
    },
  },

  // 消息操作钩子
  message: {
    afterCreate: (message: any) => {
      syncService.trackChange({
        entityType: 'message',
        operation: 'create',
        data: message,
      });
    },

    afterUpdate: (message: any) => {
      syncService.trackChange({
        entityType: 'message',
        operation: 'update',
        data: message,
      });
    },

    afterDelete: (id: string) => {
      syncService.trackChange({
        entityType: 'message',
        operation: 'delete',
        data: { id },
      });
    },
  },

  // 页面操作钩子
  page: {
    afterCreate: (page: any) => {
      syncService.trackChange({
        entityType: 'page',
        operation: 'create',
        data: page,
      });
    },

    afterUpdate: (page: any) => {
      syncService.trackChange({
        entityType: 'page',
        operation: 'update',
        data: page,
      });
    },

    afterDelete: (id: string) => {
      syncService.trackChange({
        entityType: 'page',
        operation: 'delete',
        data: { id },
      });
    },
  },
};