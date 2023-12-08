import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type HttpMethod} from '@/types';
import {type SubscriptionPatchData} from './Subscriptions.types';

type PatchSubscriptionsDefinition = CreateDefinition<{
  name: typeof PatchSubscriptions.name;
  body: SubscriptionPatchData[];
  response: {
    id: number;
  }[];
}>;

export class PatchSubscriptions extends AbstractPrivateEndpoint<PatchSubscriptionsDefinition> {
  public readonly method: HttpMethod = 'PATCH';
  public readonly name = 'patchSubscriptions';
  public readonly path = 'subscriptions';
  public readonly property = 'subscriptions';
  public readonly responseProperty = 'ids';
}
