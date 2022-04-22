<template>
    <bag-view>
        <h1>简介</h1>
        <p>G2Plot 是一套简单、易用、并具备一定扩展能力和组合能力的统计图表库，基于图形语法理论搭建而成，"G2Plot"中的 G2 即意指图形语法 (the Gramma of Graphics)，同时也致敬了
            ggplot2。</p>
        <br/>
        <h1>特性</h1>
        <p>📦 开箱即用、默认好用的高质量统计图表</p>
        <p> 🎨 提炼自企业级产品的视觉语言和设计规范</p>
        <p>📊 响应式图表：致力于解决图表在任何数据和显示尺寸下的基本可读性问题</p>
        <p>🔳 图层化设计方法：在 G2Plot 体系下，图表不仅仅只是各不相关的实例，图层概念的引入提供了多图表组合叠联动，共同讲述一个数据故事的可能性</p>
        <br/>
        <a-typography-link href="https://g2plot.antv.vision/zh/examples/gallery" target="_blank">查看官方[更多參考例子]</a-typography-link>
    </bag-view>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'chart-g2plot'
})
</script>
<style lang="less" scoped>
h1{
    font-size: 26px;
    margin-bottom: 10px;
}
p{
    font-size: 16px;
    line-height: 30px;
}
</style>
