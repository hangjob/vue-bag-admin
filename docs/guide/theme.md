# 主题设置

## Naive UI 主题色

无论是默认的亮色主题(lightTheme)，还是修改后的暗色主题(darkTheme)，亦或我们通过调整得到的自定义主题，在该主题生效范围内的组件中都可以通过
[useThemeVars ](https://www.naiveui.com/zh-CN/os-theme/docs/theme#use-theme-vars) 来获取主题变量。

### 设置主题

在框架内部已经注册了设置主题的方法，可以直接使用

> 在传入的颜色中，框架使用了`@ant-design/colors`
>
的工具方法，可以根据传入主题色生成一套颜色，详细使用方法请参考[在线演示主题颜色切换](https://github.liubing.me/naive-ui-change-theme/)

```javascript
$global.helpers.cutColorTheme($global, '#0094FF')
```

## 自定义颜色

颜色变量值可以通过[useThemeVars ](https://www.naiveui.com/zh-CN/os-theme/docs/theme#use-theme-vars) 来获取主题变量

```javascript
$global.helpers.cutColorTheme($global, '#0094FF', {
    common: {
        "lineHeight": "1.6",
        "heightMini": "16px",
        "heightMedium": "34px",
        "heightLarge": "40px",
        "heightHuge": "46px",
        "baseColor": "#FFF",
        "primaryColor": "#18a058",
        "primaryColorHover": "#36ad6a",
        "primaryColorPressed": "#0c7a43",
        "primaryColorSuppl": "#36ad6a",
        "infoColor": "#2080f0",
        "infoColorHover": "#4098fc",
        "infoColorPressed": "#1060c9",
        "infoColorSuppl": "#4098fc",
        // ... 更多变量参考官方文档提供的变量的值
    },
    Button: {
        "primaryColor": "#18a058",
    },
    Menu: {
        "primaryColor": "#18a058",
    }
})
```

### 默认数据

```json
{
    collapsedWidth: 80,
    // 折叠宽度
    collapsedIconSize: 22,
    // 折叠图标大小
    mobileMenuDrawer: 240,
    // 移动菜单抽屉宽度
    menuDrawer: 240,
    // 菜单抽屉宽度
    layoutSiderWidth: 240,
    // 左侧宽度
    isMenuCollapsed: false,
    // 是否折叠
    mobileMenuVisible: false,
    // 是否隐藏菜单
    isTopColor: false,
    // 顶部栏颜色
    isDarkMode: false,
    // 暗黑模式
    isTabar: true,
    // 标签是否显示
    isBreadcrumb: true,
    // 是否展示面包屑
    isBreadcrumbIcon: true,
    // 是否显示面包屑图标
    isDataPersistence: false,
    // 标签是否持久化
    isSubmenu: true,
    // 是否展示应用分类子菜单
    isDocking: true,
    // 模块坞
    isFooter: true,
    // 是否显示底部
    isWatermark: false,
    // 是否水印
    watermark: 'vue-bag-admin',
    // 水印文字
    layoutName: 'default',
    // 主题名称 default lessen spillover
    tabStyle: 'button',
    // 标签风格 button card
    formStyle: 'drawer',
    // 表单风格 drawer dialogue
    language: 'zh',
    // 语言
}
```

```javascript
import install from "vue-bag-admin"

const {app, framework, plugins, pina} = install()
pina.state.value.global.configs.isFooter = false // 修改状态的值
pina.state.value.global.configs.isBreadcrumb = false  // 修改状态的值
```
