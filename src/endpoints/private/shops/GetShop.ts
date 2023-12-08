import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type MyParcelShop} from './Shop.types';

type GetShopDefinition = CreateDefinition<{
  name: typeof GetShop.name;
  path: {
    id: number;
  };
  response: MyParcelShop[];
}>;

/**
 * Retrieve a single shop by ID.
 */
export class GetShop extends AbstractPrivateEndpoint<GetShopDefinition> {
  public readonly name = 'getShop';
  public readonly path = 'shops/:id';
  public readonly property = 'shops';
}
