import * as _ from "lodash";
import {uniqueId} from "lodash";
import {isArray} from "@/packages/utils/utils";

/**
 * 查找
 * @param tag 包含key value
 * @param arr 数组
 */
const find = (tag: any, arr: Array<any>) => {
    return _.find(arr, {[tag.key]: tag.value})
}

const remove = (tag: any, arr: Array<any>) => {
    return _.remove(arr, function (item) {
        return item.path === tag.path;
    })
}

// 获取最后一个元素
const last = (arr: Array<any>) => {
    return _.last(arr);
}


/**
 * 深度查找 可以查找任意的数据格式
 * [《Lodash》深度遍历查找链式调用](https://www.vipbic.com/thread.html?id=684)
 * @param tag
 * @param data
 */
const findUnsetDepth = (tag: any, data: any) => {
    return _.chain(data)
        .map('children')
        .flatten()
        .filter(tag)
        .sumBy()
        .value();
};


/**
 * 固定查找
 * @param tag key(属性key) value(值) node(节点)
 * @param arr
 * 列子[{name:'a'},{name:'b'},{name:'c',children:[{name:'d'}]}]
 */
interface tagType {
    key: string,
    value: string | number,
    node: string
}

const findChildrenDepth = (tag: tagType, arr: Array<any>) => {
    let result;
    arr.some((o: any) => o[tag.key] === tag.value && (result = o) || (result = findChildrenDepth(tag, o[tag.node] || [])));
    return result;
}

// 递归查询
// for (const item of arr) {
//     if (item[tag.key] === tag.value) return item
//     if (item.children && item.children.length) {
//         const _item: any = findChildrenDepth(tag, item.children)
//         if (_item) return _item
//     }
// }


/**
 * 添加唯一值ID
 * @param arr
 * @param prefix
 */
const addUniqueId = (arr: Array<any>, prefix?: string) => {
    arr.forEach((item: any) => {
        if (isArray(item)) {
            addUniqueId(item, prefix)
        } else {
            item.id = uniqueId(prefix);
            if (item.children) {
                addUniqueId(item.children, prefix)
            }
        }
    })
    return arr
}


const findContainingObject = (tag: any, arr: Array<any>) => {
    let result: any = [];
    const deep = (tag: any, arr: Array<any>) => {
        arr.filter(item => {
            if (item[tag.key] === tag.value) {
                result.push(item)
            }
            item[tag.node] && deep(tag, item[tag.node])
        })
    }
    deep(tag, arr)
    return result;
}


/**
 * 子级id查找父级元素
 * @param tag
 * @param arr
 */
const findParent = (tag: tagType, arr: Array<any>) => {
    return _.filter(_.flatMap(arr, tag.node), (t: any) => t && t[tag.key] === tag.value)
}


/**
 * 查找父级数据-拼接起来
 * @param tag
 * @param arr
 */
const getParentId = (tag: tagType, arr: Array<any>) => {
    for (let i in arr) {
        if (arr[i][tag.key] === tag.value) {
            return [arr[i]]
        }
        if (arr[i][tag.node]) {
            let node: any = getParentId(tag, arr[i][tag.node]);
            if (node !== undefined) {
                return node.concat(arr[i])
            }
        }
    }
}


const filterData = (tag: tagType, arr: Array<any>) => {
    return arr.filter(item => {
        return item[tag.key] !== tag.value;
    }).map(item => {
        item = Object.assign({}, item)
        if (item.children) {
            item.children = filterData(tag, item.children)
        }
        return item
    })
}


export {
    find,
    remove,
    last,
    findUnsetDepth,
    findChildrenDepth,
    addUniqueId,
    findContainingObject,
    findParent,
    getParentId,
    filterData
}
