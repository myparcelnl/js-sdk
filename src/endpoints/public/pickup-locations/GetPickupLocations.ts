import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {DeliveryOptionsParameters} from '@/endpoints';
import {HttpMethod} from '@/types/request.types';
import {PickupLocation} from '@/endpoints/public/pickup-locations/PickupLocation.types';

export type GetPickupLocationsDefinition = CreateDefinition<{
  name: typeof GetPickupLocations.name;
  // Uses the exact same parameters as get delivery options.
  parameters: DeliveryOptionsParameters;
  response: PickupLocation[];
}>;

/**
 * Get available pickup locations for given location.
 */
export class GetPickupLocations extends AbstractPublicEndpoint<GetPickupLocationsDefinition> {
  public readonly name = 'getPickupLocations';
  public readonly path = 'pickup_locations';
  public readonly property = 'pickup_locations';
}
