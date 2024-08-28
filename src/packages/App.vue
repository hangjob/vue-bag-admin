<template>
    <n-config-provider :locale="locales[$globalStore.configs.language].locale"
                       :date-locale="locales[$globalStore.configs.language].dateLocale" abstract
                       :theme="$globalStore.configs.isDarkMode ? darkTheme : null"
                       :theme-overrides="$globalStore.theme.overrides">
        <n-global-style/>
        <!--   多router-view模式     -->
        <template v-if="$globalStore.isRouterAlive">
            <router-view v-if="$globalStore.isIframe" name="iframe"></router-view>
            <router-view v-else></router-view>
        </template>
    </n-config-provider>
</template>
<script setup>
import {darkTheme, NConfigProvider, zhCN, dateZhCN} from 'naive-ui'
const locales = ref({
    zh: {
        locale: zhCN,
        dateLocale: dateZhCN
    },
    en: {
        locale: ref(null),
        dateLocale: ref(null)
    }
})
</script>
