<template>
    <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <bag-card>
                <template v-slot:title>欢迎您</template>
                <div class="welcome">
                    <div class="head"><img src="@/packages/assets/image/yanghang.jpg" alt=""></div>
                    <div class="des">
                        <h1>嗨，{{ tleData.pam }}好，今天是{{ tleData.date }} {{ tleData.week }} {{
                                tleData.time
                            }}，准备吃什么呢?</h1>
                        <p>前端工程师 |
                            品茗股份，vue-bag-admin，采用Vite3.1、Vue3.2、TypeScript、JavaScript构建，支持多种写法和调用，完整的框架体系，适合企业中后台响应式管理系统，支持现有业务各种扩展....</p>
                    </div>
                </div>
            </bag-card>
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
            <bag-card :loading="false">
                <div class="money">
                    <div class="money-header">
                        <span class="label">2021全国销售额</span>
                        <span class="value">
                            ￥<CountTo :startVal="0" :endVal="125920.00" :duration="1800"></CountTo>
                        </span>
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
                        <span class="value">
                            ￥<CountTo :startVal="0" :endVal="9362.00" :duration="1800"></CountTo>
                        </span>
                    </div>
                </div>
            </bag-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
            <bag-card :loading="false">
                <div class="money">
                    <div class="money-header">
                        <span class="label">总销售额</span>
                        <span class="value">
                            ￥<CountTo :startVal="0" :endVal="65920.00" :duration="3600"></CountTo>
                        </span>
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
                        <span class="value">
                            ￥<CountTo :startVal="0" :endVal="5598.00" :duration="3600"></CountTo>
                        </span>
                    </div>
                </div>
            </bag-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8">
            <bag-card :loading="false">
                <div class="money">
                    <div class="money-header">
                        <span class="label">总销售额</span>
                        <span class="value">
                            ￥<CountTo :startVal="0" :endVal="35920.00" :duration="3600"></CountTo>
                        </span>
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
                        <span class="value">
                            ￥<CountTo :startVal="0" :endVal="13567.00" :duration="3600"></CountTo>
                        </span>
                    </div>
                </div>
            </bag-card>
        </a-col>
    </a-row>
    <a-row :gutter="[16,0]">
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="10">
            <bag-card :loading="loading" class="profit">
                <template v-slot:title>
                    <div class="profit-header">
                        <div class="profit-header-title">项目盈利占比</div>
                        <div class="profit-header-tab  hidden-xs">
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
            </bag-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="7">
            <a-skeleton :loading="loading" active>
                <Ripple/>
            </a-skeleton>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="7">
            <a-skeleton :loading="loading" active>
                <Dynamic/>
            </a-skeleton>
        </a-col>
    </a-row>
    <a-row :gutter="[16,0]">
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="10">
            <bag-card :loading="loading">
                <template v-slot:title>项目进度</template>
                <div class="schedule-strip">
                    <a-progress :percent="30"/>
                    <a-progress :percent="50" status="active"/>
                    <a-progress :percent="70" status="exception"/>
                    <a-progress :percent="100"/>
                    <a-progress :percent="50" :show-info="false"/>
                </div>
            </bag-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
            <bag-card :loading="loading">
                <template v-slot:title>项目进度</template>
                <div class="schedule-lop">
                    <a-row style="height: 100%" justify="center" align="middle" :wrap="true" :gutter="[32,16]">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="8">
                            <a-progress type="circle" :percent="75"/>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="8">
                            <a-progress type="circle" :percent="70" status="exception"/>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="8">
                            <a-progress type="circle" :percent="100"/>
                        </a-col>
                    </a-row>
                </div>
            </bag-card>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="6">
            <bag-card :loading="loading">
                <template v-slot:title>时间轴</template>
                <div class="timeline">
                    <a-timeline pending="持续更新中..." :reverse="false">
                        <a-timeline-item>创建vite3.1+vue3.2+typescript构建管理系统</a-timeline-item>
                        <a-timeline-item>添加对各种组件编写支持</a-timeline-item>
                        <a-timeline-item>完善管理系统基础配置权限、菜单、跳转控制</a-timeline-item>
                        <a-timeline-item>持续更新中...</a-timeline-item>
                    </a-timeline>
                </div>
            </bag-card>
        </a-col>
    </a-row>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import Returns from './Returns.vue'
import ProjectInfo from './ProjectInfo.vue'
import Ripple from './Ripple.vue'
import Dynamic from './Dynamic.vue'
import dayjs from 'dayjs';
import {CountTo} from 'vue3-count-to'

export default defineComponent({
    name: 'home',
    components: {
        Returns,
        ProjectInfo,
        Ripple,
        Dynamic,
        CountTo
    },
    setup() {
        const loading = ref(true)
        setTimeout(() => {
            loading.value = false
        }, 800)


        const tleData = reactive({
            date: dayjs().format('YYYY年MM月DD日'),
            time: dayjs().format('HH时mm分ss秒'),
            week: '星期' + '日一二三四五六'.charAt(parseInt(dayjs().format('d'))),
            pam: dayjs().format('A'),
        })

        let tleDataTime = function () {
            setTimeout(() => {
                tleData.time = dayjs().format('HH时mm分ss秒')
                tleDataTime()
            }, 1000)
        }
        tleDataTime()
        return {
            loading,
            tleData
        }
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

.schedule-strip {
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;
}

.schedule-lop {
    text-align: center;
    height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.timeline {
    height: 200px;
    overflow-y: scroll;
}
</style>
