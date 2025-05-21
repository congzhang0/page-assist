import type { Page, QueryParams } from '@/types/data-provider'; // Assuming types are in data-provider
import logger from '@/utils/logger';

const DB_NAME = 'SavedPagesDB';

/**
 * A mock/stub implementation of the SavedPagesDB.
 * Replace this with your actual IndexedDB or other database logic.
 */
export class SavedPagesDB {
  constructor() {
    logger.info(`[${DB_NAME}] Initializing (STUB)`);
    // In a real implementation, you would open/initialize the database here.
  }

  async getPageById(id: string): Promise<Page | null> {
    logger.debug(`[${DB_NAME}] STUB: getPageById called with id:`, id);
    // Simulate DB call
    if (id === 'page_1') {
      return {
        id: 'page_1',
        title: 'Mocked Page 1',
        url: 'https://example.com/mock1',
        content: 'This is mocked content for page 1.',
        html: '<h1>Mocked Page 1</h1><p>Content</p>',
        createdAt: Date.now() - 86400000 * 2,
        updatedAt: Date.now() - 86400000,
        tags: ['mock', 'test'],
      } as Page;
    }
    return null;
  }

  async getAllPages(queryParams?: QueryParams): Promise<Page[]> {
    logger.debug(`[${DB_NAME}] STUB: getAllPages called with queryParams:`, queryParams);
    // Simulate DB call, returning a list of pages
    // This should implement filtering, pagination, sorting based on queryParams
    const mockPage1: Page = {
      id: 'page_1',
      title: 'Mocked Page 1',
      url: 'https://example.com/mock1',
      createdAt: Date.now() - 86400000 * 2, // 2 days ago
      updatedAt: Date.now() - 86400000,    // 1 day ago
      tags: ['mock', 'test'],
    };
    const mockPage2: Page = {
      id: 'page_2',
      title: 'Another Mocked Page',
      url: 'https://example.com/another',
      createdAt: Date.now() - 86400000 * 3, // 3 days ago
      updatedAt: Date.now() - 86400000 * 1, // 1 day ago (same as page_1 for testing sync)
      tags: ['mock', 'data'],
    };
    const mockPage3: Page = {
        id: 'page_3',
        title: 'Very Recent Page',
        url: 'https://example.com/recent',
        createdAt: Date.now() - 3600000, // 1 hour ago
        updatedAt: Date.now() - 3600000, // 1 hour ago (created === updated)
        tags: ['new'],
      };

    let pages = [mockPage1, mockPage2, mockPage3];

    if (queryParams?.search) {
        pages = pages.filter(p => 
            p.title?.toLowerCase().includes(queryParams.search!.toLowerCase()) ||
            p.content?.toLowerCase().includes(queryParams.search!.toLowerCase())
        );
    }
    
    // Basic pagination
    const page = queryParams?.page || 1;
    const pageSize = queryParams?.pageSize || 10;
    const startIndex = (page - 1) * pageSize;
    pages = pages.slice(startIndex, startIndex + pageSize);

    return pages;
  }

  async getPageCount(filter?: Record<string, any>): Promise<number> {
    logger.debug(`[${DB_NAME}] STUB: getPageCount called with filter:`, filter);
    // Simulate DB call for count
    // This should respect the filter
    return 3; // Assuming 3 total mock pages for now
  }

  /**
   * Stub for fetching pages for synchronization.
   * @param lastSyncTime Timestamp of the last sync.
   * @param maxRecords Maximum number of records to return.
   * @param metadataOnly If true, only return metadata (e.g., for 'changes' request).
   *                     This parameter is an assumption for this stub.
   * @returns A promise resolving to an array of pages.
   */
  async getPagesForSync(lastSyncTime: number, maxRecords: number, metadataOnly: boolean = false): Promise<Partial<Page>[]> {
    logger.debug(`[${DB_NAME}] STUB: getPagesForSync called`, {
      lastSyncTime,
      maxRecords,
      metadataOnly,
    });

    const allMockPages: Page[] = [
      {
        id: 'page_1',
        title: 'Mocked Page 1 (Updated)',
        url: 'https://example.com/mock1',
        content: 'Updated content.',
        createdAt: Date.now() - 86400000 * 2,
        updatedAt: Date.now() - 3600000 * 5, // Updated 5 hours ago
        tags: ['mock', 'updated'],
      },
      {
        id: 'page_2',
        title: 'Another Mocked Page (No Recent Update)',
        url: 'https://example.com/another',
        createdAt: Date.now() - 86400000 * 3,
        updatedAt: Date.now() - 86400000 * 2, // Updated 2 days ago (before typical lastSyncTime)
        tags: ['mock', 'data'],
      },
      {
        id: 'page_3',
        title: 'Newly Created Page',
        url: 'https://example.com/new',
        createdAt: Date.now() - 3600000 * 2, // Created 2 hours ago
        updatedAt: Date.now() - 3600000 * 2, // Created === Updated
        tags: ['new', 'sync_test'],
      },
      {
        id: 'page_4',
        title: 'Very Recent Update',
        url: 'https://example.com/recent_update',
        createdAt: Date.now() - 86400000 * 5, // Created 5 days ago
        updatedAt: Date.now() - 60000 * 30,   // Updated 30 minutes ago
        tags: ['recent'],
      },
    ];

    // Filter pages updated since lastSyncTime
    const pagesToSync = allMockPages
      .filter(page => page.updatedAt! > lastSyncTime) // Ensure updatedAt is always present
      .sort((a, b) => a.updatedAt! - b.updatedAt!) // Sort by update time, oldest first
      .slice(0, maxRecords);

    if (metadataOnly) {
      return pagesToSync.map(page => ({
        id: page.id,
        updatedAt: page.updatedAt,
        createdAt: page.createdAt, // To help determine if it's a create or update
        // Potentially other minimal fields like title or changeType if stored in DB
      }));
    }

    return pagesToSync;
  }
  
  // Example for a custom 'list_tags' if you were to implement it
  // async getAllUniqueTags(): Promise<string[]> {
  //   logger.debug(`[${DB_NAME}] STUB: getAllUniqueTags called`);
  //   const allPages = await this.getAllPages();
  //   const tagSet = new Set<string>();
  //   allPages.forEach(page => page.tags?.forEach(tag => tagSet.add(tag)));
  //   return Array.from(tagSet).sort();
  // }
}

logger.info(`[${DB_NAME}] STUB DB Loaded.`); 