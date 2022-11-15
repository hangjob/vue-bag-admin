import { computed, defineComponent, reactive, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { deepMenu } from '@/packages/layout/common'
import appPinia from '@/packages/pinia/app'

export default defineComponent({
    name: 'bag-menu-slider',
    setup() {
        const appStore = appPinia()
        const router = useRouter()
        const route = useRoute()
        const compData = reactive({
            menus: appStore.menus,
            selectedKeys: [], // 当前选中的菜单项 key 数组
            openKeys: appStore.tabPaths.map((item: any) => item.id), // 展开的数组
            handleClick: (res: any) => {
                const item = res.item['info']
                if (item.httpViewPath) {
                    return window.open(item.httpViewPath)
                }
                if (item.path && item.path != route.path) {
                    router.push(item.path).then()
                }
            },
        })
        watchEffect(() => {
            // @ts-ignore
            compData.selectedKeys = [appStore.currentRouter.id]
        })
        return {
            compData,
        }
    },
    render(ctx: any) {
        const children = deepMenu(ctx.compData.menus)
        return (
            <a-menu v-model:selectedKeys={ctx.compData.selectedKeys}
                    mode="inline"
                    v-model:openKeys={ctx.compData.openKeys}
                    onClick={ctx.compData.handleClick} theme="light"
            >
                {children}
            </a-menu>
        )
    },
})
