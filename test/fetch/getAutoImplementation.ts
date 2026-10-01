import path from 'path';
import fs from 'fs';
import {type MockedResponse} from '@Test/fetch/defineMockResponse';
import {doActualFetch} from './doActualFetch';
import {BASE_URL} from '@/model/client/AbstractClient';

export const DIR_EXAMPLES = path.resolve(__dirname, 'examples');

/**
 * Find an existing file in examples that matches the attempted request. If it
 * does not exist, throw, unless RECORD_EXAMPLES=1 allows a real API call.
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
    // Without this guard, a test that has no example sends a request to the production API.
    if (process.env.RECORD_EXAMPLES !== '1') {
      throw new Error(
        `No example in ${DIR_EXAMPLES} for ${init?.method ?? 'GET'} ${info.toString()}. Run with RECORD_EXAMPLES=1 to record one.`,
      );
    }

    return doActualFetch(info, init);
  }
};
