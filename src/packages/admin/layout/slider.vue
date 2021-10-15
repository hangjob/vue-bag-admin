<template>
    <div class="left-sider">
        <div class="left-sider-logo">
            YXS-ADMIN1
        </div>
        <div class="left-sider-menu scroll">
            <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="light">
                <a-menu-item key="1">
                    <pie-chart-outlined/>
                    <span>工作台</span>
                </a-menu-item>
                <a-sub-menu key="sub3">
                    <template #title>
                        <span>
                          <desktop-outlined/>
                          <span>系统配置</span>
                        </span>
                    </template>
                    <a-sub-menu key="sub4" title="权限管理">
                        <a-menu-item key="7">
                            菜单列表
                        </a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                          <user-outlined/>
                          <span>User</span>
                        </span>
                    </template>
                    <a-menu-item key="4">Bill</a-menu-item>
                </a-sub-menu>

            </a-menu>
            <YxsMenuSlider/>
        </div>
    </div>
</template>
<script lang="ts">
import {DesktopOutlined, PieChartOutlined, UserOutlined,} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import YxsMenuSlider from '@/packages/admin/layout/components/menu/index.tsx'

export default defineComponent({
    name: 'Slider',
    components: {
        DesktopOutlined,
        PieChartOutlined,
        UserOutlined,
        YxsMenuSlider
    },
    data() {
        return {
            selectedKeys: ref<string[]>(['1']),
        };
    },
})
</script>
<style lang="less" scoped>
.left-sider {
    display: flex;
    flex-direction: column;
    height: calc(100% - 34px);

    .left-sider-logo {
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

    .left-sider-menu {
        overflow: hidden auto;
        flex: 1;

        /deep/ ul {
            border-right: none;
        }
    }
}
</style>