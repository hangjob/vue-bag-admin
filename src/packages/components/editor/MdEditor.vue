<template>
    <div class="project-preview">
        <div class="container">
            <Editor
                editorId="md-prev"
                v-model="data.text"
                :toolbars="[
          'bold',
          'underline',
          'italic',
          'strikeThrough',
          '-',
          'title',
          'sub',
          'sup',
          'quote',
          'unorderedList',
          'orderedList',
          '-',
          'codeRow',
          'code',
          'link',
          'image',
          'table',
          'mermaid',
          'katex',
          0,
          1,
          '-',
          'revoke',
          'next',
          'save',
          '=',
          'prettier',
          'pageFullscreen',
          'fullscreen',
          'preview',
          'htmlPreview',
          'catalog',
        ]"
                :extensions="[MarkExtension]"
            >
                <template #defToolbars>
                    <Editor.DropdownToolbar
                        :visible="data.emojiVisible"
                        :onChange="emojiVisibleChanged"
                    >
                        <template #overlay>
                            <div class="emoji-container">
                                <ol class="emojis">
                                    <li
                                        v-for="(emoji, index) of emojis"
                                        :key="`emoji-${index}`"
                                        @click="emojiHandler(emoji)"
                                        v-text="emoji"
                                    ></li>
                                </ol>
                            </div>
                        </template>
                        <template #trigger>
                            <SmileTwoTone />
                        </template>
                    </Editor.DropdownToolbar>
                </template>
            </Editor>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, defineProps } from 'vue'
import Editor from 'md-editor-v3'
import './index.less'
import { emojis } from './emoji'
// 参考下方的marked扩展内容


const props = defineProps({
    text: String,
})

const MarkExtension = reactive({
    name: 'MarkExtension',
    level: 'inline',
    start: (text: string) => text.match(/@[^@]/)?.index,
    tokenizer(text: string) {
        const reg = /^@([^@]*)@/
        const match = reg.exec(text)

        if (match) {
            return {
                type: 'MarkExtension',
                raw: match[0],
                text: match[1].trim(),
                tokens: [],
            }
        }
    },
    renderer(token: any) {
        return `<mark>${token.text}</mark>`
    },
})

const data = reactive({
    text: props.text,
    emojiVisible: false,
})

const markHandler = () => {
    // 获取输入框
    const textarea = document.querySelector('#md-prev-textarea') as HTMLTextAreaElement
    // 获取选中的内容
    const selection = window.getSelection()?.toString()
    // 获取鼠标位置
    const endPoint = textarea.selectionStart

    // 生成标记文本
    const markStr = `@${selection}@`

    // 根据鼠标位置分割旧文本
    // 前半部分
    const prefixStr = textarea.value.substring(0, endPoint)
    // 后半部分
    const suffixStr = textarea.value.substring(endPoint + (selection?.length || 0))

    data.text = `${prefixStr}${markStr}${suffixStr}`

    setTimeout(() => {
        textarea.setSelectionRange(endPoint, markStr.length + endPoint)
        textarea.focus()
    }, 0)
}

const emojiHandler = (emoji: string) => {
    // 获取输入框
    const textarea = document.querySelector('#md-prev-textarea') as HTMLTextAreaElement
    // 获取选中的内容
    const selection = window.getSelection()?.toString()
    // 获取鼠标位置
    const endPoint = textarea.selectionStart

    // 根据鼠标位置分割旧文本
    // 前半部分
    const prefixStr = textarea.value.substring(0, endPoint)
    // 后半部分
    const suffixStr = textarea.value.substring(endPoint + (selection?.length || 0))

    data.text = `${prefixStr}${emoji}${suffixStr}`

    setTimeout(() => {
        textarea.setSelectionRange(endPoint, endPoint - 1)
        textarea.focus()
    }, 0)
}

const emojiVisibleChanged = (visible: any) => {
    data.emojiVisible = visible
}
</script>
