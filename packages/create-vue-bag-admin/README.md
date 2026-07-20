# create-vue-bag-admin

一个面向 `vue-bag-admin` 生态的初始化脚手架，用来快速生成默认只安装一个主包的后台宿主项目。

## 当前状态

现在这版先做“雏形”：

- 生成一个基于 Vue 3 + Vite 的宿主应用
- 默认接入 `vue-bag-admin`
- 支持通过 `--bag-version` 注入包版本

## 用法

```bash
npx create-vue-bag-admin my-admin
```

如果你在当前 Monorepo 里验证模板，也可以把版本切到 workspace：

```bash
node packages/create-vue-bag-admin/bin/index.mjs demo-admin --bag-version workspace:*
```

## 参数

- `--bag-version <version>`: 指定生成项目里 `vue-bag-admin` 的版本，默认 `latest`
- `--force`: 目标目录非空时允许继续写入

## 当前模板

- 默认生成最小宿主模板，只安装 `vue-bag-admin`
- 模板里保留了本地示例插件，方便直接看宿主、菜单、路由和页面协议怎么接
- 如果你后面要接官方业务插件，再额外安装对应的 `@bag/plugin-*` 包即可
