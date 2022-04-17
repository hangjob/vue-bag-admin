<template>
    <div class="praise">
        <div class="praise-head">10点赞</div>
        <div class="praise-users">
            <a href="" v-for="(item,idx) in users" :key="idx">
                <img src="@www/web/assets/image/banner-1.jpg" alt="">
                <p>羊先生</p>
                <span class="weight">3421</span>
            </a>
        </div>
    </div>
</template>
<script>
import {defineComponent,ref} from 'vue'

export default defineComponent({
    setup() {
        const users = ref(20)
        return {
            users
        }
    }
})
</script>
<style lang="less">
.praise {
    background-color: var(--yh-color-white);
    padding: var(--yh-padding-base);
    margin-top: var(--yh-margin-base);
    border-radius: var(--yh-border-radius-base);

    &-head {
        font-size: 14px;
        font-weight: 700;
    }

    &-users {
        a {
            width: 68px;
            display: inline-block;
            text-align: center;
            position: relative;
            margin-top: var(--yh-margin-base);
            img {
                object-fit: cover;
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }

            p {
                color: var(--yh-text-color-brown);
            }
            .weight{
                position: absolute;
                display: inline-block;
                right: -5px;
                top: -7px;
                color: #fff;
                background-color: #ffe000;
                padding: 3px 8px;
                font-size: 12px;
                line-height: 1;
                border-radius: 10px;
            }
        }
    }
}
</style>
