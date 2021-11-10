<template>
    <div ref="main" style="width:100%;height:400px;"></div>
</template>
<script>
import * as echarts from 'echarts';

let xLabel = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
let goToSchool = ['4.3', '2.5', '3.5', '4.5', '4.3', '2.5', '3.5', '8.5', '4.3', '2.5', '3.5', '4.5'];
let goOutSchool = ['2.4', '4.4', '1.8', '2.8', '2.4', '4.4', '1.8', '2.8', '2.4', '4.4', '1.8', '2.8'];
let goOutSchool2 = ['12.4', '14.4', '11.8', '2.8', '2.4', '4.4', '1.8', '2.8', '2.4', '4.4', '1.8', '2.8'];

let option = {
    backgroundColor: '#ffff',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#4E36DC', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(126,199,255,1)', // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(126,199,255,0)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
        },
        formatter: (p) => {
            return `<div style="width: 79px;
	height: 80px;;color:#fff;position: relative;">
        <svg style="position: absolute;top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">
      <defs>
        <style>
          .cls-1 {
            fill: #07172c;
            fill-opacity: 0.8;
            stroke: #a7d8ff;
            stroke-linejoin: round;
            stroke-opacity: 0.2;
            stroke-width: 1px;
            fill-rule: evenodd;
          }

        </style>
      </defs>
      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"
        transform="translate(-258.5 -592.5)" />
    </svg>
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${
                p[0] ? 'flex' : 'none'
            };justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[0] ? p[0].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[0] ? p[0].data : ''}</span>
            </div>
            <div style="width:100%;height:100%;display:${
                p[1] ? 'flex' : 'none'
            };justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[1] ? p[1].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[1] ? p[1].data : ''}</span>
            </div>
            <div style="width:100%;height:100%;display:${
                p[2] ? 'flex' : 'none'
            };justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[2] ? p[2].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[2] ? p[2].data : ''}</span>
            </div>
        </div>
    </div>`;
        },
    },
    legend: {
        align: 'left',
        right: '5%',
        top: '5%',
        type: 'plain',
        textStyle: {
            color: '#ddd',
            fontSize: 16,
        },
        // icon:'rect',
        itemGap: 25,
        itemWidth: 18,
        icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
        data: [
            {
                name: '应用1',
            },
            {
                name: '应用2',
            },
            {
                name: '应用3',
            },
        ],
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '4%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#13c2c2',
                    padding: 16,
                    fontSize: 14,
                },
                formatter: function (data) {
                    return data;
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                },
            },
            axisTick: {
                show: false,
            },
            data: xLabel,
        },
    ],
    yAxis: [
        {
            name: '单位：笔',
            nameTextStyle: {
                color: '#7ec7ff',
                fontSize: 16,
                padding: 10,
            },
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7ec7ff',
                    padding: 16,
                },
                formatter: function (value) {
                    if (value === 0) {
                        return value;
                    }
                    return value;
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '应用1',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 5,
                    color: '#F86E4E', // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color: 'rgba(25,163,223,1)',
                borderColor: '#646ace',
                borderWidth: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#E06148',
                            },
                            {
                                offset: 1,
                                color: '#3CA1EC',
                            },
                            {
                                offset: 0,
                                color: '#E06148',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: goToSchool,
        },
        {
            name: '应用2',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 5,
                    color: 'rgba(10,219,250,1)', // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color: 'rgba(10,219,250,1)',
                borderColor: '#646ace',
                borderWidth: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(10,219,250,.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(10,219,250, 0)',
                            },
                            {
                                offset: 0,
                                color: 'rgba(10,219,250,.3)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: goOutSchool,
        },
        {
            name: '应用3',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 5,
                    color: 'rgba(10,219,250,1)', // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color: 'rgba(10,219,250,1)',
                borderColor: '#646ace',
                borderWidth: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(10,219,250,.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(10,219,250, 0)',
                            },
                            {
                                offset: 0,
                                color: 'rgba(10,219,250,.3)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: goOutSchool2,
        },
    ],
};
export default {
    mounted() {
        echarts.init(this.$refs.main).setOption(option);
    }
}
</script>