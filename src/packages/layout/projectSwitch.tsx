import {defineComponent, ref, computed, getCurrentInstance} from 'vue'
import {useStore} from 'vuex'
import {deepMenu} from "@/packages/layout/common";
import classes from './style/projectSwitch.module.less'

export default defineComponent({
    name: 'ProjectSwitch',
    setup() {
        const {ctx: _this}: any = getCurrentInstance() // 使用this
        const store = useStore();
        const prjMenu = computed(() => store.getters['app/getProjectMenu']);
        const current = ref(null);
        const mode = ref('horizontal')
        /**
         * 这里放置实际的业务，更新左侧的菜单
         * @param res
         */
        const handleSelect = (res: any) => {
            let data = res.item['menu-info'];
            store.commit('app/updateMenuList', data.menus);
        }
        const clssNames = computed(() => {
            const foldPrjMenu = store.getters['app/getThemeConfig'].foldPrjMenu
            if (foldPrjMenu) {
                return classes['project-switch'] + ' ' + classes['project-switch-min'];
            } else {
                return classes['project-switch']
            }
        })
        return {
            prjMenu,
            current,
            handleSelect,
            clssNames,
            mode
        }
    },
    render(ctx: any) {
        const children = deepMenu(ctx.prjMenu);
        return (
            <div class={ctx.clssNames}>
                <a-menu
                    v-model:selectedKeys={ctx.current}
                    v-model:mode={ctx.mode}
                    onSelect={ctx.handleSelect}
                >
                    {children}
                </a-menu>
            </div>
        )
    }
})
