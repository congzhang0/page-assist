// 存储查看器脚本
document.addEventListener('DOMContentLoaded', async () => {
  const storageDataElement = document.getElementById('storage-data');
  const storageChangesElement = document.getElementById('storage-changes');
  const filterInput = document.getElementById('filter');
  const refreshButton = document.getElementById('refresh');
  const clearButton = document.getElementById('clear');
  
  // 获取并显示存储数据
  async function displayStorageData() {
    const filter = filterInput.value.trim();
    storageDataElement.textContent = '加载中...';
    
    try {
      const data = await new Promise((resolve) => {
        chrome.storage.local.get(null, (items) => {
          resolve(items);
        });
      });
      
      // 应用过滤器
      let filteredData = data;
      if (filter) {
        filteredData = {};
        Object.keys(data).forEach(key => {
          if (key.toLowerCase().includes(filter.toLowerCase())) {
            filteredData[key] = data[key];
          }
        });
      }
      
      // 格式化并显示数据
      storageDataElement.textContent = JSON.stringify(filteredData, null, 2);
    } catch (error) {
      storageDataElement.textContent = `错误: ${error.message}`;
    }
  }
  
  // 监听存储变化
  function setupStorageChangeListener() {
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === 'local') {
        const timestamp = new Date().toLocaleTimeString();
        const changesHtml = Object.keys(changes).map(key => {
          const change = changes[key];
          return `
            <div class="log-info log-entry">
              <strong>${timestamp} - 键: ${key}</strong><br>
              ${change.oldValue !== undefined ? `旧值: ${JSON.stringify(change.oldValue)}` : '无旧值'}<br>
              ${change.newValue !== undefined ? `新值: ${JSON.stringify(change.newValue)}` : '无新值'}
            </div>
          `;
        }).join('');
        
        storageChangesElement.innerHTML = changesHtml + storageChangesElement.innerHTML;
        
        // 限制日志条目数量
        const entries = storageChangesElement.querySelectorAll('.log-entry');
        if (entries.length > 50) {
          for (let i = 50; i < entries.length; i++) {
            entries[i].remove();
          }
        }
        
        // 刷新存储数据显示
        displayStorageData();
      }
    });
  }
  
  // 设置事件监听器
  refreshButton.addEventListener('click', displayStorageData);
  filterInput.addEventListener('input', displayStorageData);
  clearButton.addEventListener('click', () => {
    storageChangesElement.innerHTML = '<div class="log-info log-entry">等待存储变化...</div>';
  });
  
  // 初始化
  await displayStorageData();
  setupStorageChangeListener();
});
