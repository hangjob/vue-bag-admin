<template>
    <yxs-card>
        <template v-slot:title>信息</template>
        <div class="project-info">
            <a-table :showHeader="false" size="small" :columns="columns" :data-source="data" bordered
                     :pagination="false">
                <template #title>插件库信息</template>
                <template #footer>
                    <div class="down">
                        <p class="hidden-xs">快到碗里来</p>
                        <a-button-group>
                            <a-button type="primary">使用文档</a-button>
                            <a-button type="primary">GitHub</a-button>
                            <a-button type="primary">点击下载</a-button>
                        </a-button-group>
                    </div>
                </template>
            </a-table>
        </div>
    </yxs-card>
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
        key: '1', name: 'Vue', versions: '^3.2.16', name2: 'Vite', versions2: '^2.6.0'
    },
    {
        key: '2', name: 'Vuex', versions: '^4.0.2', name2: 'Vue-router', versions2: '^4.0.12'
    },
    {
        key: '3', name: 'Ant-design-vue', versions: '^2.2.8', name2: 'Axios', versions2: '^0.23.0'
    },
];
export default defineComponent({
    setup() {
        return {
            data,
            columns
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
