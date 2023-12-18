import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type MyParcelAccountMessage} from './AccountMessages.types';

type GetAccountMessagesDefinition = CreateDefinition<{
  name: typeof GetAccountMessages.name;
  parameters: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    account_id: number;
  };
  response: MyParcelAccountMessage[];
}>;

/**
 * Retrieve system messages.
 */
export class GetAccountMessages extends AbstractPrivateEndpoint<GetAccountMessagesDefinition> {
  public readonly name = 'getAccountMessages';
  public readonly path = 'account_messages';
  public readonly property = 'messages';
}
