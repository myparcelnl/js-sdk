import {type RequestHeaders, type ResponseWrapper} from '@/types/request.types';
import {type AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {type AbstractClient} from '@/model/client/AbstractClient';

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
  parameters?: Record<string, string>;
  plugins?: PluginConstructor[];
  options?: ClientOptions;
}

export interface ClientOptions {
  timeout?: number;
  [key: string]: unknown;
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
  : E['property'] extends string
  ? E['property']
  : never;

type EndpointResponseBodyWrapper<E extends AbstractEndpoint> = EndpointResponseProperty<E>;

type Page = 'page' | 'size' | 'results';

export type EndpointResponseBody<E extends AbstractEndpoint> = {
  [key in EndpointResponseBodyWrapper<E>]: EndpointResponse<E>;
} & {
  [key in Page]?: number;
};

export interface OptionsWithBody<E extends AbstractEndpoint> {
  body?: EndpointBody<E>;
  headers?: RequestHeaders;
  parameters?: EndpointParameters<E>;
  path?: EndpointPath<E>;
  timeout?: number;
}

export type OptionsWithoutBody<E extends AbstractEndpoint> = Omit<OptionsWithBody<E>, 'body'>;

export type Options<E extends AbstractEndpoint> = OptionsWithBody<E> | OptionsWithoutBody<E>;
