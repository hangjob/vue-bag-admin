# PmProTable

`PmProTable` 是框架里内置的通用列表组件，主要拿来解决后台最常见的那类页面：查询、表格、分页，再加一个刷新。

## 适用场景

下面这些页面，基本都可以优先考虑它：

- 商品列表
- 订单列表
- 用户列表
- 操作日志
- 报表明细列表

## 基础用法

```vue
<template>
  <PmProTable
    ref="tableRef"
    title="商品列表"
    :columns="columns"
    :params="searchParams"
    :request="requestProducts"
  >
    <template #search>
      <div class="flex gap-3">
        <input v-model="keyword" placeholder="搜索商品名称" />
        <button @click="tableRef?.reload({ resetPage: true })">搜索</button>
      </div>
    </template>
  </PmProTable>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { PmProTable } from '@bag/ui'

const tableRef = ref<InstanceType<typeof PmProTable> | null>(null)
const keyword = ref('')

const searchParams = computed(() => ({
  keyword: keyword.value
}))

const columns = [
  { title: '商品名称', key: 'name' },
  { title: '分类', key: 'category' }
]

const requestProducts = async ({ page, pageSize, keyword }) => {
  return {
    list: [],
    total: 0
  }
}
</script>
```

## Props

| 属性名        | 类型                                   | 描述                                    |
| ------------- | -------------------------------------- | --------------------------------------- |
| `title`       | `string`                               | 表格标题。                              |
| `columns`     | `DataTableColumns`                     | Naive UI 表格列配置。                   |
| `request`     | `(params) => Promise<{ list, total }>` | 列表请求函数。                          |
| `params`      | `Record<string, unknown>`              | 额外查询参数，会合并到分页参数中。      |
| `rowKey`      | `string \| (row) => string \| number`  | 行唯一标识，默认使用 `id`。             |
| `immediate`   | `boolean`                              | 是否在组件挂载时立即请求，默认 `true`。 |
| `showToolbar` | `boolean`                              | 是否显示顶部工具栏区域。                |
| `showRefresh` | `boolean`                              | 是否显示默认刷新按钮。                  |

## request 入参

`request` 拿到的是一份合并后的参数对象：

```ts
type ProTableRequestParams = {
  page: number
  pageSize: number
  [key: string]: unknown
}
```

框架会自动把下面两部分参数合在一起再传进去：

- 分页参数：`page`、`pageSize`
- 外部参数：来自 `props.params`

## request 返回值

`request` 最终要返回：

```ts
type ProTableRequestResult<T = unknown> = {
  list: T[]
  total: number
}
```

含义很简单：

- `list`：当前页数据
- `total`：总记录数

## 插槽

### search

这个插槽放查询区，会透出两个方法：

- `reload`
- `reset`

```vue
<template #search="{ reload, reset }">
  <button @click="reload({ resetPage: true })">搜索</button>
  <button @click="reset()">重置</button>
</template>
```

### toolbar

这个插槽用来放自定义工具栏按钮，同时也会透出：

- `reload`
- `loading`

```vue
<template #toolbar="{ reload, loading }">
  <button :disabled="loading" @click="reload()">手动刷新</button>
</template>
```

### toolbar-prefix

放标题左侧的附加内容，比如筛选摘要、统计信息这类东西。

## 暴露方法

组件通过 `defineExpose()` 暴露了两个最常用的方法：

- `reload(options?: { resetPage?: boolean })`
- `reset()`

```ts
tableRef.value?.reload()
tableRef.value?.reload({ resetPage: true })
tableRef.value?.reset()
```

## 行主键 rowKey

默认会用 `row.id` 当主键。如果你的数据不是这个字段，也可以自己指定：

```vue
<PmProTable row-key="productId" />
```

```vue
<PmProTable :row-key="(row) => row.code" />
```

## 查询参数联动

当 `params` 发生变化时，`PmProTable` 会自动做两件事：

1. 回到第一页
2. 重新请求数据

所以它很适合和 `computed` 形式的查询参数一起用。

## 使用建议

- 一页一张表的场景，查询条件尽量都收进 `params`
- 点搜索时用 `reload({ resetPage: true })`，别自己手动折腾分页状态
- 点重置时直接调 `reset()`，组件已经把常见动作收好了
- 操作列比较复杂时，继续用 Naive UI 的 `render` 函数就行
- `request` 尽量保持纯一点，不要顺手去改组件外部状态
