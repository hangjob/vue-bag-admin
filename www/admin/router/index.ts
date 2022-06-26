import {addUniqueId} from '@/packages/utils/lodash'

/**
 * 如果你不想走网络接口
 * 本地路由添加
 */
const paths = addUniqueId([
    {
        name: '首页',
        path: '/home',
        icon: 'HomeOutlined',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/admin/views/home/Index.vue',
    },
], '_local')

export default paths
