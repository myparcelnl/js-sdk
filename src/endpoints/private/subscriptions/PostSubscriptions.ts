import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type HttpMethod} from '@/types';
import {SubscriptionPostData} from './Subscriptions.types';

type PostSubscriptionsDefinition = CreateDefinition<{
  name: typeof PostSubscriptions.name;
  body: SubscriptionPostData[];
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
