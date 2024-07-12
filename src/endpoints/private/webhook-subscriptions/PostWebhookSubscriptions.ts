import {type MyParcelWebhook} from './Webhook.types';
import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PostWebhookSubscriptionsDefinition = CreateDefinition<{
  name: typeof PostWebhookSubscriptions.name;
  body: MyParcelWebhook[];
  response: {
    id: number[];
  };
}>;

export class PostWebhookSubscriptions extends AbstractPrivateEndpoint<PostWebhookSubscriptionsDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postWebhookSubscriptions';
  public readonly path = 'webhook_subscriptions';
  public readonly property = 'webhook_subscriptions';
  public readonly responseProperty = 'ids';
}
