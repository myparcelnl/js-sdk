import {beforeEach, describe, expect, it} from 'vitest';
import {FetchClient} from '@/model/client/FetchClient';
import {GetCarriers} from '@/endpoints';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {createPublicSdk} from '@/createPublicSdk';

/**
 * @vitest-environment happy-dom
 */
describe('AbstractClient (browser)', () => {
  const fetchMock = createFetchMock();

  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('passes browser X-User-Agent header', async () => {
    const sdk = createPublicSdk(new FetchClient(), [new GetCarriers()]);
    await sdk.getCarriers();

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/carriers', {
      headers: {
        Accept: 'application/json',
        'X-User-Agent': expect.stringMatching(/^MyParcelNL-JS-SDK\/.+ Mozilla\/.+$/),
      },
      method: 'GET',
    });
  });
});
