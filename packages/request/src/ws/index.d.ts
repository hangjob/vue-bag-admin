export declare const setupWs: (config: { getToken: () => string | null; baseURL?: string }) => void
export declare const createWsClient: (
  path: string
) => import('@vueuse/core').UseWebSocketReturn<any>
