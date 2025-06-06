/* eslint-disable max-nested-callbacks */
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {isOfType} from '@myparcel/ts-utils';
import {CarrierName, PlatformName} from '@myparcel/constants';
import {POST_BODY_SHIPMENTS} from '@Test/mockData';
import {createFetchMock} from '@Test/fetch/createFetchMock';
import {TestPut204Endpoint} from '@Test/endpoints/TestPut204Endpoint';
import {TestPostWithoutPropertyEndpoint} from '@Test/endpoints/TestPostWithoutPropertyEndpoint';
import {TestGetTextEndpoint} from '@Test/endpoints/TestGetTextEndpoint';
import {TestGetPdfEndpoint} from '@Test/endpoints/TestGetPdfEndpoint';
import {TestGetPaginatedSizeEndpoint} from '@Test/endpoints/TestGetPaginatedSizeEndpoint';
import {TestGetPaginatedResultsEndpoint} from '@Test/endpoints/TestGetPaginatedResultsEndpoint';
import {TestGetPaginatedPageEndpoint} from '@Test/endpoints/TestGetPaginatedPageEndpoint';
import {TestGetInlineContentEndpoint} from '@Test/endpoints/TestGetInlineContentEndpoint';
import {TestGetExtendedTimeout} from '@Test/endpoints/TestGetExtendedTimeout';
import {TestGetAttachmentEndpoint} from '@Test/endpoints/TestGetAttachmentEndpoint';
import {TestGet200NoResponseProperty} from '@Test/endpoints/TestGet200NoResponseProperty';
import {TestGet200Endpoint} from '@Test/endpoints/TestGet200Endpoint';
import {TestDeleteEndpoint} from '@Test/endpoints/TestDeleteEndpoint';
import {UserException} from '@/model/exception/UserException';
import {ApiException} from '@/model/exception/ApiException';
import {FetchClient} from '@/model/client/FetchClient';
import {AbstractPublicEndpoint, type EndpointParameters} from '@/model';
import {
  GetCarrier,
  GetCarriers,
  GetDeliveryOptions,
  GetPickupLocations,
  GetShipments,
  PostShipments,
} from '@/endpoints';
import {createPublicSdk} from '@/createPublicSdk';
import {createPrivateSdk} from '@/createPrivateSdk';

