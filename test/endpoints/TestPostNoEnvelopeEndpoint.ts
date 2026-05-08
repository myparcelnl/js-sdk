import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestPostNoEnvelopeEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postNoEnvelopeEndpoint';
  public readonly path = 'no-envelope';
  public readonly useDataEnvelope = false;
}
