# vue-bag-admin

`vue-bag-admin` 是面向业务项目的统一运行时入口包。你可以只安装这一个主包，然后从同一个入口拿到宿主层、请求层、UI 组件层和插件协议层的常用能力。

## 安装

```bash
pnpm add vue-bag-admin vue@^3.5 vue-router@^4.4 pinia@^2.2 vue-i18n@^10 naive-ui@^2.40
```

## 用法

```ts
import { HostApp, bootstrapPlugins, createHttpClient, PmProTable } from 'vue-bag-admin'
import 'vue-bag-admin/style.css'
```

## 当前聚合范围

- `@bag/core`
- `@bag/request`
- `@bag/ui`
- `@bag/host-vue`

## 脚手架

如果你想直接生成一个宿主项目，请使用：

```bash
npx create-vue-bag-admin my-admin
```
