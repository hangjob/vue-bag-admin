<template>
    <n-el tag="div" class="scrollbar">
        <div @click="handleArrowScroll('prev')" class="arrow arrow-prev">
            <n-icon size="18" color="var(--primary-color)">
                <ChevronBackOutline/>
            </n-icon>
        </div>
        <template v-if="app.userSetting.tabsStyle === 'tact'">
            <div class="tact tabs" ref="tabsRefs">
                <template v-if="app.getTabs.length">
                    <n-el @click="compData.handleActionRouter(item)" v-for="(item,idx) in app.getTabs" :key="idx" tag="div"
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
        </template>
        <template v-else>
            <div class="sutra tabs" ref="tabsRefs">
                <template v-if="app.getTabs.length">
                    <n-el @click="compData.handleActionRouter(item)" v-for="(item,idx) in app.getTabs" :key="idx" tag="div"
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
        </template>
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
            >
                <n-icon size="18">
                    <SmileOutlined/>
                </n-icon>
            </n-dropdown>
        </div>
    </n-el>
</template>
<script lang="ts">
import {defineComponent, reactive, inject, ref, computed} from "vue"
import appStore from "@/packages/pinia/app.ts"
import {tabsMore} from "@/packages/config/map.ts"
import {useRouter} from "vue-router"

export default defineComponent({

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
            } else {
                item.disabled = computed(() => !(app.getTabs.length > 1))
                item.props = {
                    onClick: () => {
                        compData.handleColseRouter(app.currentRouter, item.zt)
                    }
                }
            }
        })
        const compData = reactive({
            tabsMore,
            isClose() {
                return app.getTabs.length > 1
            },
            handleActionRouter(item) {
                router.push(item.meta.tempPath || item.meta.path)
            },
            handleColseRouter(item, zt) {
                if (app.getTabs.length <= 1) {
                    return false
                }
                const idx = app.getTabs.findIndex((k) => k.meta.id === item.meta.id)
                if (zt === "l") {
                    app.getTabs.splice(0, idx)
                } else if (zt === "r") {
                    app.getTabs.splice(idx + 1, app.getTabs.length)
                } else if (zt === "c") {
                    app.getTabs.splice(0, idx)
                    app.getTabs.splice(1, app.getTabs.length)
                } else {
                    app.getTabs.splice(idx, 1)
                    if (app.currentRouter.meta.id === item.meta.id) {
                        const current = app.getTabs[idx - 1 <= -1 ? 0 : idx - 1]
                        if (current) {
                            compData.handleActionRouter(current)
                        }
                    }
                }
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
    display: flex;
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
        border-bottom: 1px solid var(--divider-color);

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

    .sutra {
        padding: 3px;
        border-bottom: 1px solid var(--divider-color);

        .tabs-item {
            border-radius: 3px;
            border: 1px solid var(--border-color);
            background-color: var(--card-color);
        }
    }

    .tact {
        padding-top: 3px;
        background-color: var(--tab-color);
        box-sizing: border-box;
        border-bottom: 1px solid var(--divider-color);

        .tabs-item {
            background-color: var(--n-color);
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;

            &.active {
                border: none;
                color: var(--primary-color);
            }

            &.active::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                bottom: 0px;
                left: 0;
                background-color: var(--primary-color);
            }
        }
    }

    .tabs {
        position: relative;
        transition: transform .5s ease-in-out;
        white-space: nowrap;
        display: flex;
        height: 40px;
        flex: 1;
        float: left;
        box-sizing: border-box;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        background-color: var(--table-header-color);

        &::-webkit-scrollbar {
            display: none;
        }

        &-item {
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            padding: 0 8px;
            box-sizing: border-box;
            transition: all .3s;
            position: relative;

            span{
                font-size: var(--font-size);
            }

            &:first-child {
                margin-left: 10px;
            }

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
