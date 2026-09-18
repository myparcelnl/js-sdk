import {type RequestHeaders} from '@/types/request.types';
import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type PickupLocation} from '@/endpoints/public/pickup-locations/PickupLocation.types';
import {type DeliveryOptionsParameters} from '@/endpoints';

export type GetPickupLocationsDefinition = CreateDefinition<{
  name: typeof GetPickupLocations.name;
  // Uses the exact same parameters as get delivery options.
  parameters: DeliveryOptionsParameters;
  response: PickupLocation[];
}>;

/**
 * Get available pickup locations for given location. Note: This calls version 2 of the endpoint.
 */
export class GetPickupLocations extends AbstractPublicEndpoint<GetPickupLocationsDefinition> {
  public readonly name = 'getPickupLocations';
  public readonly path = 'pickup_locations';
  public readonly property = 'pickup_locations';

  public getHeaders(): RequestHeaders {
    return {...super.getHeaders(), Accept: 'application/json;version=2.0'};
  }
}
