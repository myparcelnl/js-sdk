import {MockedResponse} from '@Test/fetch/defineMockResponse';
import {getAutoImplementation} from './getAutoImplementation';
import {originalFetch} from './originalFetch';

export const createFetchMock = <T>(implementation?: MockedResponse<T>): jest.SpyInstance => {
  originalFetch.set(global.fetch);

  return jest.spyOn(global, 'fetch').mockImplementation(async (info: RequestInfo, init?: RequestInit) => {
    let resolvedImplementation = implementation;

    if (!implementation) {
      resolvedImplementation = await getAutoImplementation(info, init);
    }

    const {body, ...responseInit} = resolvedImplementation ?? {};

    return Promise.resolve(new Response(JSON.stringify(body) as BodyInit, responseInit));
  });
};
