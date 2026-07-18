<template>
  <div class="pm-pro-table">
    <div
      v-if="$slots.search"
      class="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <slot name="search" :reload="reload" :reset="reset" />
    </div>

    <div
      v-if="title || showToolbar || $slots.toolbar"
      class="mb-4 flex flex-wrap items-center justify-between gap-3"
    >
      <div class="flex items-center gap-3">
        <h3 v-if="title" class="text-lg font-medium">{{ title }}</h3>
        <slot name="toolbar-prefix" />
      </div>

      <div class="flex items-center gap-2">
        <slot name="toolbar" :reload="reload" :loading="loading" />
        <button
          v-if="showRefresh"
          type="button"
          class="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition-colors hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:text-slate-300"
          @click="reload()"
        >
          刷新
        </button>
      </div>
    </div>

    <n-data-table
      :columns="columns"
      :data="tableData"
      :loading="loading"
      :pagination="pagination"
      :remote="true"
      :row-key="resolvedRowKey"
      @update:page="handlePageChange"
      @update:page-size="handlePageSizeChange"
    />
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown> = Record<string, unknown>">
import { onMounted, reactive, ref, watch } from 'vue'
import { NDataTable, type DataTableColumns } from 'naive-ui'

export interface ProTableRequestParams {
  page: number
  pageSize: number
  [key: string]: unknown
}

export interface ProTableRequestResult<T = Record<string, unknown>> {
  list: T[]
  total: number
}

export type TableRowKey<TData extends Record<string, unknown>> =
  | Extract<keyof TData, string>
  | ((row: TData) => string | number)

export interface Props<TData extends Record<string, unknown>> {
  title?: string
  columns: DataTableColumns<TData>
  request: (params: ProTableRequestParams) => Promise<ProTableRequestResult<TData>>
  params?: Record<string, unknown>
  rowKey?: TableRowKey<TData>
  immediate?: boolean
  showToolbar?: boolean
  showRefresh?: boolean
}

const props = withDefaults(defineProps<Props<T>>(), {
  title: '',
  params: () => ({}),
  rowKey: 'id' as TableRowKey<T>,
  immediate: true,
  showToolbar: true,
  showRefresh: true
})

const loading = ref(false)
const tableData = ref<T[]>([])
const pagination = reactive({
  page: 1,
  pageSize: 10,
  itemCount: 0,
  showSizePicker: true,
  pageSizes: [10, 20, 50]
})

// 对外允许传字段名或函数，这里统一收口成 Naive UI 需要的函数签名。
const resolvedRowKey = (row: T): string | number => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row)
  }
  const rowKey = props.rowKey as Extract<keyof T, string>
  return row[rowKey] as string | number
}

const fetchData = async () => {
  loading.value = true
  try {
    const res = await props.request({
      page: pagination.page,
      pageSize: pagination.pageSize,
      ...props.params
    })
    tableData.value = res.list
    pagination.itemCount = res.total
  } catch (error) {
    console.error('Failed to fetch table data', error)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page: number) => {
  pagination.page = page
  fetchData()
}

const handlePageSizeChange = (pageSize: number) => {
  pagination.page = 1
  pagination.pageSize = pageSize
  fetchData()
}

const reload = (options?: { resetPage?: boolean }) => {
  if (options?.resetPage) {
    pagination.page = 1
  }
  fetchData()
}

const reset = () => {
  pagination.page = 1
  pagination.pageSize = 10
  fetchData()
}

// 外部查询参数变化时默认回到第一页，符合后台列表页常见交互。
watch(
  () => props.params,
  () => {
    reload({ resetPage: true })
  },
  { deep: true }
)

onMounted(() => {
  if (props.immediate) {
    fetchData()
  }
})

// 暴露给父组件的常用操作，方便页面层主动刷新或重置列表。
defineExpose({
  reload,
  reset
})
</script>
