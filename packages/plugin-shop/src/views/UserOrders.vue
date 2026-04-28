<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center gap-4">
        <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        </button>
        <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">林女士 - 历史订单</h2>
      </div>
      <div class="flex gap-2">
        <span class="px-4 py-1.5 bg-slate-50 dark:bg-gray-800/50 text-slate-600 dark:text-slate-400 font-bold rounded-lg border border-gray-100 dark:border-gray-700">共 45 笔订单</span>
      </div>
    </div>

    <!-- Timeline / List of Orders -->
    <div class="space-y-6">
      <div v-for="order in userOrders" :key="order.id" class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm hover:shadow-md transition-shadow">
        <div class="bg-slate-50/80 dark:bg-gray-800/50 px-5 py-3 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 text-sm">
          <div class="font-medium text-slate-600 dark:text-slate-400">
            {{ order.time }} <span class="mx-2">|</span> 订单号：{{ order.orderNo }}
          </div>
          <div :class="order.status === '已完成' ? 'text-emerald-500' : 'text-slate-500'" class="font-bold">{{ order.status }}</div>
        </div>
        <div class="p-5 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div class="flex-1 flex gap-4">
            <img :src="order.image" class="w-16 h-16 rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm" />
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 hover:text-orange-600 transition-colors cursor-pointer">{{ order.name }}</div>
              <div class="text-xs text-slate-500">数量：{{ order.qty }}</div>
            </div>
          </div>
          <div class="w-full md:w-32 text-left md:text-right">
            <div class="text-xs text-slate-400 mb-1">实付款</div>
            <div class="font-black text-slate-800 dark:text-slate-200">¥{{ order.amount }}</div>
          </div>
          <div class="w-full md:w-auto flex justify-end">
            <button @click="router.push(`/order/detail/${order.id}`)" class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium">查看订单</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-8">
      <button class="px-6 py-2 bg-slate-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors font-medium">加载更多记录</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const userOrders = [
  { id: 101, time: '2024-10-28 14:30', orderNo: 'ORD2024102800123', status: '待发货', name: '秋季法式高级感收腰风衣', qty: 1, amount: '458.00', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop' },
  { id: 102, time: '2024-09-15 10:20', orderNo: 'ORD2024091500445', status: '已完成', name: '复古真皮单肩斜挎包', qty: 1, amount: '299.00', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&h=100&fit=crop' },
  { id: 103, time: '2024-08-02 22:15', orderNo: 'ORD2024080200889', status: '已完成', name: '美白补水保湿面膜套装', qty: 2, amount: '256.00', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop' }
]
</script>