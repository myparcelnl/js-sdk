import {type AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';
import {type AbstractClient} from '@/model/client/AbstractClient';
import {type MyParcelSdk, createMyParcelSdk} from '@/createMyParcelSdk';

/**
 * Create a private SDK which requires an Authorization header on all its endpoints.
 */
export const createPrivateSdk = <E extends AbstractPrivateEndpoint>(
  client: AbstractClient,
  endpoints: E[],
): MyParcelSdk<E> => {
  client.requiredHeaders = ['Authorization'];

  return createMyParcelSdk<E>(client, endpoints);
};
