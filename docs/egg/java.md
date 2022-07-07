### 使用Java对接

需要完成如下接口

> 接口名称：`/user/userinfo`，`/user/login`,`/user/logout`，用户信息接口

>[查看具体模型数据](https://github.com/hangjob/vue-bag-admin/blob/master/egg/app/model/member.js)、[查看具体控制器](https://github.com/hangjob/vue-bag-admin/blob/master/egg/app/controller/user.js)

```ts
// /user/userinfo
const data = Mock.mock({
    username: '羊先生',
    rolesDetail: {
        type: 'admin',
        menus: []
    },
    userhead: 'https://avatars.githubusercontent.com/u/22078920?v=4',
})
return {
    code: 1,
    message: '请求成功',
    data:any,
}
```

### 基础接口
>接口名称，`/menu/all`，菜单接口

> [查看具体模型数据](https://github.com/hangjob/vue-bag-admin/blob/master/egg/app/model/menu.js) 、[查看具体控制器](https://github.com/hangjob/vue-bag-admin/blob/master/egg/app/controller/menu.js)
```javascript
return {
    code: 1,
    message: '请求成功',
    data:[],
}
```

返回数据格式如下：

```typescript
return {
    code: 1,
    message: '请求成功',
    data:any,
}
```

### 所有接口
>涉及到业务接口，所以你的系统不一定要去实现它

[具体接口](https://github.com/hangjob/vue-bag-admin/blob/master/egg/app/router.js)
