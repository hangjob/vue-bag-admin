import {Component} from 'vue'
import store from '@/packages/store'
import {apiAppRouter} from '@/packages/service/app'
import router from '@/packages/router'
import defaultRouter from '@/packages/config/defaultRouter'
import {apiUserUserinfo} from '@/packages/service/user'
import {routerSet} from '@/packages/config'

interface FileType {
    [key: string]: Component
}


/**
 * 查找本地文件,获取组件
 */
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


/**
 * 添加路由
 * @param paths
 */
function pathsFileRouterStore(paths: Array<any>) {
    const loopFile = function (paths: Array<any>) {
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].iframePath) {
                let component = findComponent('/iframe', store.state.app.appRouter.file) // iframe
                if (component) {
                    router.addRoute('admin', {path: '/iframe' + paths[i].path, component})
                }
            } else {
                let component = findComponent(paths[i].filePath, store.state.app.appRouter.file)
                if (component) {
                    router.addRoute('admin', {path: paths[i].path, component})
                }
            }
            store.commit('app/addMenuList', paths[i])
            if (paths[i].children) {
                loopFile(paths[i].children)
            }
        }
    }
    loopFile(paths)
    router.addRoute({
        path: '/:catchAll(.*)*', // 不识别的path自动匹配404 这个一定要放在最后面加
        redirect: '/404',
    })
}

const setAsyncRouterComponents = async () => {
    const paths: Array<any> = []
    if (store.state.app.appRouter.defaults) {
        defaultRouter.forEach((item) => {
            router.addRoute('admin', item)
        })
        try {
            paths.push(...await apiAppRouter())
        } catch (err) {
            console.log(err)
        }
    }
    pathsFileRouterStore(paths.concat(store.state.app.appRouter.paths))
}


const hasUserinfo = (to: any, from: any, next: any) => {
    const {resetPath, whiteList} = routerSet
    const userinfo = store.getters['user/userinfo']
    if (Object.keys(userinfo).length) {
        next()
    } else {
        if (whiteList.some((e: string) => to.path.indexOf(e) === 0)) { //过滤这些页面不需要调用用户信息接口
            next()
        } else {
            apiUserUserinfo().then(async (res: any) => {
                store.commit('user/updateUserinfo', res)
                await setAsyncRouterComponents()
                next({...to, replace: true})
            }).catch(() => {
                next(resetPath)
            })
        }
    }
}


export {
    hasUserinfo,
}
