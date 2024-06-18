import {dateZhCN, zhCN} from 'naive-ui'
import {createI18n} from "vue-i18n";
import zh from "./zh.js"
import en from "./en.js"

const locales = {
    zh: {
        locale: zhCN,
        dateLocale: dateZhCN,
        ...zh
    },
    en: {
        locale: ref(null),
        dateLocale: ref(null),
        ...en
    }
}


const setupI18n = {
    install(app, {messages} = {}) {
        app.use(createI18n({
            legacy: false,
            locale: navigator.language.includes("zh") ? 'zh' : 'en',
            fallbackLocale: 'zh',
            messages: Object.assign(locales, messages),
            globalInjection: true, // 可以在template模板中使用$t
        }))
    }
}

export default locales
export {
    setupI18n
}
