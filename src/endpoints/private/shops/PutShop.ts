import {type MyParcelShop} from './Shop.types';
import {type HttpMethod} from '@/types/request.types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PutShopDefinition = CreateDefinition<{
  name: typeof PutShop.name;
  body: MyParcelShop[];
  response: MyParcelShop[];
}>;

export class PutShop extends AbstractPrivateEndpoint<PutShopDefinition> {
  public readonly method: HttpMethod = 'PUT';
  public readonly name = 'putShop';
  public readonly path = 'shops';
  public readonly property = 'shops';
}
