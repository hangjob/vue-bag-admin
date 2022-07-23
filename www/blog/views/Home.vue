<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>优秀的你，才能遇到优秀的世界<br/>Bag管理系统框架</h1>
        </div>
        <div class="action">
            <vs-button target :href="{url: '/admin.html'}" color="primary" size="large"
                       type="filled" icon="text_snippet"
            >体验管理端
            </vs-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <vs-button target :href="{url: '/web.html'}" color="rgb(11, 189, 135)" size="large" type="filled"
                       icon="text_snippet"
            >体验客户端
            </vs-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <vs-button target :href="{url: '/doc/index.html'}" color="danger" size="large"
                       type="filled" icon="text_snippet"
            >查看文档
            </vs-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <vs-button color="success" @click="handleDownload" size="large" type="filled" icon="downloading">
                下载程序
            </vs-button>
        </div>
    </section>
</template>
<script lang="ts" setup>
import toElementTop from "@/bag-utils/dom/toElementTop";

const handleDownload = () => {
    const dom: any = document.getElementById('Download');
    window.scrollTo({
        top: toElementTop(dom),
        behavior: 'smooth',
    })
}
</script>
<style lang="less" scoped>
.section {
    padding-top: 220px;
    padding-bottom: 220px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;

    &-title {
        h1 {
            font-size: 50px;
            font-weight: bold;
        }
    }

    .action {
        display: flex;
        justify-content: center;
        margin-top: 80px;
    }
}
</style>
