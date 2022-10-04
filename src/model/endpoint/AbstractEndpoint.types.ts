import {NoInfer} from '@/types/global.types';
import {RequestHeaders} from '@/types/request.types';

export interface PaginatedResponse<T> {
  [key: string]: undefined | number | T;
  page?: number;
  size?: number;
  results?: number;
}

export interface EndpointDefinition {
  name: string;
  body?: NoInfer<unknown>;
  headers?: RequestHeaders;
  parameters?: NoInfer<Record<string, string | number | boolean>>;
  path?: Record<string, string | number>;
  response?: NoInfer<unknown[]> | PaginatedResponse<NoInfer<unknown[]>>;
}

export type CreateDefinition<D extends EndpointDefinition> = D;
