import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {Carrier} from '@/endpoints/public/carriers/Carrier.types';
import {CarrierNameOrId} from '@/types/myparcel.types';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';
import {PublicGetEndpoints} from '@/endpoints/public/PublicGetEndpoints';

export type GetCarrierDefinition = CreateDefinition<{
  path: {
    carrier: CarrierNameOrId;
  };
  response: [Carrier];
}>;

/**
 * Get a single carrier.
 */
export class GetCarrier extends AbstractPublicEndpoint<GetCarrierDefinition> {
  public readonly method: HttpMethod = 'GET';
  public readonly name = PublicGetEndpoints.GET_CARRIER;
  public readonly path = 'carriers/:carrier';
  public readonly property = 'carriers';
}
