<template>
    <div class="praises" v-if="detailData.like && detailData.like.length">
        <div class="praises-head">{{detailData.like.length}}点赞</div>
        <div class="praises-users">
            <a href="" v-for="(item,idx) in detailData.like" :key="idx">
                <img :src="getImageFullPath(item.member.userhead)" alt="">
                <p>{{ item.member.username }}</p>
                <span class="weight">{{ item.member.login_number }}</span>
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {defineComponent, ref, defineProps, inject} from 'vue'

const props = defineProps({
    detailData: [Object],
})

const {getImageFullPath} = inject<any>('bagGlobal')
</script>
<style lang="less" scoped>
.praises {
    background-color: var(--bag-color-white);
    padding: var(--bag-padding-base);
    margin-top: var(--bag-margin-base);
    border-radius: var(--bag-border-radius-base);

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
            margin-top: var(--bag-margin-base);

            img {
                object-fit: cover;
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }

            p {
                color: var(--bag-text-color-brown);
            }

            .weight {
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
