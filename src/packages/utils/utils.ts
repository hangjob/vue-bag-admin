import { cloneDeep } from 'lodash'

/**
 * 获取数据在数组对象的链
 * @param list
 * @param path
 */
const getAllParentArr = (list: any, path: any) => {
    for (let i in list) {
        if (list.hasOwnProperty(i)) {
            if (list[i].path === path) {
                //查询到返回该数组对象
                return [list[i]]
            }
            if (list[i].children) {
                let node: any = getAllParentArr(list[i].children, path)
                if (node !== undefined) {
                    //查询到把父节点连起来
                    return node.concat(list[i])
                }
            }
        }
    }
}


const repeat = (str: string, n: number) => {
    let res = ''
    for (let i = 0; i < n; i++) {
        res += str
    }
    return res
}


/**
 * 生成随机id
 */
const randomId = () => {
    let str = ''
    for (let i = 0; i < 4; i++) {
        str += Math.random().toString().replace(/\./, '')
    }
    str = 'uid' + str
    // 取前32位随机字符，不足补0
    return str.length >= 32 ? str.substr(0, 32) : str + repeat('0', 32 - str.length)
}

/**
 * 生成树结构
 * @param data
 * @param idName
 * @param parentIdName
 */
const toTree = (data: any, idName?: string, parentIdName?: string) => {
    if (!data) {
        return []
    }
    data = cloneDeep(data) // 防止对象引用
    const id = idName || 'id'
    const parentId = parentIdName || 'pid'
    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    const map: any = {}
    data.forEach(function(item: any) {
        map[item[id]] = item
    })
    const menu: any = []
    data.forEach(function(item: any) {
        // 在map中找到当前项的父级菜单
        const parent = map[item[parentId]]
        if (parent) {
            // 如果父级菜单存在，则将当前项存入父级的children
            // 如果父级的children不存在，初始化为空数组[]后再存入
            (parent.children || (parent.children = [])).push(item)
        } else {
            // 如果父级菜单不存在，则做为顶级菜单存入
            menu.push(item)
        }
    })
    return menu
}


/**
 * 将中划线转驼峰
 * @param name
 */
const toHump = (name: string) => {
    return name.replace(/(\b[a-z])[-(\w)]/g, function($, $1) {
        return $1.toUpperCase()
    }).replace(/-/g, '')
}


/**
 * 是否是数组
 */
const isArray = (o: any) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}


function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
}


export {
    getAllParentArr,
    randomId,
    toTree,
    toHump,
    isArray,
    getBase64,
}
