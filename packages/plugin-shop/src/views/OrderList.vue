<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">订单列表</h2>
      <button @click="handleExport" class="px-4 py-2 bg-slate-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        导出订单
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex gap-6 border-b border-gray-100 dark:border-gray-800 mb-6">
      <button 
        v-for="tab in tabs" 
        :key="tab.value"
        @click="activeTab = tab.value"
        :class="[
          'pb-3 transition-colors',
          activeTab === tab.value 
            ? 'text-orange-500 font-bold border-b-2 border-orange-500' 
            : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
        ]"
      >
        {{ tab.label }} ({{ getTabCount(tab.value) }})
      </button>
    </div>

    <!-- Search Filter -->
    <div class="flex flex-wrap gap-4 mb-6 bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
      <div class="flex-1 min-w-[200px]">
        <input type="text" placeholder="搜索订单号 / 买家姓名 / 手机号" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
      </div>
      <div class="w-64">
        <n-date-picker v-model:value="searchDate" type="date" clearable placeholder="选择下单日期" />
      </div>
      <button class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">搜索</button>
    </div>

    <!-- Order List -->
    <div class="space-y-4">
      <div v-for="order in filteredOrders" :key="order.id" class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] hover:border-orange-200 dark:hover:border-orange-500/30 transition-colors">
        <!-- Order Header -->
        <div class="bg-slate-50 dark:bg-gray-800/50 px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
          <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span class="font-bold text-slate-700 dark:text-slate-200">{{ order.createTime }}</span>
            <span>订单号：{{ order.orderNo }}</span>
          </div>
          <span :class="getStatusColor(order.status)" class="font-bold">{{ order.statusText }}</span>
        </div>
        
        <!-- Order Content -->
        <div class="flex flex-col md:flex-row">
          <!-- Products -->
          <div class="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 space-y-4">
            <div v-for="(product, idx) in order.products" :key="idx" class="flex gap-3">
              <img :src="product.image" class="w-16 h-16 rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm" />
              <div class="flex-1">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm hover:text-orange-600 transition-colors cursor-pointer">{{ product.name }}</div>
                <div class="text-xs text-slate-400 mt-1">{{ product.spec }}</div>
              </div>
              <div class="text-right">
                <div class="font-medium text-slate-700 dark:text-slate-300 text-sm">¥{{ product.price }}</div>
                <div class="text-xs text-slate-400 mt-1">x{{ product.quantity }}</div>
              </div>
            </div>
          </div>
          
          <!-- Buyer Info -->
          <div class="w-full md:w-48 p-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 flex flex-col justify-center">
            <div class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ order.buyer.name }}</div>
            <div class="text-xs text-slate-500 mt-1">{{ order.buyer.phone }}</div>
          </div>
          
          <!-- Amount -->
          <div class="w-full md:w-40 p-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 flex flex-col justify-center items-center">
            <div class="text-sm text-slate-500">实付款</div>
            <div class="text-lg font-black text-orange-600 dark:text-orange-400 mt-1">¥{{ order.amount }}</div>
            <div class="text-xs text-slate-400 mt-1">含运费 ¥{{ order.shipping }}</div>
          </div>
          
          <!-- Actions -->
          <div class="w-full md:w-32 p-4 flex flex-col justify-center items-center gap-2">
            <button @click="router.push(`/order/ship/${order.id}`)" class="w-full px-3 py-1.5 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-bold hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors" v-if="order.status === 'paid'">去发货</button>
            <button @click="router.push(`/order/detail/${order.id}`)" class="w-full px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded text-sm font-medium hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">订单详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NDatePicker, useMessage } from 'naive-ui'

const router = useRouter()
const message = useMessage()
const searchDate = ref(null)

const tabs = [
  { label: '全部订单', value: 'all' },
  { label: '待付款', value: 'unpaid' },
  { label: '待发货', value: 'paid' },
  { label: '已发货', value: 'shipped' },
  { label: '已完成', value: 'completed' }
]

const activeTab = ref('all')

const orders = [
  {
    id: 1,
    orderNo: 'ORD2024102800123',
    createTime: '2024-10-28 14:30:22',
    status: 'paid',
    statusText: '待发货',
    amount: '458.00',
    shipping: '0.00',
    buyer: { name: '林女士', phone: '138****5678' },
    products: [
      { name: '秋季法式高级感收腰风衣', spec: '卡其色 / M码', price: '458.00', quantity: 1, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop' }
    ]
  },
  {
    id: 2,
    orderNo: 'ORD2024102800085',
    createTime: '2024-10-28 10:15:05',
    status: 'shipped',
    statusText: '已发货',
    amount: '1058.00',
    shipping: '10.00',
    buyer: { name: '张先生', phone: '159****2345' },
    products: [
      { name: '降噪蓝牙耳机 Pro Max', spec: '星空黑 / 标准版', price: '899.00', quantity: 1, image: 'https://images.unsplash.com/photo-1606220588913-b3aec89155a9?w=100&h=100&fit=crop' },
      { name: '韩版宽松慵懒风毛衣', spec: '米白色 / L码', price: '159.00', quantity: 1, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop' }
    ]
  },
  {
    id: 3,
    orderNo: 'ORD2024102700456',
    createTime: '2024-10-27 22:45:10',
    status: 'completed',
    statusText: '已完成',
    amount: '299.00',
    shipping: '0.00',
    buyer: { name: '陈小姐', phone: '135****8899' },
    products: [
      { name: '复古真皮单肩斜挎包', spec: '复古棕 / 均码', price: '299.00', quantity: 1, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&h=100&fit=crop' }
    ]
  }
]

const filteredOrders = computed(() => {
  if (activeTab.value === 'all') {
    return orders
  }
  return orders.filter(order => order.status === activeTab.value)
})

const getTabCount = (status: string) => {
  if (status === 'all') return orders.length
  return orders.filter(order => order.status === status).length
}

const handleExport = () => {
  // Mock CSV Data Generation
  const headers = ['订单号', '创建时间', '状态', '买家', '手机号', '订单金额', '运费']
  const rows = filteredOrders.value.map(order => [
    order.orderNo,
    order.createTime,
    order.statusText,
    order.buyer.name,
    order.buyer.phone,
    order.amount,
    order.shipping
  ])
  
  let csvContent = headers.join(',') + '\n'
  rows.forEach(row => {
    csvContent += row.join(',') + '\n'
  })

  // Trigger Download
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `订单导出_${new Date().getTime()}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  message.success(`成功导出 ${filteredOrders.value.length} 条订单记录`)
}

const getStatusColor = (status: string) => {
  const map: Record<string, string> = {
    unpaid: 'text-rose-500',
    paid: 'text-orange-500',
    shipped: 'text-blue-500',
    completed: 'text-emerald-500',
    closed: 'text-slate-400'
  }
  return map[status] || 'text-slate-500'
}
</script>