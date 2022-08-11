import {defineConfig} from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    setupFiles: ['./test/fetch/setupFetchMock.ts', './test/setupMockAbortController.ts'],
    coverage: {
      reporter: process.env.CI ? ['clover'] : ['clover', 'html', 'text'],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Test': path.resolve(__dirname, 'test'),
    },
  },
});
