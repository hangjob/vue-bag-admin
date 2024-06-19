<template>
    <n-config-provider :locale="locales[$globalStore.configs.language].locale"
                       :date-locale="locales[$globalStore.configs.language].dateLocale" abstract
                       :theme="$globalStore.configs.isDarkMode ? darkTheme : null"
                       :theme-overrides="$globalStore.theme.overrides">
        <n-global-style/>
        <router-view></router-view>
    </n-config-provider>
</template>
<script setup>
import {darkTheme, NConfigProvider, zhCN, dateZhCN, useMessage} from 'naive-ui'

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
// globalProperties.$globalHook.useCutColorTheme();
</script>
