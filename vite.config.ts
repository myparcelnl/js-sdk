import {defineConfig} from 'vitest/config';
import dts from 'vite-plugin-dts';

const config = defineConfig((env) => {
  return {
    plugins: [dts({entryRoot: 'src'})],
    resolve: {
      alias: {
        '@': '/src',
        '@Test': '/test',
      },
    },
    build: {
      outDir: 'lib',
      sourcemap: env.mode === 'development',
      minify: env.mode !== 'development',
      lib: {
        fileName: 'index',
        entry: 'src/index.ts',
        name: 'MyParcelSdk',
        formats: ['cjs', 'es'],
      },
    },
    test: {
      coverage: {
        100: true,
        enabled: false,
        reporter: ['text', 'clover'],
      },
      setupFiles: ['./test/mockFetch.ts', './test/mockAbortController.ts'],
    },
  };
});

export default config;
