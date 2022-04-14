import { post } from '@/packages/http/request'

const serviceBase = (prefix: string) => {
    return {
        // 查询所有
        apiAll: (params?: object, config?: object) => {
            return post(`${prefix}/all`, params, config)
        },
        // 单个查询
        apiFind: (params?: object, config?: object) => {
            return post(`${prefix}/find`, params, config)
        },
        // 添加
        apiCreate: (params?: object, config?: object) => {
            return post(`${prefix}/create`, params, config)
        },
        // 编辑
        apiUpdate: (params?: object, config?: object) => {
            return post(`${prefix}/update`, params, config)
        },
        // 删除
        apiDelete: (params?: object, config?: object) => {
            return post(`${prefix}/delete`, params, config)
        },
        // 删除 多条
        apiDeletes: (params?: object, config?: object) => {
            return post(`${prefix}/deletes`, params, config)
        },
    }
}

export default serviceBase


