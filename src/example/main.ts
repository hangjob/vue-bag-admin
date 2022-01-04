import {Component, createApp} from 'vue'
import App from './App.vue'
import {apiAppRouter} from '@/packages/service/app'
import store from '@/example/store/index';
import install, {$optionsType} from '@/packages/install'
import XEUtils from 'xe-utils';

const app = createApp(App)
apiAppRouter().then((res: Array<any>) => {
    const locas: Record<string, Component> = import.meta.globEager("/src/example/views/**/*.vue")
    let views: any = []
    if (XEUtils.isArray(res)) {
        views = [...res]
    }
    const $options: $optionsType = {
        routerView: {views: views, external: locas},
        store: {
            module: store
        }
    }
    app.use(install, $options).mount('#app')
})

