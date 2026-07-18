# **PROJECT_NAME**

这是一个通过 `create-vue-bag-admin --template with-demo-plugins` 生成的后台宿主项目。

## 启动

```bash
pnpm install
pnpm dev
```

## 默认登录账号

- 用户名：`admin`
- 密码：`123456`

## 这个模板和 basic 的区别

- 直接接入官方示例插件包
- 默认就是仓库里的完整 admin 宿主形态
- 内置设置抽屉、个人中心和宿主字典示例
- 适合直接作为“可运行的后台模板”继续扩展

## 当前结构

- `src/routes.ts`: 宿主基础路由与个人中心页
- `src/components/AppSettingsDrawer.vue`: 右侧设置抽屉
- `src/dictionaries/index.ts`: 宿主内置字典注册
- `@bag/plugin-shop`: 商城业务示例插件
- `@bag/plugin-sys-setting`: 系统设置示例插件
- `src/views/*`: 宿主基础页面

如果你准备接自己的业务模块，可以先保留官方插件跑通宿主，再逐步替换成自己的插件包。
