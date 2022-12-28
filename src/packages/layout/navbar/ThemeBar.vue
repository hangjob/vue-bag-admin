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
        <a-popover v-model="compData.visible" title="" trigger="click">
            <template #content>
                <a-tabs :tabBarStyle="{minWidth:'200px'}" v-model:activeKey="compData.activeKey">
                    <a-tab-pane key="1" tab="已读">
                        <p style="line-height:30px" v-for="(item,idx) in compData.noticeList" :key="idx">{{ item.text }}</p>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="未读" force-render>
                        <p style="line-height:30px" v-for="(item,idx) in compData.noticeList" :key="idx">{{ item.text }}</p>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="邮件">
                        <p style="line-height:30px" v-for="(item,idx) in compData.noticeList" :key="idx">{{ item.text }}</p>
                    </a-tab-pane>
                </a-tabs>
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
    <template v-if="bagHeaderItem">
        <component :is="bagHeaderItem" v-bind="{compData}"></component>
    </template>
    <div class="right_menu-item hidden-xs">
        <img v-if="userinfo.userhead" class="user-head" :src="userinfo.userhead" alt="">
        <img v-else class="user-head" src="@/packages/assets/image/160161.png" alt="">
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
                {{ userinfo.username }}
                <DownOutlined />
            </a>
            <template #overlay>
                <template v-if="bagHeaderUser">
                    <component :is="bagHeaderUser" v-bind="{compData}"></component>
                </template>
                <template v-else>
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
        const { bagHeaderItem, bagHeaderUser } = configAppComps
        const router = useRouter()
        const userSetting = ref()
        const $mitt: any = inject('$mitt')
        const userStore = userPinia()
        const { isFullscreen, toggle } = useFullscreen()
        const userinfo = userStore.userInfo
        const { getImageFullPath } = inject<any>('bagGlobal')
        const compData = reactive({
            visible: false,
            noticeList: [
                { text: '😀 只要有梦想！你永远都是年轻！' },
                { text: '🥰 喜欢就要争取，不行就要努力' },
                { text: '😛 没有伞的孩子，必须努力奔跑！' },
            ],
            activeKey: '1',
            icons: [
                {
                    iconName: 'SyncOutlined',
                    classItemName: 'right_menu-item hidden-xs',
                    classItemIcon: 'icon-svg refresh',
                    handle: () => {
                        $mitt.emit('reload-router-view')
                    },
                },
                // {
                //     iconName: 'ClearOutlined',
                //     classItemName: 'right_menu-item hidden-xs',
                //     classItemIcon: 'icon-svg',
                //     handle() {
                //         userSetting.value.showDrawer()
                //     },
                // },
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
            toggle,
        })
        return {
            userSetting,
            userinfo,
            handleKeyBoard,
            toggle,
            bagHeaderItem,
            bagHeaderUser,
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
