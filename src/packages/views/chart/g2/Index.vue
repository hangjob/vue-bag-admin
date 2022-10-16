<template>
    <bag-view>
        <h1>G2 简介</h1>
        <p>G2 是一套基于图形语法理论的可视化底层引擎，以数据驱动，提供图形语法与交互语法，具有高度的易用性和扩展性。使用 G2，你可以无需关注图表各种繁琐的实现细节，一条语句即可使用 Canvas 或 SVG 构建出各种各样的可交互的统计图表</p>
        <br/>
        <h1>✨ 特性</h1>
        <p>💯 完善的图形语法：数据到图形的映射，能够绘制出所有的图表。</p>
        <p>🤩 全新的交互语法：通过触发和反馈机制可以组合出各种交互行为，对数据进行探索。</p>
        <p>🦍 强大的 View 模块：可支持开发个性化的数据多维分析图形。</p>
        <p>👬 双引擎渲染：Canvas 或 SVG 任意切换。</p>
        <p>💄 可视化组件体系：面向交互、体验优雅。</p>
        <p>🛡 全面拥抱 TypeScript：提供完整的类型定义文件。</p>
        <br/>
        <a-typography-link href="https://g2.antv.vision/zh/examples/gallery" target="_blank">查看官方[更多參考例子]</a-typography-link>
    </bag-view>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name:'chart-g2'
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
