<template>
    <YxsCard>
        <template v-slot:title>欢迎您</template>
        <div class="welcome">
            <!--            <div class="head"><img src="@/assets/yanghang.jpg" alt=""></div>-->
            <div class="des">
                <h1>嗨，下午好，我是羊先生，准备吃什么呢?</h1>
                <p>前端工程师 |
                    品茗股份，Yxs-Admin，采用Vite2.0、Vue3.2、TypeScript、JavaScript构建，支持多种写法和调用，完整的框架体系，适合企业中后台管理系统，支持现有业务各种扩展....</p>
            </div>
        </div>
    </YxsCard>
    <div>
        <YxsCard style="width: 40%">
            <template v-slot:title>信息</template>
            <div class="project-info">

            </div>
        </YxsCard>
        <YxsCard style="width: 59%;margin-left: 1%">
            <template v-slot:title>信息</template>
            <div class="project-info">
                <a-table :showHeader="false" size="small" :columns="columns" :data-source="data" bordered
                         :pagination="false">
                    <template #title>插件库信息</template>
                    <template #footer>
                        <div class="down">
                            <p>快到碗里来</p>
                            <a-button-group>
                                <a-button type="primary">使用文档</a-button>
                                <a-button type="primary">GitHub</a-button>
                                <a-button type="primary">点击下载</a-button>
                            </a-button-group>
                        </div>
                    </template>
                </a-table>
            </div>
        </YxsCard>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

const columns = [
    {
        title: 'Name', dataIndex: 'name', className: 'column-title', width: 200
    },
    {
        title: 'Cash Assets', className: 'column-value', dataIndex: 'versions',
    },
    {
        title: 'Address', dataIndex: 'name2', className: 'column-title', width: 200
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
            columns,
        }
    }
})
</script>
<style lang="less" scoped>
.welcome {
    display: flex;
    align-items: center;

    .head {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
    }

    .des {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        flex: 1;

        p {
            margin: 0;
        }

        h1 {
            font-size: 20px;
            font-weight: 600;
            color: @heading-color;
        }

        p {
            color: @text-color-secondary;
        }
    }
}

.project-info {
    /deep/ .column-title {
        background-color: #f7f7f7 !important;
        text-align: right;
        padding-right: 20px !important;
    }
    .down{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            margin-bottom: 0;
            color: @text-color-secondary;
        }
    }
}
</style>