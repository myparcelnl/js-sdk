export type HttpMethodWithBody = 'POST' | 'PATCH' | 'PUT';
export type HttpMethodWithoutBody = 'GET' | 'OPTIONS' | 'DELETE' | 'HEAD';
export type HttpMethod = HttpMethodWithBody | HttpMethodWithoutBody;

export type RequestHeader = 'Content-Type' | 'Authorization' | 'Accept' | 'Accept-Language';
export type RequestHeaders = Record<RequestHeader | string, string>;

export interface ResponseWrapper<Data = Record<string, unknown>> {
  data: Data;
}

export interface ErrorResponse {
  message: string;
  request_id: string;
  errors: {status?: number; code: number; title?: string; message: string}[];
}

export type IdsResponse = number[];
