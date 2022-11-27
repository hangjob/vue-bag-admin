import { post } from '@/packages/http/request'
import { getApiInstanceUrl } from '@/packages/utils/api'


/**
 * 登录
 */
const apiLogin = (params?: object) => {
    return post(getApiInstanceUrl('/user/login'), params,
        {
            notifyError: true, relink: true,
        },
    )
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

/**
 * 获取网络信息
 */
const apiSiteIpInfo = () => {
    return post(getApiInstanceUrl('/user/siteIpInfo'))
}


export {
    apiLogin,
    apiLogout,
    apiUserUserinfo,
    apiSiteIpInfo,
}