const getDeliveryOptionsParameters: EndpointParameters<GetDeliveryOptions> = {
  carrier: 1,
  cc: 'NL',
  number: 31,
  platform: PlatformName.MyParcel,
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
        carrier: CarrierName.PostNl,
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

  describe('headers', () => {
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
  });

  describe('parameters', () => {
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
  });

  describe('formats request body correctly on post', () => {
    it('formats request body correctly with a property', async () => {
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
          'Content-Type': 'application/vnd.shipment+json;charset=utf-8;version=1.1',
        },
        method: 'POST',
        body: '{"data":{"shipments":[{"carrier":1,"options":{"package_type":1,"delivery_type":2},"recipient":{"cc":"NL","city":"Hoofddorp","person":"Ms. Parcel","street":"Antareslaan 31","postal_code":"2132 JE","email":"example@myparcel.nl"}}]}}',
      });
    });

    it('formats request body correctly without a property', async () => {
      expect.assertions(1);

      const sdk = createPublicSdk(new FetchClient(), [new TestPostWithoutPropertyEndpoint()]);
      await sdk.postWithoutPropertyEndpoint({
        body: POST_BODY_SHIPMENTS[0],
      });

      expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint', {
        method: 'POST',
        body: '{"data":{"carrier":1,"options":{"package_type":1,"delivery_type":2},"recipient":{"cc":"NL","city":"Hoofddorp","person":"Ms. Parcel","street":"Antareslaan 31","postal_code":"2132 JE","email":"example@myparcel.nl"}}}',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    });

    it('formats request with formData correctly', async () => {
      expect.assertions(2);

      const sdk = createPublicSdk(new FetchClient(), [new TestPostWithoutPropertyEndpoint()]);
      const formData = new FormData();
      formData.append('file', new Blob(['test'], {type: 'text/plain'}), 'test.txt');

      await sdk.postWithoutPropertyEndpoint({
        body: formData,
      });

      expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      // the body should be a FormData instance
      expect(fetchMock.mock.calls?.[0]?.[1]?.body).toBeInstanceOf(FormData);
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

  it('handles a timeout, completed in time', async () => {
    expect.assertions(2);

    fetchMock.mockClear();
    const localFetchMock = createFetchMock(undefined, {timeout: 10});

    const sdk = createPublicSdk(
      new FetchClient({
        options: {
          timeout: 200,
        },
      }),
      [new TestDeleteEndpoint()],
    );

    const response = await sdk.deleteEndpoint();
    expect(response).toBeUndefined();
    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint', {
      headers: {
        Accept: 'application/json',
      },
      method: 'DELETE',
      signal: expect.objectContaining({
        aborted: false,
      }),
    });

    localFetchMock.mockClear();
  });

  it('handles having a status 204 response', async () => {
    expect.assertions(3);

    const sdk = createPublicSdk(new FetchClient(), [new TestPut204Endpoint()]);
    const response = await sdk.putEndpoint();

    expect(response).toBeUndefined();

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(204);

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint/204', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });
  });

  it('handles receiving a plain text response', async () => {
    expect.assertions(3);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetTextEndpoint()]);
    const response = await sdk.getText();

    expect(response).toBe('"plain text"');

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(200);

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint/text', {
      headers: {
        Accept: 'text/plain',
      },
      method: 'GET',
    });
  });

  it('handles receiving a response with a blob content', async () => {
    expect.assertions(5);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetAttachmentEndpoint()]);
    const response = await sdk.getAttachment();

    // the Blob presented by vitest is not the same as the fetcher, so check for blob-like properties:
    const ofType = isOfType<Blob>(response, 'size');

    expect(ofType).toBe(true);

    if (ofType) {
      expect(response.size).toBe(6);
      expect(response.type).toBe('image/jpeg');
    }

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(200);

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint/attachment', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    });
  });

  it('handles receiving a response with content-type application/pdf as a blob', async () => {
    expect.assertions(5);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetPdfEndpoint()]);
    const response = await sdk.getPdf();

    // the Blob presented by vitest is not the same as the fetcher, so check for blob-like properties:
    const ofType = isOfType<Blob>(response, 'size');

    expect(ofType).toBe(true);

    if (ofType) {
      expect(response.size).toBe(6);
      expect(response.type).toBe('application/pdf');
    }

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(200);

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/pdf', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    });
  });

  it('handles receiving a response with content-disposition: inline header', async () => {
    expect.assertions(3);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetInlineContentEndpoint()]);
    const response = await sdk.getInline();

    expect(response).toBe('"Test"');

    const result = await fetchMock.mock.results[0].value;
    expect(result.status).toBe(200);

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/endpoint/inline', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    });
  });

  it('handles receiving a paginated response', async () => {
    expect.assertions(8);

    const sdk = createPublicSdk(new FetchClient(), [new GetShipments()]);
    const response = await sdk.getShipments({
      headers: {Authorization: 'bearer apiKey'},
    });

    expect(response).toHaveProperty('shipments');
    expect(response).toHaveProperty('page');
    expect(response).toHaveProperty('size');
    expect(response).toHaveProperty('results');

    expect(response.shipments).toHaveLength(4);
    expect(response.page).toBe(1);
    expect(response.size).toBe(30);
    expect(response.results).toBe(4);
  });

  it('handles receiving a paginated response with 0 results', async () => {
    expect.assertions(2);

    const sdk = createPublicSdk(new FetchClient(), [new GetShipments()]);
    const response = await sdk.getShipments({
      parameters: {carrier: 2, page: 1, size: 30},
      headers: {Authorization: 'bearer apiKey'},
    });

    expect(response).toHaveProperty('shipments', []);
    expect(response).toHaveProperty('results', 0);
  });

  it('returns all contents from data property when no property is defined', async () => {
    expect.assertions(2);

    const sdk = createPublicSdk(new FetchClient(), [new TestGet200NoResponseProperty()]);
    const response = await sdk.get200NoResponseProperty();

    expect(response).toHaveProperty('token', 'test');
    expect(response).toHaveProperty('credentials', {username: 'test', password: 'test'});
  });

  it('returns size when size is defined', async () => {
    expect.assertions(4);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetPaginatedSizeEndpoint()]);
    const response = await sdk.getPaginatedSizeEndpoint();

    expect(response).toHaveProperty('shipments', []);
    expect(response).toHaveProperty('size', 0);
    expect(response).not.toHaveProperty('page');
    expect(response).not.toHaveProperty('results');
  });

  it('returns page when page is defined', async () => {
    expect.assertions(4);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetPaginatedPageEndpoint()]);
    const response = await sdk.getPaginatedPageEndpoint();

    expect(response).toHaveProperty('shipments', []);
    expect(response).toHaveProperty('page', 1);
    expect(response).not.toHaveProperty('size');
    expect(response).not.toHaveProperty('results');
  });

  it('returns results when results is defined', async () => {
    expect.assertions(4);

    const sdk = createPublicSdk(new FetchClient(), [new TestGetPaginatedResultsEndpoint()]);
    const response = await sdk.getPaginatedResultsEndpoint();

    expect(response).toHaveProperty('shipments', []);
    expect(response).toHaveProperty('results', 0);
    expect(response).not.toHaveProperty('page');
    expect(response).not.toHaveProperty('size');
  });

  it('can have the timeout overwritten by the endpoint definition', () => {
    expect.assertions(2);
    vi.useFakeTimers();
    fetchMock.mockClear();
    const localFetchMock = createFetchMock(undefined, {timeout: 10});
    const sdk = createPublicSdk(
      new FetchClient({
        options: {
          timeout: 100,
        },
      }),
      [new TestGetExtendedTimeout()],
    );

    const response = sdk.getExtendedTimeout();
    vi.advanceTimersByTime(200);
    void expect(response).resolves.toStrictEqual([]);

    expect(fetchMock).toHaveBeenCalledWith('https://api.myparcel.nl/timeout', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
      signal: expect.objectContaining({
        aborted: false,
      }),
    });

    localFetchMock.mockClear();
    vi.useRealTimers();
  });

  describe('response interceptors', () => {
    it('calls response interceptor with the response', async () => {
      expect.assertions(2);
      const interceptor = vi.fn((response) => response);

      const client = new FetchClient();
      client.interceptors.response.use(interceptor);

      const sdk = createPublicSdk(client, [new TestGet200NoResponseProperty()]);
      const response = await sdk.get200NoResponseProperty();

      expect(interceptor).toHaveBeenCalledTimes(1);
      expect(response).toStrictEqual({
        token: 'test',
        credentials: {
          username: 'test',
          password: 'test',
        },
      });
    });

    it('can modify the response in interceptor', async () => {
      expect.assertions(2);

      const client = new FetchClient();

      client.interceptors.response.use((response) => {
        expect(response.data).toHaveProperty('token', 'test');

        // @ts-expect-error We are modifying the response object to add a property.
        response.data.token = 'test1234';

        return response;
      });

      const sdk = createPublicSdk(client, [new TestGet200NoResponseProperty()]);
      const response = await sdk.get200NoResponseProperty();

      expect(response).toHaveProperty('token', 'test1234');
    });

    it('logs error in response interceptor', async () => {
      expect.assertions(3);

      const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});

      const client = new FetchClient();

      client.interceptors.response.use((response) => {
        // @ts-ignore The response object may not have an errors property, but we want to log it if it exists.
        if (response.errors.length) {
          console.error('API Error:', response);
        }

        return response;
      });

      const sdk = createPublicSdk(client, [new GetDeliveryOptions()]);

      await expect(sdk.getDeliveryOptions()).rejects.toThrow(
        new ApiException({
          message: 'The cc field is required. The carrier field is required. The platform field is required. (request_id: 1649780852.44186255a8746bdec)',
          request_id: '1649768916.0403625579d409d84',
          errors: [
            {
              code: 3212,
              message: 'cc is required',
            },
          ],
        }),
      );

      expect(consoleErrorMock).toHaveBeenCalledTimes(1);
      expect(consoleErrorMock).toHaveBeenCalledWith(
        'API Error:',
        expect.objectContaining({
          message:
            'The cc field is required. The carrier field is required. The platform field is required. (request_id: 1649780852.44186255a8746bdec)',
          request_id: '1649780852.44186255a8746bdec',
          errors: [
            {
              status: 400,
              code: 3224,
              title: 'The cc field is required. The carrier field is required. The platform field is required.',
              message: 'The cc field is required. The carrier field is required. The platform field is required.'
            },
          ],
        }),
      );
      consoleErrorMock.mockRestore();
    });
  });
});
