import {type HttpMethod} from '@/types/request.types';
import {type EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';

interface EndpointOptions {
  headers?: AbstractEndpoint['definition']['headers'];
  parameters?: AbstractEndpoint['definition']['parameters'];
}

export abstract class AbstractEndpoint<D = EndpointDefinition> {
  /**
   * HTTP method.
   */
  public readonly method: HttpMethod = 'GET';

  /**
   * Name of the endpoint.
   */
  public abstract readonly name: string;

  /**
   * URL path of the API endpoint. Can contain path variables like `:variable`.
   */
  public abstract readonly path: string;

  /**
   * The property in the request body and response body. If the response body
   * property differs, set responseProperty alongside property.
   * If the property is undefined, the endpoint will be called without a namespace.
   */
  public abstract readonly property: string | undefined;

  /**
   * Property used in the response. Falls back to `this.property` if it's not
   * set.
   */
  public readonly responseProperty: string | undefined;

  /**
   * Used to expose EndpointDefinition type.
   */
  public declare readonly definition: D;

  /**
   * Headers to include when calling this endpoint.
   */
  private readonly headers: AbstractEndpoint['definition']['headers'];

  /**
   * Parameters to include in the endpoint url.
   */
  private readonly parameters: AbstractEndpoint['definition']['parameters'];

  public constructor(options?: EndpointOptions) {
    this.headers = options?.headers ?? {};
    this.parameters = options?.parameters ?? {};
  }

  public getHeaders(): AbstractEndpoint['definition']['headers'] {
    return this.headers;
  }

  public getParameters(): AbstractEndpoint['definition']['parameters'] {
    return this.parameters;
  }

  public getPath(): AbstractEndpoint['path'] {
    return this.path;
  }

  public getProperty(): AbstractEndpoint['property'] {
    return this.property;
  }

  public getResponseProperty(): AbstractEndpoint['responseProperty'] {
    return this.responseProperty ?? this.property;
  }
}
