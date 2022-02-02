import {MyParcelSdk, createMyParcelSdk} from '@/createMyParcelSdk';
import {AbstractClient} from '@/model/client/AbstractClient';
import {AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';

/**
 * Create a public SDK which does not require Authorization headers and can be used in a browser.
 */
export const createPublicSdk = <E extends AbstractPublicEndpoint>(
  client: AbstractClient,
  endpoints: E[],
): MyParcelSdk<E> => createMyParcelSdk<E>(client, endpoints);
