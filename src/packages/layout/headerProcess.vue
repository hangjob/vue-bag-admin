<template>
    <div :class="['layout-header_scroller',tabStlyeClassName]">
        <div class="tab-action tab-action-left" @click="handleScrollBar(false)">
            <CaretLeftFilled class="icon-svg"/>
        </div>
        <div class="tab-container" ref="tabContainer">
            <div class="app-process_item"
                 v-for="(item,index) in processList"
                 :key="index"
                 :class="{active:item.active}"
                 @click="handleClickCutTap(item)"
                 @contextmenu.stop.prevent="handleContextMenu($event, item)"
            >
                <span class="title">{{ item.name }}</span>
                <CloseOutlined class="icon-svg" v-if="!item.tabFix && processList.length !== 1"
                               @click.stop="handleColseCurrent(item)"/>
            </div>
        </div>
        <div class="tab-action tab-action-right" @click="handleScrollBar(true)">
            <CaretRightFilled class="icon-svg"/>
        </div>
    </div>
</template>
<script lang="ts">
import {computed, defineComponent, inject, onMounted, ref} from 'vue'
import {useStore} from "vuex";
import {CaretLeftFilled, CaretRightFilled, CloseOutlined} from '@ant-design/icons-vue';
import {useRouter} from "vue-router";
import {last} from '@/packages/utils/lodash'
import {themeHook} from '@/packages/hook'

export default defineComponent({
    components: {
        CloseOutlined,
        CaretRightFilled,
        CaretLeftFilled
    },
    setup() {
        const store = useStore()
        const router = useRouter();
        const appContextmenu: any = inject('appContextmenu');
        const processList = computed(() => store.state.app.processList.filter((e: any) => e.tabHidden === false)) // 数据列表 // 使用computed 才触发视图更新
        const tabContainer = ref<HTMLAreaElement | any>(null);
        const {tabStlyeClassName} = themeHook()

        function scrollBar(left: number) {
            tabContainer.value.scrollTo({
                left,
                behavior: "smooth"
            });
        }

        // 左右滚动
        const handleScrollBar = (t: boolean) => {
            // if (t) {
            //     console.log(tabContainer.value.scrollWidth)
            //     console.log(tabContainer.value.lastElementChild)
            //     scrollBar(tabContainer.value.scrollLeft + 100)
            // } else {
            //     scrollBar(tabContainer.value.scrollLeft + 100)
            // }
            scrollBar(tabContainer.value.scrollLeft + (t ? 100 : -100))
        }


        const toPath = (path?: string) => {
            if (path) {
                router.push(path);
                return;
            }
            const active: any = processList.value.find((e: any) => e.active); // 查找是否含有是当前激活的菜单 否则去 跳转最后一个
            if (!active) {
                const next = last(processList.value);
                router.push(next ? next.path : '/');
            }
        }

        const handleColseCurrent = (item: any) => {
            const idx: number = processList.value.findIndex((e: any) => e.id == item.id)
            store.commit('app/delProcessList', idx)
            toPath();
        }


        const handleContextMenu = (e: any, item: any) => {
            e.preventDefault(); // 阻止默认事件
            if (item.tabFix || processList.value.length === 1) {
                return false
            }
            //获取我们自定义的右键菜单
            let contextmenu: any = document.querySelector("#contextmenu");
            //根据事件对象中鼠标点击的位置，进行定位
            contextmenu.style.left = e.clientX + 'px';
            contextmenu.style.top = e.clientY + 'px';
            contextmenu.style.display = "block"
            appContextmenu.value.items = [
                {
                    name: '关闭当前', data: item, callback: (res: any) => {
                        handleColseCurrent(res.data)
                    }
                },
                {
                    name: '关闭其他', data: item, callback: () => {
                        const arr = processList.value.filter((e: any) => {
                            return (e.id == item.id || e.path == "/") || e.tabFix;
                        });
                        store.commit('app/setProcessList', arr);
                        toPath();
                    }
                },
                {
                    name: '关闭所有', data: item, callback: () => {
                        store.commit('app/resetProcessList');
                        toPath(store.getters['app/processList'][0].path);
                    }
                }
            ]
        }

        const handleClickCutTap = (item: any) => {
            router.push(item.path);
        }

        return {
            processList,
            handleContextMenu,
            handleClickCutTap,
            tabContainer,
            handleScrollBar,
            handleColseCurrent,
            tabStlyeClassName
        }
    }
})
</script>
<!--suppress LessResolvedByNameOnly -->
<style lang="less" scoped src="./index.less"></style>
