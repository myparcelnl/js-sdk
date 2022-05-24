import {EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';

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
   */
  public abstract readonly property: string;

  /**
   * Property used in the response. Falls back to `this.property` if it's not
   * set.
   */
  public readonly responseProperty: string | undefined;

  /**
   * Used to expose EndpointDefinition type.
   */
  public declare readonly definition: D;

  public getHeaders(): AbstractEndpoint['definition']['headers'] {
    return {};
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
