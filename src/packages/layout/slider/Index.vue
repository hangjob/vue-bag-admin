<template>
    <a-layout-sider theme="light" :width="compData.width" v-model:collapsed="appStore.bagConfig.collapsed" collapsible>
        <div class="logo">
            <template v-if="compData.variableTitle() === 'comp'">
                <component :is="compData.title"></component>
            </template>
            <template v-else>
                <template v-if="appStore.bagConfig.collapsed">
                    {{ compData.subhead }}
                </template>
                <template v-else-if="compData.variableTitle() === 'http'">
                    <img id="bag-logo-img" :src="compData.title" alt="">
                </template>
                <template v-else>
                    {{ compData.title }}
                </template>
            </template>
        </div>
        <div class="scroll">
            <MenuSlider />
        </div>
    </a-layout-sider>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, isVNode } from 'vue'
import appPinia from '@/packages/pinia/app'
import MenuSlider from './MenuSlider'
import { utils } from 'pm-utils'

export default defineComponent({
    name: 'Slider',
    components: {
        MenuSlider,
    },
    setup() {
        const appStore = appPinia()
        const { title, subhead } = appStore.configApp.webSite
        const compData = reactive({
            title,
            width: 0,
            subhead,
            variableTitle: () => {
                if (utils.checkURL(title)) {
                    return 'http'
                }
                if (utils.dataType(title) === 'string') {
                    return 'str'
                }
                return 'comp'
            },
        })
        console.log(compData.variableTitle(),title)
        compData.width = appStore.bagConfig.collapsed ? 80 : 250
        return {
            compData,
            appStore,
        }
    },
})
</script>
<style lang="less" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;
    background-color: #2f3447;
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    
    img {
        width: 100%;
        height: 100%;
    }
}

.scroll {
    overflow-y: scroll;
    height: calc(100% - 80px);
}
</style>
