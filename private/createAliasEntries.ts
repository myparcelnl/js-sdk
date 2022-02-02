import {Alias} from '@rollup/plugin-alias';
import path from 'path';
import ts from 'typescript';

export const createAliasEntries = (paths: ts.MapLike<string[]> | undefined, rootDir: string): Alias[] =>
  Object.entries({...paths}).map(([alias, value]) => ({
    find: new RegExp(alias.replace('/*', '')),
    replacement: path.resolve(rootDir, value[0].replace('/*', '')),
  }));
