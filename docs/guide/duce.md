# Bag-admin

::: tip ⭐⭐⭐⭐⭐

快速开发后中后台系统，提供基础的核心框架，你可以将它应用在任何需要中后台的应用，旨在让开发者能够以最小的成本完成开发，降低开发量
:::

## 主要功能

- 使用Vite4.x构建
- 路由动画加载
- 内置富文本编辑器和MarkDown编辑器
- 支持中英文切换
- 支持全屏预览
- 5000+图标库选择
- 模拟数据
- 网络配置
- 请求拦截
- 失败重连
- 路由按钮权限
- 网页水印
- 字符拼音
- 敏感词管理
- 图像裁剪
- 二维码生产器
- 瀑布流图片
- 模板打印
- 表单设计器
- 大文件上传
- Pinia状态管理
- 路由配置
- 全局配置
- UI风格布局切换
- 灰色模式
- 色弱模式
- 标签持久化
- 权限拦截
- 多页面模式
- 动态路由注入
- ......

## 目录结构

```
├─ config   配置
├─ mock     模拟数据
├─ public   html
├─ src      源码
│  ├─ app   应用目录(或者子目录)
│  │  ├─ admin  管理应用
│  │  │  ├─ App.vue
│  │  │  ├─ index.html
│  │  │  ├─ main.ts 入口
│  │  │  ├─ ...
│  │  ├─ web    管理应用
│  │  │  ├─ ...
│  │  ├─ App.vue
│  │  ├─ index.html
│  │  ├─ main.ts    入口
│  ├─ packages  基础框架
│  │  ├─ api    请求api映射
│  │  ├─ aseets 资源文件
│  │  ├─ components 全局组件
│  │  ├─ config 基础配置
│  │  ├─ global 全局函数或属性
│  │  ├─ http   请求封装
│  │  ├─ layout 布局
│  │  ├─ pinia  状态管理
│  │  ├─ router 路由
│  │  ├─ style  样式
│  │  ├─ type   在ts模式下
│  │  ├─ utils  工具库
│  │  ├─ view   路由页面
│  ├─ install.vue   库模式入口
├─ .editorconfig    编辑器统一风格配置
├─ .eslintrc.cjs    eslint配置
├─ .gitattributes   git配置
├─ .gitignore   git过滤
├─ .npmignore   npm过滤
├─ .package.json    依赖
├─ tsconfig.json    ts配置
├─ vite.config.ts   
├─ README.md
```

如果你需要一个多应用的项目架构，目录结构可以参考上面的结构进行调整

## 兼容环境

> 不兼容IE系列浏览器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE No + YES                                                                                                                                                                                                     | YES                                                                                                                                                                                                               | YES                                                                                                                                                                                                           | YES                                                                                                                                                                                                           | YES                                                                                                                                                                                                                           | YES                                                                                                                                                                                                                                 | YES                                                                                                                                                                                                       |

## 配置文件

```shell
.env                # 所有情况下都会加载
.env.development    # 开发陌生 vite
.env.production     # 打包模式 vite build
.env.lib            # 包模式  vite build --mode lib 
```

## 历史版本

| 版本    | Node | Vite  |  Vue  | 状态管理  |      UI库       |  大小   |  备注  |
|:------|:----:|:-----:|:-----:|:-----:|:--------------:|:-----:|:----:|
| v4(新) | 18.x | 4.4.x | 3.3.x | pinia |    Naive Ui    | 480kb | 重构框架:100: |
| v3    | 16.x | 3.1.x | 3.2.x | pinia | ant-design-vue | 2.25M | 升级框架✋ |
| v2    | 12.x | 2.6.x | 3.2.x | Vuex  | ant-design-vue | 2.14M | 升级框架✋ |
| v1    | 12.x | 2.6.x | 3.1.x | Vuex  | ant-design-vue | 1.18M |    ✋  |

::: tip 联系作者

使用过程中发现任何问题都可以[留言我](tencent://message/?uin=470193837)
，或者你想有什么样功能，也可以[联系我](tencent://message/?uin=470193837)
，然后根据需求反馈到你
:::

## 数据服务

为了在vue-bag-admin框架更好的模拟服务

```
1.采用了mock.js模拟本项目数据
2.Egg.js、Mysql开发了一套后台应用程序(暂停维护)
```

## 版权信息

::: tip
开源可免费用于商业用途，如果方便就留个 Star 吧
:::
