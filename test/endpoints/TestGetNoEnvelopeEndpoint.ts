import {AbstractPublicEndpoint} from '@/model';

export class TestGetNoEnvelopeEndpoint extends AbstractPublicEndpoint {
  public readonly name = 'getNoEnvelopeEndpoint';
  public readonly path = 'no-envelope';
  public readonly useDataEnvelope = false;
}
