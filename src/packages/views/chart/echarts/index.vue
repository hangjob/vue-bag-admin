<template>
    <yxs-view class="echarts">
        <h1>ECharts 简介</h1>
        <p>ECharts它是一个纯JavaScript的图标库，兼容绝大部分的浏览器，底层依赖轻量级的canvas类库ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。创新的拖拽重计算、数据视图、值域漫游等特性大大增强了用户体验，赋予了用户对数据进行挖掘、整合的能力</p>
        <br/>
        <h1>数据集</h1>
        <p>📊ECharts 5 加强了数据集的数据转换能力，让开发者可以使用简单的方式实现常用的数据处理，如：数据过滤（filter）、排序（sort）、聚合（aggregate）、直方图（histogram）、简单聚类（clustering）、回归线计算（regression）等。开发者可以用统一的声明式方式来使用这些功能，可以方便地实现常用的数据操作</p>
        <br/>
        <h1>TypeScript 重构</h1>
        <p>🦍 在近 8 年的时间里，Apache ECharts 已经发展成一个非常复杂的可视化库了，为了可以更安全高效的进行重构和新功能的开发，我们在 Apache ECharts 5 的开发之初，使用 TypeScript 对代码进行了重写，TypeScript 所带来的强类型让我们更有信心地在 ECharts 5 开发的时候对代码进行大刀阔斧的重构以实现更多令人激动人心的特性</p>
        <br/>
        <br/>
        <a-row :gutter="[16,16]">
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                <div class="item">
                    <demo4/>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                <div class="item">
                    <demo6/>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                <div class="item">
                    <demo3/>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                <div class="item">
                    <demo5/>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                <div class="item">
                    <demo1/>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                <div class="item">
                    <demo2/>
                </div>
            </a-col>
        </a-row>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
// interface FileType {
//     [key: string]: Component
// }
// const cmps:any = {}
// const files = import.meta.glob('./*.vue');
// Object.keys(files).forEach((item:any)=>{
//    console.log(item)
// })
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'

export default defineComponent({
    name: 'chart-echarts',
    components: {
        demo1,
        demo2,
        demo3,
        demo4,
        demo5,
        demo6
    }
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
.echarts {
    .item {
        box-shadow: 0 0 10px rgb(0 0 0 / 10%);
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

</style>