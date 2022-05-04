import { post } from '@/bag-web/http/request'


// 获取菜单
const webChannelAll = (params?: object) => {
    return post('/web/channel/all', params)
}

// 添加用户
const memberCreate = (params?: object) => {
    return post('/member/create', params)
}

// 登录
const userLogin = (params?: object) => {
    return post('/user/login', params)
}

export {
    webChannelAll,
    memberCreate,
    userLogin,
}
