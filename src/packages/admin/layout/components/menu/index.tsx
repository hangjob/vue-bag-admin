import {computed, defineComponent, h, ref} from 'vue'
import {useStore} from 'vuex'


export default defineComponent({
    name: 'yxs-menu-slider',
    setup() {
        const store = useStore();

        const selectedKeys = ref<string[]>(['1']);
        const menuList = computed(() => store.getters.menuList);
        return {
            selectedKeys,
            menuList
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
                                return <span>{item.name}</span>
                            },
                            default: () => {
                                let children = item.children.map((todo: any) => {
                                    return <a-menu-item key={todo.id}>{todo.name}</a-menu-item>
                                })
                                return children
                            }
                        }
                    )
                } else {
                    html = h(
                        <a-menu-item key={item.id}></a-menu-item>,
                        {},
                        {
                            default: () => {
                                return <span>{item.name}</span>
                            }
                        }
                    )
                }
                return html;
            })
        }
        const children = deepMenu(ctx.menuList);
        return (
            <div class="yxs-menu-slider">
                <a-menu
                    v-model:selectedKeys={ctx.selectedKeys}
                    mode="inline"
                    theme="light">
                    {children}
                </a-menu>
            </div>
        )
    }
})