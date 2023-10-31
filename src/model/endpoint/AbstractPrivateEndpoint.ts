import {type RequestHeaders} from '@/types/request.types';
import {type EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';

type PrivateEndpointDefinition = {
  headers: RequestHeaders & {Authorization: string};
};

type Private<D = EndpointDefinition> = D & PrivateEndpointDefinition;

export abstract class AbstractPrivateEndpoint<D = EndpointDefinition> extends AbstractEndpoint<Private<D>> {
  public abstract readonly name: AbstractPrivateEndpoint['definition']['name'];
}
