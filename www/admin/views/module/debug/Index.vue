<template>
    <bag-view>
        <a-table :columns="columns" :data-source="data" bordered>
            <template #name="{ text }">
                <a>{{ text }}</a>
            </template>
            <template #title>Vue3异常捕获</template>
            <template #footer>
                官方推荐可以使用错误追踪服务 <a href="https://sentry.io/for/vue/" target="_blank">Sentry</a>和 <a target="_blank"
                                                                                                   href="https://docs.bugsnag.com/platforms/javascript/vue/">Bugsnag </a>使用此选项提供官方集成
            </template>
        </a-table>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

const columns = [
    {
        title: '浏览器',
        dataIndex: 'browserInfo',
        _slots: {customRender: 'browserInfo'},
        ellipsis: true,
    },
    {
        title: '地址',
        dataIndex: 'location',
        _slots: {customRender: 'location'},
        ellipsis: true,
    },
    {
        title: '错误信息',
        dataIndex: 'message',
        _slots: {customRender: 'message'},
        ellipsis: true,
    },
    {
        title: '栈信息',
        dataIndex: 'stack',
        ellipsis: true,
    },
    {
        title: '时间',
        dataIndex: 'create_time',
        width: 180,
        ellipsis: true,
    },
];

const data = [
    {
        browserInfo: 'mozilla/5.0 (windows nt 6.1; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.93 safari/537.36',
        location: 'http://192.168.1.103:8290/lib.html#/home',
        message: '_ctx.handleSkip is not a function',
        stack: 'TypeError: _ctx.handleSkip is not a function\n' +
            '    at _createVNode.onClick._cache.<computed>._cache.<computed> (project-info.vue:12)\n' +
            '    at callWithErrorHandling (runtime-core.esm-bundler.js:6685)\n' +
            '    at callWithAsyncErrorHandling (runtime-core.esm-bundler.js:6694)\n' +
            '    at emit$1 (runtime-core.esm-bundler.js:269)\n' +
            '    at runtime-core.esm-bundler.js:6470\n' +
            '    at handleClick6 (button.js:119)\n' +
            '    at callWithErrorHandling (runtime-core.esm-bundler.js:6685)\n' +
            '    at callWithAsyncErrorHandling (runtime-core.esm-bundler.js:6694)\n' +
            '    at HTMLButtonElement.invoker (runtime-dom.esm-bundler.js:347)',
        create_time: '2021-12-26 17:27:45',
    },
    {
        browserInfo: 'mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/86.0.4240.198 safari/537.36 qihu 360ee/13.0.2256.0',
        location: 'http://192.168.1.103:8290/lib.html#/module/debug',
        message: '_ctx.handleRouter is not a function',
        stack: 'TypeError: _ctx.handleSkip is not a function\n' +
            '    at _createVNode.onClick._cache.<computed>._cache.<computed> (project-info.vue:12)\n' +
            '    at callWithErrorHandling (runtime-core.esm-bundler.js:6685)\n' +
            '    at callWithAsyncErrorHandling (runtime-core.esm-bundler.js:6694)\n' +
            '    at emit$1 (runtime-core.esm-bundler.js:269)\n' +
            '    at runtime-core.esm-bundler.js:6470\n' +
            '    at handleClick6 (button.js:119)\n' +
            '    at callWithErrorHandling (runtime-core.esm-bundler.js:6685)\n' +
            '    at callWithAsyncErrorHandling (runtime-core.esm-bundler.js:6694)\n' +
            '    at HTMLButtonElement.invoker (runtime-dom.esm-bundler.js:347)',
        create_time: '2021-12-26 18:27:45',
    },
    {
        browserInfo: 'mozilla/5.0 (windows nt 6.1; wow64) applewebkit/537.36 (khtml, like gecko) chrome/86.0.4240.198 safari/537.36 qihu 360ee/13.0.2256.0',
        location: 'http://192.168.1.103:8290/lib.html#/module/debug',
        message: 'Invalid prop: type check failed for prop "record". Expected Object, got Number with value 8. \n',
        stack: '',
        create_time: '2021-12-26 18:27:45',
    },
];
const conpyData = data.concat(data, data, data, data, data, data).map((item: any, index) => {
    item.key = index
    return {
        ...item
    }
})
export default defineComponent({
    setup() {
        return {
            data: conpyData,
            columns,
        };
    },
});
</script>
<style>
th.column-money,
td.column-money {
    text-align: right !important;
}
</style>
