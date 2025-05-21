/**
 * 测试环境设置
 */
import { mockChromeStorage, mockChromeRuntime } from './data-provider/mock-data';

// 模拟Chrome API
global.chrome = {
  storage: mockChromeStorage,
  runtime: {
    ...mockChromeRuntime,
    sendMessage: jest.fn(),
    onMessage: {
      addListener: jest.fn()
    },
    onMessageExternal: {
      addListener: jest.fn()
    }
  }
} as any;

// 模拟console.log等函数，避免测试输出过多
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};
