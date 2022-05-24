import {AbstractPublicEndpoint, EndpointParameters} from '@/model';
import {GetCarrier, GetCarriers, GetDeliveryOptions, GetPickupLocations, PostShipments} from '@/endpoints';
import {ApiException} from '@/model/exception/ApiException';
import {FetchClient} from '@/model/client/FetchClient';
import {HttpMethod} from '@/types';
import {POST_BODY_SHIPMENTS} from '@Test/mockData';
import {UserException} from '@/model/exception/UserException';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {createPrivateSdk} from '@/createPrivateSdk';
import {createPublicSdk} from '@/createPublicSdk';

const getDeliveryOptionsParameters: EndpointParameters<GetDeliveryOptions> = {
  carrier: 1,
  cc: 'NL',
  number: 31,
  platform: 'myparcel',
  postal_code: '2132JE',
  cutoff_time: '17:00',
};

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
      new UserException('One or more path variables are missing in /carriers/:carrier'),
    );
  });

  it('allows optional path variables', async () => {
    expect.assertions(1);

    class GetCredentials extends AbstractPublicEndpoint {
      public readonly name = 'getCredentials';
      public readonly path: string = 'external_integration_provider_credentials/:name/:version?';
      public readonly property: string = 'credentials';
    }

    const sdk = createPublicSdk(new FetchClient(), [new GetCredentials()]);
    await expect(
      sdk.getCredentials({
        path: {
          name: 'wix',
        },
      }),
    ).resolves.toEqual([]);
  });

  it('substitutes parameters', async () => {
    const response = await sdk.getDeliveryOptions({
      parameters: getDeliveryOptionsParameters,
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.myparcel.nl/delivery_options?carrier=1&cc=NL&number=31&platform=myparcel&postal_code=2132JE&cutoff_time=17:00',
      {
        headers: {Accept: 'application/json;version=2.0', 'Content-Type': 'application/json'},
        method: 'GET',
      },
    );

    expect(response.length).toBe(5);
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

  it('parses all headers correctly', async () => {
    expect.assertions(1);

    const client = new FetchClient({headers: {'X-Client-Header': '1'}});
    const getDeliveryOptions = new GetDeliveryOptions();

    const sdk = createPublicSdk(client, [getDeliveryOptions]);

    await sdk.getDeliveryOptions({headers: {'X-Additional-Header': '1'}, parameters: getDeliveryOptionsParameters});

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.myparcel.nl/delivery_options?carrier=1&cc=NL&number=31&platform=myparcel&postal_code=2132JE&cutoff_time=17:00',
      {
        headers: {
          Accept: 'application/json;version=2.0',
          'Content-Type': 'application/json',
          'X-Client-Header': '1',
          'X-Additional-Header': '1',
        },
        method: 'GET',
      },
    );
  });

  it('formats request body correctly on post', async () => {
    expect.assertions(1);

    const sdk = createPrivateSdk(new FetchClient(), [new PostShipments()]);
    await sdk.postShipments({
      headers: {Authorization: 'bearer apiKey'},
      body: POST_BODY_SHIPMENTS,
    });

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/shipments', {
      headers: {
        Accept: 'application/json',
        Authorization: 'bearer apiKey',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: '{"data":{"shipments":[{"carrier":1,"options":{"package_type":"package"},"recipient":{"cc":"NL","city":"Hoofddorp","person":"Ms. Parcel","street":"Antareslaan 31"}}]}}',
    });
  });
});
