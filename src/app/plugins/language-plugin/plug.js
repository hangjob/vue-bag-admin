import {createI18n, useI18n} from "vue-i18n";
import zh from "./locales/zh.js"
import en from "./locales/en.js"

const locales = {zh, en}

const setupI18n = (ctx) => {
    const i18n = createI18n({
        legacy: false,
        locale: ctx.pina.state.value.global.configs.language,
        fallbackLocale: 'en',
        messages: locales,
        globalInjection: true, // 可以在template模板中使用$t
    })
    ctx.i18n = i18n
    ctx.i18n.useI18n = useI18n;
    ctx.app.use(i18n)
}

export default setupI18n