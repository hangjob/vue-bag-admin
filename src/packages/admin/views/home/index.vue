<template>
    <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <yxs-card>
                <template v-slot:title>欢迎您</template>
                <div class="welcome">
                    <!--            <div class="head"><img src="@/assets/yanghang.jpg" alt=""></div>-->
                    <div class="des">
                        <h1>嗨，下午好，我是羊先生，准备吃什么呢?</h1>
                        <p>前端工程师 |
                            品茗股份，Yxs-Admin，采用Vite2.0、Vue3.2、TypeScript、JavaScript构建，支持多种写法和调用，完整的框架体系，适合企业中后台管理系统，支持现有业务各种扩展....</p>
                    </div>
                </div>
            </yxs-card>
        </a-col>
    </a-row>
    <a-row :gutter="[16,0]">
        <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <Returns/>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
            <ProjectInfo/>
        </a-col>
    </a-row>
    <a-row :gutter="[16,0]">
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
            <yxs-card>
                <div class="money">
                    <div class="money-header">
                        <span class="label">2021全国销售额</span>
                        <span class="value">￥15920.00</span>
                    </div>
                    <div class="money-content">
                        <ul>
                            <li>
                                <span>7月同比</span>
                                <div class="rise">
                                    <RiseOutlined/>
                                    <span>+8%</span>
                                </div>
                            </li>

                            <li>
                                <span>8月同比</span>
                                <div class="fall">
                                    <FallOutlined/>
                                    <span>-6%</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="money-footer">
                        <span class="label">月均销售额</span>
                        <span class="value">￥1362.00</span>
                    </div>
                </div>
            </yxs-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
            <yxs-card>
                <div class="money">
                    <div class="money-header">
                        <span class="label">总销售额</span>
                        <span class="value">￥15920</span>
                    </div>
                    <div class="money-content">
                        <ul>
                            <li>
                                <span>7月同比</span>
                                <div class="rise">
                                    <RiseOutlined/>
                                    <span>+8%</span>
                                </div>
                            </li>

                            <li>
                                <span>8月同比</span>
                                <div class="fall">
                                    <FallOutlined/>
                                    <span>-6%</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="money-footer">
                        <span class="label">日销售额</span>
                        <span class="value">￥1298.00</span>
                    </div>
                </div>
            </yxs-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8">
            <yxs-card>
                <div class="money">
                    <div class="money-header">
                        <span class="label">总销售额</span>
                        <span class="value">￥15920</span>
                    </div>
                    <div class="money-content">
                        <ul>
                            <li>
                                <span>7月同比</span>
                                <div class="rise">
                                    <RiseOutlined/>
                                    <span>+8%</span>
                                </div>
                            </li>

                            <li>
                                <span>8月同比</span>
                                <div class="fall">
                                    <FallOutlined/>
                                    <span>-6%</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="money-footer">
                        <span class="label">日销售额</span>
                        <span class="value">￥1298.00</span>
                    </div>
                </div>
            </yxs-card>
        </a-col>
    </a-row>
    <a-row :gutter="[16,0]">
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="10">
            <yxs-card class="profit">
                <template v-slot:title>
                    <div class="profit-header">
                        <div class="profit-header-title">项目盈利占比</div>
                        <div class="profit-header-tab">
                            <span class="active">今天</span>
                            <span>本月</span>
                            <span>本年</span>
                            <span>预测</span>
                        </div>
                    </div>
                </template>
                <div class="profit-content">
                    <ul>
                        <li>
                            <strong>1</strong>
                            <p>品茗信息有限公司</p>
                            <span>$42231.00</span>
                        </li>
                        <li>
                            <strong>2</strong>
                            <p>品茗信息有限公司</p>
                            <span>$42231.00</span>
                        </li>
                        <li>
                            <strong>3</strong>
                            <p>品茗信息有限公司</p>
                            <span>$42231.00</span>
                        </li>
                        <li>
                            <strong>4</strong>
                            <p>品茗信息有限公司</p>
                            <span>$42231.00</span>
                        </li>
                        <li>
                            <strong>5</strong>
                            <p>品茗信息有限公司</p>
                            <span>$42231.00</span>
                        </li>
                    </ul>
                </div>
            </yxs-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7">
            <Ripple/>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="7">
           <Dynamic/>
        </a-col>
    </a-row>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Returns from './returns.vue'
import ProjectInfo from './project-info.vue'
import Ripple from './ripple.vue'
import Dynamic from './dynamic.vue'


export default defineComponent({
    components: {
        Returns,
        ProjectInfo,
        Ripple,
        Dynamic
    }
})
</script>
<style lang="less" scoped>
.welcome {
    display: flex;
    align-items: center;

    .head {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
    }

    .des {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        flex: 1;

        p {
            margin: 0;
        }

        h1 {
            font-size: 20px;
            font-weight: 600;
            color: @heading-color;
        }

        p {
            color: @text-color-secondary;
        }
    }
}

.money {
    &-header, &-footer {
        display: flex;
        align-items: center;

        .value {
            font-size: 18px;
            font-weight: bold;
            margin-left: 10px;
        }
    }

    &-content {
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0;

            li {
                display: flex;
                list-style: none;
                flex: 1;
                color: #d8d8d8;

                .fall,
                .rise {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                }

                .fall {
                    color: #13ae7c;
                }

                .rise {
                    color: #f21e37;
                }
            }
        }
    }

    &-header, &-footer, &-content {
        padding: 10px;
    }
}

.market {
    span {
        margin-right: 20px;
        color: @disabled-color;
        cursor: pointer;
    }

    span.active {
        color: @primary-color;
    }
}

.profit {
    &-header {
        display: flex;

        &-title {

        }

        &-tab {
            flex: 1;
            text-align: right;

            span {
                margin-left: 20px;
                color: @disabled-color;
                cursor: pointer;
            }

            span.active {
                color: @primary-color;
            }
        }
    }

    &-content {
        ul {
            margin-bottom: 0;

            li {
                display: flex;
                align-items: center;
                padding: 10px 0;
                cursor: pointer;

                strong {
                    display: inline-block;
                    border-radius: 50%;
                    text-align: center;
                    font-size: 12px;
                    width: 16px;
                    height: 16px;
                    line-height: 16px;
                    margin-right: 10px;
                    color: @primary-color;
                }

                p {
                    margin: 0;
                    flex: 1;
                }

                &:nth-last-child(n + 3) {
                    strong {
                        background-color: @primary-color;
                        color: #fff;
                    }
                }

                &:hover {
                    p {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>