<template>
    <a-layout-content class="layout-container">
        <div v-if="routerView" class="layout-container-view">
            <router-view v-slot="{ Component, route }">
                <transition :name="compData.transitionName">
                    <keep-alive :max="10" :include="caches">
                        <div class="layout-container-view-content scroll" :key="route.name">
                            <component :is="Component" />
                        </div>
                    </keep-alive>
                </transition>
            </router-view>
        </div>
    </a-layout-content>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch, inject, nextTick, reactive } from 'vue'
import { NProgress } from '@/packages/plugin/nprogress'
import appPinia from '@/packages/pinia/app'
import { onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
    setup() {
        const appStore = appPinia()
        
        const compData = reactive({
            transitionName: '',
        })
        
        onBeforeRouteUpdate((to, from) => {
            if (to.path !== from.path) {
                compData.transitionName = 'slide-right'
            } else {
                compData.transitionName = 'slide-left'
            }
        })
        
        const $mitt: any = inject('$mitt')
        const routerView = ref(true)
        
        $mitt.on('reload-router-view', () => {
            if (!NProgress.status) {
                NProgress.start()
                routerView.value = false
                nextTick(() => {
                    routerView.value = true
                    NProgress.done()
                })
            }
        })
        
        /**
         * keep-live 缓存
         */
        const caches = computed(() => {
            return appStore.tabs.filter((item: any) => {
                return item.keepAlive === true
            }).map((item: any) => {
                return item.path.substring(1, item.path.length).replace(/\//g, '-')
            })
        })
        
        return {
            caches,
            routerView,
            compData,
        }
    },
})
</script>
<style lang="less" scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
}

.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.layout-container {
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    
    &-view {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        
        &-content {
            overflow: hidden auto;
            position: relative;
            z-index: 100;
            height: 100%;
            padding: 10px;
            border-radius: 3px;
            box-sizing: border-box;
            //background-color: #f7f7f7;
        }
    }
}
</style>
