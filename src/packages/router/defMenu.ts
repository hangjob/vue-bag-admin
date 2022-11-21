import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

/**
 * 默认路由
 */
const defMenu = [
    {
        name: '首页',
        path: '/home',
        icon: 'SettingOutlined',
        shows: true,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/views/sys/menu/Index.vue',
        id: nanoid(),
        createTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
        httpFilePath: null,
        httpViewPath: null,
        iframePath: null,
        meun_id: null,
        order: 0,
        pid: null,
        type: null,
        updateTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
        user_id: null,
    },
    {
        name: '菜单列表',
        path: '/sys/menu',
        icon: 'SettingOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/views/sys/menu/Index.vue',
        id: nanoid(),
        createTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
        httpFilePath: null,
        httpViewPath: null,
        iframePath: null,
        meun_id: null,
        order: 0,
        pid: null,
        type: null,
        updateTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
        user_id: null,
    },
]
export default defMenu
