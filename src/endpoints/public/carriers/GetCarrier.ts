import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {Carrier} from '@/endpoints/public/carriers/Carrier.types';
import {CarrierNameOrId} from '@/types/myparcel.types';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';

export type GetCarrierDefinition = CreateDefinition<{
  name: typeof GetCarrier.name;
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
  public readonly name = 'getCarrier';
  public readonly path = 'carriers/:carrier';
  public readonly property = 'carriers';
}
