# 主题与布局 Token

宿主的外观配置分两层：

- `useAppConfigStore()` 保存用户选择，比如亮暗色、主题色、内容宽度、标签页、页脚和页面动画。
- `createThemeTokens()` 根据这些选择生成语义 token，并通过 CSS 变量落到 `document.documentElement`。

这样设置页只是入口，布局、组件和插件真正消费的是稳定的 token 契约。

## 常用 API

```ts
import { createThemeTokens, useAppConfigStore, type ThemeTokens } from 'vue-bag-admin'

const appConfigStore = useAppConfigStore()

appConfigStore.setTheme('dark')
appConfigStore.setThemeColor('#3b82f6')
appConfigStore.openSettingsDrawer()

const tokens: ThemeTokens = createThemeTokens(appConfigStore.theme, appConfigStore.themeColor)
```

`HostApp` 会在启动和设置变化时自动应用 token。普通页面一般不需要手动调用 `applyThemeTokens()`。

## CSS 变量

宿主会保留旧的主色变量：

```css
var(--primary-color)
var(--primary-color-400)
var(--primary-color-600)
```

新代码优先用这些语义变量：

```css
var(--bag-color-primary)
var(--bag-color-primary-hover)
var(--bag-color-primary-pressed)
var(--bag-color-primary-soft)
var(--bag-color-accent)
var(--bag-color-bg)
var(--bag-color-surface)
var(--bag-color-surface-muted)
var(--bag-color-border)
var(--bag-color-text)
var(--bag-color-text-muted)
var(--bag-layout-header-height)
var(--bag-layout-sidebar-width)
var(--bag-layout-sidebar-collapsed-width)
var(--bag-layout-content-max-width)
var(--bag-radius-md)
var(--bag-shadow-card)
```

插件页面如果只是需要跟随主题，优先写 CSS 变量或 Tailwind 的 `primary-*`：

```vue
<button class="bg-primary-500 hover:bg-primary-600 text-white">
  保存
</button>

<style scoped>
.panel {
  background: var(--bag-color-surface);
  color: var(--bag-color-text);
  border: 1px solid var(--bag-color-border);
}
</style>
```

## 设置页接入

系统设置页不要直接读写 `localStorage`，也不要自己维护一份主题色列表。复用宿主 store 就行：

```ts
import { themePresets, useAppConfigStore } from 'vue-bag-admin'

const appConfigStore = useAppConfigStore()

const changeThemeColor = (color: string) => {
  appConfigStore.setThemeColor(color)
}

const openAppearanceCenter = () => {
  appConfigStore.openSettingsDrawer()
}
```

`bag-theme-color-change` 和 `bag-open-settings-drawer` 事件仍然保留，用来兼容旧页面；新代码优先使用 store。

## 自定义设置抽屉

`HostApp` 默认挂载内置外观配置抽屉。只有需要完全自定义时，才传 `#settings`：

```vue
<template>
  <HostApp>
    <template #settings>
      <MySettingsDrawer />
    </template>
  </HostApp>
</template>
```

传入 `#settings` 后，宿主会跳过内置抽屉，避免重复渲染两套设置面板。
