import {EndpointResponse, Options, OptionsWithoutBody} from '@/model/client/AbstractClient.types';
import {AbstractClient} from '@/model/client/AbstractClient';
import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {UserException} from '@/model';

type EndpointMethod<E extends AbstractEndpoint> = (options?: Options<E>) => Promise<EndpointResponse<E>>;

export type MyParcelSdk<E extends AbstractEndpoint> = {
  [K in E['name']]: EndpointMethod<Extract<E, {name: K}>>;
};

/**
 * Create a sdk instance with a client and given endpoints.
 */
export function createMyParcelSdk<E extends AbstractEndpoint>(client: AbstractClient, endpoints: E[]): MyParcelSdk<E> {
  if (!endpoints.length) {
    throw new UserException('At least one endpoint must be passed.');
  }

  return endpoints.reduce(
    (acc, endpoint) => ({
      ...acc,
      [endpoint.name]: async (options?: OptionsWithoutBody<E>): Promise<EndpointResponse<E>> => {
        return client.doRequest(endpoint, options ?? {});
      },
    }),
    {} as MyParcelSdk<E>,
  );
}
