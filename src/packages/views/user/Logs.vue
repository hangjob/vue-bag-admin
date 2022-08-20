<template>
    <a-table size="small" bordered :columns="columns" :data-source="data">
        <template #browser="{ text: browser }">
            <a-tag color="volcano">{{browser}}</a-tag>
        </template>
    </a-table>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

const columns = [
    {
        title:'IP',
        dataIndex: 'ip',
        key: 'ip',
    },
    {
        title: '登录时间',
        dataIndex: 'login_time',
        key: 'login_time',
    },
    {
        title: '浏览器',
        dataIndex: 'browser',
        key: 'browser',
        slots: { customRender: 'browser' },
    },
    {
        title: '网络',
        key: 'network',
        dataIndex: 'network',
    },
    {
        title: '地区',
        key: 'area',
        dataIndex: 'area',
    },
];

const data = [
    {
        key:1,
        ip: '1',
        login_time: 'John Brown',
        browser: 'Chrome',
        network: '移动',
        area: '中国 浙江 杭州',
    },
];

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    }
});
</script>

