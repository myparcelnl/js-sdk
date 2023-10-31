import {type EndpointDefinition} from '@/model/endpoint/AbstractEndpoint.types';
import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';

export abstract class AbstractPublicEndpoint<D = EndpointDefinition> extends AbstractEndpoint<D> {
  public abstract readonly name: AbstractPublicEndpoint['definition']['name'];
}
