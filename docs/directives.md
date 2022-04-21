### 全局指令

### v-auth

用户信息`/api/user/userinfo`返回roles字段：

```ts
return {
    code: 1,
    message: '请求成功',
    data: {
        roles: ['admin', 'editor', 'test']
    },
}
```

```vue
<a-button type="primary" v-auth="['zbdl,jgr']">zbdl，jgr有权限</a-button>
<a-button type="primary" v-auth="['zj']">zj专家没有权限</a-button>
<a-button type="primary" v-auth="['jgr']">jgr监管人有权限</a-button>
```
