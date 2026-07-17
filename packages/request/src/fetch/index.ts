import { HttpError, type HttpErrorDescriptor } from '../http'

type FetchPrimitive = string | number | boolean
type FetchQueryValue =
  | FetchPrimitive
  | null
  | undefined
  | FetchPrimitive[]
  | readonly FetchPrimitive[]

type SerializableBodyType = 'json' | 'text' | 'searchParams' | 'null'

const DEFAULT_PWA_CACHE_TTL = 5 * 60 * 1000
const DEFAULT_PWA_CACHE_NAMESPACE = 'bag-request'
const DEFAULT_PWA_QUEUE_STORAGE_KEY = 'bag-request:pwa-queue'
const PWA_CACHE_KEY_PREFIX = 'bag-request:pwa-cache'

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

interface NormalizedFetchPwaConfig {
  enabled: boolean
  cache: Required<FetchPwaCacheConfig>
  queue: Required<FetchPwaQueueConfig>
}

interface ResolvedFetchConfig extends Omit<SetupFetchConfig, 'fetch' | 'pwa'> {
  baseURL: string
  fetch: typeof globalThis.fetch
  pwa: NormalizedFetchPwaConfig
}

interface StoredCacheEntry {
  payload: unknown
  createdAt: number
  expiresAt: number
}

interface SerializedRequestBody {
  type: SerializableBodyType
  value: string | null
}

interface QueuedRequestRecord {
  path: string
  method: string
  headers: Record<string, string>
  params?: Record<string, FetchQueryValue>
  body?: SerializedRequestBody
  skipAuth: boolean
  responseType: FetchResponseType
  queuedAt: number
}

interface ResolvedRequestPwaOptions {
  enabled: boolean
  strategy: FetchPwaStrategy
  ttl: number
  cacheEnabled: boolean
  cacheNamespace: string
  cacheKey: string
  queueWhenOffline: boolean
}

interface PreparedRequestOptions {
  headers: Headers
  method: string
  path: string
  url: string
  requestInit: RequestInit
  responseType: FetchResponseType
  parseBody?: (response: Response) => Promise<unknown>
  extractData?: (payload: unknown, response: Response) => unknown
  resolveError?: (payload: unknown, response: Response) => HttpErrorDescriptor | null
  params?: Record<string, FetchQueryValue>
  skipAuth: boolean
  originalBody?: FetchRequestConfig['body']
}

let stopQueueReplayListener: (() => void) | null = null

const defaultFetchBodyParser = async (
  response: Response,
  responseType: FetchResponseType = 'auto'
): Promise<unknown> => {
  if (responseType === 'raw') {
    return response
  }

  if (response.status === 204 || response.status === 205) {
    return null
  }

  if (responseType === 'text') {
    return response.text()
  }

  if (responseType === 'blob') {
    return response.blob()
  }

  if (responseType === 'arrayBuffer') {
    return response.arrayBuffer()
  }

  if (responseType === 'formData') {
    return response.formData()
  }

  const rawText = await response.text()
  if (!rawText) {
    return null
  }

  if (responseType === 'json') {
    return JSON.parse(rawText) as unknown
  }

  const contentType = response.headers.get('content-type')?.toLowerCase() ?? ''
  if (contentType.includes('application/json')) {
    return JSON.parse(rawText) as unknown
  }

  if (
    contentType.startsWith('text/') ||
    contentType.includes('xml') ||
    contentType.includes('html') ||
    contentType.includes('x-www-form-urlencoded')
  ) {
    return rawText
  }

  return rawText
}

const isBrowser = () => typeof window !== 'undefined'

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return Object.prototype.toString.call(value) === '[object Object]'
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

