import {post} from '@/packages/http/request'


// 获取路由
const apiAppRouter = (params?: object, config?: object) => {
    return post('/appRouter', params, config);
}

// 添加菜单
const apiAddMenu = (params?: object, config?: object) => {
    return post('/addMenu', params, config);
}


// 获取菜单
const apiFindAll = (params?: object, config?: object) => {
    return post('/findAll', params, config);
}

// 删除菜单
const apiDeleteMenu = (params?: object, config?: object) => {
    return post('/deleteMenu', params, config);
}

// 删除菜单 多条
const apiDeleteMenus = (params?: object, config?: object) => {
    return post('/deleteMenus', params, config);
}

// 编辑
const apiEditMenu = (params?: object, config?: object) => {
    return post('/editMenu', params, config);
}


// 查询数据
const apiFindOne = (params?: object, config?: object) => {
    return post('/findOne ', params, config);
}


// 获取网络http异步组件
const apiAppComponents = () => {
    return post('/appComponents');
}

export {
    apiAddMenu,
    apiFindAll,
    apiDeleteMenu,
    apiDeleteMenus,
    apiEditMenu,
    apiFindOne,
    apiAppRouter,
    apiAppComponents
}
