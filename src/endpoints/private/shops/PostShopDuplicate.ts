import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {type HttpMethod} from '@/types/request.types';
import {type DuplicateShop} from './Shop.types';

type PostShopDuplicateDefinition = CreateDefinition<{
  name: typeof PostShopDuplicate.name;
  body: DuplicateShop[];
  response: {ids: [{id: number}]};
}>;

/**
 * The PostShopDuplicate endpoint is used to add a new shop.
 */
export class PostShopDuplicate extends AbstractPrivateEndpoint<PostShopDuplicateDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postShopDuplicate';
  public readonly path = 'shops/duplicate';
  public readonly property = 'ids';
}
