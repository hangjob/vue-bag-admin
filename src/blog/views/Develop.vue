<template>
    <section class="py-[80px] bg-[#FFFFFF] text-white section-container">
        <h1 class="text-[50px] text-[#333] font-bold text-center">主题开发</h1>
        <p class="text-[#808080] mb-10 text-center">Bag是一个开源的系统，更希望有更多的人和我一起开发主题.</p>
        <div>
            <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
                <n-grid-item v-for="item in compData.items" class="wow animate__animated animate__fadeInTopLeft"
                             data-wow-duration="1.0s"
                             data-wow-delay="0.2s" span="12 m:12 l:6">
                    <div class="flex items-center py-[20px] px-[10px]">
                        <n-icon size="60" :color="item.color">
                            <component :is="item.icon"></component>
                        </n-icon>
                        <div class="flex pl-2 flex-col justify-between">
                            <h5 class="text-[14px] text-[#333] font-bold">{{ item.title }}</h5>
                            <p class="text-[#333]">{{ item.des }}</p>
                        </div>
                    </div>
                </n-grid-item>
            </n-grid>
        </div>
    </section>
</template>
<script setup>
import {LogoIonic, LogoNodejs, ColorPaletteOutline, BicycleSharp, Construct, HappyOutline} from "@vicons/ionicons5"

const compData = reactive({
    items: [
        {
            title: '好动手',
            des: '我专注的领域对于每件事有自己独立的看法，亲自动手去尝试，看是否符合自己的预期.',
            icon: markRaw(Construct),
            color:'#3ab0e2',
        },
        {
            title: '懂技术',
            des: '掌握JavaScript/Node语言，掌握Vue/Egg.js框架，能够熟练应用Vue生态插件，了解webpack、gulp、nginx工作原理，良好的数据库知识',
            icon: markRaw(LogoNodejs),
            color:'#e96656',
        },
        {
            title: '小机灵',
            des: '看到好的设计，能想到如何设计一个好的模板，并且在设计的过程中发现Bag的程序的不足，提出来进行更正',
            icon: markRaw(HappyOutline),
            color:'#34d293',
        },
        {
            title: '好奇心',
            des: '好奇心的程序员不断致力于创新技术，喜欢思考，爱钻研，善于解决问题',
            icon: markRaw(LogoIonic),
            color:'#409eff',
        },
        {
            title: '有审美',
            des: '懂有色彩搭配，网站布局的技巧，模块合理性的摆放，利用CSS3和JavaScript制作简单用户回馈动画.',
            icon: markRaw(ColorPaletteOutline),
            color:'#ffca28',
        },
        {
            title: '有耐心',
            des: '制作的一个好的主题，就像木匠一样，需要细心打磨，耐心、细心、用心，有些事不是看到希望才坚持，而是坚持了才能看到希望',
            icon: markRaw(BicycleSharp),
            color:'#4fc3f7',
        }
    ]
})
</script>
<style lang="less" scoped>

</style>
