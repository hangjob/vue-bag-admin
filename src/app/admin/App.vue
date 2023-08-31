<template>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" :locale="locale"
                       :date-locale="dateLocale">
        <n-notification-provider>
            <n-message-provider>
                <router-view></router-view>
            </n-message-provider>
        </n-notification-provider>
    </n-config-provider>
</template>
<script lang="ts">
import {computed, defineComponent, reactive} from "vue"
import {darkTheme, GlobalThemeOverrides} from "naive-ui"
import {zhCN, dateZhCN} from "naive-ui"
import appStore from "@/packages/pinia/app.ts"

export default defineComponent({
    setup() {
        const app = appStore()
        const themeOverrides: GlobalThemeOverrides = reactive({
            common: {
                primaryColor: computed(() => app.userSetting.themeColor),
                primaryColorHover: computed(() => app.userSetting.themeColor),
                progressRailColor: computed(() => app.userSetting.themeColor)
            },
        })
        return {
            darkTheme: computed(() => app.userSetting.themeName ? darkTheme : null),
            themeOverrides,
            locale: computed(() => app.userSetting.language ? zhCN : null),
            dateLocale: computed(() => app.userSetting.language ? dateZhCN : null),
        }
    }
})
</script>
<style lang="less">

</style>
