import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

/**
 * 如果你不想走网络接口
 * 本地路由添加
 */
const paths = [
    {
        name: '测试CURD',
        path: '/cstest',
        icon: 'HomeOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/admin/views/cstest/Index.vue',
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

export default paths
