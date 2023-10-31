import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestGetInlineContentEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getInline';
  public readonly path = 'endpoint/inline';
}
