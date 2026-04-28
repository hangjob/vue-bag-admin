<template>
  <div class="grid gap-6 p-2 md:p-4">
    <!-- Welcome Section (E-commerce Style) -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-rose-500 p-8 shadow-lg shadow-orange-500/20 text-white flex justify-between items-center">
      <!-- Decorative circles -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-40 h-40 bg-orange-300/20 rounded-full blur-xl -ml-10 -mb-10 pointer-events-none"></div>
      
      <div class="relative z-10">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-sm">
          商城运营数据中心
        </h2>
        <p class="text-orange-50 font-medium text-lg flex items-center gap-2">
          <span>欢迎回来，今天也要元气满满地营业哦！🛍️</span>
        </p>
      </div>
      
      <div class="hidden md:flex relative z-10 flex-col items-end">
        <div class="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md mb-2 flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          当前状态：营业中
        </div>
        <div class="text-2xl font-black">2026 秋季大促进行中</div>
      </div>
    </div>

    <!-- Quick Actions (快捷操作) -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      <div 
        v-for="(action, index) in quickActions" 
        :key="index" 
        @click="router.push(action.path)"
        class="bg-white dark:bg-[#0A1120] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-orange-50 dark:border-gray-800 group"
      >
        <div :class="action.color" class="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
          <component :is="action.icon" class="w-6 h-6" />
        </div>
        <span class="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-orange-500 transition-colors">{{ action.label }}</span>
      </div>
    </div>

    <!-- Data Cards (Warm/E-commerce) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(stat, index) in stats" :key="index" class="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A1120] border border-orange-50 dark:border-gray-800 p-6 hover:shadow-xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1 group">
        <div class="flex justify-between items-start mb-6">
          <div class="text-slate-500 dark:text-slate-400 font-bold text-sm">{{ stat.label }}</div>
          <div :class="stat.iconBg" class="p-3 rounded-2xl text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
            <component :is="stat.icon" class="w-6 h-6" />
          </div>
        </div>
        <div class="flex items-baseline gap-3">
          <div class="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight flex items-baseline">
            <span v-if="stat.prefix" class="mr-1">{{ stat.prefix }}</span>
            <n-number-animation 
              :from="stat.prevValue" 
              :to="stat.value" 
              :precision="stat.precision" 
              show-separator 
            />
          </div>
        </div>
        <div class="mt-3 flex items-center text-sm font-medium">
          <span :class="stat.trend > 0 ? 'text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400' : 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400'" class="flex items-center px-2 py-0.5 rounded-full transition-colors">
            <svg v-if="stat.trend > 0" class="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <svg v-else class="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
            {{ Math.abs(stat.trend) }}%
          </span>
          <span class="text-slate-400 dark:text-slate-500 ml-2">较昨日</span>
        </div>
      </div>
    </div>

    <!-- Charts & Main Content Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 销售趋势分析 -->
      <div class="lg:col-span-2 relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A1120] border border-orange-50 dark:border-gray-800 p-6 shadow-sm transition-colors flex flex-col min-h-[350px]">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-5 bg-orange-500 rounded-full"></div>
            销售趋势分析
          </h3>
          <div class="flex gap-2 bg-slate-50 dark:bg-gray-800/50 p-1 rounded-full">
            <button class="px-4 py-1.5 text-xs font-bold rounded-full bg-white dark:bg-gray-700 text-orange-600 dark:text-orange-400 shadow-sm transition-all">今日</button>
            <button class="px-4 py-1.5 text-xs font-bold rounded-full text-slate-500 dark:text-slate-400 hover:text-orange-500 transition-colors">本周</button>
            <button class="px-4 py-1.5 text-xs font-bold rounded-full text-slate-500 dark:text-slate-400 hover:text-orange-500 transition-colors">本月</button>
          </div>
        </div>
        
        <!-- Smooth Area Chart Placeholder -->
        <div class="flex-1 flex items-end justify-between gap-2 px-2 relative mt-6 min-h-[200px]">
          <!-- Grid lines -->
          <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div class="w-full h-px bg-slate-100 dark:bg-gray-800 transition-colors" v-for="i in 6" :key="i"></div>
          </div>
          <!-- Area/Bars -->
          <div v-for="(val, i) in chartData" :key="i" class="w-full relative group cursor-pointer h-full flex flex-col justify-end items-center">
            <!-- Tooltip -->
            <div class="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 bg-slate-800 dark:bg-slate-700 text-white text-xs py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap z-10 pointer-events-none flex flex-col items-center">
              <span class="font-bold text-[13px]">¥{{ val.value }}</span>
              <span class="text-[10px] text-slate-300">{{ val.orders }} 笔订单</span>
              <div class="absolute -bottom-1 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
            </div>
            <div class="w-4/5 bg-gradient-to-t from-orange-400/80 to-rose-500 dark:from-orange-500/80 dark:to-rose-500/80 rounded-t-md transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] group-hover:opacity-100 opacity-90" :style="{ height: val.height + '%' }"></div>
            <div class="text-[11px] font-medium text-slate-400 dark:text-slate-500 mt-3 group-hover:text-orange-500 transition-colors">{{ val.label }}</div>
          </div>
        </div>
      </div>

      <!-- 实时动态 -->
      <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A1120] border border-orange-50 dark:border-gray-800 p-6 shadow-sm flex flex-col transition-colors">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-5 bg-rose-500 rounded-full"></div>
            实时动态
          </h3>
          <button @click="router.push('/order/list')" class="text-sm text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-bold transition-colors bg-orange-50 dark:bg-orange-500/10 px-3 py-1 rounded-full cursor-pointer">全部动态</button>
        </div>
        <div class="flex-1 overflow-hidden relative">
          <transition-group 
            name="list" 
            tag="div" 
            class="absolute inset-0 flex flex-col gap-0 pr-2 custom-scrollbar overflow-y-auto"
          >
            <div v-for="(activity, i) in displayActivities" :key="activity.id" class="flex items-start gap-4 group py-3 border-b border-slate-50 dark:border-gray-800/50 last:border-0 transition-colors">
              <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-orange-50 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 group-hover:scale-110 group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-all duration-300">
                <component :is="activity.icon" class="w-5 h-5" />
              </div>
              <div class="flex-1 transition-colors pt-0.5">
                <div class="flex justify-between items-start mb-1">
                  <p class="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ activity.title }}</p>
                  <span class="text-[11px] text-slate-400 dark:text-slate-500 font-medium bg-slate-50 dark:bg-gray-800 px-2 py-0.5 rounded">{{ activity.time }}</span>
                </div>
                <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">{{ activity.desc }}</p>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Top Products & Traffic Sources -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 热销商品榜单 -->
      <div class="lg:col-span-2 relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A1120] border border-orange-50 dark:border-gray-800 p-6 shadow-sm transition-colors">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-5 bg-amber-500 rounded-full"></div>
            热销商品榜单
          </h3>
          <button @click="router.push('/product/list')" class="text-sm text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer">
            查看完整榜单
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-100 dark:border-gray-800 text-sm text-slate-500 dark:text-slate-400 font-semibold">
                <th class="pb-3 pl-2">排名</th>
                <th class="pb-3">商品信息</th>
                <th class="pb-3">单价</th>
                <th class="pb-3">销量</th>
                <th class="pb-3 text-right pr-2">总销售额</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in topProducts" :key="index" class="border-b border-slate-50 dark:border-gray-800/50 hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors group">
                <td class="py-3 pl-2">
                  <div class="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" 
                    :class="index === 0 ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' : index === 1 ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30' : index === 2 ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30' : 'bg-slate-100 dark:bg-gray-800 text-slate-500'">
                    {{ index + 1 }}
                  </div>
                </td>
                <td class="py-3">
                  <div class="flex items-center gap-3">
                    <img :src="product.image" class="w-10 h-10 rounded-lg object-cover border border-slate-100 dark:border-gray-700 shadow-sm" />
                    <div>
                      <div class="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-orange-600 transition-colors">{{ product.name }}</div>
                      <div class="text-[11px] text-slate-400">{{ product.category }}</div>
                    </div>
                  </div>
                </td>
                <td class="py-3 text-sm font-medium text-slate-600 dark:text-slate-300">¥{{ product.price }}</td>
                <td class="py-3">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ product.sales }}</span>
                    <span v-if="product.trend > 0" class="text-xs text-rose-500 flex items-center"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>{{ product.trend }}%</span>
                  </div>
                </td>
                <td class="py-3 text-right pr-2 text-sm font-bold text-orange-600 dark:text-orange-400">¥{{ product.revenue }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 流量来源分析 -->
      <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A1120] border border-orange-50 dark:border-gray-800 p-6 shadow-sm flex flex-col transition-colors">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-5 bg-indigo-500 rounded-full"></div>
            流量来源占比
          </h3>
        </div>
        
        <div class="flex-1 flex flex-col justify-center gap-6">
          <!-- Donut chart placeholder (CSS based) -->
          <div class="relative w-40 h-40 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
              <!-- Background circle -->
              <path class="text-slate-100 dark:text-gray-800" stroke-width="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <!-- App (45%) -->
              <path class="text-orange-500 transition-all duration-1000 ease-out drop-shadow-sm" stroke-dasharray="45, 100" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <!-- Mini Program (30%) -->
              <path class="text-rose-500 transition-all duration-1000 ease-out drop-shadow-sm" stroke-dasharray="30, 100" stroke-dashoffset="-45" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <!-- H5 Web (15%) -->
              <path class="text-amber-400 transition-all duration-1000 ease-out drop-shadow-sm" stroke-dasharray="15, 100" stroke-dashoffset="-75" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <!-- PC Web (10%) -->
              <path class="text-indigo-400 transition-all duration-1000 ease-out drop-shadow-sm" stroke-dasharray="10, 100" stroke-dashoffset="-90" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div class="absolute flex flex-col items-center justify-center text-center">
              <span class="text-2xl font-black text-slate-800 dark:text-slate-100">8.6w</span>
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">总访问量</span>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3 mt-2">
            <div v-for="(source, i) in trafficSources" :key="i" class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors">
              <div :class="source.color" class="w-3 h-3 rounded-full shadow-sm"></div>
              <div class="flex-1">
                <div class="text-[11px] text-slate-500 dark:text-slate-400">{{ source.label }}</div>
                <div class="text-sm font-bold text-slate-700 dark:text-slate-200">{{ source.percent }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { NNumberAnimation } from 'naive-ui'

const router = useRouter()

// Icons Definitions
const MoneyIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
  h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
])

const ShoppingBagIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }),
  h('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
  h('path', { d: 'M16 10a4 4 0 0 1-8 0' })
])

const UserHeartIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' })
])

const ChartUpIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17' }),
  h('polyline', { points: '16 7 22 7 22 13' })
])

const PackageIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('line', { x1: '16.5', y1: '9.4', x2: '7.5', y2: '4.21' }),
  h('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
  h('polyline', { points: '3.27 6.96 12 12.01 20.73 6.96' }),
  h('line', { x1: '12', y1: '22.08', x2: '12', y2: '12' })
])

const MessageIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
])

const UsersIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '9', cy: '7', r: '4' }),
  h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
  h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
])

const SettingsIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('circle', { cx: '12', cy: '12', r: '3' }),
  h('path', { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' })
])

const TagIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' }),
  h('line', { x1: '7', y1: '7', x2: '7.01', y2: '7' })
])

const RefreshIcon = h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('polyline', { points: '23 4 23 10 17 10' }),
  h('path', { d: 'M20.49 15a9 9 0 1 1-2.12-9.36L23 10' })
])

// Data Definitions
const quickActions = [
  { label: '发布商品', path: '/product/publish', icon: PackageIcon, color: 'bg-gradient-to-br from-orange-400 to-rose-500' },
  { label: '订单管理', path: '/order/list', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-blue-400 to-indigo-500' },
  { label: '用户管理', path: '/user/list', icon: UsersIcon, color: 'bg-gradient-to-br from-emerald-400 to-teal-500' },
  { label: '优惠营销', path: '/marketing/index', icon: TagIcon, color: 'bg-gradient-to-br from-rose-400 to-pink-500' },
  { label: '退换货', path: '/order/returns', icon: RefreshIcon, color: 'bg-gradient-to-br from-amber-400 to-orange-500' },
  { label: '客服消息', path: '/store/settings/service', icon: MessageIcon, color: 'bg-gradient-to-br from-cyan-400 to-blue-500' },
  { label: '财务结算', path: '/finance', icon: MoneyIcon, color: 'bg-gradient-to-br from-purple-400 to-indigo-500' },
  { label: '店铺设置', path: '/store/settings', icon: SettingsIcon, color: 'bg-gradient-to-br from-slate-600 to-slate-800' }
]

const stats = ref([
  { label: '今日营业额', prefix: '¥', prevValue: 0, value: 128430.50, precision: 2, trend: 15.2, iconBg: 'bg-gradient-to-br from-rose-400 to-red-500', icon: MoneyIcon },
  { label: '支付订单数', prefix: '', prevValue: 0, value: 3842, precision: 0, trend: 8.4, iconBg: 'bg-gradient-to-br from-orange-400 to-orange-500', icon: ShoppingBagIcon },
  { label: '新增会员数', prefix: '', prevValue: 0, value: 428, precision: 0, trend: -2.1, iconBg: 'bg-gradient-to-br from-pink-400 to-rose-400', icon: UserHeartIcon },
  { label: '客单价', prefix: '¥', prevValue: 0, value: 33.42, precision: 2, trend: 5.6, iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500', icon: ChartUpIcon }
])

const chartData = [
  { label: '08:00', height: 20, value: '12,000', orders: 350 },
  { label: '10:00', height: 45, value: '25,000', orders: 820 },
  { label: '12:00', height: 85, value: '45,000', orders: 1450 },
  { label: '14:00', height: 60, value: '32,000', orders: 980 },
  { label: '16:00', height: 50, value: '28,000', orders: 890 },
  { label: '18:00', height: 75, value: '40,000', orders: 1200 },
  { label: '20:00', height: 100, value: '55,000', orders: 1800 },
  { label: '22:00', height: 65, value: '35,000', orders: 1100 }
]

const activities = [
  { id: 1, title: '新订单提示', desc: '用户「林**」购买了「秋季新款风衣」等 3 件商品，已支付 ¥458.00', time: '刚刚', icon: ShoppingBagIcon },
  { id: 2, title: '库存预警', desc: '商品「网红爆款针织衫」黑色M码库存不足 50 件，请及时补货', time: '10分钟前', icon: PackageIcon },
  { id: 3, title: '用户咨询', desc: '收到一条关于「退换货政策及运费险」的在线客服咨询', time: '半小时前', icon: MessageIcon },
  { id: 4, title: '大额订单', desc: '产生一笔金额 ¥2,580.00 的企业团购订单，收货地为上海市', time: '2小时前', icon: MoneyIcon },
  { id: 5, title: '退款申请', desc: '用户「李**」申请退款「无线蓝牙耳机」，原因：七天无理由', time: '3小时前', icon: RefreshIcon },
  { id: 6, title: '评价提醒', desc: '商品「秋冬加厚打底裤」收到一条带图好评', time: '5小时前', icon: UserHeartIcon }
]

const displayActivities = ref([...activities].slice(0, 5))

// 模拟实时滚动更新与数据跳动
let timer: ReturnType<typeof setInterval>
let statsTimer: ReturnType<typeof setInterval>

onMounted(() => {
  let counter = 7
  
  // 1. 模拟动态消息滚动 (每4秒)
  timer = setInterval(() => {
    // 随机从 activities 池中取一个并赋予新 id 模拟新数据
    const randomAct = activities[Math.floor(Math.random() * activities.length)]
    displayActivities.value.unshift({ ...randomAct, id: counter++, time: '刚刚' })
    if (displayActivities.value.length > 5) {
      displayActivities.value.pop()
    }
  }, 4000)

  // 2. 模拟营业额和订单数据跳动 (每隔2~5秒随机更新)
  const updateStats = () => {
    // 增加 1~5 个随机订单
    const newOrders = Math.floor(Math.random() * 5) + 1
    // 每个订单金额在 20~200 之间
    const newRevenue = newOrders * (Math.random() * 180 + 20)
    
    // 更新今日营业额
    stats.value[0].prevValue = stats.value[0].value
    stats.value[0].value += newRevenue
    
    // 更新支付订单数
    stats.value[1].prevValue = stats.value[1].value
    stats.value[1].value += newOrders
    
    // 偶尔更新下新增会员 (20%概率)
    if (Math.random() > 0.8) {
      stats.value[2].prevValue = stats.value[2].value
      stats.value[2].value += 1
    }
    
    // 重新计算客单价
    stats.value[3].prevValue = stats.value[3].value
    stats.value[3].value = Number((stats.value[0].value / stats.value[1].value).toFixed(2))

    // 随机下一次更新时间 (2~5秒)
    statsTimer = setTimeout(updateStats, Math.random() * 3000 + 2000)
  }
  
  // 启动数据跳动模拟
  statsTimer = setTimeout(updateStats, 2000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (statsTimer) clearTimeout(statsTimer)
})

const topProducts = [
  { name: '秋季法式高级感收腰风衣', category: '女装 / 外套', price: '458.00', sales: '2,845', trend: 12.5, revenue: '1,303,010', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop' },
  { name: '复古真皮单肩斜挎包', category: '箱包 / 单肩包', price: '299.00', sales: '1,932', trend: 8.2, revenue: '577,668', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&h=100&fit=crop' },
  { name: '降噪蓝牙耳机 Pro Max', category: '数码 / 耳机', price: '899.00', sales: '1,520', trend: 15.8, revenue: '1,366,480', image: 'https://images.unsplash.com/photo-1606220588913-b3aec89155a9?w=100&h=100&fit=crop' },
  { name: '韩版宽松慵懒风毛衣', category: '女装 / 毛衣', price: '159.00', sales: '1,245', trend: -2.4, revenue: '197,955', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop' },
  { name: '美白补水保湿面膜套装', category: '美妆 / 护肤', price: '128.00', sales: '986', trend: 5.6, revenue: '126,208', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop' }
]

const trafficSources = [
  { label: '微信小程序', percent: 45, color: 'bg-orange-500' },
  { label: 'APP客户端', percent: 30, color: 'bg-rose-500' },
  { label: 'H5 移动端', percent: 15, color: 'bg-amber-400' },
  { label: 'PC 网页端', percent: 10, color: 'bg-indigo-400' }
]
</script>

<style scoped>
/* 隐藏滚动条 */
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* 实时动态列表动画 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
