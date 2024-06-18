<template>
    <div class="flex flex-col" style="height: 100%">
        <Header/>
        <n-layout fle has-sider style="flex: 1">
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
            <div class="flex h-full flex-col flex-auto overflow-hidden">
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
        <Footer/>
    </div>
</template>

<script>
import Header from "@/packages/layout/Header.vue";
import Footer from "@/packages/layout/Footer.vue";
import SiderMenu from "@/packages/layout/components/SiderMenu.vue"
import TabBar from "@/packages/layout/components/TabBar.vue"
import {h, defineComponent, ref} from 'vue'
import currentDevice from "current-device"

export default defineComponent({
    components: {
        Header, Footer, SiderMenu, TabBar
    },
    setup() {
        const {appContext: {config: {globalProperties}}} = getCurrentInstance();
        globalProperties.$globalStore.dispatchDeviceInfo()
        currentDevice.onChangeOrientation(globalProperties.$globalStore.dispatchDeviceInfo)
    }
})
</script>
