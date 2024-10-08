import {type SubscriptionCapability} from './SubscriptionCapability.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type SubscriptionType} from '@/endpoints/private/subscriptions/Subscriptions.types';

type GetSubscriptionsCapabilitiesDefinition = CreateDefinition<{
  name: typeof GetSubscriptionsCapabilities.name;
  parameters: {
    id: number;
  };
  response: Record<SubscriptionType, SubscriptionCapability[]>;
}>;

export class GetSubscriptionsCapabilities extends AbstractPrivateEndpoint<GetSubscriptionsCapabilitiesDefinition> {
  public readonly name = 'getSubscriptionsCapabilities';
  public readonly path = 'subscriptions/capabilities';
  public readonly property = 'capabilities';
}
