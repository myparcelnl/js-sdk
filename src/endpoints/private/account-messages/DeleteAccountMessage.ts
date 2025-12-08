import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type DeleteAccountMessageDefinition = CreateDefinition<{
  name: typeof DeleteAccountMessage.name;
  path: {
    id: number;
  };
}>;

/**
 * Deletes one system message by ID.
 */
export class DeleteAccountMessage extends AbstractPrivateEndpoint<DeleteAccountMessageDefinition> {
  public readonly method: HttpMethod = 'DELETE';
  public readonly name = 'deleteAccountMessage';
  public readonly path = 'account_messages/:id';
  public readonly property = 'messages';
}
