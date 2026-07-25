# 调试与发布

本地业务插件可以直接跟随宿主开发。只有插件需要跨项目复用或独立升级时，才需要建立 npm 包、构建产物和发布流程。

## 本地插件调试

项目内部插件建议放在：

```text
src/
├── plugins/
│   └── report.ts
└── views/
    ├── ReportList.vue
    └── ReportDetail.vue
```

在 `main.ts` 中直接导入：

```ts
import reportPlugin from './plugins/report'

await bootstrapPlugins({
  app,
  router,
  i18n,
  plugins: [reportPlugin]
})
```

这种方式不需要单独构建插件，Vite 会和宿主一起处理热更新。

## 独立包结构

准备发布时，可以迁移到：

```text
packages/plugin-report/
├── src/
│   ├── index.ts
│   └── views/
├── package.json
├── tsconfig.build.json
└── vite.config.mjs
```

`src/index.ts` 默认导出一个 `AdminPlugin`。

## package.json

```json
{
  "name": "@company/plugin-report",
  "version": "0.1.0",
  "type": "module",
  "files": ["dist", "README.md"],
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "sideEffects": false,
  "scripts": {
    "build": "vite build && vue-tsc -p tsconfig.build.json",
    "check-types": "vue-tsc -p tsconfig.build.json --noEmit"
  },
  "peerDependencies": {
    "vue": "^3.5.0",
    "vue-router": "^4.4.0",
    "vue-i18n": "^10.0.0",
    "vue-bag-admin": "^6.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.0",
    "typescript": "^5.9.0",
    "vite": "^6.0.0",
    "vue": "^3.5.0",
    "vue-bag-admin": "workspace:*",
    "vue-tsc": "^2.1.0"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

注意：

- `peerDependencies` 声明由宿主提供的运行时依赖。
- `devDependencies` 中的 `workspace:*` 只用于 Monorepo 开发。
- 对外入口统一指向 `dist`，不要导出工作区源码。
- 插件使用 Naive UI 等库时，也应根据实际 import 补充 peer dependency。

## Vite 构建

`vite.config.mjs`：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve('src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'vue-i18n', 'vue-bag-admin']
    }
  }
})
```

把宿主依赖放进 `external`，可以避免插件产物打包另一份 Vue 或插件运行时。

## 类型构建

`tsconfig.build.json`：

```json
{
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationDir": "./dist",
    "rootDir": "./src",
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "src/**/*.vue"]
}
```

## 构建检查

```bash
pnpm --dir packages/plugin-report check-types
pnpm --dir packages/plugin-report build
```

构建后至少检查：

```text
dist/index.js
dist/index.d.ts
```

如果插件产生独立 CSS，还需要在 `exports` 中公开样式入口，并在宿主中显式导入。

## 外部项目联调

先构建插件，再在使用方 `package.json` 使用本地链接：

```json
{
  "dependencies": {
    "@company/plugin-report": "link:../vue-bag-admin/packages/plugin-report"
  }
}
```

然后安装并启动：

```bash
pnpm install
pnpm dev
```

插件源码变化后，需要重新执行插件构建。使用方消费的是 `dist`，不会自动读取 `src`。

联调时，宿主和插件应从同一个 `vue-bag-admin` 运行时实例导入 API，避免 `listRuntimePlugins()` 读取到另一份模块状态。

## 打包验证

```bash
pnpm --dir packages/plugin-report pack
```

检查生成的 `.tgz` 中是否只包含需要发布的文件。

可以在一个临时宿主中安装该压缩包：

```bash
pnpm add ../vue-bag-admin/packages/plugin-report/company-plugin-report-0.1.0.tgz
```

重点验证：

- 插件可以正常 import。
- 路由、菜单和语言包可以注册。
- 类型声明能够被编辑器识别。
- 没有重复安装 Vue。
- 生产构建可以完成。

## 发布预演

```bash
npm publish ./packages/plugin-report --access public --dry-run
```

确认包内容、名称、版本和依赖后再正式发布：

```bash
npm publish ./packages/plugin-report --access public
```

正式发布前应更新版本，并确保包名对应的 npm scope 有发布权限。

## 发布检查清单

- 插件 ID、路由名、路径和菜单路径没有冲突。
- `vue-bag-admin` 版本范围与实际 API 兼容。
- `workspace:*` 没有出现在对外运行依赖中。
- `dist` 同时包含 JavaScript 和类型声明。
- README 说明了安装、挂载、权限和配置要求。
- 在全新宿主中完成一次安装验证。
- 先执行 `npm publish --dry-run`。

## 继续阅读

- [AdminPlugin 配置](./admin-plugin.md)
- [生命周期与依赖](./lifecycle-and-dependencies.md)
- [官方插件](../official-plugins/index.md)
