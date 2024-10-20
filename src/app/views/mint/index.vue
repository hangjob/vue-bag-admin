<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="敏感词汇验证" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-space vertical>
                    <n-space>
                        <n-tag :type="idx%2 ? 'success' : 'warning'" :key="idx" v-for="(item,idx) in compData.keys">{{item}}</n-tag>
                    </n-space>
                    <n-input
                        placeholder="输入需要验证的词汇文本"
                        type="textarea"
                        size="small"
                        v-model:value="compData.text"
                        :autosize="{minRows: 3,maxRows: 5}"
                        @update:value="handleUpdateText"
                    />
                    <n-space>
                        <n-tag :type="idx%2 ? 'error' : 'info'" :key="idx" v-for="(item,idx) in compData.words">{{item}}</n-tag>
                    </n-space>
                </n-space>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import Mint from "mint-filter"
const compData = reactive({
    keys:["敏感词","胡萝卜","香蕉","苹果"],
    text:"",
    words:[]
})
const mint = new Mint(compData.keys)
const handleUpdateText = (value)=>{
    const test =mint.filter(value)
    compData.words = test.words
}
</script>
