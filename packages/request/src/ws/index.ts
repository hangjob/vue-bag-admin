import { useWebSocket } from '@vueuse/core'

let getWsToken: () => string | null = () => null
let globalWsBaseUrl = 'ws://localhost:8080'

export const setupWs = (config: {
  getToken: () => string | null
  baseURL?: string
}) => {
  getWsToken = config.getToken
  if (config.baseURL) globalWsBaseUrl = config.baseURL
}

export const createWsClient = (path: string) => {
  const token = getWsToken()
  const url = `${globalWsBaseUrl}${path}?token=${token || ''}`

  return useWebSocket(url, {
    autoReconnect: {
      retries: 3,
      delay: 1000,
    },
    heartbeat: {
      message: 'ping',
      interval: 5000,
      pongTimeout: 2000,
    },
  })
}
