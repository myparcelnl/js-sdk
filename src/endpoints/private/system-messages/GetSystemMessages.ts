import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type MyParcelSystemMessage} from './SystemMessage.types';

type GetSystemMessagesDefinition = CreateDefinition<{
  name: typeof GetSystemMessages.name;
  response: MyParcelSystemMessage[];
}>;

/**
 * Retrieve system messages.
 */
export class GetSystemMessages extends AbstractPrivateEndpoint<GetSystemMessagesDefinition> {
  public readonly name = 'getSystemMessages';
  public readonly path = 'system_messages';
  public readonly property = 'messages';
}
