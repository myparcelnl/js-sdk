import {type LocationParameters, type MyParcelLocation} from './Location.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetLocationsDefinition = CreateDefinition<{
  name: typeof GetLocations.name;
  parameters: LocationParameters;
  response: MyParcelLocation[];
}>;

export class GetLocations extends AbstractPrivateEndpoint<GetLocationsDefinition> {
  public readonly name = 'getLocations';
  public readonly path = 'locations';
  public readonly property = 'locations';
}
