import {post} from '@/bag-web/http/request'


// 获取菜单
const webChannelAll = (params?: object) => {
    return post('/web/channel/all', params)
}

// 添加用户
const memberCreate = (params?: object) => {
    return post('/member/create', params, {notifyError: true})
}

// 登录
const userLogin = (params?: object) => {
    return post('/user/login', params, {notifyError: true})
}

// 获取用户信息
const userUserinfo = (params?: object) => {
    return post('/user/userinfo', params)
}

// 退出
const userLogout = (params?: object) => {
    return post('/user/logout', params)
}

// 获取网站配置
const webWebsiteFind = () => {
    return post('/web/website/find', {url: 'http://192.168.1.24:8290/'})
}

// 文章详情
const webArticleFind = (params?: object) => {
    return post('/web/article/find', params)
}

// 点赞
const webLikeCreate = (params?: object) => {
    return post('/web/like/create', params, {notifyError: true})
}

// 获取关键词
const webAntistopAll = () => {
    return post('/web/antistop/all')
}

// 获取banner图
const webBannerAll = () => {
    return post('/web/banner/all')
}


// 获取文章
const webArticleAll = () => {
    return post('/web/article/all')
}

// 获取文章-分页
const webArticlePage = (params?: object) => {
    return post('/web/article/page', params)
}

// 获取文章-分页
const webDownloadAll = (params?: object) => {
    return post('/web/download/all', params)
}

const webDownloadPage = (params?: object) => {
    return post('/web/download/page', params)
}

export {
    webChannelAll,
    memberCreate,
    userLogin,
    webWebsiteFind,
    userUserinfo,
    userLogout,
    webArticleFind,
    webLikeCreate,
    webAntistopAll,
    webBannerAll,
    webArticleAll,
    webArticlePage,
    webDownloadAll,
    webDownloadPage
}
