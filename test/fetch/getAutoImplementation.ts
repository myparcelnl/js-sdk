import {BASE_URL} from '@/model/client/AbstractClient';
import {ResponseWrapper} from '@/types/request.types';
import {doActualFetch} from './doActualFetch';
import fs from 'fs';
import path from 'path';

export const DIR_EXAMPLES = path.resolve(__dirname, 'examples');

/**
 * Find an existing file in examples that matches the attempted request. If it
 * does not exist, a real API call will be made.
 */
export const getAutoImplementation = async (
  info: RequestInfo,
  init?: RequestInit,
): Promise<ResponseWrapper | Record<string, unknown>> => {
  const files = fs.readdirSync(DIR_EXAMPLES);

  const [response] = (
    await Promise.all(
      files.map(async (file) => {
        const imported = (await import(path.resolve(DIR_EXAMPLES, file))).default;

        if (imported.match(info.toString().replace(BASE_URL, ''), init)) {
          return imported.response();
        }
      }),
    )
  ).filter(Boolean);

  return response ?? doActualFetch(info, init);
};
