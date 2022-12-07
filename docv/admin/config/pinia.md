# 状态管理

> 在数据状态管理，选择Pinia，创造者已经说过，Pinia的目的不是要取代Vuex，而是平滑的渡过Vuex，Vuex最终设计目标也是像Pinia在靠拢

## Pinia 核心特性

- Pinia 没有 Mutations
- Actions 支持同步和异步
- 没有模块的嵌套结构
- Pinia 通过设计提供扁平结构，就是说每个 store 都是互相独立的，谁也不属于谁，也就是扁平化了，更好的代码分割且没有命名空间。当然你也可以通过在一个模块中导入另一个模块来隐式嵌套 store，甚至可以拥有 store
  的循环依赖关系

### 自定义状态

```typescript
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
const appStore = useCounterStore()
appStore.increment()
appStore.count++;
```

## 获取系统状态管理

> 系统内置两个对象`app`,`user`

```typescript
import {$pinia} from 'vue-bag-admin'

const appStore = $pinia.app()
```

#### app

```typescript
state: () => {
    return {
        configApp: {
            httpNetwork: {},
            themeConfig: {},
            webSite: {},
        },
        configAppRouter: {}, // 路由信息
        configAppComps: {}, // 传递的组局
        configAppApis: {}, // 覆盖api
        httpSourceMenus: [], // http 菜单源数据
        sourceMenus: [], // http + 本地 菜单源数据
        menus: [], // 菜单
        prjMenu: [], // 项目切换菜单
        tabs: [], // tab切换栏
        tabPaths: [], // 路由路径
        currentRouter: {}, // 当前路由信息
        browser: {}, // 浏览器信息
    }
}

const appStore = $pinia.app()
// 获取菜单
console.log(appStore.menus)
```

#### user

```typescript
state: () => {
    return {
        userInfo: {},
        siteInfo: {},
    }
}
const userStore = $pinia.user()
// 获取用户信息
console.log(userStore.userInfo)
```
