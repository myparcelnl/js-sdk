import {MyParcelSdk, createMyParcelSdk} from '@/createMyParcelSdk';
import {AbstractClient} from '@/model/client/AbstractClient';
import {AbstractPrivateEndpoint} from '@/model/endpoint/AbstractPrivateEndpoint';

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
