import {AbstractPrivateEndpoint, type CreateDefinition, type HttpMethod} from '@myparcel/sdk';
import {type SubscriptionProductId} from './Subscriptions.types';


type PostSubscriptionsDefinition = CreateDefinition<{
  name: typeof PostSubscriptions.name;
  body: PostSubscription[];
  response: {
    id: number;
  }[];
}>;

export class PostSubscriptions extends AbstractPrivateEndpoint<PostSubscriptionsDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postSubscriptions';
  public readonly path = 'subscriptions';
  public readonly property = 'subscriptions';
  public readonly responseProperty = 'ids';
}
