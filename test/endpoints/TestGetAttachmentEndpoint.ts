import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestGetAttachmentEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getAttachment';
  public readonly path = 'endpoint/attachment';
}
