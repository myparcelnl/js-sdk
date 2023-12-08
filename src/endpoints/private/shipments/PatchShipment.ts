import {type HttpMethod, type RequestHeaders} from '@/types/request.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type ShipmentPatchData} from '@/endpoints/private/shipments/Shipment.types';

type PatchShipmentsDefinition = CreateDefinition<{
  name: typeof PatchShipments.name;
  body: ShipmentPatchData[];
}>;

/**
 * Patch an existing shipment.
 *
 * @see https://developer.myparcel.nl/api-reference/06.shipments.html
 */
export class PatchShipments extends AbstractPrivateEndpoint<PatchShipmentsDefinition> {
  public readonly method: HttpMethod = 'PATCH';
  public readonly name = 'patchShipments';
  public readonly path = 'shipments';
  public readonly property = 'shipments';

  public getHeaders(): RequestHeaders {
    return {
      ...super.getHeaders(),
      'Content-Type': 'application/vnd.shipment+json;charset=utf-8;version=1.1',
    };
  }
}
