<template>
    <bag-card>
        <template v-slot:title>信息</template>
        <div class="project-info">
            <a-table :showHeader="false" size="small" :columns="columns" :data-source="data" bordered
                     :pagination="false">
                <template #title>插件库信息</template>
                <template #footer>
                    <div class="down">
                        <p class="hidden-xs">快到碗里来</p>
                        <a-button-group>
                            <a-button type="primary" @click="handleSkip('/doc/index.html')">使用文档</a-button>
                            <a-button type="primary" @click="handleSkip('https://github.com/hangjob/vue-bag-admin')">GitHub</a-button>
                            <a-button type="primary" @click="handleSkip('https://www.npmjs.com/package/vue-bag-admin')">点击安装</a-button>
                        </a-button-group>
                    </div>
                </template>
            </a-table>
        </div>
    </bag-card>
</template>
<script lang="ts">
import {defineComponent} from "vue";

const columns = [
    {
        title: 'Name', dataIndex: 'name', className: 'column-title', width: '30%'
    },
    {
        title: 'Cash Assets', className: 'column-value', dataIndex: 'versions',
    },
    {
        title: 'Address', dataIndex: 'name2', className: 'column-title', width: '30%'
    },
    {
        title: 'Address', className: 'column-value', dataIndex: 'versions2',
    },
];
const data = [
    {
        key: '1', name: 'Vue', versions: '^3.2.16', name2: 'Vite', versions2: '^3.1.0'
    },
    {
        key: '2', name: 'Pinia', versions: '^2.0.11', name2: 'Vue-router', versions2: '^4.1.6'
    },
    {
        key: '3', name: 'Ant-design-vue', versions: '^3.2.13', name2: 'Axios', versions2: '^0.23.0'
    },
];
export default defineComponent({
    setup() {
        const handleSkip = (url:string)=>{
            window.open(url)
        }
        return {
            data,
            columns,
            handleSkip
        }
    }
})
</script>
<style lang="less">
.project-info {
    .down {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            margin-bottom: 0;
            color: @text-color-secondary;
        }
    }
}
</style>
