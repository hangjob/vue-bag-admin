<template>
    <div class="article">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <div class="article-body">
                        <div class="breadcrumb">
                            <ol>
                                <li>首页</li>
                                <li>新闻中心</li>
                                <li>互联网</li>
                            </ol>
                        </div>
                        <div class="content">
                            <div class="metas">
                                <h1>品茗信息科技有限公司-羊先生</h1>
                            </div>
                            <div class="metas-action">
                                <div>
                                    <it-icon color="#546173" name="sentiment_satisfied" outlined />
                                    <span>2163阅读</span>
                                </div>
                                <div>
                                    <it-icon color="#546173" name="sentiment_satisfied" outlined />
                                    <span>789评论</span>
                                </div>
                                <div>
                                    <it-icon color="#546173" name="sentiment_satisfied" outlined />
                                    <span>697点赞</span>
                                </div>
                            </div>
                            <div class="text">
                                <wangeditor/>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    1
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import wangeditor from './Wangeditor.vue'
</script>
<style lang="less" scoped>
.article {
    margin-top: 30px;
    margin-bottom: 30px;

    &-body {
        position: relative;
        background-color: var(--yh-color-white);

        .breadcrumb {
            background-color: var(--yh-color-white);
            font-size: var(--yh-font-size-extra-small);
            margin-bottom: 0;
            padding: 15px;
            border-bottom: 1px solid #f5f5f5;

            li {
                display: inline-block;

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
        }

        .content {
            padding: 15px;

            .metas {

                h1 {
                    line-height: 1.45;
                    margin-bottom: 5px;
                    font-size: var(--yh-font-size-large);
                    font-weight: bold;
                    color: var(--yh-text-color-primary);
                }

                &-action {
                    display: flex;
                    align-items: center;

                    div {
                        display: flex;
                        align-items: center;
                        margin-right: 30px;
                    }
                }
            }
        }
    }
}
</style>
