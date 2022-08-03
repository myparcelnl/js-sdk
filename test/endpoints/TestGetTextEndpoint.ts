import {HttpMethod, RequestHeaders} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestGetTextEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getText';
  public readonly path = 'endpoint/text';
  public readonly property = 'text';

  public getHeaders(): RequestHeaders {
    return {
      ...super.getHeaders(),
      Accept: 'text/plain',
    };
  }
}
