// src/types/data-provider.ts

/**
 * Represents a generic API request from an external application.
 */
export interface ApiRequest {
  type: 'get' | 'list' | 'sync' | 'count' | 'changes' | string; // Allow custom types
  entityType: EntityType | string; // Allow custom entity types
  id?: string; // For 'get' requests
  query?: QueryParams;
  sync?: SyncParams;
  accessToken: string;
  clientId?: string;
  [key: string]: any; // Allow other custom parameters
}

/**
 * Represents a generic API response to an external application.
 */
export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: ApiError;
  meta?: ApiResponseMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface ApiResponseMeta {
  serverTime: number;
  clientId?: string;
  total?: number;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  syncTime?: number;
  hasMore?: boolean;
  [key: string]: any; // Allow other custom metadata
}

/**
 * Supported entity types by the Data Provider API.
 */
export type EntityType =
  | 'page'
  | 'document'
  | 'model'
  | 'knowledge'
  | 'vector'
  | 'message';

/**
 * Query parameters for 'list' requests.
 */
export interface QueryParams {
  filter?: Record<string, any>;
  page?: number;
  pageSize?: number;
  sort?: SortParams;
  search?: string;
  fields?: string[];
  [key: string]: any;
}

export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
}

/**
 * Parameters for 'sync' and 'changes' requests.
 */
export interface SyncParams {
  lastSyncTime?: number;
  fullSync?: boolean;
  maxRecords?: number;
  [key: string]: any;
}

/**
 * Represents a change to an entity for synchronization.
 */
export interface Change {
  id: string;
  entityType: EntityType | string;
  changeType: 'create' | 'update' | 'delete';
  timestamp: number;
  sequenceNumber?: number; // Optional, for ordering changes
  data?: EntityData; // Full data for 'create', partial for 'update'
  deletedFields?: string[]; // For granular updates
}

/**
 * Represents the actual data of an entity.
 * This is a placeholder and should be replaced by specific entity types.
 */
export type EntityData = Page | Document | Model | Knowledge | Vector | Message | Record<string, any>;

// --- Specific Entity Type Definitions (Placeholders) ---
// These should be defined based on your actual data models.

export interface BaseEntity {
  id: string;
  createdAt: number;
  updatedAt: number;
  [key: string]: any;
}

export interface Page extends BaseEntity {
  title?: string;
  url?: string;
  content?: string; // Full text content
  html?: string;    // Raw HTML content
  textContent?: string; // text content extracted from html
  summary?: string;
  tags?: string[];
  screenshot?: string; // URL or base64 data URI
  favicon?: string;    // URL or base64 data URI
  metadata?: Record<string, any>; // Other extracted metadata
  lastAccessed?: number;
  readStatus?: 'read' | 'unread';
  archived?: boolean;
}

export interface Document extends BaseEntity {
  title?: string;
  filePath?: string;
  content?: string;
  tags?: string[];
  source?: string;
  metadata?: Record<string, any>;
}

export interface Model extends BaseEntity {
  name: string;
  provider: string;
  apiKeyStatus?: 'valid' | 'invalid' | 'unknown';
  config?: Record<string, any>;
  type?: 'chat' | 'completion' | 'embedding';
  isDefault?: boolean;
}

export interface Knowledge extends BaseEntity {
  name: string;
  description?: string;
  sourceType: 'file' | 'url' | 'text';
  sourcePath?: string;
  status?: 'pending' | 'processing' | 'completed' | 'failed';
  vectorCount?: number;
}

export interface Vector extends BaseEntity {
  knowledgeId: string;
  contentChunk: string;
  embedding: number[]; // Actual vector embedding
  metadata?: Record<string, any>;
}

export interface Message extends BaseEntity {
  chatId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  modelUsed?: string;
  timestamp: number; // Overrides BaseEntity.createdAt for messages
  feedback?: 'good' | 'bad' | null;
  metadata?: Record<string, any>;
} 