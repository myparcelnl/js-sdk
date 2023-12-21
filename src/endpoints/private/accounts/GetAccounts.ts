import {type GetAccountsParams, type MyParcelAccount} from './Account.types';
import {AbstractPrivateEndpoint, type CreateDefinition, type PaginatedResponse} from '@/model';

type GetAccountsDefinition = CreateDefinition<{
  name: typeof GetAccounts.name;
  parameters: GetAccountsParams;
  response: PaginatedResponse<MyParcelAccount[]>;
}>;

export class GetAccounts extends AbstractPrivateEndpoint<GetAccountsDefinition> {
  public readonly name = 'getAccounts';
  public readonly path = 'accounts';
  public readonly property = 'accounts';
}
