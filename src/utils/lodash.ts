import * as _ from "lodash";

// 查找
const find = (item: any, arr: Array<any>) => {
    return _.find(arr, {[item.key]: item.value})
}

const remove = (tag: any, arr: Array<any>) => {
    return _.remove(arr, function (item) {
        return item.fullPath === tag.fullPath;
    })
}

export {
    find,
    remove
}