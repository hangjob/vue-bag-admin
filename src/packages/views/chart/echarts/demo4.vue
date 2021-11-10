<template>
    <div ref="main" style="width:100%;height:400px;"></div>
</template>
<script>
import * as echarts from "echarts";

function contains(arr, dst) {
    let i = arr.length;
    while (i -= 1) {
        if (arr[i] === dst) {
            return i;
        }
    }
    return false;
}

let attackSourcesData = [70, 68, 30, 21, 12];
let attackSourcesName = ['产品A', '产品B', '产品C', '产品D', '产品E'];
let attackSourcesColor = ['#f36c6c', '#e6cf4e', '#0093ff', '#20d180', '#1089E7'];

function attackSourcesDataFmt(sData) {
    let sss = [];
    sData.forEach(function (item, i) {
        let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
        }
        sss.push({
            value: item,
            itemStyle: itemStyle
        });
    });
    return sss;
}
let option = {
    backgroundColor:"white",
    title: {
        text: '产品不良数top5',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 28,
        },
        top: '5%',
        left: 'center',
    },
    tooltip: {
        show: true,
        // backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
        textStyle: {
            fontSize: 16
        },
        //trigger: 'axis',
        //axisPointer: {
        //    type: 'shadow'
        //}
    },
    legend: {
        show: false
    },
    grid: {
        left: 250,
        bottom: 20,
        right: 60,
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: attackSourcesName,
        axisLabel: {
            margin: 210,
            fontSize: 14,
            align: 'left',
            color: '#333',
            rich: {
                nt1: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[0],
                    width: 30,
                    height: 30,
                    fontSize: 20,
                    align: 'center',
                    borderRadius: 100
                },
                nt2: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[1],
                    width: 30,
                    height: 30,
                    fontSize: 20,
                    align: 'center',
                    borderRadius: 100
                },
                nt3: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[2],
                    width: 30,
                    height: 30,
                    fontSize: 20,
                    align: 'center',
                    borderRadius: 100
                },
                nt: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[3],
                    width: 30,
                    height: 30,
                    fontSize: 20,
                    align: 'center',
                    borderRadius: 100
                },
                title1: {
                    backgroundColor: attackSourcesColor[0],
                    color: '#fff',
                    width: 145,
                    fontSize: 20,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                },
                title2: {
                    backgroundColor: attackSourcesColor[1],
                    color: '#fff',
                    width: 145,
                    fontSize: 20,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                },
                title3: {
                    backgroundColor: attackSourcesColor[2],
                    color: '#fff',
                    width: 145,
                    fontSize: 20,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                },
                title: {
                    backgroundColor: attackSourcesColor[3],
                    color: '#fff',
                    width: 145,
                    fontSize: 20,
                    align: 'left',
                    borderRadius: 5,
                    padding: 5,
                }
            },
            formatter: function (value, index) {
                index = contains(attackSourcesName, value) + 1
                if (index - 1 < 3) {
                    return [
                        '{nt' + index + '|' + index + '}' + '  {title' + index + '|' + value + '}'
                    ].join('\n')
                } else {
                    return [
                        '{nt|' + index + '}' + '  {title|' + value + '}'
                    ].join('\n')
                }
            }
        }
    },
    series: [{
        z: 2,
        //name: 'value',
        type: 'bar',
        barWidth: '25px',
        animationDuration: 1500,
        data: attackSourcesDataFmt(attackSourcesData),
        /**
         * es写法
         attackSourcesData.map((item, i) => {
                        itemStyle = {
                            color: i > 3 ? colorList[3] : colorList[i]
                        }
                        return {
                            value: item,
                            itemStyle: itemStyle
                        };
                    }),
         */
        itemStyle: {
            normal: {
                color: function (params) {
                    return attackSourcesColor[params.dataIndex > 3 ? 3 : params.dataIndex]
                },
                barBorderRadius: 5,
            }
        },
        label: {
            show: true,
            position: 'right',
            color: '#fff',
            fontSize: 24,
            offset: [10, 0]
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