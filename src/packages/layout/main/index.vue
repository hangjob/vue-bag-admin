<template>
    <div class="main bag-scroll">
        <router-view  v-slot="{ Component }" v-if="isRoad">
            <transition
                mode="out-in"
                :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
            >
                <keep-alive v-if="app.userSetting.keepAlive" :max="30" :include="caches">
                    <component :is="Component"/>
                </keep-alive>
                <component v-else :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>
<script lang="ts">
import {computed, defineComponent, inject, nextTick, ref} from "vue"
import appStore from "@/packages/pinia/app.ts"
import {animations} from "@/packages/config/map.ts"
import NProgress from "nprogress"

export default defineComponent({
    setup() {
        const app = appStore()
        const $mitt: any = inject("$mitt")
        const isRoad = ref(true)
        const caches = computed(() => {
            // 缓存生效需要再页面中定义组件的name
            return (app.allMenus.filter((item) => item.keepAlive)).map((item) => item.name)
        })
        $mitt.on("onReload", () => {
            if (!NProgress.status) {
                NProgress.start()
                isRoad.value = false
                nextTick(() => {
                    isRoad.value = true
                    NProgress.done()
                })
            }
        })
        const enterActiveClass = computed(() => {
            let item = animations.find((item) => app.userSetting.animation === item.value)
            return [item.prefix, item.value].join(" ")
        })
        const leaveActiveClass = computed(() => {
            let item = animations.find((item) => app.userSetting.animation === item.value)
            return [item.prefix, item.out].join(" ")
        })

        return {
            app,
            enterActiveClass,
            leaveActiveClass,
            isRoad,
            caches
        }
    }
})
</script>
<style lang="less" scoped>
.main{
    padding: 8px;
    overflow-y: scroll;
    height: calc(100% - 40px);
}
</style>
