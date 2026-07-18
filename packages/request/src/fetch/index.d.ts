import { HttpError, type HttpErrorDescriptor } from '../http'
type FetchPrimitive = string | number | boolean
type FetchQueryValue =
  | FetchPrimitive
  | null
  | undefined
  | FetchPrimitive[]
  | readonly FetchPrimitive[]
export type FetchResponseType =
  | 'auto'
  | 'json'
  | 'text'
  | 'blob'
  | 'arrayBuffer'
  | 'formData'
  | 'raw'
export type FetchPwaStrategy =
  | 'network-only'
  | 'network-first'
  | 'cache-first'
  | 'stale-while-revalidate'
  | 'cache-only'
export type NetworkStatus = 'online' | 'offline'
export interface FetchPwaCacheConfig {
  enabled?: boolean
  namespace?: string
  strategy?: FetchPwaStrategy
  ttl?: number
}
export interface FetchPwaQueueConfig {
  enabled?: boolean
  storageKey?: string
  autoReplay?: boolean
}
export interface FetchPwaConfig {
  enabled?: boolean
  cache?: FetchPwaCacheConfig
  queue?: FetchPwaQueueConfig
}
export interface FetchPwaRequestConfig {
  enabled?: boolean
  strategy?: FetchPwaStrategy
  ttl?: number
  cacheKey?: string
  queueWhenOffline?: boolean
}
export interface ReplayOfflineQueueResult {
  replayed: number
  failed: number
  remaining: number
}
export interface FetchRequestConfig extends Omit<RequestInit, 'body' | 'headers' | 'method'> {
  body?: BodyInit | Record<string, unknown> | unknown[] | null
  headers?: HeadersInit
  method?: string
  params?: Record<string, FetchQueryValue>
  responseType?: FetchResponseType
  skipAuth?: boolean
  pwa?: false | FetchPwaRequestConfig
  parseBody?: (response: Response) => Promise<unknown>
  extractData?: (payload: unknown, response: Response) => unknown
  resolveError?: (payload: unknown, response: Response) => HttpErrorDescriptor | null
}
export interface SetupFetchConfig extends Omit<
  FetchRequestConfig,
  'body' | 'method' | 'params' | 'signal' | 'pwa'
> {
  baseURL?: string
  fetch?: typeof globalThis.fetch
  pwa?: FetchPwaConfig
  getToken: () => string | null
  onUnauthorized: () => void
  onForbidden?: (error: HttpError) => void
  onServerError?: (error: HttpError) => void
  onBusinessError?: (error: HttpError) => void
}
export interface FetchHttpClient {
  request<T = unknown>(path: string, config?: FetchRequestConfig): Promise<T>
  get<T = unknown>(path: string, config?: Omit<FetchRequestConfig, 'body' | 'method'>): Promise<T>
  delete<T = unknown>(
    path: string,
    config?: Omit<FetchRequestConfig, 'body' | 'method'>
  ): Promise<T>
  post<T = unknown>(
    path: string,
    body?: FetchRequestConfig['body'],
    config?: Omit<FetchRequestConfig, 'body' | 'method'>
  ): Promise<T>
  put<T = unknown>(
    path: string,
    body?: FetchRequestConfig['body'],
    config?: Omit<FetchRequestConfig, 'body' | 'method'>
  ): Promise<T>
  patch<T = unknown>(
    path: string,
    body?: FetchRequestConfig['body'],
    config?: Omit<FetchRequestConfig, 'body' | 'method'>
  ): Promise<T>
}
export declare const getNetworkStatus: () => NetworkStatus
export declare const subscribeNetworkStatus: (
  listener: (status: NetworkStatus) => void
) => () => void
export declare const setupFetch: (config: SetupFetchConfig) => void
export declare const createFetchClient: (config: SetupFetchConfig) => FetchHttpClient
export declare const getOfflineQueueSize: () => number
export declare const clearOfflineQueue: () => void
export declare const replayOfflineQueue: (
  client?: FetchHttpClient
) => Promise<ReplayOfflineQueueResult>
export declare const fetchHttp: FetchHttpClient
export {}
