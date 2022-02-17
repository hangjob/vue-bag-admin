<template>
    <div class="section">
        <aside class="banner">
            <el-carousel trigger="click" :autoplay="true" :interval="5000" arrow="always" height="340px">
                <el-carousel-item v-for="item in banners" :key="item">
                    <div class="banner-item">
                        <img class="banner-item-img" :src="item.img" alt="">
                        <div class="banner-item-des">{{ item.text }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </aside>
        <web-card class="hot" title="热门图集" :more="[{name:'查看更多'}]">
            <template v-slot:body>
                <el-row :gutter="15">
                    <el-col v-for="item in banners" :key="item" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                        <a class="hot-item" href="">
                            <div class="hot-item-inbox"><img :src="item.img" alt=""></div>
                            <h5>{{ item.text }}</h5>
                        </a>
                    </el-col>
                </el-row>
            </template>
        </web-card>
        <Article />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import banner1 from '@www/web/assets/image/banner-1.jpg'
import banner2 from '@www/web/assets/image/banner-2.jpg'
import banner3 from '@www/web/assets/image/banner-3.jpg'
import banner4 from '@www/web/assets/image/banner-4.jpg'
import Article from './Article.vue'

const banners = ref([
        { img: banner1, text: '不负光阴就是最好的努力，而努力就是最好的自己' },
        { img: banner2, text: '洁身自好，绝对理智，永远温柔，永远清醒' },
        { img: banner3, text: '别让平凡的生活，耗尽你所有的向往' },
        { img: banner4, text: '没有人可以回到过去，但谁都可以从现在开始' },
    ],
)
</script>
<style lang="less" scoped>
.section {
    .banner {
        margin-top: var(--yh-margin-top);

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
                color: var(--yh-text-color-white);
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
                padding-bottom: 15px;
                color: var(--yh-text-color-brown);
            }
        }
    }
}
</style>
