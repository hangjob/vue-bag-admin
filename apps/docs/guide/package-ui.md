# @bag/ui

`@bag/ui` 是组件层，主要干的就是两件事：把后台里最容易重复的列表页和表单页先沉下来，然后直接吃 `@bag/core` 里定义的 Schema 和字典协议。

## 现在有这些组件

- `PmProTable`
- `PmSchemaForm`
- `PmProForm`
- `PmDictTag`
- `BagUiProvider`

## 最常见的用法

### 用 `PmProForm` 搭表单

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { PmProForm } from '@bag/ui'
import type { ProFormSchema } from '@bag/core'

const formData = ref({
  name: '',
  status: 1
})

const schemas: ProFormSchema[] = [
  {
    field: 'name',
    label: '商品名称',
    component: 'input',
    required: true
  },
  {
    field: 'status',
    label: '商品状态',
    component: 'select',
    options: [
      { label: '上架', value: 1 },
      { label: '下架', value: 0 }
    ]
  }
]
</script>

<template>
  <PmProForm
    v-model="formData"
    title="商品信息"
    :schemas="schemas"
    @submit="({ values }) => console.log(values)"
  />
</template>
```

### 用 `PmProTable` 搭列表

```vue
<script setup lang="ts">
import { PmProTable } from '@bag/ui'

const request = async ({ page, pageSize }: { page: number; pageSize: number }) => {
  return {
    list: [{ id: 1, name: '演示商品' }],
    total: 1
  }
}
</script>

<template>
  <PmProTable :columns="[]" :request="request" />
</template>
```

## 它值在哪

- 表单和列表页的重复代码会少很多
- 页面能直接吃 Schema 和字典协议
- 宿主和插件之间更容易共享页面搭建方式
- 基于 `naive-ui`，比较适合快速搭中后台

## 边界

- 它不负责插件挂载和宿主初始化
- 它不定义 Schema 协议本身，那部分来自 `@bag/core`
- 它更偏“通用积木层”，复杂业务流程还是建议在页面层自己组合扩展

## 继续阅读

- [PmProTable](./pro-table.md)
- [PmProForm](./pro-form.md)
- [字典系统](./dictionary-system.md)
