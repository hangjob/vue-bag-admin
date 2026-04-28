<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <div class="flex items-center gap-4 mb-8">
      <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
      </button>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">用户画像</h2>
    </div>

    <!-- User Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="md:col-span-3 border border-orange-100 dark:border-orange-500/20 rounded-xl p-6 bg-gradient-to-r from-orange-50/50 to-rose-50/50 dark:from-orange-500/10 dark:to-rose-500/10 flex gap-6 items-center">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" class="w-24 h-24 rounded-full border-4 border-white dark:border-[#0A1120] shadow-sm" />
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-200">林女士</h3>
            <span class="px-2 py-0.5 text-xs font-black rounded-full border border-amber-200 bg-amber-50 text-amber-500">黄金会员 V3</span>
          </div>
          <div class="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> 138****5678</div>
            <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> 浙江省 杭州市</div>
            <div class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> 注册时间：2023-05-12</div>
          </div>
      </div>
      <div class="flex gap-2 shrink-0">
        <button class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">发消息</button>
        <button @click="openCouponModal" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">送优惠券</button>
      </div>
    </div>
      
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-[#0A1120] flex flex-col justify-center">
        <div class="text-sm font-bold text-slate-500 mb-2">账户余额</div>
        <div class="text-3xl font-black text-slate-800 dark:text-slate-100">¥ 1,280.00</div>
        <div class="text-xs text-slate-400 mt-2 flex justify-between">
          <span>当前积分：4,500</span>
          <span class="text-orange-500 cursor-pointer hover:underline">查看明细</span>
        </div>
      </div>
    </div>

    <!-- Analytics Data -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-slate-50/50 dark:bg-gray-800/30">
        <div class="text-sm text-slate-500 mb-1">累计消费总额</div>
        <div class="text-2xl font-bold text-slate-800 dark:text-slate-200">¥ 12,840.00</div>
        <div class="text-xs text-emerald-500 mt-2 flex items-center gap-1"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg> 超过 85% 用户</div>
      </div>
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-slate-50/50 dark:bg-gray-800/30">
        <div class="text-sm text-slate-500 mb-1">累计订单数</div>
        <div class="text-2xl font-bold text-slate-800 dark:text-slate-200">45 笔</div>
        <div class="text-xs text-slate-400 mt-2">平均客单价 ¥285.33</div>
      </div>
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-slate-50/50 dark:bg-gray-800/30">
        <div class="text-sm text-slate-500 mb-1">退款/退货次数</div>
        <div class="text-2xl font-bold text-slate-800 dark:text-slate-200">2 次</div>
        <div class="text-xs text-slate-400 mt-2">退款率 4.4% (低于均值)</div>
      </div>
    </div>

    <!-- User Tags -->
    <div class="mb-8">
      <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-4">
        <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
        行为标签
      </h3>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1.5 bg-rose-50 text-rose-500 dark:bg-rose-500/10 rounded font-medium text-sm">高价值客户</span>
        <span class="px-3 py-1.5 bg-blue-50 text-blue-500 dark:bg-blue-500/10 rounded font-medium text-sm">女装偏好</span>
        <span class="px-3 py-1.5 bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 rounded font-medium text-sm">复购率高</span>
        <span class="px-3 py-1.5 bg-amber-50 text-amber-500 dark:bg-amber-500/10 rounded font-medium text-sm">价格敏感低</span>
        <span class="px-3 py-1.5 bg-purple-50 text-purple-500 dark:bg-purple-500/10 rounded font-medium text-sm">活跃用户</span>
        <button class="px-3 py-1.5 border border-dashed border-gray-300 dark:border-gray-700 text-slate-400 hover:text-orange-500 hover:border-orange-500 rounded font-medium text-sm transition-colors">+ 添加标签</button>
      </div>
    </div>

  </div>

  <!-- 发放优惠券弹窗 -->
  <n-modal v-model:show="showCouponModal">
    <div class="w-[480px] bg-white dark:bg-[#0A1120] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-slate-50/50 dark:bg-gray-800/30">
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">送优惠券</h3>
        <button @click="showCouponModal = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="p-6 space-y-6">
        <!-- 发放对象 -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">发放对象</label>
          <div class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" class="w-10 h-10 rounded-full" />
            <div>
              <div class="text-sm font-bold text-slate-800 dark:text-slate-200">林女士</div>
              <div class="text-xs text-slate-500">138****5678</div>
            </div>
          </div>
        </div>

        <!-- 选择优惠券 -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">选择优惠券 <span class="text-rose-500">*</span></label>
          <n-select v-model:value="selectedCoupon" :options="couponOptions" placeholder="请选择要发放的优惠券" />
          
          <!-- 优惠券预览卡片 -->
          <div v-if="currentCoupon" class="mt-4 p-4 rounded-xl border border-orange-100 dark:border-orange-500/20 bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-500/10 dark:to-rose-500/10 flex items-center gap-4 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 w-16 h-16 bg-white/40 dark:bg-white/5 rounded-full blur-xl pointer-events-none"></div>
            <div class="absolute -left-4 -bottom-4 w-16 h-16 bg-rose-500/10 dark:bg-rose-500/20 rounded-full blur-xl pointer-events-none"></div>
            
            <div class="flex-1 z-10">
              <div class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">{{ currentCoupon.label }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">{{ currentCoupon.desc }}</div>
            </div>
            <div class="text-right z-10 border-l border-orange-200/50 dark:border-orange-500/20 pl-4">
              <div class="text-xs text-rose-500 font-bold mb-0.5">{{ currentCoupon.type }}</div>
              <div class="text-2xl font-black text-rose-500"><span class="text-sm mr-0.5">¥</span>{{ currentCoupon.value }}</div>
            </div>
          </div>
        </div>
        
        <!-- 发放数量 -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">发放数量</label>
          <input type="number" v-model="couponCount" min="1" max="10" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
        </div>
      </div>
      <div class="px-6 py-4 bg-slate-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
        <button @click="showCouponModal = false" class="px-5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">取消</button>
        <button @click="submitCoupon" class="px-5 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold text-sm">确认发放</button>
      </div>
    </div>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NModal, NSelect, useMessage } from 'naive-ui'

const router = useRouter()
const message = useMessage()

// 发送优惠券逻辑
const showCouponModal = ref(false)
const selectedCoupon = ref(null)
const couponCount = ref(1)

const couponOptions = [
  { label: '双十一专属满100减20券', value: 'c1', desc: '满100元可用，全品类 通用', type: '满减券', amount: '20' },
  { label: '新人专享50元无门槛券', value: 'c2', desc: '无使用门槛，仅限新人 首单', type: '无门槛券', amount: '50' },
  { label: '会员专享全场8折券', value: 'c3', desc: '满200元可用，最高抵扣100元', type: '折扣券', amount: '8折' }
]

const currentCoupon = computed(() => {
  return couponOptions.find(c => c.value === selectedCoupon.value)
})

const openCouponModal = () => {
  selectedCoupon.value = null
  couponCount.value = 1
  showCouponModal.value = true
}

const submitCoupon = () => {
  if (!selectedCoupon.value) {
    message.warning('请选择要发放的优惠券')
    return
  }
  message.success(`成功向 林女士 发放了 ${couponCount.value} 张优惠券`)
  showCouponModal.value = false
}
</script>