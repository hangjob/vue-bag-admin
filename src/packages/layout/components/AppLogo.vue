<template>
    <div class="header-logo" :style="compData.logoStyle">
        <template v-if="collapsed">
            <!--                        <img src="@/packages/assets/logo-min.png" alt="">-->
            <span>品茗</span>
        </template>
        <template v-else>
            <!--                        <img src="@/packages/assets/logo-min.png" alt="">-->
            <span>品茗科技</span>
        </template>
    </div>
</template>
<script lang="ts">
import {computed, reactive,defineComponent} from "vue"

export default defineComponent({
    props:{
        collapsed: {
            type: Boolean,
            required: false
        }
    },
    setup(props){
        const compData = reactive({
            // eslint-disable-next-line vue/return-in-computed-property
            logoStyle: computed(() => {
                if (props.collapsed) {
                    return {width: "64px"}
                }
            })
        })
        return {
            compData
        }
    }
})
</script>
<style lang="less" scoped>
.header-logo {
    display: flex;
    align-items: center;
    width: 240px;
    justify-content: center;
    border-right: 1px solid var(--n-border-color);
    flex-shrink: 0;
    transition: all 0.3s;
    height: 50px;
    border-bottom: 1px solid var(--n-border-color);
    box-sizing: border-box;

    img {
        max-width: 100%;
        height: 32px;
    }

    span {
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        height: 32px;
        line-height: 32px;
        margin-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
