# PmProForm

`PmProForm` 是框架里内置的通用表单组件，主要处理后台里最常见的几类页面：新增、编辑、搜索和详情展示。

我做它的出发点很直接，就是把那些反复出现的字段声明、校验、布局和提交动作收起来，别让页面里到处都是重复的 `NFormItem`。

## 适用场景

这些页面很适合优先上 `PmProForm`：

- 个人信息编辑
- 商品新增与编辑
- 系统配置表单
- 查询筛选区
- 详情页只读表单

## 基础用法

```vue
<template>
  <PmProForm
    v-model="formValue"
    :schemas="schemas"
    title="编辑资料"
    submit-text="保存更改"
    @submit="handleSubmit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ProFormSchema, ProFormSubmitContext } from '@bag/core'
import { PmProForm } from '@bag/ui'

const formValue = ref({
  username: '',
  nickname: '',
  email: '',
  bio: ''
})

const schemas: ProFormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'input',
    required: true
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'input'
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'input',
    required: true
  },
  {
    field: 'bio',
    label: '个人简介',
    component: 'textarea',
    placeholder: '一句话介绍自己...'
  }
]

const handleSubmit = ({ values }: ProFormSubmitContext) => {
  console.log(values)
}
</script>
```

## 支持的字段类型

第一版先收这些高频字段：

- `input`
- `textarea`
- `select`
- `switch`
- `radio`
- `checkbox`
- `date`
- `number`
- `slot`

## Schema 字段说明

```ts
type ProFormSchema = {
  field: string
  component:
    | 'input'
    | 'textarea'
    | 'select'
    | 'switch'
    | 'radio'
    | 'checkbox'
    | 'date'
    | 'number'
    | 'slot'
  dictCode?: string
  label?: string
  description?: string
  placeholder?: string
  defaultValue?: unknown
  required?: boolean
  rules?: unknown[]
  options?: Array<{ label: string; value: string | number | boolean; disabled?: boolean }>
  componentProps?: Record<string, unknown>
  formItemProps?: Record<string, unknown>
  span?: number
  visible?: boolean | ((values, schema) => boolean)
  disabled?: boolean | ((values, schema) => boolean)
  slotName?: string
}
```

## Props

| 属性名                 | 类型                                   | 描述                             |
| ---------------------- | -------------------------------------- | -------------------------------- |
| `modelValue`           | `Record<string, unknown>`              | 表单值对象。                     |
| `schemas`              | `ProFormSchema[]`                      | 字段 schema 配置。               |
| `title`                | `string`                               | 表单标题。                       |
| `description`          | `string`                               | 表单说明文案。                   |
| `cols`                 | `string \| number`                     | 栅格列数，默认 `1 s:1 m:2 l:2`。 |
| `xGap`                 | `number`                               | 横向间距。                       |
| `yGap`                 | `number`                               | 纵向间距。                       |
| `showActions`          | `boolean`                              | 是否显示底部操作区。             |
| `showSubmit`           | `boolean`                              | 是否显示提交按钮。               |
| `showReset`            | `boolean`                              | 是否显示重置按钮。               |
| `submitText`           | `string`                               | 提交按钮文案。                   |
| `resetText`            | `string`                               | 重置按钮文案。                   |
| `submitLoading`        | `boolean`                              | 提交按钮 loading 状态。          |
| `labelPlacement`       | `'top' \| 'left'`                      | 表单标签布局。                   |
| `requireMarkPlacement` | `'left' \| 'right' \| 'right-hanging'` | 必填标记位置。                   |
| `actionsAlign`         | `'left' \| 'right'`                    | 底部按钮对齐方式。               |

## 提交事件

触发 `@submit` 时，会拿到这样一份上下文：

```ts
type ProFormSubmitContext = {
  values: Record<string, unknown>
  reset: () => void
}
```

是否在提交成功后调用 `reset()`，由页面自己决定。

## 动态显隐与禁用

字段的显示和禁用状态都可以用函数控制，这样做联动时会顺手很多：

```ts
{
  field: 'reason',
  label: '停用原因',
  component: 'textarea',
  visible: (values) => values.status === 'disabled'
}
```

```ts
{
  field: 'nickname',
  label: '昵称',
  component: 'input',
  disabled: (values) => values.locked === true
}
```

## 选项类字段

`select`、`radio`、`checkbox` 这类字段可以直接用 `options` 填选项：

```ts
{
  field: 'role',
  label: '角色',
  component: 'select',
  options: [
    { label: '管理员', value: 'admin' },
    { label: '运营', value: 'operator' }
  ]
}
```

如果项目里已经接了字典系统，也可以直接写 `dictCode`：

```ts
{
  field: 'workMode',
  label: '工作模式',
  component: 'select',
  dictCode: 'workspace-mode'
}
```

## 自定义插槽

有些区域天生就不适合被 schema 完全描述，这时候可以把字段类型设成 `slot`，把渲染权交回页面：

```vue
<PmProForm v-model="formValue" :schemas="schemas">
  <template #customBlock="{ values, setFieldValue }">
    <div>这里放自定义内容</div>
  </template>
</PmProForm>
```

```ts
{
  field: 'customBlock',
  component: 'slot',
  slotName: 'customBlock'
}
```

## 暴露方法

组件通过 `defineExpose()` 暴露了几个最常用的方法：

- `validate()`
- `reset()`
- `setValues(values)`
- `getValues()`

```ts
const formRef = ref<InstanceType<typeof PmProForm> | null>(null)

await formRef.value?.validate()
formRef.value?.setValues({ nickname: 'New Name' })
formRef.value?.reset()
```

## 使用建议

- 页面级表单尽量收敛成 `schemas`，不要让 `NFormItem` 在页面里散开
- 通用字段能写 `defaultValue` 就尽量写，新增页和重置时会省事很多
- 复杂区块直接用 `slot`，别为了“统一”把所有东西都硬塞进协议里
- `select` 这类字段优先考虑和字典系统对接，后面维护会轻松不少
