import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {PublicGetEndpoints} from '@/endpoints/public/PublicGetEndpoints';

export abstract class AbstractPublicEndpoint<D = EndpointDefinition> extends AbstractEndpoint<D> {
  public abstract readonly name: PublicGetEndpoints | string;
}
