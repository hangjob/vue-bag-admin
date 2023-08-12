<template>
    <n-layout style="height: 100%">
        <n-layout-header class="header" :inverted="inverted" bordered>
            <AppLogo v-if="!compData.mobile"/>
            <div class="header-plan">
                <template v-if="userSetting.layoutName === 'ml'">
                    <MenuVisibleIcon v-if="compData.mobile" @click="handleMobileMask"/>
                    <Breadcrumb/>
                </template>
                <template v-else>
                    <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions"/>
                </template>
            </div>
            <div class="header-user">
                <UserSet/>
            </div>
        </n-layout-header>
        <n-layout has-sider style="height: calc(100% - 50px)">
            <n-layout-sider
                bordered
                show-trigger
                collapse-mode="width"
                :collapsed-width="compData.siderMinWidth"
                :width="compData.siderMaxWidth"
                :native-scrollbar="false"
                :inverted="inverted"
                :collapsed="collapsed"
                :class="[compData.mobile ? 'mobile' : null]"
                :style="{left: compData.siderLeft}"
            >
                <AppLogo v-if="compData.mobile"/>
                <n-menu
                    :inverted="inverted"
                    :collapsed-width="64"
                    :collapsed-icon-size="22"
                    :options="menuOptions"
                />
            </n-layout-sider>
            <n-layout>
                <router-view></router-view>
            </n-layout>
        </n-layout>
    </n-layout>
    <div class="mobile-mask" v-show="compData.mobile && compData.isOpen" @click="handleMobileMask"></div>
</template>

<script lang="ts">
import {h, defineComponent, ref, Component, computed, reactive,watch,watchEffect} from "vue"
import {NIcon} from "naive-ui"
import Breadcrumb from "@/packages/layout/components/Breadcrumb.vue"
import UserSet from "@/packages/layout/components/UserSet.vue"
import MenuVisibleIcon from "@/packages/layout/components/MenuVisibleIcon.vue"
import AppLogo from "@/packages/layout/components/AppLogo.vue"
import appStore from "@/packages/pinia/app.ts"
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
} from "@vicons/ionicons5"

function renderIcon(icon: Component) {
    return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions = [
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon)
    },
    {
        label: "1973年的弹珠玩具",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
            {
                label: "鼠",
                key: "rat"
            }
        ]
    },
    {
        label: "寻羊冒险记",
        key: "a-wild-sheep-chase",
        disabled: true,
        icon: renderIcon(BookIcon)
    },
    {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        icon: renderIcon(BookIcon),
        children: [
            {
                type: "group",
                label: "人物",
                key: "people",
                children: [
                    {
                        label: "叙事者",
                        key: "narrator",
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: "羊男",
                        key: "sheep-man",
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: "饮品",
                key: "beverage",
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: "威士忌",
                        key: "whisky"
                    }
                ]
            },
            {
                label: "食物",
                key: "food",
                children: [
                    {
                        label: "三明治",
                        key: "sandwich"
                    }
                ]
            },
            {
                label: "过去增多，未来减少",
                key: "the-past-increases-the-future-recedes"
            }
        ]
    }
]

export default defineComponent({
    components: {
        Breadcrumb,
        UserSet,
        MenuVisibleIcon,
        AppLogo
    },
    setup() {
        const {browser, userSetting} = appStore()
        const app = appStore()
        const collapsed = computed(() => browser.sm || browser.md)
        const compData = reactive({
            siderMaxWidth: 240,
            siderMinWidth: 64,
            mobile: computed(() => app.mobile),
            isOpen: false,
            siderLeft:computed(()=>{
                if(app.mobile){
                    return compData.isOpen ? 0 : "-300px"
                }else{
                    return 0
                }
            })
        })
        const handleMobileMask = () => {
            compData.isOpen = true
        }
        return {
            inverted: ref(false),
            menuOptions,
            browser,
            userSetting,
            collapsed,
            handleMobileMask,
            compData
        }
    }
})
</script>
<style lang="less">
.n-config-provider {
    height: 100%;
    width: 100%;
}
</style>
<style lang="less" scoped>

.header {
    display: flex;
    height: 50px;

    &-plan {
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    &-user {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
    }
}

.mobile {
    position: fixed;
    top: 0;
    left: -300px;
    bottom: 0;
    z-index: 3000;
    transition: all 0.5s;
}
</style>

