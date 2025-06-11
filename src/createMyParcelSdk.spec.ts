/* eslint-disable max-nested-callbacks */
import {beforeEach, describe, expect, it} from 'vitest';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {TestGetInlineContentEndpoint} from '@Test/endpoints/TestGetInlineContentEndpoint';
import {TestGet200Endpoint} from '@Test/endpoints/TestGet200Endpoint';
import {createMyParcelSdk} from './createMyParcelSdk';
import {FetchClient} from '@/model/client/FetchClient';

describe('createMyParcelSdk', () => {
  const fetchMock = createFetchMock();
  
  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('can not be instantiated without endpoints', () => {
    expect(() => createMyParcelSdk(new FetchClient(), [])).toThrow('At least one endpoint must be passed.');
  });

  it('should always return a client within the response', () => {
    const getEndpoint = new TestGet200Endpoint();

    const sdk = createMyParcelSdk(new FetchClient(), [getEndpoint]);

    expect(sdk.client).toBeInstanceOf(FetchClient);
    expect(sdk.getEndpoint).toStrictEqual(expect.any(Function));
  });

  it('adds method for each passed endpoint', () => {
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

  describe('timeout', () => {
    it('should handle timeout', async () => {
      fetchMock.mockImplementation((_, config) => {
        // Simulate aborting after a delay
        const signal = config.signal as AbortSignal;

        return new Promise((_, reject) => {
          signal?.addEventListener('abort', () => {
            reject(new DOMException('The operation was aborted.', 'AbortError'));
          });

          setTimeout(() => {
            if (signal.aborted) {
              return;
            }

            reject();
          }, 20);
        });
      });

      expect.assertions(2);

      const getEndpoint = new TestGet200Endpoint();

      const sdk = createMyParcelSdk(
        new FetchClient({
          headers: {
            Authorization: 'bearer apiKey',
          },
          options: {
            timeout: 10,
          },
        }),
        [getEndpoint],
      );

      await expect(sdk.getEndpoint()).rejects.toThrowError('The operation was aborted.');

      expect(fetchMock).toHaveBeenCalledOnce();
    });

    it('should handle timeout with a request interceptor given', async () => {
      fetchMock.mockImplementation((url, config) => {
        // Simulate aborting after a delay
        const signal = config.signal as AbortSignal;

        return new Promise((_, reject) => {
          signal?.addEventListener('abort', () => {
            reject(new DOMException('The operation was aborted.', 'AbortError'));
          });

          setTimeout(() => {
            if (signal.aborted) {
              return;
            }

            reject();
          }, 20);
        });
      });

      expect.assertions(2);

      const getEndpoint = new TestGet200Endpoint();

      const sdk = createMyParcelSdk(
        new FetchClient({
          headers: {
            Authorization: 'bearer apiKey',
          },
          options: {
            timeout: 10,
          },
        }),
        [getEndpoint],
      );

      sdk.client.interceptors.request.use((options) => {
        return options;
      });

      await expect(sdk.getEndpoint()).rejects.toThrowError('The operation was aborted.');

      expect(fetchMock).toHaveBeenCalledOnce();
    });
  });
});
