import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestPostWithoutPropertyEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postWithoutPropertyEndpoint';
  public readonly path = 'endpoint';
}
