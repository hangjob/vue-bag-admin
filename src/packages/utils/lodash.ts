import * as _ from "lodash";
import {uniqueId} from "lodash";

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
 */
const findChildrenDepth = (tag: any, arr: Array<any>) => {
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
        item.id = uniqueId(prefix);
        if (item.children) {
            addUniqueId(item.children, prefix)
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
            item.children && deep(tag, item.children)
        })
    }
    deep(tag, arr)
    return result;
}

export {
    find,
    remove,
    last,
    findUnsetDepth,
    findChildrenDepth,
    addUniqueId,
    findContainingObject
}