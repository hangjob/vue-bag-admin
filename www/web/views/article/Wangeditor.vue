<template>
    <div id="editor">
        <p>初始化的内容</p>
        <p>初始化的内容</p>
    </div>
</template>
<script lang="ts">
import E from 'wangeditor'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    setup() {
        onMounted(() => {
            const editor = new E('#editor')
            editor.create()
            console.log(editor.txt.html())
        })
    },
})
</script>
