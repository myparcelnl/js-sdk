import {type AbstractPublicEndpoint} from '@/model/endpoint/AbstractPublicEndpoint';
import {type AbstractClient} from '@/model/client/AbstractClient';
import {type MyParcelSdk, createMyParcelSdk} from '@/createMyParcelSdk';

/**
 * Create a public SDK which does not require Authorization headers and can be used in a browser.
 */
export const createPublicSdk = <E extends AbstractPublicEndpoint>(
  client: AbstractClient,
  endpoints: E[],
): MyParcelSdk<E> => createMyParcelSdk<E>(client, endpoints);
