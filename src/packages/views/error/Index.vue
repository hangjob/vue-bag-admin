<template>
    <div class="h-full flex items-center justify-center mt-[-100px]">
        <n-result size="huge" status="404" title="404 找不到、不见了、错误、" description="一切尽在不言中，在给个机会吧">
            <template #footer>
                <n-button type="primary" :loading="loading" @click="handleClick">重新进入系统</n-button>
            </template>
        </n-result>
    </div>
</template>
<style lang="less" scoped>

</style>
<script setup>
import {useRouter} from "vue-router";

const loading = ref(false)
const router = useRouter()
const handleClick = () => {
    loading.value = true
    setTimeout(() => {
        window.location.reload()
    }, 200)
}
</script>
