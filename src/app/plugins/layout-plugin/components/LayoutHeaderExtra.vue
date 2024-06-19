<template>
    <template v-if="!$globalStore.deviceInfo.isMobile">
        <n-dropdown trigger="click" v-for="item in allOptions" :options="item.options" placement="bottom-start">
            <n-button :bordered="false" @click="item.props.onClick($global,$globalStore)">
                <n-badge>
                    <component class="mr-2" :is="item.icon"></component>
                </n-badge>
                {{ item.label }}
            </n-button>
        </n-dropdown>
        <LayoutHeaderExtra v-model:show="visible"></LayoutHeaderExtra>
    </template>
    <n-dropdown v-else trigger="hover" :options="allOptions">
        <n-button :bordered="false">
            <n-badge>
                <n-icon size="20">
                    <RibbonOutline/>
                </n-icon>
            </n-badge>
        </n-button>
    </n-dropdown>
</template>
<script setup>
import {
    HomeOutline,
    NotificationsOutline,
    SettingsOutline,
    RibbonOutline,
    Language
} from "@vicons/ionicons5";
import {UserCircleRegular} from "@vicons/fa";
import LayoutHeaderExtra from "./LayoutSettings.vue"
import {renderIcon} from "@/packages/helpers/index.js";
import {useMessage, NAvatar, NText} from 'naive-ui'

const {appContext: {config: {globalProperties}}} = getCurrentInstance();
const useI18n = globalProperties?.$global?.i18n?.useI18n()

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
        label: '首页',
        key: 'home',
        icon: renderIcon(HomeOutline, {size: 18}),
        props: {}
    },
    {
        label: '通知',
        key: 'notifica',
        icon: renderIcon(NotificationsOutline, {size: 18}),
        props: {},
        options: noticeOptions
    },
    {
        label: '语言',
        key: 'settings',
        icon: renderIcon(Language, {size: 18}),
        props: {
            onClick: ($global, $globalStore) => {
                if (useI18n) {
                    useI18n.locale.value = useI18n.locale.value === 'zh' ? 'en' : 'zh'
                    $globalStore.configs.language = useI18n.locale.value
                } else {
                    $global.naive?.message?.error(`未安装插件，language-plugin`)
                }
            }
        }
    },
    {
        label: '设置',
        key: 'settings',
        icon: renderIcon(SettingsOutline, {size: 18}),
        props: {
            onClick: () => {
                visible.value = true;
            }
        }
    },
    {
        label: '用户名',
        key: 'user',
        icon: renderIcon(UserCircleRegular, {size: 18}),
        props: {
            class: 'mr-2'
        },
        options: [
            {
                label: '修改账户',
                key: '1',
                disabled: true
            },
            {
                label: '退出登录',
                key: '3',
            }
        ]
    },
]


</script>

