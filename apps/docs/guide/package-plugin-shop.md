# @bag/plugin-shop

`@bag/plugin-shop` 是官方商城示例插件。你可以把它当成一份体量比较完整的业务插件样板，看路由怎么拆、菜单怎么配、多语言怎么放，详情页和缓存策略又该怎么处理。

## 它带了哪些业务域

- 商品管理
- 订单管理
- 用户管理
- 优惠营销
- 客服消息
- 财务结算
- 店铺设置

## 它主要在演示什么

- 一个插件可以同时输出 routes、menus、locales
- 隐藏详情页可以通过 `activeMenu` 保持菜单高亮
- 编辑页、详情页可以通过 `noCache` 避免缓存
- 财务类多个页面可以通过 `cacheKey` 复用缓存视图
- 同一个插件可以同时维护 `zh-CN` 和 `en` 两套文案

## 接入方式

```ts
import { bootstrapPlugins } from '@bag/host-vue'
import shopPlugin from '@bag/plugin-shop'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [shopPlugin]
})
```

## 一般怎么用它

- 作为业务插件开发的官方参考
- 作为商城类中后台的起步模板
- 作为路由和菜单协作方式的样板代码

## 边界

- 它是业务示例插件，不属于宿主框架基础层
- 它更适合作为参考实现，不建议把里面的页面直接当成最终产品形态
- 宿主布局、权限体系、标签页缓存机制还是属于 `@bag/host-vue`

## 继续阅读

- [插件化开发](./plugin-development.md)
- [路由与菜单](./routing-and-menu.md)
