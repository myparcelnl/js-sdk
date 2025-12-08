import {type MyParcelShop} from './Shop.types';
import {type HttpMethod} from '@/types/request.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PostShopDefinition = CreateDefinition<{
  name: typeof PostShop.name;
  body: MyParcelShop[];
  response: {id: number}[];
}>;

/**
 * Create a shop.
 */
export class PostShop extends AbstractPrivateEndpoint<PostShopDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postShop';
  public readonly path = 'shops/duplicate';
  public readonly property = 'shops';
  public readonly responseProperty = 'ids';
}
