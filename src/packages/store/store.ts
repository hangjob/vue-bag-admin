import {App} from "vue";

const setStore = (app: App, store: any) => {
    let {module = {}, namespace = 'web'} = app.config.globalProperties.$plugin?.store || {};
    Object.keys(module).forEach((item) => {
        store.registerModule(namespace, module[item]);
    })
}


export {
    setStore
}
