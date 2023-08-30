<template>
    <n-space vertical>
        <n-card :segmented="{content: true,footer:true}" header-style="padding:10px" content-style="padding:0" footer-style="padding:10px">
            <template #header>
                <n-space>
                    <n-button @click="insertText">插入文本</n-button>
                    <n-button @click="printHtml">获取内容</n-button>
                    <n-button @click="disable">禁用编辑器</n-button>
                </n-space>
            </template>
            <Toolbar
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                :mode="mode"
                class="toolbar"
            />
            <Editor
                :defaultConfig="editorConfig"
                :mode="mode"
                class="editor"
                v-model="valueHtml"
                style="height: 400px; overflow-y: hidden;"
                @onCreated="handleCreated"
                @onChange="handleChange"
                @onDestroyed="handleDestroyed"
                @onFocus="handleFocus"
                @onBlur="handleBlur"
                @customAlert="customAlert"
                @customPaste="customPaste"
            />
        </n-card>
        <n-card>
            <n-text>
                <span v-html="valueHtml"></span>
            </n-text>
        </n-card>
    </n-space>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css"
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue"
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"

export default {
    components: { Editor, Toolbar },
    setup() {
        // 编辑器实例，必须用 shallowRef，重要！
        const editorRef = shallowRef()

        // 内容 HTML
        const valueHtml = ref("<p>hello</p>")

        // 模拟 ajax 异步获取内容
        onMounted(() => {
            setTimeout(() => {
                valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>"
            }, 1500)
        })

        const toolbarConfig = {}
        const editorConfig = { placeholder: "请输入内容..." }

        // 组件销毁时，也及时销毁编辑器，重要！
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return

            editor.destroy()
        })

        // 编辑器回调函数
        const handleCreated = (editor) => {
            console.log("created", editor)
            editorRef.value = editor // 记录 editor 实例，重要！
        }
        const handleChange = (editor) => {
            console.log("change:", editor.getHtml())
        }
        const handleDestroyed = (editor) => {
            console.log("destroyed", editor)
        }
        const handleFocus = (editor) => {
            console.log("focus", editor)
        }
        const handleBlur = (editor) => {
            console.log("blur", editor)
        }
        const customAlert = (info, type) => {
            alert(`【自定义提示】${type} - ${info}`)
        }
        const customPaste = (editor, event, callback) => {
            console.log("ClipboardEvent 粘贴事件对象", event)

            // 自定义插入内容
            editor.insertText("xxx")

            // 返回值（注意，vue 事件的返回值，不能用 return）
            callback(false) // 返回 false ，阻止默认粘贴行为
            // callback(true) // 返回 true ，继续默认的粘贴行为
        }

        const insertText = () => {
            const editor = editorRef.value
            if (editor == null) return

            editor.insertText("hello world")
        }

        const printHtml = () => {
            const editor = editorRef.value
            if (editor == null) return
            console.log(editor.getHtml())
        }

        const disable = () => {
            const editor = editorRef.value
            if (editor == null) return
            editor.disable()
        }

        return {
            editorRef,
            mode: "default",
            valueHtml,
            toolbarConfig,
            editorConfig,
            handleCreated,
            handleChange,
            handleDestroyed,
            handleFocus,
            handleBlur,
            customAlert,
            customPaste,
            insertText,
            printHtml,
            disable
        }
    },
}
</script>
<style lang="less">
:root,
:host {
    --w-e-textarea-bg-color: var(--card-color);
    --w-e-textarea-color: var(--text-color-base);
    --w-e-toolbar-active-color: var(--inverted-color);
}
.toolbar{
    border-bottom: 1px solid var(--code-color);
    .w-e-bar{
        background-color: var(--card-color);
    }
    .w-e-bar-divider{
        background-color: var(--divider-color);
    }
}
</style>
