<template>
    <a-layout style="height: 100%">
        <Slider/>
        <a-layout :style="{marginLeft}" class="layout" :class="layoutClassName">
            <HeaderTop/>
            <HeaderProcess/>
            <LayoutContainer/>
            <div class="layout-footer">
                Yxs Admin ©2021
                <a-typography-link href="//www.vipbic.com">www.vipbic.com</a-typography-link>
            </div>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue';
import Slider from './slider.vue'
import HeaderTop from './headerTop.vue'
import HeaderProcess from './headerProcess.vue'
import LayoutContainer from './layoutContainer.vue'
import {themeHook} from '@/packages/hook'
import {useStore} from "vuex";

export default defineComponent({
    components: {
        Slider,
        HeaderTop,
        HeaderProcess,
        LayoutContainer
    },
    setup() {
        const {layoutClassName} = themeHook()
        const store = useStore();
        const marginLeft = computed(() => store.state.app.themeConfig.menuMaxWidth + 'px')
        return {
            layoutClassName,
            marginLeft
        }
    }
});
</script>
<style scoped lang="less">
.layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 1;

    &-footer {
        padding: 8px 0;
        text-align: center;
        background-color: #ffffff;
        font-size: 12px;
    }

    &.layout-is-collapse {
        margin-left: 80px !important;
    }

    &.layout-is-collapse-floating {
        margin-left: 0 !important;
    }
}
</style>

