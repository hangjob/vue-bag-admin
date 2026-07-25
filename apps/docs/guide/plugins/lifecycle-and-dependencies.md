# 生命周期与依赖

插件引导不是简单遍历数组。宿主会先确定启用集合、检查依赖和冲突，再按顺序注册能力。

## 引导顺序

`bootstrapPlugins()` 当前按下面流程执行：

1. 设置自定义 `pluginStateProvider`。
2. 初始化宿主 UI 配置。
3. 保存本次传入的运行时插件清单。
4. 按 `order` 升序排序。
5. 过滤 `enabled: false` 和禁用列表中的插件。
6. 检查 `dependsOn` 是否都在启用集合中。
7. 检查插件、路由和菜单冲突。
8. 依次注册路由、菜单和语言包。
9. 依次执行插件 `install()`。
10. 把 Router 安装到 Vue 应用。

任一步抛出错误都会中断应用引导。

## 注册顺序

```ts
const corePlugin: AdminPlugin = {
  id: 'report-core',
  name: '报表基础插件',
  version: '1.0.0',
  order: 10
}

const auditPlugin: AdminPlugin = {
  id: 'report-audit',
  name: '报表审计插件',
  version: '1.0.0',
  order: 20,
  dependsOn: ['report-core']
}
```

`order` 决定实际执行顺序。`dependsOn` 只检查依赖是否启用，不会自动进行拓扑排序。

因此，依赖插件应该使用更小的 `order`，确保它的 `install()` 先执行。

## 安装钩子

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',

  async install(app, context) {
    app.component('ReportBadge', ReportBadge)

    if (context.enabledPluginIds.includes('workspace-plugin')) {
      await setupWorkspaceIntegration()
    }
  }
}
```

适合放在 `install()` 中的工作：

- 注册插件级全局组件。
- 注册自定义布局。
- 根据已启用插件建立集成。
- 执行应用级、一次性的异步初始化。

不建议放入：

- 普通页面数据请求。
- 每次进入路由都要执行的逻辑。
- 依赖 DOM 已经挂载的操作。
- 无法释放的全局事件或定时器。

`install()` 可以返回 Promise，宿主会等待它完成。

## 清理钩子

协议定义了 `dispose(context)`：

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',

  dispose(context) {
    console.log('dispose', context.enabledPluginIds)
  }
}
```

当前 `bootstrapPlugins()` 不会自动调用 `dispose()`。插件启停通过保存状态并刷新应用生效，不支持在当前页面中完整热卸载。

如果项目实现自己的重引导或微前端卸载流程，需要主动调用对应插件的 `dispose()`。

## 启停状态

插件是否进入启用集合取决于：

- `plugin.enabled !== false`
- 插件 ID 不在 `pluginStateProvider` 返回的禁用列表中

状态写入后，刷新应用才能重新执行完整引导。具体见[安装与启停](../official-plugins/install-and-toggle.md)。

## 依赖错误

下面的配置会在启动时失败：

```ts
const auditPlugin: AdminPlugin = {
  id: 'report-audit',
  name: '报表审计插件',
  version: '1.0.0',
  dependsOn: ['report-core']
}

await bootstrapPlugins({
  app,
  router,
  plugins: [auditPlugin] // 缺少 report-core
})
```

错误会指出缺少的插件 ID。

## 冲突错误

引导阶段会阻止：

- 重复插件 ID。
- 与宿主或其他插件重复的路由路径。
- 重复的路由名称。
- 重复的菜单路径。

冲突不会自动覆盖。修复命名空间后再重新启动应用。

## 依赖设计建议

- 只依赖稳定、明确的插件能力。
- 不要用 `dependsOn` 表达单纯的菜单排序。
- 基础插件使用较小 `order`，依赖方使用较大 `order`。
- 避免 A 依赖 B、B 又依赖 A。
- `install()` 内仍要检查外部服务或配置是否可用。
- 插件管理页禁用插件前，应检查所有启用中的依赖方。

## 下一步

继续阅读[调试与发布](./debug-and-publish.md)。
