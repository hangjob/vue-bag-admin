import {addUniqueId} from '@/packages/utils/lodash'

/**
 * 如果你不想走网络接口
 * 本地路由添加
 */
const paths = addUniqueId([
    {
        name: '测试CURD',
        path: '/cstest',
        icon: 'HomeOutlined',
        shows: 0,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/admin/views/cstest/Index.vue',
    }
], '_local')

export default paths
