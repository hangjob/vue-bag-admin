<template>
    <div class="left-sider">
        <div class="left-sider-logo">
<!--            YXS-ADMIN-->
        </div>
        <div class="left-sider-menu scroll">
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