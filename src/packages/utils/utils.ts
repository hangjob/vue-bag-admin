import {cloneDeep} from "lodash"

/**
 * 生成树节点
 * @param arr
 * @param keyField
 * @param childField
 */
const toTree = ({arr = [], keyField = "id", children = "children", pid = "pid"}) => {
    const data = cloneDeep(arr)
    const map: any = {}
    data.forEach(function (item: any) {
        map[item[keyField]] = item
    })
    const new_data: any = []
    data.forEach(function (item: any) {
        const parent = map[item[pid]]
        if (parent) {
            (parent[children] || (parent[children] = [])).push(item)
        } else {
            new_data.push(item)
        }
    })
    return new_data
}

/**
 * 生产链路
 * @param arr
 * @param id
 */
const getObjectPath = ({arr = <any>[], id = ""}) => {
    const data = cloneDeep(arr)
    for (const i in arr) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(i)) {
            if (arr[i].id === id) {
                return [data[i]]
            }
            if (data[i].children) {
                const node: any = getObjectPath({arr: data[i].children, id})
                if (node !== undefined) {
                    return node.concat(data[i])
                }
            }
        }
    }
}

function htmlElementClass(state: boolean, clsName: string, target?: HTMLElement) {
    const targetEl = target || document.body
    if (state) {
        targetEl.classList.add(clsName)
    } else {
        targetEl.classList.remove(clsName)
    }
}


export {
    toTree,
    getObjectPath,
    htmlElementClass
}
