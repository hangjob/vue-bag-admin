import { Component, createApp, shallowRef } from 'vue'
import App from './App.vue'
import install, { $optionsType } from '@/packages/install'
import paths from '@www/admin/router'
import bagHeaderItem from '@www/admin/components/ThemeBar.vue'
import setupGlobComponents from '@www/admin/plugin/md-editor-v3'

const file: Record<string, Component> = import.meta.glob('/www/admin/views/**/*.vue', { eager: true })
const $options: $optionsType = {
    router: {
        file,
    },
    comps: {
        bagHeaderItem: shallowRef(bagHeaderItem), // 头部icon组件覆盖
    },
    config: {
        webSite: {
            title: 'bag-admin',
            subhead: 'Bag',
        },
        httpNetwork: {
            whiteList: [],
        },
    },
}
createApp(App).use(install, $options).use(setupGlobComponents).mount('#app')
