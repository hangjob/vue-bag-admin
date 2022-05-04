import { addUniqueId } from '@/packages/utils/lodash'

const paths = addUniqueId([
    {
        name: '首页',
        path: '/home',
        icon: '',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/admin/views/home/Index.vue',
    },
    {
        name: 'CMS管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '栏目管理',
                path: '/channel',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/channel/Index.vue',
            },
            {
                name: '内容管理',
                path: '/article',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/article/Index.vue',
            },
            {
                name: '关键词管理',
                path: '/antistop',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/antistop/Index.vue',
            },
        ],
    },
    {
        name: '用户管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '用户管理',
                path: '/sys/member',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/packages/views/sys/member/Index.vue',
            },
        ],
    },
], '_local')

export default paths
