import {type HttpMethod, type RequestHeaders} from '@/types/request.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type PostedShipmentReference, type ShipmentPostData} from '@/endpoints/private/shipments/Shipment.types';

type PostShipmentsDefinition = CreateDefinition<{
  name: typeof PostShipments.name;
  body: ShipmentPostData[];
  response: PostedShipmentReference[];
}>;

/**
 * Create a shipment.
 *
 * @see https://developer.myparcel.nl/api-reference/06.shipments.html
 */
export class PostShipments extends AbstractPrivateEndpoint<PostShipmentsDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postShipments';
  public readonly path = 'shipments';
  public readonly property = 'shipments';
  public readonly responseProperty = 'ids';

  public getHeaders(): RequestHeaders {
    return {
      ...super.getHeaders(),
      'Content-Type': 'application/vnd.shipment+json;charset=utf-8;version=1.1',
    };
  }
}
