import {OutputOptions, ResolveIdHook, defineConfig} from 'rollup';
import alias from '@rollup/plugin-alias';
import {createAliasEntries} from './private/createAliasEntries';
import {default as dts} from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import {getParsedTsConfig} from './private/getParsedTsConfig';
import nodeResolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json';
import path from 'path';

const projectRootDir = path.resolve(__dirname);
const {paths} = getParsedTsConfig().options;

const common: OutputOptions = {
  banner: `// ${packageJson.name}@${packageJson.version} ${new Date().toISOString()}`,
};

export default defineConfig([
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
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      alias({
        customResolver: nodeResolve({extensions: ['.tsx', '.ts']}) as ResolveIdHook,
        entries: createAliasEntries(paths, projectRootDir),
      }),
      esbuild(),
    ],
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
      dir: `dist`,
      format: 'esm',
    },
  },
]);
