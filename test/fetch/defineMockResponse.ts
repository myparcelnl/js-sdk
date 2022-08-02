import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {EndpointResponseBody} from '@/model/client/AbstractClient.types';
import {ResponseWrapper} from '@/types/request.types';

export interface MockedResponse<E = unknown> extends ResponseInit {
  body?: E extends AbstractEndpoint ? ResponseWrapper<EndpointResponseBody<E>> : Record<string, unknown> | undefined;
}

export interface MockResponse<E> {
  match(url: string, init?: RequestInit): boolean;
  response(): MockedResponse<E>;
}

export const defineMockResponse = <E>(responseObject: MockResponse<E>): MockResponse<E> => {
  return responseObject;
};
