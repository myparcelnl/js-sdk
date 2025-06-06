import {describe, expect, it, vi} from 'vitest';
import {Interceptors} from './Interceptors';

describe('Interceptors', () => {
  it('should add middleware functions', () => {
    const interceptor = new Interceptors<number>();
    const fn1 = vi.fn();
    const fn2 = vi.fn();

    interceptor.use(fn1);
    interceptor.use(fn2);

    expect(interceptor.fns).toHaveLength(2);
    expect(interceptor.fns).toContain(fn1);
    expect(interceptor.fns).toContain(fn2);
  });

  it('should remove middleware functions', () => {
    const interceptor = new Interceptors<number>();
    const fn1 = vi.fn();
    const fn2 = vi.fn();

    interceptor.use(fn1);
    interceptor.use(fn2);

    expect(interceptor.fns).toHaveLength(2);
    expect(interceptor.fns).toContain(fn1);
    expect(interceptor.fns).toContain(fn2);

    interceptor.delete(fn1);
    expect(interceptor.fns).toHaveLength(1);
    expect(interceptor.fns).not.toContain(fn1);
    expect(interceptor.fns).toContain(fn2);
  });

  it('should run the middleware functions in order', async () => {
    const interceptor = new Interceptors<number>();
    const fn1 = vi.fn((value: number) => value + 1);
    const fn2 = vi.fn((value: number) => value * 2);

    interceptor.use(fn1);
    interceptor.use(fn2);

    let result = 5;
    for (const fn of interceptor.fns) {
      result = await fn(result);
    }

    expect(fn1).toHaveBeenCalledWith(5);
    expect(fn2).toHaveBeenCalledWith(6);
    expect(result).toBe(12);
  });
});
