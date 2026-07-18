export type ProFormComponentType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'switch'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'number'
  | 'slot'
export interface ProFormOption {
  label: string
  value: string | number | boolean
  disabled?: boolean
}
export interface ProFormSchema {
  field: string
  component: ProFormComponentType
  dictCode?: string
  label?: string
  description?: string
  placeholder?: string
  defaultValue?: unknown
  required?: boolean
  rules?: unknown[]
  options?: ProFormOption[]
  componentProps?: Record<string, unknown>
  formItemProps?: Record<string, unknown>
  span?: number
  visible?: boolean | ((values: Record<string, unknown>, schema: ProFormSchema) => boolean)
  disabled?: boolean | ((values: Record<string, unknown>, schema: ProFormSchema) => boolean)
  slotName?: string
}
export interface ProFormSubmitContext {
  values: Record<string, unknown>
  reset: () => void
}
export interface ProFormInstance {
  validate: () => Promise<boolean>
  reset: () => void
  setValues: (values: Record<string, unknown>) => void
  getValues: () => Record<string, unknown>
}
