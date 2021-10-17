# Vue 3 + Typescript + Vite 后台管理系统

## 问题

### __dirname 、path 内置模糊在ts中找不到

> 解决：npm install --save-dev @types/node 安装即可

#### 别名`@`按住ctrl不跳转

> 解决：添加tsconfig.json，按照我的给出的实列，不要使用官方的

### router-view
```vue
<router-view class="router-view" v-slot="{ Component }">
    <transition :name="transitionName">
        <component :is="Component" />
    </transition>
</router-view>
```