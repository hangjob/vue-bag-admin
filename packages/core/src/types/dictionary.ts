export type DictionaryValue = string | number | boolean

export interface DictionaryOption {
  label: string
  value: DictionaryValue
  color?: string
  textColor?: string
  tagType?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
  description?: string
}

export interface DictionaryDefinition {
  code: string
  options?: DictionaryOption[]
  ttl?: number
  getOptions?: () => Promise<DictionaryOption[]>
}
