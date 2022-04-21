
### 使用

```ts
import 'vue-bag-admin/mock' // 引入mock数据
```

[官方文档](http://mockjs.com/examples.html)

```ts
import Mock from 'mockjs'

Mock.mock('/api/user/userinfo', 'post', () => {
    const data = Mock.mock({
        id: '@id',
        token: Mock.Random.string(30),
        username: '羊先生',
        createTime: '@datetime(yy-MM-dd HH:mm:ss)',
        text: '@cparagraph(5)',
        roles: ['admin', 'editor', 'test'], // ['editor','test']
        type: 'admin',
        'contentType|0-3': 0,
        'serviceUnreadCount|0-10': 0,
        userhead: 'https://avatars.githubusercontent.com/u/22078920?v=4',
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


// 模拟数据延迟
Mock.setup({
    timeout: "500-800"
});

```
