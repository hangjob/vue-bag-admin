<template>
    <div class="h-full flex items-center justify-center mt-[-100px]">
        <n-result v-if="!route.path.includes('form_')" size="huge" status="404" title="404 找不到、不见了、错误、"
                  description="一切尽在不言中，在给个机会吧">
            <template #footer>
                <n-button type="primary" :loading="loading" @click="handleClick">重新进入系统</n-button>
            </template>
        </n-result>
        <div v-else>
            {{ router.go(-1) }}
        </div>
        {{ handleErrorTips($global) }}
    </div>
</template>
<style lang="less" scoped>

</style>
<script setup>
import {useRouter, useRoute, onBeforeRouteLeave} from "vue-router";

const loading = ref(false)
const router = useRouter()
const route = useRoute()
let timer = null;
const handleClick = () => {
    loading.value = true
    if (timer) {
        return window.location.reload()
    }
    timer = setTimeout(() => {
        router.push('/')
        loading.value = false
    }, 800)
}
const handleErrorTips = (ctx) => {
    if (!ctx?.apis) {
        ctx?.naive?.message?.error?.('请先安装apis-plugin插件')
        router.push('/login')
    }
}
onBeforeRouteLeave(() => {
    timer && clearInterval(timer)
})
</script>
