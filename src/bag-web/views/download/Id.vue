<template>
    <div class="download">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <bag-card title="网络工具">
                        <template v-slot:body>
                            <div class="tabs-group">
                                <h6>分类:</h6>
                                <ul>
                                    <li><a class="active" href="javascript:;">全部</a></li>
                                    <li v-for="(item,idx) in 10" :key="idx"><a href="javascript:;">工具</a></li>
                                </ul>
                            </div>
                            <div class="tabs-group">
                                <h6>类型:</h6>
                                <ul>
                                    <li><a class="active" href="javascript:;">全部</a></li>
                                    <li v-for="(item,idx) in 10" :key="idx"><a href="javascript:;">工具</a></li>
                                </ul>
                            </div>
                            <div class="tabs-group">
                                <h6>费用:</h6>
                                <ul>
                                    <li><a class="active" href="javascript:;">完全免费</a></li>
                                </ul>
                            </div>
                        </template>
                    </bag-card>
                </el-col>
            </el-row>
            <bag-card title="列表">
                <template v-slot:body>
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" v-for="(item,idx) in page.data" :key="idx">
                            <div class="archive-main">
                                <div class="item">
                                    <div class="item-wrap">
                                        <div class="item-cont">
                                            <div class="item-top">
                                                <img :src="getImageFullPath(item.image)" alt="">
                                            </div>
                                            <div class="item-title">
                                                <h3><a href="javascript:;">{{ item.title }}</a></h3>
                                            </div>
                                            <div class="item-desc">
                                                <span>{{ item.describe }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="pagination">
                        <el-pagination
                            v-model:currentPage="page.currentPage"
                            :page-size="page.pageSize"
                            :total="page.total"
                            @current-change="page.handleCurrentChange"
                            background layout="prev, pager, next"
                        ></el-pagination>
                    </div>
                </template>
            </bag-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {webDownloadPage} from '@/bag-web/service/app';
import {useRoute, useRouter} from 'vue-router'
import {inject, reactive, ref, watch} from "vue";

const {getImageFullPath} = inject<any>('bagGlobal')
const route = useRoute();
const page = reactive({
    data: [],
    total: 0,
    currentPage: 1,
    pageSize: 12,
    handleCurrentChange: (val) => {
        page.currentPage = val;
        getData();
        console.log(val)
    }
})
watch(route, () => {
    getData();
})
const getData = () => {
    webDownloadPage({
        channel_id: route.params.id,
        currentPage: page.currentPage,
        pageSize: page.pageSize
    }).then((res: any) => {
        const {data, total} = res;
        page.data = data
        page.total = total
    })
}

getData();
</script>
<style lang="less" scoped>
.download {
    .tabs-group {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 20px;

        &:last-of-type {
            margin-bottom: 0;
        }

        h6 {
            color: #999;
            font-weight: 400;
            padding-right: 15px;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            overflow: hidden;
            transition: all .5s;

            li {
                flex: 0 1 auto;
                color: #444;
                padding: 0 10px;
                margin: 5px 0;

                a {
                    padding: 5px 10px;
                    cursor: pointer;
                    display: inline-block;
                    color: #828a92;

                    &.active {
                        background: #b5ed1e;
                        color: #fff;
                        border-radius: 4px;
                    }
                }
            }
        }
    }

    .archive-main {
        margin-bottom: 20px;

        .item {
            &-wrap {
                box-sizing: border-box;
                background-color: #ffffff;
                border-radius: 5px;
                padding: 20px 10px;
                transition: all .2s;
                height: 400px;
                position: relative;
                border: 1px solid #eaf0f1;

                .item-cont {
                    .item-top {
                        width: 100%;
                        height: 200px;
                        overflow: hidden;
                        border-radius: 5px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: all 0.5s;

                            &:hover {
                                transform: scale(1.08);
                                object-fit: none;
                            }
                        }
                    }

                    .item-title {
                        margin-top: 10px;

                        h3 {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            text-align: justify;
                            a {
                                color: #323232;
                                font-size: 20px;
                                font-weight: bold;
                            }
                        }
                    }

                    .item-desc {
                        margin: 10px;
                        padding: 15px;
                        height: 100px;
                        background-color: #fafafa;
                        border-radius: 10px;
                        overflow: hidden;

                        span {
                            color: #8a8a8a;
                            box-sizing: border-box;
                            transition: all 0.2s;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            text-align: justify;
                        }
                    }
                }
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: right;
    }
}
</style>
