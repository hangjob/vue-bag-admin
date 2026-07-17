# 快速上手

现在这套项目有两种使用姿势：

- 你想直接起一个自己的后台项目，用 npm 包和脚手架开始。
- 你想参与这个仓库本身的开发，在 Monorepo 里联调 `apps/admin`、`packages/*` 和 `apps/strapi`。

这两条路径都保留了，但入口不一样。先选对路线，后面的步骤会轻很多。

## 先准备环境

- **Node.js**: `v24` 或更高版本
- **pnpm**: `v9` 或更高版本
- **MySQL**: `8.0` 或更高版本

MySQL 只在你需要体验仓库内置的 `Strapi` 后端时才是必需项。如果你只是通过 npm 起一个新的宿主项目，可以先不接这套后端。

## 路线一：从 npm 开始

如果你的目标是新建一个自己的后台宿主项目，推荐直接从脚手架入口走：

```bash
npx create-bag-admin my-admin
cd my-admin
pnpm install
pnpm dev
```

当前脚手架提供两种模板：

- `basic`：最小宿主模板，只带一个本地 demo 插件，适合直接开工
- `with-demo-plugins`：教学型模板，预装多插件示例，适合先看一遍插件协作方式

如果你想显式指定模板，可以这样写：

```bash
npx create-bag-admin my-admin --template with-demo-plugins
```

生成后的项目默认会接入这些包：

- `@bag/core`：插件协议与 Schema 协议
- `@bag/request`：请求能力
- `@bag/ui`：Schema 驱动组件
- `@bag/host-vue`：宿主层，负责布局、权限、插件引导

这条路线更适合真正的业务接入。你不需要先理解整个 Monorepo，就能把宿主跑起来。

## 路线二：参与仓库开发

如果你想在当前仓库里联调框架、宿主示例和插件包，按下面的方式启动。

### 1. 获取代码

```bash
git clone https://github.com/hangjob/vue-bag-admin.git
cd vue-bag-admin
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动前端宿主示例

`apps/admin` 现在的定位是示例宿主应用。它会直接消费 `packages/*` 里的源码，适合做本地联调。

```bash
cd apps/admin
cp .env.example .env

# 回到根目录执行也可以
pnpm --filter admin dev
```

浏览器打开终端输出的地址，通常是 `http://localhost:5173`。

### 4. 启动仓库内置后端（可选）

如果你需要把示例前端和仓库自带的 `Strapi 5` 服务一起跑起来，再补这一步：

1. 确保 MySQL 已经启动，并创建一个名为 `vue_bag_admin` 的数据库。
2. 进入 `apps/strapi`，复制环境变量文件：

```bash
cd apps/strapi
cp .env.example .env
```

3. 按本地数据库账号、密码和端口修改 `.env`。
4. 启动后端：

```bash
pnpm dev
```

服务起来后，可以访问 `http://localhost:1337/admin` 注册超级管理员账号。

## 什么时候选哪条路

- 你要做自己的项目：优先用 `create-bag-admin`
- 你要研究框架实现：直接跑当前仓库
- 你要开发或调试 `@bag/plugin-*`：直接跑当前仓库更方便

## 接下来读什么

- [插件化开发](./plugin-development.md)
- [路由与菜单](./routing-and-menu.md)
- [权限体系](./permissions.md)
