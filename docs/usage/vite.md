# Vite插件

## 调试插件

```bash
pnpm install vite-plugin-vue-devtools -D
```

```javascript
import {defineConfig} from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [
        VueDevTools(),
        vue(),
    ],
})
```

## 打包分析插件

```bash
pnpm install vite-bundle-analyzer -D
```

```javascript
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
    plugins: [
        vue(),
        analyzer(),
    ],
});
```
