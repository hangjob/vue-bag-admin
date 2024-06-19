<template>
    <n-menu
        :inverted="false"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="$globalStore.menus"
        key-field="id"
        label-field="label"
        v-model:value="$globalStore.currentRouter.meta.id"
        :on-update:value="(value,item)=>$global.router.push(item.path)"
    />
</template>
<script setup>
</script>
