import {Component, App} from "vue";
import store from "@/packages/store";

interface FileType {
    [key: string]: Component
}

const locaViews: Record<string, FileType> = import.meta.globEager("/src/packages/views/**/*.vue") // 框架 所有页面
// 获取本地对应的 路径
function findViewModule(filePath: string, external = {}) {
    if (filePath) {
        const merges = Object.assign(locaViews, external)
        const item = Object.keys(merges).find(item => item.indexOf(filePath) > -1)
        return item ? merges[item].default : false
    } else {
        return false;
    }
}


// 递归目录
function recursiveViews(app: App, router: any, views: any) {
    const {external} = app.config.globalProperties.$plugin?.routerView || {};
    views.forEach((item: any) => {
        let component = findViewModule(item.filePath, external);
        if (component) {
            router.addRoute('admin', {path: item.path, component})
        }
        store.commit('app/addMenuList', item)
        if (item.children) {
            recursiveViews(app, router, item.children)
        }
    })
}

const setAddRoute = (app: App, router: any) => {
    const views: any = []; // 这里设置
    recursiveViews(app, router, views)
}
export {
    setAddRoute
}
