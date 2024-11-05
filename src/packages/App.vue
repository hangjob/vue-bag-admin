<template>
    <n-config-provider :locale="locales[$globalStore.configs.language].locale"
                       :date-locale="locales[$globalStore.configs.language].dateLocale" abstract
                       :theme="$globalStore.configs.isDarkMode ? darkTheme : null"
                       :theme-overrides="$globalStore.theme.overrides">
        <n-global-style/>
        <!--   多router-view模式     -->
        <template v-if="$globalStore.isRouterReload">
            <router-view v-if="$globalStore.isIframe" name="iframe">
            </router-view>
            <router-view v-else></router-view>
        </template>
    </n-config-provider>
</template>
<script setup>
import {darkTheme, NConfigProvider, zhCN, dateZhCN} from 'naive-ui'

// 这里还可以使用inject注入值，延续在这个系统中使用
const props = defineProps({
    elRoot: {
        type: Boolean,
        default: true
    }
})
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
