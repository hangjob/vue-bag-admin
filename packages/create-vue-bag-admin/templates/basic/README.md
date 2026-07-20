# **PROJECT_NAME**

这是一个通过 `create-vue-bag-admin` 生成的后台宿主项目。

默认依赖已经收敛成一个主包：

- `vue-bag-admin`：统一提供宿主层、请求层、UI 组件层和插件协议层

如果你后面要接官方业务插件，再额外安装对应的 `@bag/plugin-*` 包就够了。

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
- `src/plugins/workspace.ts`: 工作台与复用视图示例
- `src/plugins/content.ts`: 内容管理与详情页协议示例
- `src/plugins/system.ts`: 系统设置与插件依赖示例
- `src/views/*`: 示例页面

如果你准备接自己的业务模块，建议先挑一个最接近你业务的插件作为起点改掉。
