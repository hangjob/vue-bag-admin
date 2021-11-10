<template>
    <div ref="main" style="width:100%;height:400px;"></div>
</template>
<script>
import * as echarts from "echarts";

let option = {
    backgroundColor:"white",
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 140],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                {value: 40, name: '板块一'},
                {value: 38, name: '板块二'},
                {value: 32, name: '板块三'},
                {value: 30, name: '板块四'},
                {value: 28, name: '板块五'},
                {value: 26, name: '板块六'},
                {value: 22, name: '板块七'},
                {value: 18, name: '板块八'}
            ]
        }
    ]
};
export default {
    mounted() {
        echarts.init(this.$refs.main).setOption(option);
    }
}
</script>