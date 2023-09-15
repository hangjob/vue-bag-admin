<template>
    <section class="section section-container">
        <div class="section-title">
            <h1 style="line-height:75px">旨在让开发者能够以最小的成本完成开发<br/>降低开发量</h1>
        </div>
        <div class="action">
            <n-grid cols="24" x-gap="10" y-gap="30" item-responsive responsive="screen">
                <n-grid-item span="24 m:12 l:6">
                    <div class="demo">
                        <n-button target @click="handleSkip('/admin/')" size="large" type="primary" icon="Pear">
                            <template #icon>
                                <n-icon>
                                    <HappyOutline/>
                                </n-icon>
                            </template>
                            体验管理端
                        </n-button>
                    </div>
                </n-grid-item>
                <n-grid-item span="24 m:12 l:6">
                    <div class="demo">
                        <n-button target  size="large" type="info">
                            <template #icon>
                                <n-icon>
                                    <LaptopOutline/>
                                </n-icon>
                            </template>
                            体验客户端
                        </n-button>
                    </div>
                </n-grid-item>
                <n-grid-item span="24 m:12 l:6">
                    <div class="demo">
                        <n-button target @click="handleSkip('/doc/index.html')" size="large" type="warning">
                            <template #icon>
                                <n-icon>
                                    <BookOutline/>
                                </n-icon>
                            </template>
                            查看文档
                        </n-button>
                    </div>
                </n-grid-item>
                <n-grid-item span="24 m:12 l:6">
                    <div class="demo">
                        <n-button @click="handleDownload" size="large" type="error">
                            <template #icon>
                                <n-icon>
                                    <CloudDownloadOutline/>
                                </n-icon>
                            </template>
                            下载程序
                        </n-button>
                    </div>
                </n-grid-item>
            </n-grid>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useMessage } from "naive-ui"
const handleSkip = (url) => {
    window.location.href = url
}
const message = useMessage()
const channel = new BroadcastChannel("wicket")
channel.addEventListener("message",(event)=>{
    message.success(event.data,{
        duration: 0
    })
})
const handleDownload = () => {
    document.querySelector("#Download").scrollIntoView({
        behavior: "smooth"
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
        margin: 80px auto 0;
    }

    .demo {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
}
</style>
