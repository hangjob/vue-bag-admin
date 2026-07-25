# 请求与组件

业务插件最终需要完成两件事：从后端读取数据，并把数据组织成列表或表单。

`vue-bag-admin` 统一导出了请求能力和基础 UI 组件，业务项目不需要分别安装或导入 `@bag/request`、`@bag/ui`。

## 初始化请求

请求配置属于宿主，应在 `main.ts` 中完成一次：

```ts
import { getHostNavigationConfig, setupHttp, useUserStore } from 'vue-bag-admin'

const userStore = useUserStore()
const navigation = getHostNavigationConfig()

setupHttp({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  getToken: () => userStore.token,

  onUnauthorized: () => {
    userStore.logout()
    router.replace(navigation.loginPath)
  },

  onForbidden: () => {
    router.replace(navigation.forbiddenPath)
  },

  onServerError: (error) => {
    console.error('server error', error)
  },

  resolveError: (payload) => {
    const result = payload as {
      success?: boolean
      code?: string
      message?: string
    }

    return result?.success === false
      ? {
          code: result.code,
          message: result.message || 'Request failed'
        }
      : null
  }
})
```

请求层会：

- 在请求头中注入 `Authorization: Bearer <token>`。
- 默认返回 `response.data`。
- 将 401、403 和 5xx 交给对应钩子。
- 将 `resolveError()` 识别到的业务失败转成 `HttpError`。

## 封装业务 API

页面不应重复拼接接口路径。可以为插件创建 `src/api/products.ts`：

```ts
import { http } from 'vue-bag-admin'

export interface Product {
  id: number
  name: string
  status: string
}

interface ProductListResponse {
  list: Product[]
  total: number
}

export const getProducts = (params: { page: number; pageSize: number; keyword?: string }) => {
  return http.get<any, ProductListResponse>('/api/products', {
    params
  })
}

export const createProduct = (payload: { name: string; status: string }) => {
  return http.post('/api/products', payload)
}
```

插件页面只关心 `getProducts()` 和 `createProduct()`，不再处理 token 或通用错误。

## 页面请求状态

普通详情页可以使用 `useRequest()` 管理加载状态：

```ts
import { NSpin } from 'naive-ui'
import { http, useRequest } from 'vue-bag-admin'

interface ProductDetail {
  id: number
  name: string
}

const detailRequest = useRequest(
  (id: number) => http.get<any, ProductDetail>(`/api/products/${id}`),
  {
    strategy: 'latest'
  }
)

await detailRequest.run(1)
```

模板中可以直接读取：

```vue
<template>
  <n-spin :show="detailRequest.loading.value">
    <pre>{{ detailRequest.data.value }}</pre>
  </n-spin>
</template>
```

常用状态和方法：

- `loading`：是否正在执行。
- `data`：最近一次有效结果。
- `error`：最近一次错误。
- `run()`：执行请求。
- `refresh()`：使用上一次参数重新请求。
- `cancel()`：让当前执行失效。
- `reset()`：恢复初始状态。

## 使用 PmProTable

`PmProTable` 负责远程分页、加载状态和刷新：

```vue
<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { PmProTable } from 'vue-bag-admin'
import { getProducts, type Product } from '../api/products'

const columns: DataTableColumns<Product> = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: '商品名称',
    key: 'name'
  },
  {
    title: '状态',
    key: 'status'
  }
]

const request = async (params: { page: number; pageSize: number; [key: string]: unknown }) => {
  const result = await getProducts({
    page: params.page,
    pageSize: params.pageSize
  })

  return {
    list: result.list,
    total: result.total
  }
}
</script>

<template>
  <PmProTable title="商品列表" :columns="columns" :request="request" row-key="id" />
</template>
```

`request` 必须返回：

```ts
{
  list: T[]
  total: number
}
```

如果后端返回的数据结构不同，在 API 层或 `request` 函数中完成映射。

## 使用 PmProForm

`PmProForm` 根据 Schema 渲染表单：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { PmProForm, type ProFormSchema } from 'vue-bag-admin'
import { createProduct } from '../api/products'

const formData = ref({
  name: '',
  status: 'draft'
})

const submitting = ref(false)

const schemas: ProFormSchema[] = [
  {
    field: 'name',
    label: '商品名称',
    component: 'input',
    required: true
  },
  {
    field: 'status',
    label: '状态',
    component: 'select',
    required: true,
    options: [
      {
        label: '草稿',
        value: 'draft'
      },
      {
        label: '已上架',
        value: 'published'
      }
    ]
  }
]

const submit = async ({ values }: { values: Record<string, unknown> }) => {
  submitting.value = true

  try {
    await createProduct({
      name: String(values.name),
      status: String(values.status)
    })
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <PmProForm
    v-model="formData"
    title="商品信息"
    :schemas="schemas"
    :submit-loading="submitting"
    @submit="submit"
  />
</template>
```

常用字段类型包括 `input`、`textarea`、`select`、`switch`、`radio`、`checkbox`、`date`、`number` 和 `slot`。

## 请求与组件的边界

- `setupHttp()` 只在宿主初始化一次。
- 插件把接口封装到自己的 `api` 目录。
- 页面使用 `useRequest()` 管理详情或动作请求。
- 列表页使用 `PmProTable` 统一分页返回结构。
- 编辑页使用 `PmProForm` 和 `ProFormSchema`。
- 复杂交互仍然可以直接组合 Naive UI，不要求所有页面都 Schema 化。

## 延伸阅读

- [网络请求与拦截](./network-request.md)
- [PmProTable](./pro-table.md)
- [PmProForm](./pro-form.md)
- [字典系统](./dictionary-system.md)

完成核心开发后，可以继续安装[官方插件](./official-plugins/index.md)，或者开始[开发自己的插件](./plugins/create-plugin.md)。
