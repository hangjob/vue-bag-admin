# 图标

包含 vicons（vue3），ricons（react），sicons（svg）和 v2icons(vue2)。

整合自 fluentui-system-icons、ionicons、ant-design-icons、material-design-icons、Font-Awesome tabler-icons 和 carbon 的 SVG
Vue/React 组件。

同时 xicons 提供了一些图标工具组件来自定义图标的颜色和尺寸

## 图标预览 & 查询

[https://www.xicons.org](https://www.xicons.org)

```shell
# 安装你需要的包
# 适用于 react
npm i -D @ricons/fluent
npm i -D @ricons/ionicons4
npm i -D @ricons/ionicons5
npm i -D @ricons/antd
npm i -D @ricons/material
npm i -D @ricons/fa # font awesome
npm i -D @ricons/tabler
npm i -D @ricons/carbon
# 适用于 vue3
npm i -D @vicons/fluent
npm i -D @vicons/ionicons4 
npm i -D @vicons/ionicons5 # 框架已内置
npm i -D @vicons/antd # 框架已内置
npm i -D @vicons/material
npm i -D @vicons/fa # font awesome
npm i -D @vicons/tabler
npm i -D @vicons/carbon
# 适用于 vue2
npm i -D @v2icons/fluent
npm i -D @v2icons/ionicons4
npm i -D @v2icons/ionicons5
npm i -D @v2icons/antd
npm i -D @v2icons/material
npm i -D @v2icons/fa # font awesome
npm i -D @v2icons/tabler
npm i -D @v2icons/carbon

# 使用 SVG
npm i -D @sicons/fluent
npm i -D @sicons/ionicons4
npm i -D @sicons/ionicons5
npm i -D @sicons/antd
npm i -D @sicons/material
npm i -D @sicons/fa # font awesome
npm i -D @sicons/tabler
npm i -D @sicons/carbon
```

## 使用 Vue3

```html

<script>
    import {Money16Regular} from '@vicons/fluent'
    // or
    import Money16Regular from '@vicons/fluent/Money16Regular'

    // 你可以直接使用渲染为 SVG 的组件
    // 或者把它包裹在 @vicons/utils 提供的 Icon 组件中

    import {Icon} from '@vicons/utils'

    export default {
        components: {
            Icon,
            Money16Regular
        }
    }
</script>

<template>
    <Icon>
        <Money16Regular/>
    </Icon>
</template>
```
