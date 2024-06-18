<template>
    <n-result class="" status="418" title="418 我是个杯具" description="一切尽在不言中">
        <template #footer>
            <n-button @click="handleClick">接受真相就是这么简单</n-button>
        </template>
    </n-result>
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
