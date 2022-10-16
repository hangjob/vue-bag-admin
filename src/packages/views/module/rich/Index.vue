<template>
    <bag-view class="rich" ref="rich">
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h3 class="title">官方API: <a href="https://github.com/quilljs/quill"
                                            target="_blank"
                >[Quill-富文本编辑器-文档]</a></h3>
                <div>
                    <div id="editor-container"></div>
                </div>
            </a-col>
        </a-row>
        <br />
        <div>
            <h3 class="title">预览</h3>
            <p class="break-word"
               style="min-height: 100px;border-radius: 3px;border: 1px solid #ddd;padding: 10px;box-sizing: border-box"
               v-html="content"
            ></p>
        </div>
        <a-space :size="10">
            <a-button type="primary" :danger="readonly" @click="handleSetQuillDisable">{{
                    readonly ? '设置编辑' : '设置只读'
                }}
            </a-button>
            <a-button type="primary" @click="handleGetQuillContent">获取所有内容</a-button>
            <a-button type="primary" class="hidden-xs" @click="handleQuillConsole">打印Quill实列</a-button>
        </a-space>
    </bag-view>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'module-rich',
    components: {
        Quill,
    },
    setup() {
        const rich = ref(null as HTMLInputElement | null)
        let quill: any = null
        const route = useRoute() // 获取router参数
        // 文本内容
        const content = ref<string>('')

        onMounted(() => {
            quill = new Quill('#editor-container', {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ header: 1 }, { header: 2 }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['link', 'image'],
                    ],
                },
                placeholder: '输入需要编辑的内容',
                readOnly: false,
                theme: 'snow',
            })
            // document.querySelector('.ql-editor').style.height = (rich.value.$el.clientHeight - 200) + 'px';
            // 监听输入
            quill.on('text-change', () => {
                content.value = quill.root.innerHTML
            })

        })

        // 获取内容
        const handleGetQuillContent = () => {
            console.log(quill.root.innerHTML)
        }

        const readonly = ref<Boolean>(false)

        // 设置禁用
        const handleSetQuillDisable = () => {
            if (quill.isEnabled()) {
                quill.disable()
                readonly.value = true
            } else {
                quill.enable()
                readonly.value = false
            }
        }

        // 打印实列
        const handleQuillConsole = () => {
            console.log('quill实列', quill)
        }

        return {
            rich,
            readonly: readonly,
            content,
            handleGetQuillContent,
            handleSetQuillDisable,
            handleQuillConsole,
        }
    },
})
</script>
<style lang="less" scoped>
.rich {
    box-sizing: border-box;

    :deep(.editor-container) {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    :deep(.ql-editor) {
        min-height: 300px;
    }
}
</style>
<style>
.ql-snow {
    line-height: 22px !important;
}

.ql-snow {
    border: 1px solid #dcdfe6;
}

.ql-snow .ql-tooltip[data-mode="link"]::before {
    content: "请输入链接地址:";
}

.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: "保存";
    padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
    content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: "14px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
    content: "10px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
    content: "18px";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
    content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "文本";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "标题1";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "标题2";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "标题3";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: "标题4";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: "标题5";
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: "标准字体";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
    content: "衬线字体";
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
    content: "等宽字体";
}
</style>
