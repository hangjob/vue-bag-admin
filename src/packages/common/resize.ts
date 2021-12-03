import store from "@/packages/store";
import {throttle} from 'lodash'

function resize() {
    store.commit("app/updateBrowser");
    if (store.state.app.browser.isMobile) {
        store.commit('app/updateThemeConfig', {key: 'foldPrjMenu', value: true}) // 更新项目菜单折叠
    }
}

window.onload = function () {
    window.addEventListener("resize", throttle(resize, 1000));
    resize();
};
