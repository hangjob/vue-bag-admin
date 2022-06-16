import {addUniqueId} from '@/packages/utils/lodash'
// 看我写的文档字段介绍

const defaulSystemMenu = {
    name: '系统管理',
    router: '',
    icon: 'SettingOutlined',
    shows: 1,
    id: '_local11',
    children: addUniqueId(
        [
            {
                name: '部门组织',
                path: '/sys/branch',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/sys/branch/Index.vue'
            },
            {
                name: '角色管理',
                path: '/sys/role',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/sys/role/Index.vue'
            },
        ],
        '_local'
    )
}

/**
 * 默认菜单
 */
const arr: Array<any> = [
    {
        name: '首页',
        path: '/home',
        icon: 'HomeFilled',
        shows: 1,
        tabHidden: false,
        iframe: '',
        tabFix: true,
        keepAlive: false,
    },
    {
        ...defaulSystemMenu,
        children: [
            ...defaulSystemMenu.children,
            {
                name: '用户管理', path: '/sys/member', icon: '', shows: 1,
                tabHidden: false, tabFix: false, keepAlive: true,
            },
            {
                name: '菜单列表', path: '/sys/menu', icon: '', shows: 1,
                tabHidden: false, tabFix: false, keepAlive: true,
            }
        ]
    },
    {
        name: '组件库',
        router: '',
        icon: 'SmileOutlined',
        shows: 1,
        children: [
            {
                name: 'Markdown编辑器',
                path: '/module/markdown',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
            {
                name: '富文本编辑器',
                path: '/module/rich',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
            },
            {
                name: '解析Exel',
                path: '/module/exel',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
            {
                name: '上传',
                path: '',
                icon: 'FileImageOutlined',
                shows: 1,
                children: [
                    {
                        name: '图片上传',
                        path: '/module/fileUploadImg',
                        icon: '',
                        shows: 1,
                        tabHidden: false,
                        tabFix: false,
                        keepAlive: false,
                    },
                    {
                        name: '文件上传',
                        path: '/module/fileUpload',
                        icon: '',
                        shows: 1,
                        tabHidden: false,
                        tabFix: false,
                        keepAlive: false,
                    },
                ],
            },
            {
                name: '文件打印',
                path: '/module/print',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
            {
                name: '简洁图标',
                path: '/module/icon/iconfont',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
            {
                name: '描述列表',
                path: '/module/descriptions',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
            {
                name: '课程表',
                path: '/module/course',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
            },
            {
                name: '视频播放',
                path: '/module/media',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
            },
            {
                name: '内容搜索',
                path: '/module/fuse',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
            },
            {
                name: '导出文件',
                path: '/module/fileSaver',
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
            },
            {
                name: '表单生成器',
                path: '/iframe/form-generator',
                icon: '',
                shows: 1,
                iframePath: 'https://demo.gin-vue-admin.com/form-generator',
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
        ],
    },
    {
        name: '数据图表',
        path: '',
        icon: 'PieChartOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        children: [
            {
                name: 'G2',
                path: '/chart/g2',
                icon: '',
                shows: 1,
                iframe: '',
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
            {
                name: 'G2plot',
                path: '/chart/g2plot',
                icon: '',
                shows: 1,
                iframe: '',
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
        ],
    },
    {
        name: '开发文档',
        path: '',
        icon: 'ReadOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        children: [
            {
                name: 'Vue3',
                path: '/iframe/Vue3',
                icon: '',
                shows: 1,
                iframePath: 'https://v3.cn.vuejs.org/',
                tabHidden: false,
                tabFix: false,
                keepAlive: false,
            },
        ],
    },
    {
        name: '通知页面',
        path: '/error',
        icon: 'MehOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: false,
    },
    {
        name: '打点吧',
        path: '/admire',
        icon: 'RedEnvelopeOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: false,
    },
    {
        name: '权限控制',
        path: '/permit',
        icon: 'UserSwitchOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: false,
    },
    {
        name: '异步组件',
        path: '/async',
        icon: 'UserOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: false,
    },
    {
        name: '关于',
        path: '/about',
        icon: 'UserOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: true,
        keepAlive: false,
    },
    {
        name: '错误捕获',
        path: '/module/debug',
        icon: 'UserOutlined',
        shows: 0,
        tabHidden: false,
        tabFix: false,
        keepAlive: false,
    },
]

const defaultMenu = addUniqueId(arr, '_local') // 增加个标识符

/**
 * 默认项目菜单
 */
let defaultPrjMenu = [
    {
        name: '系統菜单',
        icon: 'UserOutlined',
        shows: 1,
        menus: defaultMenu,
    },
    {
        name: '工作平台',
        icon: 'UserOutlined',
        shows: 1,
        menus: defaultMenu.slice(0, 3),
    },
    {
        name: '租户管理',
        icon: 'UserOutlined',
        shows: 1,
        menus: defaultMenu.slice(-3),
    },
]
defaultPrjMenu = addUniqueId(defaultPrjMenu, '_local')
export {
    defaultMenu,
    defaultPrjMenu,
    defaulSystemMenu
}
