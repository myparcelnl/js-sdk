import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {DeliveryOptionsParameters} from '@/endpoints';
import {HttpMethod} from '@/types/request.types';
import {PickupLocation} from '@/endpoints/public/pickup-locations/PickupLocation.types';
import {PublicGetEndpoints} from '@/endpoints/public/PublicGetEndpoints';

export type GetPickupLocationsDefinition = CreateDefinition<{
  // Uses the exact same parameters as get delivery options.
  parameters: DeliveryOptionsParameters;
  response: PickupLocation[];
}>;

/**
 * Get available pickup locations for given location.
 */
export class GetPickupLocations extends AbstractPublicEndpoint<GetPickupLocationsDefinition> {
  public readonly method: HttpMethod = 'GET';
  public readonly name = PublicGetEndpoints.GET_PICKUP_LOCATIONS;
  public readonly path = 'pickup_locations';
  public readonly property = 'pickup_locations';
}
