# 快速上手

这篇文档主要带你把 `Vue-Bag-Admin` 在本地跑起来。流程不复杂，按顺序走一遍基本就能起服务。

## 环境准备

先把下面这些环境准备好：

- **Node.js**: `v24` 或更高版本。
- **pnpm**: `v9` 或更高版本。（项目用的是 `pnpm` workspace）
- **MySQL**: `8.0` 以上版本，并启动服务。

## 1. 获取代码

先把仓库拉到本地：

```bash
git clone https://github.com/hangjob/vue-bag-admin.git
cd vue-bag-admin
```

## 2. 安装依赖

项目锁定了 `pnpm` 作为包管理工具，所以直接在根目录执行：

```bash
pnpm install
```

## 3. 后端服务初始化 (Strapi)

项目里自带了一套基于 Strapi 5 的 CMS 服务，第一次跑之前先把数据库这边处理好：

1. 确保 MySQL 已经启动，并新建一个名为 `vue_bag_admin` 的数据库。
2. 进入 `apps/strapi` 目录，复制环境配置：
   ```bash
   cd apps/strapi
   cp .env.example .env
   ```
   如果你的本地数据库账号、密码或端口不一样，就在 `.env` 里改掉。
3. 启动后端服务：
   ```bash
   pnpm dev
   ```

服务起来之后，可以访问 `http://localhost:1337/admin` 注册超级管理员账号。

## 4. 前端服务启动

接着把前端跑起来。你可以回到根目录执行，也可以先进入 `apps/admin`：

```bash
# 复制并配置环境变量
cd apps/admin
cp .env.example .env

# 在根目录运行前端 dev 命令
pnpm --filter admin dev
```

浏览器打开终端里输出的地址，通常是 `http://localhost:5173`。能看到页面，就说明前后端都已经跑通了。

## 接下来

服务跑起来之后，建议继续看这两块：

- [如何开发业务插件](./plugin-development.md)
- 路由与权限体系
