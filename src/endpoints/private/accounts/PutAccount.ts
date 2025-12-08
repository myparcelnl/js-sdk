import {type MyParcelAccount} from './Account.types';
import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PutAccountDefinition = CreateDefinition<{
  name: typeof PutAccount.name;
  path: {
    id: number;
  };
  response: MyParcelAccount[];
}>;

export class PutAccount extends AbstractPrivateEndpoint<PutAccountDefinition> {
  public readonly method: HttpMethod = 'PUT';
  public readonly name = 'putAccount';
  public readonly path = 'accounts';
  public readonly property = 'accounts';
}
