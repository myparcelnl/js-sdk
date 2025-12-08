import {type MyParcelApiKey} from './ApiKey.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type GetApiKeysDefinition = CreateDefinition<{
  name: typeof GetApiKeys.name;
  response: MyParcelApiKey[];
}>;

/**
 * Retrieve all API keys.
 */
export class GetApiKeys extends AbstractPrivateEndpoint<GetApiKeysDefinition> {
  public readonly name = 'getApiKeys';
  public readonly path = 'keys';
  public readonly property = 'api_keys';
}
