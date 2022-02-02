import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {PrivateGetEndpoints} from '@/endpoints/private/PrivateGetEndpoints';
import {PrivatePostEndpoints} from '@/endpoints/private/PrivatePostEndpoints';
import {RequestHeaders} from '@/types/request.types';

type PrivateEndpointDefinition = {
  headers: RequestHeaders & {Authorization: string};
};

export abstract class AbstractPrivateEndpoint<D = EndpointDefinition> extends AbstractEndpoint<
  D & PrivateEndpointDefinition
> {
  public abstract readonly name: PrivateGetEndpoints | PrivatePostEndpoints;
}
