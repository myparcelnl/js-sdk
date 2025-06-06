import {type Middleware} from './middleware.types';

export class Interceptors<T> {
  public fns: Middleware<T>[];

  public constructor() {
    this.fns = [];
  }

  public delete(fn: Middleware<T>): void {
    const index = this.fns.indexOf(fn);

    if (index !== -1) {
      this.fns = [...this.fns.slice(0, index), ...this.fns.slice(index + 1)];
    }
  }

  public use(fn: Middleware<T>): void {
    this.fns = [...this.fns, fn];
  }
}
