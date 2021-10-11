<template>
    <a-layout style="height: 100%">
        <div class="slider-container" theme="light">
            <Slider/>
        </div>
        <a-layout class="layout">
            <HeaderTop/>
            <HeaderProcess/>
            <LayoutContainer/>
            <div class="layout-footer">
                Ant Design ©2018 Created by Ant UED
            </div>
        </a-layout>
    </a-layout>
</template>
<!--https://show.cool-admin.com/-->
<script lang="ts">
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import Slider from './slider.vue'
import HeaderTop from './headerTop.vue'
import HeaderProcess from './headerProcess.vue'
import LayoutContainer from './layoutContainer.vue'

export default defineComponent({
    components: {
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
        Slider,
        HeaderTop,
        HeaderProcess,
        LayoutContainer
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
.slider-container {
    position: fixed;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #ffffff
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 250px;

    &-footer {
        margin-top: 10px;
        padding: 8px 0;
        text-align: center;
        background-color: #ffffff;
        font-size: 12px;
    }
}
</style>
