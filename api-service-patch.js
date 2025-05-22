/**
 * Page Assist 数据提供者API修复补丁
 * 添加对 'tags' 请求类型的支持
 * 
 * 使用方法:
 * 1. 在扩展的背景页控制台中运行此脚本
 * 2. 补丁会动态添加对 'tags' 请求类型的支持
 */

// 获取API处理函数
function findApiHandler() {
  // 优先检查全局函数
  if (typeof handleDataProviderRequest === 'function') {
    return { handler: handleDataProviderRequest, source: 'global' };
  }
  
  // 检查DataProviderAPI对象
  if (typeof DataProviderAPI === 'object' && typeof DataProviderAPI.handleDataProviderRequest === 'function') {
    return { handler: DataProviderAPI.handleDataProviderRequest, source: 'DataProviderAPI', module: DataProviderAPI };
  }
  
  // 遍历所有模块找到处理函数
  for (const key in self) {
    const obj = self[key];
    if (typeof obj === 'object' && obj !== null && typeof obj.handleDataProviderRequest === 'function') {
      console.log(`在模块 ${key} 中找到API处理函数`);
      return { handler: obj.handleDataProviderRequest, source: key, module: obj };
    }
  }
  
  console.error('无法找到API处理函数');
  return null;
}

// 查找SavedPagesDB类或者修改现有的getAllTags函数
function patchGetAllTags() {
  // 如果已有SavedPagesDB类的实例
  if (typeof SavedPagesDB === 'function') {
    console.log('找到SavedPagesDB类，准备创建实例');
    const originalGetAllTags = SavedPagesDB.prototype.getAllTags;
    
    // 如果没有此方法，创建一个
    if (typeof originalGetAllTags !== 'function') {
      console.log('SavedPagesDB中未找到getAllTags方法，添加一个');
      
      SavedPagesDB.prototype.getAllTags = async function() {
        try {
          const pages = await this.getAllPages();
          const tagSet = new Set();
          
          pages.forEach(page => {
            if (Array.isArray(page.tags)) {
              page.tags.forEach(tag => tag && tagSet.add(tag));
            }
          });
          
          return Array.from(tagSet);
        } catch (error) {
          console.error('获取所有标签失败:', error);
          throw error;
        }
      };
      
      console.log('成功添加getAllTags方法到SavedPagesDB');
    } else {
      console.log('SavedPagesDB已有getAllTags方法，无需修改');
    }
    
    return true;
  }
  
  return false;
}

