<template>
    <!--  菜单路径  -->
    <div class="layout-header">
        <a-layout-header class="layout-header_top">
            <MenuFoldOutlined v-if="appStore.bagConfig.collapsed" @click="compData.handleCollapsed(false)" />
            <MenuUnfoldOutlined v-else @click="compData.handleCollapsed(true)" />
            <a-breadcrumb class="text-overflow breadcrumb" v-if="compData.browser.isPC">
                <a-breadcrumb-item v-for="(item,idx) in compData.list" :key="idx">{{ item.name }}</a-breadcrumb-item>
            </a-breadcrumb>
            <a-breadcrumb class="text-overflow breadcrumb" v-else>
                <a-breadcrumb-item>{{ compData.list[compData.list.length - 1].name }}</a-breadcrumb-item>
            </a-breadcrumb>
        </a-layout-header>
        <CutSystems />
        <div class="layout-header_right_menu">
            <ThemeBar />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watchEffect } from 'vue'
import ThemeBar from '@/packages/layout/navbar/ThemeBar.vue'
import CutSystems from '@/packages/layout/navbar/CutSystems'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import appPinia from '@/packages/pinia/app'

export default defineComponent({
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        ThemeBar,
        CutSystems,
    },
    setup() {
        const appStore = appPinia()
        const { browser } = appStore
        const compData = reactive({
            browser,
            list: computed(() => appStore.tabPaths),
            handleCollapsed: (bol: boolean) => {
                appStore.bagConfig.collapsed = bol
            },
        })
        
        return {
            compData,
            appStore
        }
    },
})
</script>
<style lang="less" scoped>
.layout-header {
    display: flex;
    background-color: #fff;
    align-items: center;
    padding-right: 10px;
    border-bottom: 1px solid #f0f0f0;
    
    .breadcrumb {
        display: flex;
        align-items: center;
        margin-left: 10px
    }
    
    &_top {
        display: flex;
        align-items: center;
        background-color: #fff;
        padding: 0 16px;
        box-sizing: border-box;
        flex: 1;
        line-height: 50px;
        height: 50px;
    }
    
    &_right_menu {
        height: 100%;
        display: flex;
    }
}
</style>
