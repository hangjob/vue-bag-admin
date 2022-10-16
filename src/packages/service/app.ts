import {post} from '@/packages/http/request'
import {getApiInstanceUrl} from "@/packages/utils/api";


/**
 * 获取路由
 * @param params
 */
const apiAppRouter = (params?: object) => {
    return post(getApiInstanceUrl('/menu/all'), params, {relink: true})
}

/**
 * 获取网络http异步组件
 */
const apiAppLibrary = () => {
    return post(getApiInstanceUrl('/app/library'))
}


/**
 * 通知
 */
const apiAppNotice = () => {
    return post(getApiInstanceUrl('/app/notice'))
}

export {
    apiAppRouter,
    apiAppLibrary,
    apiAppNotice,
}
