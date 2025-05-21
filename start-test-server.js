/**
 * Page Assist 数据提供者API测试服务器
 * 此脚本启动一个简单的HTTP服务器来托管API测试页面
 * 
 * 使用方法:
 * 1. 确保已安装Node.js
 * 2. 运行命令: node start-test-server.js
 * 3. 在浏览器中访问: http://localhost:8080/test-data-provider-api.html
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// 配置
const PORT = 8090;
const HOST = '127.0.0.1';

// MIME类型
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // 提取URL路径
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './test-data-provider-api.html';
  }
  
  // 获取文件扩展名
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // 读取文件
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 文件不存在，返回404
        fs.readFile('./404.html', (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content || '404 Not Found', 'utf-8');
        });
      } else {
        // 服务器错误，返回500
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // 成功读取文件，返回内容
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// 启动服务器
server.listen(PORT, HOST, () => {
  console.log(`服务器运行在 http://${HOST}:${PORT}/`);
  console.log(`测试页面地址: http://${HOST}:${PORT}/test-data-provider-api.html`);
  console.log('按 Ctrl+C 停止服务器');
}); 