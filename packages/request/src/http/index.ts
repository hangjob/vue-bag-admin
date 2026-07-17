import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type CreateAxiosDefaults,
  type InternalAxiosRequestConfig
} from 'axios'

type HttpPrimitive = string | number | boolean
type HttpQueryValue = HttpPrimitive | null | undefined | HttpPrimitive[] | readonly HttpPrimitive[]

const DEFAULT_HTTP_PWA_CACHE_TTL = 5 * 60 * 1000
const DEFAULT_HTTP_PWA_CACHE_NAMESPACE = 'bag-request'
const HTTP_PWA_CACHE_KEY_PREFIX = 'bag-request:pwa-cache'

export const http = axios.create({
  timeout: 10000
})

let getToken: () => string | null = () => null
let handleUnauthorized: () => void = () => {}
let handleForbidden: (error: HttpError) => void = () => {}
let handleServerError: (error: HttpError) => void = () => {}
let handleBusinessError: (error: HttpError) => void = () => {}
let extractResponseData: (response: AxiosResponse) => unknown = (response) => response.data
let resolveBusinessError: (
  payload: unknown,
  response: AxiosResponse
) => HttpErrorDescriptor | null = () => null

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

interface NormalizedHttpPwaConfig {
  enabled: boolean
  cache: Required<HttpPwaCacheConfig>
}

interface StoredHttpCacheEntry {
  payload: unknown
  createdAt: number
  expiresAt: number
}

interface ResolvedHttpPwaOptions {
  enabled: boolean
  strategy: HttpPwaStrategy
  ttl: number
  cacheEnabled: boolean
  cacheNamespace: string
  cacheKey: string
}

interface InternalHttpRequestConfig extends InternalAxiosRequestConfig {
  pwa?: false | HttpPwaRequestConfig
  __bagBypassPwaCache?: boolean
}

declare module 'axios' {
  interface AxiosRequestConfig<D = any> {
    pwa?: false | HttpPwaRequestConfig
  }
}

export type HttpResponse = AxiosResponse | Response

// 统一抛出自定义错误，方便上层同时拿到 HTTP 状态和业务载荷。
export class HttpError extends Error {
  code?: string | number
  status?: number
  payload?: unknown
  response?: HttpResponse

  constructor(message: string, options?: Partial<HttpError>) {
    super(message)
    this.name = 'HttpError'
    Object.assign(this, options)
  }
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

let httpPwaConfig: NormalizedHttpPwaConfig = {
  enabled: false,
  cache: {
    enabled: false,
    namespace: DEFAULT_HTTP_PWA_CACHE_NAMESPACE,
    strategy: 'cache-first',
    ttl: DEFAULT_HTTP_PWA_CACHE_TTL
  }
}

const isBrowser = () => typeof window !== 'undefined'

const isReadonlyMethod = (method: string) => {
  return ['GET', 'HEAD'].includes(method.toUpperCase())
}

const normalizePath = (path: string) => {
  return path.startsWith('/') ? path : `/${path}`
}

const joinUrl = (baseURL: string, path: string) => {
  if (!baseURL || /^https?:\/\//i.test(path)) {
    return path
  }

  return `${baseURL.replace(/\/+$/, '')}${normalizePath(path)}`
}

const appendQueryParams = (url: string, params?: Record<string, HttpQueryValue>) => {
  if (!params) {
    return url
  }

  const search = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value == null) {
      return
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        search.append(key, String(item))
      })
      return
    }

    search.append(key, String(value))
  })

  const queryString = search.toString()
  if (!queryString) {
    return url
  }

  return `${url}${url.includes('?') ? '&' : '?'}${queryString}`
}

