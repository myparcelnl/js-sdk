import {NoInfer} from '@/types/global.types';
import {getAutoImplementation} from './getAutoImplementation';
import {originalFetch} from './originalFetch';

export const createFetchMock = <T>(implementation?: NoInfer<T>): jest.SpyInstance => {
  originalFetch.set(global.fetch);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return jest.spyOn(global, 'fetch').mockImplementation(async (info: RequestInfo, init?: RequestInit) => {
    return Promise.resolve(
      new Response(JSON.stringify(implementation ?? (await getAutoImplementation(info, init))) as BodyInit, init),
    );
  });
};
