# 环境准备

## Node安装

**下载版本管理工具**
在这里我推荐使用nvm来安装node.js，nvm是node.js版本管理工具，可以安装不同版本的node.js，并且可以切换不同版本的node.js，[下载nvm](https://github.com/coreybutler/nvm-windows#readme)

**切换镜像源地址**
安装完成后，执行以下命令，切换镜像源地址

```bash [NPM]
# 阿里云镜像
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```

**安装Node**
安装适合的版本Node，这里显示近期更新的版本

```bash [NPM]
nvm ls available
nvm install 20.17.0  # 安装20.17.0版本的nodejs
nvm use 20.17.0   # 使用20.17.0版本的nodejs
node -v # 20.17.0 说明安装成功
```

::: info 推荐一个可视化管理Node版本工具
安装nvm-windows，可以方便的管理node版本[下载可视化管理Node版本工具](https://github.com/1111mp/nvm-desktop/releases)
:::

## 搭建第一个 Vite 项目

::: tip 兼容性注意

Vite 需要 Node.js 版本 18+ 或 20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的
Node 版本。

:::

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

::: code-group

```bash [NPM]
# npm 7+，需要添加额外的 --：
npm create vite@latest my-vue-app -- --template vue
```

```bash [Yarn]
yarn create vite my-vue-app --template vue
```

```bash [PNPM]
pnpm create vite my-vue-app --template vue
```

```bash [Bun]
bun create vite my-vue-app --template vue
```
:::

#### index.html 与项目根目录

你可能已经注意到，在一个 Vite 项目中，`index.html` 在项目最外层而不是在 `public` 文件夹内。这是有意而为之的：在开发期间 Vite
是一个服务器，而 `index.html` 是该 Vite 项目的入口文件。

Vite 将 `index.html` 视为源码和模块图的一部分。Vite 解析 `<script type="module" src="...">` ，这个标签指向你的 JavaScript
源码。甚至内联引入 JavaScript 的 `<script type="module">` 和引用 CSS 的 `<link href>` 也能利用 Vite
特有的功能被解析。另外，`index.html` 中的 URL 将被自动转换，因此不再需要 `%PUBLIC_URL%` 占位符了。

#### 命令行界面

在安装了 Vite 的项目中，可以在 npm scripts 中使用 `vite` 可执行文件，或者直接使用 `npx vite` 运行它。下面是通过脚手架创建的
Vite 项目中默认的 npm scripts：

```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    }
}
```
