<template>
    <h1 v-for="item in items" :key="item">22</h1>
    <h1>22</h1>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    setup() {
        return {
            items: 100
        }
    }
})
</script>
<style lang="less">

</style>