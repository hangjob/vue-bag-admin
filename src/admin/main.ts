import { Component, createApp } from 'vue'
import App from './App.vue'
import install, { $optionsType } from '@/packages/install'
import { addUniqueId } from '@/packages/utils/lodash'
import { defaultPrjMenu } from '@/packages/config/defaultMenu'

const file: Record<string, Component> = import.meta.globEager('/src/admin/views/**/*.vue')
const app = createApp(App)
const paths = addUniqueId([
    {
        name: '首页',
        path: '/home',
        icon: '',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/admin/views/home/Index.vue',
    },
    {
        name: 'CMS管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '内容管理',
                path: '/archives',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/archives/Index.vue',
            },
        ],
    },
], '_local')
const $options: $optionsType = {
    router: { file, paths, defaults: false },
}
app.use(install, $options).mount('#app')
