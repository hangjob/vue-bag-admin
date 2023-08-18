<template>
    <n-menu
        :icon-size="18"
        key-field="id"
        label-field="title"
        :value="app.currentRouter.meta.id"
        mode="horizontal"
        :options="app.treeMenus"
        @update:value="compData.handleSelect"
        @update:expanded-keys="compData.handleUpdateExpandedKeys"
    />
</template>
<script lang="ts">
import {h, defineComponent, ref, computed, reactive,watch} from "vue"
import appStore from "@/packages/pinia/app.ts"
import {useRouter} from "vue-router"
export default defineComponent({
    props:{
        isOpen:{
            type:Boolean,
            default:false
        }
    },
    emits: ["update:isOpen"],
    setup() {
        const app = appStore()
        const router = useRouter()
        const compData = reactive({
            expandedKeys:[],
            handleSelect(key,item){
                router.push(item.path)
            },
            handleUpdateExpandedKeys(keys: string[]){
                compData.expandedKeys = keys
            }
        })

        return {
            app,
            compData,
        }
    }
})
</script>
