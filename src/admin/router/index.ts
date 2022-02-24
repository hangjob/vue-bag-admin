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
                name: '内容管理',
                path: '/archives',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/archives/Index.vue',
            },
        ],
    },
], '_local')

export default paths
