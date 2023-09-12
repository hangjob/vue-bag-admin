<template>
    <section class="section section-container">
        <n-grid cols="24" x-gap="10" y-gap="30" item-responsive responsive="screen">
            <n-grid-item span="24 m:12 l:6">
                <div class="item">
                    <img style="width: 66px" :src="domImg" alt="">
                    <p>长按扫一扫</p>
                </div>

            </n-grid-item>
            <n-grid-item span="24 m:12 l:6">
                <div class="item" @click="copyfun">
                    <p>微信号：<span>itnavs</span></p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6">
                <div class="item">
                    <p><a href="mailto:470193837@qq.com?subject=邮件的默认标题">470193837@qq.com</a></p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6">
                <div class="item">
                    <p><span>鄂ICP备17016349号-3</span></p>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script lang="ts" setup>
import QRCode from "qrcode"
import {ref} from "vue"
import {webWebsiteFind} from "@/app/web/service"
import {useNotification} from "naive-ui"

const domImg: any = ref("")
webWebsiteFind().then((res: any) => {
    try {
        const item = res.find((item) => item.type === "2")
        QRCode.toDataURL(item.url)
            .then(url => {
                domImg.value = url
            })
            .catch(err => {
                console.error(err)
            })
    } catch (e) {
        console.log(e)
    }
})
const notification = useNotification()
function copyfun() {
    const copyipt = document.createElement("input")
    const text = "itnavs"
    copyipt.setAttribute("value", text)
    document.body.appendChild(copyipt)
    copyipt.select()
    document.execCommand("copy")
    document.body.removeChild(copyipt)
    notification["success"]({
        content: "微信号已复制，itnavs",
        meta: "提示",
        duration: 2500,
        keepAliveOnHover: true
    })
}
</script>
<style lang="less" scoped>
.section {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #272727;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
        margin-bottom: 40px;
    }

    h1 {
        font-size: 50px;
        font-weight: bold;
    }

    .item {
        margin-top: 20px;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        a {
            color: #ffffff;
        }
    }
}
</style>
