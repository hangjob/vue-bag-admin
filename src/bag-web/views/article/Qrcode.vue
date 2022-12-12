<template>
    <div class="qrcode">
        <img src="https://www.vipbic.com/public/www/pc/img/7.cc9a928e.png" alt="">
        <div class="qrcode-des">
            <h3>{{siteInfo.name}}</h3>
            <p>{{siteInfo.slogan}}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import appStore from '@/bag-web/pinia/app'

export default defineComponent({
    setup() {
        const store = appStore()
        const { siteInfo } = store
        return {
            siteInfo,
        }
    },
})
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
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
        }
    }
}
</style>
