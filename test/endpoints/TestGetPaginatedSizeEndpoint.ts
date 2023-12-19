import {AbstractPublicEndpoint} from '@/model';

export class TestGetPaginatedSizeEndpoint extends AbstractPublicEndpoint {
  public readonly name = 'getPaginatedSizeEndpoint';
  public readonly path = 'paginated/size';
  public readonly property = 'shipments';
}
