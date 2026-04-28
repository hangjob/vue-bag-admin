<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">用户管理</h2>
      <div class="flex gap-3">
        <button @click="openCouponModal()" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          发优惠券
        </button>
      </div>
    </div>

    <!-- Search Filter -->
    <div class="flex flex-wrap gap-4 mb-6 bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl border border-slate-100 dark:border-gray-800">
      <div class="flex-1 min-w-[200px]">
        <input type="text" placeholder="搜索用户昵称 / 手机号" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
      </div>
      <div class="w-48">
        <n-select v-model:value="searchLevel" :options="levelOptions" placeholder="全部会员等级" />
      </div>
      <button class="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">搜索</button>
    </div>

    <!-- 发放优惠券弹窗 -->
    <n-modal v-model:show="showCouponModal">
      <div class="w-[480px] bg-white dark:bg-[#0A1120] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-slate-50/50 dark:bg-gray-800/30">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">发优惠券</h3>
          <button @click="showCouponModal = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <!-- 发放对象 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">发放对象</label>
            <div v-if="targetUser" class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
              <img :src="targetUser.avatar" class="w-10 h-10 rounded-full" />
              <div>
                <div class="text-sm font-bold text-slate-800 dark:text-slate-200">{{ targetUser.name }}</div>
                <div class="text-xs text-slate-500">{{ targetUser.phone }}</div>
              </div>
              <button @click="targetUser = null" class="ml-auto text-xs text-rose-500 hover:underline">移除</button>
            </div>
            <n-select v-else v-model:value="couponTarget" :options="targetOptions" placeholder="请选择发放范围" />
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
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">每人发放数量</label>
            <input type="number" v-model="couponCount" min="1" max="10" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
        </div>
        <div class="px-6 py-4 bg-slate-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
          <button @click="showCouponModal = false" class="px-5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">取消</button>
          <button @click="submitCoupon" class="px-5 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold text-sm">确认发放</button>
        </div>
      </div>
    </n-modal>

    <!-- User Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="user in users" :key="user.id" class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#0A1120] hover:border-orange-200 dark:hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
        <div class="flex gap-4 items-start mb-4">
          <img :src="user.avatar" class="w-14 h-14 rounded-full border-2 border-white dark:border-gray-800 shadow-sm group-hover:border-orange-200 dark:group-hover:border-orange-500/50 transition-colors" />
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h3 class="font-bold text-slate-800 dark:text-slate-200 text-base group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ user.name }}</h3>
              <span :class="getLevelColor(user.level)" class="px-2 py-0.5 text-[10px] font-black rounded-full border">V{{ user.level }}</span>
            </div>
            <div class="text-xs text-slate-400 mt-1">{{ user.phone }}</div>
            <div class="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {{ user.city }}
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4 py-4 border-t border-gray-50 dark:border-gray-800/50">
          <div>
            <div class="text-xs text-slate-400 mb-1">消费总额</div>
            <div class="font-bold text-slate-700 dark:text-slate-300">¥{{ user.amount }}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 mb-1">订单数</div>
            <div class="font-bold text-slate-700 dark:text-slate-300">{{ user.orders }} 笔</div>
          </div>
        </div>
        
        <div class="flex gap-2 pt-4 border-t border-gray-50 dark:border-gray-800/50">
          <button @click="router.push(`/user/profile/${user.id}`)" class="flex-1 py-1.5 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-bold hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors">查看画像</button>
          <button @click="router.push(`/user/orders/${user.id}`)" class="flex-1 py-1.5 bg-slate-50 dark:bg-gray-800/50 text-slate-600 dark:text-slate-300 rounded text-sm font-medium hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">历史订单</button>
          <button @click="openCouponModal(user)" class="px-3 py-1.5 bg-rose-50 dark:bg-rose-500/10 text-rose-500 dark:text-rose-400 rounded text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors" title="发券">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NSelect, NModal, useMessage } from 'naive-ui'

const router = useRouter()
const message = useMessage()

