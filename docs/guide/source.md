# 源码开发

在什么样的情况下推荐源码开发？

>我推荐的是你在项目有需要的很多的管理系统，并且大同小异，此时你需要一个基座，类似微前端一样(微前端并不是解决此类问题)，你可以开发一个通用性的框架，
> 其他子应用框架都基于它，像mvc架构一样，在编写Controller的时候一般都会继承于BaseController，此时你有一个统一约束管理

## 下载源码

```shell
git clone git@github.com:hangjob/vue-bag-admin.git
```

[GitHub下载](https://github.com/hangjob/vue-bag-admin/archive/refs/heads/master.zip)

## 安装依赖
```shell
pnpm i
```

## 内置命令
```shell
"dev": "vite", // 开发模式
"build": "vite build", // 打包模式
"lib": "vite build --mode lib", // 打包lib模式 一般用于上传npm仓库
```

