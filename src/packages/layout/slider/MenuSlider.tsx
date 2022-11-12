import { computed, defineComponent, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { deepMenu } from '@/packages/layout/common'
import appPinia from '@/packages/pinia/app'

export default defineComponent({
    name: 'bag-menu-slider',
    setup() {
        const appStore = appPinia()
        const collapsed = false
        const selectedKeys = ref<string[]>([])
        const menus = appStore.menus
        const handleClick = () => {
        }

        return {
            selectedKeys,
            menus,
            handleClick,
            collapsed,
        }
    },
    render(ctx: any) {
        const children = deepMenu(ctx.menus)
        return (
            <a-menu
                v-model:selectedKeys={ctx.selectedKeys}
                inline-collapsed={ctx.collapsed}
                mode="inline"
                onClick={ctx.handleClick}
                theme="light"
            >
                {children}
            </a-menu>
        )
    },
})
