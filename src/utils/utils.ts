// 获取子节点，父级节点 链
const getAllParentArr = (list: any, path: any) => {
    for (let i in list) {
        if (list.hasOwnProperty(i)) {
            if (list[i].path === path) {
                //查询到返回该数组对象
                return [list[i]];
            }
            if (list[i].children) {
                let node: any = getAllParentArr(list[i].children, path);
                if (node !== undefined) {
                    //查询到把父节点连起来
                    return node.concat(list[i]);
                }
            }
        }
    }
}


export {
    getAllParentArr
}