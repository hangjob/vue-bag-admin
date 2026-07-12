# 字典系统

当前框架内置了一套轻量字典系统，用来统一管理：

- 状态文案
- 选项列表
- 标签颜色
- 表单下拉数据

## 能解决什么问题

如果没有统一字典层，后台项目里很容易出现这些问题：

- 表格里一套状态文案
- 表单里另一套下拉选项
- 详情页又手写一套颜色映射

字典系统的目标，就是把这些重复映射收敛到统一注册中心。

## 核心结构

字典协议定义在：

- `/packages/core/src/types/dictionary.ts`

运行时注册与缓存能力在：

- `/packages/core/src/dictionary.ts`

字典项结构如下：

```ts
type DictionaryOption = {
  label: string
  value: string | number | boolean
  color?: string
  textColor?: string
  tagType?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
  description?: string
}
```

## 注册字典

在宿主应用中，推荐集中注册内置字典：

```ts
import { registerDictionaries } from '@bag/core'

registerDictionaries([
  {
    code: 'workspace-mode',
    options: [
      { label: '专注模式', value: 'focus', tagType: 'info' },
      { label: '协作模式', value: 'collaboration', tagType: 'success' }
    ]
  }
])
```

当前项目的内置字典入口在：

- `/apps/admin/src/dictionaries/index.ts`

并且已经在应用启动时接入：

- `/apps/admin/src/main.ts`

## 运行时 API

`@bag/core` 当前暴露了这些方法：

- `registerDictionary(definition)`
- `registerDictionaries(definitions)`
- `getDictionaryDefinition(code)`
- `getCachedDictionaryOptions(code)`
- `resolveDictionaryOptions(code, force?)`
- `getDictionaryOption(code, value)`
- `clearDictionaryCache(code?)`

## 在 PmProForm 中使用

`PmSchemaForm` 和 `PmProForm` 已经支持通过 `dictCode` 自动解析选项：

```ts
{
  field: 'workMode',
  label: '工作模式',
  component: 'select',
  dictCode: 'workspace-mode'
}
```

这意味着 `select`、`radio`、`checkbox` 不一定要手写 `options`。

## 使用字典标签

如果你想把状态渲染成统一标签，可以使用 `PmDictTag`：

```vue
<PmDictTag code="audit-log-type" :value="log.type" />
```

当前组件在这里：

- `/packages/ui/src/components/PmDictTag.vue`

## 异步字典

除了静态 `options`，也支持通过 `getOptions` 懒加载：

```ts
registerDictionary({
  code: 'remote-user-status',
  ttl: 5 * 60 * 1000,
  async getOptions() {
    return [
      { label: '启用', value: 1, tagType: 'success' },
      { label: '禁用', value: 0, tagType: 'warning' }
    ]
  }
})
```

当字典带 `ttl` 时，运行时会优先读取缓存，超过有效期后再重新拉取。

## 当前建议

- 枚举型状态优先走字典系统，不要在页面里重复维护 `statusMap`
- 表单类选项优先用 `dictCode`，方便后面统一替换成远程字典
- 表格状态展示优先用 `PmDictTag`，让颜色和文案保持一致
