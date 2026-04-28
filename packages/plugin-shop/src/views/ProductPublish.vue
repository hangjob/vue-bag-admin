<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
      </button>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">发布新商品</h2>
    </div>

    <form class="space-y-8" @submit.prevent>
      <!-- Basic Info -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
          基础信息
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2 md:col-span-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">商品名称 <span class="text-rose-500">*</span></label>
            <input type="text" placeholder="请输入商品名称，最多 60 个字符" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">商品分类 <span class="text-rose-500">*</span></label>
            <n-select v-model:value="productCategory" :options="categoryOptions" placeholder="请选择分类" />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">商品编码</label>
            <input type="text" placeholder="请输入商品编码" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
        </div>
      </div>

      <hr class="border-gray-100 dark:border-gray-800">

      <!-- Price & Stock / SKU -->
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
            <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
            规格与价格库存
          </h3>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" v-model="hasSku" class="w-4 h-4 rounded text-orange-500 focus:ring-orange-500">
            <span class="text-sm text-slate-700 dark:text-slate-300 font-medium">启用多规格 (SKU)</span>
          </label>
        </div>

        <!-- 单规格输入 -->
        <div v-if="!hasSku" class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 dark:bg-gray-800/30 p-6 rounded-xl border border-slate-100 dark:border-gray-800">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">售价 (元) <span class="text-rose-500">*</span></label>
            <input type="number" placeholder="0.00" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">原价 (元)</label>
            <input type="number" placeholder="0.00" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">总库存 <span class="text-rose-500">*</span></label>
            <input type="number" placeholder="0" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
        </div>

        <!-- 多规格 (SKU) 设置 -->
        <div v-else class="space-y-6">
          <!-- 规格定义区 -->
          <div class="space-y-4 bg-slate-50 dark:bg-gray-800/30 p-6 rounded-xl border border-slate-100 dark:border-gray-800">
            <div v-for="(spec, specIndex) in specs" :key="spec.id" class="p-4 bg-white dark:bg-[#0A1120] rounded-lg border border-gray-100 dark:border-gray-800 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-sm font-bold text-slate-700 dark:text-slate-300">规格名</span>
                  <input v-model="spec.name" type="text" placeholder="如：颜色、尺码" class="w-48 px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                </div>
                <button @click="removeSpec(specIndex)" class="text-slate-400 hover:text-rose-500 transition-colors">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div class="flex flex-wrap items-center gap-3 pl-12">
                <div v-for="(val, valIndex) in spec.values" :key="valIndex" class="flex items-center gap-1 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-md text-sm border border-orange-100 dark:border-orange-500/20">
                  <span>{{ val }}</span>
                  <button @click="removeSpecValue(specIndex, valIndex)" class="text-orange-400 hover:text-orange-600 ml-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>
                <div class="flex items-center gap-2">
                  <input v-model="spec.inputValue" @keyup.enter="addSpecValue(specIndex)" type="text" placeholder="输入规格值回车" class="w-32 px-3 py-1 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                  <button @click="addSpecValue(specIndex)" class="text-sm text-orange-500 hover:text-orange-600 font-medium px-2 py-1 bg-orange-50 dark:bg-gray-800 rounded">添加</button>
                </div>
              </div>
            </div>
            <button @click="addSpec" class="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 font-medium px-4 py-2 border border-dashed border-orange-200 dark:border-orange-500/30 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors w-full justify-center">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              添加规格项目
            </button>
          </div>

          <!-- SKU 明细表格 -->
          <div v-if="skuList.length > 0" class="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
            <table class="w-full text-left border-collapse">
              <thead class="bg-slate-50 dark:bg-gray-800/50">
                <tr class="text-sm text-slate-500 dark:text-slate-400 font-semibold border-b border-gray-100 dark:border-gray-800">
                  <th v-for="spec in validSpecs" :key="spec.id" class="p-3">{{ spec.name || '规格' }}</th>
                  <th class="p-3 w-32">售价 (元)</th>
                  <th class="p-3 w-32">原价 (元)</th>
                  <th class="p-3 w-32">库存</th>
                  <th class="p-3 w-40">SKU编码</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                <tr v-for="(sku, index) in skuList" :key="index" class="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors">
                  <td v-for="(val, vIndex) in sku.specs" :key="vIndex" class="p-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {{ val }}
                  </td>
                  <td class="p-3">
                    <input v-model="sku.price" type="number" class="w-full px-2 py-1.5 text-sm rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-1 focus:ring-orange-500 outline-none">
                  </td>
                  <td class="p-3">
                    <input v-model="sku.originalPrice" type="number" class="w-full px-2 py-1.5 text-sm rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-1 focus:ring-orange-500 outline-none">
                  </td>
                  <td class="p-3">
                    <input v-model="sku.stock" type="number" class="w-full px-2 py-1.5 text-sm rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-1 focus:ring-orange-500 outline-none">
                  </td>
                  <td class="p-3">
                    <input v-model="sku.code" type="text" class="w-full px-2 py-1.5 text-sm rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-1 focus:ring-orange-500 outline-none">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="text-center py-8 text-slate-400 text-sm bg-slate-50 dark:bg-gray-800/30 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
            请先添加规格及规格值，将自动生成 SKU 表格
          </div>
        </div>
      </div>

      <hr class="border-gray-100 dark:border-gray-800">

      <!-- Images -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
          商品图片
        </h3>
        <div class="space-y-2">
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">商品主图 <span class="text-rose-500">*</span></label>
          <div class="flex gap-4">
            <!-- Upload Placeholder -->
            <div class="w-24 h-24 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-500 cursor-pointer transition-colors bg-slate-50 dark:bg-gray-800/50">
              <svg class="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span class="text-xs">上传图片</span>
            </div>
          </div>
          <p class="text-xs text-slate-500 mt-2">建议尺寸 800x800 像素，大小不超过 2MB，支持 jpg、png 格式</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-4 pt-6 mt-8 border-t border-gray-100 dark:border-gray-800">
        <button type="button" @click="router.back()" class="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-bold">取消</button>
        <button type="button" class="px-6 py-2.5 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors font-bold">保存草稿</button>
        <button type="button" class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">发布商品</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NSelect } from 'naive-ui'

