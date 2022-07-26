// @ts-ignore
import Mock from 'mockjs'
import './menuAll'
import '../common/userinfo'

const baseApis = ['/api/app/router', '/api/user/logout', '/api/user/login'] // 在使用时候，这些基础API需要配置

const apis = ['/api/member/all', '/api/branch/all', '/api/role/all', ...baseApis]

apis.forEach((item) => {
    Mock.mock(item, 'post', () => {
        return {
            code: 1,
            message: '请求成功',
            data: [],
        }
    })
})
