import path from 'path';
import fs from 'fs';
import {type MockedResponse} from '@Test/fetch/defineMockResponse';
import {BASE_URL} from '@/model/client/AbstractClient';

export const DIR_EXAMPLES = path.resolve(__dirname, 'examples');

const NO_MATCH = new Error('No match');

/**
 * Find an existing file in examples that matches the attempted request. Throws
 * when none matches, or rethrows the error of a fixture that failed to load or respond.
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

        throw NO_MATCH;
      }),
    );
  } catch (e) {
    const errors: unknown[] = e instanceof AggregateError ? e.errors : [e];
    const failure = errors.find((error) => error !== NO_MATCH);

    if (failure) {
      throw failure;
    }

    throw new Error(`No example in ${DIR_EXAMPLES} for ${init?.method ?? 'GET'} ${info.toString()}.`);
  }
};
