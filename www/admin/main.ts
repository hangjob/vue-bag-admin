import { Component, createApp, shallowRef } from 'vue'
import App from './App.vue'
import install, { $optionsType } from '@/packages/install'
import paths from '@www/admin/router'
import { setupSocket } from '@/packages/socket'
import ThemeBar from '@www/admin/components/ThemeBar.vue'

const file: Record<string, Component> = import.meta.globEager('/www/admin/views/**/*.vue')
const app = createApp(App)

const $options: $optionsType = {
    router: { file, paths, defaults: false },
    layout: {
        themeBar: shallowRef(ThemeBar),
    },
}
// setupSocket(app, { connection: 'ws://127.0.0.1:8001' })
app.use(install, $options).mount('#app')
