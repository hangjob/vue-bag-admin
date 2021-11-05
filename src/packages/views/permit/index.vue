<template>
    <yxs-view>
        <h1>权限控制</h1>
        <br/>
        <a-button type="primary" v-auth="['zbdl','11']">招标代理有权限</a-button>
        <br> <br>
        <a-button type="primary" v-auth="['1111']">专家没有权限</a-button>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    setup() {

    }
})
</script>