<template>
    <div class="join">
        <bag-card title="加入我们">
            <template v-slot:body>
                <p class="join-slogan">
                    {{ siteInfo.slogan }}
                    <span>{{siteInfo.name}}</span>
                </p>
                <div class="join-action">
                    <router-link to="">订阅公众号</router-link>
                    <router-link to="">写点什么</router-link>
                </div>
            </template>
        </bag-card>
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
.join {
    &-slogan {
        color: #777;
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 1px;
        opacity: .7;
        text-align: justify;

        span {
            color: var(--bag-color-primary);
        }
    }

    &-action {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        padding-top: 15px;
        margin-top: 10px;
        margin-right: -15px;
        margin-left: -15px;

        a {
            display: inline-block;
            text-align: center;
            padding: 10px 30px;
            border: 1px solid rgba(0, 0, 0, .05);
            border-radius: 5px;
            color: var(--bag-text-color-brown);
            transition: all .3s;

            &:hover {
                color: var(--bag-color-white);
                background-color: var(--bag-text-hover-color-primary);
            }
        }
    }
}
</style>
