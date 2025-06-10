import {describe, expect, it, vi} from 'vitest';
import {TestGetInlineContentEndpoint} from '@Test/endpoints/TestGetInlineContentEndpoint';
import {TestGet200Endpoint} from '@Test/endpoints/TestGet200Endpoint';
import {createMyParcelSdk} from './createMyParcelSdk';
import {FetchClient} from '@/model/client/FetchClient';

describe('createMyParcelSdk', () => {
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

  it('should handle timeout', async () => {
    vi.useFakeTimers();
    expect.assertions(2);

    const abortSpy = vi.spyOn(AbortController.prototype, 'abort');

    const getEndpoint = new TestGet200Endpoint();

    const sdk = createMyParcelSdk(
      new FetchClient({
        options: {
          timeout: 1000,
        },
      }),
      [getEndpoint],
    );

    const fetchPromise = sdk.getEndpoint();

    vi.advanceTimersByTime(999);
    expect(abortSpy).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(abortSpy).toHaveBeenCalledTimes(1);

    await fetchPromise;
    abortSpy.mockRestore();
  });
});
