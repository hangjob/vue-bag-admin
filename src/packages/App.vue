<template>
    <n-config-provider :locale="locales[$globalStore.configs.language].locale"
                       :date-locale="locales[$globalStore.configs.language].dateLocale" abstract
                       :theme="$globalStore.configs.isDarkMode ? darkTheme : null"
                       :theme-overrides="$globalStore.theme.overrides">
        <n-global-style/>
        <router-view></router-view>
        <n-date-picker/>
    </n-config-provider>
</template>
<script setup>
import {darkTheme, NConfigProvider} from 'naive-ui'
import locales from "@/packages/locales/index.js";
// globalProperties.$globalHook.useCutColorTheme();
</script>
