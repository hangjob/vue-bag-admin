import { registerDictionaries, type DictionaryDefinition } from 'vue-bag-admin'

const builtinDictionaries: DictionaryDefinition[] = [
  {
    code: 'workspace-mode',
    options: [
      {
        label: '专注模式',
        value: 'focus',
        tagType: 'info'
      },
      {
        label: '协作模式',
        value: 'collaboration',
        tagType: 'success'
      },
      {
        label: '创意模式',
        value: 'creative',
        tagType: 'warning'
      }
    ]
  },
  {
    code: 'audit-log-type',
    options: [
      {
        label: '安全操作',
        value: 'security',
        tagType: 'info'
      },
      {
        label: '登录行为',
        value: 'login',
        tagType: 'success'
      },
      {
        label: '数据导出',
        value: 'export',
        tagType: 'warning'
      },
      {
        label: '系统配置',
        value: 'system',
        tagType: 'primary'
      }
    ]
  }
]

export const setupBuiltinDictionaries = () => {
  registerDictionaries(builtinDictionaries)
}
