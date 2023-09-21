# 环境说明

::: tip 兼容性注意

Vite 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的
Node 版本。
:::

如果访问速度慢、切换镜像源
::: tip 镜像地址

```bash
腾讯云
npm config set registry http://mirrors.cloud.tencent.com/npm/ 
华为云
npm config set registry https://mirrors.huaweicloud.com/repository/npm/ 
淘宝
npm config set registry https://registry.npmmirror.com
管理工具
npm i nrm -g
```

:::

## 搭建Vite项目

```shell
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

搭建过程遇到疑问，请看[Vite官网](https://cn.vitejs.dev/guide/)详细描述

## 安装框架

我推荐您使用包管理器（如 NPM、Yarn 或 pnpm）安装核心基础框架，然后您就可以使用打包工具，例如 Vite 或 webpack。

```shell
pnpm i vue-bag-admin --save
```

由于该框架基于`Naive Ui`,`Pinia`,`Vue-Router`，所以你需要安装它

```shell
pnpm i naive-ui pinia vue-router --save
```

## 源码开发

[GitHub下载最新代码](https://github.com/hangjob/vue-bag-admin/archive/refs/heads/master.zip)

不推荐此模式开发，这样作者修改的代码不能跟你同步



