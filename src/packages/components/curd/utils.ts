import XLSX from 'xlsx';

/**
 * 处理
 * @param tableCurd
 */
const columnsCheckbox = ({tableCurd}) => {
    return tableCurd.sourceData.columns.map((item) => {
        return {
            ...item,
            visible: !('visible' in item),
        }
    })
}


/**
 * 查找离目标值最近的元素
 * @param arr
 * @param target
 */
const findNearestTarget = (arr, target) => {
    let mid
    let l = 0
    let r = arr.length - 1
    // 保证指针最终停留在相邻的两个数,所以这里是判断是否大于1
    while (r - l > 1) {
        mid = Math.ceil((l + r) / 2)
        // 如果目标数比中间小，所以范围在左边
        if (target < arr[mid]) {
            r = mid
        } else {
            l = mid
        }
    }
    // 最后比较这两个数字的绝对差大小即可。
    return Math.abs(target - arr[l]) <= Math.abs(target - arr[r]) ? arr[l] : arr[r]
}


const exportTableData = ({tableCurd, columns}: { tableCurd: any, columns: any }) => {
    const tableHead = columns.map((item) => item.title)
    const tableHeadKey = columns.map((item) => item.key)
    const tableBody = tableCurd.tableData.map((item) => {
        const data: any = [];
        for (let i = 0; i < tableHeadKey.length; i++) {
            data.push(item[tableHeadKey[i]])
        }
        return data;
    })
    const ws = XLSX.utils.aoa_to_sheet([tableHead, ...tableBody]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table.xlsx');
}

export {
    columnsCheckbox,
    findNearestTarget,
    exportTableData
}
