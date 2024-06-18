import {h} from "vue";
import {NIcon} from "naive-ui";
import lscache from "lscache"

function renderIcon(icon, props) {
    return () => h(NIcon, props, {default: () => h(icon)})
}

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



export {
    renderIcon,
    depthForEach,
    findParents,
    lscache,
}
