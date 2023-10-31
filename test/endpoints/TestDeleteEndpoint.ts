import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestDeleteEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteEndpoint';
  public readonly path = 'endpoint';
  public readonly property = 'endpoint';
}
