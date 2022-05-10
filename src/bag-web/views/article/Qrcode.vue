<template>
    <div class="qrcode">
        <img src="https://www.vipbic.com/public/www/pc/img/7.cc9a928e.png" alt="">
        <div class="qrcode-des">
            <h3>vipbic-分享你我快乐</h3>
            <p>帮助设计开发者寻找互联网优秀的资源和工具</p>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({})
</script>
<style lang="less" scoped>
.qrcode{
    background-color: var(--bag-color-white);
    padding: var(--bag-padding-base);
    margin-top: var(--bag-margin-base);
    display: flex;
    border-radius: var(--bag-border-radius-base);
    img{
        width: 100px;
        height: 100px;
    }
    &-des{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        h3{
            font-size: 16px;
            font-weight: 600;
            color: #333;
        }
        p{
            font-size: 14px;
            color: #909090;
        }
    }
}
</style>
