<template>
  <div class="pm-pro-table">
    <div class="mb-4 flex justify-between items-center">
      <h3 class="text-lg font-medium">{{ title }}</h3>
      <div>
        <slot name="toolbar"></slot>
      </div>
    </div>
    
    <n-data-table
      :columns="columns"
      :data="tableData"
      :loading="loading"
      :pagination="pagination"
      @update:page="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { NDataTable } from 'naive-ui'

const props = defineProps<{
  title?: string
  columns: any[]
  request: (params: any) => Promise<{ list: any[], total: number }>
}>()

const loading = ref(false)
const tableData = ref<any[]>([])
const pagination = reactive({
  page: 1,
  pageSize: 10,
  itemCount: 0,
  showSizePicker: true,
  pageSizes: [10, 20, 50]
})

const fetchData = async () => {
  loading.value = true
  try {
    const res = await props.request({
      page: pagination.page,
      pageSize: pagination.pageSize
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

onMounted(() => {
  fetchData()
})

// 暴露给父组件的方法
defineExpose({
  reload: fetchData
})
</script>
