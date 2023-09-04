<template>
    <n-spin :show="compData.show" class="spin">
        <n-card style="height: 100%" content-style="height:100%;padding:0">
            <iframe ref="iframe" style="height: 100%;width: 100%" :src="compData.src"></iframe>
        </n-card>
    </n-spin>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive, ref, watch} from "vue"
import {useRoute} from "vue-router"
export default defineComponent({
    setup(){
        const route = useRoute()
        const iframe = ref<HTMLElement | null>(null)
        const compData = reactive({
            src:route.meta.url,
            show:true
        })
        watch(route,()=>{
            compData.src = route.meta.url
        })
        onMounted(()=>{
            iframe.value.onload= function () {
                compData.show = false
            }
        })
        return {
            compData,
            iframe
        }
    }
})
</script>
<style lang="less" scoped>
.spin{
    height: 100%;
    :deep(.n-spin-content){
        height: 100%;
    }
}
</style>
