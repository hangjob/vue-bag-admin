import install from "@/packages/install.js"
import App from "./App.vue"
import '@/blog/style/index.less'
import "animate.css";
import WOW from "wow.js"
const {app, framework, plugins, helpers} = install(App)

app.mount("#app")
app.runWithContext(()=>{
    new WOW().init()
})
