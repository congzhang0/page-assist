// 导入 pdfjs-dist 3.x 版本
import * as pdfDist from "pdfjs-dist";
import * as pdfWorker from "pdfjs-dist/build/pdf.worker.js";

// 设置 worker
pdfDist.GlobalWorkerOptions.workerSrc = pdfWorker;

// 导出 pdfDist 模块
export { pdfDist };
