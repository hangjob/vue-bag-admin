import {defineComponent, ref} from 'vue'
import {defaultMenu} from '@/packages/admin/config/defaultMenu'
export default defineComponent({
    name: 'yxs-menu-slider',
    setup(){
        const selectedKeys = ref<string[]>(['1']);
        return{
            selectedKeys
        }
    },
    render(ctx: any) {
        return (
            <div class="yxs-menu-slider">
                <a-menu v-model:selectedKeys="ctx.selectedKeys" mode="inline" theme="light">

                </a-menu>
            </div>
        )
    }
})