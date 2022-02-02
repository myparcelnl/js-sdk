import {
  ClientConfig,
  ClientRequest,
  EndpointPath,
  EndpointResponse,
  OptionsWithBody,
  OptionsWithoutBody,
} from '@/model/client/AbstractClient.types';
import {ErrorResponse, RequestHeader, RequestHeaders} from '@/types/request.types';
import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {ApiException} from '@/model/exception/ApiException';
import {UserException} from '@/model/exception/UserException';
import {addParameters} from '@/model/client/helper/addParameters';
import {isOfType} from '@/utils/isOfType';

export const BASE_URL = 'https://api.myparcel.nl';

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
   * Array of headers that are required. Client will throw an error if any are missing.
   *
   * @private
   */
  private _requiredHeaders: (RequestHeader | string)[] = [];

  public constructor(config?: ClientConfig) {
    this.baseUrl = config?.baseUrl ?? BASE_URL;
    this.headers = config?.headers ?? {};
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
  public async doRequest<E extends AbstractEndpoint>(
    endpoint: E,
    options: OptionsWithBody<E> | OptionsWithoutBody<E>,
  ): Promise<EndpointResponse<E>> {
    options = AbstractClient.normalizeOptions(options);
    this.validateHeaders(endpoint, options);

    const response = await this.request(endpoint, options);

    if (isOfType<ErrorResponse>(response, 'errors')) {
      throw new ApiException(response);
    }

    return response.data[endpoint.getProperty() as E['property']];
  }

  /**
   * Gets default and custom headers.
   *
   * @protected
   */
  protected getHeaders(): RequestHeaders {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...this.headers,
    };
  }

  /**
   * Uses the base url, endpoint and options to create the final request url.
   *
   * @protected
   */
  protected createUrl<E extends AbstractEndpoint>(
    endpoint: E,
    options: OptionsWithoutBody<E> | OptionsWithBody<E>,
  ): string {
    let urlPath = endpoint.getPath();

    if (options?.path) {
      urlPath = this.substitutePath<E>(urlPath, options.path);
    }

    if (options?.parameters) {
      urlPath = addParameters<E>(urlPath, options.parameters);
    }

    if (urlPath.includes(':')) {
      throw new UserException(`One or more path variables are missing in ${urlPath}`);
    }

    return `${this.baseUrl}/${urlPath}`;
  }

  /**
   * Replace path variables in an url path.
   *
   * @protected
   */
  protected substitutePath<E extends AbstractEndpoint>(urlPath: string, pathVariables?: EndpointPath<E>): string {
    if (pathVariables) {
      Object.entries(pathVariables).forEach(([key, value]) => {
        urlPath = urlPath.replace(`:${key}`, String(value));
      });
    }

    return urlPath;
  }

  /**
   * Validates headers passed in options.
   *
   * @protected
   */
  protected validateHeaders<E extends AbstractEndpoint>(endpoint: E, options: OptionsWithBody<E>): void {
    const missingHeaders = this.requiredHeaders.filter((header) => !(header.toLowerCase() in (options?.headers ?? [])));

    if (missingHeaders.length) {
      throw new UserException(`Required headers are missing: ${missingHeaders.join(', ')}`);
    }
  }

  /**
   * Executes transformations on options before request.
   *
   * @protected
   */
  protected static normalizeOptions<E extends AbstractEndpoint>(
    options: OptionsWithBody<E> | OptionsWithoutBody<E>,
  ): OptionsWithBody<E> | OptionsWithoutBody<E> {
    // Transform headers to lowercase
    if (options.headers) {
      options.headers = Object.entries(options.headers).reduce(
        (acc, [key, header]) => ({
          ...acc,
          [key.toLowerCase()]: header,
        }),
        {},
      );
    }

    if (options.parameters) {
      options.parameters = Object.entries(options.parameters).reduce(
        (acc, [key, parameter]) => ({
          ...acc,
          [key.toLowerCase()]: parameter.toString(),
        }),
        {},
      );
    }

    return options;
  }
}
