<template>
    <n-grid cols="12" y-gap="12" x-gap="12" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:7">
            <n-card title="欢迎您" :header-extra="()=>'今日多云转晴，18℃ - 26℃!'"
                    :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px">
                <div class="flex-row flex">
                    <img alt="" class="w-[80px] rounded-[50%] h-[80px]" src="@/packages/assets/yanghang.jpg"/>
                    <div class="ml-5">
                        <h1 class="font-bold text-[19px] mb-1">嗨，{{ tleData.pam }} 今天是{{ tleData.date }}
                            {{ tleData.week }} {{
                                tleData.time
                            }}，准备吃什么呢?</h1>
                        <p class="text-justify">前端工程师 |
                            品茗科技，vue-bag-admin，🍁采用Vite5、Vue3、Pinia 、Naive UI
                            构建，框架使用的方式属于插件式开发，它允许开发者在不修改原有代码基础上扩展功能、增加新的处理逻辑，使得应用更加模块化和易于维护，这种模式特别适用于那些需要高度可扩展性和可定制性的应用程序</p>
                    </div>
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
        <n-grid-item span="12 m:12 l:6">
            <n-card title="" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">

                <n-descriptions label-placement="top" bordered :column="6">
                    <n-descriptions-item label="早餐">
                        苹果
                    </n-descriptions-item>
                    <n-descriptions-item label="早午餐">
                        零食/水果
                    </n-descriptions-item>
                    <n-descriptions-item label="午餐">
                        大米饭
                    </n-descriptions-item>
                    <n-descriptions-item label="晚餐">
                        水饺
                    </n-descriptions-item>
                    <n-descriptions-item label="正餐">
                        大米饭
                    </n-descriptions-item>
                    <n-descriptions-item label="夜宵">
                        烧烤
                    </n-descriptions-item>
                    <n-descriptions-item label="苹果">
                        烧烤
                    </n-descriptions-item>
                    <n-descriptions-item label="苹果" :span="2">
                        苹果
                    </n-descriptions-item>
                    <n-descriptions-item label="苹果" :span="3">
                        苹果
                    </n-descriptions-item>
                </n-descriptions>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="精彩瞬间" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel show-arrow>
                    <img
                        class="w-full h-[240px] object-cover"
                        alt=""
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    >
                    <img
                        class="w-full h-[240px] object-cover"
                        alt=""
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    >
                    <img
                        class="w-full h-[240px] object-cover"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                        alt="">
                    <img
                        class="w-full h-[240px] object-cover"
                        alt=""
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    >
                </n-carousel>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:5">
            <n-card title="数据分析" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <div id="echarts1" style="width: 100%;height:240px;"></div>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:7">
            <n-card title="快捷入口" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-space :size="[20,20]" align="center">
                    <div @click="$global.router.push(item.path)" v-for="item in fastData"
                         class="p-3 cursor-pointer border border-blue-50 w-[100px] text-center rounded-md">
                        <component class="text-[20px]" :is="item.icon"></component>
                        <h3 class="hover:font-extrabold">{{ item.title }}</h3>
                    </div>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="博客文章" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <div class="h-[240px] overflow-y-scroll">
                    <n-timeline>
                        <n-timeline-item title="一个人-一座城，一个人做了很多事" time="2023年11月11日 00:10" content="我一个人，独自在这个城市里生活了很久,这个城市，是我曾经的梦想，也是我现在的现实，在这里，我做了很多事情，经历了很多人生的起伏和波折"/>
                        <n-timeline-item
                            type="success"
                            title="看完这篇文章恍然大悟,Web 终极拦截技巧"
                            content="如果系统的控制权、代码完全被掌控，很容易添加中间层；现实情况我们往往无法控制系统的所有环节，所以需要使用一些  “非常规”（拦截）  手段来增加中间层。"
                            time="2024年4月9日 21:46"
                        />
                        <n-timeline-item type="error" title="关于前端配置Nginx的知识，你可能需要略知一二" content="在前端开发中，Nginx不仅仅是一款高效的Web服务器，更是一个强大的工具，能够显著提升Web应用的性能和用户体验" time="2024年2月28日 19:10"/>
                        <n-timeline-item
                            type="warning"
                            title="开发UI组件库第一步，Vite如何把Markdown转换Vue组件"
                            content="开发一个 UI 组件库时，将 Markdown 转换成 Vue 组件是一个常见需求，特别是在创建文档或样例展示时，此时我们需要将它转换为组件"
                            time="2024年3月2日 10:26"
                        />
                        <n-timeline-item
                            type="info"
                            title="两点一线的生活"
                            content="回家，在杭州基本也没有什么同学朋友的，都是同事，杭漂有5年了，该回家的回家了"
                            time="2024年1月30日 23:31"
                            line-type="dashed"
                        />
                        <n-timeline-item content="......"/>
                    </n-timeline>
                </div>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="你好，我是羊先生" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px 10px;height:100%">
                <n-tabs type="line" animated>
                    <n-tab-pane name="oasis" tab="一段独白">
                        今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了...<br>
                        陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡<br>
                        欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场~~
                    </n-tab-pane>
                    <n-tab-pane name="the beatles" tab="发展里程">
                        2017年接触了php、mysql之后，就萌生了做一个自己的博客系统来记录展示自己平时所遇到的问题<br>
                        2018年因博客陆陆续续的有人注册，选择了Tpt-Content开源博客管理<br>
                        2019年看到网站的每日访问pv数由以前的20左右上升到了50左右，前端使用vue2.0加webpack4配置多页面，后台管理+API采用layui+thinkPHP5.0<br>
                        2020年这一年来之不易，有面对疫情的外在环境，有面对新工作环境的适应，不过我还是在坚持创作，更新，学习<br>
                        2021年这一年我侧重于前端工程化建设，在企业从0到1开始制作PM-UI框架，以及工程化模板建设<br>
                        2022年这一年我在目前所在公司晋升了前端主管，更多的精力放在了前端基础建设中，开发Vue-Bag-Admin管理系统框架<br>
                        2023在Github前获得了近1k的start项目，也在年中获得创新奖，也在年终获得前端优秀团队，有幸获奖，感恩遇见<br>
                        2024年我的脚本没有停，<a class="text-cyan-200" href="https://www.vipbic.com/about.html"
                                                target="_blank">详情请看</a><br>
                    </n-tab-pane>
                    <n-tab-pane name="jay chou" tab="个人状态">
                        <ul>
                            <li>那一代人：93后</li>
                            <li>身板：170cm</li>
                            <li>上过的学：书读的少，中途肄业</li>
                            <li>婚姻状态：<span style="color: rgb(80, 103, 134);">未婚，小生想找个女朋友🤪🤪🤪</span></li>
                        </ul>
                    </n-tab-pane>
                </n-tabs>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import {init} from "echarts"
import echarts1 from "./echarts1.js"
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

const fastData = ($globalStore.menus.find(item => item.title === '组件')).children
onBeforeRouteLeave(() => {
    clearInterval(intervalTimer)
})
onMounted(() => {
    const myChart = init(document.getElementById('echarts1'));
    myChart.setOption(echarts1(fastData));
})
const handleBeforeLeave = (tabName) => {
    switch (tabName) {
        case "not-allowed":
            $global.naive.message.error("不许进来");
            return false;
        case "wait":
            return new Promise((resolve) => {
                const messageInstance = $global.naive.message.loading("Wait for 1s");
                setTimeout(() => {
                    messageInstance.destroy();
                    resolve(true);
                }, 1e3);
            });
        default:
            return true;
    }
}
const handleUpdateValue = (value) => {
    $global.naive.message.info(value);
}
</script>


