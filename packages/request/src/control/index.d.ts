export * from './use-request'
type Awaitable<T> = T | Promise<T>
export interface RequestControlOptions {
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}
export interface ControlledRequest<TArgs extends unknown[], TResult> {
  (...args: TArgs): Promise<Awaited<TResult>>
  cancel: (reason?: string) => void
  flush: () => Promise<Awaited<TResult> | undefined>
  pending: () => boolean
}
export type RequestHandler<TArgs extends unknown[] = unknown[], TResult = unknown> = (
  ...args: TArgs
) => Awaitable<TResult>
export declare const debounceRequest: <TArgs extends unknown[], TResult>(
  handler: RequestHandler<TArgs, TResult>,
  wait: number,
  options?: RequestControlOptions
) => ControlledRequest<TArgs, TResult>
export declare const throttleRequest: <TArgs extends unknown[], TResult>(
  handler: RequestHandler<TArgs, TResult>,
  wait: number,
  options?: RequestControlOptions
) => ControlledRequest<TArgs, TResult>
