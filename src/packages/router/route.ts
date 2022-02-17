import { Component, App } from 'vue'
import store from '@/packages/store'
import { apiAppRouter } from '@/packages/service/app'
import { routerSet } from '@/packages/config'

interface FileType {
    [key: string]: Component
}

const localFile: Record<string, FileType> = import.meta.globEager('/src/packages/views/**/*.vue') // 框架 所有页面
// 获取本地对应的 路径
function findViewModule(filePath: string, file?: Array<any>) {
    if (filePath) {
        const merges = Object.assign(localFile, file)
        const item = Object.keys(merges).find(item => item.indexOf(filePath) > -1)
        return item ? merges[item].default : false
    } else {
        return null
    }
}


// 循环目录
function LoopFileStore(router: any, paths: any, file?: Array<any>) {
    paths.forEach((item: any) => {
        let component = findViewModule(item.filePath, file)
        if (component) {
            router.addRoute('admin', { path: item.path, component })
        }
        store.commit('app/addMenuList', item)
        if (item.children) {
            LoopFileStore(router, item.children, file)
        }
    })
}

const setAppRouter = (to: any, router: any, file?: Array<any>) => {
    return new Promise((resolve, reject) => {
        if (routerSet.ignore.indexOf(to.path) === -1) {
            apiAppRouter().then((paths: Array<any>) => {
                LoopFileStore(router, paths, file)
                resolve(router)
            }).catch(() => {
                reject()
            })
        } else {
            resolve(router)
        }
    })
}
export {
    setAppRouter,
}
