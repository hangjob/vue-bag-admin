<template>
    <n-menu
        v-if="!$globalStore.deviceInfo.isMobile"
        v-model:value="$globalStore.currentRouter.meta.topId"
        mode="horizontal"
        key-field="id"
        :children-field="$globalStore.configs.isSubmenu ? 'children' : '__children__'"
        :options="$globalStore.appGroups"
        responsive
        :on-update:value="(value,item)=>handleUpdateValue(value,item,$globalStore,$global)"
    />
    <h3 v-else>{{ $globalStore.webSite.title }}</h3>
</template>

<script setup>

const {appContext: {config: {globalProperties}}} = getCurrentInstance();

const handleUpdateValue = (key, item, $globalStore, $global) => {
    if ($globalStore.configs.isSubmenu) {
        $global.router.push(item.path)
    } else {
        if ($global.radash.isArray(item.children)) {
            $globalStore.currentRouter.meta.topId = key
            $globalStore.dispatchMenus(item.children)
        }
    }
}

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
