import {h} from "vue";
import {commonDark, NIcon} from "naive-ui";
import lscache from "lscache"
import {customAlphabet} from 'nanoid';
import {md5} from "js-md5";
import {generate} from "@ant-design/colors";
import CryptoJS from "crypto-js";
import LargeUploadFile from "@/packages/helpers/LargeUploadFile.js";
import automaticUpdate from "./AutomaticUpdate.js"
import * as icons from "@/packages/helpers/Icon.js"

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
const addRoutes = (ctx, routes = []) => {
    ctx.helpers.depthForEach(routes, (item) => {
        // overlayRouting 是否开启覆盖路由，开启后则可以覆盖框架已有的路由，注意item.root你所填根节点
        if (!ctx.router.hasRoute(item.name) || item.overlayRouting) {
            const {component, name, path, ...meta} = item
            // 注意这里，如果不过扩展meta属性，其他属性添加不进去，被addRoute过滤了
            if (item.root) {
                if (ctx.router.hasRoute(item.root)) {
                    ctx.router.addRoute(item.root, {component, name, path, meta})
                } else {
                    ctx.router.addRoute({component, name, path, meta}) // 这里可以再升级
                }
            } else {
                ctx.router.addRoute('layout', {component, name, path, meta})
            }
        }
    })
}


/**
 * 深度函数查找
 * @param arr
 * @param predicate
 * @returns {*[]}
 */
function deepFind(arr, predicate) {
    const result = [];

    function traverse(items) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            // 如果当前元素是对象，则检查其属性
            if (typeof item === 'object' && item !== null) {
                // 检查 `children` 属性是否存在
                if (Array.isArray(item.children)) {
                    traverse(item.children);
                }

                // 检查当前对象是否满足条件
                if (predicate(item)) {
                    result.push(item);
                }
            } else {
                // 如果当前元素不是对象，则直接检查是否满足条件
                if (predicate(item)) {
                    result.push(item);
                }
            }
        }
    }

    traverse(arr);
    return result;
}


/**
 * 菜单转换本地路由，方可在调用addRoutes
 * @param menus
 * @param files
 * @returns {*[]}
 */
const menusToLocalRoutes = (menus, files) => {
    const localRoutes = []
    const routes = []
    for (const key in files) {
        const module = files[key]
        localRoutes.push({component: module.default, md5: md5(key), file: key})
    }
    depthForEach(menus, (item) => {
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
const menusProcessing = (ctx, menus) => {
    ctx.helpers.depthForEach(menus, (item) => {
        const topIds = findParents(menus, item.id) // 获取当前的菜单的父级ID
        item.topIds = topIds.map(item => item.id) // 给每个菜单添加一个自己的顶级应用分类的Id
        item.md5 = item.md5 ? item.md5 : item.file ? md5(item.file) : null // 对每一个数据打印标记
        item.icon = ctx?.helpers?.getIcons?.(ctx, item.icon) // 转换传递过来的icon为render函数
        item.title = formatTitle(ctx, item, true);
        item.keepAlive = item.keepAlive ? item.keepAlive : false
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
 * @param overrides
 */
function cutColorTheme(ctx, color, overrides = {}) {
    const $globalStore = ctx.app.config.globalProperties.$globalStore

    function setThemeOverrides() {
        const activeColor = color || $globalStore.theme.color
        const generateColors = generate(activeColor, {
            theme: 'dark',
            backgroundColor: commonDark.bodyColor
        })
        // 这里可以返回的更多的主题配置色，https://liubing.me/article/vue/naive-ui/naive-ui-custom-theme.html#%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90
        $globalStore.dispatchThemeOverrides({
            overrides: deepMerge({
                common: {
                    primaryColor: generateColors[5],
                    primaryColorHover: generateColors[4],
                    primaryColorSuppl: generateColors[4],
                    primaryColorPressed: generateColors[6]
                },
            }, overrides),
            color: activeColor
        })
    }

    setThemeOverrides()
}


/**
 * 多个树形结构合并
 * @returns {any[]}
 * @param arrays
 */

function deepMergeArrays(...arrays) {
    const result = [];
    const map = new Map();

    // 遍历所有数组
    arrays.forEach(array => {
        array.forEach(item => {
            if (!map.has(item.path)) {
                map.set(item.path, []);
            }
            map.get(item.path).push(item);
        });
    });

    // 合并具有相同 path 的对象
    map.forEach((items, path) => {
        const mergedItem = items.reduce((acc, curr) => {
            // 合并属性
            Object.keys(curr).forEach(key => {
                if (!acc.hasOwnProperty(key) || acc[key] === undefined) {
                    acc[key] = curr[key];
                }
            });
            return acc;
        }, {path});

        result.push(mergedItem);
    });

    return result;
}


/**
 * 多个对象深度合并
 * @param objects
 * @returns {{}}
 */
function deepMergeObject(...objects) {
    const merged = {};
    for (let obj of objects) {
        if (typeof obj === 'object') {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        if (!merged.hasOwnProperty(key)) {
                            merged[key] = Array.isArray(obj[key]) ? [] : {};
                        }
                        merged[key] = deepMergeObject(merged[key], obj[key]);
                    } else {
                        merged[key] = obj[key];
                    }
                }
            }
        }
    }

    return merged;
}

/**
 * 对称加密
 * @param word
 * @param iv
 * @param key
 * @returns {string}
 */
function encrypt(word, iv, key) {
    let str = typeof word == "string" ? word : JSON.stringify(word);
    const srcs = CryptoJS.enc.Utf8.parse(str);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}


/**
 * 对称解密
 * @param word
 * @param iv
 * @param key
 * @returns {string}
 */
function decrypt(word, iv, key) {
    const decrypt = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt);
}


/**
 * 获取加密的密钥
 * @param iv
 * @param key
 * @returns {{CryptoJS, iv: WordArray, key: WordArray}}
 */
function getCrypto({iv = '', key = ''} = {}) {
    return {
        CryptoJS,
        iv: CryptoJS.enc.Utf8.parse(iv),
        key: CryptoJS.enc.Utf8.parse(key), //16位
    }
}

/**
 * 去除重复的斜杠
 * @param str
 * @param isHttp
 * @returns {string}
 */
function removeRepeatBias(str = '', isHttp = false) {
    if (isHttp) {
        return str.replace(/([^:])(\/\/+)/g, '$1/') // 第一个 双斜杠不去掉 http://
    } else {
        return str.replace(/(\/\/+)/g, '/')// 去掉所有的重复斜杠
    }
}


/**
 * 遍历数组并且过滤属性
 * @param arr
 * @param predicate
 * @returns {*[]}
 */
function filterOut(arr, predicate) {
    // 创建一个新的数组来存储过滤后的结果
    const result = [];
    arr.forEach(item => {
        // 如果当前项是对象并且有children属性
        if (typeof item === 'object' && item !== null && Array.isArray(item.children)) {
            item.children = filterOut(item.children, predicate);
            if (!predicate(item)) {
                result.push(item);
            }
        } else {
            // 如果当前项不是对象或者没有children属性
            if (!predicate(item)) {
                result.push(item);
            }
        }
    });
    return result;
}


/**
 * 删除重复项
 * @param arr
 * @param seen
 * @returns {*[]}
 */
function removeDuplicates(arr, seen = new Set()) {
    const result = [];
    for (let item of arr) {
        if (typeof item === 'object' && item !== null && Array.isArray(item.children)) {
            const filteredChildren = removeDuplicates(item.children, seen);
            if (!seen.has(item.id)) {
                seen.add(item.id);
                result.push({...item, children: filteredChildren});
            }
        } else {
            if (!seen.has(item.id)) {
                seen.add(item.id);
                result.push(item);
            }
        }
    }
    return result;
}


/**
 * 添加参数到URL
 * @param url
 * @param params
 * @returns {string}
 */
function addParamsToUrl(url, params) {
    // 检查URL是否已经有查询字符串
    let hasQuery = url.indexOf('?') !== -1;
    // 创建URLSearchParams对象来处理参数
    const searchParams = new URLSearchParams(hasQuery ? url.split('?')[1] : '');
    // 遍历参数对象并添加到searchParams中
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            searchParams.set(key, params[key]);
        }
    }
    // 重新构建URL
    return `${url.split('?')[0]}?${searchParams.toString()}`;
}


