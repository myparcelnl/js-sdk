import {AbstractPublicEndpoint} from '@/model';
import {type HttpMethod} from '@/types';

export class TestGetInlineContentEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getInline';
  public readonly path = 'endpoint/inline';
}
