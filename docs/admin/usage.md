### 应用

```ts
import {createApp} from 'vue'
import install from 'vue-bag-admin';
import App from './App.vue'
import 'vue-bag-admin/mock/admin' // 如果后台服务,不用此mock数据

createApp(App).use(install)
```

### 参数配置

```ts
import install, {$optionsType} from 'vue-bag-admin';

const $options: $optionsType = {
    router: {},//见参数介绍
    store: {},//见参数介绍
    config: {
        themeConfig:{},
        httpNetwork:{},
        webSite:{}
    },//见参数介绍
}
createApp(App).use(install, $options)
```
