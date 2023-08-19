import {RouteLocationNormalized} from "vue-router"
import appPinia from "@/packages/pinia/app.ts"
import {getObjectPath} from "@/packages/utils/utils.ts"
import {cloneDeep} from "lodash"

let first = true
function updateCurrentRouter(to){
    const appStore = appPinia()
    appStore.currentRouter = {...to}
}

function updatePaths(to){
    const appStore = appPinia()
    const paths = getObjectPath({arr:appStore.treeMenus,id:to.meta.id})
    appStore.paths = (paths && paths.reverse()) || []
}

function updateTbas(current){
    const appStore = appPinia()
    const {href,hash,name,path,query,meta} = current
    const tag = appStore.tabs.find((item:any)=>item.meta.id === meta.id)
    if(!tag){
        appStore.tabs.push(cloneDeep({href,hash,name,path,query,meta}))
    }
}


/**
 * 更新tab
 */
function updateTabFix(){
    const appStore = appPinia()
    if(first){
        appStore.allMenus.forEach((current:any)=>{
            if(current.tabFix){
                updateTbas({meta:current})
            }
        })
        first = false
    }
}


const afterEach = (to: RouteLocationNormalized)=>{
    updateCurrentRouter(to)
    updatePaths(to)
    updateTbas(to)
    updateTabFix()
}

export default afterEach
