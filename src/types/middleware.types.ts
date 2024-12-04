import {type Interceptors} from '@/model/client/middleware/interceptors';

export type ErrInterceptor<Err, Res, Req, Options> = (
  error: Err,
  response: Res,
  request: Req,
  options: Options,
) => Err | Promise<Err>;

export type ReqInterceptor<Req, Options> = (request: Req, options: Options) => Req | Promise<Req>;

export type ResInterceptor<Res, Req, Options> = (response: Res, request: Req, options: Options) => Res | Promise<Res>;

export interface Middleware<Req, Res, Err, Options> {
  error: Pick<Interceptors<ErrInterceptor<Err, Res, Req, Options>>, 'eject' | 'use'>;
  request: Pick<Interceptors<ReqInterceptor<Req, Options>>, 'eject' | 'use'>;
  response: Pick<Interceptors<ResInterceptor<Res, Req, Options>>, 'eject' | 'use'>;
}
