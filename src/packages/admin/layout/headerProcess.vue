<template>
    <div class="layout-header_scroller">
        <div class="app-process_item"
             v-for="(item,index) in processList"
             :key="index"
             :class="{active : item.fullPath === active}"
             @click="hanleClickCutTap(item)"
             @contextmenu.stop.prevent="hanleContextMenu($event, item)"
        >
            <span class="title">{{item.title}}</span>
            <CloseOutlined/>
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent, computed} from 'vue'
    import {useStore} from "vuex";
    import {CloseOutlined} from '@ant-design/icons-vue';
    import {useRoute, useRouter} from "vue-router";

    export default defineComponent({
        components: {
            CloseOutlined
        },
        setup() {
            const store = useStore()
            const route = useRoute();
            const router = useRouter();

            const active = computed(()=>store.getters.currentRouter.fullPath) // 使用computed 才触发视图更新

            const processList = computed(() => store.getters.processList)
            const hanleContextMenu = (e: any, item: any) => {
                e.preventDefault(); // 阻止默认事件
                //获取我们自定义的右键菜单
                let contextmenu: any = document.querySelector("#contextmenu");
                //根据事件对象中鼠标点击的位置，进行定位
                contextmenu.style.left = e.clientX + 'px';
                contextmenu.style.top = e.clientY + 'px';
                contextmenu.style.display = "block"
            }
            
            const hanleClickCutTap = (item:any)=>{
                router.push(item.fullPath);
            }
            
            return {
                processList,
                hanleContextMenu,
                active,
                hanleClickCutTap
            }
        }
    })
</script>
<style lang="less" scoped>
    .layout-header_scroller {
        background-color: transparent;
        padding: 10px;

        .app-process_item {
            display: inline-flex;
            align-items: center;
            border-radius: 3px;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            background-color: #fff;
            font-size: 12px;
            margin-right: 10px;
            color: #909399;
            cursor: pointer;
            min-width: 60px;
            justify-content: center;

            &.active{
                color: #1890ff;
            }
            .title {
                padding-right: 5px;
            }

            &:hover {
                color: #1890ff;
            }
        }
    }
</style>