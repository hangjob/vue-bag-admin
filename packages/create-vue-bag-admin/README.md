# create-vue-bag-admin

一个面向 `vue-bag-admin` 生态的初始化脚手架，用来快速生成基于 `@bag/host-vue` 的后台宿主项目。

## 当前状态

现在这版先做“雏形”：

- 生成一个基于 Vue 3 + Vite 的宿主应用
- 默认接入 `@bag/host-vue`
- 提供 `basic` 与 `with-demo-plugins` 两种模板
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

- `--bag-version <version>`: 指定生成项目里 `@bag/*` 包的版本，默认 `latest`
- `--template <name>`: 选择模板，默认 `basic`
- `--force`: 目标目录非空时允许继续写入

## 模板说明

- `basic`: 最小宿主模板，只带一个本地 demo 插件，适合直接开工
- `with-demo-plugins`: 完整 admin 模板，预装官方示例插件，并补齐宿主设置抽屉、个人中心与字典示例
