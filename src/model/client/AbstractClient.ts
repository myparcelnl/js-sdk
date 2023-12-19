import {isOfType} from '@myparcel/ts-utils';
import {
  type ErrorResponse,
  type HttpMethod,
  type RequestHeader,
  type RequestHeaders,
  type ResponseWrapper,
} from '@/types/request.types';
import {type NoInfer, type WithRequired} from '@/types';
import {UserException} from '@/model/exception/UserException';
import {ApiException} from '@/model/exception/ApiException';
import {type AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {addParameters} from '@/model/client/helper/addParameters';
import {
  type ClientConfig,
  type ClientOptions,
  type ClientRequest,
  type EndpointPath,
  type EndpointResponse,
  type EndpointResponseBody,
  type EndpointResponseProperty,
  type PaginatedEndpointResponse,
  type Options,
  type OptionsWithBody,
} from '@/model/client/AbstractClient.types';

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
   * Additional client specific options.
   *
   * @protected
   */
  protected options: ClientOptions;

  /**
   * Array of headers that are required. Client will throw an error if any are missing.
   *
   * @private
   */
  private _requiredHeaders: (RequestHeader | string)[] = [];

  protected constructor(config?: ClientConfig) {
    this.baseUrl = (config?.baseUrl ?? BASE_URL).replace(/\/+$/, '');
    this.headers = config?.headers ?? {};
    this.parameters = config?.parameters ?? {};
    this.options = config?.options ?? {};
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
    const newOptions = this.normalizeOptions(endpoint, {...options, ...this.options});
    this.validateHeaders(endpoint, newOptions);

    const response = await this.request(endpoint, newOptions);

    if (isOfType<ErrorResponse>(response, 'errors')) {
      throw new ApiException(response);
    }

    return this.getResponseBody(endpoint, response);
  }

  getResponseBody<E extends AbstractEndpoint>(endpoint: E, response: EndpointResponse<E>): EndpointResponse<E> | PaginatedEndpointResponse<E> {
    if (!isOfType<ResponseWrapper<EndpointResponseBody<E>>>(response, 'data')) {
      return response;
    }

    const property = endpoint.getResponseProperty() as EndpointResponseProperty<E>;

    if (!property) {
      return response.data as EndpointResponse<E>;
    }

    const { page, size, results } = response.data;

    if (page === undefined && size === undefined && results === undefined) {
      return response.data[property]
    }

    // If the response is paginated, wrap it.
    return {
      [property]: response.data[property] as NoInfer<unknown[]>,
      ...(page !== undefined && { page }),
      ...(size !== undefined && { size }),
      ...(results !== undefined && { results }),
    };
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
      const property = endpoint.getProperty();

      if (options.body instanceof FormData) {
        // FormData should be set as body directly.
        newOptions.body = options.body;
        // FormData should not be handled by the browser itself.
        delete newOptions.headers['Content-Type'];
        return newOptions;
      }

      if (property === undefined) {
        newOptions.body = {
          data: options.body,
        };
      } else {
        newOptions.body = {
          data: {[property]: options.body},
        };
      }
    }

    return newOptions;
  }
}
