import {AbstractPublicEndpoint} from '@/model';

export class TestGetPaginatedPageEndpoint extends AbstractPublicEndpoint {
  public readonly name = 'getPaginatedPageEndpoint';
  public readonly path = 'paginated/page';
  public readonly property = 'shipments';
}
