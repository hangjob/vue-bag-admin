<template>
    <a-config-provider :locale="compData.locale">
        <router-view></router-view>
    </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { ConfigProvider } from 'ant-design-vue'
dayjs.locale('zh-cn')
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        const compData = reactive({
            locale: zhCN,
        })
        return {
            compData,
        }
    },
})



</script>
