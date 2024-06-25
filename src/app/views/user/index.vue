<template>
    <div>
        <n-button type="primary" @click="handleClick">usrr</n-button>
        <n-button type="success" @click="handleClick">usrr</n-button>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
    router.push('/sss')
}
</script>
