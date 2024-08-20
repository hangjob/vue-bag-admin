<template>
    <n-menu
        v-model:value="$globalStore.currentRouter.meta.topId"
        mode="horizontal"
        key-field="id"
        :collapsed-icon-size="$globalStore.configs.collapsedIconSize"
        :children-field="$globalStore.configs.isSubmenu ? 'children' : '__children__'"
        :options="$globalStore.appGroups"
        responsive
        :on-update:value="(value,item)=>handleUpdateValue(value,item,$globalStore,$global)"
        v-bind="$attrs"
        v-if="$globalStore.appGroups.length"
    />
    <n-breadcrumb v-else>
        <n-breadcrumb-item v-for="item in $globalStore.breadcrumb">
            {{ $global?.helpers?.formatTitle($global, item) }}
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>
<script setup>
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
</script>
