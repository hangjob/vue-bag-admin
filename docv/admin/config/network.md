# 网络请求

## 全局配置

> 更多参数配置请看`默认配置`

```typescript
import install, {$optionsType} from 'vue-bag-admin'

const $options: $optionsType = {
    config: {
        httpNetwork: {
            baseURL: '/customApi',
            retryDelay: 5000,
            whiteList: ['/customTest'],
            ...
        },
    },
}
createApp(App).use(install, $options).mount('#app')
```

## 请求配置

> axios是先寻找全局的defaults配置，然后在找实列化的配置，在找请求配置，依次按顺序执行进行合并，后面的会覆盖前面的

### post请求

```typescript
import {$axios} from 'vue-bag-admin'

const apiAppRouter = (params?: object) => {
    return $axios.post('/menu/all', params, {
        relink: true, baseURL: '/customApi', headers: {
            'content-type': 'application/json;charset=UTF-8',
        }
    })
}
```

### get请求

```typescript
import {$axios} from 'vue-bag-admin'

const apiAppRouter = (params?: object) => {
    return $axios.get('/menu/all', params, {relink: true, baseURL: '/customApi'})
}
```

### upload文件上传

```typescript
import {$axios} from 'vue-bag-admin'

const apiAppRouter = (file: File) => {
    return $axios.upload('/menu/all', file)
}
```

### download文件下载

```typescript
import {$axios} from 'vue-bag-admin'

const apiAppRouter = (params?: object) => {
    return $axios.download('/menu/all', params, {retry: 10, baseURL: '/customApi'})
}
```

## 重写请求实列

一般情况下不推荐重写

```typescript
import {$axios} from 'vue-bag-admin'

// 请求拦截
$axios.http.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (err: any) => {
    return Promise.reject(err)
})

// 响应拦截
$axios.http.interceptors.response.use((res: AxiosResponse<any>) => {
    return res
}, async (err: AxiosError) => {
    return Promise.reject(err)
})
```
