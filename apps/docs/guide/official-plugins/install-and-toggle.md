# 安装与启停

插件需要同时满足“已传入宿主”和“当前处于启用状态”，才会注册路由、菜单和多语言。

## 安装并导入

安装一个官方插件：

```bash
pnpm add @bag/plugin-shop
```

在 `src/main.ts` 中导入：

```ts
import shopPlugin from '@bag/plugin-shop'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [shopPlugin]
})
```

只安装 npm 包但不传给 `bootstrapPlugins()`，插件不会进入宿主运行时。

## 启用状态如何决定

运行时会同时检查两层状态：

```text
最终启用 = plugin.enabled !== false
        且插件 ID 不在禁用列表中
```

插件代码可以设置默认状态：

```ts
const plugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  enabled: false // 代码层默认关闭
}
```

`enabled: false` 是代码层锁定。运行时启停接口不能把它改为启用，需要先修改插件定义。

## 查看运行时插件

使用 `listRuntimePlugins()` 获取本次传给宿主的插件：

```ts
import { listRuntimePlugins } from 'vue-bag-admin'

const plugins = listRuntimePlugins()
```

返回项主要包含：

| 字段                    | 说明                               |
| ----------------------- | ---------------------------------- |
| `id`、`name`、`version` | 插件基本信息                       |
| `order`                 | 插件注册顺序                       |
| `enabledByConfig`       | 插件定义是否允许启用               |
| `enabled`               | 合并代码配置和禁用列表后的最终状态 |
| `dependsOn`             | 插件依赖                           |
| `routeCount`            | 路由数量，包含嵌套路由             |
| `menuCount`             | 菜单数量，包含子菜单               |
| `permissionCount`       | 声明的权限点数量                   |
| `settingCount`          | 声明的配置项数量                   |
| `contributionCount`     | 声明的扩展点条目数量               |

`listRuntimePlugins()` 返回的是当前运行时快照。切换状态后需要重新调用，才能得到新状态。

## 切换插件状态

```ts
import { listRuntimePlugins, setPluginEnabledState } from 'vue-bag-admin'

setPluginEnabledState('plugin-shop', false) // 将商城插件写入禁用列表

const plugins = listRuntimePlugins() // 重新读取运行时状态
```

当前引导流程只在应用启动时注册路由、菜单和语言包。因此切换状态后，需要刷新页面：

```ts
setPluginEnabledState('plugin-shop', false)
window.location.reload() // 重新执行 bootstrapPlugins()
```

不要把“状态已写入”和“插件已从当前页面卸载”当成同一件事。刷新前，已经注册的路由仍存在。

## 默认存储位置

默认禁用列表存放在浏览器 `localStorage`：

```text
bag.admin.disabledPlugins
```

它适合本地开发和单浏览器配置。如果插件状态需要按用户、租户或环境统一管理，应注入自己的 `pluginStateProvider`。

## 自定义状态提供器

生产环境可以在引导前加载禁用列表，再向 `bootstrapPlugins()` 注入同步读取接口：

```ts
const disabledPluginIds = new Set(await loadDisabledPluginIds())

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins,
  pluginStateProvider: {
    getDisabledPluginIds: () => [...disabledPluginIds], // 引导阶段同步读取
    setPluginEnabledState: (pluginId, enabled) => {
      if (enabled) {
        disabledPluginIds.delete(pluginId)
      } else {
        disabledPluginIds.add(pluginId)
      }

      void saveDisabledPluginIds([...disabledPluginIds])
    }
  }
})
```

当前 `PluginStateProvider` 是同步接口。远程状态应在 `bootstrapPlugins()` 之前加载完成；保存失败、重试和回滚策略由业务项目处理。

## 依赖安全

假设审计插件依赖报表插件：

```ts
const auditPlugin: AdminPlugin = {
  id: 'audit-plugin',
  name: '审计插件',
  version: '1.0.0',
  dependsOn: ['report-plugin']
}
```

启用审计插件但禁用报表插件时，下次应用引导会抛出缺少依赖错误。

底层 `setPluginEnabledState()` 只负责保存状态，不会自动处理依赖。系统设置插件中的管理页面额外做了两项保护：

- 缺少前置依赖时，不允许启用插件。
- 仍有启用插件依赖当前插件时，不允许禁用。

自定义插件管理页也应该执行相同检查。

## 卸载 npm 包

不再使用插件时，先从 `plugins` 数组和 import 中移除，再卸载依赖：

```bash
pnpm remove @bag/plugin-shop
```

只卸载包但保留 import，会导致构建阶段找不到模块。

## 下一步

- 查看[商城插件](./shop.md)。
- 查看[系统设置插件](./sys-setting.md)。
- 创建自己的[第一个插件](../plugins/create-plugin.md)。
