import {computed, defineComponent, h, ref, resolveComponent, watchEffect} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from "vue-router";
import {toTree} from '@/packages/utils/utils'

export default defineComponent({
    name: 'yxs-menu-slider',
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const browser = computed(() => store.getters['app/getBrowser']);
        const collapsed = computed(() => store.state.app.collapsed)

        const selectedKeys = ref<string[]>([])
        const openKeys = ref<string[]>([])
        const menuList = computed(() => toTree(store.getters['app/menuList']));

        // 是否可见
        const visible = ref<boolean>(true);
        const goView = (item: any) => {
            if (item.path && item.path != route.path) {
                router.push(item.path).then()
            }
            if (item.httpViewPath) {
                window.open(item.httpViewPath)
            }
        }

        const handleClick = (res: any) => {
            goView(res.item['menu-info']);
        }

        // 监听菜单变化 - 两种方式
        // 一
        // watch(() => store.getters['app/tabViewsPath'], (val, old) => {
        //     const tabPaths = JSON.parse(JSON.stringify(val));
        //     openKeys.value = tabPaths.map((item: any) => item.id) //
        //     selectedKeys.value = [tabPaths.pop().id];
        // }, {deep: false, immediate: true})
        // 二
        watchEffect(() => {
            const tabPaths = JSON.parse(JSON.stringify(store.getters['app/tabViewsPath']));
            openKeys.value = tabPaths.map((item: any) => item.id);
            if (tabPaths.length) {
                selectedKeys.value = [tabPaths.pop().id];
            }
        })


        return {
            selectedKeys,
            menuList,
            handleClick,
            openKeys,
            visible,
            collapsed,
            browser
        }
    },
    render(ctx: any) {

        const deepMenu = function (list: Array<any>) {
            let html = null;
            return list.filter((item: any) => item.shows).map((item: any) => {
                if (item.children && item.children.length) {
                    html = h(
                        <a-sub-menu key={item.id}></a-sub-menu>,
                        {},
                        {
                            title: () => {
                                return item.icon ? [h(resolveComponent(item.icon)), h('span', item.name)] : h('span', item.name)
                            },
                            default: () => {
                                let children = item.children.map((todo: any) => {
                                    return <a-menu-item menu-info={item} key={todo.id}>{todo.name}</a-menu-item>
                                })
                                return children && deepMenu(item.children)
                            }
                        }
                    )
                } else {
                    html = h(
                        <a-menu-item menu-info={item} key={item.id}></a-menu-item>,
                        {},
                        {
                            default: () => {
                                // 主体渲染方式请看官方文档 https://v3.vuejs.org/guide/render-function.html#return-values-for-render-functions
                                return item.icon ? [h(resolveComponent(item.icon)), h('span', item.name)] : h('span', item.name)
                            }
                        }
                    )
                }
                return html;
            })
        }
        const children = deepMenu(ctx.menuList);
        return (
            ctx.visible && (
                <div class="yxs-menu-slider">
                    <a-menu
                        v-model:selectedKeys={ctx.selectedKeys}
                        v-model:openKeys={ctx.openKeys}
                        inline-collapsed={ctx.collapsed}
                        mode="inline"
                        onClick={ctx.handleClick}
                        theme="light">
                        {children}
                    </a-menu>
                </div>
            )
        )
    }
})
