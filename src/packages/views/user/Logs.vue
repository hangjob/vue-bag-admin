<template>
    <a-table :pagination="{defaultPageSize:15,pageSize:15}" size="small" bordered :columns="columns"
             :data-source="data"
    >
        <template #browser="{ text: browser }">
            <a-tag color="volcano">{{ browser }}</a-tag>
        </template>
    </a-table>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

const columns = [
    {
        title: 'IP',
        dataIndex: 'ip',
        key: 'ip',
        align: 'center'
    },
    {
        title: '登录时间',
        dataIndex: 'login_time',
        key: 'login_time',
        align: 'center'
    },
    {
        title: '浏览器',
        dataIndex: 'browser',
        key: 'browser',
        slots: {customRender: 'browser'},
        align: 'center'
    },
    {
        title: '网络',
        key: 'network',
        dataIndex: 'network',
        align: 'center'
    },
    {
        title: '地区',
        key: 'area',
        dataIndex: 'area',
        align: 'center'
    },
];

const data: Array<any> = [];

for (let i = 0; i < 100; i++) {
    const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.')
    data.push({
        key: i,
        ip: randomIp(),
        login_time: '2022/05/13 17:14:00',
        browser: 'Chrome',
        network: '移动',
        area: '中国 浙江 杭州',
    })
}

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    }
});
</script>

