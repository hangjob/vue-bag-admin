<template>
    <a-layout-content class="layout-container">
        <div class="layout-container-view">
            <div class="layout-container-view-content scroll">
                <router-view v-slot="{ Component ,route }">
                    <transition :name="transitionName">
                        <keep-alive :include="caches">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div>
    </a-layout-content>
</template>
<script lang="ts">
    import {defineComponent, ref, watch} from 'vue'
    import {useRoute} from 'vue-router'

    export default defineComponent({
        setup() {
            const caches = ref([]);

            const transition = ['slide-left', 'slide-right']
            let transitionName = ref(transition[0])

            const route = useRoute()

            watch(
                () => route.path,
                (newIndex, oldIndex) => {
                    if (newIndex > oldIndex) {
                        transitionName.value = transition[0]
                    } else {
                        transitionName.value = transition[1]
                    }
                }
            )

            return {
                caches,
                transitionName
            }
        }
    })
</script>
<style lang="less" scoped>
    .layout-container {
        width: 100%;
        box-sizing: border-box;
        flex: 1;
        overflow: hidden;

        &-view {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 0 10px;

            &-content {
                overflow: hidden auto;
                position: relative;
                z-index: 100;
                height: 100%;
                padding: 10px;
                border-radius: 3px;
                background-color: #ffffff;
            }
        }
    }
</style>