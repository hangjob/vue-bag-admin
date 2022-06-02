<template>
    <div class="section">
        <aside class="banner" v-if="banners.length">
            <el-carousel trigger="click" :autoplay="true" :interval="5000" arrow="always" height="340px">
                <el-carousel-item v-for="item in banners" :key="item.id">
                    <div class="banner-item">
                        <img class="banner-item-img" :src="getImageFullPath(item.image)" alt="">
                        <div class="banner-item-des">{{ item.describe }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </aside>
        <bag-card class="hot" title="热门图集" :more="[{name:'查看更多'}]">
            <template v-slot:body>
                <el-row :gutter="15">
                    <el-col v-for="item in banners" :key="item.id" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                        <a class="hot-item" href="">
                            <div class="hot-item-inbox"><img :src="getImageFullPath(item.image)" alt=""></div>
                            <h5>{{ item.describe }}</h5>
                        </a>
                    </el-col>
                </el-row>
            </template>
        </bag-card>
        <Article :articleAll="articleAll" />
    </div>
</template>
<script lang="ts" setup>
import { defineProps, inject, ref } from 'vue'

import Article from './Article.vue'
import { webBannerAll } from '@/bag-web/service/app'

const props = defineProps({
    articleAll: [Array],
})
const banners = ref([])
webBannerAll().then((res: any) => {
    banners.value = res
})
const { getImageFullPath } = inject<any>('bagGlobal')
</script>
<style lang="less" scoped>
.section {
    .banner {
        margin-top: var(--bag-margin-base);

        &-item {
            position: relative;
            height: 340px;
            border-radius: 3px;
            width: 100%;
            overflow: hidden;

            &-img {
                object-fit: cover;
                width: 100%;
                transition: all 0.3s;

                &:hover {
                    transform: scale(1.05);
                }
            }

            &-des {
                position: absolute;
                left: 0;
                background: rgba(0, 0, 0, 0.3);
                bottom: 0;
                width: 100%;
                color: var(--bag-text-color-white);
                padding: 10px;
            }
        }
    }

    .hot {
        &-item {
            width: 100%;
            display: block;
            text-decoration: none;

            &-inbox {
                height: 120px;
                overflow: hidden;

                &:hover img {
                    transform: scale(1.1);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: flex;
                    transition: all 0.3s;
                }
            }

            h5 {
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                font-weight: normal;
                padding-top: 15px;
                padding-bottom: 18px;
                color: var(--bag-text-color-brown);
            }
        }
    }
}
</style>
