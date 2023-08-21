<template>
    <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        :collapsed="app.collapsed"
        :class="[app.mobile ? 'mobile' : null]"
        :style="{left: compData.styleLeft}"
        @collapse="compData.handleCollapse"
        @expand="app.collapsed = false"
    >
        <AppLogo v-if="app.mobile"/>
        <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :icon-size="18"
            key-field="id"
            label-field="title"
            v-model:value="app.currentRouter.meta.id"
            :options="compData.allMenus"
            :expanded-keys="compData.expandedKeys"
            @update:value="compData.handleSelect"
            @update:expanded-keys="compData.handleUpdateExpandedKeys"
        />
    </n-layout-sider>
</template>
<script lang="ts">
import {h, defineComponent, ref, Component, computed, reactive,watch} from "vue"
import AppLogo from "@/packages/layout/components/AppLogo.vue"
import appStore from "@/packages/pinia/app.ts"
import {useRouter} from "vue-router"
import cloneDeep from "lodash/cloneDeep.js"
import { getObjectPath} from "@/packages/utils/utils.ts"
export default defineComponent({
    props:{
        isOpen:{
            type:Boolean,
            default:false
        }
    },
    components: {
        AppLogo
    },
    emits: ["update:isOpen"],
    setup(props,{emit}) {
        const app = appStore()
        const router = useRouter()
        const compData = reactive({
            expandedKeys:[],
            styleLeft:computed(()=>{
                return app.mobile ? props.isOpen ? 0 : "-250px" : 0
            }),
            allMenus:[],
            handleSelect(key,item){
                router.push(item.path)
            },
            handleUpdateExpandedKeys(keys: string[]){
                compData.expandedKeys = keys
            },
            handleCollapse(){
                if(app.mobile){
                    emit("update:isOpen", false)
                }else{
                    app.collapsed = true
                }
            },
        })

        watch(app.userSetting,()=>{
            if(app.userSetting.layoutName === "tm"){
                compData.allMenus = computed(()=>cloneDeep(app.paths[0].children || app.paths))
            }else{
                compData.allMenus = computed(()=>cloneDeep(app.treeMenus))
            }
        },{
            immediate:true
        })

        const updateExpandedKeys = ()=>{
            const paths = getObjectPath({arr:compData.allMenus,id:app.currentRouter.meta.id})
            const tabPaths = paths.slice(1)
            compData.expandedKeys = tabPaths.map((item)=>item.id)
        }
        updateExpandedKeys()

        app.$subscribe((mutation, state)=>{
            updateExpandedKeys()
        })


        return {
            compData,
            app
        }
    }
})
</script>