const readStorage = (key: string) => {
  if (!isBrowser()) {
    return null
  }

  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

const writeStorage = (key: string, value: string) => {
  if (!isBrowser()) {
    return false
  }

  try {
    window.localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

const removeStorage = (key: string) => {
  if (!isBrowser()) {
    return
  }

  try {
    window.localStorage.removeItem(key)
  } catch {
    // noop
  }
}

const getHttpCacheStorageKey = (namespace: string, cacheKey: string) => {
  return `${HTTP_PWA_CACHE_KEY_PREFIX}:${namespace}:${encodeURIComponent(cacheKey)}`
}

const readHttpCacheEntry = (
  namespace: string,
  cacheKey: string,
  options: {
    allowStale?: boolean
  } = {}
) => {
  const rawValue = readStorage(getHttpCacheStorageKey(namespace, cacheKey))
  if (!rawValue) {
    return null
  }

  try {
    const entry = JSON.parse(rawValue) as StoredHttpCacheEntry
    if (!options.allowStale && entry.expiresAt < Date.now()) {
      removeStorage(getHttpCacheStorageKey(namespace, cacheKey))
      return null
    }
    return entry
  } catch {
    removeStorage(getHttpCacheStorageKey(namespace, cacheKey))
    return null
  }
}

const writeHttpCacheEntry = (
  namespace: string,
  cacheKey: string,
  payload: unknown,
  ttl: number
) => {
  try {
    const serializedPayload = JSON.stringify(payload) as string
    const entry: StoredHttpCacheEntry = {
      payload: JSON.parse(serializedPayload) as unknown,
      createdAt: Date.now(),
      expiresAt: Date.now() + ttl
    }
    writeStorage(getHttpCacheStorageKey(namespace, cacheKey), JSON.stringify(entry))
  } catch {
    // 跳过不可序列化数据，避免把不稳定对象写进本地缓存。
  }
}

const normalizeHttpPwaConfig = (config?: HttpPwaConfig): NormalizedHttpPwaConfig => {
  const cacheEnabled = config?.cache?.enabled ?? Boolean(config?.enabled)

  return {
    enabled: config?.enabled ?? cacheEnabled,
    cache: {
      enabled: cacheEnabled,
      namespace: config?.cache?.namespace ?? DEFAULT_HTTP_PWA_CACHE_NAMESPACE,
      strategy: config?.cache?.strategy ?? 'cache-first',
      ttl: config?.cache?.ttl ?? DEFAULT_HTTP_PWA_CACHE_TTL
    }
  }
}

const resolveHttpRequestUrl = (config: AxiosRequestConfig) => {
  const baseURL = config.baseURL ?? http.defaults.baseURL ?? ''
  const path = config.url ?? ''
  const joinedUrl = joinUrl(baseURL, path)
  const params = config.params as Record<string, HttpQueryValue> | undefined
  return appendQueryParams(joinedUrl, params)
}

const resolveHttpPwaOptions = (config: AxiosRequestConfig): ResolvedHttpPwaOptions => {
  const method = (config.method ?? 'GET').toUpperCase()
  const requestPwa = config.pwa

  if (!httpPwaConfig.enabled || requestPwa === false) {
    return {
      enabled: false,
      strategy: 'network-only',
      ttl: httpPwaConfig.cache.ttl,
      cacheEnabled: false,
      cacheNamespace: httpPwaConfig.cache.namespace,
      cacheKey: `${method}:${resolveHttpRequestUrl(config)}`
    }
  }

  const override = requestPwa ?? {}
  const requestEnabled = override.enabled ?? true
  const url = resolveHttpRequestUrl(config)

  return {
    enabled: requestEnabled,
    strategy: override.strategy ?? httpPwaConfig.cache.strategy,
    ttl: override.ttl ?? httpPwaConfig.cache.ttl,
    cacheEnabled: requestEnabled && httpPwaConfig.cache.enabled && isReadonlyMethod(method),
    cacheNamespace: httpPwaConfig.cache.namespace,
    cacheKey: override.cacheKey ?? `${method}:${url}`
  }
}

const createHttpCacheMissError = (url: string) => {
  return new HttpError(`No cached response available for ${url}.`, {
    code: 'PWA_CACHE_MISS',
    status: 0
  })
}

const createCachedAxiosAdapter = (payload: unknown) => {
  return async (config: InternalAxiosRequestConfig) => {
    return {
      data: payload,
      status: 200,
      statusText: 'OK',
      headers: {
        'x-bag-cache': 'HIT'
      },
      config,
      request: undefined
    } as AxiosResponse
  }
}

const refreshAxiosCacheInBackground = (config: InternalHttpRequestConfig) => {
  const refreshConfig = {
    ...config,
    adapter: undefined,
    __bagBypassPwaCache: true,
    pwa: config.pwa
      ? {
          ...config.pwa,
          strategy: 'network-first' as HttpPwaStrategy
        }
      : {
          strategy: 'network-first' as HttpPwaStrategy
        }
  }

  void http.request(refreshConfig as AxiosRequestConfig).catch(() => {})
}

export const setupHttp = (config: SetupHttpConfig) => {
  const {
    getToken: _getToken,
    pwa,
    onUnauthorized,
    onForbidden,
    onServerError,
    onBusinessError,
    extractData,
    resolveError,
    ...axiosConfig
  } = config

  getToken = _getToken
  handleUnauthorized = onUnauthorized
  handleForbidden = onForbidden ?? (() => {})
  handleServerError = onServerError ?? (() => {})
  handleBusinessError = onBusinessError ?? (() => {})
  extractResponseData = extractData ?? ((response) => response.data)
  resolveBusinessError = resolveError ?? (() => null)
  httpPwaConfig = normalizeHttpPwaConfig(pwa)

  // 保留 axios 原生配置能力，同时允许宿主注入自己的错误识别策略。
  Object.assign(http.defaults, axiosConfig)
}

http.interceptors.request.use((config) => {
  const requestConfig = config as InternalHttpRequestConfig
  const token = getToken()
  if (token) {
    requestConfig.headers = requestConfig.headers ?? {}
    requestConfig.headers.Authorization = `Bearer ${token}`
  }

  if (requestConfig.__bagBypassPwaCache) {
    return requestConfig
  }

  const pwaOptions = resolveHttpPwaOptions(requestConfig)
  if (!pwaOptions.enabled || !pwaOptions.cacheEnabled || pwaOptions.strategy === 'network-only') {
    return requestConfig
  }

  const allowStale =
    pwaOptions.strategy === 'stale-while-revalidate' || pwaOptions.strategy === 'cache-only'
  const cachedEntry = readHttpCacheEntry(pwaOptions.cacheNamespace, pwaOptions.cacheKey, {
    allowStale
  })

  if (cachedEntry) {
    if (pwaOptions.strategy === 'stale-while-revalidate') {
      refreshAxiosCacheInBackground(requestConfig)
    }
    requestConfig.adapter = createCachedAxiosAdapter(cachedEntry.payload)
    return requestConfig
  }

  if (pwaOptions.strategy === 'cache-only') {
    return Promise.reject(createHttpCacheMissError(resolveHttpRequestUrl(requestConfig)))
  }

  return requestConfig
})

http.interceptors.response.use(
  ((response: AxiosResponse) => {
    const payload = extractResponseData(response)
    const businessError = resolveBusinessError(payload, response)

    // 有些后端即使返回 200，也会把业务失败放在响应体里，这里统一转成异常。
    if (businessError) {
      const error = new HttpError(businessError.message, {
        code: businessError.code,
        status: response.status,
        payload,
        response
      })
      handleBusinessError(error)
      return Promise.reject(error)
    }

    const pwaOptions = resolveHttpPwaOptions(response.config)
    if (pwaOptions.enabled && pwaOptions.cacheEnabled) {
      writeHttpCacheEntry(pwaOptions.cacheNamespace, pwaOptions.cacheKey, payload, pwaOptions.ttl)
    }

    return payload
  }) as unknown as (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>,
  (err) => {
    if (err instanceof HttpError) {
      return Promise.reject(err)
    }

    // axios 原始错误在这里统一收口，避免页面层自己解析 response 结构。
    const axiosError = err as AxiosError
    const requestConfig = axiosError.config as InternalHttpRequestConfig | undefined

    if (requestConfig && !requestConfig.__bagBypassPwaCache) {
      const pwaOptions = resolveHttpPwaOptions(requestConfig)
      if (pwaOptions.enabled && pwaOptions.cacheEnabled) {
        const cachedEntry = readHttpCacheEntry(pwaOptions.cacheNamespace, pwaOptions.cacheKey, {
          allowStale: true
        })

        if (cachedEntry) {
          return Promise.resolve(cachedEntry.payload)
        }
      }
    }

    const response = axiosError.response
    const error = new HttpError(response?.statusText || axiosError.message || 'Request failed', {
      status: response?.status,
      payload: response?.data,
      response
    })

    if (response?.status === 401) {
      handleUnauthorized()
    } else if (response?.status === 403) {
      handleForbidden(error)
    } else if ((response?.status ?? 0) >= 500) {
      handleServerError(error)
    }
    return Promise.reject(error)
  }
)
