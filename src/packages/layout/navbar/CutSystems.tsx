import {defineComponent, ref, computed} from 'vue'
import {deepMenu} from '@/packages/layout/common'
import classes from '@/packages/layout/style/CutSystems.module.less'
import {useRouter} from 'vue-router'
import appPinia from '@/packages/pinia/app'

export default defineComponent({
    name: 'CutSystems',
    setup() {
        const appStore = appPinia()
        const router = useRouter()
        const prjMenu = appStore.prjMenu
        const current = ref(null)
        const mode = ref('horizontal')
        /**
         * 这里放置实际的业务，更新左侧的菜单
         * @param res
         */
        const handleSelect = (res: any) => {
            let data = res.item['menu-info']
            appStore.menus = data.menus
            router.push(data.menus[0].path)
        }
        const classNames = computed(() => {
            // @ts-ignore
            const foldPrjMenu = appStore.configApp.themeConfig.foldPrjMenu
            if (foldPrjMenu) {
                return classes['cut-systems'] + ' ' + classes['cut-systems-min']
            } else {
                return classes['cut-systems']
            }
        })
        return {
            prjMenu,
            current,
            handleSelect,
            classNames,
            mode,
        }
    },
    render(ctx: any) {
        const children = deepMenu(ctx.prjMenu)
        return (
            <div class={ctx.classNames}>
                <a-menu
                    v-model:selectedKeys={ctx.current}
                    v-model:mode={ctx.mode}
                    onSelect={ctx.handleSelect}
                >
                    {children}
                </a-menu>
            </div>
        )
    },
})
