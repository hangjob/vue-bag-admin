<template>
    <n-card :segmented="{content: true,footer:true}" footer-style="padding:10px" content-style="padding:0px">
        <template #header>
            当前角色：
        </template>
        <template #header-extra>
            页面级权限，一般放在路由拦截处理
        </template>
        <n-card :bordered="false">
            <n-select
                :value="compData.value"
                multiple
                :render-tag="renderTag"
                :options="compData.options"
                @update:value="compData.handleUpdate"
            />
        </n-card>
        <template #footer>
            Vue Router，在全局路由钩子函数beforeEach，afterEach ，页面拦截以及路由渲染
        </template>
    </n-card>
</template>
<script lang="ts">
import {defineComponent, reactive,inject,h} from "vue"
import appStore from "@/packages/pinia/app.ts"
import {SelectRenderTag,NTag} from "naive-ui"
import { useMessage } from "naive-ui"
export default defineComponent({
    setup(){
        const $mitt: any = inject("$mitt")
        const app = appStore()
        const message = useMessage()
        const renderTag: SelectRenderTag = ({ option, handleClose }) => {
            return h(
                NTag,
                {
                    type: option.type as "success" | "warning" | "error" | "info",
                    closable: true,
                    onMousedown: (e: FocusEvent) => {
                        e.preventDefault()
                    },
                    onClose: (e: MouseEvent) => {
                        e.stopPropagation()
                        handleClose()
                    }
                },
                { default: () => option.label }
            )
        }
        const compData  =  reactive({
            value:app.userInfo.roles || [],
            options:[
                {
                    label: "管理员",
                    value: "admin",
                    type:"success"
                },
                {
                    label: "测试人员",
                    value: "test",
                    type:"warning"
                },
                {
                    label: "普通用户",
                    value: "web",
                    type:"info"
                },
                {
                    label: "会员用户",
                    value: "vip",
                    type:"success"
                },
            ],
            handleUpdate(lable){
                compData.value = lable
                message.warning("模拟演示，3秒后刷新")
                setTimeout(()=>{
                    $mitt.emit("onReload")
                },3000)
            }
        })
        return {
            compData,
            renderTag
        }
    }
})
</script>
