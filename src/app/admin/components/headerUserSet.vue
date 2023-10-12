<template>
    <div class="user-set">
        <template v-if="!app.browser.sm">
            <n-el tag="div" class="set-item">
                <n-switch @update:value="compData.handleDarkTheme" v-model:value="darkTheme" size="medium">
                    <template #checked-icon>
                        <n-icon :size="14">
                            <MoonOutline/>
                        </n-icon>
                    </template>
                    <template #unchecked-icon>
                        <n-icon :size="14">
                            <SunnyOutline/>
                        </n-icon>
                    </template>
                </n-switch>
            </n-el>
        </template>
    </div>
</template>
<script lang="ts">
import {defineComponent, useAttrs} from "vue"

export default defineComponent({
    setup() {
        const attrs = useAttrs()
        return {
            app: attrs.app,
            compData: attrs.compData,
            darkTheme: attrs.darkTheme,
        }
    }
})
</script>

<style lang="less" scoped>
.user-set {
    display: flex;
    height: 50px;
    flex-shrink: 0;
    margin-left: 50px;
    align-items: center;

    .set-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 12px;
        padding-right: 12px;
        cursor: pointer;
        flex-shrink: 0;

        .n-icon {
            outline: none;

            svg {
                outline: none;
            }
        }

        &.hover-color {
            &:last-of-type {
                padding-right: 2px;
            }

            &:hover {
                color: var(--primary-color);
            }
        }
    }
}
</style>
