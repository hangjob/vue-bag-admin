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
                            品茗股份，vue-bag-admin，采用Vite2.0、Vue3.2、TypeScript、JavaScript构建，支持多种写法和调用，完整的框架体系，适合企业中后台响应式管理系统，支持现有业务各种扩展....</p>
                    </div>
                </div>
            </bag-card>
        </a-col>
    </a-row>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import * as dayjs from 'dayjs'
export default defineComponent({
    name: 'home',
    setup() {

        const tleData = reactive({
            date: dayjs().format('YYYY年MM月DD日'),
            time: dayjs().format('HH时mm分ss秒'),
            week: '星期' + '日一二三四五六'.charAt(parseInt(dayjs().format('d'))),
            pam: dayjs().format('A'),
        })

        let tleDataTime = function() {
            setTimeout(() => {
                tleData.time = dayjs().format('HH时mm分ss秒')
                tleDataTime()
            }, 1000)
        }
        tleDataTime()
        return {
            tleData,
        }
    },
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
