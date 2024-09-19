# 多语言插件
```javascript
import {createI18n, useI18n} from "vue-i18n";
import zh from "./locales/zh.js"
import en from "./locales/en.js"

const locales = {zh, en}

const setupI18n = (ctx, options) => {
    const i18n = createI18n({
        legacy: false,
        locale: ctx.pina.state.value?.global?.configs?.language, // 通过pinia获取当前语言
        fallbackLocale: 'en',
        messages: ctx.helpers.deepMergeObject(locales, options?.messages), // 合并传入的数据
        globalInjection: true, // 可以在template模板中使用$t
        ...options
    })
    ctx.i18n = i18n
    ctx.i18n.useI18n = useI18n;
    ctx.app.use(i18n)
}

export default setupI18n
```

## 使用

```javascript
import install from "vue-bag-admin"
const {app, framework, plugins} = install()
framework.use(plugins.useLanguagePlugin,{
    zh:{
        title:'羊先生' // 覆盖默认语言
    },
    en:{
        title:'Mr. Sheep', // 覆盖默认语言
    },
    ko:{ // 添加新的语言
        
    }
})
app.mount('#app')

```
