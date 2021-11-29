<template>
    <!--  菜单路径  -->
    <div class="layout-header">
        <a-layout-header class="layout-header_top">
            <MenuFoldOutlined v-if="collapsed" @click="handleCollapsed(false)"/>
            <MenuUnfoldOutlined @click="handleCollapsed(true)" v-else/>
            <a-breadcrumb class="text-overflow breadcrumb" style="" v-if="!isMobile">
                <a-breadcrumb-item v-for="(item,idx) in list" :key="idx">{{ item.name }}</a-breadcrumb-item>
            </a-breadcrumb>
            <a-breadcrumb class="text-overflow breadcrumb" v-else>
                <a-breadcrumb-item>{{ list[list.length - 1].name }}</a-breadcrumb-item>
            </a-breadcrumb>
        </a-layout-header>
        <div class="layout-header_right_menu">
            <HeaderTopRightUser/>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useStore} from 'vuex'
import HeaderTopRightUser from './headerTopRightUser.vue'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        HeaderTopRightUser
    },
    setup() {

        const store = useStore();
        const list = computed(() => store.getters['app/tabViewsPath']);
        const isMobile = computed(() => store.getters['app/getBrowser'].isMobile)
        const collapsed = computed(() => store.state.app.collapsed)

        const handleCollapsed = (bol: boolean) => {
            if (store.state.app.themeConfig.floatingMenu) {
                store.commit('app/updateCollapsed', false)
            } else {
                store.commit('app/updateCollapsed', bol)
            }
            store.commit('app/updateFloatingVisible', !store.getters['app/getFloatingVisible'])
        }

        return {
            list,
            collapsed,
            isMobile,
            handleCollapsed
        }
    }
})
</script>
<style lang="less" scoped>
.layout-header {
    display: flex;
    background-color: #fff;
    align-items: center;
    padding-right: 10px;

    .breadcrumb {
        display: flex;
        align-items: center;
        margin-left: 10px
    }

    &_top {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        padding: 0 16px;
        box-sizing: border-box;
        flex: 1;
        line-height: 50px;
        height: 50px;
    }

    &_right_menu {
        display: flex;
    }
}
</style>
