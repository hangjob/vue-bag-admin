import {createApp} from "vue"
import App from "./App.vue"
import install from "@/packages/install.ts"
import router from "@/app/admin/router"

createApp(App).use(install).use(router).mount("#app")
