import {type HttpMethod} from '@/types';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type CarrierOptionPostData} from './CarrierOption.types';
import {type CreateDefinition} from '@/model/endpoint/AbstractEndpoint.types';

type PostCarrierOptionsDefinition = CreateDefinition<{
  name: typeof PostCarrierOptions.name;
  body: CarrierOptionPostData[];
  response: {id: number}[];
}>;

export class PostCarrierOptions extends AbstractPrivateEndpoint<PostCarrierOptionsDefinition> {
  public readonly method: HttpMethod = 'POST';
  public readonly name = 'postCarrierOptions';
  public readonly path = 'accounts/:account_id/carrier_options';
  public readonly property = 'carrier_options';
  public readonly responseProperty = 'ids';
}
