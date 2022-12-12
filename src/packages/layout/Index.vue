<template>
    <a-layout style="height: 100%">
        <Slider />
        <a-layout class="layout">
            <NavBar />
            <TabBar />
            <AppMain />
            <template v-if="bagFooter">
                <component :is="bagFooter"></component>
            </template>
            <template>
                <div class="layout-footer">
                    bag-admin ©2022
                    <a-typography-link href="//www.vipbic.com">www.vipbic.com</a-typography-link>
                </div>
            </template>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
import Slider from './slider/Index.vue'
import NavBar from './navbar/Index.vue'
import TabBar from './tabbar/Index.vue'
import AppMain from './main/Index.vue'

export default defineComponent({
    components: {
        Slider,
        TabBar,
        NavBar,
        AppMain,
    },
    setup() {
        const { configAppComps } = <any>inject('$configAppOptions')
        const { bagFooter } = configAppComps
        return {
            bagFooter,
        }
    },
})
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
}
</style>

