<template>
    <yxs-view>
        <div><demo1/></div>
        <div><demo2/></div>
        <div><demo3/></div>
    </yxs-view>
</template>
<script>
import {defineComponent} from 'vue'
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
export default defineComponent({
    name:'chart-echarts',
    components:{
        demo1,
        demo2,
        demo3
    }
})
</script>