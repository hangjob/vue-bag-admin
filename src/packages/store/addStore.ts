import {App} from "vue";

const setAddStore = (app: App, store: any) => {
    let {module = {}, namespace = 'web'} = app.config.globalProperties.$plugin?.store || {};
    Object.keys(module).forEach((item) => {
        store.registerModule(namespace, module[item]);
    })
}


export {
    setAddStore
}