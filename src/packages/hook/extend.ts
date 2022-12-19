import userPinia from '@/packages/pinia/user'
import appPinia from '@/packages/pinia/app'
import { utils } from 'pm-utils'

/**
 * 处理btn权限的按钮
 * @param curdTable
 */
const extendBtns = ({ curdTable }) => {
    const userStore = userPinia()
    const appStore = appPinia()
    const { btns } = userStore.userInfo.rolesDetail || {}
    const { id } = appStore.currentRouter
    if (utils.dataType(btns) === 'array') {
        curdTable.btns = curdTable.btns.reduce((preItem, item, idx) => {
            const btnsInfo = btns.find((todo) => String(todo.mid) === String(id))
            if (btnsInfo && utils.dataType(btnsInfo.btn) === 'array') {
                const btnInfo = btnsInfo.btn.find((todo) => todo.tag === item.tag)
                if (item.role) {
                    if (btnInfo) {
                        preItem.push(Object.assign(item, btnInfo))
                    }
                } else {
                    preItem.push(item)
                }
            } else {
                preItem.push(item)
            }
            return preItem
        }, [])
    }
}

export {
    extendBtns,
}
