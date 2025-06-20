import {beforeEach, describe, expect, it} from 'vitest';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {TestGet200PrivateEndpoint} from '@Test/endpoints/TestGet200PrivateEndpoint';
import {FetchClient} from '@/model/client/FetchClient';
import {createPrivateSdk} from '@/createPrivateSdk';

describe('createPrivateSdk', () => {
  const fetchMock = createFetchMock();

  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('requires authorization header to call endpoints', async () => {
    expect.assertions(1);
    const getEndpoint = new TestGet200PrivateEndpoint();

    const sdk = createPrivateSdk(new FetchClient(), [getEndpoint]);

    await expect(sdk.getEndpoint()).rejects.toThrow('Required headers are missing: Authorization');
  });

  it('should handle the request when the header Authorization token is given', async () => {
    expect.assertions(2);

    const getEndpoint = new TestGet200PrivateEndpoint();

    const sdk = createPrivateSdk(
      new FetchClient({
        headers: {
          Authorization: 'bearer apiKey',
        },
      }),
      [getEndpoint],
    );

    await sdk.getEndpoint();

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint', {
      headers: {
        Accept: 'application/json',
        Authorization: 'bearer apiKey',
      },
      method: 'GET',
      signal: expect.objectContaining({
        aborted: false,
      }),
    });
  });
});
