<template>
	<n-config-provider :theme-overrides="themeOverrides" :locale="locale" :date-locale="dateLocale">
        <n-message-provider>
            <router-view></router-view>
        </n-message-provider>
	</n-config-provider>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, ref} from "vue"
import { darkTheme,NConfigProvider ,GlobalThemeOverrides} from "naive-ui"
import { zhCN, dateZhCN } from "naive-ui"
import type { NLocale, NDateLocale } from "naive-ui"
import appStore from "@/packages/pinia/app.ts"
export default defineComponent({
    setup() {
        const app = appStore()
        const themeOverrides: GlobalThemeOverrides = reactive({
            common: {
                primaryColor:computed(()=>app.userSetting.themeColor),
                primaryColorHover:computed(()=>app.userSetting.themeColor),
            },
        })
        return {
            darkTheme,
            themeOverrides,
            zhCN,
            dateZhCN,
            locale: ref<NLocale | null>(null),
            dateLocale: ref<NDateLocale | null>(null)
        }
    }
})
</script>
<style lang="less">

</style>
