<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">优惠营销</h2>
      <button @click="router.push('/marketing/create')" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        创建活动
      </button>
    </div>

    <!-- Marketing Tools Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="tool in tools" :key="tool.title" class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#0A1120] hover:border-orange-200 dark:hover:border-orange-500/30 transition-colors flex items-start gap-4 cursor-pointer group">
        <div :class="tool.color" class="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
          <component :is="tool.icon" class="w-6 h-6" />
        </div>
        <div>
          <h3 class="font-bold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ tool.title }}</h3>
          <p class="text-xs text-slate-500 mt-1">{{ tool.desc }}</p>
        </div>
      </div>
    </div>

    <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">进行中的活动</h3>
    
    <!-- Active Campaigns -->
    <div class="space-y-4">
      <div v-for="campaign in campaigns" :key="campaign.id" class="border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-[#0A1120] flex flex-col md:flex-row items-start md:items-center gap-6">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span class="px-2 py-1 text-xs font-bold rounded bg-rose-50 text-rose-500 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20">{{ campaign.type }}</span>
            <h4 class="font-bold text-slate-800 dark:text-slate-200">{{ campaign.name }}</h4>
          </div>
          <div class="text-sm text-slate-500">有效期：{{ campaign.time }}</div>
        </div>
        
        <div class="flex gap-8 text-center">
          <div>
            <div class="text-xs text-slate-400 mb-1">参与人数</div>
            <div class="font-bold text-slate-700 dark:text-slate-300">{{ campaign.users }}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 mb-1">带动销售额</div>
            <div class="font-bold text-rose-500">¥{{ campaign.revenue }}</div>
          </div>
        </div>
        
        <div class="w-full md:w-auto flex justify-end gap-2 border-t md:border-t-0 border-gray-100 dark:border-gray-800 pt-4 md:pt-0">
          <button @click="openDataModal(campaign)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-500 bg-slate-50 hover:bg-orange-50 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            数据
          </button>
          <button @click="handleEdit(campaign)" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-500 bg-slate-50 hover:bg-orange-50 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            编辑
          </button>
        </div>
      </div>
    </div>
    
    <!-- 数据分析弹窗 -->
    <n-modal v-model:show="showDataModal">
      <div class="w-[600px] bg-white dark:bg-[#0A1120] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-slate-50/50 dark:bg-gray-800/30">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">活动数据看板</h3>
          <button @click="showDataModal = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div v-if="currentCampaign" class="p-6">
          <div class="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
            <div class="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <div>
              <h4 class="text-lg font-bold text-slate-800 dark:text-slate-200">{{ currentCampaign.name }}</h4>
              <div class="text-sm text-slate-500 mt-1">活动类型：{{ currentCampaign.type }}</div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-slate-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div class="text-sm text-slate-500 mb-2 flex items-center gap-2">
                参与总人数
              </div>
              <div class="text-2xl font-bold text-slate-800 dark:text-slate-200">{{ currentCampaign.users }} <span class="text-sm font-normal text-slate-500">人</span></div>
              <div class="mt-2 text-xs text-emerald-500 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                较昨日 +12%
              </div>
            </div>
            
            <div class="bg-rose-50/50 dark:bg-rose-500/5 rounded-xl p-4 border border-rose-100 dark:border-rose-500/10">
              <div class="text-sm text-slate-500 mb-2 flex items-center gap-2">
                累计带动销售额
              </div>
              <div class="text-2xl font-bold text-rose-500">¥{{ currentCampaign.revenue }}</div>
              <div class="mt-2 text-xs text-rose-500/70 flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                环比上周 +24%
              </div>
            </div>
            
            <div class="bg-slate-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div class="text-sm text-slate-500 mb-2">投入产出比 (ROI)</div>
              <div class="text-xl font-bold text-slate-800 dark:text-slate-200">1 : 8.5</div>
            </div>
            
            <div class="bg-slate-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div class="text-sm text-slate-500 mb-2">核销转化率</div>
              <div class="text-xl font-bold text-slate-800 dark:text-slate-200">42.8%</div>
            </div>
          </div>
        </div>
        
        <div class="px-6 py-4 bg-slate-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
          <button @click="showDataModal = false" class="px-5 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold text-sm">我知道了</button>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NModal } from 'naive-ui'

const router = useRouter()

const showDataModal = ref(false)
const currentCampaign = ref<any>(null)

const openDataModal = (campaign: any) => {
  currentCampaign.value = campaign
  showDataModal.value = true
}

const handleEdit = (campaign: any) => {
  // 跳转到编辑页面 (复用 MarketingCreate)
  router.push('/marketing/create')
}

const CouponIcon = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' })
])
const DiscountIcon = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
])
const PackageIcon = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' })
])

const tools = [
  { title: '优惠券', desc: '发放满减、折扣等多种类型优惠券', icon: CouponIcon, color: 'bg-gradient-to-br from-orange-400 to-rose-500' },
  { title: '限时折扣', desc: '设置指定商品在特定时间内打折促销', icon: DiscountIcon, color: 'bg-gradient-to-br from-blue-400 to-indigo-500' },
  { title: '满件包邮', desc: '鼓励用户凑单，提升客单价', icon: PackageIcon, color: 'bg-gradient-to-br from-emerald-400 to-teal-500' }
]

const campaigns = [
  { id: 1, name: '2024 秋季新品大促满减', type: '满减券', time: '2024.10.01 - 2024.11.11', users: '12,845', revenue: '345,600.00' },
  { id: 2, name: '双十一预售付定金免尾款', type: '限时折扣', time: '2024.10.20 - 2024.11.10', users: '8,432', revenue: '890,200.00' },
  { id: 3, name: '新用户注册首单立减', type: '新人专享', time: '长期有效', users: '45,210', revenue: '1,205,800.00' }
]
</script>