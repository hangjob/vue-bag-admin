<template>
    <section class="section-container py-[220px] bg-[#0000007F]">
        <div class="text-center">
            <h1 class="text-white text-[60px] font-bold">旨在让开发者能够以最小的成本完成开发降低开发量</h1>
        </div>
        <div class="action">
            <n-grid cols="12" item-responsive responsive="screen">
                <n-grid-item class="text-center mt-10" span="12 m:4 l:3" v-for="item in compData.btns">
                    <n-button target @click="handleSkip('/admin.html')" size="large" :type="item.type">
                        {{item.title}}
                    </n-button>
                </n-grid-item>
            </n-grid>
        </div>
    </section>
</template>
<script setup>

const compData = reactive({
    btns: [
        {
            url:'/admin.html',
            title:'在线演示',
            type:'success'
        },
        {
            url:'/admin.html',
            title:'查看客户端',
            type:'info'
        },
        {
            url:'/doc/index.html',
            title:'查看文档',
            type:"warning"
        },
        {
            title:'下载源码',
            type:"error"
        }
    ]
})

const handleDownload = () => {

}
const handleSkip = (url) => {
    window.location.href = url
}

</script>
<style lang="less" scoped>

</style>
