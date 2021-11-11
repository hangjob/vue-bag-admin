import {post} from '@/packages/http/request'

// 添加菜单
const apiAddMenu = (params?: object, config?: object) => {
    return post('/addMenu', params, config);
}


// 获取菜单
const apiFindAll = (params?: object, config?: object) => {
    return post('/findAll', params, config);
}


export {
    apiAddMenu,
    apiFindAll
}