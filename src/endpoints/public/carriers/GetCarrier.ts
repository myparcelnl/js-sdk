import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {Carrier} from '@/endpoints/public/carriers/Carrier.types';
import {CarrierNameOrId} from '@myparcel/constants';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

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
  public readonly name = 'getCarrier';
  public readonly path = 'carriers/:carrier';
  public readonly property = 'carriers';
}
