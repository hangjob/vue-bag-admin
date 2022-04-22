<template>
    <bag-view class="markdown">
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h3 class="title">官方API: <a href="https://ckang1229.gitee.io/vue-markdown-editor/zh/" target="_blank">[Markdown编辑器-文档]</a>
                </h3>
                <v-md-editor v-model="content" :mode="mode" height="600px"></v-md-editor>
            </a-col>
        </a-row>
        <br/>
        <a-space :size="10">
            <a-button type="primary" :class="activeClass('edit')" @click="handleSetMode('edit')">纯编辑模式</a-button>
            <a-button  class="hidden-xs" type="primary" :class="activeClass('editable')" @click="handleSetMode('editable')">编辑与预览模式</a-button>
            <a-button type="primary" :class="activeClass('preview')" @click="handleSetMode('preview')">纯预览模式</a-button>
        </a-space>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// @ts-ignore
import VMdEditor from '@kangc/v-md-editor';
// @ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

// @ts-ignore
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});
export default defineComponent({
    name:'module-markdown',
    components: {
        VMdEditor
    },
    setup() {
        const content = ref<string>('');
        const mode = ref<string>('editable');
        const handleSetMode = (str: string) => {
            mode.value = str
        }
        const activeClass = (str: string) => {
            return str === mode.value ? 'bag-button-color-green' : null;
        }
        return {
            content,
            mode,
            activeClass,
            handleSetMode
        }
    }
})
</script>
<style lang="less" scoped>
.markdown {
    .v-md-editor {
        box-shadow: none;
        border: 1px solid #dddddd;
    }
}
</style>
