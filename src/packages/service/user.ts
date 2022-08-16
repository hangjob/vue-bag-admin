import {post} from '@/packages/http/request'
import {getApiInstanceUrl} from "@/packages/utils/api";


/**
 * 登录
 */
const apiLogin = (params?: object) => {
    return post(getApiInstanceUrl('/user/login'), params, {notifyError: true, relink: true})
}

/**
 * 退出
 */
const apiLogout = () => {
    return post(getApiInstanceUrl('/user/logout'))
}


/**
 * 获取用户信息
 */
const apiUserUserinfo = () => {
    return post(getApiInstanceUrl('/user/userinfo'))
}


export {
    apiLogin,
    apiLogout,
    apiUserUserinfo,
}