const appendQueryParams = (url: string, params?: Record<string, FetchQueryValue>) => {
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

const resolveFetchImplementation = (customFetch?: typeof globalThis.fetch) => {
  const fetchImpl = customFetch ?? globalThis.fetch
  if (!fetchImpl) {
    throw new Error(
      'Fetch API is not available in the current runtime. Please provide a custom fetch implementation.'
    )
  }
  return fetchImpl
}

const resolveRequestBody = (body: FetchRequestConfig['body'], headers: Headers) => {
  if (body == null) {
    return undefined
  }

  if (
    typeof body === 'string' ||
    body instanceof FormData ||
    body instanceof URLSearchParams ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    ArrayBuffer.isView(body)
  ) {
    return body
  }

  if (isPlainObject(body) || Array.isArray(body)) {
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json')
    }
    return JSON.stringify(body)
  }

  return body as BodyInit
}

const createHttpError = (response: Response, payload: unknown) => {
  const payloadMessage =
    typeof payload === 'object' &&
    payload &&
    'message' in payload &&
    typeof payload.message === 'string'
      ? payload.message
      : null

  return new HttpError(payloadMessage ?? response.statusText ?? 'Request failed', {
    status: response.status,
    payload,
    response
  })
}

const applyStatusHandlers = (
  response: Response,
  error: HttpError,
  runtime: Pick<ResolvedFetchConfig, 'onUnauthorized' | 'onForbidden' | 'onServerError'>
) => {
  if (response.status === 401) {
    runtime.onUnauthorized()
  } else if (response.status === 403) {
    runtime.onForbidden?.(error)
  } else if (response.status >= 500) {
    runtime.onServerError?.(error)
  }
}

const normalizePwaConfig = (config?: FetchPwaConfig): NormalizedFetchPwaConfig => {
  const cacheEnabled = config?.cache?.enabled ?? Boolean(config?.enabled)
  const queueEnabled = config?.queue?.enabled ?? Boolean(config?.enabled)

  return {
    enabled: config?.enabled ?? (cacheEnabled || queueEnabled),
    cache: {
      enabled: cacheEnabled,
      namespace: config?.cache?.namespace ?? DEFAULT_PWA_CACHE_NAMESPACE,
      strategy: config?.cache?.strategy ?? 'cache-first',
      ttl: config?.cache?.ttl ?? DEFAULT_PWA_CACHE_TTL
    },
    queue: {
      enabled: queueEnabled,
      storageKey: config?.queue?.storageKey ?? DEFAULT_PWA_QUEUE_STORAGE_KEY,
      autoReplay: config?.queue?.autoReplay ?? true
    }
  }
}

const createResolvedFetchConfig = (config: SetupFetchConfig): ResolvedFetchConfig => {
  return {
    ...config,
    baseURL: config.baseURL ?? '',
    fetch: resolveFetchImplementation(config.fetch),
    pwa: normalizePwaConfig(config.pwa)
  }
}

