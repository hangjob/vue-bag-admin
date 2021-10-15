import {createStore} from 'vuex'
import {defaultMenu} from "@/packages/admin/config/defaultMenu";

const store = createStore({
    strict: true,
    state: {
        userinfo: {name: 1},
        menuList: defaultMenu
    },
    // 定义getters 好处可以过滤数据
    getters: {
        menuList: (state) => {
            return state.menuList;
        }
    }
})

export default store;