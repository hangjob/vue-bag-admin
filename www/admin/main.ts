import { Component, createApp, shallowRef } from 'vue'
import App from './App.vue'
import install, { $optionsType } from '@/packages/install'
import paths from '@www/admin/router'
import ThemeBar from '@www/admin/components/ThemeBar.vue'
import setupGlobComponents from '@www/admin/plugin/md-editor-v3'

const file: Record<string, Component> = import.meta.glob('/www/admin/views/**/*.vue', { eager: true })
const $options: $optionsType = {
    router: {
        file,
    },
    comps: {
        ThemeBar: shallowRef(ThemeBar),
    },
    config: {
        webSite: {
            title: '品茗信息',
            subhead: '品茗',
        },
        httpNetwork: {
            whiteList: [],
        },
    },
}
createApp(App).use(install, $options).use(setupGlobComponents).mount('#app')
