<template>
    <bag-card>
        <template v-slot:title>
            <span class="active">收益额</span>
            <span>销售额</span>
        </template>
        <div class="market-info">
            <div id="container" ref="mountNode"></div>
        </div>
    </bag-card>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {Chart} from "@antv/g2";

export default defineComponent({
    setup() {
        function container() {
            const data = [
                {type: '1-3秒', value: 0.16},
                {type: '4-10秒', value: 0.125},
                {type: '11-30秒', value: 0.24},
                {type: '31-60秒', value: 0.19},
                {type: '1-3分', value: 0.22},
                {type: '3-10分', value: 0.05},
                {type: '10-30分', value: 0.21},
                {type: '30+分', value: 0.015},
            ];

            const chart = new Chart({
                container: 'container',
                autoFit: true,
                height: 208,
            });
            chart.data(data);
            chart.scale('value', {
                nice: true,
            });
            chart.axis('type', {
                tickLine: null,
                line: null
            });
            chart.axis('value', {
                line: null,
                grid: null,
                subTickLine: null,
                label: {
                    formatter: (val) => {
                        return +val * 100 + '%';
                    },
                },
            });
            chart.coordinate({})
            chart.tooltip({
                showMarkers: false,
            });
            chart.legend(false);
            chart.interval({
                background: {
                    style: {
                        radius: 8,
                    },
                },
            }).position('type*value')
                .color('type', (val) => {
                    if (val === '10-30分' || val === '30+分') {
                        return '#ff4d4f';
                    }
                    return '#13C2C2';
                })
                .label('value', {
                    // @ts-ignore
                    content: (originData) => {
                        const val = parseFloat(originData.value);
                        if (val < 0.05) {
                            return (val * 100).toFixed(1) + '%';
                        }
                    },
                    offset: 10,
                });
            chart.render();
        }

        onMounted(() => {
            container()
        })
    }
})
</script>
