import {CreateDefinition, PaginatedResponse} from '@/model/endpoint/AbstractEndpoint.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {MyParcelShipment} from '@/endpoints';
import {PaginationParameters} from '@/types';

type Parameters = PaginationParameters & {
  carrier?: number;
  hidden?: boolean;
};

type GetShipmentsDefinition = CreateDefinition<{
  name: typeof GetShipments.name;
  parameters: Parameters;
  response: PaginatedResponse<MyParcelShipment[]>;
}>;

/**
 * Retrieve all shipments, or a paginated subset.
 */
export class GetShipments extends AbstractPrivateEndpoint<GetShipmentsDefinition> {
  public readonly name = 'getShipments';
  public readonly path = 'shipments';
  public readonly property = 'shipments';
}
