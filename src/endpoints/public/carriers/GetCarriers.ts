import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type Carrier} from '@/endpoints/public/carriers/Carrier.types';

export type GetCarriersDefinition = CreateDefinition<{
  name: typeof GetCarriers.name;
  response: Carrier[];
}>;

/**
 * Get all carriers.
 */
export class GetCarriers extends AbstractPublicEndpoint<GetCarriersDefinition> {
  public readonly name = 'getCarriers';
  public readonly path = 'carriers';
  public readonly property = 'carriers';
}
