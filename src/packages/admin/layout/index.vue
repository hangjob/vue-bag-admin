<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider style="position: fixed; left: 0 " theme="light">
            <div class="logo">
                logo
            </div>
            <a-menu theme="light" v-model:selectedKeys="selectedKeys" mode="inline">
                <a-menu-item key="1">
                    <pie-chart-outlined/>
                    <span>工作台</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <desktop-outlined/>
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                          <user-outlined/>
                          <span>User</span>
                        </span>
                    </template>
                    <a-menu-item key="4">Bill</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <!--  菜单路径  -->
            <a-layout-header class="header-right_top">
                <a-breadcrumb style="height: 45px;line-height: 45px">
                    <a-breadcrumb-item>工作台</a-breadcrumb-item>
                    <a-breadcrumb-item>组件预览</a-breadcrumb-item>
                </a-breadcrumb>
            </a-layout-header>
            <a-layout-content style="margin: 45px 0px 0 16px;">
                <div class="right-right-process_scroller">
                   <div class="app-process_item">
                       <span>组件预览</span>
                       <a-icon type="loading" />
                   </div>
                </div>
                <div
                    :style="{ padding: '16px', background: '#fff', height: 'calc(100% - 45px)' ,boxSizing:'border-box'}">
                    <router-view/>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center;padding: 8px;font-size: 12px">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
    components: {
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
    },
    data() {
        return {
            collapsed: ref<boolean>(false),
            selectedKeys: ref<string[]>(['1']),
        };
    },
});
</script>
<style lang="less">
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.header-right_top {
    background-color: #fff;
    padding: 0 16px;
    position: fixed;
    top: 0;
    right: 0px;
    left: 200px;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
}

.right-right-process_scroller{
    background-color: transparent;
    padding: 0 10px;
    margin: 10px 0;
    .app-process_item{
        display: inline-flex;
        align-items: center;
        border-radius: 3px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #fff;
        font-size: 12px;
        margin-right: 10px;
        color: #909399;
        cursor: pointer;
    }
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='light'] .site-layout .site-layout-background {
    background: #333333;
}
</style>
