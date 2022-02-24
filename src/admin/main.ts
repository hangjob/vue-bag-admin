import { Component, createApp } from 'vue'
import App from './App.vue'
import install, { $optionsType } from '@/packages/install'
import paths from '@/admin/router/index'

const file: Record<string, Component> = import.meta.globEager('/src/admin/views/**/*.vue')
const app = createApp(App)

const $options: $optionsType = {
    router: { file, paths, defaults: false },
}
app.use(install, $options).mount('#app')
