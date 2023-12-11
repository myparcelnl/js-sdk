import {type RequestHeaders} from '@/types/request.types';
import {type NoInfer} from '@/types/global.types';

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
  response?: NoInfer<unknown[]> | PaginatedResponse<NoInfer<unknown[]>>;
}

export type CreateDefinition<D extends EndpointDefinition> = D;
