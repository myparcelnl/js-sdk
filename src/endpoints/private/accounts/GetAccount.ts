import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type MyParcelAccount} from './Account.types';

type GetAccountDefinition = CreateDefinition<{
  name: typeof GetAccount.name;
  path: {
    id: number;
  };
  response: [MyParcelAccount];
}>;

/**
 * Retrieve a single account object by ID.
 */
export class GetAccount extends AbstractPrivateEndpoint<GetAccountDefinition> {
  public readonly name = 'getAccount';
  public readonly path = 'accounts/:id';
  public readonly property = 'accounts';
}
