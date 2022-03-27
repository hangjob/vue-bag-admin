import {Component} from 'vue'
import store from '@/packages/store'
import {apiAppRouter} from '@/packages/service/app'
import router from '@/packages/router'
import defaultRouter from '@/packages/router/defaultRouter'

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
function pathsFileRouterStore(paths: Array<any>) {
    let components: Array<any> = []
    const loopFile = function (paths: Array<any>, file: Array<any>) {
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].iframePath) {
                let component = findComponent('/iframe', file)
                if (component) {
                    router.addRoute('admin', {path: '/iframe' + paths[i].path, component})
                }
            } else {
                let component = findComponent(paths[i].filePath, file)
                if (component) {
                    router.addRoute('admin', {path: paths[i].path, component})
                }
            }
            store.commit('app/addMenuList', paths[i])
            if (paths[i].children) {
                loopFile(paths[i].children, file)
            }
        }
    }
    loopFile(paths, store.state.app.appRouter.file)
    return components
}

const setAsyncRouterComponents = async () => {
    const paths: Array<any> = []
    if (store.state.app.appRouter.defaults) {
        defaultRouter.forEach((item) => {
            router.addRoute('admin', {...item})
        })
        paths.push(...await apiAppRouter())
    }
    pathsFileRouterStore(paths.concat(store.state.app.appRouter.paths))
    router.addRoute({
        path: '/:catchAll(.*)*', // 不识别的path自动匹配404 这个一定要放在最后面加
        redirect: '/404',
    })
}
export {
    setAsyncRouterComponents,
}
