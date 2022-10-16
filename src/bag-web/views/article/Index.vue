<template>
    <div
        class="article"
        v-loading="loading"
        element-loading-text="数据正在加载中..."
        element-loading-background="rgba(122, 122, 122, 0.1)"
    >
        <div class="container" v-if="detailData">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <Banner :detail-data="detailData" />
                    <div class="article-body">
                        <div class="breadcrumb">
                            <ol>
                                <li>
                                    <router-link to="/home">首页</router-link>
                                </li>
                                <li>{{ detailData.channel.name }}</li>
                                <li>互联网</li>
                            </ol>
                            <div class="widget hot" v-if="detailData.flag === '热门'">
                                <i class="bag-icon-huo"></i>
                            </div>
                            <div class="widget recom" v-if="detailData.flag === '推荐'">
                                <i class="bag-icon-tuijianfuwu"></i>
                            </div>
                            <div class="widget stick" v-if="detailData.flag === '置顶'">
                                <i class="bag-icon-zhiding3"></i>
                            </div>
                            <div class="widget new" v-if="detailData.flag === '最新'">
                                <i class="bag-icon-zuixin"></i>
                            </div>
                        </div>
                        <div class="content">
                            <div class="metas">
                                <h1 :style="{...detailData.title_style}">{{ detailData.title }}</h1>
                            </div>
                            <div class="metas-action">
                                <div>
                                    <i style="color:#65b1ff;;font-size:14px" class="bag-icon-qiepian"></i>
                                    <span>{{ detailData.views }} 阅读</span>
                                </div>
                                <div>
                                    <i style="color:#65b1ff" class="bag-icon-sheji_huatu"></i>
                                    <span>暂无 评论</span>
                                </div>
                                <div>
                                    <i style="color:#65b1ff;font-size:16px" class="bag-icon-redu"></i>
                                    <span>{{ detailData.like.length + detailData.likes }} 点赞</span>
                                </div>
                                <div>
                                    <i style="color:#65b1ff;font-size:20px" class="bag-icon-shijian2"></i>
                                    <span>{{ readingTime(detailData.content) }}分钟 阅读时长</span>
                                </div>
                                <div>
                                    <i style="color:#65b1ff;font-size:20px" class="bag-icon-rili1"></i>
                                    <span>{{ detailData.updateTime }}</span>
                                </div>
                            </div>
                            <div class="text">
                                <Wangeditor :detailData="detailData" />
                                <Sweet :detailData="detailData" />
                            </div>
                        </div>
                    </div>
                    <Praise :detail-data="detailData" />
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <Author :detail-data="detailData" />
                    <Qrcode :detail-data="detailData" />
                    <HotTags :detail-data="detailData" />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Wangeditor from './Wangeditor.vue'
import Author from './Author.vue'
import Qrcode from './Qrcode.vue'
import HotTags from './HotTags.vue'
import Praise from './Praise.vue'
import Sweet from './Sweet.vue'
import Banner from './banner/Index.vue'

import { webArticleFind } from '@/bag-web/service/app'
import { ElLoading } from 'element-plus'

const route = useRoute()
const detailData = ref(null)
const loading = ref(true)
webArticleFind({ id: route.params.id }).then((res: any) => {
    res.title_style = res.title_style ? JSON.parse(res.title_style.replace(/'/g, '"')) : {}
    res.images = res.images ? res.images.split(',') : []
    detailData.value = res
}).finally(() => {
    loading.value = false
})

const readingTime = (str: string) => {
    let len: any = str.length / 500
    return parseFloat(len).toFixed(1)
}

</script>
<style lang="less" scoped>
.article {
    margin-top: 30px;
    margin-bottom: 30px;
    min-height: 400px;

    &-body {
        position: relative;
        background-color: var(--bag-color-white);
        border-radius: var(--bag-border-radius-base);
        overflow: hidden;

        .breadcrumb {
            background-color: var(--bag-color-white);
            font-size: var(--bag-font-size-extra-small);
            margin-bottom: 0;
            padding: var(--bag-padding-base);
            border-bottom: 1px solid #f5f5f5;
            position: relative;

            li {
                display: inline-block;

                a {
                    color: #333333;

                    &:hover {
                        text-decoration: underline;
                        color: #0b7ad1;
                    }
                }

                &::after {
                    content: "/\00a0";
                    padding: 0 5px;
                    color: #ccc;
                }

                &:last-child {
                    &::after {
                        display: none;
                    }
                }
            }

            .widget {
                position: absolute;
                border-left: 40px solid transparent;
                content: "";
                height: 0;
                right: 0;
                top: 0;
                width: 0;
                z-index: 10;

                i {
                    font-size: 17px;
                    height: 30px;
                    left: -26px;
                    line-height: 30px;
                    text-align: center;
                    top: -42px;
                    position: absolute;
                    width: 30px;
                    z-index: 9999;
                    color: #fff;
                }

                &.hot {
                    border-top: 40px solid #ff5722;
                }

                &.recom {
                    border-top: 40px solid #52c41a;
                }

                &.stick {
                    border-top: 40px solid #ffe000;
                }

                &.new {
                    border-top: 40px solid #1890ff;
                }
            }
        }
    }

    .content {
        padding: var(--bag-padding-base);

        .metas {

            h1 {
                line-height: 1.45;
                margin-bottom: 10px;
                font-size: 24px;
                font-weight: bold;
                color: var(--bag-text-color-primary);
            }

            &-action {
                display: flex;
                align-items: center;

                div {
                    display: flex;
                    align-items: center;
                    margin-right: 30px;

                    span {
                        color: #b5b5b5;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}

</style>
