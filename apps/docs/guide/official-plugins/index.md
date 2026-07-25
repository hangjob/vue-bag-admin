# 官方插件

官方插件用于展示一块完整业务如何接入 Vue-Bag-Admin。它们和本地插件遵循同一套 `AdminPlugin` 协议，但可以作为独立 npm 包安装和升级。

当前提供两个官方参考插件：

| 插件                      | 插件 ID              | 默认顺序 | 用途                               |
| ------------------------- | -------------------- | -------: | ---------------------------------- |
| `@bag/plugin-shop`        | `plugin-shop`        |       10 | 演示商城业务域、复杂路由和多级菜单 |
| `@bag/plugin-sys-setting` | `plugin-sys-setting` |      100 | 演示系统设置、外观配置和插件管理   |

## 官方插件的定位

这两个插件首先是架构和页面组织方式的参考实现，不是已经接好生产接口的完整业务系统。

它们可以帮助你理解：

- 一个插件如何同时提供路由、菜单和多语言。
- 详情页、编辑页如何保持列表菜单高亮。
- 多个路由如何复用同一个缓存视图。
- 插件管理页如何读取运行时插件清单。
- 宿主能力和具体业务页面应该如何划分边界。

正式项目通常需要继续补充：

- 真实后端接口和数据模型。
- 细粒度角色与权限点。
- 表单校验和服务端错误处理。
- 配置持久化和审计记录。
- 与自身业务一致的页面和交互。

## 安装

已经通过脚手架创建项目时，宿主依赖已经具备，只需安装需要的插件：

```bash
pnpm add @bag/plugin-shop
pnpm add @bag/plugin-sys-setting
```

也可以一起安装：

```bash
pnpm add @bag/plugin-shop @bag/plugin-sys-setting
```

## 挂载

在宿主 `src/main.ts` 中导入插件：

```ts
import shopPlugin from '@bag/plugin-shop'
import sysSettingPlugin from '@bag/plugin-sys-setting'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [shopPlugin, sysSettingPlugin] // 传入需要参与本次引导的插件
})
```

`bootstrapPlugins()` 会根据插件的 `order` 排序，所以数组书写顺序不决定最终菜单顺序。

完成引导后：

- 商城插件会注册商品、订单、用户、营销、客服、财务和店铺设置页面。
- 系统设置插件会注册常规设置、高级设置和插件管理页面。
- 两个插件的中文、英文词条会合并到宿主 i18n。
- 菜单会根据当前用户的角色和权限过滤。

## 与脚手架本地插件的区别

脚手架默认生成的 `src/plugins/*` 是项目内部插件，不需要单独安装。官方插件则位于独立包中：

```text
本地插件
src/plugins/report.ts

官方插件
node_modules/@bag/plugin-shop
node_modules/@bag/plugin-sys-setting
```

两者的运行方式相同。一个本地插件需要被多个项目复用时，可以再迁移成独立包。

## 选择建议

- 想学习复杂路由和菜单设计：阅读[商城插件](./shop.md)。
- 想增加设置中心和插件管理页：阅读[系统设置插件](./sys-setting.md)。
- 想控制插件启用状态：阅读[安装与启停](./install-and-toggle.md)。
- 想创建自己的业务插件：进入[插件开发](../plugins/create-plugin.md)。

## 下一步

继续阅读[安装与启停](./install-and-toggle.md)，了解插件如何进入运行集合，以及为什么切换状态后需要刷新应用。
