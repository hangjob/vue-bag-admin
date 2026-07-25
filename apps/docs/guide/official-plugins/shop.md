# 商城插件

`@bag/plugin-shop` 是官方商城参考插件。它覆盖多个业务域，主要用于展示复杂后台插件如何组织路由、菜单、多语言和缓存策略。

它不是已经接好支付、库存和订单服务的商城成品。

## 安装与挂载

```bash
pnpm add @bag/plugin-shop
```

```ts
import shopPlugin from '@bag/plugin-shop'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [shopPlugin]
})
```

插件基本信息：

```text
包名       @bag/plugin-shop
插件 ID    plugin-shop
版本       1.0.0
默认顺序   10
```

所有页面默认要求用户拥有 `authenticated` 角色。

## 业务范围

| 业务域 | 主要页面                         |
| ------ | -------------------------------- |
| 商品   | 商品列表、发布商品、编辑商品     |
| 订单   | 订单列表、订单详情、发货、退换货 |
| 用户   | 用户列表、用户资料、用户订单     |
| 营销   | 营销列表、创建活动               |
| 客服   | 客服消息                         |
| 财务   | 日结账单、月结账单、提现         |
| 店铺   | 基础信息、交易、物流、客服配置   |

当前插件共提供 22 个路由记录和 14 个菜单节点，包括嵌套路由和多级菜单。

## 值得参考的路由设计

### 详情页保持列表菜单高亮

订单详情没有独立菜单，通过 `activeMenu` 归属到订单列表：

```ts
{
  path: '/order/detail/:id',
  name: 'OrderDetail',
  component: () => import('./views/OrderDetail.vue'),
  meta: {
    title: 'shop.order.detail',
    layout: 'default',
    roles: ['authenticated'],
    activeMenu: '/order/list', // 详情页仍高亮订单列表
    noCache: true
  }
}
```

编辑、发货、用户资料和营销创建页也使用相同方式。

### 多个路由复用一个缓存视图

日结与月结共用 `Finance.vue`，并使用同一个缓存键：

```ts
{
  path: '/finance/flow/daily',
  name: 'FinanceDaily',
  component: () => import('./views/Finance.vue'),
  meta: {
    title: 'shop.finance.daily',
    cacheKey: 'Finance'
  }
},
{
  path: '/finance/flow/monthly',
  name: 'FinanceMonthly',
  component: () => import('./views/Finance.vue'),
  meta: {
    title: 'shop.finance.monthly',
    cacheKey: 'Finance'
  }
}
```

这种写法适合组件相同、筛选维度不同的页面。

### 店铺设置使用嵌套路由

`/store/settings` 作为设置容器，子路由分别承载基础、交易、物流和客服配置：

```text
/store/settings/base
/store/settings/trade
/store/settings/logistics
/store/settings/service
```

父菜单只显示一个“店铺设置”，子页面通过 `activeMenu` 维持同一高亮状态。

## 多级菜单

商城插件展示了一至三级菜单：

```text
财务结算
└── 资金流水
    ├── 日结账单
    └── 月结账单
```

同级菜单由 `sort` 排序；菜单标题使用 `shop.*` 国际化 key。

插件内置：

```text
zh-CN
en
```

`bootstrapPlugins()` 会把语言包合并进宿主 i18n，不需要业务项目重复注册。

## 接入真实业务

当前页面主要展示结构和交互。接入生产项目时，建议至少完成：

1. 将页面中的演示数据替换为业务 API。
2. 为商品、订单、财务等模块增加细粒度权限。
3. 在后端再次校验操作权限。
4. 补充加载失败、空状态、提交失败和重试交互。
5. 根据自身业务裁剪不需要的路由与菜单。

例如可以把商品权限拆为：

```text
shop.product.read
shop.product.create
shop.product.update
shop.product.publish
```

然后同时配置到路由、菜单和操作按钮。

## 修改方式

包只导出完整的 `shopPlugin`，没有把内部页面作为独立公共 API 导出。

如果只需要关闭整个插件，使用运行时启停即可。如果需要大量修改页面、路由或业务域，更合适的方式是：

- 参考源码创建自己的本地商城插件。
- Fork 该包并使用自己的包名发布。
- 只复制确实需要的页面和路由，不直接修改 `node_modules`。

## 边界

- 宿主布局、标签栏和权限运行时属于 `vue-bag-admin`。
- 商城插件只负责商城业务页面和配置。
- 当前插件没有提供完整商城后端、支付、库存或订单状态机。
- 示例中的 `authenticated` 只是基础登录角色，不等于生产权限设计。

## 下一步

- 阅读[路由、菜单与多语言](../plugins/routes-menus-locales.md)。
- 阅读[权限与配置项](../plugins/permissions-and-settings.md)。
