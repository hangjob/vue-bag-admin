<template>
    <!--  菜单路径  -->
    <div class="layout-header">
        <a-layout-header class="layout-header_top">
            <a-breadcrumb style="height: 45px;line-height: 45px">
                <a-breadcrumb-item v-for="(item,idx) in list" :key="idx">{{ item.name }}</a-breadcrumb-item>
            </a-breadcrumb>
        </a-layout-header>
        <div class="layout-header_right_menu">
            <div class="right_menu-item">
                <SearchOutlined class="icon-svg"/>
            </div>
            <div class="right_menu-item">
                <a-badge count="5">
                    <BellOutlined class="icon-svg"/>
                </a-badge>
            </div>
            <div class="right_menu-item">
                <ExpandOutlined class="icon-svg"/>
            </div>
            <div class="right_menu-item">
                <SyncOutlined class="icon-svg"/>
            </div>
            <div class="right_menu-item" @click="handleOpenThemeSetting">
                <ClearOutlined class="icon-svg"/>
            </div>
            <div class="right_menu-item">
                <img class="user-head" src="@/assets/yanghang.jpg" alt="">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        羊先生
                        <DownOutlined/>
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <a href="javascript:;">嗨，你好</a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </div>
    <ThemeSetting ref="ThemeSetting"/>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import {useStore} from 'vuex'
import ThemeSetting from './theme/setting.vue'
import {
    BellOutlined,
    ClearOutlined,
    DownOutlined,
    ExpandOutlined,
    SearchOutlined,
    SyncOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        SearchOutlined,
        BellOutlined,
        ExpandOutlined,
        SyncOutlined,
        ClearOutlined,
        DownOutlined,
        ThemeSetting
    },
    setup() {
        const ThemeSetting = ref()
        const store = useStore();
        const list = computed(() => store.getters['app/tabViewsPath']);
        const handleOpenThemeSetting = () => {
            console.log(list.value)
            ThemeSetting.value.showDrawer()
        }

        return {
            list,
            ThemeSetting,
            handleOpenThemeSetting
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

        .right_menu-item {
            margin-right: 25px;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:last-of-type {
                margin-right: 0;
            }

            .icon-svg {
                font-size: 15px;
            }

            .user-head {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                margin-right: 5px;
            }
        }
    }
}
</style>