const searchLevel = ref(null)
const levelOptions = [
  { label: '普通会员', value: 'v1' },
  { label: '白银会员', value: 'v2' },
  { label: '黄金会员', value: 'v3' },
  { label: '钻石会员', value: 'v4' }
]

// 优惠券弹窗逻辑
const showCouponModal = ref(false)
const targetUser = ref<any>(null)
const couponTarget = ref('all')
const selectedCoupon = ref(null)
const couponCount = ref(1)

const targetOptions = [
  { label: '所有用户 (12,845人)', value: 'all' },
  { label: '当前筛选结果 (420人)', value: 'filtered' },
  { label: '白银以上会员 (1,240人)', value: 'v2_up' }
]

const couponOptions = [
  { label: '双十一专属满100减20券', value: 'c1', desc: '满100元可用，全品类通用', type: '满减券', value: '20' },
  { label: '新人专享50元无门槛券', value: 'c2', desc: '无使用门槛，仅限新人首单', type: '无门槛券', value: '50' },
  { label: '会员专享全场8折券', value: 'c3', desc: '满200元可用，最高抵扣100元', type: '折扣券', value: '8折' }
]

const currentCoupon = computed(() => {
  return couponOptions.find(c => c.value === selectedCoupon.value)
})

const openCouponModal = (user: any = null) => {
  targetUser.value = user
  couponTarget.value = user ? 'single' : 'all'
  selectedCoupon.value = null
  couponCount.value = 1
  showCouponModal.value = true
}

const submitCoupon = () => {
  if (!selectedCoupon.value) {
    message.warning('请选择要发放的优惠券')
    return
  }
  const targetName = targetUser.value ? targetUser.value.name : '批量用户'
  message.success(`成功向 ${targetName} 发放了 ${couponCount.value} 张优惠券`)
  showCouponModal.value = false
}

const users = [
  { id: 1, name: '林女士', phone: '138****5678', city: '浙江省 杭州市', level: 3, amount: '12,840.00', orders: 45, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice&backgroundColor=ffedd5' },
  { id: 2, name: '张先生', phone: '159****2345', city: '广东省 深圳市', level: 4, amount: '35,200.00', orders: 128, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob&backgroundColor=dbeafe' },
  { id: 3, name: '陈小姐', phone: '135****8899', city: '上海市', level: 2, amount: '4,500.00', orders: 12, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie&backgroundColor=fce7f3' },
  { id: 4, name: '王大爷', phone: '186****7766', city: '北京市', level: 1, amount: '899.00', orders: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dave&backgroundColor=f3e8ff' },
  { id: 5, name: '李同学', phone: '137****4455', city: '四川省 广州市', level: 2, amount: '5,680.00', orders: 18, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve&backgroundColor=fef3c7' },
  { id: 6, name: '赵老板', phone: '139****1122', city: '江苏省 珠海市', level: 4, amount: '58,900.00', orders: 215, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank&backgroundColor=e0e7ff' },
  { id: 7, name: '刘阿姨', phone: '150****3344', city: '福建省 东莞市', level: 1, amount: '358.00', orders: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace&backgroundColor=fae8ff' },
  { id: 8, name: '孙小姐', phone: '188****9900', city: '湖北省 成都市', level: 3, amount: '18,450.00', orders: 67, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Heidi&backgroundColor=ecfeff' }
]

const getLevelColor = (level: number) => {
  const map: Record<number, string> = {
    1: 'text-slate-500 border-slate-200 bg-slate-50 dark:bg-gray-800 dark:border-gray-700',
    2: 'text-blue-500 border-blue-200 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500/20',
    3: 'text-amber-500 border-amber-200 bg-amber-50 dark:bg-amber-500/10 dark:border-amber-500/20',
    4: 'text-purple-500 border-purple-200 bg-purple-50 dark:bg-purple-500/10 dark:border-purple-500/20'
  }
  return map[level] || map[1]
}
</script>