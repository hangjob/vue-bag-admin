import { Component } from 'vue'
import store from '@/packages/store'
import { apiAppRouter } from '@/packages/service/app'
import router from '@/packages/router'

interface FileType {
    [key: string]: Component
}


// 获取本地对应的 路径
const localFile: Record<string, FileType> = import.meta.globEager('/src/packages/views/**/*.vue') // 框架 所有页面
function findComponent(filePath: string, file?: Array<any>) {
    if (filePath) {
        const merges = Object.assign(localFile, file)
        const item = Object.keys(merges).find(item => item.indexOf(filePath) > -1)
        return item ? merges[item].default : false
    } else {
        return null
    }
}


// 循环目录
function loopFileRouterStore(paths: Array<any>) {
    let components: Array<any> = []
    const loop = function(paths: Array<any>, file: Array<any>) {
        paths.forEach((item: any) => {
            let component = findComponent(item.filePath, file)
            if (component) {
                router.addRoute('admin', { path: item.path, component })
            }
            store.commit('app/addMenuList', item)
            if (item.children) {
                loop(item.children, file)
            }
        })
    }
    loop(paths, store.state.app.appRouter.file)
    router.addRoute({
        path: '/:catchAll(.*)*', // 不识别的path自动匹配404 这个一定要放在最后面加
        redirect: '/404',
    })
    return components
}

const setAsyncRouterComponents = async () => {
    const paths: Array<any> = await apiAppRouter()
    return loopFileRouterStore(paths)
}
export {
    setAsyncRouterComponents,
}
