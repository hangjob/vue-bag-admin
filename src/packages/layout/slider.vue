<template>
    <div class="slider-container" :class="layoutSliderClassName">
        <div class="left-slider">
            <div class="left-slider-logo">
                <!--            YXS-ADMIN-->
            </div>
            <div class="left-slider-menu scroll">
                <YxsMenuSlider/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import YxsMenuSlider from '@/packages/layout/components/menu'
import {themeHook} from '@/packages/hook'

export default defineComponent({
    name: 'Slider',
    components: {
        YxsMenuSlider
    },
    setup() {
        const {layoutSliderClassName} = themeHook()
        return {
            layoutSliderClassName
        }
    }
})
</script>
<style lang="less" scoped>
.slider-container {
    position: fixed;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #ffffff;
    transition: all 0.4s;
}

.slider-is-collapse {
    width: 80px;
    border-right: 0;
}

.left-slider {
    display: flex;
    flex-direction: column;
    height: calc(100% - 34px);

    .left-slider-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        cursor: pointer;
        background-color: #2f3447;
        color: #ffffff;
        font-size: 28px;
        font-weight: bold;
    }

    .left-slider-menu {
        overflow: hidden auto;
        flex: 1;


        ::v-deep ul {
            border-right: none;
        }
    }
}


.slider-is-collapse-floating {
    position: absolute;
    left: 0;
    z-index: 9999;
    transition: transform .3s cubic-bezier(.7, .3, .1, 1), box-shadow .3s cubic-bezier(.7, .3, .1, 1);
    transform: translate(-100%);
}

</style>
