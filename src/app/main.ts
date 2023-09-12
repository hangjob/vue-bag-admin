import {createApp} from "vue"
import App from "./App.vue"
import "@/app/web/style/index.less"
import "@/packages/style/reset.less"
import setupIcons from "@/packages/config/icon.ts"

createApp(App).use(setupIcons).mount("#app")
