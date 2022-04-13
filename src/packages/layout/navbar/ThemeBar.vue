<template>
    <div class="right_menu-item">
        <input class="key-input" v-model="searchKey" @keydown.enter="handleKeyBoard($event,handleEnter)"
               :class="searchActive" type="text"
        >
        <SearchOutlined class="icon-svg icon-search" @click="handleSearch" />
    </div>
    <div class="right_menu-item" v-if="isPC">
        <CompressOutlined class="icon-svg" @click="toggle" v-if="isFullscreen" />
        <ExpandOutlined class="icon-svg" @click="toggle" v-else />
    </div>
    <div class="right_menu-item" v-if="isPC">
        <a-popover v-model="visible" title="系统通知" trigger="click">
            <template #content>
                <div class="notice-content">
                    <p v-for="item in noticeList" :key="item.id">{{ item.text }} {{ item.createTime }}</p>
                </div>
            </template>
            <a-badge :count="noticeList.length">
                <BellOutlined class="icon-svg" />
            </a-badge>
        </a-popover>
    </div>
    <div class="right_menu-item hidden-xs" @click="handleDebug">
        <BugOutlined class="icon-svg" />
    </div>
    <div class="right_menu-item">
        <SyncOutlined class="icon-svg refresh" @click="handleRefresh" />
    </div>
    <div class="right_menu-item" @click="handleOpenThemeSetting">
        <ClearOutlined class="icon-svg" />
    </div>
    <div class="right_menu-item hidden-xs" @click="handleGithub">
        <GithubOutlined class="icon-svg" />
    </div>
    <component :is="themeBar" v-if="themeBar"></component>
    <div class="right_menu-item hidden-xs">
        <img class="user-head" src="@/packages/assets/image/yanghang.jpg" alt="">
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
                {{ userinfo.username }}
                <DownOutlined />
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <a href="https://github.com/hangjob/vue-vite-admin-ts" target="_blank">查看源码</a>
                    </a-menu-item>
                    <a-menu-item @click="handleQuit">
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
import { computed, defineComponent, inject, ref } from 'vue'
import { handleKeyBoard } from '@/packages/utils/keydown'
import { notification } from 'ant-design-vue'
import { apiLogout } from '@/packages/service/user'
import { useStore } from 'vuex'
import locaStore from '@/packages/utils/persistence'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'

export default defineComponent({
    components: {
        Setting,
    },
    setup() {
        const { configAppHeader } = <any>inject('$configAppOptions')
        const { themeBar } = configAppHeader
        const router = useRouter()
        const userSetting = ref()
        const searchActive = ref<string | null>(null)
        const searchKey = ref<string>('')
        const $mitt: any = inject('$mitt')
        const visible = ref(false)
        const noticeList: any = ref([])
        const store = useStore()
        const { isFullscreen, toggle } = useFullscreen()

        const userinfo = store.getters['user/userinfo']
        const handleOpenThemeSetting = () => {
            userSetting.value.showDrawer()
        }

        const isPC = computed(() => store.getters['app/getBrowser'].isPC)

        /**
         * 搜索
         */
        const handleSearch = () => {
            if (searchKey.value) {

            } else {
                searchActive.value = searchActive.value ? null : 'search-active'
            }
        }


        const handleEnter = (e: KeyboardEvent) => {
            notification['success']({
                message: '搜索提示',
                description: `嗨，您输入的关键词是：${searchKey.value}`,
            })
        }

        // 刷新
        const handleRefresh = () => {
            $mitt.emit('reload-router-view')
        }

        // apiAppNotice().then((res: any) => {
        //     noticeList.value = res;
        // })

        const handleQuit = () => {
            apiLogout().then(() => {
                locaStore.clearAll()
                router.push('/login')
            })
        }

        const handleDebug = () => {
            router.push('/module/debug')
        }

        const handleGithub = () => {
            window.open('https://github.com/hangjob/vue-vite-admin-ts')
        }

        return {
            userSetting,
            searchActive,
            searchKey,
            userinfo,
            visible,
            noticeList,
            handleSearch,
            handleOpenThemeSetting,
            handleKeyBoard,
            handleEnter,
            handleRefresh,
            isPC,
            handleQuit,
            handleDebug,
            handleGithub,
            toggle,
            themeBar,
            isFullscreen,
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
