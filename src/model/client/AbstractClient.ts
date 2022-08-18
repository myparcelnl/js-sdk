import {
  ClientConfig,
  ClientRequest,
  EndpointPath,
  EndpointResponse,
  EndpointResponseBody,
  EndpointResponseProperty,
  Options,
  OptionsWithBody,
} from '@/model/client/AbstractClient.types';
import {ErrorResponse, HttpMethod, RequestHeader, RequestHeaders, ResponseWrapper} from '@/types/request.types';
import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {ApiException} from '@/model/exception/ApiException';
import {UserException} from '@/model/exception/UserException';
import {addParameters} from '@/model/client/helper/addParameters';
import {isOfType} from '@/utils/isOfType';

export const BASE_URL = 'https://api.myparcel.nl';

const HTTP_METHODS_WITH_CONTENT: HttpMethod[] = ['POST', 'PUT'];

export abstract class AbstractClient {
  /**
   * Executes the request. Should return a promise containing the response json as object.
   */
  protected abstract request: ClientRequest;

  /**
   * Base URL to make requests to.
   *
   * @protected
   */
  protected baseUrl: string;

  /**
   * Headers to use with requests.
   *
   * @protected
   */
  protected headers: RequestHeaders;

  /**
   * @protected
   */
  protected parameters: Record<string, string>;

  /**
   * Array of headers that are required. Client will throw an error if any are missing.
   *
   * @private
   */
  private _requiredHeaders: (RequestHeader | string)[] = [];

  public constructor(config?: ClientConfig) {
    this.baseUrl = (config?.baseUrl ?? BASE_URL).replace(/\/+$/, '');
    this.headers = config?.headers ?? {};
    this.parameters = config?.parameters ?? {};
  }

  public get requiredHeaders(): (RequestHeader | string)[] {
    return this._requiredHeaders;
  }

  public set requiredHeaders(value: (RequestHeader | string)[]) {
    this._requiredHeaders = value;
  }

  /**
   * Prepare and execute the final request and handle the response.
   */
  public async doRequest<E extends AbstractEndpoint>(endpoint: E, options: Options<E>): Promise<EndpointResponse<E>> {
    const newOptions = this.normalizeOptions(endpoint, options);
    this.validateHeaders(endpoint, newOptions);

    const response = await this.request(endpoint, newOptions);

    if (isOfType<ErrorResponse>(response, 'errors')) {
      throw new ApiException(response);
    }

    if (isOfType<ResponseWrapper<EndpointResponseBody<E>>>(response, 'data')) {
      return response.data[endpoint.getResponseProperty() as EndpointResponseProperty<E>];
    }

    return response;
  }

  /**
   * Gets default and custom headers.
   *
   * @protected
   */
  protected getHeaders(): RequestHeaders {
    return {
      Accept: 'application/json',
      ...this.headers,
    };
  }

  /**
   * Uses the base url, endpoint and options to create the final request url.
   *
   * @protected
   */
  protected createUrl<E extends AbstractEndpoint>(endpoint: E, options: Options<E>): string {
    let urlPath = endpoint.getPath();

    if (urlPath.length && !urlPath.startsWith('/')) {
      urlPath = `/${urlPath}`;
    }

    if (options?.path) {
      urlPath = this.substitutePath<E>(urlPath, options.path);
    }

    if (urlPath.includes('/:')) {
      throw new UserException(`One or more path variables are missing in ${urlPath}`);
    }

    if (options?.parameters) {
      urlPath = addParameters<E>(urlPath, options.parameters);
    }

    return this.baseUrl + urlPath;
  }

  /**
   * Replace path variables in an url path. Deletes optional parameters if
   * they're not passed.
   *
   * @protected
   */
  protected substitutePath<E extends AbstractEndpoint>(urlPath: string, pathVariables?: EndpointPath<E>): string {
    if (pathVariables) {
      Object.entries(pathVariables).forEach(([key, value]) => {
        urlPath = urlPath.replace(`:${key}`, String(value));
      });
    }

    if (urlPath.includes(':')) {
      const optionals = urlPath.match(/:\w+?\?/g);

      optionals?.forEach((optional) => {
        urlPath = urlPath.replace(`/${optional}`, '');
      });
    }

    return urlPath;
  }

  /**
   * Validates headers passed in options.
   *
   * @protected
   */
  protected validateHeaders<E extends AbstractEndpoint>(
    endpoint: E,
    options: WithRequired<Options<E>, 'headers'>,
  ): void {
    const headers = Object.entries(options.headers).reduce(
      (acc, [key, header]) => ({
        ...acc,
        [key.toLowerCase()]: header,
      }),
      {},
    );

    const missingHeaders = this.requiredHeaders.filter((header) => !(header.toLowerCase() in headers));

    if (missingHeaders.length) {
      throw new UserException(`Required headers are missing: ${missingHeaders.join(', ')}`);
    }
  }

  /**
   * Executes transformations on options before request.
   *
   * @protected
   */
  protected normalizeOptions<E extends AbstractEndpoint>(
    endpoint: E,
    options: Options<E>,
  ): WithRequired<Options<E>, 'headers'> {
    const newOptions: WithRequired<OptionsWithBody<E>, 'headers'> = {
      ...options,
      parameters: {
        ...this.parameters,
        ...options.parameters,
        ...endpoint.getParameters(),
      },
      headers: {
        ...(HTTP_METHODS_WITH_CONTENT.includes(endpoint.method) ? {'Content-Type': 'application/json'} : {}),
        ...this.getHeaders(),
        ...options.headers,
        ...endpoint.getHeaders(),
      },
    };

    if (isOfType<OptionsWithBody<E>>(options, 'body')) {
      newOptions.body = {
        data: {[endpoint.getProperty()]: options.body},
      };
    }

    return newOptions;
  }
}
