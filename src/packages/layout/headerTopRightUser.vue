<template>
    <div class="right_menu-item">
        <input class="key-input" v-model="searchKey" @keydown.enter="handleKeyBoard($event,handleEnter)"
               :class="searchActive" type="text">
        <SearchOutlined class="icon-svg icon-search" @click="handleSearch"/>
    </div>
    <div class="right_menu-item">
        <a-badge count="5">
            <BellOutlined class="icon-svg"/>
        </a-badge>
    </div>
    <div class="right_menu-item">
        <CompressOutlined class="icon-svg" @click="handleScreenModel" v-if="fullState"/>
        <ExpandOutlined class="icon-svg" @click="handleScreenModel" v-else/>
    </div>
    <div class="right_menu-item">
        <SyncOutlined class="icon-svg"/>
    </div>
    <div class="right_menu-item" @click="handleOpenThemeSetting">
        <ClearOutlined class="icon-svg"/>
    </div>
    <div class="right_menu-item hidden-xs">
        <img class="user-head" src="@/packages/assets/image/yanghang.jpg" alt="">
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
    <userSetting ref="userSetting"/>
</template>
<script lang="ts">
import userSetting from './user/setting.vue'
import {defineComponent, nextTick, onMounted, ref} from 'vue'
import {checkFull, fullscreenchange, switchScreen} from '@/packages/utils/screen.full'
import {handleKeyBoard} from '@/packages/utils/keydown'
import {notification} from 'ant-design-vue';
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
        userSetting,
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
        const userSetting = ref()
        const searchActive = ref<string | null>(null);
        const searchKey = ref<string>('');
        const fullState = ref<boolean>(false)

        const handleOpenThemeSetting = () => {
            userSetting.value.showDrawer()
        }

        /**
         * 搜索
         */
        const handleSearch = () => {
            if (searchKey.value) {

            } else {
                searchActive.value = searchActive.value ? null : 'search-active';
            }
        }

        /**
         * 全屏模式
         */
        const toggle = () => {
            nextTick(() => {
                fullState.value = checkFull();
            })
        }

        const handleScreenModel = () => {
            switchScreen()
        }


        const handleEnter = (e: KeyboardEvent) => {
            notification['success']({
                message: '搜索提示',
                description: `嗨，您输入的关键词是：${searchKey.value}`
            });
        }


        onMounted(() => {
            fullscreenchange(toggle)
        })

        return {
            userSetting,
            searchActive,
            searchKey,
            fullState,
            handleSearch,
            handleOpenThemeSetting,
            handleScreenModel,
            handleKeyBoard,
            handleEnter
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
    position: relative;

    &:first-of-type {
        margin-right: 15px;
    }

    &:last-of-type {
        margin-right: 0;
    }

    .key-input {
        background: none;
        outline: none;
        border: 1px solid @primary-color;
        border-radius: 36px;
        padding: 3px 10px;
        transition: all 0.5s;
        opacity: 0;
        width: 0;
    }

    .search-active {
        width: 200px;
        opacity: 1;
    }

    .icon-svg {
        font-size: 15px;
    }

    .icon-search {
        position: absolute;
        right: 10px;
        top: inherit;
    }

    .user-head {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 5px;
    }
}
</style>