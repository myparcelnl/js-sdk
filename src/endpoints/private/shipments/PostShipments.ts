import {HttpMethod, IdsResponse} from '@/types/request.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {ShipmentPostData} from '@/endpoints/private/shipments/Shipment.types';

type PostShipmentsDefinition = CreateDefinition<{
  name: typeof PostShipments.name;
  body: ShipmentPostData[];
  response: IdsResponse;
}>;

/**
 * Create a shipment.
 *
 * @see https://myparcelnl.github.io/api/#6_B
 */
export class PostShipments extends AbstractPrivateEndpoint<PostShipmentsDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postShipments';
  public readonly path = 'shipments';
  public readonly property = 'ids';
}
