### 具体用法

```js
import store from '@/example/store/index'
import install from '@/packages/install'
const $options = {
    store: {
        module: store,
    },
}
app.use(install, $options).mount('#app')
```


#### module

```ts
import app from '@/example/store/app'
import table from '@/example/store/table'

const store: any = {
    webApp:app,
    webTable:table
}

export default store
```

!>保留命名空间关键字`app`，`user`
