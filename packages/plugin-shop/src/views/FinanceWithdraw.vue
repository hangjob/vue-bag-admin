<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-3xl mx-auto">
    <div class="flex items-center gap-4 mb-8">
      <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
      </button>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">申请提现</h2>
    </div>

    <div class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl p-8 mb-8 text-center relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl -mr-10 -mt-10"></div>
      <div class="text-emerald-600 dark:text-emerald-400 font-bold mb-2">可提现金额 (元)</div>
      <div class="text-5xl font-black text-slate-800 dark:text-slate-100 mb-4 flex items-center justify-center">
        <n-number-animation :from="0" :to="128450.00" :precision="2" show-separator />
      </div>
      <div class="text-sm text-slate-500">本月已提现：¥50,000.00 | 手续费费率：0.1%</div>
    </div>

    <form class="space-y-8" @submit.prevent>
      <!-- Withdraw Amount -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">提现金额</h3>
        <div class="relative">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-400">¥</span>
          <input type="number" placeholder="0.00" class="w-full pl-12 pr-4 py-4 text-2xl font-bold rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-slate-200">
          <button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 font-bold hover:text-emerald-600 transition-colors">全部提现</button>
        </div>
        <div class="text-sm text-slate-500">预计收取手续费：<span class="font-bold text-slate-700 dark:text-slate-300">¥0.00</span>，实际到账：<span class="font-bold text-emerald-500">¥0.00</span></div>
      </div>

      <!-- Account Select -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex justify-between items-center">
          到账账户
          <button type="button" @click="showManageAccounts = true" class="text-sm text-emerald-500 font-medium hover:underline flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            管理账户
          </button>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="border-2 border-emerald-500 rounded-xl p-4 cursor-pointer bg-emerald-50/30 dark:bg-emerald-500/10 transition-colors flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            </div>
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200">中国工商银行 (尾号 8899)</div>
              <div class="text-xs text-slate-500 mt-1">企业对公账户</div>
            </div>
          </label>
          <label class="border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors opacity-60 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200">微信支付 (尾号 1234)</div>
              <div class="text-xs text-slate-500 mt-1">企业微信账号</div>
            </div>
          </label>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-8">
        <button type="button" class="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-bold text-lg">确认提现</button>
        <p class="text-center text-xs text-slate-400 mt-4">预计 1-3 个工作日内到账，节假日顺延</p>
      </div>
    </form>

    <!-- 管理账户弹窗 -->
    <n-modal v-model:show="showManageAccounts">
      <div class="w-[500px] bg-white dark:bg-[#0A1120] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-slate-50/50 dark:bg-gray-800/30">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">管理提现账户</h3>
          <button @click="showManageAccounts = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <!-- 账户列表 -->
          <div v-for="acc in accounts" :key="acc.id" class="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors bg-white dark:bg-[#0A1120] group">
            <div class="flex items-center gap-4">
              <div :class="acc.iconBg" class="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <svg v-if="acc.type === 'bank'" class="w-5 h-5" :class="acc.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                <svg v-else class="w-5 h-5" :class="acc.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  {{ acc.name }}
                  <span v-if="acc.isDefault" class="px-1.5 py-0.5 bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded text-[10px] font-bold">默认</span>
                </div>
                <div class="text-xs text-slate-500 mt-0.5">{{ acc.desc }}</div>
              </div>
            </div>
            <div class="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button v-if="!acc.isDefault" class="text-xs font-medium text-emerald-500 hover:text-emerald-600 transition-colors">设为默认</button>
              <button class="text-xs font-medium text-rose-500 hover:text-rose-600 transition-colors">解绑</button>
            </div>
          </div>

          <!-- 添加账户按钮 -->
          <button @click="openAddAccount" class="w-full py-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl text-slate-500 hover:text-emerald-500 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all font-bold flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            添加新账户
          </button>
        </div>
      </div>
    </n-modal>

    <!-- 添加新账户弹窗 -->
    <n-modal v-model:show="showAddAccount">
      <div class="w-[480px] bg-white dark:bg-[#0A1120] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-slate-50/50 dark:bg-gray-800/30">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">添加新账户</h3>
          <button @click="showAddAccount = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div class="p-6 space-y-6">
          <!-- 账户类型选择 -->
          <div class="space-y-3">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">账户类型</label>
            <div class="grid grid-cols-3 gap-3">
              <button 
                v-for="type in accountTypes" 
                :key="type.value"
                @click="newAccountForm.type = type.value"
                :class="newAccountForm.type === type.value ? 'border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] text-slate-600 dark:text-slate-400 hover:border-emerald-200 dark:hover:border-emerald-500/30'"
                class="py-3 px-2 border rounded-xl font-bold text-sm transition-colors flex flex-col items-center gap-2"
              >
                <div :class="type.color" class="w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10 dark:bg-opacity-20">
                  <component :is="type.icon" class="w-4 h-4" />
                </div>
                {{ type.label }}
              </button>
            </div>
          </div>

          <!-- 表单输入 -->
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {{ newAccountForm.type === 'bank' ? '开户行名称' : (newAccountForm.type === 'alipay' ? '支付宝姓名' : '微信真实姓名') }}
              </label>
              <input type="text" :placeholder="newAccountForm.type === 'bank' ? '如：招商银行高新支行' : '请输入真实姓名'" class="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-slate-200">
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {{ newAccountForm.type === 'bank' ? '银行卡号' : '账号' }}
              </label>
              <input type="text" :placeholder="newAccountForm.type === 'bank' ? '请输入16-19位银行卡号' : '请输入账号/手机号'" class="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-slate-200">
            </div>
          </div>
        </div>

        <div class="px-6 py-4 bg-slate-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
          <button @click="showAddAccount = false" class="px-5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">取消</button>
          <button @click="submitNewAccount" class="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-bold text-sm">确认添加</button>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useRouter } from 'vue-router'
