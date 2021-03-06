export default [
    {
        path: '/home', name: 'home', meta: { title: '首页' },
        component: () => import('@/packages/views/home/Index.vue'),
    },
    {
        path: '/sys/menu', name: 'sys-menu', meta: { title: '菜单列表' },
        component: () => import('@/packages/views/sys/menu/Index.vue'),
    },
    {
        path: '/sys/branch', name: 'sys-branch', meta: { title: '部门组织' },
        component: () => import('@/packages/views/sys/branch/Index.vue'),
    },
    {
        path: '/sys/member', name: 'sys-member', meta: { title: '用户管理' },
        component: () => import('@/packages/views/sys/member/Index.vue'),
    },
    {
        path: '/sys/role', name: 'sys-role', meta: { title: '角色管理' },
        component: () => import('@/packages/views/sys/role/Index.vue'),
    },
    {
        path: '/module/markdown', name: 'module-markdown', meta: { title: 'markdown编辑器' },
        component: () => import('@/packages/views/module/markdown/Index.vue'),
    },
    {
        path: '/module/fileUploadImg', name: 'module-fileUploadImg', meta: { title: '图片上传' },
        component: () => import('@/packages/views/module/fileUpload/FileUploadImg.vue'),
    },
    {
        path: '/module/fileUpload', name: 'module-fileUpload', meta: { title: '文件上传' },
        component: () => import('@/packages/views/module/fileUpload/FileUpload.vue'),
    },
    {
        path: '/about', name: 'about', meta: { title: '关于' },
        component: () => import('@/packages/views/about/Index.vue'),
    },
    {
        path: '/permit', name: 'permit', meta: { title: '权限管理' },
        component: () => import('@/packages/views/permit/Index.vue'),
    },
    {
        path: '/module/exel', name: 'module-exel', meta: { title: '解析Exel' },
        component: () => import('@/packages/views/module/exel/Index.vue'),
    },
    {
        path: '/module/rich', name: 'module-rich', meta: { title: '富文本编辑器' },
        component: () => import('@/packages/views/module/rich/Index.vue'),
    },
    {
        path: '/iframe/:name', name: 'iframe-view', meta: { title: 'iframe' },
        component: () => import('@/packages/views/module/iframe/Index.vue'),
    },
    {
        path: '/module/print', name: 'module-print', meta: { title: 'print' },
        component: () => import('@/packages/views/module/print/Index.vue'),
    },
    {
        path: '/module/icon/iconfont', name: 'module-icon-iconfont', meta: { title: '图标' },
        component: () => import('@/packages/views/module/icon/iconfont/Index.vue'),
    },
    {
        path: '/module/draggable', name: 'module-draggable', meta: { title: '拖拽排序' },
        component: () => import('@/packages/views/module/draggable/Index.vue'),
    },
    {
        path: '/chart/g2', name: 'chart-g2', meta: { title: 'G2' },
        component: () => import('@/packages/views/chart/g2/Index.vue'),
    },
    {
        path: '/chart/g2plot', name: 'chart-g2plot', meta: { title: 'G2plot' },
        component: () => import('@/packages/views/chart/g2plot/Index.vue'),
    },
    {
        path: '/error', name: 'error', meta: { title: '错误页面' },
        component: () => import('@/packages/views/error/Index.vue'),
    },
    {
        path: '/500', name: '500', meta: { title: '错误页面' },
        component: () => import('@/packages/views/error/500.vue'),
    },
    {
        path: '/403', name: '403', meta: { title: '错误页面' },
        component: () => import('@/packages/views/error/403.vue'),
    },
    {
        path: '/module/descriptions', name: 'module-descriptions', meta: { title: '描述列表' },
        component: () => import('@/packages/views/module/descriptions/Index.vue'),
    },
    {
        path: '/admire', name: 'admire', meta: { title: '打点吧' },
        component: () => import('@/packages/views/admire/Index.vue'),
    },
    {
        path: '/async', name: 'async', meta: { title: '异步组件' },
        component: () => import('@/packages/views/async/Index.vue'),
    },
    {
        path: '/module/util', name: 'module-util', meta: { title: '工具库' },
        component: () => import('@/packages/views/module/util/Index.vue'),
    },
    {
        path: '/module/debug', name: 'module-debug', meta: { title: '错误捕获' },
        component: () => import('@/packages/views/module/debug/Index.vue'),
    },
    {
        path: '/module/course', name: 'module-course', meta: { title: '课程表' },
        component: () => import('@/packages/views/module/course/Index.vue'),
    },
    {
        path: '/module/winbox', name: 'module-winbox', meta: { title: 'WinBox弹窗' },
        component: () => import('@/packages/views/module/winbox/Index.vue'),
    },
    {
        path: '/module/media', name: 'module-media', meta: { title: '视频播放' },
        component: () => import('@/packages/views/module/media/Index.vue'),
    },
    {
        path: '/module/fuse', name: 'module-fuse', meta: { title: '内容搜索' },
        component: () => import('@/packages/views/module/fuse/Index.vue'),
    },
    {
        path: '/module/fileSaver', name: 'module-fileSaver', meta: { title: '导出文件' },
        component: () => import('@/packages/views/module/fileSaver/Index.vue'),
    },
]
