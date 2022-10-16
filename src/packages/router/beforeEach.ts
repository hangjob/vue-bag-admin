import { Component } from 'vue'
import store from '@/packages/store'
import { apiAppRouter } from '@/packages/service/app'
import router from '@/packages/router'
import { apiUserUserinfo } from '@/packages/service/user'
import { toTree } from '@/packages/utils/utils'

let namespace = 'admin'

interface FileType {
    [key: string]: Component
}

/**
 * 查找本地文件,获取组件
 */
const localFile: Record<string, FileType> = import.meta.globEager('/src/packages/views/**/*.vue') // 框架 所有页面
function findComponent(filePath: string) {
    if (filePath) {
        const { file } = store.state.app.appRouter
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
    const loopFileAddRouter = function(paths: Array<any>) {
        for (let i = 0; i < paths.length; i++) {
            const item = paths[i]
            let component = findComponent(item.filePath)
            if (component) {
                router.addRoute(namespace, { path: item.path, component })
            }
            if (item.children) {
                namespace = item.namespace ? item.namespace : namespace // 控制命名空间，做嵌套路由
                loopFileAddRouter(item.children)
            }
        }
    }
    store.commit('app/updateMenuList', toTree(paths)) // 设置菜单
    loopFileAddRouter(paths)
    router.addRoute({
        path: '/:catchAll(.*)*', // 不识别的path自动匹配404 这个一定要放在最后面加
        redirect: '/404',
    })
}


/**
 * 根据角色过滤路由
 * @param routes
 */
const filterRouter = (routes: Array<any>) => {
    const { rolesDetail } = store.getters['user/userinfo']
    const isSuperadmin = store.getters['user/isSuperadmin']
    if (isSuperadmin) {
        return routes // 超级管理不过滤路由
    }
    if (rolesDetail) {
        return routes.filter((item: any) => {
            return rolesDetail.menus.map(Number).indexOf(item.id) > -1
        })
    } else {
        return []
    }
}

/**
 * 获取异步路由，动态添加
 */
const setAsyncRouterComponents = async () => {
    const { paths } = store.state.app.appRouter // 本地路由
    const menuPaths: Array<any> = []
    menuPaths.push(...paths)
    try {
        const routes: any = await apiAppRouter()
        menuPaths.push(...filterRouter(routes))
    } catch (err) {
        console.log(err)
    }
    pathsFileRouterStore(menuPaths)
}


const hasUserinfo = (to: any, from: any, next: any) => {
    const { resetPath, whiteList } = store.state.app.httpNetwork
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
                next({ ...to, replace: true })
            }).catch(() => {
                next(resetPath)
            })
        }
    }
}


export {
    hasUserinfo,
}
