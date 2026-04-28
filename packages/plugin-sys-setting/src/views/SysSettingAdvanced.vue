<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">高级设置</h2>
      <button class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">
        保存配置
      </button>
    </div>

    <!-- Warning Alert -->
    <div class="mb-8 p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-xl flex gap-3 items-start">
      <svg class="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      <div>
        <h4 class="font-bold text-rose-600 dark:text-rose-400">高危操作提醒</h4>
        <p class="text-sm text-rose-500/80 dark:text-rose-400/80 mt-1">此页面的配置项可能会直接影响系统的正常运行，请在修改前确保您了解这些配置的具体作用。</p>
      </div>
    </div>

    <div class="space-y-8">
      <!-- Database & Cache -->
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <div class="w-1 h-4 bg-blue-500 rounded-full"></div>存储与缓存
        </div>
        <div class="p-6 space-y-6">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-1 space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">Redis 缓存前缀</label>
              <input type="text" value="bag_admin:" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
            <div class="flex-1 space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">数据库自动备份周期</label>
              <select class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                <option value="daily">每天凌晨 02:00</option>
                <option value="weekly">每周日凌晨 03:00</option>
                <option value="monthly">每月 1 号凌晨 04:00</option>
              </select>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-800/30 rounded-lg border border-gray-100 dark:border-gray-800">
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200">清理系统缓存</div>
              <div class="text-xs text-slate-500 mt-1">清理包括字典数据、系统配置、权限规则在内的所有 Redis 缓存</div>
            </div>
            <button class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:text-rose-500 hover:border-rose-500 transition-colors font-medium text-sm">立即清理</button>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <div class="w-1 h-4 bg-emerald-500 rounded-full"></div>安全策略
        </div>
        <div class="p-6 space-y-6">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-1 space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">登录失败锁定次数</label>
              <input type="number" value="5" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
            <div class="flex-1 space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">登录失败锁定时长 (分钟)</label>
              <input type="number" value="30" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
            <div class="flex-1 space-y-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">Token 有效期 (小时)</label>
              <input type="number" value="24" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
          </div>
          
          <hr class="border-gray-100 dark:border-gray-800">
          
          <!-- Switches -->
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <div>
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">单设备登录限制</div>
                <div class="text-xs text-slate-500 mt-1">开启后，同一账号在同一时间只能在一台设备上登录</div>
              </div>
              <div class="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer shadow-inner">
                <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <div>
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">强制验证码登录</div>
                <div class="text-xs text-slate-500 mt-1">开启后，所有用户登录必须输入图形验证码</div>
              </div>
              <div class="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer shadow-inner transition-colors">
                <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- System UI Cache Settings -->
      <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
        <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <div class="w-1 h-4 bg-purple-500 rounded-full"></div>界面与交互设置
        </div>
        <div class="p-6 space-y-6">
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <div>
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">TabBar 页面缓存 (KeepAlive)</div>
                <div class="text-xs text-slate-500 mt-1">开启后，切换标签页时将缓存页面状态，避免重新加载</div>
              </div>
              <div 
                class="w-12 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors"
                :class="enableTabCache ? 'bg-orange-500' : 'bg-gray-200 dark:bg-gray-700'"
                @click="toggleTabCache"
              >
                <div 
                  class="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all"
                  :class="enableTabCache ? 'right-1' : 'left-1'"
                ></div>
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <div>
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">记住上一次打开的 TabBar</div>
                <div class="text-xs text-slate-500 mt-1">刷新页面或重新打开浏览器时，恢复之前打开的标签页列表</div>
              </div>
              <div 
                class="w-12 h-6 rounded-full relative cursor-pointer shadow-inner transition-colors"
                :class="enableTabPersist ? 'bg-orange-500' : 'bg-gray-200 dark:bg-gray-700'"
                @click="toggleTabPersist"
              >
                <div 
                  class="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all"
                  :class="enableTabPersist ? 'right-1' : 'left-1'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

// 由于插件是独立的，为了能够跨包通信和解耦，直接通过 useLocalStorage 操作缓存状态
// key 名称与 admin app 中的 tabbar store 保持一致
const enableTabCache = useLocalStorage<boolean>('bag.admin.enableTabCache', true)
const enableTabPersist = useLocalStorage<boolean>('bag.admin.enableTabPersist', true)

const toggleTabCache = () => {
  enableTabCache.value = !enableTabCache.value
}

const toggleTabPersist = () => {
  enableTabPersist.value = !enableTabPersist.value
}
</script>