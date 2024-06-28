import {defineStore} from 'pinia'
import {unique, replaceOrAppend} from 'radash'
import currentDevice from "current-device" // 获取设备
import {nextTick} from "vue"

const getBrowserDeviceType = function (w = 718) {
    return window.innerWidth < w;
};

const useGlobalStore = defineStore('global', {
    state: () => ({
        sourceMenus: [], // 原始菜单 数据固定不变
        menus: [], // 菜单
        appGroups: [], // 应用分类
        files: [], // 所有的文件
        routes: [],// 所有的路由
        isLoadRoutes: false, // 路由是否加载
        configs: {
            layoutSiderWidth: 240, // 左侧宽度
            menuCollapsed: false, // 是否折叠
            mobileMenuVisible: false, // 是否隐藏菜单
            isTopColor: false, // 顶部栏颜色
            isDarkMode: false, // 暗黑模式
            isTabar: true, // 标签是否显示
            isDataPersistence: false, // 标签是否持久化
            layoutMode: 1, // 布局方式
            isSubmenu: true, // 分类子菜单
            language: navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en', // 语言
            isDocking: false, // 分类模块化
            isFooter: true, // 是否显示底部
            isWatermark: false, // 是否水印
            watermark: '品茗科技', // 水印文字
            layoutName: 1, // 主题名称
            isIframe: window.self.frameElement && window.self.frameElement.tagName === "IFRAME" // 判断页面是否被路由嵌套
        },
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
        isRouterAlive:true, // 切换刷新页面
        theme: {
            colors: [
                {name: '薄暮', color: '#f5222d'}, {name: '火山', color: '#fa541c'},
                {name: '日暮', color: '#13c2c2'}, {name: '深绿', color: '#009688'},
                {name: '火山', color: '#fa541c'}, {name: '日暮', color: '#13c2c2'},
                {name: '深绿', color: '#009688'},
            ],
            color: '#f5222d',
            overrides: {}, // 主题变量
        },
    }),
    getters: {},
    actions: {
        dispatchRoutes(routes) {
            this.routes = unique(this.routes.concat(routes), item => item.id);
        },
        dispatchMenus(menus) {
            this.menus = unique(menus, item => item.id);
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
            if (tab.title) {
                this.tabs = replaceOrAppend(this.tabs, tab, f => f.id === tab.id)
            }
        },
        dispatchDeviceInfo() {
            // 既判断根据设备判断 也根据当前的尺寸判断
            this.deviceInfo.isMobile = currentDevice.mobile() || getBrowserDeviceType(718)
            this.deviceInfo.isTablet = currentDevice.tablet() || getBrowserDeviceType(1199)
            this.deviceInfo.isDesktop = currentDevice.desktop() || getBrowserDeviceType(Number.MAX_SAFE_INTEGER)
            this.configs.menuCollapsed = this.deviceInfo.isTablet
        },
        dispatchThemeOverrides({overrides, color}) {
            this.theme.overrides = overrides
            this.theme.color = color
        },
        reloadView(){
            this.isRouterAlive = false;
            nextTick().then(()=>{
                this.isRouterAlive = true
            })
        }
    },
})

export default useGlobalStore
