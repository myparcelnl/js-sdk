import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type DeleteSubscriptionDefinition = CreateDefinition<{
  name: typeof DeleteSubscription.name;
  path: {
    id: number;
  };
}>;

export class DeleteSubscription extends AbstractPrivateEndpoint<DeleteSubscriptionDefinition> {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteSubscription';
  public readonly path = 'subscriptions/:id';
  public readonly property = 'subscriptions';
}
