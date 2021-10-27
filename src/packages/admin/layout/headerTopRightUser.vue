<template>
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
    <div class="right_menu-item hidden-xs">
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
    <UserSetting ref="UserSetting"/>
</template>
<script lang="ts">
import UserSetting from './user/setting.vue'
import {defineComponent, ref} from 'vue'
import {
    BellOutlined,
    ClearOutlined,
    DownOutlined,
    ExpandOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    SyncOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        UserSetting,
        BellOutlined,
        ClearOutlined,
        DownOutlined,
        ExpandOutlined,
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        SearchOutlined,
        SyncOutlined
    },
    setup() {
        const UserSetting = ref()

        const handleOpenThemeSetting = () => {
            UserSetting.value.showDrawer()
        }

        return {
            UserSetting,
            handleOpenThemeSetting
        }
    }
})
</script>
<style lang="less" scoped>
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
</style>