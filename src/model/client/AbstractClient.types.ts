import {RequestHeaders, ResponseWrapper} from '@/types/request.types';
import {AbstractClient} from '@/model/client/AbstractClient';
import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';

interface ClientPlugin {
  getClient?: () => void;
  init?: (client: AbstractClient) => void;
  transformRequest?: () => void;
  transformResponse?: <Endpoint extends AbstractEndpoint>(
    response: ResponseWrapper<EndpointResponseBody<Endpoint>>,
  ) => ResponseWrapper<EndpointResponseBody<Endpoint>>;
}

type PluginConstructor = (client: AbstractClient) => ClientPlugin;

export interface ClientConfig {
  baseUrl?: string;
  headers?: RequestHeaders;
  plugins?: PluginConstructor[];
}

export type ClientRequest = <E extends AbstractEndpoint>(
  endpoint: E,
  options: OptionsWithoutBody<E> | OptionsWithBody<E>,
) => Promise<ResponseWrapper<EndpointResponseBody<E>>>;

export type EndpointParameters<E extends AbstractEndpoint> = E['definition']['parameters'];
export type EndpointPath<E extends AbstractEndpoint> = E['definition']['path'];
export type EndpointResponse<E extends AbstractEndpoint> = E['definition']['response'];
export type EndpointBody<E extends AbstractEndpoint> = E['definition']['body'];

export type EndpointResponseProperty<E extends AbstractEndpoint> = E['responseProperty'] extends string
  ? E['responseProperty']
  : E['property'];

export type EndpointResponseBody<E extends AbstractEndpoint> = Record<EndpointResponseProperty<E>, EndpointResponse<E>>;

export interface OptionsWithBody<E extends AbstractEndpoint> {
  body?: EndpointBody<E>;
  headers?: RequestHeaders;
  parameters?: EndpointParameters<E>;
  path?: EndpointPath<E>;
}

export type OptionsWithoutBody<E extends AbstractEndpoint> = Omit<OptionsWithBody<E>, 'body'>;
