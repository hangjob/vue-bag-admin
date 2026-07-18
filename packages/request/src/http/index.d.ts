import { type AxiosResponse, type CreateAxiosDefaults } from 'axios'
export declare const http: import('axios').AxiosInstance
export interface HttpErrorDescriptor {
  message: string
  code?: string | number
}
export type HttpPwaStrategy =
  | 'network-only'
  | 'network-first'
  | 'cache-first'
  | 'stale-while-revalidate'
  | 'cache-only'
export interface HttpPwaCacheConfig {
  enabled?: boolean
  namespace?: string
  strategy?: HttpPwaStrategy
  ttl?: number
}
export interface HttpPwaConfig {
  enabled?: boolean
  cache?: HttpPwaCacheConfig
}
export interface HttpPwaRequestConfig {
  enabled?: boolean
  strategy?: HttpPwaStrategy
  ttl?: number
  cacheKey?: string
}
declare module 'axios' {
  interface AxiosRequestConfig<D = any> {
    pwa?: false | HttpPwaRequestConfig
  }
}
export type HttpResponse = AxiosResponse | Response
export declare class HttpError extends Error {
  code?: string | number
  status?: number
  payload?: unknown
  response?: HttpResponse
  constructor(message: string, options?: Partial<HttpError>)
}
export interface SetupHttpConfig extends CreateAxiosDefaults {
  getToken: () => string | null
  pwa?: HttpPwaConfig
  onUnauthorized: () => void
  onForbidden?: (error: HttpError) => void
  onServerError?: (error: HttpError) => void
  onBusinessError?: (error: HttpError) => void
  extractData?: (response: AxiosResponse) => unknown
  resolveError?: (payload: unknown, response: AxiosResponse) => HttpErrorDescriptor | null
}
export declare const setupHttp: (config: SetupHttpConfig) => void
