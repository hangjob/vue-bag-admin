<template>
    <n-breadcrumb>
        <n-breadcrumb-item>
            <n-icon :component="WalletOutline" /> 北京总行</n-breadcrumb-item>
        <n-breadcrumb-item>
            <n-icon :component="WalletOutline" /> 天津分行</n-breadcrumb-item>
        <n-breadcrumb-item>
            <n-icon :component="WalletOutline" /> 平山道支行</n-breadcrumb-item>
    </n-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { WalletOutline } from "@vicons/ionicons5"

export default defineComponent({
    setup () {
        return {
            WalletOutline
        }
    }
})
</script>
