<template>
    <div class="right_menu-item">
        <input class="key-input" placeholder="输入关键词" v-model="compData.search.str"
               @keydown.enter="handleKeyBoard($event,compData.search.handleEnter)"
               :class="compData.search.active" type="text"
        >
        <SearchOutlined class="icon-svg icon-search" @click="compData.search.handleSearch" />
    </div>
    <div class="right_menu-item">
        <CompressOutlined class="icon-svg" @click="toggle" v-if="isFullscreen" />
        <ExpandOutlined class="icon-svg" @click="toggle" v-else />
    </div>
    <div class="right_menu-item">
        <a-popover v-model="compData.visible" title="系统通知" trigger="click">
            <template #content>
                <div class="notice-content">
                    <p v-for="item in compData.noticeList" :key="item.id">{{ item.text }} {{ item.createTime }}</p>
                </div>
            </template>
            <a-badge :count="compData.noticeList.length">
                <BellOutlined class="icon-svg" />
            </a-badge>
        </a-popover>
    </div>
    <template :key="idx" v-for="(item,idx) in compData.icons">
        <div :class="item.classItemName" @click="item.handle">
            <component :class="item.classItemName" :is="item.iconName"></component>
        </div>
    </template>
    <template v-if="ThemeBar">
        <component :is="ThemeBar"></component>
    </template>
    <div class="right_menu-item hidden-xs">
        <img v-if="userinfo.userhead" class="user-head" :src="getImageFullPath(userinfo.userhead)" alt="">
        <img v-else class="user-head" src="@/packages/assets/image/yanghang.jpg" alt="">
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
                {{ userinfo.username }}
                <DownOutlined />
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <router-link to="/user">修改资料</router-link>
                    </a-menu-item>
                    <a-menu-item @click="compData.handleQuit">
                        <LogoutOutlined />
                        退出
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
    <Setting ref="userSetting" />
</template>
<script lang="ts">
import Setting from './Setting.vue'
import { computed, defineComponent, inject, reactive, ref } from 'vue'
import { handleKeyBoard } from '@/packages/utils/keydown'
import { notification } from 'ant-design-vue'
import { apiLogout } from '@/packages/service/user'
import locaStore from '@/common/utils/persistence'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import userPinia from '@/packages/pinia/user'

export default defineComponent({
    components: {
        Setting,
    },
    setup() {
        const { configAppComps } = <any>inject('$configAppOptions')
        const { ThemeBar } = configAppComps
        const router = useRouter()
        const userSetting = ref()
        const $mitt: any = inject('$mitt')
        const userStore = userPinia()
        const { isFullscreen, toggle } = useFullscreen()
        const userinfo = userStore.userInfo
        const { getImageFullPath } = inject<any>('bagGlobal')
        const compData = reactive({
            visible: false,
            noticeList: [],
            icons: [
                {
                    iconName: 'SyncOutlined',
                    classItemName: 'right_menu-item hidden-xs',
                    classItemIcon: 'icon-svg refresh',
                    handle: () => {
                        console.log(1)
                        $mitt.emit('reload-router-view')
                    },
                },
                {
                    iconName: 'ClearOutlined',
                    classItemName: 'right_menu-item hidden-xs',
                    classItemIcon: 'icon-svg',
                    handle() {
                        userSetting.value.showDrawer()
                    },
                },
                {
                    iconName: 'HomeOutlined',
                    classItemName: 'right_menu-item hidden-xs',
                    classItemIcon: 'icon-svg',
                    handle() {
                        window.open('/index.html')
                    },
                },
            ],
            search: {
                active: <any>'',
                str: '',
                handleSearch() {
                    if (!compData.search.str) {
                        compData.search.active = compData.search.active ? '' : 'search-active'
                    }
                },
                handleEnter(e: KeyboardEvent) {
                    notification['success']({
                        message: '搜索提示',
                        description: `嗨，您输入的关键词是：${compData.search.str}`,
                    })
                },
            },
            handleQuit() {
                apiLogout().then(() => {
                    locaStore.clearAll()
                    router.push('/login').then((res) => {
                        userStore.$reset()
                    })
                })
            },
        })
        return {
            userSetting,
            userinfo,
            handleKeyBoard,
            toggle,
            ThemeBar,
            isFullscreen,
            compData,
            getImageFullPath,
        }
    },
})
</script>
<style lang="less">
.right_menu-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    min-width: 30px;
    margin: 0 6px;
    text-align: center;
    justify-content: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(0, 0, 0, .025);
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
        transition: all .3s;

        &.refresh:active {
            transform: rotate(360deg);
        }
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

.notice-content {
    p {
        padding: 5px 0;
        display: block;

        &:last-child, &:first-child {
            padding: 0;
        }
    }
}
</style>
