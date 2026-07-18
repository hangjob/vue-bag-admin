import type { DictionaryDefinition, DictionaryOption, DictionaryValue } from './types/dictionary'
export declare const registerDictionary: (definition: DictionaryDefinition) => void
export declare const registerDictionaries: (definitions: DictionaryDefinition[]) => void
export declare const getDictionaryDefinition: (code: string) => DictionaryDefinition | undefined
export declare const getCachedDictionaryOptions: (code: string) => DictionaryOption[]
export declare const clearDictionaryCache: (code?: string) => void
export declare const resolveDictionaryOptions: (
  code: string,
  force?: boolean
) => Promise<DictionaryOption[]>
export declare const getDictionaryOption: (
  code: string,
  value: DictionaryValue
) => Promise<DictionaryOption | undefined>
