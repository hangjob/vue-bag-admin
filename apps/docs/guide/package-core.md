# @bag/core

`@bag/core` 是整套体系里最底下那层约定。它不渲染页面，也不启动宿主，只负责把插件、菜单、路由 meta、Schema 和字典这些公共结构先定好。

## 它在解决什么

如果没有这一层，每个业务模块都会按自己的习惯定义菜单格式、路由 meta、表单 Schema、字典结构。时间一长，宿主和插件就很难接顺。

`@bag/core` 做的事很朴素，就是先把这些约定定下来。

## 这里有什么

- 插件协议：`AdminPlugin`
- 菜单协议：`MenuConfig`
- 路由 meta 扩展：`AdminRouteMeta`
- Schema 表单协议：`ProFormSchema`
- 字典协议：`DictionaryDefinition`
- 轻量插件运行时：插件注册、启停状态、运行时清单

## 最小示例

```ts
import type { AdminPlugin } from '@bag/core'

const reportPlugin: AdminPlugin = {
  id: 'plugin-report',
  name: '报表插件',
  version: '1.0.0',
  routes: [
    {
      path: '/report',
      name: 'ReportPage',
      component: () => import('./views/ReportPage.vue'),
      meta: {
        title: 'report.title',
        layout: 'default',
        roles: ['authenticated']
      }
    }
  ],
  menus: [
    {
      path: '/report',
      title: 'report.title',
      icon: 'chart'
    }
  ]
}

export default reportPlugin
```

## 字典与 Schema

`@bag/ui` 里的表单和标签组件都依赖 `@bag/core` 里的 Schema 与字典协议。

```ts
import { registerDictionary, type ProFormSchema } from '@bag/core'

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
    dictCode: 'productStatus'
  }
]
```

## 谁会用到它

- 写宿主层的人：要读取插件协议
- 写业务插件的人：要按固定格式输出 routes、menus、locales
- 写组件层的人：要复用 Schema 和字典协议

## 边界

- 它不负责 UI 渲染
- 它不负责宿主启动
- 它不负责业务 API
- 它只负责把大家要遵守的结构先定下来

## 继续阅读

- [PmProForm](./pro-form.md)
- [字典系统](./dictionary-system.md)
- [插件化开发](./plugin-development.md)
