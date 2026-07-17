# **PROJECT_NAME**

这是一个通过 `create-bag-admin` 生成的后台宿主项目。

## 启动

```bash
pnpm install
pnpm dev
```

## 默认登录账号

- 用户名：`admin`
- 密码：`123456`

## 当前结构

- `src/routes.ts`: 宿主基础路由
- `src/plugins/demo.ts`: 本地 demo 插件
- `src/views/*`: 示例页面

如果你准备接自己的业务模块，优先从 `src/plugins/demo.ts` 的结构开始改。
