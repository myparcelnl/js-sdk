import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';
import {MyParcelShipment} from '@/endpoints';

type GetShipmentDefinition = CreateDefinition<{
  name: typeof GetShipment.name;
  path: {
    id: number;
  };
  response: [MyParcelShipment];
}>;

/**
 * Retrieve a single shipment by ID.
 */
export class GetShipment extends AbstractPrivateEndpoint<GetShipmentDefinition> {
  public readonly name = 'getShipment';
  public readonly path = 'shipments/:id';
  public readonly property = 'shipments';
}
