<template>
    <div ref="main" style="width:100%;height:400px;"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
    mounted() {
        echarts.init(this.$refs.main).setOption(option);
    }
}
</script>