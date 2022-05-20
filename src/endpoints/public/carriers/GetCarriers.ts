import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {Carrier} from '@/endpoints/public/carriers/Carrier.types';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';

export type GetCarriersDefinition = CreateDefinition<{
  name: typeof GetCarriers.name;
  response: Carrier[];
}>;

/**
 * Get all carriers.
 */
export class GetCarriers extends AbstractPublicEndpoint<GetCarriersDefinition> {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getCarriers';
  public readonly path = 'carriers';
  public readonly property = 'carriers';
}
