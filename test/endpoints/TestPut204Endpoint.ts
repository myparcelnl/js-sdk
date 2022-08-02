import {AbstractPublicEndpoint} from '@/model';
import {HttpMethod} from '@/types';

export class TestPut204Endpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'PUT';
  public readonly name = 'putEndpoint';
  public readonly path = 'endpoint/204';
  public readonly property = 'endpoint';
}
