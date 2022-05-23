/**
 * Makes a property (K) in an interface (T) required.
 */
type WithRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]};
