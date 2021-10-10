<template>
    <a-layout style="height: 100%">
        <div style="position: fixed; left: 0;height: 100% ;width: 250px;background-color: #ffffff" theme="light">
            <div class="left-sider">
                <div class="left-sider-logo">
                    YXS-ADMIN
                </div>
                <div class="left-sider-menu scroll">
                    <a-menu theme="light" v-model:selectedKeys="selectedKeys" mode="inline">
                        <a-menu-item key="1">
                            <pie-chart-outlined/>
                            <span>工作台</span>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <desktop-outlined/>
                            <span>Option 2</span>
                        </a-menu-item>
                        <a-sub-menu key="sub1" v-for="item in 30" :key="item">
                            <template #title>
                        <span>
                          <user-outlined/>
                          <span>User</span>
                        </span>
                            </template>
                            <a-menu-item key="4">Bill</a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </div>
            </div>
        </div>
        <a-layout class="layout" :style="{ marginLeft: '250px' }">
            <!--  菜单路径  -->
            <a-layout-header class="layout-header_top">
                <a-breadcrumb style="height: 45px;line-height: 45px">
                    <a-breadcrumb-item>工作台</a-breadcrumb-item>
                    <a-breadcrumb-item>组件预览</a-breadcrumb-item>
                </a-breadcrumb>
            </a-layout-header>
            <div class="layout-header_scroller">
                <div class="app-process_item">
                    <span>组件预览</span>
                    <a-icon type="loading"/>
                </div>
            </div>
            <a-layout-content class="layout-container">
                <div class="layout-container-view">
                    <div class="layout-container-view-content scroll">
                        <router-view/>
                    </div>
                </div>
            </a-layout-content>
            <div class="layout-footer">
                Ant Design ©2018 Created by Ant UED
            </div>
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
<style lang="less" scoped>
    .left-sider {
        display: flex;
        flex-direction: column;
        height: calc(100% - 34px);
        .left-sider-logo{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            cursor: pointer;
            background-color: #2f3447;
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
        }
        .left-sider-menu{
            overflow: hidden auto;
            flex: 1;
            /deep/ ul{
                border-right: none;
            }
        }
    }

    .layout {
        display: flex;
        flex-direction: column;
        height: 100%;

        &-header_top {
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #f0f0f0;
            background-color: #fff;
            padding: 0 16px;
        }

        &-header_scroller {
            background-color: transparent;
            padding: 10px;

            .app-process_item {
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

        &-container {
            width: 100%;
            box-sizing: border-box;
            flex: 1;
            overflow: hidden;

            &-view {
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                padding: 0 10px;

                &-content {
                    overflow: hidden auto;
                    position: relative;
                    z-index: 100;
                    height: 100%;
                    padding: 10px;
                    border-radius: 3px;
                    background-color: #ffffff;
                }
            }
        }

        &-footer {
            margin-top: 10px;
            padding: 8px 0;
            text-align: center;
            background-color: #ffffff;
            font-size: 12px;
        }
    }
</style>
