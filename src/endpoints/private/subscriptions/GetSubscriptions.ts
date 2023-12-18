import {type MyParcelSubscription, type SubscriptionPostData} from './Subscriptions.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetSubscriptionsDefinition = CreateDefinition<{
  name: typeof GetSubscriptions.name;
  parameters: {
    id: number;
  };
  body: SubscriptionPostData[];
  response: MyParcelSubscription[];
}>;

export class GetSubscriptions extends AbstractPrivateEndpoint<GetSubscriptionsDefinition> {
  public readonly name = 'getSubscriptions';
  public readonly path = 'subscriptions';
  public readonly property = 'subscriptions';
}
