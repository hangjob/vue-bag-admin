import {computed, defineComponent, h, ref} from 'vue'
import {useStore} from 'vuex'
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
    name: 'yxs-menu-slider',
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const selectedKeys = ref<string[]>(['1']);
        const menuList = computed(() => store.getters.menuList);

        const goView = (url:string)=>{
            if(url != route.path){
                router.push(url)
            }
        }

        const handleClick = (res:any) => {
            goView(res.item['menu-info'].router);
        }

        return {
            selectedKeys,
            menuList,
            handleClick
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
                    onClick={ctx.handleClick}
                    theme="light">
                {children}
            </a-menu>
    </div>
    )
    }
})