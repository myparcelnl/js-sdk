import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestPut204Endpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'PUT';
  public readonly name = 'putEndpoint';
  public readonly path = 'endpoint/204';
  public readonly property = 'endpoint';
}
