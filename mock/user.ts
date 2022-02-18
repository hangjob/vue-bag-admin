// @ts-ignore
import Mock from 'mockjs'
import { resData } from './baseCommon'
import userhead from '../src/packages/assets/image/yanghang.jpg'

Mock.mock('/api/user/userinfo', 'post', (options: any) => {
    let { body } = options
    let type = 'admin'
    let roles = ['admin', 'editor', 'test']
    if (body) {
        body = JSON.parse(body)
        if (body.type !== 'admin') {
            type = body.type
            roles = [body.type]
        }
    }
    const data = Mock.mock({
        id: '@id',
        token: Mock.Random.string(30),
        username: '羊先生',
        createTime: '@datetime(yy-MM-dd HH:mm:ss)',
        text: '@cparagraph(5)',
        roles: roles,
        type: type,
        'contentType|0-3': 0,
        'serviceUnreadCount|0-10': 0,
        userhead: userhead,
        expiredTime: 3600 * 12,
        headimgurl() {
            return Mock.Random.image(
                '40x40',
                Mock.Random.color(),
                '#FFF',
                'png',
            )
        },
    })
    const result: resData = {
        code: 1,
        message: '请求成功',
        data,
    }
    return result
})

Mock.mock('/api/app/notice', 'post', () => {
    const data = Mock.mock({
        'array|5': [
            {
                id: '@id',
                text: '@cword(10)',
                createTime: '@datetime(MM-dd HH:mm:ss)',
            },
        ],
    })
    const result: resData = {
        code: 1,
        message: '请求成功',
        data: data.array,
    }
    return result
})

Mock.mock('/api/user/login', 'post', () => {
    const result: resData = {
        code: 1,
        message: '登录成功',
        data: '',
    }
    return result
})


const apis = ['/api/member/all', '/api/branch/all', '/api/role/all', '/api/menu/all']

apis.forEach((item) => {
    Mock.mock(item, 'post', () => {
        const result: resData = {
            code: 1,
            message: '请求成功',
            data: [],
        }
        return result
    })
})


Mock.mock('/api/user/logout', 'post', () => {
    const result: resData = {
        code: 1,
        message: '退出成功',
        data: '',
    }
    return result
})

Mock.mock('/api/app/router', 'post', () => {
    const result: resData = {
        code: 1,
        message: '请求成功',
        data: [],
    }
    return result
})
// //数据延迟
// Mock.setup({
//     timeout: '10-100',
// })
