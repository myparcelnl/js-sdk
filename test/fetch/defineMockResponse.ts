import {type ResponseWrapper} from '@/types/request.types';
import {type AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {type EndpointResponseBody} from '@/model/client/AbstractClient.types';

export interface MockedResponse<E = unknown> extends ResponseInit {
  body?: E extends AbstractEndpoint
    ? ResponseWrapper<EndpointResponseBody<E>>
    : Record<string, unknown> | string | undefined;
}

export interface MockResponse<E> {
  match(url: string, init?: RequestInit): boolean;
  response(): MockedResponse<E> | Promise<MockedResponse<E>>;
}

export const defineMockResponse = <E>(responseObject: MockResponse<E>): MockResponse<E> => {
  return responseObject;
};
