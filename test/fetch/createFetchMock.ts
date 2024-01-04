import {type FetchMock} from 'vitest-fetch-mock';
import {type MockedResponse} from '@Test/fetch/defineMockResponse';
import {getAutoImplementation} from './getAutoImplementation';

export const createFetchMock = <T>(
  implementation?: MockedResponse<T> | (() => Promise<MockedResponse<T>>),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Record<string, unknown>,
): FetchMock => {
  return fetchMock.mockImplementation(async (info, init) => {
    let resolvedImplementation;

    if (typeof implementation === 'function') {
      resolvedImplementation = await implementation();
    } else {
      resolvedImplementation = implementation;
    }

    if (!implementation && info) {
      resolvedImplementation = await getAutoImplementation(info, init);
    }

    const {body, ...responseInit} = resolvedImplementation ?? {};
    return Promise.resolve(new Response(body ? JSON.stringify(body) : undefined, responseInit));
  });
};
