# 图标插件

这里可以使用图标插件，图标插件会自动将图标注册到全局，可以直接使用。

```javascript
import install from "vue-bag-admin"
import * as icons from '@vicons/ionicons5'
import {BehanceOutlined, ReadOutlined} from "@vicons/antd"

const {plugins} = install()
framework.use(plugins.useIconPlugin, {
    icons: {
        BehanceOutlined,
        ReadOutlined,
        ...icons
    }
})
```
