// createTime: "2019-11-08 09:35:53"
// icon: "icon-log"
// id: 48
// isShow: 1
// keepAlive: 1
// name: "文档"
// orderNum: 0
// parentId: "47"
// perms: null
// router: "/tutorial/doc"
// type: 1
// updateTime: "2021-03-03 11:03:21"
// viewPath: "https://www.vipbic.com"

import {addUniqueId} from '@/packages/utils/lodash';

/**
 * tabHidden 是否显示tab栏
 * tabFix 是否固定 tab栏
 */
const arr = [
    {
        name: '首页',
        path: '/home',
        icon: 'HomeFilled',
        isShow: 1,
        tabHidden: false,
        tabFix: true
    },
    {
        name: '系统管理',
        router: '',
        icon: 'SettingOutlined',
        isShow: 1,
        children: [
            {
                name: '菜单列表',
                path: '/sys/menu',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: true
            }
        ]
    },
    {
        name: '组件库',
        router: '',
        icon: 'SendOutlined',
        isShow: 1,
        children: [
            {
                name: 'Markdown编辑器',
                path: '/module/markdown',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '富文本编辑器',
                path: '/module/rich',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '解析Exel',
                path: '/module/exel',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '上传',
                path: '',
                icon: 'FileImageOutlined',
                isShow: 1,
                children: [
                    {
                        name: '图片上传',
                        path: '/module/fileUploadImg',
                        icon: '',
                        isShow: 1,
                        tabHidden: false,
                        tabFix: false
                    },
                    {
                        name: '文件上传',
                        path: '/module/fileUploadImg',
                        icon: '',
                        isShow: 1,
                        tabHidden: false,
                        tabFix: false
                    }
                ]
            },
            {
                name: '文件打印',
                path: '/module/print',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '拖拽排序',
                path: '/module/draggable',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '简洁图标',
                path: '/module/icon/iconfont',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
        ]
    },
    {
        name: '海量数据表格',
        path: '',
        icon: 'TableOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false,
        children: [
            {
                name: '基础表格',
                path: '/vxe-table/base',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '海量数据',
                path: '/vxe-table/great-table',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '编辑表格',
                path: '/vxe-table/edit-table',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '校验表格',
                path: '/vxe-table/verify-table',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: 'vxe-table文档',
                path: '/iframe/xuliangzhan_admin',
                icon: '',
                isShow: 1,
                iframe: 'https://xuliangzhan_admin.gitee.io/vxe-table/v4/table/tree/basic',
                tabHidden: false,
                tabFix: false
            }
        ]
    },
    {
        name: '动画',
        path: '',
        icon: 'SmileOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false,
        children:[
            {
                name: 'Mo.js',
                path: '/animation/mojs',
                icon: '',
                isShow: 1,
                iframe: '',
                tabHidden: false,
                tabFix: false
            }
        ]
    },
    {
        name: '数据图表',
        path: '',
        icon: 'PieChartOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false,
        children:[
            {
                name: 'Echarts',
                path: '/chart/echarts',
                icon: '',
                isShow: 1,
                iframe: '',
                tabHidden: false,
                tabFix: false
            },
            {
                name: 'G2',
                path: '/chart/g2',
                icon: '',
                isShow: 1,
                iframe: '',
                tabHidden: false,
                tabFix: false
            },
            {
                name: 'G2plot',
                path: '/chart/g2plot',
                icon: '',
                isShow: 1,
                iframe: '',
                tabHidden: false,
                tabFix: false
            }
        ]
    },
    {
        name: '开发文档',
        path: '/permit',
        icon: 'ReadOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false,
        children:[
            {
                name: 'Vue3',
                path: '/iframe/Vue3',
                icon: '',
                isShow: 1,
                iframe: 'https://v3.cn.vuejs.org/',
                tabHidden: false,
                tabFix: false
            }
        ]
    },
    {
        name: '异常收集',
        path: '/error',
        icon: 'BugOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
    {
        name: '通知页面',
        path: '/error',
        icon: 'MehOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
    {
        name: '引导页',
        path: '/error',
        icon: 'NodeCollapseOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
    {
        name: '打点吧',
        path: '/error',
        icon: 'RedEnvelopeOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
    {
        name: '权限控制',
        path: '/permit',
        icon: 'UserSwitchOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
    {
        name: '关于',
        path: '/about',
        icon: 'UserOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
]
const defaultMenu = addUniqueId(arr)
export {
    defaultMenu
}