const router = useRouter()

const productCategory = ref(null)
const categoryOptions = [
  { label: '女装 / 外套', value: '1' },
  { label: '女装 / 毛衣', value: '2' },
  { label: '箱包 / 单肩包', value: '3' }
]

// 是否启用多规格
const hasSku = ref(false)

// 规格定义
interface Spec {
  id: number
  name: string
  values: string[]
  inputValue: string
}
const specs = ref<Spec[]>([
  { id: Date.now(), name: '颜色', values: ['红色', '蓝色'], inputValue: '' },
  { id: Date.now() + 1, name: '尺码', values: ['S', 'M'], inputValue: '' }
])

const validSpecs = computed(() => {
  return specs.value.filter(s => s.name.trim() && s.values.length > 0)
})

// SKU 列表
interface SkuItem {
  id: string
  specs: string[]
  price: string
  originalPrice: string
  stock: string
  code: string
}
const skuList = ref<SkuItem[]>([])

// 添加规格名
const addSpec = () => {
  specs.value.push({
    id: Date.now(),
    name: '',
    values: [],
    inputValue: ''
  })
}

// 移除规格名
const removeSpec = (index: number) => {
  specs.value.splice(index, 1)
}

// 添加规格值
const addSpecValue = (index: number) => {
  const val = specs.value[index].inputValue.trim()
  if (val && !specs.value[index].values.includes(val)) {
    specs.value[index].values.push(val)
  }
  specs.value[index].inputValue = ''
}

// 移除规格值
const removeSpecValue = (specIndex: number, valIndex: number) => {
  specs.value[specIndex].values.splice(valIndex, 1)
}

// 监听规格变化，重新生成 SKU 表格
watch(() => specs.value, (newSpecs) => {
  const vSpecs = newSpecs.filter(s => s.name.trim() && s.values.length > 0)
  
  if (vSpecs.length === 0) {
    skuList.value = []
    return
  }

  // 笛卡尔积算法
  const cartesian = (arr: string[][]) => {
    return arr.reduce((a, b) => {
      return a.flatMap(x => b.map(y => [...x, y]))
    }, [[]] as string[][])
  }

  const specValuesArr = vSpecs.map(s => s.values)
  const combinations = cartesian(specValuesArr)

  // 保留原有填写的 SKU 数据
  const oldSkuMap = new Map(skuList.value.map(sku => [sku.specs.join('-'), sku]))

  skuList.value = combinations.map(combo => {
    const key = combo.join('-')
    const oldSku = oldSkuMap.get(key)
    return {
      id: key,
      specs: combo,
      price: oldSku?.price || '',
      originalPrice: oldSku?.originalPrice || '',
      stock: oldSku?.stock || '',
      code: oldSku?.code || ''
    }
  })
}, { deep: true, immediate: true })

</script>