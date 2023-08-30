<template>
    <n-card>
        <template #header>
            当前校色：
        </template>
        <n-space vertical>
            <n-select @update:value="compData.handleUpdate" v-model:value="compData.value" :options="compData.options" />
        </n-space>
    </n-card>
</template>
<script lang="ts">
import {defineComponent, reactive,inject} from "vue"
export default defineComponent({
    setup(){
        const $mitt: any = inject("$mitt")
        const compData  =  reactive({
            value:null,
            options:[
                {
                    label: "管理员",
                    value: "admin"
                },
                {
                    label: "测试人员",
                    value: "test"
                },
                {
                    label: "普通用户",
                    value: "web"
                },
            ],
            handleUpdate(){
                $mitt.emit("onReload")
            }
        })
        return {
            compData
        }
    }
})
</script>
