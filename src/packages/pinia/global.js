import {defineStore} from 'pinia'
import {unique, replaceOrAppend, select} from 'radash'
import currentDevice from "current-device" // 获取设备
import {nextTick} from "vue"

const getBrowserDeviceType = function (w = 718) {
    return window.innerWidth < w;
};

const useGlobalStore = defineStore('global', {
    state: () => {
        return {
            sourceMenus: [], // 原始菜单 数据固定不变
            menus: [], // 左侧菜单
            subMenus: [], // 分类子菜单,
            appGroups: [], // 应用分类
            files: [], // 所有的文件
            routes: [],// 所有的路由
            isLoadRoutes: false, // 路由是否加载
            configs: {
                collapsedWidth: 80, // 折叠宽度
                collapsedIconSize: 22, // 折叠图标大小
                mobileMenuDrawer: 240, // 移动菜单抽屉宽度
                menuDrawer: 240, // 菜单抽屉宽度
                layoutSiderWidth: 240, // 左侧宽度
                isMenuCollapsed: false, // 是否折叠
                mobileMenuVisible: false, // 是否隐藏菜单
                isTopColor: false, // 顶部栏颜色
                isDarkMode: false, // 暗黑模式
                isTabar: true, // 标签是否显示
                isBreadcrumb: true, // 是否展示面包屑
                isBreadcrumbIcon: true, // 是否显示面包屑图标
                isDataPersistence: false, // 标签是否持久化
                isSubmenu: true, // 是否展示应用分类子菜单
                language: navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en', // 语言
                isDocking: false, // 分类模块化
                isFooter: true, // 是否显示底部
                isWatermark: false, // 是否水印
                watermark: '品茗科技', // 水印文字
                layoutName: 'lessen', // 主题名称 default lessen spillover
                tabStyle: 'button', // 标签风格 button card
                formStyle: 'drawer', // 表单风格 drawer dialogue
            },
            isIframe: window.self.frameElement && window.self.frameElement.tagName === "IFRAME", // 判断页面是否被路由嵌套
            deviceInfo: { // 设备类型,
                isMobile: false,
                isTablet: false,
                isDesktop: false
            },
            webSite: {
                title: '品茗科技', // logo
                subTitle: '为专业赋能', // 副标题
            },
            currentRouter: {}, // 当前路由对象
            breadcrumb: [], // 头部面包屑导航
            tabs: [], // 菜单切换
            isRouterAlive: true, // 切换刷新页面
            theme: {
                color: '#18a058',
                colors: [
                    {name: '默认', color: '#18a058'},
                    {name: '薄暮', color: '#f5222d'},
                    {name: '日暮', color: '#13c2c2'},
                    {name: '火山', color: '#fa541c'},
                    {name: '深绿', color: '#009688'},
                    {name: '金盏花', color: '#faad14'},
                    {name: '日出', color: '#ffec3d'},
                    {name: '青柠', color: '#a0d911'},
                    {name: '极光绿', color: '#52c41a'},
                    {name: '拂晓蓝', color: '#1890ff'},
                    {name: '极客蓝', color: '#2f54eb'},
                ],
                overrides: {},
            },
        }
    },
    getters: {},
    actions: {
        dispatchRoutes(routes) {
            this.routes = unique(this.routes.concat(routes), item => item.id);
        },
        dispatchMenus(menus) {
            this.menus = unique(select(menus, f => ({...f}), f => !f.hasMenu), item => item.id);
        },
        dispatchSourceMenus(menus) {
            this.sourceMenus = unique(menus, item => item.id);
        },
        dispatchAppGroups(groups) {
            this.appGroups = unique(groups, item => item.id);
        },
        dispatchFiles(files) {
            this.files = files;
        },
        dispatchIsRoutes() {
            this.isLoadRoutes = true
        },
        dispatchTabs(tab) {
            if (tab.title && tab.id) {
                const tabs = replaceOrAppend(this.tabs, tab, existingTab => existingTab.id === tab.id);
                this.tabs = tabs.sort((a, b) => {
                    return b.sort || 0 - a.sort || 0
                })
            }
        },
        dispatchDeviceInfo() {
            // 既判断根据设备判断 也根据当前的尺寸判断
            this.deviceInfo.isMobile = currentDevice.mobile() || getBrowserDeviceType(718)
            this.deviceInfo.isTablet = currentDevice.tablet() || getBrowserDeviceType(1199)
            this.deviceInfo.isDesktop = currentDevice.desktop() || getBrowserDeviceType(Number.MAX_SAFE_INTEGER)
            this.configs.isMenuCollapsed = this.deviceInfo.isTablet
        },
        dispatchThemeOverrides({overrides, color}) {
            this.theme.overrides = overrides
            this.theme.color = color
        },
        reloadView() {
            this.isRouterAlive = false;
            nextTick().then(() => {
                this.isRouterAlive = true
            })
        }
    },
    persist: {
        key: 'pinia', //存储名称
        storage: localStorage, // 存储方式
        //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
        paths: ['configs', 'theme'],
    },
})

export default useGlobalStore