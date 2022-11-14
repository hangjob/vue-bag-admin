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
        const tabPaths = JSON.parse(JSON.stringify(appStore.tabPaths))
        const pop: any = tabPaths.pop()
        const compData = reactive({
            menus: appStore.menus,
            selectedKeys: [pop.id], // 当前选中的菜单项 key 数组
            openKeys: tabPaths.map((item: any) => item.id), // 展开的数组
            collapsed: false,
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
        console.log(tabPaths, compData)
        return {
            compData,
        }
    },
    render(ctx: any) {
        const children = deepMenu(ctx.compData.menus)
        return (
            <a-menu v-model:selectedKeys={ctx.compData.selectedKeys} inlineCollapsed={ctx.compData.collapsed}
                    mode="inline"
                    v-model:openKeys={ctx.compData.openKeys}
                    onClick={ctx.compData.handleClick} theme="light"
            >
                {children}
            </a-menu>
        )
    },
})
