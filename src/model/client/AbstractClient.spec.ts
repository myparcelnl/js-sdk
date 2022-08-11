import {AbstractPublicEndpoint, EndpointParameters} from '@/model';
import {GetCarrier, GetCarriers, GetDeliveryOptions, GetPickupLocations, PostShipments} from '@/endpoints';
import {ApiException} from '@/model/exception/ApiException';
import {FetchClient} from '@/model/client/FetchClient';
import {POST_BODY_SHIPMENTS} from '@Test/mockData';
import {TestDeleteEndpoint} from '@Test/endpoints/TestDeleteEndpoint';
import {TestGet200Endpoint} from '@Test/endpoints/TestGet200Endpoint';
import {TestGetTextEndpoint} from '@Test/endpoints/TestGetTextEndpoint';
import {TestPut204Endpoint} from '@Test/endpoints/TestPut204Endpoint';
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
      headers: {Accept: 'application/json'},
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
        headers: {Accept: 'application/json;version=2.0'},
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
    const sdk = createPublicSdk(client, [new TestGet200Endpoint({headers: {'X-Random': '12345'}})]);

    await sdk.getEndpoint({headers: {'X-Additional-Header': '1'}});

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint?X-Static-Parameter=value', {
      headers: {
        Accept: 'application/json',
        'X-Additional-Header': '1',
        'X-Client-Header': '1',
        'X-Random': '12345',
        'X-Static-Header': 'value',
      },
      method: 'GET',
    });
  });

  it('parses all parameters correctly', async () => {
    expect.assertions(1);
    const client = new FetchClient({parameters: {XDEBUG_SESSION_START: 'phpstorm'}});
    const sdk = createPublicSdk(client, [new TestGet200Endpoint({parameters: {number: 32, test: 1}})]);
    await sdk.getEndpoint({parameters: {now: '1234', number: 31, param: 'sdk'}});

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.myparcel.nl/endpoint?XDEBUG_SESSION_START=phpstorm&now=1234&number=32&param=sdk&test=1&X-Static-Parameter=value',
      {
        headers: {
          Accept: 'application/json',
          'X-Static-Header': 'value',
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

  it('handles having no response body', async () => {
    expect.assertions(2);

    const sdk = createPublicSdk(new FetchClient(), [new TestDeleteEndpoint()]);
    const response = await sdk.deleteEndpoint();

    expect(response).toBeUndefined();
    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint', {
      headers: {
        Accept: 'application/json',
      },
      method: 'DELETE',
    });
  });

  it('handles having a status 204 response', async () => {
    expect.assertions(4);

    const sdk = createPublicSdk(new FetchClient(), [new TestPut204Endpoint()]);
    const response = await sdk.putEndpoint();

    expect(response).toBeUndefined();

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(204);
    expect(result.statusText).toBe('No Content');

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint/204', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });
  });

  it('handles receiving a plain text response', async () => {
    expect.assertions(4);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetTextEndpoint()]);
    const response = await sdk.getText();

    expect(response).toBe('"plain text"');

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(200);
    expect(result.statusText).toBe('OK');

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint/text', {
      headers: {
        Accept: 'text/plain',
      },
      method: 'GET',
    });
  });
});
