import {type MyParcelWebhook, type WebhookSubscriptionParameters} from './Webhook.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetWebhookSubscriptionsDefinition = CreateDefinition<{
  name: typeof GetWebhookSubscriptions.name;
  parameters: WebhookSubscriptionParameters;
  response: MyParcelWebhook[];
}>;

export class GetWebhookSubscriptions extends AbstractPrivateEndpoint<GetWebhookSubscriptionsDefinition> {
  public readonly name = 'getWebhookSubscriptions';
  public readonly path = 'webhook_subscriptions';
  public readonly property = 'webhook_subscriptions';
}
