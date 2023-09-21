# Pinia

[Pinia 是 Vue 的专属状态管理库](https://pinia.vuejs.org/zh/getting-started.html)，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：

- Devtools 支持
- 追踪 actions、mutations 的时间线
- 在组件中展示它们所用到的 Store
- 让调试更容易的 Time travel
- 热更新
- 不必重载页面即可修改 Store
- 开发时可保持当前的 State
- 插件：可通过插件扩展 Pinia 功能
- 为 JS 开发者提供适当的 TypeScript 支持以及自动补全功能。
- 支持服务端渲染

## 对比 Vuex


Pinia 起源于一次探索 Vuex 下一个迭代的实验，因此结合了 Vuex 5 核心团队讨论中的许多想法。最后，我们意识到 Pinia 已经实现了我们在
Vuex 5 中想要的大部分功能，所以决定将其作为新的推荐方案来代替 Vuex。

与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript
一起使用时有非常可靠的类型推断支持。

## 安装
```shell
yarn add pinia
# 或者使用 npm
npm install pinia
```

## 使用
```javascript
import {createApp} from "vue"
import {createPinia} from "pinia"
import App from "./App.vue"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount("#app")
```
