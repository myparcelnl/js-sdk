import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {PrivateGetEndpoints} from '@/endpoints/private/PrivateGetEndpoints';
import {PrivatePostEndpoints} from '@/endpoints/private/PrivatePostEndpoints';
import {RequestHeaders} from '@/types/request.types';

type PrivateEndpointDefinition = {
  headers: RequestHeaders & {Authorization: string};
};

type Private<D = EndpointDefinition> = D & PrivateEndpointDefinition;

export abstract class AbstractPrivateEndpoint<D = EndpointDefinition> extends AbstractEndpoint<Private<D>> {
  public abstract readonly name: PrivateGetEndpoints | PrivatePostEndpoints | string;
}
