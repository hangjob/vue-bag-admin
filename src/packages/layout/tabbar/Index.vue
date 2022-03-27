<template>
    <div :class="['layout-header_scroller',tabStyleClassName]">
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
                               @click.stop="handleCloseCurrent(item)"
                />
            </div>
        </div>
        <div class="tab-action tab-action-right" @click="handleScrollBar(true)">
            <CaretRightFilled class="icon-svg"/>
        </div>
    </div>
    <Contextmenu ref="contextmenu"/>
</template>
<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {last} from '@/packages/utils/lodash'
import {themeHook} from '@/packages/hook'
import Contextmenu from './Contextmenu.vue'

export default defineComponent({
    components: {
        Contextmenu,
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        const contextmenu: any = ref(null)
        const processList = computed(() => store.state.app.processList.filter((e: any) => e.tabHidden === false)) // 数据列表 // 使用computed 才触发视图更新
        const tabContainer = ref<HTMLAreaElement | any>(null)
        const {tabStyleClassName} = themeHook()

        function scrollBar(left: number) {
            tabContainer.value.scrollTo({
                left,
                behavior: 'smooth',
            })
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
                router.push(path)
                return
            }
            const active: any = processList.value.find((e: any) => e.active) // 查找是否含有是当前激活的菜单 否则去 跳转最后一个
            if (!active) {
                const next = last(processList.value)
                router.push(next ? next.path : '/')
            }
        }

        const handleCloseCurrent = (item: any) => {
            const idx: number = processList.value.findIndex((e: any) => e.id == item.id)
            store.commit('app/delProcessList', idx)
            toPath()
        }


        const handleContextMenu = (e: any, item: any) => {
            e.preventDefault() // 阻止默认事件
            if (item.tabFix || processList.value.length === 1) {
                return false
            }
            //获取我们自定义的右键菜单
            let conDom: any = document.querySelector('#contextmenu')
            //根据事件对象中鼠标点击的位置，进行定位
            conDom.style.left = e.clientX + 'px'
            conDom.style.top = e.clientY + 'px'
            conDom.style.display = 'block'

            contextmenu.value.items = [
                {
                    name: '关闭当前', data: item, callback: (res: any) => {
                        handleCloseCurrent(res.data)
                    },
                },
                {
                    name: '关闭其他', data: item, callback: () => {
                        const arr = processList.value.filter((e: any) => {
                            return (e.id == item.id || e.path == '/') || e.tabFix
                        })
                        store.commit('app/setProcessList', arr)
                        toPath()
                    },
                },
                {
                    name: '关闭所有', data: item, callback: () => {
                        store.commit('app/resetProcessList')
                        toPath(store.getters['app/processList'][0].path)
                    },
                },
            ]

            document.addEventListener('click', removeClickFun)

            // 隐藏掉右键菜单
            function removeClickFun() {
                conDom.style.display = 'none'
                document.removeEventListener('click', removeClickFun)
            }
        }

        const handleClickCutTap = (item: any) => {
            router.push(item.path)
        }

        return {
            processList,
            handleContextMenu,
            handleClickCutTap,
            tabContainer,
            handleScrollBar,
            handleCloseCurrent,
            tabStyleClassName,
            contextmenu,
        }
    },
})
</script>
<!--suppress LessResolvedByNameOnly -->
<style lang="less">
.layout-header_scroller {
    background-color: transparent;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0 1px 3px rgba(184, 184, 184, 0.5);
    z-index: 1;
    padding: 0 10px;

    .tab-action {
        cursor: pointer;
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;

        &:hover {
            background-color: #ffffff;

            .icon-svg {
                color: @primary-color;
            }
        }

        &.tab-action-left {
            margin-right: 5px;
        }

        &.tab-action-right {
            margin-left: 5px;
        }
    }

    .tab-container {
        width: 100%;
        flex: 1;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        scroll-behavior: smooth;
        height: 42px;
        padding: 8px 0;

        &::-webkit-scrollbar {
            display: none;
        }

        .app-process_item {
            display: inline-flex;
            align-items: center;
            border-radius: 3px;
            height: 100%;
            padding: 0 8px;
            background-color: #fff;
            font-size: 12px;
            margin-right: 10px;
            color: #909399;
            cursor: pointer;
            min-width: 60px;
            justify-content: center;
            position: relative;

            &:last-of-type {
                margin-right: 0;
            }

            &.active {
                color: @primary-color;
            }

            .icon-svg {
                font-size: 0;
                transition: all 0.3s;
            }

            &:hover {
                color: @primary-color;

                .icon-svg {
                    font-size: inherit;
                    margin-left: 5px;
                }
            }
        }
    }
}

// 卡片样式
.tab-style-card {
    background-color: #ffffff;

    .tab-container {
        padding: 0;

        .app-process_item {
            margin-right: 0;
            border-radius: 0;

            &.active {
                background-color: #f0f7ff;
            }
        }
    }
}

// 圆点样式
.tab-style-round {
    background-color: #ffffff;

    .tab-container {
        padding: 0;

        .app-process_item {
            margin-right: 0;
            border-radius: 0;
            border-right: 1px solid #f0f0f0;
            padding-left: 10px;

            .title {
                padding-left: 5px;
            }

            &.active {
                background-color: #f0f7ff;
            }

            &.active:before {
                background-color: @primary-color;
            }

            &:first-of-type {
                border-left: 1px solid #f0f0f0;
            }

            &:before {
                width: 8px;
                height: 8px;
                transition: background .3s;
                border-radius: 50%;
                display: block;
                border: none;
                background-color: #909399;
                content: '';
            }
        }
    }
}

</style>
