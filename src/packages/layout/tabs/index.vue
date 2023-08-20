<template>
    <n-el tag="div" class="scrollbar">
        <div @click="handleArrowScroll('prev')" class="arrow arrow-prev">
            <n-icon size="18" color="var(--primary-color)">
                <ChevronBackOutline/>
            </n-icon>
        </div>
        <div class="tabs" ref="tabsRefs">
            <template v-if="app.tabs.length">
                <n-el @click="compData.handleActionRouter(item)" v-for="(item,idx) in app.tabs" :key="idx" tag="div"
                      :class="['tabs-item',item.meta.id === app.currentRouter.meta.id ? 'active' : null]">
                    <component class="icon" v-if="item.meta.icon" :is="item.meta.icon"></component>
                    <span>{{ item.meta.title }}</span>
                    <n-icon class="icon-close" @click.stop="compData.handleColseRouter(item)"
                            v-if="compData.isClose(item)">
                        <CloseOutline/>
                    </n-icon>
                </n-el>
            </template>
        </div>
        <div @click="handleArrowScroll('next')" class="arrow arrow-next">
            <n-icon size="18" color="var(--primary-color)">
                <ChevronForwardOutline/>
            </n-icon>
        </div>
        <div class="arrow arrow-more">
            <n-dropdown
                :options="compData.tabsMore"
                placement="bottom-start"
                trigger="click"
                @select="compData.handleMoreSelect"
            >
                <n-icon size="18">
                    <SmileOutlined/>
                </n-icon>
            </n-dropdown>
        </div>
    </n-el>
</template>
<script lang="ts">
import {defineComponent, reactive, inject, ref} from "vue"
import {ChevronBackOutline, ChevronForwardOutline, CloseOutline} from "@vicons/ionicons5"
import {SmileOutlined} from "@vicons/antd"
import appStore from "@/packages/pinia/app.ts"
import {tabsMore} from "@/packages/config/map.ts"
import {useRouter} from "vue-router"

export default defineComponent({
    components: {
        ChevronBackOutline,
        ChevronForwardOutline,
        CloseOutline,
        SmileOutlined
    },
    setup() {
        const app = appStore()
        const tabsRefs = ref<HTMLElement | null>(null)
        const router = useRouter()
        const $mitt: any = inject("$mitt")
        let step = 0
        // 左右滚动
        const handleArrowScroll = (direction = "prev") => {
            const scrollWidth = tabsRefs.value.scrollWidth
            const clientWidth = tabsRefs.value.clientWidth
            const beScrollWidth = scrollWidth - clientWidth // 能滚动的宽度
            direction === "next" ? step += 300 : step -= 300
            if (step >= beScrollWidth) {
                step = beScrollWidth
            }
            if (direction === "prev" && step <= 0) {
                step = 0
            }
            tabsRefs.value.scrollTo({left: step, behavior: "smooth"})
        }
        tabsMore.forEach((item) => {
            if (item.key === "1") {
                item.props = {
                    onClick: () => {
                        $mitt.emit("onReload")
                    }
                }
            }
            if (item.key === "2") {
                item.props = {
                    onClick: () => {
                        compData.handleColseRouter(app.currentRouter)
                    }
                }
            }
            if (item.key === "3") {
                item.props = {
                    onClick: () => {
                        compData.handleColseRouter(app.currentRouter, "l")
                    }
                }
            }
            if (item.key === "4") {
                item.props = {
                    onClick: () => {
                        compData.handleColseRouter(app.currentRouter, "r")
                    }
                }
            }
            if (item.key === "5") {
                item.props = {
                    onClick: () => {
                        compData.handleColseRouter(app.currentRouter, "c")
                    }
                }
            }
        })
        const compData = reactive({
            tabsMore,
            isClose() {
                return app.tabs.length > 1
            },
            handleActionRouter(item) {
                router.push(item.meta.path)
            },
            handleColseRouter(item, zt) {
                const idx = app.tabs.findIndex((k) => k.meta.id === item.meta.id)
                let current = null
                if (zt === "l") {
                    app.tabs.splice(0, idx)
                } else if (zt === "r") {
                    app.tabs.splice(idx + 1, app.tabs.length)
                } else if (zt === "c") {
                    app.tabs.splice(0, idx)
                    app.tabs.splice(1, app.tabs.length)
                } else {
                    app.tabs.splice(idx, 1)
                    current = app.tabs[idx - 1]
                    if (current) {
                        router.push(current.meta.path)
                    }
                }
            },
            handleMoreSelect() {

            }
        })
        return {
            compData,
            app,
            tabsRefs,
            handleArrowScroll
        }
    }
})
</script>
<style lang="less" scoped>
.scrollbar {
    height: 40px;
    position: relative;
    white-space: nowrap;
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    overflow: hidden;
    box-sizing: border-box;

    .arrow {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        flex-shrink: 0;
        z-index: 999;
        box-sizing: border-box;
        background-color: var(--n-color);

        &.arrow-next {
            border-left: 1px solid var(--divider-color);
        }

        &.arrow-prev {
            border-right: 1px solid var(--divider-color);
        }

        &.arrow-more {
            border-left: 1px solid var(--divider-color);
        }
    }

    .tabs {
        overflow: visible;
        position: relative;
        transition: transform .5s ease-in-out;
        white-space: nowrap;
        display: flex;
        height: 40px;
        flex: 1;
        padding: 5px;
        float: left;
        box-sizing: border-box;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &-item {
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5px;
            padding: 0 8px;
            border-radius: 3px;
            box-sizing: border-box;
            border: 1px solid var(--border-color);
            transition: all .3s;

            .icon {
                padding-right: 3px;
            }

            .icon-close {
                font-size: 0;
                transition: all .3s;
            }

            &:hover {
                .icon-close {
                    padding-left: 5px;
                    font-size: 18px;

                    &:hover {
                        color: var(--primary-color);
                    }
                }
            }

            &.active {
                &:hover {
                    .icon-close {
                        color: var(--primary-color);
                    }
                }

                border: 1px solid var(--primary-color);
            }
        }
    }
}
</style>
