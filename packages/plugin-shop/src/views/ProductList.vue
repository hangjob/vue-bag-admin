<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">商品列表</h2>
      <button @click="router.push('/product/publish')" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        发布商品
      </button>
    </div>

    <!-- Search Filter -->
    <div class="flex flex-wrap gap-4 mb-6 bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
      <div class="flex-1 min-w-[200px]">
        <input type="text" placeholder="搜索商品名称 / 编码" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
      </div>
      <div class="w-40">
        <n-select v-model:value="searchCategory" :options="categoryOptions" placeholder="全部分类" />
      </div>
      <div class="w-40">
        <n-select v-model:value="searchStatus" :options="statusOptions" placeholder="全部状态" />
      </div>
      <button class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">搜索</button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-50 dark:bg-gray-800/50">
          <tr class="text-sm text-slate-500 dark:text-slate-400 font-semibold border-b border-gray-100 dark:border-gray-800">
            <th class="p-4 w-10"><input type="checkbox" class="rounded text-orange-500 focus:ring-orange-500"></th>
            <th class="p-4">商品信息</th>
            <th class="p-4">分类</th>
            <th class="p-4">售价</th>
            <th class="p-4">库存</th>
            <th class="p-4">总销量</th>
            <th class="p-4">状态</th>
            <th class="p-4 text-right">操作</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr v-for="item in products" :key="item.id" class="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors group">
            <td class="p-4"><input type="checkbox" class="rounded text-orange-500 focus:ring-orange-500"></td>
            <td class="p-4">
              <div class="flex items-center gap-3">
                <img :src="item.image" class="w-12 h-12 rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm" />
                <div>
                  <div class="font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ item.name }}</div>
                  <div class="text-xs text-slate-400 mt-1">编码：{{ item.code }}</div>
                </div>
              </div>
            </td>
            <td class="p-4 text-sm text-slate-600 dark:text-slate-300">{{ item.category }}</td>
            <td class="p-4 font-bold text-orange-600 dark:text-orange-400">¥{{ item.price }}</td>
            <td class="p-4 text-sm text-slate-600 dark:text-slate-300">{{ item.stock }}</td>
            <td class="p-4 text-sm text-slate-600 dark:text-slate-300">{{ item.sales }}</td>
            <td class="p-4">
              <span :class="item.status === 'on' ? 'bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10' : 'bg-slate-100 text-slate-500 dark:bg-gray-800'" class="px-2.5 py-1 text-xs font-bold rounded-md">
                {{ item.status === 'on' ? '上架中' : '已下架' }}
              </span>
            </td>
            <td class="p-4 text-right space-x-3 text-sm">
              <button @click="router.push(`/product/edit/${item.id}`)" class="text-slate-500 hover:text-orange-500 font-medium transition-colors">编辑</button>
              <button @click="handleDelete(item)" class="text-slate-500 hover:text-rose-500 font-medium transition-colors">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-between items-center mt-6">
      <div class="text-sm text-slate-500 dark:text-slate-400">共 128 条记录，当前 1/13 页</div>
      <div class="flex gap-1">
        <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button class="w-8 h-8 flex items-center justify-center rounded bg-orange-500 text-white font-medium shadow-sm">1</button>
        <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 font-medium transition-colors">2</button>
        <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 font-medium transition-colors">3</button>
        <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDialog, useMessage, NSelect } from 'naive-ui'

const router = useRouter()
const dialog = useDialog()
const message = useMessage()

// Search State
const searchCategory = ref(null)
const searchStatus = ref(null)

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

const products = ref([
  { id: 1, name: '秋季法式高级感收腰风衣', code: 'W-001', category: '女装 / 外套', price: '458.00', stock: 125, sales: '2,845', status: 'on', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop' },
  { id: 2, name: '复古真皮单肩斜挎包', code: 'B-023', category: '箱包 / 单肩包', price: '299.00', stock: 48, sales: '1,932', status: 'on', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&h=100&fit=crop' },
  { id: 3, name: '降噪蓝牙耳机 Pro Max', code: 'E-105', category: '数码 / 耳机', price: '899.00', stock: 0, sales: '1,520', status: 'off', image: 'https://images.unsplash.com/photo-1606220588913-b3aec89155a9?w=100&h=100&fit=crop' },
  { id: 4, name: '韩版宽松慵懒风毛衣', code: 'W-012', category: '女装 / 毛衣', price: '159.00', stock: 320, sales: '1,245', status: 'on', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop' },
  { id: 5, name: '美白补水保湿面膜套装', code: 'M-008', category: '美妆 / 护肤', price: '128.00', stock: 560, sales: '986', status: 'on', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop' }
])

const handleDelete = (item: any) => {
  dialog.warning({
    title: '删除商品',
    content: `确定要删除商品「${item.name}」吗？此操作不可恢复。`,
    positiveText: '确定',
    negativeText: '取消',
    style: {
      borderRadius: '12px'
    },
    onPositiveClick: () => {
      products.value = products.value.filter(p => p.id !== item.id)
      message.success('删除成功')
    }
  })
}
</script>