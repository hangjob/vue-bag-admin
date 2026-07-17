# @bag/ui

`@bag/ui` 是这套后台框架里的通用组件层。它不追求把所有页面都抽成组件，而是先把中后台里最容易反复写的两块收下来：列表页和表单页。

如果你已经开始写业务页，很快就会发现它的价值基本都落在“少写重复代码”这件事上。

当前公开的核心组件有这几个：

- `PmProTable`: 远程分页表格
- `PmSchemaForm`: 纯 Schema 渲染层
- `PmProForm`: 带校验、动作区和实例方法的表单壳
- `PmDictTag`: 字典标签渲染
- `BagUiProvider`: Naive UI 主题与语言提供器

## 安装

```bash
pnpm add @bag/ui @bag/core naive-ui
```

`@bag/ui` 当前把 `vue`、`naive-ui` 和 `@bag/core` 作为 `peerDependencies`。其中 `@bag/core` 提供了 Schema 和字典协议。

## 它主要管什么

- 用 `ProFormSchema` 去渲染表单项
- 把表单默认占位文案、校验规则和按钮区先收好
- 给远程分页表格提供一个顺手能用的基础壳
- 把字典选项和字典标签显示统一到一套组件里
- 顺带提供一层开箱即用的 Naive UI provider

## 表单示例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { PmProForm } from '@bag/ui'
import { registerDictionary, type ProFormSchema } from '@bag/core'

registerDictionary({
  code: 'productStatus',
  options: [
    { label: '上架', value: 1, tagType: 'success' },
    { label: '下架', value: 0, tagType: 'warning' }
  ]
})

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
    dictCode: 'productStatus'
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

## 列表示例

```vue
<script setup lang="ts">
import { h, ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { PmDictTag, PmProTable } from '@bag/ui'

interface ProductRow {
  id: number
  name: string
  status: number
}

const params = ref({
  keyword: ''
})

const columns: DataTableColumns<ProductRow> = [
  {
    title: '商品名称',
    key: 'name'
  },
  {
    title: '状态',
    key: 'status',
    render: (row) => h(PmDictTag, { code: 'productStatus', value: row.status })
  }
]

const request = async ({ page, pageSize }: { page: number; pageSize: number }) => {
  return {
    list: [{ id: 1, name: '演示商品', status: 1 }],
    total: 1
  }
}
</script>

<template>
  <PmProTable title="商品列表" :columns="columns" :params="params" :request="request" />
</template>
```

## Provider 示例

```vue
<script setup lang="ts">
import { BagUiProvider } from '@bag/ui'
</script>

<template>
  <BagUiProvider lang="zh-CN" theme="light" theme-color="#F4B740">
    <router-view />
  </BagUiProvider>
</template>
```

## 对外导出

- `PmProTable`
- `PmSchemaForm`
- `PmProForm`
- `PmDictTag`
- `BagUiProvider`

## 边界

- 这个包只做后台通用组件，不接宿主路由、权限和插件引导。
- Schema 协议和字典注册不在这里定义，那部分在 `@bag/core`。
- 当前组件默认基于 `naive-ui`，重点是让你更快把页面搭起来，不是做一套完全无样式的底层库。
- 它更像“效率层”，复杂业务交互还是建议在页面侧通过插槽或组合组件自己接。

## 一般会一起用

- `@bag/core`：提供表单 Schema 和字典协议
- `@bag/host-vue`：提供宿主布局、权限和插件挂载
- `@bag/plugin-*`：业务插件里直接复用这些 UI 组件