import { NNumberAnimation, NModal, useMessage } from 'naive-ui'

const router = useRouter()
const message = useMessage()

const showManageAccounts = ref(false)
const showAddAccount = ref(false)

const accounts = ref([
  { id: 1, name: '中国工商银行 (尾号 8899)', desc: '企业对公账户', type: 'bank', iconBg: 'bg-blue-100 dark:bg-blue-500/20', iconColor: 'text-blue-500 dark:text-blue-400', isDefault: true },
  { id: 2, name: '微信支付 (尾号 1234)', desc: '企业微信账号', type: 'wechat', iconBg: 'bg-green-100 dark:bg-green-500/20', iconColor: 'text-green-500 dark:text-green-400', isDefault: false },
  { id: 3, name: '支付宝 (尾号 5678)', desc: '企业支付宝账号', type: 'alipay', iconBg: 'bg-sky-100 dark:bg-sky-500/20', iconColor: 'text-sky-500 dark:text-sky-400', isDefault: false }
])

const BankIcon = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' })
])
const WechatIcon = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' })
])
const AlipayIcon = h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

const accountTypes = [
  { label: '银行卡', value: 'bank', icon: BankIcon, color: 'bg-blue-500 text-blue-500 dark:text-blue-400' },
  { label: '微信', value: 'wechat', icon: WechatIcon, color: 'bg-green-500 text-green-500 dark:text-green-400' },
  { label: '支付宝', value: 'alipay', icon: AlipayIcon, color: 'bg-sky-500 text-sky-500 dark:text-sky-400' }
]

const newAccountForm = ref({
  type: 'bank',
  name: '',
  accountNo: ''
})

const openAddAccount = () => {
  showManageAccounts.value = false
  newAccountForm.value = { type: 'bank', name: '', accountNo: '' }
  showAddAccount.value = true
}

const submitNewAccount = () => {
  message.success('提现账户添加成功')
  showAddAccount.value = false
  showManageAccounts.value = true
}
</script>