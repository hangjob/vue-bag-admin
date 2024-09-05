# Strapi

[Strapi](https://strapi.nodejs.cn/)是vue-bag-admin作为后端服务框架的首选，Strapi 是一个开源的无头（headless） CMS，是一个灵活的 CMS，其管理面板和 API
都是可扩展的，并且每个部分都是可定制的，以匹配任何使用场景

## 准备工具

#### 搭建数据库服务

推荐使用[EServer](https://github.com/xianyunleo/EServer)Windows Mac平台下的一款集成Nginx、PHP、MySQL、Redis等服务的GUI集成环境，一键启动

#### 可视化数据库工具

推荐使用[Navicat Premium v17.1.0 绿色版](https://pan.quark.cn/s/1dfbb35ef0a0#/list/share)，Navicat
17全新升级，增强数据库管理和数据分析功能，支持模型设计、数据字典、数据分析等。引入模型设计优化，加速数据库架构创建与理解，提升工作效率。新增MongoDB和Redshift支持，与GaussDB和OceanBase兼容。首次打开需等待半分钟，报错后正常使用

## 安装Strapi

根据提示选择安装

```bash
npx create-strapi-app@latest my-project
cd my-project
npm run develop
```

## 使用框架提供Strapi

下载源码[GitHub]()

修改`config/database.js`数据库配置

```bash
pnpm install
npm run develop
```
