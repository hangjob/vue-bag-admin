# 权限与配置项

插件可以声明权限点、配置项和扩展点。这些声明用于描述插件能力，但是否保护页面、生成设置界面或渲染扩展内容，需要宿主或业务项目明确实现。

## 声明权限点

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  permissions: [
    {
      code: 'report.read',
      title: '查看报表',
      description: '允许查看报表列表和详情',
      group: '报表'
    },
    {
      code: 'report.export',
      title: '导出报表',
      group: '报表'
    }
  ]
}
```

权限定义字段：

| 字段          | 必填 | 说明         |
| ------------- | ---- | ------------ |
| `code`        | 是   | 权限唯一编码 |
| `title`       | 是   | 权限名称     |
| `description` | 否   | 权限说明     |
| `group`       | 否   | 权限分组     |

建议使用：

```text
业务域.资源.动作

report.dashboard.read
report.detail.read
report.file.export
```

## 声明不等于鉴权

`permissions` 只是插件能力清单。页面仍要配置 `meta.permissions`：

```ts
{
  path: '/reports',
  component: () => import('../views/ReportList.vue'),
  meta: {
    permissions: ['report.read']
  }
}
```

按钮仍要使用权限指令或组件：

```vue
<button v-permission="'report.export'">
  导出报表
</button>
```

后端接口也必须再次校验权限。前端声明不能替代服务端鉴权。

## 汇总权限定义

如果项目需要生成角色配置页，可以从已启用插件定义中汇总：

```ts
import { isPluginEnabled, type AdminPlugin } from 'vue-bag-admin'

const enabledPermissions = plugins
  .filter(isPluginEnabled)
  .flatMap((plugin: AdminPlugin) => plugin.permissions ?? [])
```

权限编码应在整个宿主范围内保持唯一。当前引导流程不会自动检查重复权限编码，汇总时应自行校验。

## 声明配置项

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  settings: [
    {
      field: 'defaultRange',
      label: '默认统计周期',
      component: 'select',
      defaultValue: '7d',
      description: '首次打开报表时使用的日期范围',
      required: true,
      options: [
        {
          label: '最近 7 天',
          value: '7d'
        },
        {
          label: '最近 30 天',
          value: '30d'
        }
      ]
    }
  ]
}
```

配置项字段：

| 字段           | 说明               |
| -------------- | ------------------ |
| `field`        | 配置字段名         |
| `label`        | 展示名称           |
| `component`    | 建议使用的编辑组件 |
| `defaultValue` | 默认值             |
| `description`  | 帮助说明           |
| `required`     | 是否必填           |
| `options`      | 选择类组件的选项   |

当前宿主不会根据 `settings` 自动生成设置页。你可以在自定义插件中心中读取这些声明，再映射到 `PmProForm` 或自己的表单系统。

插件定义也不保存配置值。实际值应存放在后端、配置中心或项目自己的 Store 中。

## 声明扩展点

`contributes` 可以表达插件向宿主某个位置提供的内容：

```ts
const reportPlugin: AdminPlugin = {
  id: 'report-plugin',
  name: '报表插件',
  version: '1.0.0',
  contributes: {
    'dashboard.widgets': [
      {
        key: 'report-summary',
        title: '报表摘要'
      }
    ],
    'header.actions': [
      {
        key: 'report-export',
        title: '快速导出'
      }
    ]
  }
}
```

扩展点名称和数据结构由项目自己约定。当前宿主不会自动渲染这些条目。

消费扩展点时，可以从原始插件列表中收集：

```ts
const dashboardWidgets = plugins.flatMap(
  (plugin) => plugin.contributes?.['dashboard.widgets'] ?? []
)
```

建议为每个扩展点定义明确的 TypeScript 类型，不要让页面直接依赖任意对象。

## 当前运行时能看到什么

`listRuntimePlugins()` 只返回：

- `permissionCount`
- `settingCount`
- `contributionCount`

它不会返回完整的权限、配置和扩展点内容。需要消费详细声明时，应保留宿主传入 `bootstrapPlugins()` 的原始 `plugins` 数组。

## 下一步

继续阅读[生命周期与依赖](./lifecycle-and-dependencies.md)。
