import { type ComputedRef, type ShallowRef } from 'vue'
type Awaitable<T> = T | Promise<T>
export type RequestStrategy = 'latest' | 'parallel' | 'block'
export type RequestService<TArgs extends unknown[] = unknown[], TResult = unknown> = (
  ...args: TArgs
) => Awaitable<TResult>
export interface UseRequestOptions<TData, TArgs extends unknown[]> {
  defaultData?: TData
  strategy?: RequestStrategy
  onSuccess?: (data: Awaited<TData>, params: TArgs) => void
  onError?: (error: unknown, params: TArgs) => void
  onFinally?: (params: TArgs) => void
}
export interface UseRequestResult<TData, TArgs extends unknown[]> {
  loading: ComputedRef<boolean>
  data: ShallowRef<Awaited<TData> | undefined>
  error: ShallowRef<unknown>
  run: (...args: TArgs) => Promise<Awaited<TData>>
  refresh: () => Promise<Awaited<TData>>
  cancel: (reason?: string) => void
  reset: () => void
}
export declare class RequestCanceledError extends Error {
  constructor(message?: string)
}
export declare const useRequest: <TArgs extends unknown[], TData>(
  service: RequestService<TArgs, TData>,
  options?: UseRequestOptions<TData, TArgs>
) => UseRequestResult<TData, TArgs>
export {}
