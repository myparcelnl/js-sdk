/* eslint-disable max-nested-callbacks */
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {TestGetInlineContentEndpoint} from '@Test/endpoints/TestGetInlineContentEndpoint';
import {TestGet200Endpoint} from '@Test/endpoints/TestGet200Endpoint';
import {createMyParcelSdk} from './createMyParcelSdk';
import {FetchClient} from '@/model/client/FetchClient';

describe('createMyParcelSdk', () => {
  const fetchMock = createFetchMock();

  const fetchMockWithTimeout = vi.fn().mockImplementation((_, config: RequestInit) => {
    console.log('fetchMockWithTimeout called with: ', _);
    // Simulate aborting after a delay
    const signal = config.signal as AbortController['signal'];

    return new Promise((_, reject) => {
      if (signal?.aborted) {
        console.log('aborted');
        return reject(new DOMException('The operation was aborted.', 'AbortError'));
      }

      signal?.addEventListener('abort', () => {
        console.log('abort event triggered');
        reject(new DOMException('The operation was aborted.', 'AbortError'));
      });

      console.log('not aborted, simulating fetch');
    });
  });

  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('can not be instantiated without endpoints', () => {
    expect(() => createMyParcelSdk(new FetchClient(), [])).toThrow('At least one endpoint must be passed.');
  });

  it('should always return a client within the response', () => {
    expect.assertions(2);
    const getEndpoint = new TestGet200Endpoint();

    const sdk = createMyParcelSdk(new FetchClient(), [getEndpoint]);

    expect(sdk.client).toBeInstanceOf(FetchClient);
    expect(sdk.getEndpoint).toStrictEqual(expect.any(Function));
  });

  it('adds method for each passed endpoint', () => {
    expect.assertions(3);
    const getEndpoint = new TestGet200Endpoint();
    const getInline = new TestGetInlineContentEndpoint();

    const sdk = createMyParcelSdk(new FetchClient(), [getEndpoint, getInline]);

    expect(Object.keys(sdk)).toStrictEqual([getEndpoint.name, getInline.name, 'client']);

    expect(sdk.getEndpoint).toStrictEqual(expect.any(Function));
    expect(sdk.getInline).toStrictEqual(expect.any(Function));
  });

  it('can call each endpoint', async () => {
    expect.assertions(2);

    const getEndpoint = new TestGet200Endpoint();
    const getInline = new TestGetInlineContentEndpoint();

    const sdk = createMyParcelSdk(new FetchClient(), [getEndpoint, getInline]);

    await expect(sdk.getEndpoint()).resolves.toStrictEqual([]);
    await expect(sdk.getInline()).resolves.toStrictEqual('"Test"');
  });
});
