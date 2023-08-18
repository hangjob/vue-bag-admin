import {RouteLocationNormalized} from "vue-router"
import appPinia from "@/packages/pinia/app.ts"
import {getObjectPath} from "@/packages/utils/utils.ts"
function updateCurrentRouter(to){
    const appStore = appPinia()
    appStore.currentRouter = {...to}
}

function updatePaths(to){
    const appStore = appPinia()
    const paths = getObjectPath({arr:appStore.treeMenus,id:to.meta.id})
    appStore.paths = (paths && paths.reverse()) || []
}
const afterEach = (to: RouteLocationNormalized, from: RouteLocationNormalized)=>{
    updateCurrentRouter(to)
    updatePaths(to)
}

export default afterEach
