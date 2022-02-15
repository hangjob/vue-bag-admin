<template>
    <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
})
</script>
<style lang="less">
html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

#app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
</style>
