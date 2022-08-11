// noinspection JSUnusedGlobalSymbols

import {OutputOptions, ResolveIdHook, defineConfig} from 'rollup';
import esbuild, {minify} from 'rollup-plugin-esbuild';
import alias from '@rollup/plugin-alias';
import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import {createAliasEntries} from './private/createAliasEntries';
import {default as dts} from 'rollup-plugin-dts';
import {getParsedTsConfig} from './private/getParsedTsConfig';
import nodeResolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

const projectRootDir = path.resolve(__dirname);
const {paths} = getParsedTsConfig().options;

const common: OutputOptions = {
  banner: `// ${packageJson.name}@${packageJson.version} ${new Date().toISOString()}`,
};

const aliasPlugin = alias({
  customResolver: nodeResolve({extensions: ['.ts']}) as ResolveIdHook,
  entries: createAliasEntries(paths, projectRootDir),
});

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        ...common,
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [aliasPlugin, esbuild()],
  },
  {
    input: './src/index.ts',
    output: [
      {
        ...common,
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        ...common,
        file: packageJson.main.replace('.js', '.min.js'),
        format: 'cjs',
        plugins: [minify()],
        sourcemap: true,
      },
    ],
    plugins: [aliasPlugin, typescript(), babel({babelHelpers: 'bundled'}), commonjs()],
  },
  {
    input: './src/index.ts',
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './',
          paths: paths,
        },
      }),
    ],
    output: {
      banner: `// ${packageJson.name}@${packageJson.version} ${new Date().toISOString()}`,
      dir: 'dist',
      format: 'esm',
    },
  },
]);
