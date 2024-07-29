<template>
    <div class="h-full flex items-center justify-center mt-[-100px]">
        <n-result size="huge" status="404" title="404 我是个杯具" description="一切尽在不言中">
            <template #footer>
                <n-button @click="handleClick">返回</n-button>
            </template>
        </n-result>
    </div>
</template>
<style lang="less" scoped>

</style>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
    router.push('/')
}
</script>
