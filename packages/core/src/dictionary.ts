import type { DictionaryDefinition, DictionaryOption, DictionaryValue } from './types/dictionary'

type DictionaryCacheEntry = {
  options: DictionaryOption[]
  loadedAt: number
}

const dictionaryRegistry = new Map<string, DictionaryDefinition>()
const dictionaryCache = new Map<string, DictionaryCacheEntry>()

export const registerDictionary = (definition: DictionaryDefinition) => {
  dictionaryRegistry.set(definition.code, definition)

  if (definition.options) {
    dictionaryCache.set(definition.code, {
      options: definition.options,
      loadedAt: Date.now()
    })
  }
}

export const registerDictionaries = (definitions: DictionaryDefinition[]) => {
  definitions.forEach(registerDictionary)
}

export const getDictionaryDefinition = (code: string) => dictionaryRegistry.get(code)

export const getCachedDictionaryOptions = (code: string) => dictionaryCache.get(code)?.options ?? []

export const clearDictionaryCache = (code?: string) => {
  if (code) {
    dictionaryCache.delete(code)
    return
  }
  dictionaryCache.clear()
}

const isCacheValid = (definition: DictionaryDefinition, entry?: DictionaryCacheEntry) => {
  if (!entry) return false
  if (!definition.ttl) return entry.options.length > 0
  return Date.now() - entry.loadedAt < definition.ttl
}

export const resolveDictionaryOptions = async (code: string, force = false) => {
  const definition = dictionaryRegistry.get(code)
  if (!definition) {
    throw new Error(`[Dictionary] unknown code: ${code}`)
  }

  const cachedEntry = dictionaryCache.get(code)
  if (!force && isCacheValid(definition, cachedEntry)) {
    return cachedEntry?.options ?? []
  }

  if (definition.options) {
    dictionaryCache.set(code, {
      options: definition.options,
      loadedAt: Date.now()
    })
    return definition.options
  }

  if (!definition.getOptions) {
    return []
  }

  const options = await definition.getOptions()
  dictionaryCache.set(code, {
    options,
    loadedAt: Date.now()
  })
  return options
}

export const getDictionaryOption = async (code: string, value: DictionaryValue) => {
  const options = await resolveDictionaryOptions(code)
  return options.find((option) => option.value === value)
}
