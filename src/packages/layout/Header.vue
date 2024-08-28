<template>
    <n-layout-header class="bag-layout-header" :inverted="false" bordered>
        <n-page-header>
            <template #title>
                <component is="LayoutHeaderTitle">
                    <div v-if="!$globalStore.deviceInfo.isMobile"
                         class="flex items-center justify-center border-solid border-r bag-border-color h-[50px] text-inherit"
                         :style="{width:$globalStore.configs.layoutSiderWidth+'px'}">
                        <a href="/" class="text-base flex-shrink-0">{{ $globalStore.webSite.title }}</a>
                        <span class="text-xs ml-2 flex-shrink-0">{{ $globalStore.webSite.subTitle }}</span>
                    </div>
                    <div
                        class="flex cursor-pointer items-center justify-center border-solid border-r bag-border-color h-[50px] w-[64px]"
                        v-else>
                        <n-button
                            @click="$globalStore.configs.mobileMenuVisible = !$globalStore.configs.mobileMenuVisible"
                            :bordered="false">
                            <n-badge>
                                <n-icon size="18">
                                    <MenuUnfoldOutlined/>
                                </n-icon>
                            </n-badge>
                        </n-button>
                    </div>
                </component>
            </template>
            <template #subtitle>
                <component is="LayoutHeaderSubtitle">
                    <n-breadcrumb>
                        <n-breadcrumb-item v-for="item in $globalStore.breadcrumb">
                            {{ $global?.helpers?.formatTitle($global, item) }}
                        </n-breadcrumb-item>
                    </n-breadcrumb>
                </component>
            </template>
            <template #extra>
                <div class="flex items-center">
                    <component is="LayoutHeaderExtra">
                        <n-dropdown trigger="click" v-for="item in compData.allOptions" :options="item.options"
                                    placement="bottom-start">
                            <n-button :bordered="false" @click="item.props.onClick">
                                <n-badge>
                                    <component class="mr-2" :is="item.icon"></component>
                                </n-badge>
                                {{ $global?.helpers?.formatTitle($global, item) }}
                            </n-button>
                        </n-dropdown>
                    </component>
                </div>
            </template>
        </n-page-header>
    </n-layout-header>
</template>

<script setup>
import {MenuUnfoldOutlined} from "@vicons/antd"
import {renderIcon} from "@/packages/helpers/index.js";
import {UserCircleRegular} from "@vicons/fa";
import {HomeOutline} from "@vicons/ionicons5";
const {appContext: {config: {globalProperties}}} = getCurrentInstance();
const $router = globalProperties?.$router
const compData = reactive({
    allOptions: [
        {
            title: '首页',
            key: 'home',
            localesKey: 'home',
            icon: renderIcon(HomeOutline, {size: 18}),
            props: {
                onClick: () => {
                    $router.push({path:'/home'})
                }
            }
        },
        {
            title: '用户名',
            key: 'user',
            localesKey: 'userName',
            icon: renderIcon(UserCircleRegular, {size: 18}),
            props: {
                class: 'mr-2',
            },
            options: [
                {
                    title: '修改账户',
                    key: '1',
                    disabled: true,
                },
                {
                    title: '退出登录',
                    key: '3',
                    props: {
                        onClick: () => {
                            $router.push({path:'/login'})
                        }
                    }
                }
            ]
        },
    ]
})
</script>
<style lang="less" scoped>
:deep(.n-page-header .n-page-header__main) {
    flex: 1;
}

:deep(.n-page-header__subtitle) {
    flex: 1;
    width: 0;
    display: flex;
    align-items: center;
}
</style>
