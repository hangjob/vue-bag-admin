<template>
    <n-grid cols="24" y-gap="12" x-gap="12" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:14">
            <n-card style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <template #header>
                    欢迎您
                </template>
                <div class="home-head">
                    <n-image width="80" style="border-radius: 50%"
                             :src="headImg"></n-image>
                    <div style="margin-left: 20px">
                        <h1 class="title">嗨，{{ tleData.pam }} 今天是{{ tleData.date }} {{ tleData.week }} {{
                                tleData.time
                            }}，准备吃什么呢?</h1>
                        <p class="des">前端工程师 |
                            阿里巴巴，vue-bag-admin，采用Vite4.4、Vue3.3、TypeScript、JavaScript构建，支持多种写法和调用，完整的框架体系，适合响应式中后台管理系统，支持现有业务各种扩展....</p>
                    </div>
                </div>
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:24 l:10">
            <n-card :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;">
                <template #header>
                    信息
                </template>
                <n-table size="small" bordered :single-line="false">
                    <tbody>
                    <tr>
                        <td>Vue</td>
                        <td>^3.3.4</td>
                        <td>Vite</td>
                        <td>^4.4.5</td>
                    </tr>
                    <tr>
                        <td>Axios</td>
                        <td>^1.4.0</td>
                        <td>Pinia</td>
                        <td>^2.1.6</td>
                    </tr>
                    <tr>
                        <td>Vue-router</td>
                        <td>^4.2.4</td>
                        <td>Naive-ui</td>
                        <td>^2.34.4</td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <n-space align="center" justify="space-between">
                                <span>快到碗里来</span>
                                <n-button-group>
                                    <n-button type="primary" @click="compData.handleSkip('/doc/index.html')">使用文档
                                    </n-button>
                                    <n-button type="primary"
                                              @click="compData.handleSkip('https://github.com/hangjob/vue-bag-admin')">
                                        GitHub
                                    </n-button>
                                    <n-button type="primary"
                                              @click="compData.handleSkip('https://www.npmjs.com/package/vue-bag-admin')">
                                        点击安装
                                    </n-button>
                                </n-button-group>
                            </n-space>
                        </td>
                    </tr>
                    </tbody>
                </n-table>
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:24 l:24">
            <n-card :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:40px; 0px">
                <template #header>
                    快捷入口
                </template>
                <n-space justify="space-around">
                    <n-card size="huge" :key="idx" v-for="(item,idx) in compData.menus">
                        <n-badge :value="item.number" :color="item.color">
                            <n-space @click="compData.handleRouter(item)" align="center" vertical>
                                <div class="icon">
                                    <n-icon :color="item.color" size="24">
                                        <component :is="item.icon"></component>
                                    </n-icon>
                                </div>
                                <h3>{{ item.title }}</h3>
                            </n-space>
                        </n-badge>
                    </n-card>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:24 l:12">
            <n-card :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:0px;">
                <template #header>

                </template>
                <div id="main" style="height: 300px;"></div>
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:24 l:12">
            <n-card :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:20px 5px 20px 20px">
                <n-scrollbar style="max-height: 260px">
                    <n-timeline>
                        <n-timeline-item
                            v-for="(item,idx) in compData.timeline"
                            :type="item.type"
                            :title="item.title"
                            :content="item.content"
                            :time="item.time"
                            :key="idx"
                        />
                    </n-timeline>
                </n-scrollbar>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script lang="ts">
import {defineComponent, reactive, onMounted} from "vue"
import {menus, timeline} from "@/app/admin/view/home/data.ts"
import * as echarts from "echarts"
import dayjs from "dayjs"
import {useRouter} from "vue-router"
import  headImg from "@/packages/assets/yanghang.jpg"
function echartInit() {
    const chartDom = document.getElementById("main")
    const myChart = echarts.init(chartDom)
    const option = {
        grid: {
            x: 50,
            y: 30,
            x2: 10,
            y2: 30,
        },
        xAxis: {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            splitLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                show: true,
                color: "#a4a4a4",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#ddd",
                    width: 1,
                    type: "solid",
                },
            },
        },
        yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                show: true,
                color: "#a4a4a4",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#ddd",
                    width: 1,
                    type: "solid",
                },
            },
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: "bar",
                barWidth: 35,
                label: {
                    formatter: (params) => {
                        return `${params.value}`
                    },
                    show: true,
                    position: "top",
                },
                showBackground: true,
                fontSize: "12px",
                backgroundStyle: {
                    color: "rgba(110, 193, 244, 0.2)",
                    borderRadius: [5, 5, 0, 0],
                },
                itemStyle: {
                    // 这里就可以实现，配置柱状图的颜色
                    color: function (params) {
                        let colorList = ["#1ec4c5", "#1ec4c5", "#FCCE10", "#E87C25", "#fe5558", "#fe5558", "#fe5558"]
                        return colorList[params.dataIndex]
                    },
                    borderRadius: [5, 5, 0, 0],
                },
            },
        ]
    }
    myChart.setOption(option)
}

export default defineComponent({
    setup() {
        const router = useRouter()
        onMounted(() => {
            echartInit()
        })
        const getPamFormat = (hour) => {
            if (hour < 6) {
                return "凌晨好！"
            } else if (hour < 9) {
                return "早上好！"
            } else if (hour < 12) {
                return "上午好！"
            } else if (hour < 14) {
                return "中午好！"
            } else if (hour < 17) {
                return "下午好！"
            } else if (hour < 19) {
                return "傍晚好！"
            } else if (hour < 22) {
                return "晚上好！"
            } else {
                return "夜里好！"
            }
        }
        const tleData = reactive({
            date: dayjs().format("YYYY年MM月DD日"),
            time: dayjs().format("HH时mm分ss秒"),
            week: "星期" + "日一二三四五六".charAt(parseInt(dayjs().format("d"))),
            pam: getPamFormat(dayjs().format("HH")),
        })

        let tleDataTime = function () {
            setTimeout(() => {
                tleData.time = dayjs().format("HH时mm分ss秒")
                tleDataTime()
            }, 1000)
        }
        tleDataTime()
        const compData = reactive({
            menus,
            timeline,
            handleSkip(url) {
                window.open(url)
            },
            handleRouter(item: any) {
                router.push(item.path)
            }
        })
        return {
            tleData,
            compData,
            headImg
        }
    }
})
</script>
<style lang="less" scoped>
.home-head {
    display: flex;
    align-items: center;
    height: 100%;

    .title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .des {

    }
}

.icon {
    text-align: center;
    background-color: var(--n-border-color);
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: 80px;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;
}
</style>
