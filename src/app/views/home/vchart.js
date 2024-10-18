import VChart from "@visactor/vchart"
const histogram = ({dom}) => {
    const spec = {
        type: 'bar',
        data: [
            {
                id: 'data',
                values: [
                    {
                        x: '星期一',
                        y: 100,
                        type: 'sales'
                    },
                    {
                        x: '星期二',
                        y: 66,
                        type: 'sales'
                    },
                    {
                        x: '星期三',
                        y: 95,
                        type: 'sales'
                    },
                    {
                        x: '星期四',
                        y: 52,
                        type: 'sales'
                    },
                    {
                        x: '星期五',
                        y: 68,
                        type: 'sales'
                    },
                    {
                        x: '星期六',
                        y: 52,
                        type: 'sales'
                    },
                    {
                        x: '星期日',
                        y: 48,
                        type: 'sales'
                    },
                ]
            }
        ],
        xField: ['x', 'type'],
        yField: 'y',
        seriesField: 'type',
        bar: {
            style: {
                cornerRadius: 10,
                width:30,
                fill: {
                    gradient: 'linear',
                    x0: 0.5,
                    y0: 0,
                    x1: 0.5,
                    y1: 1,
                    stops: [
                        {
                            offset: 0,
                            color: '#86DF6C'
                        },
                        {
                            offset: 1,
                            color: '#468DFF'
                        }
                    ]
                }
            },
            state: {
                selected: {
                    stroke: '#000',
                    lineWidth: 1
                }
            },

        },
        axes: [
            {
                orient: 'bottom',
                domainLine: {
                    visible: false
                },
                bandPadding: 0,
                paddingInner: 0.1
            },
            {
                orient: 'left',
                grid: {
                    visible: false
                },
                tick: {
                    visible: true,
                    tickCount: 3
                },
                domainLine: {
                    visible: false
                }
            }
        ]
    };
    const vchart = new VChart(spec, {dom});
    vchart.renderSync();
}


export {
    histogram
}