const resolveRuntimeRequestInit = (runtime: ResolvedFetchConfig): RequestInit => {
  return {
    cache: runtime.cache,
    credentials: runtime.credentials,
    integrity: runtime.integrity,
    keepalive: runtime.keepalive,
    mode: runtime.mode,
    redirect: runtime.redirect,
    referrer: runtime.referrer,
    referrerPolicy: runtime.referrerPolicy,
    window: runtime.window
  }
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

const getCacheStorageKey = (namespace: string, cacheKey: string) => {
  return `${PWA_CACHE_KEY_PREFIX}:${namespace}:${encodeURIComponent(cacheKey)}`
}

const readCacheEntry = (
  namespace: string,
  cacheKey: string,
  options: {
    allowStale?: boolean
  } = {}
) => {
  const rawValue = readStorage(getCacheStorageKey(namespace, cacheKey))
  if (!rawValue) {
    return null
  }

  try {
    const entry = JSON.parse(rawValue) as StoredCacheEntry
    if (!options.allowStale && entry.expiresAt < Date.now()) {
      removeStorage(getCacheStorageKey(namespace, cacheKey))
      return null
    }
    return entry
  } catch {
    removeStorage(getCacheStorageKey(namespace, cacheKey))
    return null
  }
}

const writeCacheEntry = (namespace: string, cacheKey: string, payload: unknown, ttl: number) => {
  if (
    payload instanceof Response ||
    payload instanceof Blob ||
    payload instanceof FormData ||
    payload instanceof ArrayBuffer
  ) {
    return
  }

  try {
    const serializedPayload = JSON.stringify(payload) as string
    const entry: StoredCacheEntry = {
      payload: JSON.parse(serializedPayload) as unknown,
      createdAt: Date.now(),
      expiresAt: Date.now() + ttl
    }
    writeStorage(getCacheStorageKey(namespace, cacheKey), JSON.stringify(entry))
  } catch {
    // 跳过不可序列化响应，避免把 fetch 的原始对象误塞进缓存。
  }
}

const readQueuedRequests = (storageKey: string) => {
  const rawValue = readStorage(storageKey)
  if (!rawValue) {
    return [] as QueuedRequestRecord[]
  }

  try {
    const entries = JSON.parse(rawValue) as QueuedRequestRecord[]
    return Array.isArray(entries) ? entries : []
  } catch {
    removeStorage(storageKey)
    return []
  }
}

const writeQueuedRequests = (storageKey: string, entries: QueuedRequestRecord[]) => {
  if (!entries.length) {
    removeStorage(storageKey)
    return
  }

  writeStorage(storageKey, JSON.stringify(entries))
}

const headersToRecord = (headers: Headers) => {
  const record: Record<string, string> = {}
  headers.forEach((value, key) => {
    if (key.toLowerCase() !== 'authorization') {
      record[key] = value
    }
  })
  return record
}

const serializeRequestBody = (body: FetchRequestConfig['body']): SerializedRequestBody | null => {
  if (body == null) {
    return {
      type: 'null',
      value: null
    }
  }

  if (typeof body === 'string') {
    return {
      type: 'text',
      value: body
    }
  }

  if (body instanceof URLSearchParams) {
    return {
      type: 'searchParams',
      value: body.toString()
    }
  }

  if (isPlainObject(body) || Array.isArray(body)) {
    try {
      return {
        type: 'json',
        value: JSON.stringify(body)
      }
    } catch {
      return null
    }
  }

  return null
}

const deserializeRequestBody = (body?: SerializedRequestBody) => {
  if (!body) {
    return undefined
  }

  if (body.type === 'null') {
    return null
  }

  if (body.type === 'text') {
    return body.value ?? ''
  }

  if (body.type === 'searchParams') {
    return new URLSearchParams(body.value ?? '')
  }

  if (body.type === 'json') {
    return body.value ? (JSON.parse(body.value) as unknown) : null
  }

  return undefined
}

const isReadonlyMethod = (method: string) => {
  return ['GET', 'HEAD'].includes(method.toUpperCase())
}

export const getNetworkStatus = (): NetworkStatus => {
  if (typeof navigator === 'undefined') {
    return 'online'
  }

  return navigator.onLine === false ? 'offline' : 'online'
}

export const subscribeNetworkStatus = (listener: (status: NetworkStatus) => void) => {
  if (!isBrowser()) {
    return () => {}
  }

  const handleChange = () => {
    listener(getNetworkStatus())
  }

  window.addEventListener('online', handleChange)
  window.addEventListener('offline', handleChange)

  return () => {
    window.removeEventListener('online', handleChange)
    window.removeEventListener('offline', handleChange)
  }
}

const createOfflineQueuedError = (path: string, method: string) => {
  return new HttpError('Request queued for replay when the network recovers.', {
    code: 'PWA_OFFLINE_QUEUED',
    status: 0,
    payload: {
      queued: true,
      path,
      method
    }
  })
}

const createCacheMissError = (path: string) => {
  return new HttpError(`No cached response available for ${path}.`, {
    code: 'PWA_CACHE_MISS',
    status: 0
  })
}

const queueOfflineRequest = (
  runtime: ResolvedFetchConfig,
  request: Pick<
    PreparedRequestOptions,
    'headers' | 'method' | 'path' | 'params' | 'responseType' | 'skipAuth' | 'originalBody'
  >
) => {
  const serializedBody = serializeRequestBody(request.originalBody)
  if (request.originalBody != null && !serializedBody) {
    throw new HttpError('Current request body cannot be persisted for offline replay.', {
      code: 'PWA_QUEUE_UNSUPPORTED',
      status: 0
    })
  }

  const queue = readQueuedRequests(runtime.pwa.queue.storageKey)
  queue.push({
    path: request.path,
    method: request.method,
    headers: headersToRecord(request.headers),
    params: request.params,
    body: serializedBody ?? undefined,
    skipAuth: request.skipAuth,
    responseType: request.responseType,
    queuedAt: Date.now()
  })
  writeQueuedRequests(runtime.pwa.queue.storageKey, queue)
}

const normalizeThrownError = (error: unknown) => {
  if (error instanceof HttpError) {
    return error
  }

  if (error instanceof Error) {
    return new HttpError(error.message || 'Network request failed', {
      code: getNetworkStatus() === 'offline' ? 'PWA_OFFLINE' : 'FETCH_ERROR',
      status: 0,
      payload: error
    })
  }

  return new HttpError('Network request failed', {
    code: getNetworkStatus() === 'offline' ? 'PWA_OFFLINE' : 'FETCH_ERROR',
    status: 0,
    payload: error
  })
}

const resolveRequestPwaOptions = (
  runtime: ResolvedFetchConfig,
  method: string,
  url: string,
  requestPwa: FetchRequestConfig['pwa']
): ResolvedRequestPwaOptions => {
  if (!runtime.pwa.enabled || requestPwa === false) {
    return {
      enabled: false,
      strategy: 'network-only',
      ttl: runtime.pwa.cache.ttl,
      cacheEnabled: false,
      cacheNamespace: runtime.pwa.cache.namespace,
      cacheKey: `${method}:${url}`,
      queueWhenOffline: false
    }
  }

  const override = requestPwa ?? {}
  const requestEnabled = override.enabled ?? true
  const strategy = override.strategy ?? runtime.pwa.cache.strategy
  const cacheEnabled = requestEnabled && runtime.pwa.cache.enabled && isReadonlyMethod(method)

  return {
    enabled: requestEnabled,
    strategy,
    ttl: override.ttl ?? runtime.pwa.cache.ttl,
    cacheEnabled,
    cacheNamespace: runtime.pwa.cache.namespace,
    cacheKey: override.cacheKey ?? `${method}:${url}`,
    queueWhenOffline:
      requestEnabled && runtime.pwa.queue.enabled && !isReadonlyMethod(method)
        ? (override.queueWhenOffline ?? true)
        : false
  }
}

const performFetch = async <T = unknown>(
  runtime: ResolvedFetchConfig,
  options: PreparedRequestOptions,
  pwaOptions: ResolvedRequestPwaOptions
) => {
  const response = await runtime.fetch(options.url, {
    ...resolveRuntimeRequestInit(runtime),
    ...options.requestInit,
    method: options.method,
    headers: options.headers
  })

  const rawPayload = await (
    options.parseBody ??
    runtime.parseBody ??
    ((res) => defaultFetchBodyParser(res, options.responseType))
  )(response)
  const payload = (options.extractData ?? runtime.extractData ?? ((data) => data))(
    rawPayload,
    response
  )

  if (!response.ok) {
    const error = createHttpError(response, payload)
    applyStatusHandlers(response, error, runtime)
    throw error
  }

  const businessError = (options.resolveError ?? runtime.resolveError)?.(payload, response)
  if (businessError) {
    const error = new HttpError(businessError.message, {
      code: businessError.code,
      status: response.status,
      payload,
      response
    })
    runtime.onBusinessError?.(error)
    throw error
  }

  if (pwaOptions.enabled && pwaOptions.cacheEnabled) {
    writeCacheEntry(pwaOptions.cacheNamespace, pwaOptions.cacheKey, payload, pwaOptions.ttl)
  }

  return payload as T
}

const resolveCachedPayload = <T = unknown>(
  pwaOptions: ResolvedRequestPwaOptions,
  options: {
    allowStale?: boolean
  } = {}
) => {
  if (!pwaOptions.enabled || !pwaOptions.cacheEnabled) {
    return null as T | null
  }

  const cacheEntry = readCacheEntry(pwaOptions.cacheNamespace, pwaOptions.cacheKey, options)
  return cacheEntry ? (cacheEntry.payload as T) : null
}

const ensureQueueReplayListener = () => {
  if (stopQueueReplayListener) {
    stopQueueReplayListener()
    stopQueueReplayListener = null
  }

  if (
    !defaultFetchConfig.pwa.enabled ||
    !defaultFetchConfig.pwa.queue.enabled ||
    !defaultFetchConfig.pwa.queue.autoReplay
  ) {
    return
  }

  stopQueueReplayListener = subscribeNetworkStatus((status) => {
    if (status === 'online') {
      void replayOfflineQueue()
    }
  })
}

const createFetchHttp = (getRuntime: () => ResolvedFetchConfig): FetchHttpClient => {
  const request = async <T = unknown>(path: string, config: FetchRequestConfig = {}) => {
    const runtime = getRuntime()
    const {
      body,
      headers: requestHeaders,
      method = 'GET',
      params,
      responseType = 'auto',
      skipAuth = false,
      pwa,
      parseBody,
      extractData,
      resolveError,
      ...requestInit
    } = config

    const normalizedMethod = method.toUpperCase()
    const headers = new Headers(runtime.headers)
    new Headers(requestHeaders).forEach((value, key) => {
      headers.set(key, value)
    })

    const token = runtime.getToken()
    if (token && !skipAuth && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    const resolvedBody = resolveRequestBody(body, headers)
    const url = appendQueryParams(joinUrl(runtime.baseURL, path), params)
    const requestOptions: PreparedRequestOptions = {
      headers,
      method: normalizedMethod,
      path,
      url,
      requestInit: {
        ...requestInit,
        body: resolvedBody
      },
      responseType,
      parseBody,
      extractData,
      resolveError,
      params,
      skipAuth,
      originalBody: body
    }
    const pwaOptions = resolveRequestPwaOptions(runtime, normalizedMethod, url, pwa)
    const offline = getNetworkStatus() === 'offline'

    if (pwaOptions.enabled && pwaOptions.queueWhenOffline && offline) {
      queueOfflineRequest(runtime, requestOptions)
      throw createOfflineQueuedError(path, normalizedMethod)
    }

    if (!pwaOptions.enabled || pwaOptions.strategy === 'network-only') {
      try {
        return await performFetch<T>(runtime, requestOptions, pwaOptions)
      } catch (error) {
        throw normalizeThrownError(error)
      }
    }

    if (pwaOptions.strategy === 'cache-only') {
      const cachedPayload = resolveCachedPayload<T>(pwaOptions, {
        allowStale: true
      })
      if (cachedPayload !== null) {
        return cachedPayload
      }
      throw createCacheMissError(path)
    }

    if (pwaOptions.strategy === 'cache-first') {
      const cachedPayload = resolveCachedPayload<T>(pwaOptions)
      if (cachedPayload !== null) {
        return cachedPayload
      }

      try {
        return await performFetch<T>(runtime, requestOptions, pwaOptions)
      } catch (error) {
        throw normalizeThrownError(error)
      }
    }

    if (pwaOptions.strategy === 'stale-while-revalidate') {
      const cachedPayload = resolveCachedPayload<T>(pwaOptions, {
        allowStale: true
      })
      if (cachedPayload !== null) {
        void performFetch<T>(runtime, requestOptions, pwaOptions).catch(() => {})
        return cachedPayload
      }

      try {
        return await performFetch<T>(runtime, requestOptions, pwaOptions)
      } catch (error) {
        throw normalizeThrownError(error)
      }
    }

    if (offline) {
      const cachedPayload = resolveCachedPayload<T>(pwaOptions, {
        allowStale: true
      })
      if (cachedPayload !== null) {
        return cachedPayload
      }
    }

    try {
      return await performFetch<T>(runtime, requestOptions, pwaOptions)
    } catch (error) {
      const cachedPayload = resolveCachedPayload<T>(pwaOptions, {
        allowStale: true
      })
      if (cachedPayload !== null) {
        return cachedPayload
      }
      throw normalizeThrownError(error)
    }
  }

  return {
    request,
    get: (path, config) => request(path, { ...config, method: 'GET' }),
    delete: (path, config) => request(path, { ...config, method: 'DELETE' }),
    post: (path, body, config) => request(path, { ...config, method: 'POST', body }),
    put: (path, body, config) => request(path, { ...config, method: 'PUT', body }),
    patch: (path, body, config) => request(path, { ...config, method: 'PATCH', body })
  }
}

let defaultFetchConfig: ResolvedFetchConfig = createResolvedFetchConfig({
  getToken: () => null,
  onUnauthorized: () => {},
  onForbidden: () => {},
  onServerError: () => {},
  onBusinessError: () => {}
})

export const setupFetch = (config: SetupFetchConfig) => {
  defaultFetchConfig = createResolvedFetchConfig({
    ...defaultFetchConfig,
    ...config,
    headers: config.headers ?? defaultFetchConfig.headers,
    pwa: {
      ...defaultFetchConfig.pwa,
      ...config.pwa,
      cache: {
        ...defaultFetchConfig.pwa.cache,
        ...config.pwa?.cache
      },
      queue: {
        ...defaultFetchConfig.pwa.queue,
        ...config.pwa?.queue
      }
    }
  })

  ensureQueueReplayListener()
}

export const createFetchClient = (config: SetupFetchConfig) => {
  const resolvedConfig = createResolvedFetchConfig(config)
  return createFetchHttp(() => resolvedConfig)
}

export const getOfflineQueueSize = () => {
  return readQueuedRequests(defaultFetchConfig.pwa.queue.storageKey).length
}

export const clearOfflineQueue = () => {
  writeQueuedRequests(defaultFetchConfig.pwa.queue.storageKey, [])
}

export const replayOfflineQueue = async (
  client: FetchHttpClient = fetchHttp
): Promise<ReplayOfflineQueueResult> => {
  if (getNetworkStatus() === 'offline') {
    return {
      replayed: 0,
      failed: 0,
      remaining: getOfflineQueueSize()
    }
  }

  const queue = readQueuedRequests(defaultFetchConfig.pwa.queue.storageKey)
  if (!queue.length) {
    return {
      replayed: 0,
      failed: 0,
      remaining: 0
    }
  }

  const remainingQueue: QueuedRequestRecord[] = []
  let replayed = 0
  let failed = 0

  for (const entry of queue) {
    try {
      await client.request(entry.path, {
        method: entry.method,
        headers: entry.headers,
        params: entry.params,
        body: deserializeRequestBody(entry.body) as FetchRequestConfig['body'],
        responseType: entry.responseType,
        skipAuth: entry.skipAuth,
        pwa: {
          queueWhenOffline: false
        }
      })
      replayed += 1
    } catch {
      failed += 1
      remainingQueue.push(entry)
    }
  }

  writeQueuedRequests(defaultFetchConfig.pwa.queue.storageKey, remainingQueue)

  return {
    replayed,
    failed,
    remaining: remainingQueue.length
  }
}

export const fetchHttp = createFetchHttp(() => defaultFetchConfig)
