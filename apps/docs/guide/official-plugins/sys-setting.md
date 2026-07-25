# 系统设置插件

`@bag/plugin-sys-setting` 是官方系统设置参考插件。它把常规设置、高级设置和插件管理放在独立业务插件中，避免宿主框架被某个项目的配置流程绑死。

## 安装与挂载

```bash
pnpm add @bag/plugin-sys-setting
```

```ts
import sysSettingPlugin from '@bag/plugin-sys-setting'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [sysSettingPlugin]
})
```

插件基本信息：

```text
包名       @bag/plugin-sys-setting
插件 ID    plugin-sys-setting
版本       1.0.0
默认顺序   100
```

## 页面与路由

| 路由                    | 页面     |
| ----------------------- | -------- |
| `/sys-setting`          | 常规设置 |
| `/sys-setting/advanced` | 高级设置 |
| `/sys-setting/plugins`  | 插件管理 |

三个页面默认要求 `authenticated` 角色，菜单统一放在“系统设置”分组下。

## 常规设置

常规设置页展示了：

- 基础信息、SEO、上传和公告配置界面。
- 使用 `themePresets` 生成主题色选项。
- 通过 `useAppConfigStore()` 修改宿主主题。
- 打开宿主内置外观配置抽屉。

关键 API：

```ts
import { themePresets, useAppConfigStore } from 'vue-bag-admin'

const appConfigStore = useAppConfigStore()

const themeColors = themePresets.map((preset) => ({
  name: preset.name,
  value: preset.value
}))

appConfigStore.setThemeColor('#f97316') // 修改宿主主题色
appConfigStore.openSettingsDrawer() // 打开宿主外观配置抽屉
```

基础设置、SEO、上传和公告表单当前是界面示例，没有自动写入后端。生产项目需要自行接入读取、保存、权限和审计接口。

## 插件管理

插件管理页读取宿主启动时注册的运行时清单：

```ts
import { listRuntimePlugins, setPluginEnabledState } from 'vue-bag-admin'

const plugins = listRuntimePlugins() // 获取所有传给 bootstrapPlugins() 的插件

setPluginEnabledState('plugin-shop', false) // 保存商城插件禁用状态
window.location.reload() // 重新引导后移除对应路由和菜单
```

页面会展示：

- 插件名称、ID、版本和顺序。
- 启用状态与代码层默认状态。
- 路由、菜单、权限、设置项和扩展点数量。
- 插件依赖和被依赖关系。

切换前会检查依赖：

- 插件缺少前置依赖时不能启用。
- 插件仍被其他启用插件依赖时不能禁用。
- `enabled: false` 的插件被视为代码层锁定，不能从页面启用。

禁用系统设置插件自身时，页面会先跳回 Dashboard；刷新后系统设置路由和菜单不再注册。

## 状态持久化

默认启停状态写入当前浏览器的 `localStorage`。如果需要按租户或用户统一管理，应在宿主引导时传入 `pluginStateProvider`。

具体配置见[安装与启停](./install-and-toggle.md)。

## 为什么它不属于宿主

宿主只提供通用能力：

- 外观配置 Store。
- 插件运行时清单。
- 插件启停 API。
- 路由、菜单和权限容器。

系统设置插件负责具体页面和操作流程。这样不同项目可以替换自己的设置中心，而不需要修改宿主框架。

## 生产接入建议

- 为系统设置路由增加 `system.settings.read` 等权限。
- 为保存、插件启停等操作增加单独权限点。
- 将配置表单接入后端，并处理版本冲突和保存失败。
- 插件启停属于高影响操作，建议增加确认、审计和回滚能力。
- 远程插件状态应在 `bootstrapPlugins()` 前加载完成。

## 下一步

- 阅读[安装与启停](./install-and-toggle.md)。
- 阅读[权限与配置项](../plugins/permissions-and-settings.md)。
- 阅读[生命周期与依赖](../plugins/lifecycle-and-dependencies.md)。
