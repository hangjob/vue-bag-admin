# 本地联调

本地联调主要就两种情况：

- 在当前 Monorepo 里，怎么联调 `apps/admin` 和 `packages/*`
- 在仓库外新建一个使用方项目后，怎么通过 `link:` 联调主包和插件包

如果你最近主要在改 `vue-bag-admin`、`@bag/plugin-shop`、`@bag/plugin-sys-setting`，直接看这页就行。

如果你是从“快速上手”跳过来的，这页主要讲两件事：参与仓库开发，或者在外部使用方项目里联调本地包。

## 两种联调方式

常用的联调路线有两条：

1. 仓库内联调：直接跑 `apps/admin`
2. 外部项目联调：在一个独立使用方项目里通过 `link:` 安装本地包

前者适合改框架内部，后者适合模拟真实使用方。

## 方式一：仓库内联调

### 1. 安装根依赖

```bash
pnpm install
```

### 2. 启动宿主示例

```bash
pnpm --filter admin dev
```

`apps/admin` 直接吃 Monorepo 里的源码，适合调这些东西：

- 宿主布局
- 权限与标签页
- 插件协议
- `@bag/ui` 组件
- `@bag/request` 请求能力

仓库内联调要保证运行时入口同源。`apps/admin` 会把 `vue-bag-admin`、`@bag/core`、`@bag/host-vue`、`@bag/request`、`@bag/ui` 和官方插件都 alias 到当前仓库源码。这样宿主启动时 `bootstrapPlugins()` 注册插件，插件管理页再调用 `listRuntimePlugins()` 时，读到的是同一份 runtime registry。

如果只 alias 了 `@bag/core` / `@bag/host-vue`，但插件页面从另一个 `vue-bag-admin` 包实例导入 API，就会出现“菜单已经有插件页面，但插件管理页识别到 0 个插件”的情况。

### 3. 后端联调（可选）

如果你还要把仓库里的 Strapi 一起跑起来：

```bash
cd apps/strapi
pnpm dev
```

这条路线的特点是改完就能看，不用先打包再喂给外部项目。

## 方式二：外部使用方项目联调

如果你想看真实使用方会遇到什么，最好单独建个测试项目，再用 `link:` 挂本地包。

## 典型目录结构

例如：

```text
D:\wwwsite\pm-web-admin-next
D:\web_test_loca\loca_test
```

其中：

- `pm-web-admin-next` 是框架仓库
- `loca_test` 是外部使用方项目

## 使用方装哪些包

最小联调组合是：

- `vue-bag-admin`
- `@bag/plugin-shop`
- `@bag/plugin-sys-setting`

也就是说，默认就是“一个主包 + 按需插件包”，不用把底层拆包都扔给使用方。

## 使用方 package.json 示例

```json
{
  "dependencies": {
    "vue-bag-admin": "link:../../wwwsite/pm-web-admin-next/packages/vue-bag-admin",
    "@bag/plugin-shop": "link:../../wwwsite/pm-web-admin-next/packages/plugin-shop",
    "@bag/plugin-sys-setting": "link:../../wwwsite/pm-web-admin-next/packages/plugin-sys-setting"
  }
}
```

## 联调时先记住一件事

外部使用方吃的是包目录里的构建产物，不是你仓库里的实时源码。

所以顺序别弄反：

1. 先在框架仓库里构建包
2. 再去使用方项目安装依赖
3. 再启动使用方项目

## 执行顺序

### 第一步：在框架仓库里构建

```bash
cd D:\wwwsite\pm-web-admin-next

pnpm --filter vue-bag-admin build
pnpm --filter @bag/plugin-shop build
pnpm --filter @bag/plugin-sys-setting build
```

### 第二步：在使用方项目里安装

```bash
cd D:\web_test_loca\loca_test
pnpm install
```

### 第三步：启动使用方项目

```bash
pnpm dev
```

## 什么时候需要重新 build

只要你改了这些目录里的内容，基本都要重新构建一次：

- `packages/core`
- `packages/request`
- `packages/ui`
- `packages/host-vue`
- `packages/vue-bag-admin`
- `packages/plugin-shop`
- `packages/plugin-sys-setting`

尤其是宿主布局、导出入口、插件路由、样式和 i18n 这几块，外部项目一般都得重新吃一遍新的 `dist`。

## 样式联调要注意什么

外部项目联调里，很多样式问题不是 JS 本身导致的，而是扫描范围和引入顺序出了问题。

先检查这两件事：

1. Tailwind `content` 是否扫描到了链接包的 `dist`
2. 样式引入顺序是否是“先库样式，再项目本地样式”

常见写法：

```ts
import 'vue-bag-admin/style.css'
import './style.css'
```

顺序反了，或者扫描不到链接包里的类名，常见现象就是图标大小不对、响应式类失效，布局和按钮样式跟着乱。

## 常见问题

### 1. 我改了源码，使用方没变化

先确认你改的是不是包源码，然后重新执行一遍：

```bash
pnpm --filter vue-bag-admin build
```

如果还涉及插件，再把插件也重构建一遍。

### 2. 使用方启动时报依赖解析错误

先检查：

- `link:` 路径是否写对
- 对应包是否已经生成 `dist`
- 使用方是否重新执行过 `pnpm install`

### 3. 使用方页面样式丢失

优先排查：

- Tailwind 扫描范围
- `vue-bag-admin/style.css` 是否已引入
- 本地样式是否覆盖顺序正确

### 4. 使用方控制台出现 i18n 缺词条 warning

先看路由或菜单标题是不是把中文直接当 key 丢进宿主了。

如果你传的是 `shop.order.list` 这种 key，但文案没补齐，宿主现在会先回退原值，不会一直刷 warning；不过更稳的做法还是把插件自己的词条补进语言包。

## 什么时候选哪种联调方式

- 你在改框架内部实现：优先用仓库内联调
- 你在验证 npm 使用方接入姿势：优先用外部项目联调
- 你在排查软连接、样式、peerDependencies 问题：一定要用外部项目联调

这两种方式不冲突。平时可以先在仓库里改，再去外部项目做一遍真实接入验证。
