# **PROJECT_NAME**

这是一个通过 `create-bag-admin --template with-demo-plugins` 生成的后台宿主项目。

## 启动

```bash
pnpm install
pnpm dev
```

## 默认登录账号

- 用户名：`admin`
- 密码：`123456`

## 这个模板和 basic 的区别

- 不只给一个 demo 页面，而是给三组示例插件
- 演示多级菜单、插件依赖、详情页高亮和缓存协议
- 更适合拿来理解整套插件化后台是怎么拼起来的

## 当前结构

- `src/routes.ts`: 宿主基础路由
- `src/plugins/workspace.ts`: 工作台与复用视图示例
- `src/plugins/content.ts`: 内容管理与详情页协议示例
- `src/plugins/system.ts`: 系统设置与插件依赖示例
- `src/views/*`: 示例页面

如果你准备接自己的业务模块，建议先挑一个最接近你业务的插件作为起点改掉。
