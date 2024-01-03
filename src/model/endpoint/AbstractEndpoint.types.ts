import {type RequestHeaders} from '@/types/request.types';
import {type NoInfer} from '@/types/global.types';
import { type OneOrMore } from '@myparcel/ts-utils';

type Pagination = {
  page?: number;
  size?: number;
  results?: number;
};

export type PaginatedResponse<T> = Pagination & Record<string, T>;

export interface EndpointDefinition {
  name: string;
  body?: NoInfer<unknown>;
  headers?: RequestHeaders;
  parameters?: NoInfer<Record<string, string | number | boolean>>;
  path?: Record<string, string | number>;
  response?: NoInfer<OneOrMore<unknown>> | PaginatedResponse<NoInfer<unknown[]>>;
  timeout?: number;
}

export type CreateDefinition<D extends EndpointDefinition> = D;
