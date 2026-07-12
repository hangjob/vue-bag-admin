import axios, { AxiosError, type AxiosResponse, type CreateAxiosDefaults } from 'axios'

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

// 统一抛出自定义错误，方便上层同时拿到 HTTP 状态和业务载荷。
export class HttpError extends Error {
  code?: string | number
  status?: number
  payload?: unknown
  response?: AxiosResponse

  constructor(message: string, options?: Partial<HttpError>) {
    super(message)
    this.name = 'HttpError'
    Object.assign(this, options)
  }
}

export interface SetupHttpConfig extends CreateAxiosDefaults {
  getToken: () => string | null
  onUnauthorized: () => void
  onForbidden?: (error: HttpError) => void
  onServerError?: (error: HttpError) => void
  onBusinessError?: (error: HttpError) => void
  extractData?: (response: AxiosResponse) => unknown
  resolveError?: (payload: unknown, response: AxiosResponse) => HttpErrorDescriptor | null
}

export const setupHttp = (config: SetupHttpConfig) => {
  const {
    getToken: _getToken,
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

  // 保留 axios 原生配置能力，同时允许宿主注入自己的错误识别策略。
  Object.assign(http.defaults, axiosConfig)
}

http.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
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

    return payload
  }) as unknown as (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>,
  (err) => {
    if (err instanceof HttpError) {
      return Promise.reject(err)
    }

    // axios 原始错误在这里统一收口，避免页面层自己解析 response 结构。
    const axiosError = err as AxiosError
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
