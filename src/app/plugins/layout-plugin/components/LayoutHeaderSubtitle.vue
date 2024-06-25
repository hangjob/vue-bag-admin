<template>
    <n-popover trigger="click" v-if="$globalStore.configs.isDocking">
        <template #trigger>
            <n-icon size="18">
                <GridOutline/>
            </n-icon>
        </template>
        <Menu mode="vertical"/>
    </n-popover>
    <Menu v-else-if="!$globalStore.deviceInfo.isMobile"/>
    <h3 v-else>{{ $globalStore.webSite.title }}</h3>
</template>

<script setup>
import {GridOutline} from '@vicons/ionicons5'
import Menu from "../common/Menu.vue"

const {appContext: {config: {globalProperties}}} = getCurrentInstance();
/**
 * 深度观察 当前路由的变化
 * 高亮分类
 */
watch(
    () => globalProperties.$globalStore.currentRouter,
    () => {
        const item = globalProperties.$globalStore.appGroups.find((t) => t.id === globalProperties.$globalStore.currentRouter.meta.topId)
        item ? globalProperties.$globalStore.dispatchMenus(item.children) : globalProperties.$globalStore.dispatchMenus(globalProperties.$globalStore.sourceMenus)
    }, {
        deep: true,
        immediate: true
    }
)
</script>
