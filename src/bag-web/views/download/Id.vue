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
                        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" v-for="(item,idx) in 10" :key="idx">
                            <div class="archive-main">
                                <div class="item">
                                    <div class="item-wrap">
                                        <div class="item-cont">
                                            <div class="item-top">
                                                <img
                                                    src="https://image.uisdc.com/wp-content/uploads/2022/06/ysbanner-202200628-3-1.jpg"
                                                    alt=""
                                                >
                                            </div>
                                            <div class="item-title">
                                                <h3><a href="javascript:;">想把表单的用户体验做到极致？我总结了这5个细节！</a></h3>
                                            </div>
                                            <div class="item-desc">
                                                <p>对于设计师来说，尤其是现在 B
                                                    端设计如此流行的情况下，表单设计细节尤其需要各位设计师注意，本文会分享表单设计中那些你不注意的细节点，</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="pagination">
                        <el-pagination background layout="prev, pager, next" :total="1000"/>
                    </div>
                </template>
            </bag-card>
        </div>
    </div>
</template>
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
                height: 430px;
                position: relative;
                border: 1px solid #eaf0f1;

                .item-cont {
                    .item-top {
                        width: 100%;
                        height: 200px;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 5px;
                            object-fit: cover;
                        }
                    }

                    .item-title {
                        margin-top: 10px;

                        h3 {
                            a {
                                color: #323232;
                                font-size: 20px;
                                font-weight: bold;
                            }
                        }
                    }

                    .item-desc {
                        margin: 10px;
                        p {
                            background-color: #fafafa;
                            border-radius: 10px;
                            color: #8a8a8a;
                            padding: 10px;
                            height: 100px;
                            overflow: hidden;
                            box-sizing: border-box;
                            transition: all 0.2s;
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
