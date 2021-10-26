import {computed, defineComponent, h, ref, resolveComponent, watchEffect} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
    name: 'yxs-menu-slider',
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const collapsed = computed(() => store.state.app.collapsed)

        const selectedKeys = ref<string[]>([])
        const openKeys = ref<string[]>([])
        const menuList = computed(() => store.getters['app/menuList']);
        // 是否可见
        const visible = ref<boolean>(true);
        console.log('menuList', menuList)
        const goView = (url: string) => {
            if (url != route.path) {
                router.push(url)
            }
        }

        const handleClick = (res: any) => {
            goView(res.item['menu-info'].path);
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
            selectedKeys.value = [tabPaths.pop().id];
        })
        return {
            selectedKeys,
            menuList,
            handleClick,
            openKeys,
            visible,
            collapsed
        }
    },
    render(ctx: any) {

        const deepMenu = function (list: Array<any>) {
            let html = null;
            return list.filter((item: any) => item.isShow).map((item: any) => {
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