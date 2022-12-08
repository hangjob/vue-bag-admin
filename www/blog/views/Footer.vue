<template>
    <section class="section section-container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <img style="width: 66px" :src="domImg" alt="">
                    <p>长按扫一扫</p>
                </div>

            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item" @click="copyfun">
                    <p>微信号：<span>itnavs</span></p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <p><a href="mailto:470193837@qq.com?subject=邮件的默认标题">470193837@qq.com</a></p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <p><span>鄂ICP备17016349号-3</span></p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script lang="ts" setup>
import QRCode from 'qrcode'
import { ref } from 'vue'
import { webWebsiteFind } from '@www/blog/service'
import { ElNotification } from 'element-plus'

const domImg: any = ref('')
webWebsiteFind().then((res: any) => {
    QRCode.toDataURL(res.data.data.qrcode)
        .then(url => {
            domImg.value = url
        })
        .catch(err => {
            console.error(err)
        })
})

function copyfun() {
    const copyipt = document.createElement('input')
    const text = 'itnavs'
    copyipt.setAttribute('value', text)
    document.body.appendChild(copyipt)
    copyipt.select()
    document.execCommand('copy')
    document.body.removeChild(copyipt)
    ElNotification({
        title: '复制',
        message: `微信号复制成功`,
        type: 'success',
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
