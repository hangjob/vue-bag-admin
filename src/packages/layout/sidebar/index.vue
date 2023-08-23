<template>
    <n-layout-sider
        v-if="app.userSetting.layoutName !== 'mt' || app.mobile"
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
            v-model:value="compData.value"
            :options="compData.allMenus"
            :expanded-keys="compData.expandedKeys"
            @update:value="compData.handleSelect"
            @update:expanded-keys="compData.handleUpdateExpandedKeys"
        />
    </n-layout-sider>
</template>
<script lang="ts">
import {h, defineComponent, computed, reactive, watch} from "vue"
import AppLogo from "@/packages/layout/components/AppLogo.vue"
import appStore from "@/packages/pinia/app.ts"
import {useRouter} from "vue-router"
import cloneDeep from "lodash/cloneDeep.js"
import {getObjectPath, toTree} from "@/packages/utils/utils.ts"

export default defineComponent({
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    components: {
        AppLogo
    },
    emits: ["update:isOpen"],
    setup(props, {emit}) {
        const app = appStore()
        const router = useRouter()
        const updateExpandedKeys = () => {
            const paths = getObjectPath({arr: toTree({arr:app.allMenus}), id: app.currentRouter.meta.id})
            const tabPaths = paths.filter(item => item.shows)
            compData.expandedKeys = tabPaths.map((item) => item.id)
        }

        const compData = reactive({
            expandedKeys: [],
            styleLeft: computed(() => {
                return app.mobile ? props.isOpen ? 0 : "-250px" : 0
            }),
            allMenus: [],
            handleSelect(key, item) {
                router.push(item.path)
            },
            handleUpdateExpandedKeys(keys: string[]) {
                compData.expandedKeys = keys
            },
            handleCollapse() {
                if (app.mobile) {
                    emit("update:isOpen", false)
                } else {
                    app.collapsed = true
                }
            },
            value:undefined
        })

        watch(() =>
            router.currentRoute.value.path,
        () => {
            updateExpandedKeys()
            if(router.currentRoute.value.meta.shows){
                compData.value = app.currentRouter.meta.id
            }else{
                compData.value = compData.expandedKeys[0]
            }
        },{immediate: true,deep: true})

        watch(app.userSetting, () => {
            if (app.userSetting.layoutName === "tm") {
                compData.allMenus = computed(() => cloneDeep(app.paths[0].children || app.paths))
            } else {
                compData.allMenus = computed(() => cloneDeep(app.treeMenus))
            }
        }, {
            immediate: true
        })

        return {
            compData,
            app
        }
    }
})
</script>
