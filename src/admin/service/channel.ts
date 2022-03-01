import { post } from '@/packages/http/request'

const prefix = '/web/channel'

// 查询所有
export const apiAll = (params?: object, config?: object) => {
    return post(`${prefix}/all`, params, config)
}


// 单个查询
export const apiFind = (params?: object, config?: object) => {
    return post(`${prefix}/find`, params, config)
}


// 添加
export const apiCreate = (params?: object, config?: object) => {
    return post(`${prefix}/create`, params, config)
}


// 编辑
export const apiUpdate = (params?: object, config?: object) => {
    return post(`${prefix}/update`, params, config)
}


// 删除
export const apiDelete = (params?: object, config?: object) => {
    return post(`${prefix}/delete`, params, config)
}

// 删除 多条
export const apiDeletes = (params?: object, config?: object) => {
    return post(`${prefix}/deletes`, params, config)
}
