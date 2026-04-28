# 快速上手

这篇文档将帮助你快速搭建并运行 Vue-Bag-Admin。

## 环境准备

在开始之前，你需要准备以下开发环境：

- **Node.js**: `v24` 或更高版本。
- **pnpm**: `v9` 或更高版本。（本项目使用 `pnpm` workspace 管理）
- **MySQL**: `8.0` 以上版本，并启动服务。

## 1. 获取代码

通过 Git 克隆代码到本地：

```bash
git clone https://github.com/your-username/pm-web-admin-next.git
cd pm-web-admin-next
```

## 2. 安装依赖

由于使用了 `pnpm` 作为包管理工具（并在 `package.json` 的 `preinstall` 中限制了），请在根目录执行：

```bash
pnpm install
```

## 3. 后端服务初始化 (Strapi)

项目自带了基于 Strapi5 开发的 CMS 服务。首先需要初始化数据库：

1. 确保 MySQL 已经启动，新建一个名为 `vue_bag_admin` 的数据库。
2. 进入 `apps/strapi` 目录，复制环境配置：
   ```bash
   cd apps/strapi
   cp .env.example .env
   ```
   修改 `.env` 中的数据库连接信息（如需要）。
3. 启动后端服务：
   ```bash
   pnpm dev
   ```

*启动后，你可以访问 `http://localhost:1337/admin` 注册超级管理员账号。*

## 4. 前端服务启动

回到项目的根目录或在 `apps/admin` 目录中：

```bash
# 复制并配置环境变量
cd apps/admin
cp .env.example .env

# 在根目录运行前端 dev 命令
pnpm --filter admin dev
```

打开浏览器访问终端输出的地址（通常为 `http://localhost:5173`），此时你已经成功运行了 Vue-Bag-Admin！

---

## 接下来...

- 学习 [如何开发业务插件](./plugin-development.md)
- 了解路由与权限体系
