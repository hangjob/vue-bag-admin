<template>
    <section class="section section-container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <QrcodeVue :value="qrcode" style="border-radius: 5px;" :margin="5" :size="80" level="H"/>
                    <p>扫一扫吧</p>
                </div>

            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <vs-icon size="34px" color="#46c93a" icon="qr_code"></vs-icon>
                    <p>微信号：<span>itnavs</span></p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <vs-icon size="34px" color="#34d293" icon="mark_email_unread"></vs-icon>
                    <p>470193837@qq.com</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <vs-icon color="#e96656" size="34px" icon="location_on"></vs-icon>
                    <p><span>鄂ICP备17016349号-3</span></p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'
import {ref} from "vue";
import {webWebsiteFind} from "@www/blog/service";
const qrcode = ref('');
webWebsiteFind().then((res:any)=>{
    qrcode.value = res.data.data.qrcode || ''
})
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
    .item{
        margin-top: 20px;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
}
</style>
<style>
canvas{
    -webkit-touch-callout : none;
}
</style>
