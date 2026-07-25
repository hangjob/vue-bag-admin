# 快速上手

这一页只完成一个目标：创建并运行一个可以登录的 Vue-Bag-Admin 项目。

## 环境要求

推荐使用与仓库一致的环境：

| 工具    | 版本          |
| ------- | ------------- |
| Node.js | 24 或更高版本 |
| pnpm    | 9 或更高版本  |

检查本地版本：

```bash
node -v
pnpm -v
```

运行脚手架示例不需要数据库。只有接入仓库内的 Strapi 参考后端时才需要 MySQL。

## 创建项目

使用 pnpm：

```bash
pnpm dlx create-vue-bag-admin my-admin
```

也可以使用 npx：

```bash
npx create-vue-bag-admin my-admin
```

进入项目并安装依赖：

```bash
cd my-admin
pnpm install
pnpm dev
```

终端会输出本地访问地址，通常是：

```text
http://localhost:5173
```

## 生成项目里有什么

核心文件只有三类：

```text
src/
├── main.ts          # 初始化宿主、认证、请求和插件
├── routes.ts        # 登录、Dashboard、403、404 等宿主路由
├── App.vue          # 挂载 HostApp
├── plugins/         # 本地业务插件
└── views/           # 示例页面
```

示例代码不是必须保留的框架文件。开始业务开发时，可以删除示例页面和插件，只保留自己的模块。

## 下一步

继续阅读 [创建项目](./create-project.md)，了解脚手架参数、目录职责，以及创建后首先应该修改哪些内容。
