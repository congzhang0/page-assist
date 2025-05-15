// 导入 pdfjs-dist 3.x 版本
import * as PDFJS from "pdfjs-dist";

// 设置 worker
// 使用动态导入避免构建问题
const pdfjsWorker = new URL(
  "pdfjs-dist/build/pdf.worker.js",
  import.meta.url
).toString();

PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// 导出 PDFJS 模块
export const pdfDist = PDFJS;
