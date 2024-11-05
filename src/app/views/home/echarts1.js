export default (res) => {
    function random(arr) {
        return arr.sort((x, y) => {
            return Math.random() > 0.5 ? -1 : 1
        }).slice(0, 6)
    }
    let data =random(JSON.parse(JSON.stringify(res)))
    data.forEach(item => {
        item.name = item.title
        item.value = (Math.random() * 50000).toFixed(0)
        item.sum = 10
    })
    let getArrByKey = (data, k) => {
        let key = k || "value";
        let res = [];
        if (data) {
            data.forEach(function (t) {
                res.push(t[key]);
            });
        }
        return res;
    };
    let opt = {
        index: 0
    }
    let color = ['#FC619D', '#FF904D', '#48BFE3'];
    return {
        grid: {
            top: '2%',
            bottom: -15,
            right: 30,
            left: -80,
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#666',
                align: 'left',
                margin: 100,
                fontSize: 13,
                formatter: function (value, index) {
                    if (opt.index === 0 && index < 3) {
                        return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                    } else if (opt.index !== 0 && (index + opt.index) < 9) {
                        return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                    } else {
                        return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                    }
                },
                rich: {
                    idx0: {
                        color: '#FB375E',
                        backgroundColor: '#FFE8EC',
                        borderRadius: 100,
                        padding: [5, 8]
                    },
                    idx1: {
                        color: '#FF9023',
                        backgroundColor: '#FFEACF',
                        borderRadius: 100,
                        padding: [5, 8]
                    },
                    idx2: {
                        color: '#01B599',
                        backgroundColor: '#E1F7F3',
                        borderRadius: 100,
                        padding: [5, 8]
                    },
                    idx: {
                        color: '#333',
                        backgroundColor: '#E1F7F3',
                        borderRadius: 100,
                        padding: [5, 8]
                    },
                    title: {
                        width: 165
                    }
                }
            },
        }, {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#666',
                align: 'left',
                margin: 20,
                fontSize: 13,
                formatter: function (value, index) {
                    return '使用数：' + data[index].value + '次    使用率：' + (data[index].value / data[index].sum).toFixed(2) + '%'
                },
            }
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            itemStyle: {
                color: (val) => {
                    if (val.dataIndex < 3 && opt.index === 0) {
                        return color[val.dataIndex];
                    } else {
                        return '#1990FF'
                    }
                },
                borderRadius: 30,
            }
        }]
    };
};
