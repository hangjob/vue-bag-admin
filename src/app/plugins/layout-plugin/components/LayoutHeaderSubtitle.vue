<template>
    <n-popover trigger="click" v-if="$globalStore.configs.isDocking && $globalStore.appGroups.length">
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
</script>
