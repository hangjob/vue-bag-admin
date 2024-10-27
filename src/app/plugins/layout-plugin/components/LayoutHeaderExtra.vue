<template>
    <template v-if="!$globalStore.deviceInfo.isMobile">
        <n-dropdown trigger="click" v-for="item in allOptions" :options="item.options" placement="bottom-start">
            <n-button :bordered="false" @click="item.props.onClick">
                <n-badge>
                    <component class="mr-2" :is="item.icon"></component>
                </n-badge>
                {{ $global?.helpers?.formatTitle($global, item) }}
            </n-button>
        </n-dropdown>
    </template>
    <n-dropdown v-else trigger="hover" :render-label="(item)=>$global?.helpers?.formatTitle($global, item)"
                :options="allOptions">
        <n-button :bordered="false">
            <n-badge>
                <n-icon size="20">
                    <Apps/>
                </n-icon>
            </n-badge>
        </n-button>
    </n-dropdown>
    <LayoutSettings v-model:show="visible"></LayoutSettings>
</template>
<script setup>
import {
    HomeOutline,
    NotificationsOutline,
    SettingsOutline,
    Apps,
    Language
} from "@/packages/helpers/Icon.js";
import {UserCircleRegular} from "@vicons/fa";
import LayoutSettings from "./LayoutSettings.vue"
import {renderIcon} from "@/packages/helpers/index.js";
import {NAvatar, NText} from 'naive-ui'

const {appContext: {config: {globalProperties}}} = getCurrentInstance();
const useI18n = globalProperties?.$global?.i18n?.useI18n()
const $router = globalProperties?.$router

watch(
    () => globalProperties.$globalStore?.configs?.language,
    () => {
        useI18n.locale.value = globalProperties.$globalStore?.configs?.language
    }
)


function renderCustomHeader() {
    return h(
        'div',
        {
            style: 'display: flex; align-items: center; padding: 8px 12px;'
        },
        [
            h(NAvatar, {
                round: true,
                style: 'margin-right: 12px;',
                src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
            }),
            h('div', null, [
                h('div', null, [h(NText, {depth: 2}, {default: () => '打工仔'})]),
                h('div', {style: 'font-size: 12px;'}, [
                    h(
                        NText,
                        {depth: 3},
                        {default: () => '毫无疑问，你是办公室里最亮的星'}
                    )
                ])
            ])
        ]
    )
}


const noticeOptions = [
    {
        key: 'header',
        type: 'render',
        render: renderCustomHeader
    },
    {
        key: 'header-divider',
        type: 'divider'
    },
    {
        label: '处理群消息 342 条',
        key: 'stmt1'
    },
    {
        label: '被 @ 58 次',
        key: 'stmt2'
    },
    {
        label: '加入群 17 个',
        key: 'stmt3'
    }
]
const visible = ref(false)
const allOptions = [
    {
        title: '首页',
        key: 'home',
        localesKey: 'home',
        icon: renderIcon(HomeOutline, {size: 18}),
        props: {
            onClick:()=>{
                $router.push({path:'/'})
            }
        }
    },
    {
        title: '通知',
        key: 'notifica',
        localesKey: 'notification',
        icon: renderIcon(NotificationsOutline, {size: 18}),
        props: {},
        options: noticeOptions
    },
    {
        title: '语言',
        key: 'language',
        localesKey: 'language',
        icon: renderIcon(Language, {size: 18}),
        props: {
            onClick: () => {
                if (useI18n) {
                    globalProperties.$globalStore.configs.language = globalProperties.$globalStore.configs.language === 'zh' ? 'en' : 'zh'
                } else {
                    globalProperties?.$global?.naive?.message?.error(`未安装插件，language-plugin`)
                }
            }
        }
    },
    {
        title: '设置',
        key: 'settings',
        localesKey: 'setting',
        icon: renderIcon(SettingsOutline, {size: 18}),
        props: {
            onClick: () => {
                visible.value = true;
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
                        $global.middleware.eventEmitter.emit('APP:LOGOUT')
                    }
                }
            }
        ]
    },
]


</script>

