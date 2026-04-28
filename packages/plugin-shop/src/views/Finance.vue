<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">财务结算</h2>
      <button @click="router.push('/finance/withdraw')" class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2">
        申请提现
      </button>
    </div>

    <!-- Balance Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="border border-orange-100 dark:border-orange-500/20 rounded-xl p-6 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-500/10 dark:to-rose-500/10">
        <div class="text-sm font-bold text-orange-600 dark:text-orange-400 mb-2">账户可提现余额</div>
        <div class="text-3xl font-black text-slate-800 dark:text-slate-100 flex items-baseline">
          <span class="mr-1">¥</span>
          <n-number-animation :from="0" :to="128450.00" :precision="2" show-separator />
        </div>
      </div>
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-[#0A1120]">
        <div class="text-sm font-bold text-slate-500 mb-2">待结算金额 (T+7)</div>
        <div class="text-3xl font-black text-slate-700 dark:text-slate-200 flex items-baseline">
          <span class="mr-1">¥</span>
          <n-number-animation :from="0" :to="45200.00" :precision="2" show-separator />
        </div>
      </div>
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-[#0A1120]">
        <div class="text-sm font-bold text-slate-500 mb-2">累计已提现</div>
        <div class="text-3xl font-black text-slate-700 dark:text-slate-200 flex items-baseline">
          <span class="mr-1">¥</span>
          <n-number-animation :from="0" :to="890000.00" :precision="2" show-separator />
        </div>
      </div>
    </div>

    <!-- Search Filter -->
    <div class="flex flex-wrap gap-4 mb-6 bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
      <div class="flex-1 min-w-[200px]">
        <input type="text" placeholder="搜索流水号 / 订单号" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
      </div>
      <div class="w-40">
        <n-select v-model:value="searchType" :options="typeOptions" placeholder="全部类型" />
      </div>
      <div class="w-48">
        <n-date-picker v-model:value="searchMonth" type="month" clearable placeholder="选择月份" />
      </div>
      <button class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">搜索</button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-50 dark:bg-gray-800/50">
          <tr class="text-sm text-slate-500 dark:text-slate-400 font-semibold border-b border-gray-100 dark:border-gray-800">
            <th class="p-4">创建时间</th>
            <th class="p-4">流水号 / 业务单号</th>
            <th class="p-4">业务类型</th>
            <th class="p-4 text-right">收支金额</th>
            <th class="p-4 text-right">账户余额</th>
            <th class="p-4 text-center">状态</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr v-for="item in flows" :key="item.id" class="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors group">
            <td class="p-4 text-sm text-slate-500">{{ item.time }}</td>
            <td class="p-4">
              <div class="font-medium text-slate-700 dark:text-slate-300 text-sm">{{ item.flowNo }}</div>
              <div class="text-xs text-slate-400 mt-1">{{ item.bizNo }}</div>
            </td>
            <td class="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">{{ item.type }}</td>
            <td class="p-4 text-right font-bold text-lg" :class="item.amount > 0 ? 'text-emerald-500' : 'text-slate-700 dark:text-slate-200'">
              <span class="mr-1">{{ item.amount > 0 ? '+' : '' }}</span>
              <n-number-animation :from="0" :to="Math.abs(item.amount)" :precision="2" show-separator />
            </td>
            <td class="p-4 text-right text-sm font-bold text-slate-600 dark:text-slate-400">
              <span class="mr-1">¥</span>
              <n-number-animation :from="0" :to="item.balance" :precision="2" show-separator />
            </td>
            <td class="p-4 text-center">
              <span class="bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 px-2.5 py-1 text-xs font-bold rounded-md">已完成</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NNumberAnimation, NSelect, NDatePicker } from 'naive-ui'

const router = useRouter()

const searchType = ref(null)
const typeOptions = [
  { label: '收入 (订单结算)', value: 'income' },
  { label: '支出 (退款/提现)', value: 'expense' }
]

const searchMonth = ref(null)

const flows = [
  { id: 1, time: '2024-10-28 16:30:22', flowNo: 'FLW202410280001', bizNo: 'ORD2024102100889', type: '订单结算收入', amount: 458.00, balance: 128450.00 },
  { id: 2, time: '2024-10-28 14:15:10', flowNo: 'FLW202410280002', bizNo: 'RET202410280001', type: '售后退款支出', amount: -159.00, balance: 127992.00 },
  { id: 3, time: '2024-10-28 10:00:00', flowNo: 'FLW202410280003', bizNo: 'TX202410280001', type: '账户余额提现', amount: -50000.00, balance: 128151.00 },
  { id: 4, time: '2024-10-27 22:30:45', flowNo: 'FLW202410270001', bizNo: 'ORD2024102000456', type: '订单结算收入', amount: 899.00, balance: 178151.00 }
]
</script>