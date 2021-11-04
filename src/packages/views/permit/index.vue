<template>
    <div>
        <h2>权限控制</h2>
        <a-button type="primary" block v-auth="['zbdl','11']">招标代理有权限</a-button>
        <br> <br>
        <a-button type="primary" block v-auth="['1111']">专家没有权限</a-button>
    </div>
</template>
<script lang="ts">
import {defineComponent, onMounted,reactive} from 'vue'

export default defineComponent({
    setup() {

    }
})
</script>