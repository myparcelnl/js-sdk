import {type HttpMethod} from '@/types';
import {type AbstractEndpoint, AbstractPublicEndpoint} from '@/model';

export class TestGet200Endpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getEndpoint';
  public readonly path = 'endpoint';
  public readonly property = 'endpoint';

  public getHeaders(): AbstractEndpoint['definition']['headers'] {
    return {
      ...super.getHeaders(),
      'X-Static-Header': 'value',
    };
  }

  public getParameters(): AbstractEndpoint['definition']['parameters'] {
    return {
      ...super.getParameters(),
      'X-Static-Parameter': 'value',
    };
  }
}
