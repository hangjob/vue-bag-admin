import {createApp} from 'vue'
import App from './App.vue'
import install, {$pluginType} from '@/packages/install'
import {apiFindAll} from '@/packages/service/app'


const app = createApp(App)
apiFindAll().then((res: any) => {
    const $plugin: $pluginType = {routers: [...res]}
    install(app, $plugin).then(() => {

    })
})

