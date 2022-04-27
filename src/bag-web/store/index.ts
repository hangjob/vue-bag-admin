import { App } from 'vue'

// https://blog.csdn.net/qq_28550263/article/details/120721160 参考文档
// https://pinia.vuejs.org/core-concepts/#using-the-store 官方文档
import { createPinia } from 'pinia'

const setupStore = (app: App) => {
    app.use(createPinia())
}


export {
    setupStore,
}
