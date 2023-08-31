import Authority from "@/packages/components/auth/Authority.vue"
import type {App} from "vue"
const setupComponents = (app:App)=>{
    app.component("Authority",Authority)
}

export default setupComponents
