import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type DeleteWebhookSubscriptionsDefinition = CreateDefinition<{
  name: typeof DeleteWebhookSubscriptions.name;
  path: {
    ids: string;
  };
}>;

export class DeleteWebhookSubscriptions extends AbstractPrivateEndpoint<DeleteWebhookSubscriptionsDefinition> {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteWebhookSubscriptions';
  public readonly path = 'webhook_subscriptions/:ids';
  public readonly property = 'webhook_subscriptions';
}
