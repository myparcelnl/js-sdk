import {type CarrierNameOrId} from '@myparcel-dev/constants';
import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type Carrier} from '@/endpoints/public/carriers/Carrier.types';

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
