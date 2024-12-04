import {type ErrInterceptor, type ReqInterceptor, type ResInterceptor} from '@/types/middleware.types';

export class Interceptors<Interceptor> {
  private _fns: Interceptor[];

  public constructor() {
    this._fns = [];
  }

  public clear(): void {
    this._fns = [];
  }

  public exists(fn: Interceptor): boolean {
    return this._fns.includes(fn);
  }

  public eject(fn: Interceptor): void {
    const index = this._fns.indexOf(fn);

    if (index !== -1) {
      this._fns = [...this._fns.slice(0, index), ...this._fns.slice(index + 1)];
    }
  }

  public use(fn: Interceptor): void {
    this._fns = [...this._fns, fn];
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createInterceptors = <Req, Res, Err, Options>() => ({
  error: new Interceptors<ErrInterceptor<Err, Res, Req, Options>>(),
  request: new Interceptors<ReqInterceptor<Req, Options>>(),
  response: new Interceptors<ResInterceptor<Res, Req, Options>>(),
});
