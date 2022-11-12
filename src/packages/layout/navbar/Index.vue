<template>
    <!--  菜单路径  -->
    <div class="layout-header">
        <a-layout-header class="layout-header_top">
            <MenuFoldOutlined v-if="collapsed" @click="handleCollapsed(false)" />
            <MenuUnfoldOutlined @click="handleCollapsed(true)" />
            <a-breadcrumb class="text-overflow breadcrumb" style="">
                <a-breadcrumb-item v-for="(item,idx) in list" :key="idx">{{ item.name }}</a-breadcrumb-item>
            </a-breadcrumb>
            <a-breadcrumb class="text-overflow breadcrumb">
                <a-breadcrumb-item>{{ list[list.length - 1].name }}</a-breadcrumb-item>
            </a-breadcrumb>
        </a-layout-header>
        <CutSystems />
        <div class="layout-header_right_menu">
            <ThemeBar />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
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
        const list = computed(() => appStore.tabPaths)

        const handleCollapsed = (bol: boolean) => {

        }

        return {
            list,
            handleCollapsed,
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
