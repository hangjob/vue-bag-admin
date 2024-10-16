import install from "@/packages/install.js"
import App from "./App.vue"
import '@/blog/style/index.less'

const {app, framework, plugins, helpers} = install(App)

app.mount("#app")

helpers.automaticUpdate(() => {
    console.log(111)
}, 3000)
