<template>
    <n-card :segmented="{content: true,footer:true}" header-style="padding:10px" footer-style="padding:10px"
            content-style="">
        <template #header>
            瀑布流组件
        </template>
        <template #header-extra>
            <n-tag type="success">vue-waterfall-plugin-next</n-tag>
        </template>
        <Waterfall :row-key="options.rowKey"
                   :gutter="options.gutter"
                   :has-around-gutter="options.hasAroundGutter"
                   :width="options.width"
                   :breakpoints="options.breakpoints"
                   :img-selector="options.imgSelector"
                   :background-color="options.backgroundColor"
                   :animation-effect="options.animationEffect"
                   :animation-duration="options.animationDuration"
                   :animation-delay="options.animationDelay"
                   :lazyload="options.lazyload"
                   :list="compData.items">
            <template #item="{item}">
                <div class="waterfall-item" :style="item.style">
                    <span>君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。</span>
                </div>
            </template>
        </Waterfall>
    </n-card>
</template>
<script lang="ts">
import {defineComponent, reactive} from "vue"
import {Waterfall} from "vue-waterfall-plugin-next"
import "vue-waterfall-plugin-next/dist/style.css"

export default defineComponent({
    components:{
        Waterfall,
    },
    setup(){
        const options = reactive({
            // 唯一key值
            rowKey: "id",
            // 卡片之间的间隙
            gutter: 20,
            // 是否有周围的gutter
            hasAroundGutter: true,
            // 卡片在PC上的宽度
            width: 250,
            // 自定义行显示个数，主要用于对移动端的适配
            breakpoints: {
                1200: {
                    // 当屏幕宽度小于等于1200
                    rowPerView: 5,
                },
                800: {
                    // 当屏幕宽度小于等于800
                    rowPerView: 3,
                },
                500: {
                    // 当屏幕宽度小于等于500
                    rowPerView: 1,
                },
            },
            // 动画效果
            animationEffect: "animate__fadeInUp",
            // 动画时间
            animationDuration: 1000,
            // 动画延迟
            animationDelay: 300,
            // 背景色
            backgroundColor: "",
            // imgSelector
            imgSelector: "src.original",
            // 是否懒加载
            lazyload: true,
        })
        const items = []

        const genBetweenRight = (m, n) => Math.floor(Math.random() * (n - m) + 1) + m
        const rdmRgbColor = () =>{
            let arr = []
            for (let i = 0; i < 3; i++) {
                arr.push(Math.floor(Math.random() * 128 + 64))
                arr.push(Math.floor(Math.random() * 128 + 128))
            }
            let [r, g, b] = arr
            return `#${r.toString().length > 1 ? r.toString() : "0" + r.toString()}${g.toString().length > 1 ? g.toString() : "0" + g.toString()}${
                b.toString().length > 1 ? b.toString() : "0" + b.toString()}`
        }
        for (let i = 0; i < 90; i++) {
            items.push({
                style:{
                    height:genBetweenRight(100,300) + "px",
                    "background-color":rdmRgbColor()
                },
            })
        }
        const compData = reactive({
            items
        })
        return {
            compData,
            options
        }
    }
})
</script>
<script setup>
</script>
<style lang="less" scoped>
.waterfall-item{
    border: 1px solid var(--code-color);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 3px;
}
</style>
