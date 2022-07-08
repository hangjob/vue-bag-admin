// @ts-ignore
import Mock from 'mockjs'

Mock.mock('/api/user/userinfo', 'post', () => {
    const data = Mock.mock({
        username: '羊先生',
        rolesDetail: {
            type: 'admin',
        },
        userhead: 'https://avatars.githubusercontent.com/u/22078920?v=4',
    })
    return {
        code: 1,
        message: '请求成功',
        data,
    }
})

const baseApis = ['/api/app/router', '/api/user/logout', '/api/user/login'] // 在使用时候，这些基础API需要配置

const apis = ['/api/member/all', '/api/branch/all', '/api/role/all', '/api/menu/all', ...baseApis]

apis.forEach((item) => {
    Mock.mock(item, 'post', () => {
        return {
            code: 1,
            message: '请求成功',
            data: [],
        }
    })
})
