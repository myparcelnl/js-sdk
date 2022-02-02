import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';
import {MyParcelShipment} from '@/endpoints';
import {PrivateGetEndpoints} from '@/endpoints/private/PrivateGetEndpoints';

type GetShipmentDefinition = CreateDefinition<{
  path: {
    id: number;
  };
  response: [MyParcelShipment];
}>;

/**
 * Retrieve a single shipment by ID.
 */
export class GetShipment extends AbstractPrivateEndpoint<GetShipmentDefinition> {
  public readonly method: HttpMethod = 'GET';
  public readonly name = PrivateGetEndpoints.GET_SHIPMENT;
  public readonly path = 'shipments/:id';
  public readonly property = 'shipments';
}
