import { Component, App } from 'vue'
import store from '@/packages/store'

interface FileType {
    [key: string]: Component
}

const localFile: Record<string, FileType> = import.meta.globEager('/src/packages/views/**/*.vue') // 框架 所有页面
// 获取本地对应的 路径
function findViewModule(filePath: string, file: []) {
    if (filePath) {
        const merges = Object.assign(localFile, file)
        const item = Object.keys(merges).find(item => item.indexOf(filePath) > -1)
        return item ? merges[item].default : false
    } else {
        return false
    }
}


// 递归目录
function recursiveViews(app: App, router: any, paths: any) {
    const { file = [] } = app.config.globalProperties.$plugin?.router || {}
    paths.forEach((item: any) => {
        let component = findViewModule(item.filePath, file)
        if (component) {
            router.addRoute('admin', { path: item.path, component })
        }
        store.commit('app/addMenuList', item)
        if (item.children) {
            recursiveViews(app, router, item.children)
        }
    })
}

const setRoute = (app: App, router: any) => {
    const { paths = [] } = app.config.globalProperties.$plugin?.router || {}
    recursiveViews(app, router, paths)
}
export {
    setRoute,
}
