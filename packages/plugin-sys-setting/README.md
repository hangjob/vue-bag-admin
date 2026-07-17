# @bag/plugin-sys-setting

`@bag/plugin-sys-setting` 是官方提供的系统设置示例插件，放的是常规设置、高级设置、插件管理这类页面。

这个包真正想说明的是一条边界：宿主框架可以提供设置能力的壳，但具体的设置页面和配置流程，最好还是留在插件层。

## 安装

```bash
pnpm add @bag/plugin-sys-setting @bag/core @bag/ui
```

宿主项目需要自行提供 `vue`、`vue-router`，并通常会和 `@bag/host-vue` 一起使用。

## 它带了什么

- `/sys-setting`: 常规设置页
- `/sys-setting/advanced`: 高级设置页
- `/sys-setting/plugins`: 插件管理页
- 一组对应的系统设置菜单
- `zh-CN` / `en` 多语言文案

## 怎么接进去

```ts
import { bootstrapPlugins } from '@bag/host-vue'
import sysSettingPlugin from '@bag/plugin-sys-setting'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [sysSettingPlugin]
})
```

## 一般拿它做什么

- 作为官方“系统设置业务插件”的参考实现
- 作为插件管理页的落点，配合 `@bag/core` 的运行时工具展示插件清单
- 作为你自己项目里设置中心的起步模板

## 这份示例的特点

- 插件 ID: `plugin-sys-setting`
- 默认排序: `100`
- 页面范围: 常规设置、高级设置、插件管理
- 菜单分组: `sys-setting-group`
- 多语言: 内置中文和英文文案

## 边界

- 它不是宿主框架本体，不应该整包并进 `@bag/host-vue`。
- `@bag/host-vue` 负责布局、权限、插件引导、缓存、主题这些框架层能力。
- `@bag/plugin-sys-setting` 负责具体的系统设置业务页，包括插件管理这种偏运营、偏配置的页面。
- 这么拆的好处很直接：宿主层能保持通用，不会被某一个项目的设置中心绑死。

## 一般会搭什么

- `@bag/core`：读取插件运行时清单和启停状态
- `@bag/ui`：复用表单、字典和基础后台组件
- `@bag/host-vue`：把系统设置插件挂到宿主应用里
