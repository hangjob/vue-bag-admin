import axios, { type CreateAxiosDefaults } from 'axios'

export const http = axios.create({
  timeout: 10000
})

let getToken: () => string | null = () => null
let handleUnauthorized: () => void = () => {}

export interface SetupHttpConfig extends CreateAxiosDefaults {
  getToken: () => string | null
  onUnauthorized: () => void
}

export const setupHttp = (config: SetupHttpConfig) => {
  const { getToken: _getToken, onUnauthorized, ...axiosConfig } = config
  
  getToken = _getToken
  handleUnauthorized = onUnauthorized
  
  // 将所有 axios 配置透传给实例
  Object.assign(http.defaults, axiosConfig)
}

http.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

http.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401) {
      handleUnauthorized()
    }
    return Promise.reject(err)
  }
)
