# 安裝

## 环境

[Vite官方文档](https://vitejs.dev/)、[Vite官方中文文档](https://cn.vitejs.dev/)

Vite3.0 需要 Node.js 版本 >= 14.18.0。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。

如果访问速度慢、切换镜像源
::: tip 腾讯云

```bash
npm config set registry http://mirrors.cloud.tencent.com/npm/ 
```

华为云

```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/ 
```

淘宝

```bash
npm config set registry https://registry.npmmirror.com
```

:::


### 版本

vue-bag-admin目前还处于快速开发迭代中。

### 使用包管理器

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Element Plus，然后您就可以使用打包工具，例如 Vite 或 webpack。

推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack、vite等编译工具 配合使用，当然，我们也推荐使用 ES2015。

```bash
npm install vue-bag-admin --save
```

## Vite创建项目

安装Vue程序的模板，下一代前端开发与构建工具

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

## Vue CLI创建项目

[Vue CLI官方文档](https://cli.vuejs.org/zh/)，Vue.js 开发的标准工具

```bash
npm install -g @vue/cli 
然后就可以使用vue命名
vue create my-vue-app
```

### 安装依赖

```bash
cd my-vue-app
npm install
```
