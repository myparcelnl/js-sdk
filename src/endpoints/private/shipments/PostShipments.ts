import {HttpMethod, IdsResponse} from '@/types/request.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {PrivatePostEndpoints} from '@/endpoints/private/PrivatePostEndpoints';
import {ShipmentPostData} from '@/endpoints/private/shipments/Shipment.types';

type PostShipmentsDefinition = CreateDefinition<{
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
  public readonly name = PrivatePostEndpoints.POST_SHIPMENTS;
  public readonly path = 'shipments';
  public readonly property = 'ids';
}
