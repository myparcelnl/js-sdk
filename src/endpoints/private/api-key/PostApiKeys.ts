import {type ApiKeyPostData, type MyParcelApiKey} from './ApiKey.types';
import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PostApiKeyDefinition = CreateDefinition<{
  name: typeof PostApiKeys.name;
  body: ApiKeyPostData[];
  response: MyParcelApiKey[];
}>;

/**
 * Submit a single new key.
 */
export class PostApiKeys extends AbstractPrivateEndpoint<PostApiKeyDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postApiKeys';
  public readonly path = 'keys';
  public readonly property = 'api_keys';
}
