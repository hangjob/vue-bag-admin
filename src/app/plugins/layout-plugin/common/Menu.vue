<template>
    <n-menu
        v-model:value="$globalStore.currentRouter.meta.topId"
        mode="horizontal"
        key-field="id"
        :children-field="$globalStore.configs.isSubmenu ? 'children' : '__children__'"
        :options="$globalStore.appGroups"
        responsive
        :on-update:value="(value,item)=>handleUpdateValue(value,item,$globalStore,$global)"
        v-bind="$attrs"
    />
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
