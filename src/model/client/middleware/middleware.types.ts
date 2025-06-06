export type Middleware<T> = (value: T) => T | Promise<T>;
