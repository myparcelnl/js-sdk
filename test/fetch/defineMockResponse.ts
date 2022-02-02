import {AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {EndpointResponseBody} from '@/model/client/AbstractClient.types';
import {ResponseWrapper} from '@/types/request.types';

export interface MockResponse<E> {
  match(url: string, init?: RequestInit): boolean;
  response(): E extends AbstractEndpoint ? ResponseWrapper<EndpointResponseBody<E>> : Record<string, unknown>;
}

export const defineMockResponse = <E>(responseObject: MockResponse<E>): MockResponse<E> => {
  return responseObject;
};
