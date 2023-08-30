<template>
    <n-card style="height: 100%" content-style="height:100%;padding:0">
        <iframe style="height: 100%;width: 100%" :src="compData.src"></iframe>
    </n-card>
</template>
<script lang="ts">
import {defineComponent, reactive, watch} from "vue"
import {useRoute} from "vue-router"
export default defineComponent({
    setup(){
        const route = useRoute()
        const compData = reactive({
            src:route.meta.url
        })
        watch(route,()=>{
            compData.src = route.meta.url
        })
        return {
            compData
        }
    }
})
</script>
