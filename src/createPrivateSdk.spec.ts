import {describe, expect, it} from 'vitest';
import {TestGet200PrivateEndpoint} from '@Test/endpoints/TestGet200PrivateEndpoint';
import {FetchClient} from '@/model/client/FetchClient';
import {createPrivateSdk} from '@/createPrivateSdk';

describe('createPrivateSdk', () => {
  it('requires authorization header to call endpoints', async () => {
    expect.assertions(1);
    const getEndpoint = new TestGet200PrivateEndpoint();

    const sdk = createPrivateSdk(new FetchClient(), [getEndpoint]);

    await expect(sdk.getEndpoint()).rejects.toThrow('Required headers are missing: Authorization');
  });
});
