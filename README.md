# vue-vite-admin-ts

🎉 Vue3+Vite2.6+TypeScript+ant-design-vue构建，提供基础的框架，快速搭建企业级中后台产品，响应式管理后台系统


### 快速预览

![vue-vite-admin-ts](https://s4.ax1x.com/2021/12/24/TYAcLT.jpg)

### 项目地址

[Github](https://github.com/hangjob/vue-vite-admin-ts)

[演示地址](https://hangjob.github.io/vue-vite-admin-ts/dist/lib.html)

[文档地址](https://hangjob.github.io/docs/#/vue-vite-admin-ts/)

## 使用项目

```bash
# 克隆项目
git clone https://github.com/hangjob/vue-vite-admin-ts.git
```

### 安装依赖

> node.js版本需要大于12，vite的编译环境是12以上的版本

```bash
npm i
```

### 启动应用

```bash
npm run dev
```

### 发布

```bash
npm run build
```

### 其他

```bash
# eslint代码格式检查
npm run lint 
# eslint自动修复代码
npm run lint:fix
```

> eslint 已做过滤，只会对package文件中代码做检查

### 默认应用文件

默认拉取项目完成后，目录下会包含两个入口文件

```js
// vite.config.ts
build.rollupOptions = {
    input: {
        example: path.resolve(__dirname, 'index.html'),
        lib: path.resolve(__dirname, 'lib.html')
    }
}
```

在这里的，我个人认为，建议vite把key(example、lib)可也阔以映射成页面路径，从而可以指向共同的页面，然后在不同的引入main.ts

> 该项目是多页面应用文件，默认打开的是index.html，另外个是lib.html

比如：启动完成之后

http://localhost:8290 === http://localhost:8290/index.html

http://localhost:8290/lib.html
> 注意：http://localhost:8290 这样访问需要提供后端服务才能打开

🙂

> http://localhost:8290/lib.html 不需要后端服务也能打开

### 已完成的功能

已完成功能

✅ 使用Vue 3

✅ 使用Vuex 4.x

✅ 使用Vue-router 4.x

✅ 基于Vite 2.6

✅ 基于Ant Design Vue

✅ 整体框架响应式布局

✅ 项目切换

✅ 用户登录拦截，用户退出

✅ 面包屑导航 + 多种布局效果

✅ 基于后台权限,按钮权限设计

✅ 菜单导航 + 多种布局

✅ 内置iconfont字体图标，自动生成组件

✅ 基于axios封装post，get，all，upload，download

✅ http错误重连

✅ 组件权限指令封装

✅ tsx构建全局组件

✅ http网络组件(vue3新特性)

✅ 菜单管理，包含增、删、改、查，菜单是缓存、是否固定、是否隐藏(但展示)、是否隐藏等待 具体功能,查看文档

✅ 包含富文本编辑器，文件打印，图表预览，动画组件，状态详情组件等等

✅ 支持多页面应用

✅ 支持iframe内嵌

✅ 页面刷新

✅ 页面全屏

✅ 右键菜单封装

✅ 滚动条优化

✅ 骨架屏组件预览

✅ 基于封装loadsh深层遍历、查找、无规律查找

✅ 基于mitt全局通信

✅ 基于vxe-table解决万量级表格渲染

✅ Mock数据

✅ Egg.js后端服务，具体操作看文档

✅ sequelize模型增删改查

✅ Eslint代码检查

✅ 开发编辑器全局配置

✅ 打包压缩处理Gzip

### 待完成

✖️ 主题切换

✖️ 中/英文切换

✖️ iframe缓存

### 项目结构

example目录公用packages依赖包，这种设计对于多种不同项目，它们有相同的部分，又有不同的部分，制定自己独立的stroe，路由等等

```
├── egg                                      // 后台服务
├── mock                                     // 测试数据
├── public                                   // 公共资源
├── src                                      // 源码目录
|────packages                                // 应用主资源
     |──assets                               // 图片等资源
     |──base                                 // 基础配置
     |──common                               // 处理公共函数
     |──components                           // 全局组件
     |──config                               // 配置入口
     |──extend                               // 扩展目录
     |──hook                                 // 放置钩子函数
     |──http                                 // 网络请求
     |──layout                               // 布局
     |──plugin                               // 插件
     |──router                               // 路由
     |──service                              // 请求接口
     |──store                                // 数据存储
     |──style                                // 样式入口
     |──theme                                // 主题 
     |──utils                                // 公共工具方法
     |──views                                // 页面组件
     |──install.ts                           // 应用入口文件 
     |──App.vue                              // 入口组件 
     |──main.ts                              // 默认应用文件(lib.html)
|────example1                                // 使用例子 - 可以设置多个
     |──store                                // 数据存储
     |──views                                // 页面组件
     |──App.vue                              // 入口组件 
     |──main.ts                              // 默认应用文件(index.html)
|────example2                                // 使用例子 -- 可以设置多个
     |──store                                // 数据存储
     |──views                                // 页面组件
     |──App.vue                              // 入口组件 
     |──main.ts                              // 默认应用文件(index.html) 
|────example3                                // 使用例子 -- ...
     |──store                                // 数据存储
     |──views                                // 页面组件
     |──App.vue                              // 入口组件 
     |──main.ts                              // 默认应用文件(index.html)          
├── typings                                  // 在ts中添加全局变量
├── .env.lib                                 // 构建lib包
├── .env.production                          // 构建build包
├── jsconfig.json                            // JavaScript配置
├── tsconfig.json                            // typescript配置
|── vite.config.ts                           // vite配置
|── lib.html                                 // lib.html
|── index.html                               // index.html
```


#### 建议

需要更多功能或者建议[issues](https://github.com/hangjob/vue-vite-admin-ts/issues)



### 使用

此项目开源可免费用于商业用途
