<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-form
                inline
                label-placement="left"
                label-width="auto"
                require-mark-placement="right-hanging"
            >
                <n-form-item  label="预览主题选择：" path="inputValue">
                    <n-select class="w-[150px]" v-model:value="compData.previewTheme"  :options="previewTheme"/>
                </n-form-item>
                <n-form-item  label="代码主题选择："  path="inputValue">
                    <n-select class="w-[150px]" v-model:value="compData.codeTheme"  :options="codeTheme">
                    </n-select>
                </n-form-item>
            </n-form>
        </n-grid-item>
        <n-grid-item  span="12 m:12 l:12">
            <n-card title="Markdown" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <MdEditor class="h-full" :previewTheme="compData.codeTheme" v-model="compData.text"/>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>

<script setup>
import {MdEditor} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const html = $global.helpers.readFile('/hello.text')
const compData = reactive({
    text:html,
    codeTheme:'default',
    previewTheme:'atom'
})

const previewTheme = [
    {label: 'default', value: 'default'},
    {label: 'github', value: 'github'},
    {label: 'vuepress', value: 'vuepress'},
    {label: 'mk-cute', value: 'mk-cute'},
    {label: 'smart-blue', value: 'smart-blue'},
    {label: 'smart-blue', value: 'smart-blue'},
    {label: 'cyanosis', value: 'cyanosis'},
]
const codeTheme = [
    {label: 'atom', value: 'atom'},
    {label: 'a11y', value: 'a11y'},
    {label: 'github', value: 'github'},
    {label: 'gradient', value: 'gradient'},
    {label: 'kimbie', value: 'kimbie'},
    {label: 'paraiso', value: 'paraiso'},
    {label: 'qtcreator', value: 'qtcreator'},
    {label: 'stackoverflow', value: 'stackoverflow'},
]
</script>
