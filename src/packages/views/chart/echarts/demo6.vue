<template>
    <div ref="main" style="width:100%;height:400px;"></div>
</template>
<script>
import * as echarts from "echarts";

let option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: true
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'bar',
            stack: '产品',
            seriesLayoutBy: 'column',
            label: {
                show: true,
                position: 'inside'
            },
            encode: {
                x: 'product',
                y: '2012',
                itemName: 'product',
                value: '2012'
            }
        },
        {
            type: 'bar',
            stack: '产品',
            seriesLayoutBy: 'column',
            label: {
                show: true,
                position: 'inside'
            },
            encode: {
                x: 'product',
                y: '2013',
                itemName: 'product',
                value: '2013'
            }
        },
        {
            type: 'bar',
            stack: '产品',
            seriesLayoutBy: 'column',
            label: {
                show: true,
                position: 'inside'
            },
            encode: {
                x: 'product',
                y: '2014',
                itemName: 'product',
                value: '2014'
            }
        },
        {
            type: 'bar',
            stack: '产品',
            seriesLayoutBy: 'column',
            label: {
                show: true,
                position: 'inside'
            },
            encode: {
                x: 'product',
                y: '2015',
                itemName: 'product',
                value: '2015'
            }
        }
    ]
};

export default {
    mounted() {
        echarts.init(this.$refs.main).setOption(option);
    }
}
</script>