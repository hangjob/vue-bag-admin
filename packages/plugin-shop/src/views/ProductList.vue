<template>
  <div
    class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800"
  >
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">商品列表</h2>
      <button
        v-permission="{ permissions: ['shop.product.publish'], roles: ['authenticated'] }"
        @click="router.push('/product/publish')"
        class="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        发布商品
      </button>
    </div>

    <PmProTable
      ref="tableRef"
      title="商品列表"
      :columns="columns"
      :params="searchParams"
      :request="requestProducts"
    >
      <template #search>
        <div class="flex flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <input
              v-model="keyword"
              type="text"
              placeholder="搜索商品名称 / 编码"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200"
            />
          </div>
          <div class="w-40">
            <n-select
              v-model:value="searchCategory"
              :options="categoryOptions"
              placeholder="全部分类"
            />
          </div>
          <div class="w-40">
            <n-select
              v-model:value="searchStatus"
              :options="statusOptions"
              placeholder="全部状态"
            />
          </div>
          <button
            class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium"
            @click="handleSearch"
          >
            搜索
          </button>
        </div>
      </template>
    </PmProTable>
  </div>
</template>

<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  NButton,
  NImage,
  NSelect,
  NSpace,
  NTag,
  useDialog,
  useMessage,
  type DataTableColumns
} from 'naive-ui'
import { PmProTable } from '@bag/ui'

const router = useRouter()
const dialog = useDialog()
const message = useMessage()
const tableRef = ref<InstanceType<typeof PmProTable> | null>(null)

// Search State
const keyword = ref('')
const searchCategory = ref<string | null>(null)
const searchStatus = ref<string | null>(null)
const searchParams = computed(() => ({
  keyword: keyword.value.trim(),
  category: searchCategory.value,
  status: searchStatus.value
}))

const categoryOptions = [
  { label: '女装', value: '1' },
  { label: '男装', value: '2' },
  { label: '数码', value: '3' },
  { label: '美妆', value: '4' }
]

const statusOptions = [
  { label: '上架中', value: 'on' },
  { label: '已下架', value: 'off' }
]

type ProductItem = {
  id: number
  name: string
  code: string
  category: string
  price: string
  stock: number
  sales: string
  status: 'on' | 'off'
  image: string
}

const products = ref<ProductItem[]>([
  {
    id: 1,
    name: '秋季法式高级感收腰风衣',
    code: 'W-001',
    category: '女装 / 外套',
    price: '458.00',
    stock: 125,
    sales: '2,845',
    status: 'on',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: '复古真皮单肩斜挎包',
    code: 'B-023',
    category: '箱包 / 单肩包',
    price: '299.00',
    stock: 48,
    sales: '1,932',
    status: 'on',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: '降噪蓝牙耳机 Pro Max',
    code: 'E-105',
    category: '数码 / 耳机',
    price: '899.00',
    stock: 0,
    sales: '1,520',
    status: 'off',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aec89155a9?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: '韩版宽松慵懒风毛衣',
    code: 'W-012',
    category: '女装 / 毛衣',
    price: '159.00',
    stock: 320,
    sales: '1,245',
    status: 'on',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: '美白补水保湿面膜套装',
    code: 'M-008',
    category: '美妆 / 护肤',
    price: '128.00',
    stock: 560,
    sales: '986',
    status: 'on',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop'
  }
])

const handleDelete = (item: ProductItem) => {
  dialog.warning({
    title: '删除商品',
    content: `确定要删除商品「${item.name}」吗？此操作不可恢复。`,
    positiveText: '确定',
    negativeText: '取消',
    style: {
      borderRadius: '12px'
    },
    onPositiveClick: () => {
      products.value = products.value.filter((p) => p.id !== item.id)
      message.success('删除成功')
    }
  })
}

const handleSearch = () => {
  tableRef.value?.reload({ resetPage: true })
}

const requestProducts = async (params: {
  page: number
  pageSize: number
  keyword?: string
  category?: string | null
  status?: string | null
}) => {
  let list = [...products.value]

  if (params.keyword) {
    const keywordValue = params.keyword.toLowerCase()
    list = list.filter((item) => {
      return (
        item.name.toLowerCase().includes(keywordValue) ||
        item.code.toLowerCase().includes(keywordValue)
      )
    })
  }

  if (params.category) {
    const matchedCategory = categoryOptions.find((item) => item.value === params.category)?.label
    if (matchedCategory) {
      list = list.filter((item) => item.category.includes(matchedCategory))
    }
  }

  if (params.status) {
    list = list.filter((item) => item.status === params.status)
  }

  const start = (params.page - 1) * params.pageSize
  const end = start + params.pageSize

  return {
    list: list.slice(start, end),
    total: list.length
  }
}

const columns: DataTableColumns<ProductItem> = [
  {
    title: '商品信息',
    key: 'name',
    render: (row) =>
      h('div', { class: 'flex items-center gap-3 py-1' }, [
        h(NImage, {
          src: row.image,
          width: 48,
          height: 48,
          previewDisabled: true,
          class: 'rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm'
        }),
        h('div', [
          h(
            'div',
            {
              class: 'font-bold text-slate-800 dark:text-slate-200 text-sm transition-colors'
            },
            row.name
          ),
          h('div', { class: 'text-xs text-slate-400 mt-1' }, `编码：${row.code}`)
        ])
      ])
  },
  {
    title: '分类',
    key: 'category'
  },
  {
    title: '售价',
    key: 'price',
    render: (row) =>
      h('span', { class: 'font-bold text-orange-600 dark:text-orange-400' }, `¥${row.price}`)
  },
  {
    title: '库存',
    key: 'stock'
  },
  {
    title: '总销量',
    key: 'sales'
  },
  {
    title: '状态',
    key: 'status',
    render: (row) =>
      h(
        NTag,
        {
          type: row.status === 'on' ? 'success' : 'default',
          round: true,
          bordered: false
        },
        {
          default: () => (row.status === 'on' ? '上架中' : '已下架')
        }
      )
  },
  {
    title: '操作',
    key: 'actions',
    align: 'right',
    render: (row) =>
      h(NSpace, { justify: 'end' }, () => [
        h(
          NButton,
          {
            text: true,
            type: 'primary',
            onClick: () => router.push(`/product/edit/${row.id}`)
          },
          { default: () => '编辑' }
        ),
        h(
          NButton,
          {
            text: true,
            type: 'error',
            onClick: () => handleDelete(row)
          },
          { default: () => '删除' }
        )
      ])
  }
]
</script>
