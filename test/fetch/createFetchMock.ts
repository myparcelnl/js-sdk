import {SpyInstance, vi} from 'vitest';
import {MockedResponse} from '@Test/fetch/defineMockResponse';
import {getAutoImplementation} from './getAutoImplementation';
import {originalFetch} from './originalFetch';

export const createFetchMock = <T>(implementation?: MockedResponse<T>): SpyInstance => {
  originalFetch.set(global.fetch);

  return vi.spyOn(global, 'fetch').mockImplementation(async (info: RequestInfo, init?: RequestInit) => {
    let resolvedImplementation = implementation;

    if (!implementation) {
      resolvedImplementation = await getAutoImplementation(info, init);
    }

    const {body, ...responseInit} = resolvedImplementation ?? {};
    return Promise.resolve(new Response(body ? JSON.stringify(body) : undefined, responseInit));
  });
};
