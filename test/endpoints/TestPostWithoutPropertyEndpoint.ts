import {AbstractPublicEndpoint} from '@/model';
import {type HttpMethod} from '@/types';

export class TestPostWithoutPropertyEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postWithoutPropertyEndpoint';
  public readonly path = 'endpoint';
}
