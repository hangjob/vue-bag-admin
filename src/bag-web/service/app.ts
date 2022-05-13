import { post } from '@/bag-web/http/request'


// 获取菜单
const webChannelAll = (params?: object) => {
    return post('/web/channel/all', params)
}

// 添加用户
const memberCreate = (params?: object) => {
    return post('/member/create', params, { notifyError: true })
}

// 登录
const userLogin = (params?: object) => {
    return post('/user/login', params)
}

// 获取网站配置
const webWebsiteFind = () => {
    return post('/web/website/find', { url: 'http://192.168.1.24:8290/' })
}

export {
    webChannelAll,
    memberCreate,
    userLogin,
    webWebsiteFind
}
