import { computed, shallowRef, type ComputedRef, type ShallowRef } from 'vue'

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

interface ActiveRequestRecord<TArgs extends unknown[]> {
  canceled: boolean
  counted: boolean
  params: TArgs
  reason?: string
}

export class RequestCanceledError extends Error {
  constructor(message = 'Request execution canceled.') {
    super(message)
    this.name = 'RequestCanceledError'
  }
}

const DEFAULT_CANCEL_REASON = 'Request execution canceled.'
const BLOCK_REQUEST_MESSAGE = 'Request is already running.'
const REFRESH_BEFORE_RUN_MESSAGE = 'Cannot refresh before the first run.'
const RESET_CANCEL_REASON = 'Request state reset.'
const LATEST_CANCEL_REASON = 'Request superseded by a newer run.'

const createCancelError = (reason?: string) => {
  return new RequestCanceledError(reason ?? DEFAULT_CANCEL_REASON)
}

export const useRequest = <TArgs extends unknown[], TData>(
  service: RequestService<TArgs, TData>,
  options: UseRequestOptions<TData, TArgs> = {}
): UseRequestResult<TData, TArgs> => {
  const strategy = options.strategy ?? 'latest'
  const data: ShallowRef<Awaited<TData> | undefined> = shallowRef(
    options.defaultData as Awaited<TData> | undefined
  )
  const error: ShallowRef<unknown> = shallowRef()
  const lastParams: ShallowRef<TArgs | undefined> = shallowRef()
  const pendingCount: ShallowRef<number> = shallowRef(0)
  const loading = computed(() => pendingCount.value > 0)
  const activeRequests = new Map<number, ActiveRequestRecord<TArgs>>()
  let requestSeed = 0

  const settleRequest = (requestId: number) => {
    const record = activeRequests.get(requestId)
    if (!record) {
      return undefined
    }

    if (record.counted) {
      pendingCount.value = Math.max(0, pendingCount.value - 1)
      record.counted = false
    }

    activeRequests.delete(requestId)
    return record
  }

  const cancelRequests = (requestIds: number[], reason = DEFAULT_CANCEL_REASON) => {
    requestIds.forEach((requestId) => {
      const record = activeRequests.get(requestId)
      if (!record) {
        return
      }

      record.canceled = true
      record.reason = reason
      if (record.counted) {
        pendingCount.value = Math.max(0, pendingCount.value - 1)
        record.counted = false
      }
    })
  }

  const run = async (...args: TArgs): Promise<Awaited<TData>> => {
    if (strategy === 'block' && pendingCount.value > 0) {
      throw new Error(BLOCK_REQUEST_MESSAGE)
    }

    if (strategy === 'latest' && activeRequests.size > 0) {
      cancelRequests(Array.from(activeRequests.keys()), LATEST_CANCEL_REASON)
    }

    error.value = undefined
    lastParams.value = args

    const requestId = ++requestSeed
    activeRequests.set(requestId, {
      canceled: false,
      counted: true,
      params: args
    })
    pendingCount.value += 1

    try {
      const result = await Promise.resolve(service(...args))
      const record = activeRequests.get(requestId)
      if (!record || record.canceled) {
        throw createCancelError(record?.reason)
      }

      data.value = result as Awaited<TData>
      options.onSuccess?.(result as Awaited<TData>, args)
      return result as Awaited<TData>
    } catch (caughtError) {
      const record = activeRequests.get(requestId)
      if (record?.canceled) {
        throw createCancelError(record.reason)
      }

      error.value = caughtError
      options.onError?.(caughtError, args)
      throw caughtError
    } finally {
      const settledRecord = settleRequest(requestId)
      if (settledRecord) {
        options.onFinally?.(settledRecord.params)
      }
    }
  }

  const refresh = (): Promise<Awaited<TData>> => {
    if (!lastParams.value) {
      throw new Error(REFRESH_BEFORE_RUN_MESSAGE)
    }

    return run(...lastParams.value)
  }

  const cancel = (reason?: string) => {
    cancelRequests(Array.from(activeRequests.keys()), reason)
  }

  const reset = () => {
    cancelRequests(Array.from(activeRequests.keys()), RESET_CANCEL_REASON)
    data.value = options.defaultData as Awaited<TData> | undefined
    error.value = undefined
    lastParams.value = undefined
  }

  return {
    loading,
    data,
    error,
    run,
    refresh,
    cancel,
    reset
  }
}
