<template>
   <BagTable/>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
    router.push('/sss')
}
</script>
