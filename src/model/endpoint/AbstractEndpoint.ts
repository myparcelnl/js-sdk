import {EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';

export abstract class AbstractEndpoint<D = EndpointDefinition> {
  /**
   * HTTP method.
   */
  public abstract readonly method: HttpMethod;

  /**
   * Name of the endpoint.
   */
  public abstract readonly name: string;

  /**
   * URL path of the API endpoint. Can contain path variables like `:variable`.
   */
  public abstract readonly path: string;

  /**
   * The property in the response.
   */
  public abstract readonly property: string;

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
}
