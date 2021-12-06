# vue-vite-admin-ts

使用的vue3+vite2.6+typescript4.0构建的管理系统

使用构建依赖包的形式，开发只需引入依赖即可，具体[文档请查看](https://hangjob.github.io/docs/#/vue-vite-admin-ts/)

### 项目地址

[Github](https://github.com/hangjob/vue-vite-admin-ts)

### 安装依赖

!>node.js版本需要大于12，vite的编译环境是12以上的版本

```bash
npm i
```

#### 启动应用

```bash
npm run serve
```

### 默认应用文件

默认拉取项目完成后，目录下会包含两个入口文件

```js
// vite.config.ts
build.rollupOptions = {
    input: {
        web: path.resolve(__dirname, 'index.html'),
        lib: path.resolve(__dirname, 'lib.html')
    }
}
```

在这里的，我个人认为，建议vite把key(web、lib)可也阔以映射成页面路径，从而可以指向共同的页面，然后在不同的引入main.ts

> 该项目是多页面应用文件，默认打开的是index.html，另外个是lib.html

比如：启动完成之后

http://localhost:8290 === http://localhost:8290/index.html

http://localhost:8290/lib.html

!>注意：http://localhost:8290 这样访问需要提供后端服务才能打开

🙂

>http://localhost:8290/lib.html 不需要后端服务也能打开

### 项目结构

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
|────example                                 // 使用例子
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

## 问题

### __dirname 、path 内置模糊在ts中找不到

> 解决：npm install --save-dev @types/node 安装即可

#### 别名`@`按住ctrl不跳转

> 解决：添加tsconfig.json，按照我的给出的实列，不要使用官方的