// 修补handlePageRequest函数以支持'tags'请求类型
function patchHandlePageRequest() {
  // 获取API处理函数
  const apiHandlerInfo = findApiHandler();
  if (!apiHandlerInfo) {
    console.error('无法应用补丁：未找到API处理函数');
    return false;
  }
  
  console.log(`找到API处理函数，来源: ${apiHandlerInfo.source}`);
  
  // 尝试找到处理函数的源模块
  const module = apiHandlerInfo.module;
  
  // 尝试找到handlePageRequest函数
  let handlePageRequestFound = false;
  let originalHandlePageRequest = null;
  
  if (module) {
    // 在module中搜索handlePageRequest
    for (const key in module) {
      if (typeof module[key] === 'function' && 
          key.includes('handlePageRequest') || 
          (typeof module[key].toString === 'function' && 
           module[key].toString().includes('handlePageRequest'))) {
        originalHandlePageRequest = module[key];
        handlePageRequestFound = true;
        console.log(`在模块${apiHandlerInfo.source}中找到handlePageRequest函数`);
        break;
      }
    }
  }
  
  // 无法找到原始函数，创建一个新的处理tags的函数
  if (!handlePageRequestFound) {
    console.log('未找到原始handlePageRequest函数，创建新的tags请求处理器');
    
    // 创建一个全局的处理函数
    window.handleTagsRequest = async function(request) {
      if (request.type !== 'tags' || request.entityType !== 'page') {
        return {
          success: false,
          error: {
            code: 'invalid_request',
            message: '仅支持page实体的tags请求'
          },
          meta: { serverTime: Date.now() }
        };
      }
      
      try {
        // 尝试从patchGetAllTags中添加的方法获取标签
        if (typeof SavedPagesDB === 'function') {
          const db = new SavedPagesDB();
          if (typeof db.getAllTags === 'function') {
            const tags = await db.getAllTags();
            return {
              success: true,
              data: tags,
              meta: { serverTime: Date.now() }
            };
          }
        }
        
        // 如果上面的方法不可用，使用我们的变通方法
        const allPagesRequest = {
          type: 'list',
          entityType: 'page',
          query: { pageSize: 100 },
          accessToken: request.accessToken,
          clientId: request.clientId
        };
        
        const response = await apiHandlerInfo.handler(allPagesRequest, { id: chrome.runtime.id });
        
        if (!response.success) {
          throw new Error(`获取页面列表失败: ${response.error?.message || '未知错误'}`);
        }
        
        // 从页面中提取所有标签并去重
        const tagSet = new Set();
        response.data.forEach(page => {
          if (Array.isArray(page.tags)) {
            page.tags.forEach(tag => tag && tagSet.add(tag));
          }
        });
        
        const tags = Array.from(tagSet);
        
        return {
          success: true,
          data: tags,
          meta: { serverTime: Date.now() }
        };
      } catch (error) {
        console.error('处理tags请求失败:', error);
        return {
          success: false,
          error: {
            code: 'internal_error',
            message: `获取标签失败: ${error.message || '未知错误'}`
          },
          meta: { serverTime: Date.now() }
        };
      }
    };
    
    // 修补handleDataProviderRequest函数以支持tags请求
    const originalHandler = apiHandlerInfo.handler;
    
    // 创建新的处理函数
    const patchedHandler = async function(request, sender) {
      // 特殊处理tags请求
      if (request.type === 'tags' && request.entityType === 'page') {
        return window.handleTagsRequest(request);
      }
      
      // 其他请求使用原始处理函数
      return originalHandler(request, sender);
    };
    
    // 替换原始处理函数
    if (apiHandlerInfo.source === 'global') {
      window.handleDataProviderRequest = patchedHandler;
    } else if (apiHandlerInfo.module) {
      apiHandlerInfo.module.handleDataProviderRequest = patchedHandler;
    }
    
    console.log('成功打补丁: 已添加对tags请求类型的支持');
    return true;
  }
  
  console.log('补丁应用完成');
  return true;
}

// 应用补丁
function applyPatch() {
  console.log('开始应用API补丁...');
  
  // 修补getAllTags函数
  const allTagsPatched = patchGetAllTags();
  console.log('getAllTags补丁应用' + (allTagsPatched ? '成功' : '失败'));
  
  // 修补handlePageRequest函数
  const requestHandlerPatched = patchHandlePageRequest();
  console.log('请求处理函数补丁应用' + (requestHandlerPatched ? '成功' : '失败'));
  
  if (allTagsPatched || requestHandlerPatched) {
    console.log('✅ 补丁应用成功: 现在可以使用tags请求类型');
    
    // 测试补丁
    testPatch();
  } else {
    console.error('❌ 补丁应用失败: 未找到需要修改的函数');
  }
}

// 测试补丁是否工作
async function testPatch() {
  console.log('测试tags请求...');
  
  const apiHandlerInfo = findApiHandler();
  if (!apiHandlerInfo) {
    console.error('无法测试：未找到API处理函数');
    return;
  }
  
  const request = {
    type: 'tags',
    entityType: 'page',
    accessToken: 'cmSL9iyrPfHAYpQx6qCdvtbBwKvBCL1m',
    clientId: 'patch_test_' + Math.random().toString(36).substring(2, 15)
  };
  
  try {
    const response = await apiHandlerInfo.handler(request, { id: chrome.runtime.id });
    console.log('补丁测试结果:', response);
    
    if (response.success) {
      console.log(`✅ 补丁工作正常! 获取到 ${response.data.length} 个标签`);
    } else {
      console.error('❌ 补丁测试失败:', response.error);
    }
  } catch (error) {
    console.error('❌ 补丁测试出错:', error);
  }
}

// 自动应用补丁
applyPatch();

// 导出到全局作用域
window.applyDataProviderApiPatch = applyPatch;
window.testTagsApiPatch = testPatch;

console.log(`
===== Page Assist API 补丁工具 =====

此脚本添加了对'tags'请求类型的支持。
如果需要重新应用补丁，请调用:
  
  applyDataProviderApiPatch()
  
要测试补丁是否工作，请调用:
  
  testTagsApiPatch()
`); 