# @bag/plugin-sys-setting

`@bag/plugin-sys-setting` 是官方系统设置示例插件，放的是常规设置、高级设置、插件管理这类页面。

这个包不只是给几页示例。更重要的是，它把宿主框架和系统设置业务页的边界划清楚了。

## 它带了哪些页面

- `/sys-setting`：常规设置
- `/sys-setting/advanced`：高级设置
- `/sys-setting/plugins`：插件管理

## 为什么它应该放在插件层

系统设置页看起来很像宿主的一部分，但很多时候它其实还是具体业务配置流程的一部分：

- 不同项目的设置中心差异很大
- 插件管理、系统配置、运营设置通常都有明显业务属性
- 如果直接塞进宿主框架，宿主层会越来越重，也越来越难做通用

所以这里按下面的方式拆：

- `vue-bag-admin` 提供设置能力的承载壳层
- `@bag/plugin-sys-setting` 放真正的设置业务页

## 接入方式

```ts
import { bootstrapPlugins } from 'vue-bag-admin'
import sysSettingPlugin from '@bag/plugin-sys-setting'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [sysSettingPlugin]
})
```

## 一般怎么用它

- 作为系统设置模块的官方参考实现
- 作为插件管理页的落点
- 作为你自己项目里设置中心的起步模板

其中 `/sys-setting/plugins` 不扫文件系统。它读取的是宿主启动时通过 `bootstrapPlugins({ plugins })` 注册到运行时里的插件清单。页面内部复用 `listRuntimePlugins()` 和 `setPluginEnabledState()`，所以本地联调时要保证宿主入口、插件页面和 `vue-bag-admin` 指向同一份源码实例。

常规设置页里的主题色和外观入口也不要直接读写 `localStorage`。通过 `useAppConfigStore()`、`themePresets` 和宿主内置的主题 token API 跟框架层交互就够了。

## 边界

- 它不是宿主框架本体
- 它不应该把系统设置能力和框架层绑死
- 框架层负责通用宿主能力，插件层负责具体设置业务

## 继续阅读

- [插件化开发](./plugin-development.md)
- [权限管理](./permissions.md)
