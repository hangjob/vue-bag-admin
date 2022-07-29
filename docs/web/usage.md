### 应用
```ts
import {createApp} from 'vue'
import App from './App.vue'
import install from "vue-bag-admin/lib-web"
import 'vue-bag-admin/lib-web/style.min.css'
import 'vue-bag-admin/mock/web'

app.use(install).mount('#app')
```

### 参数配置
```ts
import install, {$optionsType} from 'vue-bag-admin/lib-web';

const $options: $optionsType = {
    router: [],
    config: {
        httpNetwork:{}, //见参数介绍
    },
}
createApp(App).use(install, $options)
```
