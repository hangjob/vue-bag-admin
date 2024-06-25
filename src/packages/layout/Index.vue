<template>
    <div class="flex flex-col" style="height: 100%">
        <Header/>
        <n-layout fle has-sider style="flex: 1;">
            <n-layout-sider
                bordered
                v-model:collapsed="$globalStore.configs.menuCollapsed"
                :show-trigger="!$globalStore.deviceInfo.isMobile"
                collapse-mode="width"
                :collapsed-width="64"
                :width="$globalStore.deviceInfo.isMobile ? 0 : $globalStore.configs.layoutSiderWidth"
            >
                <SiderMenu/>
            </n-layout-sider>
            <div class="flex h-full flex-col flex-auto overflow-hidden item">
                <template v-if="components.LayoutHeaderSubtitle">
                    <n-breadcrumb class="py-2 px-4">
                        <n-breadcrumb-item v-for="item in $globalStore.breadcrumb">
                            {{ $global?.helpers?.formatTitle($global, item) }}
                        </n-breadcrumb-item>
                    </n-breadcrumb>
                    <n-divider style="margin-bottom: 0;margin-top: 0"/>
                </template>
                <component is="LayoutTabBar">
                    <TabBar v-if="$globalStore.configs.isTabar"/>
                </component>
                <n-layout has-sider :native-scrollbar="false">
                    <router-view class="flex-auto"></router-view>
                </n-layout>
            </div>
        </n-layout>
        <n-drawer v-model:show="$globalStore.configs.mobileMenuVisible" :width="$globalStore.configs.layoutSiderWidth"
                  placement="left">
            <n-drawer-content :title="$globalStore.configs.title">
                <SiderMenu/>
            </n-drawer-content>
        </n-drawer>
        <component is="LayoutFooter">
            <Footer/>
        </component>
    </div>
    <n-watermark
        v-if="$globalStore.configs.isWatermark"
        :content="$globalStore.configs.watermark"
        cross
        fullscreen
        :font-size="16"
        :line-height="16"
        :width="384"
        :height="384"
        :x-offset="12"
        :y-offset="60"
        :rotate="-15"
    />
</template>

<script>
import Header from "@/packages/layout/Header.vue";
import Footer from "@/packages/layout/Footer.vue";
import SiderMenu from "@/packages/layout/components/SiderMenu.vue"
import TabBar from "@/packages/layout/components/TabBar.vue"
import {h, defineComponent, ref, getCurrentInstance} from 'vue'
import currentDevice from "current-device"

export default defineComponent({
    components: {
        Header, Footer, SiderMenu, TabBar
    },
    setup() {
        const {appContext: {config: {globalProperties}}} = getCurrentInstance();
        globalProperties.$globalStore.dispatchDeviceInfo()
        currentDevice.onChangeOrientation(globalProperties.$globalStore.dispatchDeviceInfo)
        return {
            components: getCurrentInstance().appContext.components
        }
    }
})
</script>
