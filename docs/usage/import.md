# 自动导入

```bash
pnpm i unplugin-auto-import -D
```

## vite.config.js

```javascript
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                // 需要自动导入的插件，自定义导入的API
                'vue',
                'vue-router',
                'pinia'
            ]
        })
    ]
})
```

## 使用
无需手动 import 相关 API
```vue

<script setup lang="ts">
const count = ref(0)
const router = useRouter()
router.push('/dashboard')
</script>
```
