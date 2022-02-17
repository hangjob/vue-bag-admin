import { Component, createApp } from 'vue'
import App from './App.vue'
import install, { $optionsType } from '@/packages/install'

const file: Record<string, Component> = import.meta.globEager('/src/admin/views/**/*.vue')
const app = createApp(App)

const $options: $optionsType = {
    router: { file },
}
app.use(install, $options).mount('#app')
