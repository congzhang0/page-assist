module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // 增加测试超时时间
  testTimeout: 10000,
  // 检测内存泄漏
  detectOpenHandles: true,
  // 关闭并行测试以避免竞争条件
  maxWorkers: 1,
  // 详细输出
  verbose: true
};
