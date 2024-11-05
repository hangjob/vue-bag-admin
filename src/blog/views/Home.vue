<template>
    <section class="section-container py-[220px] bg-[#0000007F]">
        <div class="text-center">
            <h1 class="text-white text-[60px] font-bold wow animate__animated animate__slideInDown">
                旨在让开发者能够以最小的成本完成开发降低开发量</h1>
        </div>
        <div class="action">
            <n-grid cols="12" item-responsive responsive="screen">
                <n-grid-item class="text-center mt-10" span="12 m:4 l:3" v-for="item in compData.btns">
                    <n-button :class="['wow animate__animated',item.className]" target @click="handleSkip(item)"
                              size="large" :type="item.type">
                        {{ item.title }}
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
            url: '/admin',
            title: '在线演示',
            type: 'success',
            className: 'animate__slideInLeft'
        },
        {
            url: '/doc/index.html',
            title: '查看文档',
            type: "warning",
            className: 'animate__slideInLeft'
        },
        {
            url: '',
            title: '查看客户端',
            type: 'info',
            className: 'animate__slideInRight'
        },
        {
            title: '下载源码',
            type: "error",
            url: 'https://github.com/hangjob/vue-bag-admin',
            className: 'animate__slideInRight'
        }
    ]
})
const handleSkip = (item) => {
    if (item.url) {
        window.open(item.url, item.url)
    } else {
        $global.naive.notification.info({
            title: '敬请期待',
            content: '正在使用Tauri2.0构建体积更小更安全的客户端，敬请期待',
            duration: 3000
        })
    }
}

</script>
