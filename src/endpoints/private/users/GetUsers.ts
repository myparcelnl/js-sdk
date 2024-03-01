import {type CreateDefinition, PaginatedResponse} from '@/model/endpoint/AbstractEndpoint.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import type {PaginationParameters} from '@/types';
import type {User} from './User.types';
  
  type GetUserDefinition = CreateDefinition<{
    name: typeof GetUsers.name;
    parameters: PaginationParameters;
    response: PaginatedResponse<User[]>;
  }>;
  
  /**
   * Retrieve users. Accepts pagination parameters.
   */
  export class GetUsers extends AbstractPrivateEndpoint<GetUserDefinition> {
    public readonly name = 'getUsers';
    public readonly path = 'users';
    public readonly property = 'users';
  }
  