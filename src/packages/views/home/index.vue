<template>
    <div>
        <n-button @click="handleClick">cess</n-button>
        <n-date-picker></n-date-picker>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
    router.push('/user')
}
</script>
