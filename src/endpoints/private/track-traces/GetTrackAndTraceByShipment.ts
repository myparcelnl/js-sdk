import {type TrackAndTrace} from './TrackTraces.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetTrackAndTraceDefinition = CreateDefinition<{
  name: typeof GetTrackAndTrace.name;
  response: TrackAndTrace[];
  path: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    shipment_id: string;
  };
}>;

export class GetTrackAndTrace extends AbstractPrivateEndpoint<GetTrackAndTraceDefinition> {
  public readonly name = 'getTrackAndTrace';
  public readonly path = 'tracktraces/:shipment_id';
  public readonly property = 'tracktraces';
}
