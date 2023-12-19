import {AbstractPublicEndpoint} from '@/model';

export class TestGetPaginatedResultsEndpoint extends AbstractPublicEndpoint {
  public readonly name = 'getPaginatedResultsEndpoint';
  public readonly path = 'paginated/results';
  public readonly property = 'shipments';
}
