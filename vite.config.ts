import path from 'path';
import {configDefaults, defineConfig} from 'vitest/config';
import dts from 'vite-plugin-dts';

const config = defineConfig((env) => {
  return {
    plugins: [dts({entryRoot: 'src'})],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@Test': path.resolve(__dirname, './test'),
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
      rollupOptions: {
        external: [/^@myparcel\//],
      },
    },
    test: {
      coverage: {
        100: true,
        enabled: false,
        reporter: ['text', 'clover', 'html'],
        exclude: [...configDefaults.exclude],
        include: ['src/**/*.ts'],
      },
      setupFiles: ['./test/mockFetch.ts'],
    },
  };
});

export default config;
