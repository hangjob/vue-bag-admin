import {Component, App} from "vue";
import store from "@/packages/store";

interface FileType {
    [key: string]: Component
}

// 获取本地对应的 路径
function findViewModule(filePath: string, external = {}) {
    const locaViews: Record<string, FileType> = import.meta.globEager("/src/packages/views/**/*.vue")  // 框架 所有页面
    const merges = Object.assign(external, locaViews)
    const item = Object.keys(merges).find(item => item.indexOf(filePath) > -1)
    return item ? merges[item].default : false
}


const setAddRoute = (app: App, router: any) => {
    const {external, views} = app.config.globalProperties.$plugin.router;
    views.filter((item: any) => item.filePath).forEach((item: any) => {
        let component = findViewModule(item.filePath, external);
        if (component) {
            store.commit('app/addMenuList', item)
            router.addRoute('admin', {
                path: item.path,
                component
            })
        }
    })
}
export {
    setAddRoute
}