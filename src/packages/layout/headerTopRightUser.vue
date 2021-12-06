<template>
    <div class="right_menu-item">
        <input class="key-input" v-model="searchKey" @keydown.enter="handleKeyBoard($event,handleEnter)"
               :class="searchActive" type="text">
        <SearchOutlined class="icon-svg icon-search" @click="handleSearch"/>
    </div>
    <div class="right_menu-item" v-if="isPC">
        <CompressOutlined class="icon-svg" @click="handleScreenModel" v-if="fullState"/>
        <ExpandOutlined class="icon-svg" @click="handleScreenModel" v-else/>
    </div>
    <div class="right_menu-item" v-if="isPC">
        <a-popover v-model="visible" title="系统通知" trigger="click">
            <template #content>
                <div class="notice-content">
                    <p v-for="item in noticeList" :key="item.id">{{ item.text }} {{ item.createTime }}</p>
                </div>
            </template>
            <a-badge :count="noticeList.length">
                <BellOutlined class="icon-svg"/>
            </a-badge>
        </a-popover>
    </div>
    <div class="right_menu-item">
        <SyncOutlined class="icon-svg refresh" @click="handleRefresh"/>
    </div>
    <div class="right_menu-item" @click="handleOpenThemeSetting">
        <ClearOutlined class="icon-svg"/>
    </div>
    <div class="right_menu-item hidden-xs">
        <img class="user-head" src="@/packages/assets/image/yanghang.jpg" alt="">
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
                {{ userinfo.username }}
                <DownOutlined/>
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <a href="https://github.com/hangjob/vue-vite-admin-ts" target="_blank">嗨，你好</a>
                    </a-menu-item>
                    <a-menu-item @click="handleQuit">
                        <LogoutOutlined />
                        退出
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
    <userSetting ref="userSetting"/>
</template>
<script lang="ts">
import userSetting from './user/setting.vue'
import {computed, defineComponent, inject, nextTick, onMounted, ref} from 'vue'
import {checkFull, fullscreenchange, switchScreen} from '@/packages/utils/screen.full'
import {handleKeyBoard} from '@/packages/utils/keydown'
import {notification} from 'ant-design-vue';
import {apiNotice} from '@/packages/service/user'
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
import {useStore} from "vuex";
import locaStore from '@/packages/utils/persistence'
import {useRouter} from "vue-router";
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
        SyncOutlined,
    },
    setup() {
        const router = useRouter();
        const userSetting = ref()
        const searchActive = ref<string | null>(null);
        const searchKey = ref<string>('');
        const fullState = ref<boolean>(false)
        const $mitt: any = inject('$mitt');
        const visible = ref(false);
        const noticeList: any = ref([]);
        const store = useStore()
        const userinfo = store.getters["user/userinfo"];
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

        // 刷新
        const handleRefresh = () => {
            $mitt.emit('reload-router-view')
        }


        onMounted(() => {
            fullscreenchange(toggle)
        })

        apiNotice().then((res: any) => {
            noticeList.value = res;
        })

        const  handleQuit = ()=>{
            locaStore.clearAll();
            router.push('/login')
        }

        return {
            userSetting,
            searchActive,
            searchKey,
            fullState,
            userinfo,
            visible,
            noticeList,
            handleSearch,
            handleOpenThemeSetting,
            handleScreenModel,
            handleKeyBoard,
            handleEnter,
            handleRefresh,
            isPC,
            handleQuit
        }
    }
})
</script>
<style lang="less" scoped>
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
