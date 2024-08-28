import {h} from "vue";
import {NIcon} from "naive-ui";
import lscache from "lscache"
import {customAlphabet} from 'nanoid';
import {md5} from "js-md5";
import {generate} from "@ant-design/colors";
import {commonDark} from 'naive-ui'

function renderIcon(icon, props) {
    return () => h(NIcon, props, {default: () => h(icon)})
}


/**
 * 递归遍历树形结构
 * @param tree
 * @param callback
 * @param children
 */
function depthForEach(tree = [], callback, children = 'children') {
    function DFS(treeData) {
        for (const item of treeData) {
            callback(item)
            if (Array.isArray(item[children])) {
                DFS(item[children])
            }
        }
    }

    DFS(tree)
}


/**
 * 获取父级节点
 * @param arr
 * @param key
 * @param node
 * @returns {T[]|*[]}
 */
function findParents(arr = [], key = '', node) {
    for (const i in arr) {
        if (arr.hasOwnProperty(i)) {
            if (((node && node(arr[i])) || arr[i].id) === key) {
                return [arr[i]]
            }
            if (arr[i].children) {
                const node = findParents(arr[i].children, key)
                if (node !== undefined) {
                    return node.concat(arr[i])
                }
            }
        }
    }
}


/**
 * 格式化标题
 * @param ctx
 * @param item
 * @param isRender
 * @returns {(function(): *)|*}
 */
function formatTitle(ctx, item, isRender = false) {
    const t = ctx.i18n?.global?.t;
    if (t && item.localesKey) {
        return isRender ? () => t(item.localesKey) : t(item.localesKey);
    } else {
        return item.title
    }
}


/**
 * 根据id 和pid 构建树形结构
 * @param nodes
 * @param key
 * @param pkey
 * @returns {*[]}
 */
function buildTree(nodes, key = 'id', pkey = 'pid') {
    const map = new Map();
    const rootNodes = [];

    // 初始化 map
    nodes.forEach(node => {
        map.set(node[key], node);
    });

    // 遍历所有节点构建树
    nodes.forEach(node => {
        const parent = map.get(node[pkey]);

        if (parent) {
            if (!parent.children) parent.children = [];
            parent.children.push(node);
        } else {
            rootNodes.push(node);
        }
    });

    return rootNodes;
}




/**
 * 生成随机字符串
 * @type {(size?: number) => string}
 */
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 24);


/**
 * 添加路由
 * @param ctx
 * @param routes
 */
const addRoutes = (ctx, routes=[])=>{
    ctx.helpers.depthForEach(routes, (item) => {
        // overlayRouting 是否开启覆盖路由，开启后则可以覆盖框架已有的路由，注意item.root你所填根节点
        if (!ctx.router.hasRoute(item.name) || item.overlayRouting) {
            const {component, name, path, ...meta} = item
            // 注意这里，如果不过扩展meta属性，其他属性添加不进去，被addRoute过滤了
            ctx.router.addRoute(item.root ? item.root : 'layout', {
                component, name, path, meta,
            })
        }
    })
}

/**
 * 菜单转换本地路由，方可在调用addRoutes
 * @param menus
 * @param files
 * @returns {*[]}
 */
const menusToLocalRoutes = (menus, files)=>{
    const localRoutes = []
    const routes = []
    for (const key in files) {
        const module = files[key]
        localRoutes.push({component: module.default, md5: md5(key), file: key})
    }
    depthForEach(menus,(item)=>{
        const routeInfo = localRoutes.find((route) => route.md5 === item.md5)
        if (routeInfo) {
            let {children, ...newItem} = {...item, ...routeInfo}
            routes.push(newItem)
        }
    })
    return routes
}


/**
 * 后端返回的数据，icon、多语言，需要本地映射才能显示，此处加工处理
 * @param ctx
 * @param menus
 * @returns {*}
 */
const menusProcessing = (ctx , menus)=>{
    ctx.helpers.depthForEach(menus, (item) => {
        const topIds = findParents(menus, item.id) // 获取当前的菜单的父级ID
        item.md5 = item.file ? md5(item.file) : null // 对每一个数据打印标记
        item.icon = ctx?.helpers?.getIcons?.(ctx, item.icon) // 转换传递过来的icon为render函数
        item.title = formatTitle(ctx, item, true);
        if (ctx.radash.isArray(topIds)) {
            const topId = topIds[topIds.length - 1]
            item.topId = topId.id !== item.id ? topId.id : null // 给每个菜单添加一个自己的顶级应用分类的Id
        }
    })
    return menus;
}



/**
 * 关闭router
 * @param ctx
 * @param route
 */
function closeTabBarJump(ctx, route) {
    const {tabs, currentRouter} = ctx.app.config.globalProperties.$globalStore
    let idx = tabs.findIndex(item => item.id === route.id)
    tabs.length > 1 && tabs.splice(idx, 1)
    if (currentRouter.path === route.path) {
        const tab = idx ? tabs[--idx] : tabs[idx];
        tab && ctx.router.push(tab.path)
    }
}


/**
 * 切换主题
 * @param ctx
 * @param color
 */
function cutColorTheme(ctx, color) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore
    function setThemeOverrides() {
        const _color = color || $globalStore.theme.color
        const colors = generate(_color, {
            theme: 'dark',
            backgroundColor: commonDark.bodyColor
        })
        // 这里可以返回的更多的主题配置色，https://liubing.me/article/vue/naive-ui/naive-ui-custom-theme.html#%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90
        $globalStore.dispatchThemeOverrides({
            overrides: {
                common: {
                    primaryColor: colors[5],
                    primaryColorHover: colors[4],
                    primaryColorSuppl: colors[4],
                    primaryColorPressed: colors[6]
                },
            },
            color: _color
        })
    }
    setThemeOverrides()
}




export {
    renderIcon,
    depthForEach,
    findParents,
    lscache,
    formatTitle,
    nanoid,
    buildTree,
    addRoutes,
    menusToLocalRoutes,
    menusProcessing,
    closeTabBarJump,
    cutColorTheme
}
