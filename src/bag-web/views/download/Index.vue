<template>
    <div class="download">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14" style="margin-bottom:10px">
                    <div class="banner">
                        <el-carousel indicator-position="none" height="250px" :interval="5000" arrow="always">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <div class="banner-item">
                                    <img src="https://img.zcool.cn/tubelocation/483c629739770002e07e1f80ee03.jpg"
                                         alt=""
                                    >
                                    <div class="intro">下载中心焦点图标题4</div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
                    <div class="headline">
                        <el-row :gutter="10">
                            <el-col v-for="item in 4" :key="item" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <router-link to="">
                                    <div class="embed">
                                        <img src="https://img.zcool.cn/tubelocation/483c629739770002e07e1f80ee03.jpg"
                                             alt=""
                                        >
                                    </div>
                                    <div class="intro">下载中心焦点图标题4</div>
                                </router-link>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <bag-card title="应用软件">
                <template v-slot:body>
                    <div class="download-list">
                        <el-row :gutter="20">
                            <el-col  v-for="item in 20" :key="item"  :xs="12" :sm="6" :md="4" :lg="3" :xl="3">
                                <router-link to="" class="download-list-item">
                                    <img src="/1.png" alt="">
                                    <p class="ellipsis">iTubeDownloader 6.4.8 在线视频下载工具</p>
                                    <em>网络工具</em>
                                    <span>立即下载</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </div>
                </template>
            </bag-card>
            <bag-card title="网络工具">
                <template v-slot:body>
                    <div class="download-list">
                        <el-row :gutter="20">
                            <el-col  v-for="item in 20" :key="item"  :xs="12" :sm="6" :md="4" :lg="3" :xl="3">
                                <router-link to="" class="download-list-item">
                                    <img src="/1.png" alt="">
                                    <p class="ellipsis">iTubeDownloader 6.4.8 在线视频下载工具</p>
                                    <em>网络工具</em>
                                    <span>立即下载</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </div>
                </template>
            </bag-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.download {
    margin-top: 20px;

    .banner {
        &-item {
            height: 100%;
            border-radius: 3px;
            overflow: hidden;
            position: relative;

            img {
                height: 100%;
                object-fit: cover;
            }

            .intro {
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.5);
                width: 100%;
                padding: 8px 5px;
                color: #ffffff;
            }
        }
    }

    .headline {
        height: 100%;

        .el-row {
            height: 100%;
        }

        .el-col {
            margin-bottom: 10px;
        }

        a {
            display: block;
            height: 100%;
            position: relative;
            margin-bottom: 20px;
            border-radius: 3px;
            overflow: hidden;

            .embed {
                height: 100%;

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }

            .intro {
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.5);
                width: 100%;
                padding: 5px;
                color: #ffffff;
            }
        }
    }

    &-list {
        &-item {
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            margin-bottom: 25px;
            img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                margin-bottom: 5px;
            }

            p {
                color: #5f616c;
                line-height: 20px;
            }

            em {
                color: #999;
                font-style: normal;
                display: block;
            }

            span {
                display: none;
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
                position: absolute;
                bottom: -15px;
                width: 80px;
                left: 50%;
                transform: translate(-50%, 0);
                padding: 5px 0;
                border-radius: 3px;
            }

            &:hover {
                span {
                    display: block;
                }
            }
        }
    }
}
</style>
