import cloneDeep from "lodash/cloneDeep.js"

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


const clipboardCopy = (text: string) => {
    if (navigator.clipboard) { // 如果浏览器兼容该 API
        return navigator.clipboard.writeText(text).catch(function (err) {
            throw (err !== undefined ? err : new DOMException("The request is not allowed", "NotAllowedError"))
        })
    }

    // 或者使用 document.execCommand()

    // 把需要复制的文本放入 <span>
    const span = document.createElement("span")
    span.textContent = text

    // 保留文本样式
    span.style.whiteSpace = "pre"

    // 把 <span> 放进页面
    document.body.appendChild(span)

    // 创建选择区域
    const selection: any = window.getSelection()
    const range = window.document.createRange()
    selection.removeAllRanges()
    range.selectNode(span)
    selection.addRange(range)

    // 复制文本到剪切板
    let success = false
    try {
        success = window.document.execCommand("copy")
    } catch (err) {
        console.log(err)
    }

    // 清除战场
    selection.removeAllRanges()
    window.document.body.removeChild(span)

    return success
        ? Promise.resolve()
        : Promise.reject(new DOMException("The request is not allowed", "NotAllowedError"))
}


export {
    toTree,
    getObjectPath,
    htmlElementClass,
    clipboardCopy
}
