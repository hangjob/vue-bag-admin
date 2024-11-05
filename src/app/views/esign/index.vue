<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="电子签章" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-form inline  label-placement="left">
                    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
                        <n-grid-item span="12 m:12 l:4">
                            <n-form-item label="画笔宽度">
                                <n-select v-model:value="lineWidth" :options="options"/>
                            </n-form-item>
                        </n-grid-item>
                        <n-grid-item span="12 m:12 l:4">
                            <n-form-item label="画笔颜色">
                                <n-color-picker v-model:value="lineColor" />
                            </n-form-item>
                        </n-grid-item>
                    </n-grid>
                </n-form>
                <Vue3Esign ref="vueEsignRef" v-model:bgColor="vueEsignBgColor" :is-clear-bg-color="false" :width="800"
                           :height="400" :is-crop="isCrop" :line-width="lineWidth" :line-color="lineColor"/>
                <n-space class="mt-5 mb-5">
                    <n-button @click="esignReset">重置画布</n-button>
                    <n-button @click="create">生成图片</n-button>
                </n-space>
                <n-image width="80%" :src="img"/>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import {Vue3Esign} from 'vue3-esign'

const options = ref([
    {label: 4, value: 4},
    {label: 6, value: 6},
    {label: 8, value: 8},
    {label: 10, value: 10},
    {label: 12, value: 12},
    {label: 14, value: 14},
])
const vueEsignRef = ref(null)
const vueEsignBgColor = ref('rgba(210,210,210,0.4)')
const lineWidth = ref(6)
const lineColor = ref('#000000')
const isCrop = ref(false)
const img = ref('')

const esignReset = async () => {
    vueEsignRef.value.reset()
}

const create = async () => {
    try {
        img.value = await vueEsignRef.value.generate()
    } catch (error) {
        img.value = ''
    }
}
</script>
<style>

</style>
