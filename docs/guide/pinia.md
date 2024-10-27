# Pinia状态管理

框架内置`pinia`状态管理库,`pinia-plugin-persistedstate`
以及持久化存储插件，具体用法[pinia官网](https://pinia.vuejs.org/zh/core-concepts/)

::: tip

在框架内部已经把当前pinia的store挂载到全局上，所在模板上可以直接使用`$globalStore`访问到

app.config.globalProperties.$globalStore = window.$globalStore = useGlobalStore()
:::

## 定义 Store

```javascript
import {defineStore} from 'vue-bag-admin/pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({count: 0, name: 'Eduardo'}),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
    // 持久化存储
    persist: {
        key: 'pinia', //存储名称
        storage: localStorage, // 存储方式
        //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
        paths: ['count'],
    },
})
```

::: tip 小技巧
如果想在页面刷新的时候就有效，需要在`main.js`中引入执行`useCounterStore()`
:::

## 使用 Store

```vue

<script setup>
import {useCounterStore} from '@/stores/counter'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()
</script>
```

## 通过映射辅助函数来使用 Pinia

```vue {8-10}

<script setup>
import {useCounterStore} from '@/stores/counter'
import {computed} from 'vue'

const store = useCounterStore()
// ❌ 这将不起作用，因为它破坏了响应性
// 这就和直接解构 `props` 一样
const {name, doubleCount} = store
name // 将始终是 "Eduardo"
doubleCount // 将始终是 0
setTimeout(() => {
    store.increment()
}, 1000)
// ✅ 这样写是响应式的
// 💡 当然你也可以直接使用 `store.doubleCount`
const doubleValue = computed(() => store.doubleCount)
</script>
```

## 从 Store 解构

```vue

<script setup>
import {storeToRefs} from 'pinia'

const store = useCounterStore()
// `name` 和 `doubleCount` 是响应式的 ref
// 同时通过插件添加的属性也会被提取为 ref
// 并且会跳过所有的 action 或非响应式 (不是 ref 或 reactive) 的属性
const {name, doubleCount} = storeToRefs(store)
// 作为 action 的 increment 可以直接解构
const {increment} = store
</script>
```
