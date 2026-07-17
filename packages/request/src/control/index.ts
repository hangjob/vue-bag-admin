import debounce from 'lodash-es/debounce'
import throttle from 'lodash-es/throttle'
import type { DebounceSettings } from 'lodash-es'
export * from './use-request'

type Awaitable<T> = T | Promise<T>

export interface RequestControlOptions {
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

export interface ControlledRequest<TArgs extends unknown[], TResult> {
  (...args: TArgs): Promise<Awaited<TResult>>
  cancel: (reason?: string) => void
  flush: () => Promise<Awaited<TResult> | undefined>
  pending: () => boolean
}

export type RequestHandler<TArgs extends unknown[] = unknown[], TResult = unknown> = (
  ...args: TArgs
) => Awaitable<TResult>

interface Deferred<T> {
  promise: Promise<T>
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: unknown) => void
}

const createDeferred = <T>() => {
  let resolve!: Deferred<T>['resolve']
  let reject!: Deferred<T>['reject']

  const promise = new Promise<T>((innerResolve, innerReject) => {
    resolve = innerResolve
    reject = innerReject
  })

  return {
    promise,
    resolve,
    reject
  } satisfies Deferred<T>
}

const createCanceledError = (reason?: string) => {
  return new Error(reason ?? 'Request execution canceled.')
}

const normalizeControlOptions = (
  options: RequestControlOptions | undefined,
  defaults: Required<Pick<RequestControlOptions, 'leading' | 'trailing'>>
) => {
  const normalized = {
    leading: options?.leading ?? defaults.leading,
    trailing: options?.trailing ?? defaults.trailing,
    maxWait: options?.maxWait
  }

  if (!normalized.leading && !normalized.trailing) {
    throw new Error('At least one of leading or trailing must be enabled.')
  }

  return normalized
}

const executeHandler = <TArgs extends unknown[], TResult>(
  handler: RequestHandler<TArgs, TResult>,
  thisArg: unknown,
  args: TArgs,
  deferred?: Deferred<Awaited<TResult>>
) => {
  const execution = Promise.resolve(handler.apply(thisArg, args)) as Promise<Awaited<TResult>>

  if (deferred) {
    void execution.then(deferred.resolve, deferred.reject)
  }

  return execution
}

const toLodashOptions = (options: RequestControlOptions): DebounceSettings => {
  return {
    leading: options.leading,
    trailing: options.trailing,
    maxWait: options.maxWait
  }
}

export const debounceRequest = <TArgs extends unknown[], TResult>(
  handler: RequestHandler<TArgs, TResult>,
  wait: number,
  options?: RequestControlOptions
): ControlledRequest<TArgs, TResult> => {
  const config = normalizeControlOptions(options, {
    leading: false,
    trailing: true
  })
  let trailingDeferred: Deferred<Awaited<TResult>> | null = null
  let lastExecution: Promise<Awaited<TResult>> | null = null
  let pending = false

  const invoke = (thisArg: unknown, args: TArgs) => {
    const deferred = trailingDeferred
    trailingDeferred = null
    pending = false
    lastExecution = executeHandler(handler, thisArg, args, deferred ?? undefined)
    return lastExecution
  }

  const schedule = debounce(
    (thisArg: unknown, args: TArgs) => {
      void invoke(thisArg, args)
    },
    wait,
    toLodashOptions(config)
  )

  const wrapped = function (this: unknown, ...args: TArgs) {
    if (!config.trailing) {
      pending = true
      schedule(this, args)
      return (
        lastExecution ?? Promise.reject(createCanceledError('Request skipped by debounce control.'))
      )
    }

    const deferred = trailingDeferred ?? createDeferred<Awaited<TResult>>()
    trailingDeferred = deferred
    pending = true
    schedule(this, args)
    return deferred.promise
  } as ControlledRequest<TArgs, TResult>

  wrapped.cancel = (reason?: string) => {
    schedule.cancel()
    pending = false
    if (trailingDeferred) {
      trailingDeferred.reject(createCanceledError(reason))
      trailingDeferred = null
    }
  }

  wrapped.flush = () => {
    if (!pending) {
      return Promise.resolve(undefined)
    }

    schedule.flush()
    return trailingDeferred?.promise ?? lastExecution ?? Promise.resolve(undefined)
  }

  wrapped.pending = () => {
    return pending
  }

  return wrapped
}

export const throttleRequest = <TArgs extends unknown[], TResult>(
  handler: RequestHandler<TArgs, TResult>,
  wait: number,
  options?: RequestControlOptions
): ControlledRequest<TArgs, TResult> => {
  const config = normalizeControlOptions(options, {
    leading: true,
    trailing: true
  })
  let trailingDeferred: Deferred<Awaited<TResult>> | null = null
  let lastExecution: Promise<Awaited<TResult>> | null = null
  let pending = false

  const invoke = (thisArg: unknown, args: TArgs) => {
    const deferred = trailingDeferred
    trailingDeferred = null
    pending = false
    lastExecution = executeHandler(handler, thisArg, args, deferred ?? undefined)
    return lastExecution
  }

  const schedule = throttle(
    (thisArg: unknown, args: TArgs) => {
      void invoke(thisArg, args)
    },
    wait,
    toLodashOptions(config)
  )

  const wrapped = function (this: unknown, ...args: TArgs) {
    if (!config.trailing) {
      pending = true
      schedule(this, args)
      return (
        lastExecution ?? Promise.reject(createCanceledError('Request skipped by throttle control.'))
      )
    }

    const deferred = trailingDeferred ?? createDeferred<Awaited<TResult>>()
    trailingDeferred = deferred
    pending = true
    schedule(this, args)
    return deferred.promise
  } as ControlledRequest<TArgs, TResult>

  wrapped.cancel = (reason?: string) => {
    schedule.cancel()
    pending = false
    if (trailingDeferred) {
      trailingDeferred.reject(createCanceledError(reason))
      trailingDeferred = null
    }
  }

  wrapped.flush = () => {
    if (!pending) {
      return Promise.resolve(undefined)
    }

    schedule.flush()
    return trailingDeferred?.promise ?? lastExecution ?? Promise.resolve(undefined)
  }

  wrapped.pending = () => {
    return pending
  }

  return wrapped
}
