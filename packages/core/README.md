# @bag/core

`@bag/core` 是这套后台框架里的底层约定。它不画页面，也不负责把宿主跑起来，主要做一件事：把插件、菜单、路由 meta、表单 Schema 和字典这些公共结构先定清楚。

写插件、写宿主、写通用组件，最后都会碰到它。因为大家想顺畅协作，先得说同一种“方言”。

## 安装

```bash
pnpm add @bag/core
```

`@bag/core` 当前把 `vue` 和 `vue-router` 作为 `peerDependencies`，因为插件协议和路由类型会直接复用这两个生态的类型定义。

## 这里有什么

- 插件协议，比如 `AdminPlugin`、`MenuConfig`、`AdminRouteMeta`
- 表单协议，比如 `ProFormSchema`、`ProFormInstance`
- 字典协议，比如 `DictionaryDefinition`、`DictionaryOption`
- 一套字典注册、缓存和解析方法
- 一组插件运行时工具，给插件管理页或宿主控制台用

## 快速示例

```ts
import type { AdminPlugin } from '@bag/core'

const reportPlugin: AdminPlugin = {
  id: 'plugin-report',
  name: '报表插件',
  version: '1.0.0',
  order: 20,
  routes: [
    {
      path: '/report/overview',
      name: 'ReportOverview',
      component: () => import('./views/ReportOverview.vue'),
      meta: {
        title: 'report.overview',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ],
  menus: [
    {
      path: '/report/overview',
      title: 'report.overview',
      icon: 'chart',
      sort: 20,
      roles: ['authenticated']
    }
  ]
}

export default reportPlugin
```

## Schema 和字典

`@bag/ui` 里的 `PmSchemaForm`、`PmProForm`、`PmDictTag` 都直接吃这里的协议，所以这部分看似“底层”，实际很常用。

```ts
import { registerDictionary, resolveDictionaryOptions, type ProFormSchema } from '@bag/core'

registerDictionary({
  code: 'productStatus',
  options: [
    { label: '上架', value: 1, tagType: 'success' },
    { label: '下架', value: 0, tagType: 'warning' }
  ]
})

const schemas: ProFormSchema[] = [
  {
    field: 'status',
    label: '商品状态',
    component: 'select',
    dictCode: 'productStatus',
    required: true
  }
]

await resolveDictionaryOptions('productStatus')
```

## 运行时工具

除了类型和协议，这个包里还有一组不依赖宿主 UI 的运行时工具。做插件管理页时，这些方法基本都能直接派上用场。

```ts
import { listRuntimePlugins, registerRuntimePlugins, setPluginEnabledState } from '@bag/core'

registerRuntimePlugins([reportPlugin])

console.log(listRuntimePlugins())

setPluginEnabledState('plugin-report', false)
```

## 对外导出

- 插件协议：`AdminPlugin`、`PluginContext`、`AdminRouteMeta`、`MenuConfig`
- 表单协议：`ProFormSchema`、`ProFormOption`、`ProFormInstance`
- 字典协议：`DictionaryDefinition`、`DictionaryOption`
- 字典工具：`registerDictionary()`、`registerDictionaries()`、`resolveDictionaryOptions()`
- 插件运行时：`registerRuntimePlugins()`、`listRuntimePlugins()`、`isPluginEnabled()`

## 边界

- 这个包只管协议和轻量运行时，不放宿主布局，也不放业务页面。
- 它尽量不和具体 UI 框架绑死，不过类型层会复用 `vue`、`vue-router`。
- 表单 Schema 只描述结构，不负责渲染；真正把它画出来的是 `@bag/ui`。
- 插件启停状态默认存在浏览器 `localStorage` 里，比较适合前端宿主场景。

## 一般会搭什么

- `@bag/ui`：基于这些协议去渲染 Schema 组件
- `@bag/host-vue`：读取插件协议，再真正挂到宿主里
- `@bag/plugin-*`：按 `AdminPlugin` 的约定组织业务插件
