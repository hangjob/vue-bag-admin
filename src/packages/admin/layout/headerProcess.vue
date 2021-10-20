<template>
    <div class="layout-header_scroller">
        <div class="app-process_item"
             v-for="(item,index) in processList"
             :key="index"
             :class="{active : item.fullPath === active}"
             @click="handleClickCutTap(item)"
             @contextmenu.stop.prevent="handleContextMenu($event, item)"
        >
            <span class="title">{{ item.title }}</span>
            <CloseOutlined/>
        </div>
    </div>
</template>
<script lang="ts">
import {computed, defineComponent, inject} from 'vue'
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
        const appContextmenu: any = inject('appContextmenu');
        const active = computed(() => store.getters.currentRouter.fullPath) // 使用computed 才触发视图更新

        const processList = computed(() => store.getters.processList)
        const handleContextMenu = (e: any, item: any) => {
            e.preventDefault(); // 阻止默认事件
            //获取我们自定义的右键菜单
            let contextmenu: any = document.querySelector("#contextmenu");
            //根据事件对象中鼠标点击的位置，进行定位
            contextmenu.style.left = e.clientX + 'px';
            contextmenu.style.top = e.clientY + 'px';
            contextmenu.style.display = "block"
            appContextmenu.value.items = [{name: '关闭当前'}, {name: '关闭其他'}, {name: '关闭所有'}]
        }

        const handleClickCutTap = (item: any) => {
            router.push(item.fullPath);
        }

        return {
            processList,
            handleContextMenu,
            active,
            handleClickCutTap
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

        &.active {
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