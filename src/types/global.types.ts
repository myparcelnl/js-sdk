export type NoInfer<T> = [T][T extends never ? 0 : never];
export type WithRequired<T, K extends keyof T> = T & {[P in K]-?: T[P]};
