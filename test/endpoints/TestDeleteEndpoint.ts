import {AbstractPublicEndpoint} from '@/model';
import {HttpMethod} from '@/types';

export class TestDeleteEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteEndpoint';
  public readonly path = 'endpoint';
  public readonly property = 'endpoint';
}
