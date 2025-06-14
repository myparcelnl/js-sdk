/* eslint-disable max-nested-callbacks */
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {TestPostWithoutPropertyEndpoint} from '@Test/endpoints/TestPostWithoutPropertyEndpoint';
import {TestGetInlineContentEndpoint} from '@Test/endpoints/TestGetInlineContentEndpoint';
import {TestGet200Endpoint} from '@Test/endpoints/TestGet200Endpoint';
import {createMyParcelSdk} from './createMyParcelSdk';
import {FetchClient} from '@/model/client/FetchClient';
import { TestGetAttachmentEndpoint } from '@Test/endpoints/TestGetAttachmentEndpoint';
import { TestGetPdfEndpoint } from '@Test/endpoints/TestGetPdfEndpoint';
import { TestGetTextEndpoint } from '@Test/endpoints/TestGetTextEndpoint';

describe('createMyParcelSdk', () => {
  const fetchMock = createFetchMock();

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

  describe('timeout', () => {
    beforeEach(() => {
      vi.useFakeTimers();

      fetchMock.mockImplementation((_, config: RequestInit) => {
        const signal = config.signal as AbortSignal;

        return new Promise((_, reject) => {
          signal.addEventListener('abort', () => {
            reject(new DOMException('The operation was aborted.', 'AbortError'));
          });

          // otherwise hang forever (so we know abort is what triggers it)
        });
      });
    });

    afterEach(() => {
      vi.useRealTimers();
      vi.restoreAllMocks();
    });

    it('should throw when request times out', async () => {
      const getEndpoint = new TestGet200Endpoint();

      const sdk = createMyParcelSdk(
        new FetchClient({
          options: {
            timeout: 100,
          },
        }),
        [getEndpoint],
      );

      const promise = sdk.getEndpoint();

      expect(fetchMock).toHaveBeenCalledOnce();
      const cfg = fetchMock.mock.calls[0][1] as RequestInit;

      expect((cfg.signal as AbortSignal).aborted).toBe(false);

      vi.advanceTimersByTime(200);

      await expect(promise).rejects.toThrowError('The operation was aborted.');

      expect(fetchMock).toHaveBeenCalledOnce();
      expect((cfg.signal as AbortSignal).aborted).toBe(true);
    });
  });

  describe('Responses with custom headers and body', () => {
    it('returns blob on Content-Disposition attachment', async () => {
      const fakeBlob = new Blob(['hi'], {type: 'image/png'});

      fetchMock.mockResolvedValue({
        body: true,
        headers: new Map([['Content-Disposition', 'attachment;filename="x.png"']]),
        blob: () => Promise.resolve(fakeBlob),
      });

      const endpoint = new TestGetAttachmentEndpoint();
      const sdk = createMyParcelSdk(new FetchClient(), [endpoint]);

      const result = await sdk.getAttachment();

      expect(result).toBe(fakeBlob);
    });

    it('returns blob on Content-Type application/pdf', async () => {
      const fakePdf = new Blob(['%PDF'], {type: 'application/pdf'});
      fetchMock.mockResolvedValue({
        body: true,
        headers: new Map([['Content-Type', 'application/pdf;version=1']]),
        blob: () => Promise.resolve(fakePdf),
      });

      const endpoint = new TestGetPdfEndpoint();
      const sdk = createMyParcelSdk(new FetchClient(), [endpoint]);

      const result = await sdk.getPdf();

      expect(result).toBe(fakePdf);
    });

    it('parses plain text when no JSON header', async () => {
      fetchMock.mockResolvedValue({
        body: true,
        headers: new Map([['Content-Type', 'text/plain']]),
        text: () => Promise.resolve('hello world'),
      });

      const endpoint = new TestGetTextEndpoint();
      const sdk = createMyParcelSdk(new FetchClient(), [endpoint]);

      const result = await sdk.getText();

      expect(result).toBe('hello world');
    });
  });
});
