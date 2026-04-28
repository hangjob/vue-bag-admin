<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">退换货管理</h2>
    </div>

    <!-- Search Filter -->
    <div class="flex flex-wrap gap-4 mb-6 bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
      <div class="flex-1 min-w-[200px]">
        <input type="text" placeholder="搜索售后单号 / 订单号" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
      </div>
      <div class="w-40">
        <n-select v-model:value="searchType" :options="typeOptions" placeholder="全部类型" />
      </div>
      <div class="w-40">
        <n-select v-model:value="searchStatus" :options="statusOptions" placeholder="全部状态" />
      </div>
      <button class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">搜索</button>
    </div>

    <!-- Returns List -->
    <div class="space-y-4">
      <div v-for="item in returns" :key="item.id" class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#0A1120] hover:border-orange-200 dark:hover:border-orange-500/30 transition-colors">
        <div class="flex justify-between items-start mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex gap-4 items-center">
            <span class="px-2 py-1 text-xs font-bold rounded bg-rose-50 text-rose-500 dark:bg-rose-500/10">{{ item.typeText }}</span>
            <span class="text-sm text-slate-500 dark:text-slate-400">售后单号：{{ item.returnNo }}</span>
            <span class="text-sm text-slate-500 dark:text-slate-400">申请时间：{{ item.createTime }}</span>
          </div>
          <span :class="getStatusColor(item.status)" class="font-bold text-sm">{{ item.statusText }}</span>
        </div>
        
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 flex gap-4">
            <img :src="item.product.image" class="w-20 h-20 rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm" />
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{{ item.product.name }}</div>
              <div class="text-xs text-slate-400 mb-2">关联订单：<span class="text-orange-500 cursor-pointer hover:underline">{{ item.orderNo }}</span></div>
              <div class="text-sm text-slate-600 dark:text-slate-300"><span class="text-slate-400">退款金额：</span><span class="font-bold text-rose-500">¥{{ item.amount }}</span></div>
            </div>
          </div>
          
          <div class="flex-1">
            <div class="text-sm text-slate-600 dark:text-slate-300 mb-1"><span class="text-slate-400">退款原因：</span>{{ item.reason }}</div>
            <div class="text-sm text-slate-600 dark:text-slate-300"><span class="text-slate-400">买家说明：</span>{{ item.desc || '无' }}</div>
          </div>
          
          <div class="w-full md:w-auto flex flex-row md:flex-col gap-2 justify-center">
            <button @click="router.push(`/order/return/${item.id}`)" class="px-4 py-2 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-lg text-sm font-bold hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors" v-if="item.status === 'pending'">审核处理</button>
            <button @click="router.push(`/order/return/${item.id}`)" class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NSelect } from 'naive-ui'

const router = useRouter()

const searchType = ref(null)
const typeOptions = [
  { label: '仅退款', value: 'refund' },
  { label: '退货退款', value: 'return' },
  { label: '换货', value: 'exchange' }
]

const searchStatus = ref(null)
const statusOptions = [
  { label: '待处理', value: 'pending' },
  { label: '处理中', value: 'processing' },
  { label: '已完成', value: 'completed' },
  { label: '已拒绝', value: 'rejected' }
]

const returns = [
  {
    id: 1,
    returnNo: 'RET202410280001',
    orderNo: 'ORD2024102600889',
    type: 'refund',
    typeText: '仅退款',
    status: 'pending',
    statusText: '待审核',
    createTime: '2024-10-28 15:20:11',
    amount: '159.00',
    reason: '七天无理由退款',
    desc: '拍错颜色了，重新拍',
    product: { name: '韩版宽松慵懒风毛衣', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop' }
  },
  {
    id: 2,
    returnNo: 'RET202410270045',
    orderNo: 'ORD2024102000123',
    type: 'return',
    typeText: '退货退款',
    status: 'processing',
    statusText: '退货中',
    createTime: '2024-10-27 10:05:33',
    amount: '458.00',
    reason: '尺寸不合适',
    desc: '衣服偏大，申请退货',
    product: { name: '秋季法式高级感收腰风衣', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop' }
  }
]

const getStatusColor = (status: string) => {
  const map: Record<string, string> = {
    pending: 'text-orange-500',
    processing: 'text-blue-500',
    completed: 'text-emerald-500',
    rejected: 'text-rose-500'
  }
  return map[status] || 'text-slate-500'
}
</script>