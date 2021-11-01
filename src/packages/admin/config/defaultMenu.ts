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

import { addUniqueId } from '@/utils/lodash';

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
                icon: 'FileMarkdownOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '富文本编辑器',
                path: '/module/rich',
                icon: 'FileTextOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '解析Exel',
                path: '/module/exel',
                icon: 'InsertRowBelowOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '上传',
                path: '',
                icon: 'FolderAddOutlined',
                isShow: 1,
                children: [
                    {
                        name: '图片上传',
                        path: '/module/fileUploadImg',
                        icon: 'FileImageOutlined',
                        isShow: 1,
                        tabHidden: false,
                        tabFix: false
                    },
                    {
                        name: '文件上传',
                        path: '/module/fileUploadImg',
                        icon: 'FileAddOutlined',
                        isShow: 1,
                        tabHidden: false,
                        tabFix: false
                    }
                ]
            },
            {
                name: '文件打印',
                path: '/module/print',
                icon: 'PrinterOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '简洁图标',
                path: '/module/icon/iconfont',
                icon: 'SmileOutlined',
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
                icon: 'TableOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '海量数据',
                path: '/vxe-table/great-table',
                icon: 'TableOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '编辑表格',
                path: '/vxe-table/edit-table',
                icon: 'TableOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '校验表格',
                path: '/vxe-table/verify-table',
                icon: 'TableOutlined',
                isShow: 1,
                tabHidden: false,
                tabFix: false
            },
            {
                name: '更多介绍',
                path: '/iframe',
                icon: 'TableOutlined',
                isShow: 1,
                iframe: 'https://xuliangzhan_admin.gitee.io/vxe-table/v4/table/tree/basic',
                tabHidden: false,
                tabFix: false
            }
        ]
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