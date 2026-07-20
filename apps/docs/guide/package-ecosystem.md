# 包生态总览

如果你是从 npm 入口进来的，不用一开始就把整套仓库结构看完。先记住这件事：

- `vue-bag-admin` 负责宿主运行时
- `@bag/plugin-*` 负责具体业务能力
- `create-vue-bag-admin` 负责把起步工程搭出来

先这样记就够了。只有在你准备深入仓库内部实现时，才需要继续往下拆。

## 对外怎么理解

现在对外的默认口径是：

- `vue-bag-admin`：业务项目安装的主包
- `@bag/plugin-*`：按需安装的业务插件包
- `create-vue-bag-admin`：生成宿主项目的脚手架

使用方不需要先关心内部拆了多少层。接入时先装主包，再按业务需要装插件。

## 仓库内部怎么拆

仓库内部还是分层的，只是这些分层主要服务于实现和维护：

- `@bag/core`：协议层，定义插件、路由 meta、菜单、Schema、字典这些公共约定
- `@bag/request`：请求层，统一 HTTP 和 WebSocket 的接入方式
- `@bag/ui`：组件层，提供 `PmProTable`、`PmProForm`、`PmSchemaForm`、`PmDictTag`
- `@bag/host-vue`：宿主层，负责布局、权限、标签页、插件引导和 i18n 初始化
- `vue-bag-admin`：把前面几层收成业务项目更容易接入的主包
- `@bag/plugin-*`：业务插件层，把不同业务域拆成独立模块
- `create-vue-bag-admin`：脚手架入口，生成宿主项目的起步工程

如果你只是在用，不一定要把这些层都记牢。知道它们各自管什么就够了。

## 先记住这几个角色

想快速建立印象，可以先按这个版本理解：

- `core` 管协议
- `request` 管请求
- `ui` 提供通用积木
- `host-vue` 把宿主真正跑起来
- `vue-bag-admin` 把前面几层打包成默认入口
- `plugin-*` 往宿主里挂业务
- `create-vue-bag-admin` 帮你把项目先起出来

## 建议怎么读

第一次接触这套项目，可以按下面这个顺序看：

1. `vue-bag-admin` / `create-vue-bag-admin`：先看推荐入口，知道正常使用姿势是什么
2. [@bag/core](./package-core.md)：再看插件协议和 Schema 协议到底长什么样
3. [@bag/ui](./package-ui.md)：理解这些协议最后怎么落到组件上
4. [@bag/request](./package-request.md)：补上请求层的接入方式
5. `@bag/host-vue`：再回头看宿主怎样把插件、布局、权限串起来
6. [@bag/plugin-shop](./package-plugin-shop.md) / [@bag/plugin-sys-setting](./package-plugin-sys-setting.md)：最后看官方插件示例，会更容易代入

这个顺序就是先看“怎么用”，再看“内部为什么这么设计”。

## 这些包怎么串起来

从实际使用流程看，最常见的一条链路大概是这样：

1. 先用 `create-vue-bag-admin` 生成一个宿主项目
2. 生成后的项目默认安装 `vue-bag-admin`
3. 宿主项目通过 `vue-bag-admin` 初始化路由、布局、权限和插件系统
4. 业务插件通过 `@bag/core` 约定 `AdminPlugin`
5. 插件页面通过 `@bag/ui` 复用表单、表格和字典组件
6. 页面请求和实时消息通过 `@bag/request` 接入

压缩成一句话就是：脚手架起项目，主包起宿主，插件补业务，底层分包分别负责协议、UI 和请求。

## 已经补好的分包页

目前已经补齐的分包文档有这些：

- [@bag/core](./package-core.md)
- [@bag/request](./package-request.md)
- [@bag/ui](./package-ui.md)
- [@bag/plugin-shop](./package-plugin-shop.md)
- [@bag/plugin-sys-setting](./package-plugin-sys-setting.md)

如果你准备继续往下看，可以优先从 `core` 和 `ui` 开始。

如果你现在更关心维护者视角的实际操作，可以直接跳这两页：

- [本地联调](./local-debugging.md)
- [发包流程](./package-publishing.md)

## docs 和 README 怎么分工

这两类文档现在是互补关系，不是二选一：

- 包目录下的 `README.md`：更适合 npm 用户，重点放在安装、最小示例、公开能力和边界
- `apps/docs`：更适合顺着看，重点是概念串联、学习路径，以及这些包之间到底怎么配合

第一次上手，先看 `apps/docs` 更顺。已经知道自己要接哪个包了，再直接去对应包的 `README.md` 会更快。
