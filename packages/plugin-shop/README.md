# @bag/plugin-shop

`@bag/plugin-shop` 是官方提供的商城示例插件。它更像一份“业务插件长什么样”的参考答案：路由怎么拆，菜单怎么配，多语言怎么放，详情页和缓存策略又该怎么处理。

它不是一个可以直接拿去卖货的商城成品，更适合拿来看结构、看写法、看边界。

## 安装

```bash
pnpm add vue-bag-admin @bag/plugin-shop
```

宿主项目还需要自行提供 `vue`、`vue-router`、`vue-i18n` 和 `naive-ui`。如果你已经使用 `vue-bag-admin`，这部分依赖通常已经具备。

## 里面带了什么

- 商品管理：商品列表、发布商品、编辑商品
- 订单管理：订单列表、发货、售后、退换货详情
- 用户管理：用户列表、资料、订单
- 营销中心：活动列表与创建活动
- 客服消息：客服工作台示例
- 财务结算：日结、月结、提现页
- 店铺设置：基础信息、交易、物流、客服配置

## 怎么接进去

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import { bootstrapPlugins } from 'vue-bag-admin'
import shopPlugin from '@bag/plugin-shop'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: []
})
const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {}
})

app.use(pinia)
app.use(router)
app.use(i18n)

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [shopPlugin]
})
```

## 这个插件主要在演示什么

- 路由和菜单怎么由同一个插件一起吐出来
- 隐藏详情页怎么靠 `activeMenu` 维持左侧菜单高亮
- 编辑页、详情页怎么通过 `noCache` 避免被标签页缓存
- 多个财务页怎么通过同一个 `cacheKey` 复用缓存视图
- 同一个插件怎么同时带 `zh-CN` 和 `en` 两套文案

## 当前这份示例的特点

- 插件 ID: `plugin-shop`
- 默认排序: `10`
- 菜单域: 商品、订单、用户、营销、客服、财务、店铺设置
- 多语言: 内置中文和英文文案
- 路由策略: 同时使用了 `hidden`、`activeMenu`、`noCache`、`cacheKey`

## 边界

- 这是官方业务示例插件，不属于宿主框架基础层。
- 它主要回答的是“插件该怎么写”，不是“商城系统的最终抽象应该长什么样”。
- 如果你要做自己的业务模块，建议把它当参考模板看，不要整包原样搬过去。
- 布局、权限指令、标签页机制这些宿主能力，还是应该放在 `@bag/host-vue`。

## 一般会搭什么

- `vue-bag-admin`：提供插件协议、路由 meta 协议以及后台 UI 公共能力
- `@bag/host-vue`：宿主层，负责真正把这个插件挂进去
