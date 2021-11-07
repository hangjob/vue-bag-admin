<template>
    <a-layout-content class="layout-container">
        <div class="layout-container-view">
            <div class="layout-container-view-content scroll">
                <router-view v-slot="{ Component, route }">
                    <keep-alive>
                        <component :is="Component"/>
                    </keep-alive>
                </router-view>
<!--                <component-->
<!--                    v-for="item in hasOpenComponentsArr"-->
<!--                    :key="item.id"-->
<!--                    :is="item.name"-->
<!--                    v-show="$route.path === item.path"-->
<!--                ></component>-->
            </div>
        </div>
    </a-layout-content>
</template>
<script lang="ts">
import {defineComponent, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from "vuex";
import {findChildrenDepth} from "@/packages/utils/lodash";

export default defineComponent({
    setup() {
        const caches = ref([]);
        const store = useStore()

        const transition = ['slide-left', 'slide-right']
        const transitionName = ref(transition[0])
        const hasOpenComponentsArr = ref<Array<any>>([])

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

        // 获取iframe路由
        const componentsIframe = () => {
            const menuList = store.getters['app/menuList'];
            const iframeArr:Array<any> = []
            const getIframes = (arr: Array<any>) => {
                arr.some((o: any) => (o['iframe'] && o['iframe'] !== '') && (iframeArr.push(o)) || (getIframes(o['children'] || [])));
            }
            getIframes(menuList)

            iframeArr.forEach((item) => {
                // @ts-ignore
                __app__.component(item.path, import('@/packages/views/module/iframe/index.vue'));
            });

            hasOpenComponentsArr.value = iframeArr;
            console.log(hasOpenComponentsArr)
        }
        componentsIframe();

        return {
            caches,
            transitionName,
            hasOpenComponentsArr
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

        &-content {
            overflow: hidden auto;
            position: relative;
            z-index: 100;
            height: 100%;
            padding: 10px;
            border-radius: 3px;
            //background-color: #f7f7f7;
        }
    }
}
</style>