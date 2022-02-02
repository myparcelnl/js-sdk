import {GetCarrier, GetCarriers, GetDeliveryOptions, GetPickupLocations} from '@/endpoints';
import {ApiException} from '@/model/exception/ApiException';
import {FetchClient} from '@/model/client/FetchClient';
import {UserException} from '@/model/exception/UserException';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {createPublicSdk} from '@/createPublicSdk';

describe('AbstractClient', () => {
  const fetchMock = createFetchMock();
  const sdk = createPublicSdk(new FetchClient(), [
    new GetCarriers(),
    new GetCarrier(),
    new GetDeliveryOptions(),
    new GetPickupLocations(),
  ]);

  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('returns a promise', async () => {
    expect.assertions(2);
    const promise = sdk.getCarriers();
    expect(promise).toStrictEqual(expect.any(Promise));
    expect(await promise).toHaveLength(8);
  });

  it('substitutes path', async () => {
    const response = await sdk.getCarrier({
      path: {
        carrier: 'postnl',
      },
    });

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/carriers/postnl', {
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      method: 'GET',
    });
    expect(response.length).toBe(1);
  });

  it('throws error if path is not substituted', async () => {
    expect.assertions(1);
    await expect(sdk.getCarrier()).rejects.toThrow(
      new UserException('One or more path variables are missing in carriers/:carrier'),
    );
  });

  it('substitutes parameters', async () => {
    const response = await sdk.getPickupLocations({
      parameters: {
        carrier: 1,
        cc: 'NL',
        number: 31,
        platform: 'myparcel',
        postal_code: '2132JE',
      },
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.myparcel.nl/pickup_locations?carrier=1&cc=NL&number=31&platform=myparcel&postal_code=2132JE',
      {
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        method: 'GET',
      },
    );

    expect(response.length).toBe(2);
  });

  it('returns api error correctly', async () => {
    expect.assertions(1);
    await expect(sdk.getDeliveryOptions()).rejects.toThrow(
      new ApiException({
        message:
          'The cc field is required. The carrier field is required. The platform field is required. (request_id: 1649780852.44186255a8746bdec)',
        request_id: '1649768916.0403625579d409d84',
        errors: [
          {
            code: 3212,
            message: 'cc is required',
          },
          {
            code: 3212,
            message: 'postal_code is required',
          },
          {
            code: 3212,
            message: 'number is required',
          },
        ],
      }),
    );
  });
});
