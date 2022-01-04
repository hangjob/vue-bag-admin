import {post} from '@/packages/http/request'


// 获取菜单
export const apiAll = (params?: object, config?: object) => {
    return post('/branch/all', params, config);
}


// 查询数据
export const apiFind = (params?: object, config?: object) => {
    return post('/branch/find ', params, config);
}


// 添加菜单
export const apiCreate = (params?: object, config?: object) => {
    return post('/branch/create', params, config);
}


// 编辑
export const apiUpdate = (params?: object, config?: object) => {
    return post('/branch/update', params, config);
}


// 删除菜单
export const apiDelete = (params?: object, config?: object) => {
    return post('/branch/delete', params, config);
}

// 删除菜单 多条
export const apiDeletes = (params?: object, config?: object) => {
    return post('/branch/deletes', params, config);
}
