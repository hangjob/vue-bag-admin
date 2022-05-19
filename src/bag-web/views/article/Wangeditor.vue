<template>
    <div id="editor">
        <md-editor previewTheme="mk-cute" codeTheme="paraiso"  v-if="detailData"  v-model="detailData.content" previewOnly/>
    </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
    props: {
        detailData: {
            type: Object,
            default: {}
        }
    },
    components: {
        MdEditor
    },
    setup() {
        return {
            content: '# 哎哎哎'
        }
    },
})
</script>
