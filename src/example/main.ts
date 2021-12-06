import {Component, createApp} from 'vue'
import App from './App.vue'
import install, {$pluginType} from '@/packages/install'
import {apiAppRouter} from '@/packages/service/app'
import store from '@/example/store/index';

const app = createApp(App)
apiAppRouter().then((res: any) => {

    const locas: Record<string, Component> = import.meta.globEager("/src/example/views/**/*.vue")
    const $plugin: $pluginType = {
        router: {views: [...res], external: locas},
        store: {
            module: store
        }
    }
    install(app, $plugin).then(() => {

    })
})

