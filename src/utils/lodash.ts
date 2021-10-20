import * as _ from "lodash";

/**
 * 查找
 * @param item 包含key value
 * @param arr 数组
 */
const find = (item: any, arr: Array<any>) => {
    return _.find(arr, {[item.key]: item.value})
}

const remove = (tag: any, arr: Array<any>) => {
    return _.remove(arr, function (item) {
        return item.fullPath === tag.fullPath;
    })
}

// 获取最后一个元素
const last = (arr: Array<any>) => {
    return _.last(arr);
}

export {
    find,
    remove,
    last
}