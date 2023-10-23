import Authority from "@/packages/components/auth/Authority.vue"
import DigitalClock from "@/packages/components/digitalClock/index.vue"
import type {App} from "vue"
const setupComponents = (app:App)=>{
    app.component("Authority",Authority)
    app.component("DigitalClock",DigitalClock)
}

export default setupComponents
