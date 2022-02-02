import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {Carrier} from '@/endpoints/public/carriers/Carrier.types';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {HttpMethod} from '@/types/request.types';
import {PublicGetEndpoints} from '@/endpoints/public/PublicGetEndpoints';

export type GetCarriersDefinition = CreateDefinition<{
  response: Carrier[];
}>;

/**
 * Get all carriers.
 */
export class GetCarriers extends AbstractPublicEndpoint<GetCarriersDefinition> {
  public readonly method: HttpMethod = 'GET';
  public readonly name = PublicGetEndpoints.GET_CARRIERS;
  public readonly path = 'carriers';
  public readonly property = 'carriers';
}
