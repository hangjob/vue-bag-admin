import {Component, createApp} from 'vue'
import App from './App.vue'
import {apiAppRouter} from '@/packages/service/app'
import store from '@/example/store/index';
import vueViteAdminTs, {$optionsType} from '@/packages/install'

const app = createApp(App)
apiAppRouter().then((res: any) => {
    const locas: Record<string, Component> = import.meta.globEager("/src/example/views/**/*.vue")
    const $options: $optionsType = {
        routerView: {views: [...res], external: locas},
        store: {
            module: store
        }
    }
   console.log(res)
    app.use(vueViteAdminTs, $options)
    app.mount('#app');
})

