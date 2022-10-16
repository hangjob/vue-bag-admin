import {App} from 'vue'

const setStore = (app: App, store: any) => {
    let {module = {}} = app.config.globalProperties?.configAppStore || {};
    Object.keys(module).forEach((item) => {
        store.registerModule(item, module[item])
    })
}


export {
    setStore,
}
