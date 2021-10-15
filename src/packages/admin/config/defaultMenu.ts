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
import {uniqueId} from 'lodash';

const defaultMenu = [
    {
        name: '首页',
        router: '/home',
        icon: 'HomeFilled',
        isShow: 1,
        id: 1
    },
    {
        name: '组件库',
        router: '',
        isShow: 1,
        id: 2,
        children: [
            {
                name: 'Markdown编辑器',
                router: '/markdown',
                icon: 'HomeFilled',
                isShow: 1,
                id: 3,
            },
            {
                name: '文件上传',
                router: '/fileUpload',
                icon: 'UploadOutlined',
                isShow: 1,
                id: 4,
            },
        ]
    },
    {
        name: '关于',
        router: '/about',
        icon: 'UserOutlined',
        isShow: 1,
        id: 5,
    },
]

const InfiniteTraversal = (arr: Array<any>) => {
    return arr.forEach((item: any) => {
        item.id = uniqueId('id_');
        if (item.children) {
            InfiniteTraversal(item.children)
        }
    })
}
InfiniteTraversal(defaultMenu)
export {
    defaultMenu
}