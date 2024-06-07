import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import type {CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import type {User} from './User.types';

type GetUserDefinition = CreateDefinition<{
  name: typeof GetUser.name;
  response: User[];
}>;

/**
 * Retrieve single user by id. The endpoint can be called with multiple ids, separated by semicolon.
 */
export class GetUser extends AbstractPrivateEndpoint<GetUserDefinition> {
  public readonly name = 'getUser';
  public readonly path = 'users/:id';
  public readonly property = 'users';
}
