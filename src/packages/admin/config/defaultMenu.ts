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

import {addUniqueId} from '@/utils/lodash';

/**
 * disabled 是否禁用关闭
 * tabHidden 是否显示tab栏
 */
const arr = [
    {
        name: '首页',
        router: '/home',
        icon: 'HomeFilled',
        isShow: 1,
        disabled: true,
        tabHidden: false
    },
    {
        name: '系统管理',
        router: '',
        icon: 'HomeFilled',
        isShow: 1,
        children: [
            {
                name: '菜单列表',
                router: '/sys/menu',
                icon: '',
                isShow: 1,
                disabled: false,
                tabHidden: false
            }
        ]
    },
    {
        name: '组件库',
        router: '',
        isShow: 1,
        children: [
            {
                name: 'Markdown编辑器',
                router: '/module/markdown',
                icon: 'HomeFilled',
                isShow: 1,
                disabled: false,
                tabHidden: true
            },
            {
                name: '文件上传',
                router: '',
                icon: 'UploadOutlined',
                isShow: 1,
                children: [
                    {
                        name: '图片上传',
                        router: '/module/fileUploadImg',
                        icon: 'UploadOutlined',
                        isShow: 1,
                        disabled: disabled,
                        tabHidden: false
                    }
                ]
            },
        ]
    },
    {
        name: '关于',
        router: '/about',
        icon: 'UserOutlined',
        isShow: 1,
        disabled: false,
        tabHidden: false
    }
]
const defaultMenu  = addUniqueId(arr)
export {
    defaultMenu
}