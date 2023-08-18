<template>
    <n-breadcrumb>
        <n-breadcrumb-item v-for="(item) in paths" :key="item.id">
            <template v-if="item.icon">
                <component :is="item.icon"></component> {{item.title}}
            </template>
            <template v-else>
                {{item.title}}
            </template>
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>
<script lang="ts">
import {computed, defineComponent} from "vue"
import { WalletOutline } from "@vicons/ionicons5"
import appPinia from "@/packages/pinia/app.ts"
export default defineComponent({
    setup () {
        const appStore = appPinia()
        return {
            WalletOutline,
            paths:computed(()=>appStore.paths)
        }
    }
})
</script>
