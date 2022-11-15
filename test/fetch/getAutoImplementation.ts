import {BASE_URL} from '@/model/client/AbstractClient';
import {MockedResponse} from '@Test/fetch/defineMockResponse';
import {doActualFetch} from './doActualFetch';
import fs from 'fs';
import path from 'path';

export const DIR_EXAMPLES = path.resolve(__dirname, 'examples');

/**
 * Find an existing file in examples that matches the attempted request. If it
 * does not exist, a real API call will be made.
 */
export const getAutoImplementation = async (info: string | Request, init?: RequestInit): Promise<MockedResponse> => {
  const files = fs.readdirSync(DIR_EXAMPLES);

  try {
    return await Promise.any(
      files.map(async (file) => {
        const imported = (await import(path.resolve(DIR_EXAMPLES, file))).default;
        const requestPath = info.toString().replace(BASE_URL, '');

        if (imported.match(requestPath, init)) {
          return imported.response();
        }

        throw new Error('No match');
      }),
    );
  } catch (e) {
    return doActualFetch(info, init);
  }
};
