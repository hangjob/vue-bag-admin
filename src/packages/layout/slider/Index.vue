<template>
    <a-drawer
        :closable="false"
        :visible="visible"
        :mask="mask"
        placement="left"
        :width="width"
        wrapClassName="drawer"
        :getContainer="false"
        @close="close"
    >
        <template #title></template>
        <div class="slider-container">
            <div class="left-slider">
                <div class="left-slider-logo">
                    {{ logoTitle }}
                </div>
                <div class="scroll">
                    <MenuSlider/>
                </div>
            </div>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import {computed, defineComponent} from 'vue'
import MenuSlider from './MenuSlider'
import {useStore} from 'vuex'


export default defineComponent({
    name: 'Slider',
    components: {
        MenuSlider,
    },
    setup() {
        const store = useStore()
        const app = store.state.app
        const mask = computed(() => app.themeConfig.floatingMenu)
        const visible = computed(() => {
            return mask.value ? app.floatingVisible : true
        })
        const width = computed(() => {
            let menuMinWidth = 80 // 菜单最小宽度
            if (!app.collapsed || app.themeConfig.floatingMenu) {
                menuMinWidth = app.themeConfig.menuMaxWidth
            }
            return menuMinWidth
        })

        const logoTitle = computed(() => width.value === 80 ? 'admin' : 'vue-bag-admin')

        const close = () => {
            store.commit('app/updateFloatingVisible', !store.getters['app/getFloatingVisible'])
        }

        return {
            width,
            visible,
            mask,
            close,
            logoTitle,
        }
    },
})
</script>
<style lang="less" scoped>
.slider {
    &-container {
        .left-slider {
            .left-slider-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80px;
                cursor: pointer;
                background-color: #2f3447;
                color: #ffffff;
                font-size: 25px;
                font-weight: bold;
            }
        }
    }
}
</style>
<style lang="less">
.drawer {
    z-index: 1;

    .ant-drawer-body {
        padding: 0;
    }

    &.ant-drawer-open {
        .ant-drawer-content-wrapper {
            transition: all 0.3s;
            box-shadow: none;
        }
    }
}
</style>
