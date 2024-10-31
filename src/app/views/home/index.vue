<template>
    <n-grid cols="12" y-gap="12" x-gap="12" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:7">
            <n-card title="欢迎您" :header-extra="()=>'今日多云转晴，18℃ - 26℃!'"
                    :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px">
                <div class="flex-row flex">
<!--                    <img alt="" class="w-[80px] rounded-[50%] h-[80px]" src="@/packages/assets/yanghang.jpg"/>-->
<!--                    <div class="ml-5">-->
<!--                        <h1 class="font-bold text-[20px] mb-1">嗨，{{ tleData.pam }} 今天是{{ tleData.date }}-->
<!--                            {{ tleData.week }} {{-->
<!--                                tleData.time-->
<!--                            }}，准备吃什么呢?</h1>-->
<!--                        <p class="text-justify">前端工程师 |-->
<!--                            品茗科技，vue-bag-admin，🍁采用Vite5、Vue3、Pinia 、Naive UI-->
<!--                            构建，框架使用的方式属于插件式开发，它允许开发者在不修改原有代码基础上扩展功能、增加新的处理逻辑，使得应用更加模块化和易于维护。这种模式特别适用于那些需要高度可扩展性和可定制性的应用程序</p>-->
<!--                    </div>-->
                </div>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:5">
            <n-card title="群消息" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-statistic label="你一共处理了" tabular-nums>
                    <n-number-animation ref="numberAnimationInstRef" show-separator :from="0" :to="1203459"/>
                    <template #suffix>
                        条群消息
                    </template>
                </n-statistic>
                <n-space vertical>
                    花时间、花精力、花心思，愿你每一份努力都不负所望
                    <n-button @click="numberAnimationInstRef.play()">
                        播放
                    </n-button>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:8">
            <n-card title="数据分析" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">

                <div class="flex flex-col">
                    <div></div>
                </div>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import {onBeforeRouteLeave} from "vue-router"
const value = ref('')
const numberAnimationInstRef = ref();
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
    date: $global.dayjs.default().format("YYYY年MM月DD日"),
    time: $global.dayjs.default().format("HH时mm分ss秒"),
    week: "星期" + "日一二三四五六".charAt(parseInt($global.dayjs.default().format("d"))),
    pam: getPamFormat($global.dayjs.default().format("HH")),
})
let intervalTimer = setInterval(() => {
    tleData.time = $global.dayjs.default().format("HH时mm分ss秒")
}, 1000)
onBeforeRouteLeave(() => {
    clearInterval(intervalTimer)
})
onMounted(() => {
})
</script>


