<template>
    <bag-view>
        <a-divider orientation="left">大文件上传</a-divider>
        <Breakpoint/>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import Breakpoint from './Breakpoint.vue'

export default defineComponent({
    name:'module-fileUpload',
    components: {
        Breakpoint
    },
    setup() {
        return {
            activeKey: ref('1'),
        };
    },
});
</script>
