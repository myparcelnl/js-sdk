import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';
import {MyParcelShipment} from '@/endpoints';
import {PaginationParameters} from '@/types';

type Parameters = PaginationParameters & {
  hidden: boolean;
};

type GetShipmentsDefinition = CreateDefinition<{
  name: typeof GetShipments.name;
  parameters: Parameters;
  response: MyParcelShipment[];
}>;

/**
 * Retrieve all shipments, or a paginated subset.
 */
export class GetShipments extends AbstractPrivateEndpoint<GetShipmentsDefinition> {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getShipments';
  public readonly path = 'shipments';
  public readonly property = 'shipments';
}
