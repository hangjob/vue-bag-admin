# 项目介绍

Vue-Bag-Admin 是一套面向 Vue 3 中后台项目的插件化开发框架。它把后台应用拆成稳定的宿主和可独立维护的业务插件，让项目可以先快速启动，再随着业务增长逐步拆分。

如果你第一次接触这个项目，先记住一句话：

> 宿主负责把应用跑起来，插件负责把业务装进去。

## 它解决什么问题

普通后台项目通常从一个 `src/views` 开始。页面少时很直接，业务增加后容易遇到这些问题：

- 路由、菜单和权限散落在不同文件中，新增模块要改很多地方。
- 商品、订单、系统设置等业务相互引用，很难独立复用。
- 多个后台项目需要相同能力时，只能复制代码。
- 公共布局、请求和组件不断被业务代码侵入，升级成本越来越高。

Vue-Bag-Admin 通过宿主与插件分层，把这些职责重新归位：

| 层级     | 负责什么                                                |
| -------- | ------------------------------------------------------- |
| 宿主     | 应用初始化、布局、路由守卫、登录态、菜单容器和插件装载  |
| 插件     | 业务页面、路由、菜单、多语言和插件初始化                |
| 协议     | 统一插件、路由 Meta、菜单、权限、表单 Schema 等数据结构 |
| 基础能力 | HTTP、Fetch、WebSocket、表格、表单和字典组件            |

## 两种使用方式

### 创建自己的后台项目

这是大多数使用者应该选择的方式。通过脚手架创建一个独立项目：

```bash
pnpm dlx create-vue-bag-admin my-admin
```

生成后的项目只依赖统一入口包 `vue-bag-admin`，不需要复制整个 Monorepo。业务可以先写成本地插件，需要跨项目复用时再发布成独立 npm 包。

### 开发框架仓库

如果你要修改框架、官方插件或参考后端，可以直接开发当前 Monorepo：

```text
apps/admin       示例宿主
apps/docs        文档站
apps/strapi      Strapi 参考后端
packages/*       框架包、脚手架和官方插件
```

这条路线面向框架维护者，不是创建业务项目的前置条件。

## 核心运行模型

应用启动时主要发生四件事：

1. 宿主创建 Vue、Pinia、i18n 和 Router 实例。
2. 宿主注入认证和请求配置。
3. `bootstrapPlugins()` 收集已启用插件，注册路由、菜单和语言包。
4. `HostApp` 根据当前路由渲染布局、导航和业务页面。

插件不是一个特殊的 Vue 应用。它本质上是一个符合 `AdminPlugin` 协议的对象：

```ts
import type { AdminPlugin } from 'vue-bag-admin'

const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  routes: [],
  menus: []
}

export default reportPlugin
```

因此，本地业务模块和发布到 npm 的插件使用同一套接入方式。

## 包的职责

业务项目通常只需要直接安装 `vue-bag-admin`。它统一导出了下面几层公开能力：

| 包                     | 定位                                             |
| ---------------------- | ------------------------------------------------ |
| `@bag/core`            | 插件、路由、菜单、权限、字典和表单 Schema 协议   |
| `@bag/request`         | HTTP、Fetch、WebSocket 和请求状态控制            |
| `@bag/ui`              | `PmProTable`、`PmProForm`、`PmSchemaForm` 等组件 |
| `@bag/host-vue`        | 宿主布局、路由守卫、权限和插件引导               |
| `vue-bag-admin`        | 面向业务项目的统一入口                           |
| `create-vue-bag-admin` | 创建独立宿主项目的脚手架                         |
| `@bag/plugin-*`        | 可选的独立业务插件                               |

除非你在维护底层分包，否则业务代码建议统一从 `vue-bag-admin` 导入，避免项目中出现多套运行时入口。

## 技术栈与边界

前端运行时基于 Vue 3.5、Vite 6、TypeScript、Vue Router 4、Pinia、Vue I18n、Naive UI 和 Tailwind CSS。

仓库同时提供 Strapi 5 与 MySQL 参考后端，但前端并不绑定 Strapi。只要认证接口能够返回 token、用户角色和权限点，就可以接入 Java、Go、PHP 或其他后端。

Vue-Bag-Admin 更适合：

- 有多个业务域、需要长期演进的中后台。
- 希望在多个后台项目之间复用业务模块。
- 想统一路由、菜单、权限和页面搭建方式的团队。

如果项目只有少量固定页面，并且不会复用或扩展，直接使用 Vue Router 和组件库可能更简单。

## 推荐阅读顺序

第一次使用时，按这条链路阅读即可：

1. [快速上手](./getting-started.md)
2. [创建项目](./create-project.md)
3. [初始化宿主](./host/bootstrap.md)
4. [路由与菜单](./host/routing-and-menu.md)
5. [登录与权限](./host/auth-and-permissions.md)
6. [请求与组件](./request-and-components.md)

完成主线后，可以按目标继续阅读：

- 安装现有能力：[官方插件](./official-plugins/index.md)
- 开发业务扩展：[插件开发](./plugins/create-plugin.md)
