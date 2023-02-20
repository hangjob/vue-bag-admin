<template>
    <bag-view>
        <a-result status="404" title="抱歉" sub-title="对不起，您访问的页面不存在.">
            <template #extra>
                <a-space>
                    <a-button type="primary" @click="hanleBack">返回首页</a-button>
                </a-space>
            </template>
        </a-result>
    </bag-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import appPinia from '@/packages/pinia/app'
import { utils } from 'pm-utils'

export default defineComponent({
    setup() {
        const router = useRouter()
        const appStore = appPinia()
        const hanleBack = () => {
            if (utils.dataType(appStore.configAppFuns.backCallback) === 'function') {
                appStore.configAppFuns.backCallback(router)
            } else {
                router.push('/home')
            }
        }
        return {
            hanleBack,
        }
    },
})
</script>
