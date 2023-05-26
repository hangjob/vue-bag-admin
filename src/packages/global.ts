import { string } from 'pm-utils'

const createRoutePath = (data) => {
    const obj = {
        id: string.randomId(),
        shows: false,
        httpViewPath: '',
        order: 0,
        iframePath: null,
        keepAlive: false,
        tabHidden: false,
        tabFix: false,
        httpFilePath: '',
        filePath: '/packages/views/crud/Edit.vue', // 路径
        path: '/curd/edit', // 路由
        nameKey: 'name', // 读取字段的标题
        isDynamic: true,// 动态
    }
    return Object.assign(obj, data)
}


export {
    createRoutePath,
}
