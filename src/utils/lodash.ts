import * as _ from "lodash";

// 查找
const find = (tag: any, arr: Array<any>) => {
    return _.find(arr, {fullPath: tag.fullPath})
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