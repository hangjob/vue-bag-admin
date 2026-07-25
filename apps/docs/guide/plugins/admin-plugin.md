# AdminPlugin 配置

`AdminPlugin` 是宿主与业务插件之间的核心协议。宿主不扫描插件目录，而是读取这个对象，决定要注册哪些路由、菜单、语言包和初始化逻辑。

## 最小插件

```ts
import type { AdminPlugin } from 'vue-bag-admin'

const reportPlugin: AdminPlugin = {
  id: 'report-plugin', // 运行时唯一标识
  name: '报表插件', // 展示名称
  version: '1.0.0' // 插件自身版本
}

export default reportPlugin
```

`id`、`name`、`version` 是必填字段。

## 完整结构

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',

  enabled: true,
  order: 20,
  dependsOn: ['workspace-plugin'],
  compatibility: {
    host: '^6.0.0',
    vue: '^3.5.0'
  },

  routes: [],
  menus: [],
  locales: {},

  permissions: [],
  settings: [],
  contributes: {},

  async install(app, context) {
    console.log(context.enabledPluginIds)
  },

  async dispose(context) {
    console.log(context.enabledPluginIds)
  }
}
```

## 基础字段

| 字段            | 类型       | 说明                                   |
| --------------- | ---------- | -------------------------------------- |
| `id`            | `string`   | 插件唯一标识，用于依赖、启停和冲突检测 |
| `name`          | `string`   | 插件展示名称                           |
| `version`       | `string`   | 插件版本，通常与 npm 包版本一致        |
| `enabled`       | `boolean`  | 是否允许插件默认进入启用集合           |
| `order`         | `number`   | 注册顺序，默认 `0`，值越小越先执行     |
| `dependsOn`     | `string[]` | 依赖的插件 ID                          |
| `compatibility` | `object`   | 宿主和 Vue 版本兼容声明                |

命名建议：

```text
包名       @company/plugin-report
插件 ID    company-report
路由前缀   /reports
i18n 前缀  report
权限前缀   report.*
```

这些命名空间保持一致，可以显著减少多个插件之间的冲突。

## 运行能力字段

| 字段      | 作用       | 当前宿主行为                         |
| --------- | ---------- | ------------------------------------ |
| `routes`  | 页面路由   | 自动注册到 Vue Router                |
| `menus`   | 侧边栏菜单 | 合并后写入菜单 Store                 |
| `locales` | 插件语言包 | 合并到宿主 i18n                      |
| `install` | 安装钩子   | 插件启用时依次执行                   |
| `dispose` | 清理钩子   | 已定义协议，当前引导流程不会自动调用 |

`dispose` 适合自定义卸载流程，但当前宿主切换插件状态后采用刷新重新引导，不会在页面内热卸载插件。

## 声明性字段

| 字段            | 作用                       |
| --------------- | -------------------------- |
| `permissions`   | 声明插件包含的权限点       |
| `settings`      | 声明插件配置项             |
| `contributes`   | 声明插件向扩展点提供的条目 |
| `compatibility` | 声明兼容范围               |

当前这些字段主要是元数据：

- `listRuntimePlugins()` 会统计权限、配置项和扩展点数量。
- 宿主不会根据 `permissions` 自动保护路由。
- 宿主不会根据 `settings` 自动生成完整设置页面。
- 宿主不会自动渲染 `contributes`。
- 当前引导流程不会自动校验 `compatibility`。

需要由业务项目或上层插件中心读取这些声明，并实现对应界面或校验流程。

## 插件上下文

`install()` 和 `dispose()` 接收 `PluginContext`：

```ts
interface PluginContext {
  app: App
  router: Router
  enabledPluginIds: string[]
  config?: Record<string, unknown>
}
```

其中：

- `app`：当前 Vue 应用。
- `router`：宿主 Router。
- `enabledPluginIds`：本次通过启用和依赖检查的插件 ID。
- `config`：预留的插件配置上下文。

`install()` 的第一个参数同样是 Vue `app`：

```ts
install(app, context) {
  app.component('ReportBadge', ReportBadge)

  if (context.enabledPluginIds.includes('workspace-plugin')) {
    console.log('工作台插件已启用')
  }
}
```

## 导入入口

业务项目建议统一从 `vue-bag-admin` 导入：

```ts
import type { AdminPlugin } from 'vue-bag-admin'
```

不要在同一个业务项目里混用源码入口、`@bag/core` 和 `vue-bag-admin` 的不同实例，否则插件运行时清单可能来自不同模块实例。

## 下一步

继续阅读[路由、菜单与多语言](./routes-menus-locales.md)。
