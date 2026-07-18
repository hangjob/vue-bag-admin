# 包生态总览

如果你是从 npm 角度进来的，先不用一下子把整套架构全背下来。把它看成 6 层能力，基本就够用了：

- `@bag/core`：协议层，定义插件、路由 meta、菜单、Schema、字典协议
- `@bag/request`：请求层，统一 HTTP / WebSocket 接入方式
- `@bag/ui`：组件层，提供 `PmProTable`、`PmProForm`、`PmSchemaForm`、`PmDictTag`
- `@bag/host-vue`：宿主层，负责布局、权限、标签页、插件引导和 i18n 初始化
- `@bag/plugin-*`：业务插件层，把具体业务域拆成独立模块
- `create-vue-bag-admin`：脚手架入口，用来快速生成宿主项目

## 先记住这几个角色

先用最省脑子的方式理解：

- `core` 定协议
- `request` 管请求
- `ui` 提供积木
- `host-vue` 把宿主跑起来
- `plugin-*` 往宿主里装业务
- `vue-bag-admin` 负责生成起步工程

## 建议怎么读

第一次接触这套项目，按这个顺序看会比较顺：

1. [@bag/core](./package-core.md)：先理解插件协议和 Schema 协议
2. [@bag/ui](./package-ui.md)：再看这些协议如何被渲染成组件
3. [@bag/request](./package-request.md)：补上请求层接入方式
4. `@bag/host-vue`：理解宿主如何把插件真正挂载进应用
5. [@bag/plugin-shop](./package-plugin-shop.md) / [@bag/plugin-sys-setting](./package-plugin-sys-setting.md)：看官方插件示例怎么写

## 这些包怎么串起来

最常见的一条链路大概是这样：

1. 你先用 `vue-bag-admin` 生成一个宿主项目
2. 宿主项目通过 `@bag/host-vue` 初始化路由、布局、权限和插件系统
3. 业务插件通过 `@bag/core` 定义 `AdminPlugin`
4. 插件页面里通过 `@bag/ui` 复用表单、表格和字典组件
5. 页面请求和实时消息通过 `@bag/request` 接入

## 现在已经补好的分包页

这次已经补齐的分包页有这些：

- [@bag/core](./package-core.md)
- [@bag/request](./package-request.md)
- [@bag/ui](./package-ui.md)
- [@bag/plugin-shop](./package-plugin-shop.md)
- [@bag/plugin-sys-setting](./package-plugin-sys-setting.md)

## 什么时候看 docs，什么时候看 README

这两类文档现在是互补关系：

- 包目录下的 `README.md`：更适合 npm 用户，重点是安装、最小示例、公开能力、边界
- `apps/docs`：更适合顺着读，重点是概念串联、学习路径和包之间的关系

如果你是第一次上手，先看 `apps/docs` 会轻松一点；如果你已经确定要接某个包，直接回那个包的 README 会更快。