/**
 * 深度克隆
 * @param obj
 * @param cache
 * @returns {*|Date|Map<undefined, *>|Set<*>|RegExp}
 */
function deepClone(obj, cache = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (cache.has(obj)) return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
        clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
        clone = new RegExp(obj);
    } else if (obj instanceof Map) {
        clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
        clone = new Set(Array.from(obj, value => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
        clone = obj.map(value => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        clone = Object.create(Object.getPrototypeOf(obj));
        cache.set(obj, clone);
        for (const [key, value] of Object.entries(obj)) {
            clone[key] = deepClone(value, cache);
        }
    } else {
        clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
}


/**
 * 深度合并
 * @param target
 * @param source
 * @returns {any[]|any|Date|Map<undefined, *>|Set<*>|RegExp}
 */
function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== 'object' || target === null || typeof source !== 'object' || source === null) return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
        if (!source.hasOwnProperty(prop)) continue;
        const sourceValue = source[prop];
        const targetValue = merged[prop];
        if (sourceValue instanceof Date) {
            merged[prop] = new Date(sourceValue);
        } else if (sourceValue instanceof RegExp) {
            merged[prop] = new RegExp(sourceValue);
        } else if (sourceValue instanceof Map) {
            merged[prop] = new Map(sourceValue);
        } else if (sourceValue instanceof Set) {
            merged[prop] = new Set(sourceValue);
        } else if (typeof sourceValue === 'object' && sourceValue !== null) {
            merged[prop] = deepMerge(targetValue, sourceValue);
        } else {
            merged[prop] = sourceValue;
        }
    }
    return merged;
}


/**
 * 解决浏览器事件报错行为
 */
function browserPatch() {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if (typeof capture !== "boolean") {
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    }
}


/**
 * 复制文本
 * @param text
 */
function clipboardCopy(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        let textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        textarea.value = text;
        textarea.select();
        document.execCommand('copy', true);
        // 移除输入框
        document.body.removeChild(textarea);
    }
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
    cutColorTheme,
    deepMergeArrays,
    deepMergeObject,
    encrypt,
    decrypt,
    removeRepeatBias,
    deepFind,
    filterOut,
    removeDuplicates,
    getCrypto,
    md5,
    addParamsToUrl,
    LargeUploadFile,
    deepClone,
    deepMerge,
    automaticUpdate,
    icons,
    browserPatch,
    clipboardCopy
}
